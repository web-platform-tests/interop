import { Octokit } from "octokit";
import { features } from "web-features";
import yargs from "yargs";

const GITHUB_API_VERSION = "2022-11-28";
// This is used as a hidden HTML comment when posting comments to GitHub issues.
// This way, we can retrieve the comment later, and update it if needed.
const HIDDEN_COMMENT_IN_ISSUE = "<!-- interop-proposals-bot web-features update -->";
// The label which the issue must have for the bot to process it.
const REQUIRED_LABEL = "focus-area-proposal";

const argv = yargs(process.argv)
  .option("number", {
    alias: "n",
    type: "number",
    default: false,
    describe: "The issue number to process",
  })
  .option("repo", {
    alias: "r",
    type: "string",
    describe: "The owner and repository name. For example: web-platform-tests/interop",
  }).argv;

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

function escapeFeatureName(feature) {
  // Escape the feature name for use in HTML.
  return feature.name.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

async function getReferencedIssue() {
  const response = await octokit.request(`GET /repos/${argv.repo}/issues/${argv.number}`,);
  return response.data;
}

function gatherUrlsFromIssue(issueBody) {
  const urls = issueBody.match(/https?:\/\/[^)\s]+/g) || [];
  return urls.map(url => new URL(url));
}

// Identify web-features based on spec URLs in the issue body.
function gatherFeaturesFromSpecUrls(urls) {
  const gatheredFeatures = new Set();

  for (const url of urls) {
    for (const id in features) {
      const feature = features[id];
      const specUrls = (Array.isArray(feature.spec) ? feature.spec : [feature.spec]).map(url => new URL(url));

      if (specUrls.some(specUrl => {
        return specUrl.hostname === url.hostname &&
          specUrl.pathname === url.pathname &&
          (specUrl.hash ? specUrl.hash === url.hash : true);
      })) {
        gatheredFeatures.add(id)
      }
    }
  }

  return gatheredFeatures;
}

// Identify web-features based on explorer URLs in the issue body.
function gatherFeaturesFromExplorerUrls(urls) {
  const gatheredFeatures = new Set();

  for (const url of urls) {
    if (url.hostname !== "web-platform-dx.github.io" || !url.pathname.startsWith("/web-features-explorer/features/")) {
      continue;
    }

    const candidateId = url.pathname.substring(url.pathname.indexOf("features/") + 9).replace("/", "").replace(".json", "");
    if (features[candidateId]) {
      gatheredFeatures.add(candidateId);
    }
  }

  return gatheredFeatures;
}

// Identify web-features based on WPT URLs in the issue body.
function gatherFeaturesFromWPTUrls(urls) {
  const gatheredFeatures = new Set();

  for (const url of urls) {
    if (url.hostname !== "wpt.fyi" || !url.pathname.startsWith("/results/") || !url.searchParams.has("q")) {
      continue;
    }

    const query = url.searchParams.get("q");
    const match = query.match(/feature:([a-z0-9-]+)/);
    if (match && match[1] && features[match[1]]) {
      gatheredFeatures.add(match[1]);
    }
  }

  return gatheredFeatures;
}

// Identify web-features by checking for explicit mentions in the issue body.
function gatherFeaturesFromExplicitMentions(issueBody) {
  const gatheredFeatures = new Set();

  // Look for `web-features: <feature-id>` or `web-feature: <feature-id>` in the issue body.
  // There might be spaces between the colon and the feature ID. And there might be spaces after the ID, or a period, or end of line.
  const explicitMentions = issueBody.match(/web-features?:\s*([a-z0-9-]+)/gi) || [];
  for (const mention of explicitMentions) {
    const match = mention.match(/web-features?:\s*([a-z0-9-]+)/i);
    if (match && match[1] && features[match[1]]) {
      gatheredFeatures.add(match[1]);
    }
  }

  // Also look for an h3 markdown section like:
  // ### web-feature
  // <feature-id>
  // The bug template includes this section. Note that there may be empty lines and spaces before or after the id.
  const sectionMentions = issueBody.match(/###\s*web-features?\s*([\r\n]+[ \t]*[a-z0-9-]+)+/gi) || [];
  for (const section of sectionMentions) {
    const lines = section.split(/[\r\n]+/).map(line => line.trim()).filter(line => line && !line.startsWith("###"));
    for (const line of lines) {
      if (features[line]) {
        gatheredFeatures.add(line);
      }
    }
  }

  return gatheredFeatures;
}

// Given a GitHub issue, find the web-features that are referenced in the issue body.
function findFeaturesInIssue(issue) {
  const urls = gatherUrlsFromIssue(issue.body);

  const specFeatures = gatherFeaturesFromSpecUrls(urls);
  const wptFeatures = gatherFeaturesFromWPTUrls(urls);
  const explorerFeatures = gatherFeaturesFromExplorerUrls(urls);
  const explicitWebFeatureMentions = gatherFeaturesFromExplicitMentions(issue.body);

  // Explorer URLs take precedence over spec and WPT URLs.
  // And explicit mentions take precedence over everything else.
  if (explicitWebFeatureMentions.size > 0) {
    return [...explicitWebFeatureMentions];
  }
  if (explorerFeatures.size > 0) {
    // If we have explorer features, we don't need to combine them with spec and WPT features.
    return [...explorerFeatures];
  }

  return [...new Set([...specFeatures, ...wptFeatures])];
}

// Given a feature id, retrieve the feature's data.
// We use the web-features-explorer's JSON files to get the full data, which includes both
// the data that comes from the web-features project and the additional data that the explorer augments it with.
async function getFeatureData(id) {
  console.log(`Getting data for feature ${id}`);

  try {
    const response = await fetch(`https://web-platform-dx.github.io/web-features-explorer/features/${id}.json`);
    return await response.json();
  } catch (error) {
    console.error(`Error fetching the feature data for ${id}:`, error);
    return null;
  }
}

function getBaselineStatusAsMarkdown(feature) {
  if (feature.status && feature.status.baseline === "high") {
    return "Widely Available";
  } else if (feature.status && feature.status.baseline === "low") {
    return "Newly Available";
  }
  return "Limited Availability";
}

function getDocsAsMarkdown(feature) {
  if (!feature.mdnUrls.length) {
    return "";
  }

  const docs = feature.mdnUrls.map(url => `[${url.title}](${url.url})`).join(", ");
  return `* **Docs:** ${docs}\n`;
}

function getStandardPositionsAsMarkdown(feature) {
  if (!feature.standardPositions.mozilla.url && !feature.standardPositions.webkit.url) {
    return "";
  }

  let pos = "* **Standard positions:** ";

  if (feature.standardPositions.mozilla.url) {
    pos += `[Mozilla](${feature.standardPositions.mozilla.url})`;
  }
  if (feature.standardPositions.webkit.url) {
    pos += (pos ? ", " : "") + `[WebKit](${feature.standardPositions.webkit.url})`;
  }

  return pos + "\n";
}

function getUseCounterAsMarkdown(feature) {
  if (!feature.useCounters.chromeStatusUrl) {
    return "";
  }
  return `* **Chrome use counter:** [chromestatus.com](${feature.useCounters.chromeStatusUrl})\n`;
}

function getSurveysAsMarkdown(feature) {
  if (!feature.stateOfSurveys || !feature.stateOfSurveys.length) {
    return "";
  }

  const surveys = feature.stateOfSurveys.map(survey => {
    return `[${survey.name} (${survey.question} question)](${survey.link})`;
  }).join(", ");

  return `* **State of CSS/JS/HTML surveys:** ${surveys}\n`;
}

function getPreviousInteropsAsMarkdown(feature) {
  if (!feature.interop.length) {
    return "";
  }

  const interops = feature.interop.map(i => {
    return `[${i.year}](https://wpt.fyi/interop-2024?feature=${i.label})`;
  }).join(", ");

  return `* **Included in previous Interop iterations:** ${interops}\n`
}

function getWPTLinkAsMarkdown(feature) {
  if (!feature.wpt) {
    return "";
  }
  return `* **WPT tests:** [wpt.fyi/results/?q=feature:${feature.id}](https://wpt.fyi/results/?q=feature:${feature.id})\n`;
}

// Generate the markdown content for the given feature.
function getMarkdownContentForFeature(feature) {
  let str = `### Feature **${escapeFeatureName(feature)}**\n\n`;
  str += `* **ID:** ${feature.id}\n`;
  str += `* **Name:** ${escapeFeatureName(feature)}\n`;
  str += `* **Description:** ${feature.description_html}\n`;
  str += `* **Baseline status:** ${getBaselineStatusAsMarkdown(feature)}\n`;
  str += getDocsAsMarkdown(feature);
  str += getStandardPositionsAsMarkdown(feature);
  str += getUseCounterAsMarkdown(feature);
  str += getSurveysAsMarkdown(feature);
  str += getPreviousInteropsAsMarkdown(feature);
  str += getWPTLinkAsMarkdown(feature);
  str += `* **More information:** See the [web-features explorer](https://web-platform-dx.github.io/web-features-explorer/features/${feature.id}/)\n\n`;

  return str;
}

// Post a new comment with the given markdown content or update an existing comment if it already exists.
async function postOrUpdateComment(issueNumber, markdown) {
  // Retrieve existing comments to check if we already posted a comment.
  const commentsResponse = await octokit.request(`GET /repos/${argv.repo}/issues/${issueNumber}/comments`, {
    headers: {
      "X-GitHub-Api-Version": GITHUB_API_VERSION
    }
  });
  const existingComment = commentsResponse.data.find(comment => comment.body.includes(HIDDEN_COMMENT_IN_ISSUE));

  if (existingComment) {
    // The bot already posted a comment. Update it.
    console.log(`Updating existing comment #${existingComment.id}...`);
    await octokit.request(`PATCH /repos/${argv.repo}/issues/comments/${existingComment.id}`, {
      body: markdown,
      headers: {
        "X-GitHub-Api-Version": GITHUB_API_VERSION
      }
    });
  } else {
    // Post a new comment.
    console.log(`Posting a new comment...`);
    await octokit.request(`POST /repos/${argv.repo}/issues/${issueNumber}/comments`, {
      body: markdown,
      headers: {
        "X-GitHub-Api-Version": GITHUB_API_VERSION
      }
    });
  }
}

// The main entry point to the script.
async function main() {
  const issue = await getReferencedIssue();

  if (!issue.labels.some(label => label.name === REQUIRED_LABEL)) {
    console.log(`The issue does not have the required label "${REQUIRED_LABEL}". Exiting.`);
    return;
  }

  console.log(`Processing issue #${issue.number}: "${issue.title}"`);
  const featureIds = findFeaturesInIssue(issue);
  const features = await Promise.all(featureIds.map(id => getFeatureData(id)));

  let content = "_This comment was automatically generated based on the information you provided. Please don't edit it._\n\n";

  if (features.length === 0) {
    console.log("Could not find any matching features the issue body.");

    content += "No web features (from the [web-features project](https://github.com/web-platform-dx/web-features/)) were found in your proposal. If your proposal doesn't correspond to a web feature, that is fine.\\\n";
    content += "Otherwise, please update your initial comment to include `web-features: <feature-id>`.\n";
    content += "To find feature IDs, use the [web-features explorer](https://web-platform-dx.github.io/web-features-explorer/).\n\n";
  } else {
    console.log(`Found ${features.length} matching feature(s):`);
    console.log(features.map(f => `- ${f.id}`).join("\n"));
    
    content += `Below is additional information about the web feature${features.length > 1 ? "s" : ""} (from the [web-features project](https://github.com/web-platform-dx/web-features/)) which ${features.length > 1 ? "are" : "is"} referenced in your proposal.\\\n`;
    content += "If this doesn't accurately correspond to your proposal, please update your initial comment to include `web-features: <feature-id>`.\n";
    content += "To find feature IDs, use the [web-features explorer](https://web-platform-dx.github.io/web-features-explorer/).\n\n";

    for (const feature of features) {
      const featureContent = getMarkdownContentForFeature(feature);

      if (features.length > 1) {
        content += `<details>\n`;
        content += `<summary>${escapeFeatureName(feature)}</summary>\n\n`;
        content += featureContent;
        content += `</details>\n\n`;
      } else {
        content += featureContent;
      }
    }
  }

  // Add the hidden comment to find this comment again later.
  content += `\n${HIDDEN_COMMENT_IN_ISSUE}`;

  await postOrUpdateComment(issue.number, content);
}

main();
