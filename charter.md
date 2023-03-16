# Interop Team Charter

The Interop Team aims to make the web more interoperable in key areas, prioritized by web developer and user needs. This team is part of [the web-platform-tests project](https://github.com/web-platform-tests/wpt), the main test suite for the web platform.

## Governance

The team makes decisions based on consensus, which is defined as support from at least two participating organizations and no opposition. Decisions can be made both in the repository and in meetings, as long as consensus can be established.

The chair of the team is responsible for organizing meetings, driving discussions to a conclusion, and recording decisions. The team elects an individual as the chair based on consensus once per calendar year. There's no term limit; the same individual can be reelected as chair.

Meeting time and agenda should be announced by the chair at least 48 hours in advance, and meeting minutes posted in the repository.

The Interop effort is subject to the [WPT code of conduct](https://github.com/web-platform-tests/wpt/blob/master/CODE_OF_CONDUCT.md).

Substantive changes to this charter are done via the [web-platform-tests RFC process](https://github.com/web-platform-tests/rfcs).

## Scope

The output of the Interop project is metrics designed to measure and improve the interoperability of the web platform.

These metrics are expected to be comprised of:

- Groups of automated tests that can be used to automatically compute an interoperability score for specific platform features in implementations.
- Work to improve the interoperability of the platform that cannot be measured through test pass rates and is scored by consensus decision.

The team is responsible for maintaining [Compat 2021](https://wpt.fyi/compat2021), [Interop 2022](https://wpt.fyi/interop-2022), and defining future interoperability efforts and metrics.

Initially the team will produce one set of interop metrics per year. This may be changed in the future by consensus decision.

If at any time the team is unable to reach consensus on which features to include in its metrics, or the set of features which has consensus is considered insufficient to fulfill the goals of the team, the effort will be paused until the situation can be resolved.

### Extended Scope

The team may also work on additional metrics or data visualizations to provide insights for a broader set of features, aimed at making the web more interoperable. For example, evolving the [Browser Specific Failures](https://github.com/web-platform-tests/results-analysis/blob/main/browser-specific-failures.js) metric is in this extended scope.

### Out of Scope

This is not a venue for standardization, and work on new platform features is out of scope. However the group may liaise with existing standards groups to help progress work which affects the interoperability of the platform, or the ability to test and measure interoperability of existing features.

Browser features that don't affect web developers, like bookmarks, are out of scope.

## Team Members

The following organizations make up the Interop Team, in alphabetical order:

* Apple
* Bocoup
* Google
* Igalia
* Microsoft
* Mozilla

## Joining and Leaving the Team

The Interop Team is made up of organization with a track record of contributions to the web-platform-tests project.

Organization my apply to join the team by contacting interop@web-platform-tests.org. New members will be added with a consensus decision of existing members.

Existing members may leave the team at any time without further obligation.
