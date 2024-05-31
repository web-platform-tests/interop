# Interop Dashboard

Our dashboard is available at https://wpt.fyi/interop.

This document explains how tests are run and how score are computed. There are several layers of async operations with varying amounts of delay, so this might also serve as a guide to identify where the problem is if the dashboard is not being updated.

The focus areas are defined by the combination of three data sources:

- [wpt-metadata](https://github.com/web-platform-tests/wpt-metadata) labels specific tests with labels like `interop-2022-subgrid`. These labels are added manually after review of the test lists. The easiest way to enumerate all labeled tests is through the [wpt.fyi API](https://wpt.fyi/api/metadata?includeTestLevel=true&product=chrome).
- [`category-data.json`](https://github.com/web-platform-tests/results-analysis/blob/main/interop-scoring/category-data.json) defines the focus areas for each year as an identifier like `interop-2024-layout` and a set of labels like `interop-2021-flexbox`, `interop-2022-subgrid`, etc.
- [`interop-data.json`](https://github.com/web-platform-tests/wpt.fyi/blob/main/webapp/static/interop-data.json) provides human readable names for the focus area identifiers, such as "Layout" for `interop-2024-layout`. This file also includes investigation efforts. The same data is available in [`interop-data.js`](https://wpt.fyi/components/interop-data.js).

Scores for each focus area are computed in [results-analysis](https://github.com/web-platform-tests/results-analysis) and published as CSV ([example](https://raw.githubusercontent.com/web-platform-tests/results-analysis/gh-pages/data/interop-2024/interop-2024-experimental-v2.csv)) to GitHub pages. The CSV data and `interop-data.js` is fetched by the wpt.fyi frontend to populate the scores. 

The "pipeline" for updating scores is as follows:

- All of WPT is run on Chrome, Edge, Firefox, and Safari across two different CI systems: Taskcluster and Azure Pipelines. The cadence varies:

  - Chrome Canary: [every commit](https://github.com/web-platform-tests/wpt/blob/6f491c45bc5182275419be89a0820c2deaddc6b0/tools/ci/tc/tasks/test.yml#L188-L193)
  - Chrome Stable: [daily](https://github.com/web-platform-tests/wpt/blob/6f491c45bc5182275419be89a0820c2deaddc6b0/tools/ci/tc/tasks/test.yml#L206-L211)
  - Edge Dev: [every 3 hours](https://github.com/web-platform-tests/wpt/blob/6f491c45bc5182275419be89a0820c2deaddc6b0/.azure-pipelines.yml#L380)
  - Edge Stable: [daily](https://github.com/web-platform-tests/wpt/blob/6f491c45bc5182275419be89a0820c2deaddc6b0/.azure-pipelines.yml#L344)
  - Firefox Nightly: [every commit](https://github.com/web-platform-tests/wpt/blob/6f491c45bc5182275419be89a0820c2deaddc6b0/tools/ci/tc/tasks/test.yml#L163-L168)
  - Firefox Stable: [daily](https://github.com/web-platform-tests/wpt/blob/6f491c45bc5182275419be89a0820c2deaddc6b0/tools/ci/tc/tasks/test.yml#L175-L180)
  - Safari Technology Preview: [every 3 hours](https://github.com/web-platform-tests/wpt/blob/6f491c45bc5182275419be89a0820c2deaddc6b0/.azure-pipelines.yml#L491)
  - Safari Stable: [daily](https://github.com/web-platform-tests/wpt/blob/6f491c45bc5182275419be89a0820c2deaddc6b0/.azure-pipelines.yml#L451)

  Runs take 1-3 hours to complete. Results are uploaded to wpt.fyi and are made available within minutes of completion.

  Delay: 1-6 hours for experimental, 1-27 hours for stable

- [results-analysis-cache](https://github.com/web-platform-tests/results-analysis-cache) downloads all runs from wpt.fyi and coverts them into a more efficient format to speed up results scoring. This runs [hourly](https://github.com/web-platform-tests/results-analysis-cache/blob/683fe10f5f58c096e2a0dc3214c53ce949192c39/.github/workflows/results.yml#L7-L9) and takes less than 10 minutes.

  Delay: 10-70 minutes

- [results-analysis](https://github.com/web-platform-tests/results-analysis) fetches results from `results-analysis-cache` and produces the CSV files used by the dashboard. This runs [every 3 hours](https://github.com/web-platform-tests/results-analysis/blob/67c603a9b306c71da37c4798301935318949c45e/.github/workflows/update_gh_pages.yml#L7-L9) and takes a few minutes.

  Delay: 0-3 hours

- The wpt.fyi frontend always fetches the latest CSV files, so there is no additional delay before the changes appear on the dashboard.

## Troubleshooting

It's normal for experimental results to take up 10 hours to update and stable results over 30 hours. If things take longer than this it's time to troubleshoot.

First check if new runs are appearing in [wpt.fyi/runs](https://wpt.fyi/runs)? If not, the runs are probably not completing in Taskcluster or Azure Pipelines. Diagnosing why this happens is not always easy, so please [file an issue](https://github.com/web-platform-tests/wpt/issues/new) and poke someone for help.

Once wpt.fyi has the results it's rare for anything to go wrong, but it could be in one of the GitHub Actions workflows:

- [results-analysis-cache](https://github.com/web-platform-tests/results-analysis-cache/actions)
- [results-analysis](https://github.com/web-platform-tests/results-analysis/actions)
