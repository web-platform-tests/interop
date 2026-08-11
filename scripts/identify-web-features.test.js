import assert from "node:assert/strict";
import test from "node:test";
import {
  HIDDEN_COMMENT_IN_ISSUE,
  findFeaturesInIssue,
  getFeatureData,
  getMarkdownContentForFeature,
  listOpenProposalIssues,
  postOrUpdateComment,
  processAllOpenProposals,
  processIssue,
} from "./identify-web-features.js";

const repository = { owner: "web-platform-tests", repo: "interop" };

function proposal(number, overrides = {}) {
  return {
    number,
    title: `Proposal ${number}`,
    body: "",
    state: "open",
    labels: [{ name: "focus-area-proposal" }],
    ...overrides,
  };
}

test("explicit feature IDs take precedence over URL matches", () => {
  const featureCatalog = {
    explicit: { spec: "https://example.com/explicit" },
    explorer: { spec: "https://example.com/explorer" },
    specification: { spec: "https://example.com/specification" },
  };
  const issue = proposal(1, {
    body: [
      "https://example.com/specification",
      "https://web-platform-dx.github.io/web-features-explorer/features/explorer/",
      "web-features: explicit",
    ].join("\n"),
  });

  assert.deepEqual(findFeaturesInIssue(issue, featureCatalog), ["explicit"]);
});

test("a newly available feature ID becomes detectable", () => {
  const issue = proposal(1, { body: "web-features: newly-added" });

  assert.deepEqual(findFeaturesInIssue(issue, {}), []);
  assert.deepEqual(findFeaturesInIssue(issue, {
    "newly-added": { spec: "https://example.com/newly-added" },
  }), ["newly-added"]);
});

test("feature data requests fail explicitly on non-success responses", async () => {
  await assert.rejects(
    getFeatureData("missing-feature", async () => ({
      ok: false,
      status: 404,
    })),
    /Could not fetch feature "missing-feature": HTTP 404/,
  );
});

test("current explorer enrichment data is rendered from its current fields", () => {
  const markdown = getMarkdownContentForFeature({
    id: "example-feature",
    name: "Example feature",
    description_html: "An example.",
    status: { baseline: "low" },
    mdnUrls: [{
      title: "Example API",
      url: "https://developer.mozilla.org/docs/Web/API/Example",
    }],
    standardPositions: [{
      vendor: "apple",
      url: "https://github.com/WebKit/standards-positions/issues/1",
      position: "support",
      concerns: ["example concern", "another concern"],
    }],
    developerSignals: {
      votes: 6,
      url: "https://github.com/web-platform-dx/developer-signals/issues/1",
    },
    useCases: [{ description: "An example use case." }],
    chromeUseCounters: {
      percentageOfPageLoad: 0.0023047,
      url: "https://chromestatus.com/metrics/webfeature/timeline/popularity/1",
    },
    stateOfSurveys: [{
      name: "State of HTML 2025",
      question: "usage",
      url: "https://2025.stateofhtml.com/en-US/usage/",
    }],
    interop: [{
      year: 2026,
      label: "interop-2026-example",
      url: "https://wpt.fyi/interop-2026?feature=interop-2026-example",
    }],
    wpt: {
      url: "https://wpt.fyi/results?q=feature:example-feature",
    },
  });

  assert.match(markdown, /\[WebKit\]\(https:\/\/github\.com\/WebKit\/standards-positions\/issues\/1\) \(support, concerns: example concern, another concern\)/);
  assert.match(markdown, /6 votes \/ 1 use case \(\[details\]\(https:\/\/github\.com\/web-platform-dx\/developer-signals\/issues\/1\)\)/);
  assert.match(markdown, /\[chromestatus\.com\]\(https:\/\/chromestatus\.com\/metrics\/webfeature\/timeline\/popularity\/1\) \(~0\.230% of page loads\)/);
  assert.match(markdown, /\[State of HTML 2025 \(usage question\)\]\(https:\/\/2025\.stateofhtml\.com\/en-US\/usage\/\)/);
  assert.match(markdown, /\[2026\]\(https:\/\/wpt\.fyi\/interop-2026\?feature=interop-2026-example\)/);
  assert.match(markdown, /\[wpt\.fyi results\]\(https:\/\/wpt\.fyi\/results\?q=feature:example-feature\)/);
  assert.doesNotMatch(markdown, /undefined/);
});

test("missing explorer enrichment data does not prevent rendering", () => {
  const markdown = getMarkdownContentForFeature({
    id: "minimal-feature",
    name: "Minimal feature",
    description_html: "A minimal feature.",
    status: { baseline: false },
  });

  assert.match(markdown, /\*\*ID:\*\* minimal-feature/);
  assert.doesNotMatch(markdown, /Standard positions|Developer signals|Chrome use counter|State of CSS\/JS\/HTML surveys|previous Interop|WPT tests/);
});

test("bulk selection keeps only open labeled issues and excludes pull requests", async () => {
  const octokit = {
    paginate: async () => [
      proposal(1),
      proposal(2, { state: "closed" }),
      proposal(3, { labels: [] }),
      proposal(4, { pull_request: {} }),
    ],
  };

  const issues = await listOpenProposalIssues(octokit, repository);

  assert.deepEqual(issues.map(issue => issue.number), [1]);
});

test("an unchanged marked comment is not patched", async () => {
  const markdown = `Current content\n${HIDDEN_COMMENT_IN_ISSUE}`;
  const requests = [];
  const octokit = {
    paginate: async () => [{ id: 10, body: markdown }],
    request: async (...args) => requests.push(args),
  };

  const result = await postOrUpdateComment(octokit, repository, 1, markdown);

  assert.equal(result, "unchanged");
  assert.equal(requests.length, 0);
});

test("a stale marked comment is patched", async () => {
  const requests = [];
  const octokit = {
    paginate: async () => [{ id: 10, body: `Old content\n${HIDDEN_COMMENT_IN_ISSUE}` }],
    request: async (...args) => requests.push(args),
  };

  const result = await postOrUpdateComment(
    octokit,
    repository,
    1,
    `New content\n${HIDDEN_COMMENT_IN_ISSUE}`,
  );

  assert.equal(result, "updated");
  assert.equal(requests.length, 1);
  assert.equal(requests[0][0], "PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}");
  assert.equal(requests[0][1].comment_id, 10);
});

test("concurrent comment creation keeps only the first marked comment", async () => {
  const markdown = `Current content\n${HIDDEN_COMMENT_IN_ISSUE}`;
  const requests = [];
  let commentLookup = 0;
  const octokit = {
    paginate: async () => {
      commentLookup += 1;
      if (commentLookup === 1) {
        return [];
      }
      return [
        { id: 10, body: markdown },
        { id: 11, body: markdown },
      ];
    },
    request: async (route, parameters) => {
      requests.push([route, parameters]);
      if (route.startsWith("POST")) {
        return { data: { id: 11 } };
      }
      return { data: {} };
    },
  };

  const result = await postOrUpdateComment(octokit, repository, 1, markdown);

  assert.equal(result, "unchanged");
  assert.deepEqual(requests.map(request => request[0]), [
    "POST /repos/{owner}/{repo}/issues/{issue_number}/comments",
    "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}",
  ]);
  assert.equal(requests[1][1].comment_id, 11);
});

test("concurrent comment creation updates a stale surviving comment", async () => {
  const markdown = `New content\n${HIDDEN_COMMENT_IN_ISSUE}`;
  const requests = [];
  let commentLookup = 0;
  const octokit = {
    paginate: async () => {
      commentLookup += 1;
      if (commentLookup === 1) {
        return [];
      }
      return [
        { id: 10, body: `Old content\n${HIDDEN_COMMENT_IN_ISSUE}` },
        { id: 11, body: markdown },
      ];
    },
    request: async (route, parameters) => {
      requests.push([route, parameters]);
      if (route.startsWith("POST")) {
        return { data: { id: 11 } };
      }
      return { data: {} };
    },
  };

  const result = await postOrUpdateComment(octokit, repository, 1, markdown);

  assert.equal(result, "updated");
  assert.deepEqual(requests.map(request => request[0]), [
    "POST /repos/{owner}/{repo}/issues/{issue_number}/comments",
    "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}",
    "PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}",
  ]);
  assert.equal(requests[2][1].comment_id, 10);
  assert.equal(requests[2][1].body, markdown);
});

test("single-issue processing skips closed and unlabeled issues", async () => {
  const options = {
    octokit: {},
    repository,
    featureCatalog: {},
  };

  assert.equal(await processIssue(proposal(1, { state: "closed" }), options), "skipped");
  assert.equal(await processIssue(proposal(2, { labels: [] }), options), "skipped");
});

test("single-issue processing fetches feature data and creates a comment", async () => {
  const requests = [];
  const octokit = {
    paginate: async () => [],
    request: async (route, parameters) => {
      requests.push([route, parameters]);
      return { data: { id: 10 } };
    },
  };
  const fetchImpl = async url => ({
    ok: true,
    json: async () => ({
      id: "newly-added",
      name: "Newly added",
      description_html: "A newly added feature.",
      status: {},
      wpt: false,
    }),
    url,
  });

  const result = await processIssue(proposal(1, {
    body: "web-features: newly-added",
  }), {
    octokit,
    repository,
    fetchImpl,
    featureCatalog: {
      "newly-added": { spec: "https://example.com/newly-added" },
    },
  });

  assert.equal(result, "created");
  const postRequest = requests.find(([route]) => route.startsWith("POST"));
  assert.match(postRequest[1].body, /\*\*ID:\*\* newly-added/);
});

test("single-issue processing redirects moved features to their target", async () => {
  const requests = [];
  const fetchedIds = [];
  const octokit = {
    paginate: async () => [],
    request: async (route, parameters) => {
      requests.push([route, parameters]);
      return { data: { id: 10 } };
    },
  };
  const fetchImpl = async url => {
    const id = new URL(url).pathname.split("/").at(-1).replace(".json", "");
    fetchedIds.push(id);
    return {
      ok: true,
      json: async () => ({
        id,
        name: id,
        description_html: `${id} description`,
        status: {},
        wpt: false,
      }),
    };
  };

  const result = await processIssue(proposal(1, {
    body: "web-features: old-feature",
  }), {
    octokit,
    repository,
    fetchImpl,
    featureCatalog: {
      "old-feature": {
        kind: "moved",
        redirect_target: "new-feature",
      },
      "new-feature": {},
    },
  });

  assert.equal(result, "created");
  assert.deepEqual(fetchedIds, ["new-feature"]);
  const postRequest = requests.find(([route]) => route.startsWith("POST"));
  assert.match(postRequest[1].body, /\*\*ID:\*\* new-feature/);
  assert.doesNotMatch(postRequest[1].body, /\*\*ID:\*\* old-feature/);
});

test("single-issue processing redirects split features to every target", async () => {
  const requests = [];
  const fetchedIds = [];
  const octokit = {
    paginate: async () => [],
    request: async (route, parameters) => {
      requests.push([route, parameters]);
      return { data: { id: 10 } };
    },
  };
  const fetchImpl = async url => {
    const id = new URL(url).pathname.split("/").at(-1).replace(".json", "");
    fetchedIds.push(id);
    return {
      ok: true,
      json: async () => ({
        id,
        name: id,
        description_html: `${id} description`,
        status: {},
        wpt: false,
      }),
    };
  };

  const result = await processIssue(proposal(1, {
    body: "web-features: former-combined-feature",
  }), {
    octokit,
    repository,
    fetchImpl,
    featureCatalog: {
      "former-combined-feature": {
        kind: "split",
        redirect_targets: ["first-feature", "second-feature"],
      },
      "first-feature": {},
      "second-feature": {},
    },
  });

  assert.equal(result, "created");
  assert.deepEqual(fetchedIds, ["first-feature", "second-feature"]);
  const postRequest = requests.find(([route]) => route.startsWith("POST"));
  assert.match(postRequest[1].body, /\*\*ID:\*\* first-feature/);
  assert.match(postRequest[1].body, /\*\*ID:\*\* second-feature/);
  assert.doesNotMatch(postRequest[1].body, /\*\*ID:\*\* former-combined-feature/);
});

test("bulk processing continues after an issue failure and reports it at the end", async () => {
  const requests = [];
  const octokit = {
    paginate: async (route, parameters) => {
      if (route === "GET /repos/{owner}/{repo}/issues") {
        return [proposal(1), proposal(2)];
      }
      if (parameters.issue_number === 2) {
        throw new Error("Comment lookup failed");
      }
      return [];
    },
    request: async (route, parameters) => {
      requests.push([route, parameters]);
      if (route === "GET /repos/{owner}/{repo}/issues/{issue_number}") {
        return { data: proposal(parameters.issue_number) };
      }
      return { data: { id: 10 } };
    },
  };

  await assert.rejects(
    processAllOpenProposals({
      octokit,
      repository,
      featureCatalog: {},
    }),
    error => error instanceof AggregateError && error.errors.length === 1,
  );

  const postRequests = requests.filter(([route]) => route.startsWith("POST"));
  const issueRequests = requests.filter(([route]) => {
    return route === "GET /repos/{owner}/{repo}/issues/{issue_number}";
  });
  assert.equal(postRequests.length, 1);
  assert.equal(postRequests[0][1].issue_number, 1);
  assert.deepEqual(issueRequests.map(([, parameters]) => parameters.issue_number), [1, 2]);
});
