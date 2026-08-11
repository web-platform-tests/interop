import { pathToFileURL } from "node:url";
import { Octokit } from "octokit";
import { features as webFeatures } from "web-features";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const GITHUB_API_VERSION = "2022-11-28";
export const HIDDEN_COMMENT_IN_ISSUE = "<!-- interop-proposals-bot web-features update -->";
export const REQUIRED_LABEL = "focus-area-proposal";

function getGitHubHeaders() {
  return {
    "X-GitHub-Api-Version": GITHUB_API_VERSION,
  };
}

export function parseRepository(repository) {
  const [owner, repo, ...extra] = repository.split("/");
  if (!owner || !repo || extra.length > 0) {
    throw new Error(`Invalid repository "${repository}". Expected "owner/repository".`);
  }
  return { owner, repo };
}

function issueHasLabel(issue, labelName) {
  return issue.labels.some(label => (typeof label === "string" ? label : label.name) === labelName);
}

export function shouldProcessIssue(issue) {
  return issue.state === "open" && issueHasLabel(issue, REQUIRED_LABEL);
}

function escapeFeatureName(feature) {
  return feature.name.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function gatherUrlsFromIssue(issueBody) {
  const urls = issueBody.match(/https?:\/\/[^)\s]+/g) || [];
  return urls.flatMap(url => {
    try {
      return [new URL(url)];
    } catch {
      return [];
    }
  });
}

export function gatherFeaturesFromSpecUrls(urls, featureCatalog = webFeatures) {
  const gatheredFeatures = new Set();

  for (const url of urls) {
    for (const id in featureCatalog) {
      const feature = featureCatalog[id];
      const specUrls = (Array.isArray(feature.spec) ? feature.spec : [feature.spec])
        .filter(Boolean)
        .map(specUrl => new URL(specUrl));

      if (specUrls.some(specUrl => {
        return specUrl.hostname === url.hostname &&
          specUrl.pathname === url.pathname &&
          (specUrl.hash ? specUrl.hash === url.hash : true);
      })) {
        gatheredFeatures.add(id);
      }
    }
  }

  return gatheredFeatures;
}

export function gatherFeaturesFromExplorerUrls(urls, featureCatalog = webFeatures) {
  const gatheredFeatures = new Set();

  for (const url of urls) {
    if (url.hostname !== "web-platform-dx.github.io" || !url.pathname.startsWith("/web-features-explorer/features/")) {
      continue;
    }

    const candidateId = url.pathname.substring(url.pathname.indexOf("features/") + 9)
      .replace("/", "")
      .replace(".json", "");
    if (featureCatalog[candidateId]) {
      gatheredFeatures.add(candidateId);
    }
  }

  return gatheredFeatures;
}

export function gatherFeaturesFromWPTUrls(urls, featureCatalog = webFeatures) {
  const gatheredFeatures = new Set();

  for (const url of urls) {
    if (url.hostname !== "wpt.fyi" || !url.pathname.startsWith("/results/") || !url.searchParams.has("q")) {
      continue;
    }

    const query = url.searchParams.get("q");
    const match = query.match(/feature:([a-z0-9-]+)/);
    if (match?.[1] && featureCatalog[match[1]]) {
      gatheredFeatures.add(match[1]);
    }
  }

  return gatheredFeatures;
}

export function gatherFeaturesFromExplicitMentions(issueBody, featureCatalog = webFeatures) {
  const gatheredFeatures = new Set();

  const explicitMentions = issueBody.match(/web-features?:\s*([a-z0-9-]+)/gi) || [];
  for (const mention of explicitMentions) {
    const match = mention.match(/web-features?:\s*([a-z0-9-]+)/i);
    if (match?.[1] && featureCatalog[match[1]]) {
      gatheredFeatures.add(match[1]);
    }
  }

  const sectionMentions = issueBody.match(/###\s*web-features?\s*([\r\n]+[ \t]*[a-z0-9-]+)+/gi) || [];
  for (const section of sectionMentions) {
    const lines = section.split(/[\r\n]+/)
      .map(line => line.trim())
      .filter(line => line && !line.startsWith("###"));
    for (const line of lines) {
      if (featureCatalog[line]) {
        gatheredFeatures.add(line);
      }
    }
  }

  return gatheredFeatures;
}

export function findFeaturesInIssue(issue, featureCatalog = webFeatures) {
  const issueBody = issue.body || "";
  const urls = gatherUrlsFromIssue(issueBody);
  const specFeatures = gatherFeaturesFromSpecUrls(urls, featureCatalog);
  const wptFeatures = gatherFeaturesFromWPTUrls(urls, featureCatalog);
  const explorerFeatures = gatherFeaturesFromExplorerUrls(urls, featureCatalog);
  const explicitWebFeatureMentions = gatherFeaturesFromExplicitMentions(issueBody, featureCatalog);

  if (explicitWebFeatureMentions.size > 0) {
    return [...explicitWebFeatureMentions];
  }
  if (explorerFeatures.size > 0) {
    return [...explorerFeatures];
  }

  return [...new Set([...specFeatures, ...wptFeatures])];
}

export async function getFeatureData(id, fetchImpl = fetch) {
  console.log(`Getting data for feature ${id}`);

  const response = await fetchImpl(`https://web-platform-dx.github.io/web-features-explorer/features/${id}.json`);
  if (!response.ok) {
    throw new Error(`Could not fetch feature "${id}": HTTP ${response.status}`);
  }

  const feature = await response.json();
  if (!feature || feature.id !== id || !feature.name) {
    throw new Error(`Feature "${id}" returned malformed explorer data.`);
  }
  return feature;
}

function getBaselineStatusAsMarkdown(feature) {
  if (feature.status?.baseline === "high") {
    return "Widely Available";
  }
  if (feature.status?.baseline === "low") {
    return "Newly Available";
  }
  return "Limited Availability";
}

function getDocsAsMarkdown(feature) {
  if (!feature.mdnUrls?.length) {
    return "";
  }

  const docs = feature.mdnUrls.map(url => `[${url.title}](${url.url})`).join(", ");
  return `* **Docs:** ${docs}\n`;
}

function getStandardPositionsAsMarkdown(feature) {
  if (!feature.standardPositions?.length) {
    return "";
  }

  const positions = [];
  const vendorNames = {
    apple: "WebKit",
    mozilla: "Mozilla",
  };

  for (const { vendor, url, position, concerns = [] } of feature.standardPositions) {
    const vendorName = vendorNames[vendor] || vendor;
    const details = [
      position,
      concerns.length ? `concerns: ${concerns.join(", ")}` : "",
    ].filter(Boolean).join(", ");
    positions.push(`[${vendorName}](${url})${details ? ` (${details})` : ""}`);
  }

  return `* **Standard positions:** ${positions.join(", ")}\n`;
}

function getDeveloperSignalsAsMarkdown(feature) {
  if (!feature.developerSignals) {
    return "";
  }

  const useCaseCount = feature.useCases?.length || 0;
  const useCases = useCaseCount
    ? ` / ${useCaseCount} use case${useCaseCount === 1 ? "" : "s"}`
    : "";
  return `* **Developer signals:** ${feature.developerSignals.votes} votes${useCases} ([details](${feature.developerSignals.url}))\n`;
}

function getUseCounterAsMarkdown(feature) {
  const { percentageOfPageLoad, url } = feature.chromeUseCounters || {};
  if (!url) {
    return "";
  }

  const usage = Number.isFinite(percentageOfPageLoad)
    ? ` (~${(percentageOfPageLoad * 100).toFixed(3)}% of page loads)`
    : "";
  return `* **Chrome use counter:** [chromestatus.com](${url})${usage}\n`;
}

function getSurveysAsMarkdown(feature) {
  if (!feature.stateOfSurveys?.length) {
    return "";
  }

  const surveys = feature.stateOfSurveys.map(survey => {
    return `[${survey.name} (${survey.question} question)](${survey.url})`;
  }).join(", ");

  return `* **State of CSS/JS/HTML surveys:** ${surveys}\n`;
}

function getPreviousInteropsAsMarkdown(feature) {
  if (!feature.interop?.length) {
    return "";
  }

  const interops = feature.interop.map(i => {
    return `[${i.year}](${i.url})`;
  }).join(", ");

  return `* **Included in previous Interop iterations:** ${interops}\n`;
}

function getWPTLinkAsMarkdown(feature) {
  if (!feature.wpt) {
    return "";
  }
  return `* **WPT tests:** [wpt.fyi results](${feature.wpt.url})\n`;
}

export function getMarkdownContentForFeature(feature) {
  let content = `### Feature **${escapeFeatureName(feature)}**\n\n`;
  content += `* **ID:** ${feature.id}\n`;
  content += `* **Name:** ${escapeFeatureName(feature)}\n`;
  content += `* **Description:** ${feature.description_html}\n`;
  content += `* **Baseline status:** ${getBaselineStatusAsMarkdown(feature)}\n`;
  content += getDocsAsMarkdown(feature);
  content += getStandardPositionsAsMarkdown(feature);
  content += getDeveloperSignalsAsMarkdown(feature);
  content += getUseCounterAsMarkdown(feature);
  content += getSurveysAsMarkdown(feature);
  content += getPreviousInteropsAsMarkdown(feature);
  content += getWPTLinkAsMarkdown(feature);
  content += `* **More information:** See the [web-features explorer](https://web-platform-dx.github.io/web-features-explorer/features/${feature.id}/)\n\n`;

  return content;
}

export function buildIssueComment(featureData) {
  let content = "_This comment was automatically generated based on the information you provided. Please don't edit it._\n\n";

  if (featureData.length === 0) {
    content += "No web features (from the [web-features project](https://github.com/web-platform-dx/web-features/)) were found in your proposal. If your proposal doesn't correspond to a web feature, that is fine.\\\n";
    content += "Otherwise, please update your initial comment to include `web-features: <feature-id>`.\n";
    content += "To find feature IDs, use the [web-features explorer](https://web-platform-dx.github.io/web-features-explorer/).\n\n";
  } else {
    content += `Below is additional information about the web feature${featureData.length > 1 ? "s" : ""} (from the [web-features project](https://github.com/web-platform-dx/web-features/)) which ${featureData.length > 1 ? "are" : "is"} referenced in your proposal.\\\n`;
    content += "If this doesn't accurately correspond to your proposal, please update your initial comment to include `web-features: <feature-id>`.\n";
    content += "To find feature IDs, use the [web-features explorer](https://web-platform-dx.github.io/web-features-explorer/).\n\n";

    for (const feature of featureData) {
      const featureContent = getMarkdownContentForFeature(feature);

      if (featureData.length > 1) {
        content += "<details>\n";
        content += `<summary>${escapeFeatureName(feature)}</summary>\n\n`;
        content += featureContent;
        content += "</details>\n\n";
      } else {
        content += featureContent;
      }
    }
  }

  return `${content}\n${HIDDEN_COMMENT_IN_ISSUE}`;
}

export async function getReferencedIssue(octokit, repository, issueNumber) {
  const response = await octokit.request("GET /repos/{owner}/{repo}/issues/{issue_number}", {
    ...repository,
    issue_number: issueNumber,
    headers: getGitHubHeaders(),
  });
  return response.data;
}

export async function listOpenProposalIssues(octokit, repository) {
  const issues = await octokit.paginate("GET /repos/{owner}/{repo}/issues", {
    ...repository,
    state: "open",
    labels: REQUIRED_LABEL,
    per_page: 100,
    headers: getGitHubHeaders(),
  });

  return issues.filter(issue => !issue.pull_request && shouldProcessIssue(issue));
}

async function listBotComments(octokit, repository, issueNumber) {
  const comments = await octokit.paginate("GET /repos/{owner}/{repo}/issues/{issue_number}/comments", {
    ...repository,
    issue_number: issueNumber,
    per_page: 100,
    headers: getGitHubHeaders(),
  });
  return comments
    .filter(comment => comment.body?.includes(HIDDEN_COMMENT_IN_ISSUE))
    .sort((a, b) => a.id - b.id);
}

async function removeDuplicateBotComments(octokit, repository, botComments) {
  const [commentToKeep, ...duplicates] = botComments;

  for (const duplicate of duplicates) {
    console.log(`Deleting duplicate bot comment #${duplicate.id}...`);
    try {
      await octokit.request("DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}", {
        ...repository,
        comment_id: duplicate.id,
        headers: getGitHubHeaders(),
      });
    } catch (error) {
      if (error.status !== 404) {
        throw error;
      }
    }
  }

  return commentToKeep;
}

export async function postOrUpdateComment(octokit, repository, issueNumber, markdown) {
  const existingComment = await removeDuplicateBotComments(
    octokit,
    repository,
    await listBotComments(octokit, repository, issueNumber),
  );

  if (!existingComment) {
    console.log(`Posting a new comment on issue #${issueNumber}...`);
    const response = await octokit.request("POST /repos/{owner}/{repo}/issues/{issue_number}/comments", {
      ...repository,
      issue_number: issueNumber,
      body: markdown,
      headers: getGitHubHeaders(),
    });

    const commentToKeep = await removeDuplicateBotComments(
      octokit,
      repository,
      await listBotComments(octokit, repository, issueNumber),
    );
    if (!commentToKeep) {
      return "created";
    }
    if (commentToKeep.id !== response.data.id) {
      console.log(`Another run created comment #${commentToKeep.id}; kept that comment instead.`);
      if (commentToKeep.body === markdown) {
        return "unchanged";
      }

      await octokit.request("PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}", {
        ...repository,
        comment_id: commentToKeep.id,
        body: markdown,
        headers: getGitHubHeaders(),
      });
      return "updated";
    }
    return "created";
  }

  if (existingComment.body === markdown) {
    console.log(`Comment on issue #${issueNumber} is already up to date.`);
    return "unchanged";
  }

  console.log(`Updating comment #${existingComment.id} on issue #${issueNumber}...`);
  await octokit.request("PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}", {
    ...repository,
    comment_id: existingComment.id,
    body: markdown,
    headers: getGitHubHeaders(),
  });
  return "updated";
}

export async function processIssue(issue, {
  octokit,
  repository,
  fetchImpl = fetch,
  featureCatalog = webFeatures,
} = {}) {
  if (!shouldProcessIssue(issue)) {
    console.log(`Skipping issue #${issue.number}: it is not an open ${REQUIRED_LABEL} issue.`);
    return "skipped";
  }

  console.log(`Processing issue #${issue.number}: "${issue.title}"`);
  const featureIds = findFeaturesInIssue(issue, featureCatalog);

  // Handle moved and split features by redirecting to the target(s) in the catalog.
  const processedFeatureIds = [];
  for (const id of featureIds) {
    if (featureCatalog[id].kind === "moved") {
      processedFeatureIds.push(featureCatalog[id].redirect_target);
    } else if (featureCatalog[id].kind === "split") {
      processedFeatureIds.push(...featureCatalog[id].redirect_targets);
    } else {
      processedFeatureIds.push(id);
    }
  }

  // Fetch feature data for each identified feature, and build the comment content.
  const featureData = await Promise.all(processedFeatureIds.map(async id => {
    try {
      return await getFeatureData(id, fetchImpl);
    } catch (error) {
      throw new Error(`Issue #${issue.number}, feature "${id}": ${error.message}`, { cause: error });
    }
  }));

  if (featureData.length === 0) {
    console.log(`No matching features found for issue #${issue.number}.`);
  } else {
    console.log(`Found ${featureData.length} matching feature(s) for issue #${issue.number}:`);
    console.log(featureData.map(feature => `- ${feature.id}`).join("\n"));
  }

  return postOrUpdateComment(
    octokit,
    repository,
    issue.number,
    buildIssueComment(featureData),
  );
}

function createSummary(scanned) {
  return {
    scanned,
    created: 0,
    updated: 0,
    unchanged: 0,
    skipped: 0,
    failed: 0,
  };
}

function printSummary(summary) {
  console.log("Refresh summary:");
  for (const [name, count] of Object.entries(summary)) {
    console.log(`- ${name}: ${count}`);
  }
}

export async function processAllOpenProposals(options) {
  const issues = await listOpenProposalIssues(options.octokit, options.repository);
  const summary = createSummary(issues.length);
  const failures = [];

  for (const issue of issues) {
    try {
      const currentIssue = await getReferencedIssue(
        options.octokit,
        options.repository,
        issue.number,
      );
      const result = await processIssue(currentIssue, options);
      summary[result] += 1;
    } catch (error) {
      summary.failed += 1;
      failures.push(error);
      console.error(`Failed to process issue #${issue.number}:`, error);
    }
  }

  printSummary(summary);
  if (failures.length > 0) {
    throw new AggregateError(failures, `Failed to refresh ${failures.length} proposal issue(s).`);
  }

  return summary;
}

async function parseArguments(args) {
  return yargs(args)
    .option("number", {
      alias: "n",
      type: "number",
      describe: "The issue number to process",
    })
    .option("all-open-proposals", {
      type: "boolean",
      default: false,
      describe: `Process every open issue with the "${REQUIRED_LABEL}" label`,
    })
    .option("repo", {
      alias: "r",
      type: "string",
      demandOption: true,
      describe: "The owner and repository name. For example: web-platform-tests/interop",
    })
    .check(argv => {
      const hasIssueNumber = Number.isInteger(argv.number) && argv.number > 0;
      if (hasIssueNumber === argv.allOpenProposals) {
        throw new Error("Choose exactly one of --number or --all-open-proposals.");
      }
      return true;
    })
    .strict()
    .parse();
}

export async function main(args = hideBin(process.argv), {
  octokit = new Octokit({ auth: process.env.GITHUB_TOKEN }),
  fetchImpl = fetch,
  featureCatalog = webFeatures,
} = {}) {
  const argv = await parseArguments(args);
  const repository = parseRepository(argv.repo);
  const options = { octokit, repository, fetchImpl, featureCatalog };

  if (argv.allOpenProposals) {
    await processAllOpenProposals(options);
    return;
  }

  const issue = await getReferencedIssue(octokit, repository, argv.number);
  const result = await processIssue(issue, options);
  printSummary({
    ...createSummary(1),
    [result]: 1,
  });
}

const isMainModule = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (isMainModule) {
  main().catch(error => {
    console.error(error);
    process.exitCode = 1;
  });
}
