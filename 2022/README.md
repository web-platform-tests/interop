# Interop 2022

_This is a copy of the [Interop 2022 RFC](https://github.com/web-platform-tests/rfcs/blob/master/rfcs/interop_2022.md) with some minor updates._

## Summary

Interop 2022 is a public effort and benchmark around which browser vendors can collaborate to improve interoperability in areas believed to be important to web developers. It is composed of two parts:

- 15 focus areas on which implementations will be scored according to their pass rate on selected tests. This comprises 10 newly selected areas, plus the 5 areas from Interop 2021.
- 3 "investigate" areas which are important to web compatibility but where collaborative effort is required to find the path to interoperable implementations. These will be scored according to assessed progress in the individual areas.

90% of the overall score will come from the test pass rate in the focus areas, and 10% from progress on the investigate areas. There will be a dashboard for this at https://wpt.fyi/interop-2022.

See the [Interop 2022 repo](https://github.com/web-platform-tests/interop-2022) for all of the proposals and discussions that led to the current set of areas.

## Details

10 new focus areas are part of Interop 2022, as well as 5 from Interop 2021.

All tests: [view all tests on wpt.fyi](https://wpt.fyi/results/?label=master&label=experimental&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2021-aspect-ratio%20or%20label%3Ainterop-2021-flexbox%20or%20label%3Ainterop-2021-grid%20or%20label%3Ainterop-2021-position-sticky%20or%20label%3Ainterop-2021-transforms%20or%20label%3Ainterop-2022-cascade%20or%20label%3Ainterop-2022-color%20or%20label%3Ainterop-2022-contain%20or%20label%3Ainterop-2022-dialog%20or%20label%3Ainterop-2022-forms%20or%20label%3Ainterop-2022-scrolling%20or%20label%3Ainterop-2022-subgrid%20or%20label%3Ainterop-2022-text%20or%20label%3Ainterop-2022-viewport%20or%20label%3Ainterop-2022-webcompat).

### Cascade Layers

Proposal: [interop-2022/#5](https://github.com/web-platform-tests/interop-2022/issues/5)  
Tests: [`interop-2022-cascade`](https://wpt.fyi/results/?label=master&label=experimental&product=chrome&product=firefox&product=safari&aligned&q=label%3Ainterop-2022-cascade)

### Color Spaces and Functions

Proposal: [interop-2022/#20](https://github.com/web-platform-tests/interop-2022/issues/20)  
Tests: [`interop-2022-color`](https://wpt.fyi/results/?label=master&label=experimental&product=chrome&product=firefox&product=safari&aligned&q=label%3Ainterop-2022-color)

### Containment

Proposal: [interop-2022/#19](https://github.com/web-platform-tests/interop-2022/issues/19)  
Tests: [`interop-2022-contain`](https://wpt.fyi/results/?label=master&label=experimental&product=chrome&product=firefox&product=safari&aligned&q=label%3Ainterop-2022-contain)

### Dialog Element

Proposal: [interop-2022/#12](https://github.com/web-platform-tests/interop-2022/issues/12)  
Tests: [`interop-2022-dialog`](https://wpt.fyi/results/?label=master&label=experimental&product=chrome&product=firefox&product=safari&aligned&q=label%3Ainterop-2022-dialog)

### Forms

Proposal: [interop-2022/#11](https://github.com/web-platform-tests/interop-2022/issues/11)  
Tests: [`interop-2022-forms`](https://wpt.fyi/results/?label=master&label=experimental&product=chrome&product=firefox&product=safari&aligned&q=label%3Ainterop-2022-forms)

### Scrolling

Proposals: [interop-2022/#14](https://github.com/web-platform-tests/interop-2022/issues/14) + [interop-2022/#21](https://github.com/web-platform-tests/interop-2022/issues/21)  
Tests: [`interop-2022-scrolling`](https://wpt.fyi/results/?label=master&label=experimental&product=chrome&product=firefox&product=safari&aligned&q=label%3Ainterop-2022-scrolling)

### Subgrid

Proposal: [interop-2022/#1](https://github.com/web-platform-tests/interop-2022/issues/1)  
Tests: [`interop-2022-subgrid`](https://wpt.fyi/results/?label=master&label=experimental&product=chrome&product=firefox&product=safari&aligned&q=label%3Ainterop-2022-subgrid)

### Typography and Encodings

Proposal: [interop-2022/#13](https://github.com/web-platform-tests/interop-2022/issues/13)  
Tests: [`interop-2022-text`](https://wpt.fyi/results/?label=master&label=experimental&product=chrome&product=firefox&product=safari&aligned&q=label%3Ainterop-2022-text)

### Viewport Units

Proposal: [interop-2022/#4](https://github.com/web-platform-tests/interop-2022/issues/4)  
Tests: [`interop-2022-viewport`](https://wpt.fyi/results/?label=master&label=experimental&product=chrome&product=firefox&product=safari&aligned&q=label%3Ainterop-2022-viewport)

See also the [Viewport Investigation project](https://github.com/web-platform-tests/interop-2022/issues/41) which is also part of the Interop 2022 effort.

### Web Compat

Proposal: [interop-2022/#9](https://github.com/web-platform-tests/interop-2022/issues/9)  
Tests: [`interop-2022-webcompat`](https://wpt.fyi/results/?label=master&label=experimental&product=chrome&product=firefox&product=safari&aligned&q=label%3Ainterop-2022-webcompat)

### Interop 2021

The 5 focus areas from Interop 2021 are carried forward and included in the metric. See [interop-2022/#2](https://github.com/web-platform-tests/interop-2022/issues/2) for discussion.

- [`interop-2021-aspect-ratio`](https://wpt.fyi/results/?label=master&label=experimental&product=chrome&product=firefox&product=safari&aligned&q=label%3Ainterop-2021-aspect-ratio)
- [`interop-2021-flexbox`](https://wpt.fyi/results/?label=master&label=experimental&product=chrome&product=firefox&product=safari&aligned&q=label%3Ainterop-2021-flexbox)
- [`interop-2021-grid`](https://wpt.fyi/results/?label=master&label=experimental&product=chrome&product=firefox&product=safari&aligned&q=label%3Ainterop-2021-grid)
- [`interop-2021-position-sticky`](https://wpt.fyi/results/?label=master&label=experimental&product=chrome&product=firefox&product=safari&aligned&q=label%3Ainterop-2021-position-sticky)
- [`interop-2021-transforms`](https://wpt.fyi/results/?label=master&label=experimental&product=chrome&product=firefox&product=safari&aligned&q=label%3Ainterop-2021-transforms)

### Updating the tests

No test suite is perfect, and there will likely be a need to add, remove or rewrite tests during the course of the year. To suggest such non-trivial changes that would benefit from review, file an issue on the [Interop 2022 repo](https://github.com/web-platform-tests/interop-2022). The [Interop 2022 team](https://github.com/orgs/web-platform-tests/teams/interop-2022) will discuss at least monthly, and make decisions based on consensus. The core team will nominate the initial participants to the Interop 2022 team; thereafter the team will be able to set its own criteria for membership and participation, subject to the [WPT code of conduct](https://github.com/web-platform-tests/wpt/blob/master/CODE_OF_CONDUCT.md).

### Investigation efforts

3 areas of investigation have been selected, where the test suites are not yet good enough to score progress, but where manual testing, spec work, and writing new tests can help improve the interoperability of the feature. They are:

- [Viewport Measurement](https://github.com/web-platform-tests/interop-2022/issues/4)
- [Editing, contenteditable, and execCommand](https://github.com/web-platform-tests/interop-2022/issues/17)
- [Pointer](https://github.com/web-platform-tests/interop-2022/issues/15) and [MouseEvent](https://github.com/web-platform-tests/interop-2022/issues/37) Events

There will be a group working on each area and reporting progress over the course of the year.

### Metrics

Scores (between 0% and 100%) will be computed from test suite pass rates for each focus area and the effort as a whole. 90% of the total score is determined by the test results of the 15 focus areas. All areas are given equal weight, meaning each contributes 6% to the total score. 10% of the total score is determined by the progress in the 3 areas of investigation. Each of the 3 investigation efforts are given equal weight, meaning each contributes 3⅓% to the total score.

Scoring in detail:

- For each browser, every test is scored between 0% and 100%. For tests with subtests, the score is the proportion of passing subtests. This avoids tests with many subtests being given much larger weight than for example reftests.
- For each browser, every area is scored between 0% and 100%, adding up the scores and dividing by the number of tests.
- Every investigation effort is scored between 0% and 100%, as recommended by the groups working on each and approved by the [Interop 2022 team](https://github.com/orgs/web-platform-tests/teams/interop-2022). Unlike test results, these scores are _not_ per-browser scores, and contributes the same to each browser's overall score.
- The overall score is given by up to 6% per focus area and up to 3⅓% per investigation effort.

The [Compat 2021 metrics code](https://github.com/Ecosystem-Infra/wpt-results-analysis/tree/main/compat-2021) can be a starting point, but the eventual code will be in a repository in the web-platform-tests GitHub org.

Note: There are multiple ways of scoring testharness.js tests that have a non-OK harness status but one or more passing subtests. The Compat 2021 metrics simply ignored the harness status. When the subtests run differ between browsers it's also difficult to score the results. When such situations arise for Interop 2022, metrics generation will fail until the problem is fixed or deemed acceptable. The precise details of this may be changed with the consensus of the [Interop 2022 team](https://github.com/orgs/web-platform-tests/teams/interop-2022).

### Dashboard

A public dashboard tracking the metrics over time will be available at https://wpt.fyi/interop-2022. The dashboard will include at least:

- An explanation of the scope, which is the 15 focus areas, not the whole web platform.
- A graph of the metric over time for at least Chrome, Firefox and Safari, which can show both the overall Interop 2022 metric, the Interop 2021 metric which makes up 1/3 of the score, and each of the 15 focus areas individually.
- A brief description of each focus area, with links to specs, tests on wpt.fyi, and documentation on MDN.

Additional features might be added, see [interop-2022/#45](https://github.com/web-platform-tests/interop-2022/issues/45) for discussion.

## Background

Following [MDN Web DNA 2019](https://insights.developer.mozilla.org/reports/mdn-web-developer-needs-assessment-2019.html), the [browser compat report](https://insights.developer.mozilla.org/reports/mdn-browser-compatibility-report-2020.html) narrowed in on a small number of concrete areas where web developers struggle with browser compatibility. Based on that and [other signals](https://web.dev/compat2021/#choosing-what-to-focus-on), [Compat 2021](https://wpt.fyi/compat2021) was created. Over the course of 2021, that effort has improved test results in the focus areas considerably, and the [mid-year](https://web.dev/compat2021-midyear/) and [holiday updates](https://web.dev/compat2021-holiday-update/) outline what this means in practice for web developers.

While Compat 2021 was discussed among all major browser vendors, it didn't follow the web-platform-tests RFC process, and only Google and Microsoft have publicly committed to the effort. Interop 2022 is proposed the successor to Compat 2021, but following a public process of nomination and review, using the RFC process. The term "interop" is used instead of "compat" to avoid conflation with "site compat", see [terminology](#terminology) for details.

## Risks

### Incentives

No set of tests is without flaws, and trying to improve a metric based on test results can lead to bad outcomes such as shallow implementations that pass the tests but still isn't usable in practice. The main mitigation for this is a careful review of the tests for the proposed areas, and to include only tests that are judged to be high quality. Also, the tests are not frozen but can be updated or even removed during the year as issues are uncovered.

### Terminology

The terms "compatibility" and "interoperability" are typically distinguished by browser vendors, where compat refers to site compat, and interop refers to two or more browsers behaving the same. In that terminology, the web-platform-tests project and this effort is about interoperability.

The word "compatibility" is probably more familiar to web developers, and is the terminology of MDN's [browser compatibility tables](https://developer.mozilla.org/en-US/docs/Web/API/AudioTrack#browser_compatibility).

This effort uses the accepted terminology among browser vendors, and is thus named Interop 2022 instead of Compat 2022.
