import { Octokit } from "octokit";
import { features } from "web-features";
import yargs from "yargs";

// This is used as a hidden HTML comment when posting comments to GitHub issues.
// This way, we can retrieve the comment later, and update it if needed.
const HIDDEN_COMMENT_IN_ISSUE = "<!-- interop-proposals-bot web-features update -->";
const GITHUB_API_VERSION = "2022-11-28";

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

// Identify web-features based on spec URLs in the issue body.
function gatherFeaturesFromSpecUrls(issueBody, gatheredFeatures) {
  // Find URLs in the issue body.
  const urls = issueBody.match(/https?:\/\/[^)\s]+/g) || [];

  // Filter out known non-spec URLs.
  const specUrls = urls
    .filter(url => {
      // Filter out known non-spec URLs.
      return !url.includes("bugzilla") &&
        !url.includes("github.com") &&
        !url.includes("webkit.org") &&
        !url.includes("developer.mozilla.org") &&
        !url.includes("developer.chrome.com") &&
        !url.includes("wpt.fyi") &&
        !url.includes("css-tricks") &&
        !url.includes("webstatus.dev") &&
        !url.includes("learn.microsoft.com") &&
        !url.includes("chromium.org");
    }).map(url => {
      // Separate the # from the URL if it exists.
      return [url, url.split("#")[0]];
    });

  // Iterate over web features to find spec URL matches.
  for (const [candidateUrl, candidateUrlNoAnchor] of specUrls) {
    for (const id in features) {
      const feature = features[id];
      const featureSpecs = Array.isArray(feature.spec) ? feature.spec : [feature.spec];
      if (featureSpecs.some(spec => spec === candidateUrl || spec === candidateUrlNoAnchor)) {
        gatheredFeatures.add(id)
      }
    }
  }
}

// Identify web-features based on explorer URLs in the issue body.
function gatherFeaturesFromExplorerUrls(issueBody, gatheredFeatures) {
  // https://web-platform-dx.github.io/web-features-explorer/features/<feature-id>
  let urls = issueBody.match(/https?:\/\/web-platform-dx.github.io\/web-features-explorer\/features\/[a-z0-9-]+/g) || [];
  urls = urls.map(url => url.split("#")[0]);

  for (const url of urls) {
    // Extract the feature ID from the URL.
    const match = url.match(/features\/([a-z0-9-]+)/);
    if (match && match[1]) {
      const id = match[1];
      const feature = features[id];
      if (feature) {
        gatheredFeatures.add(id);
      }
    }
  }
}

// Identify web-features based on WPT URLs in the issue body.
function gatherFeaturesFromWPTUrls(issueBody, gatheredFeatures) {
  // https://wpt.fyi/results/?q=feature:<feature-id>
  let urls = issueBody.match(/https?:\/\/wpt\.fyi\/results\/\?q=feature:[a-z0-9-]+/g) || [];
  urls = urls.map(url => url.split("#")[0]);

  for (const url of urls) {
    // Extract the feature ID from the URL.
    const match = url.match(/feature:([a-z0-9-]+)/);
    if (match && match[1]) {
      const id = match[1];
      const feature = features[id];
      if (feature) {
        gatheredFeatures.add(id);
      }
    }
  }
}

// Given a GitHub issue, find the web-features that are referenced in the issue body.
// For now, we only look for URLs that match the web-features specifications.
function findFeaturesInIssue(issue) {
  const features = new Set();
  
  gatherFeaturesFromSpecUrls(issue.body, features);
  gatherFeaturesFromExplorerUrls(issue.body, features);
  gatherFeaturesFromWPTUrls(issue.body, features);
  // TODO: Match on other things too:
  // - web-features ID in the body of the issue, which might be there since the issue template asks for it.
  // - MDN URLs
  // - vendor positions
  // - etc.
  // Maybe investigate a weighting system to prioritize features based on the number of matches.

  return [...features];
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

function printBaselineStatus(feature) {
  if (feature.status && feature.status.baseline === "high") {
    return "Widely Available";
  } else if (feature.status && feature.status.baseline === "low") {
    return "Newly Available";
  }
  return "Limited Availability";
}

function printDocs(feature) {
  if (!feature.mdnUrls.length) {
    return "";
  }

  const docs = feature.mdnUrls.map(url => `[${url.title}](${url.url})`).join(", ");
  return `* **Docs:** ${docs}\n`;
}

function printStandardPositions(feature) {
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

function printUseCounter(feature) {
  if (!feature.useCounters.chromeStatusUrl) {
    return "";
  }
  return `* **Chrome use counter:** [chromestatus.com](${feature.useCounters.chromeStatusUrl})\n`;
}

function printSurveys(feature) {
  if (!feature.stateOfSurveys || !feature.stateOfSurveys.length) {
    return "";
  }

  const surveys = feature.stateOfSurveys.map(survey => {
    return `[${survey.name} (${survey.question} question)](${survey.link})`;
  }).join(", ");

  return `* **State of CSS/JS/HTML surveys:** ${surveys}\n`;
}

function printPreviousInterops(feature) {
  if (!feature.interop.length) {
    return "";
  }

  const interops = feature.interop.map(i => {
    return `[${i.year}](https://wpt.fyi/interop-2024?feature=${i.label})`;
  }).join(", ");

  return `* **Included in previous Interop iterations:** ${interops}\n`
}

function printWPTLink(feature) {
  if (!feature.wptLink) {
    return "";
  }
  return `* **WPT tests:** [wpt.fyi](https://wpt.fyi/results/?q=feature:${feature.id})\n`;
}

// Generate the markdown content for the given feature.
function getMarkdownContentForFeature(feature) {
  let str = `### Feature **${escapeFeatureName(feature)}**\n\n`;
  str += `* **ID:** ${feature.id}\n`;
  str += `* **Name:** ${escapeFeatureName(feature)}\n`;
  str += `* **Description:** ${feature.description_html}\n`;
  str += `* **Baseline status:** ${printBaselineStatus(feature)}\n`;
  str += printDocs(feature);
  str += printStandardPositions(feature);
  str += printUseCounter(feature);
  str += printSurveys(feature);
  str += printPreviousInterops(feature);
  str += printWPTLink(feature);
  str += `* **More information:** See the [web-features explorer](https://web-platform-dx.github.io/web-features-explorer/features/${feature.id}/).\n\n`;

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

  console.log(`Processing issue #${issue.number}: "${issue.title}"`);
  const featureIds = findFeaturesInIssue(issue);
  const features = await Promise.all(featureIds.map(id => getFeatureData(id)));

  if (features.length === 0) {
    console.log("Could not find any matching features the issue body.");
    return;
  }

  console.log(`Found ${features.length} matching feature(s):`);
  console.log(features.map(f => `- ${f.id}`).join("\n"));

  let content = "_This comment was automatically generated based on the information you provided. Please don't edit it._\n\n";
  content += `Below is additional information about the web feature${features.length > 1 ? "s" : ""} (from the [web-features project](https://github.com/web-platform-dx/web-features/)) which ${features.length > 1 ? "are" : "is"} referenced in your proposal.`;
  content += `This information might help motivate your focus area proposal.\n\n`;

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

  // Add the hidden comment to find this comment again later.
  content += `\n${HIDDEN_COMMENT_IN_ISSUE}`;

  await postOrUpdateComment(issue.number, content);
}

main();
