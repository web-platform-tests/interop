# Interop Dashboard

Our dashboard is available at https://wpt.fyi/interop.

This document explains how tests are run and how score are computed. There are several layers of async operations with varying amounts of delay, so this might also serve as a guide to identify where the problem is if the dashboard is not being updated.

The focus areas are defined by the combination of three data sources:

- [wpt-metadata](https://github.com/web-platform-tests/wpt-metadata) labels specific tests with labels like `interop-2022-subgrid`. These labels are added manually after review of the test lists. The easiest way to enumerate all labeled tests is through the [wpt.fyi API](https://wpt.fyi/api/metadata?includeTestLevel=true&product=chrome).
- [`category-data.json`](https://github.com/web-platform-tests/results-analysis/blob/main/interop-scoring/category-data.json) defines the focus areas for each year as an identifier like `interop-2024-layout` and a set of labels like `interop-2021-flexbox`, `interop-2022-subgrid`, etc.
- [`interop-data.json`](https://github.com/web-platform-tests/wpt.fyi/blob/main/webapp/static/interop-data.json) provides human readable names for the focus area identifiers, such as "Layout" for `interop-2024-layout`. This file also includes investigation efforts. The same data is available in [`interop-data.js`](https://wpt.fyi/components/interop-data.js).

Scores for each focus area are computed in [results-analysis](https://github.com/web-platform-tests/results-analysis) and published as CSV ([example](https://raw.githubusercontent.com/web-platform-tests/results-analysis/gh-pages/data/interop-2024/interop-2024-experimental-v2.csv)) to GitHub pages. The CSV data and `interop-data.js` is fetched by the wpt.fyi frontend to populate the scores. 

The "pipeline" for updating scores is as follows:

- TODO
