# Interop Proposers Guide

As set out in the [README](README.md), the goal of the Interop project
is to improve the web by making it easier to create websites and
webapps that work well in every browser and browser engine.

This guide will set out signals that participants will use when
selecting focus areas, in order to help proposers understand what is
likely to be accepted, and help them advocate for their proposal in
the most effective way. Note that apart from those under "essential
criteria", none of the items listed are considered binding, and
different participants may use the criteria in different ways, or
supplement these with their own specific considerations.

## Essential Criteria

### Testing

Interop focus areas are scored by the pass rate of web platform
tests. This means that to be accepted:

* The feature must be covered by web-platform-tests

* The test coverage must be sufficient to represent a meaningful
  assessment of implementation quality and interoperability.

* Tests must be fully automated and included in Chrome, Edge, Firefox
  and Safari desktop runs on wpt.fyi.

Where there is insufficient test coverage during the proposal period,
proposers can provide an indication of how they expect to achieve the
necessary test coverage before the final focus areas are
picked. Individual participants will judge how credible they consider
these plans to be, and may choose to focus on proposals where tests
are already available.

### Ongoing Standards Work

Interop is not a venue for performing standards work. Proposals which
are not backed by an existing standard in a recognized standards venue
are highly unlikely to be accepted.

Proposals may cover areas which still have some unresolved standards
questions. In these cases it's likely that one of the following will
be required:

* The areas of ongoing discussion are explicitly excluded from the
  focus area.

* The areas of ongoing discussion are understood to be highly
  significant in terms of interoperability, have tentative tests, and
  participants agree that reaching resolution on the outstanding
  questions is possible either before the Interop period starts or
  early in the Interop period.

## Additional Signals

### Web Features

In some cases proposals may correspond to a specific
[web-feature](https://web-platform-dx.github.io/web-features-explorer/).
In these cases providing the web-feature id in the proposal will
allow information about the feature, such as relevant standards positions,
to be gathered and filled in automatically.

### Standards Positions

Interop is not intended as a venue to reach agreement on whether a
feature is suitable for the web platform.

Proposals covering features where participants have already indicated
significant concerns, for example through standards-position
repositories or similar public venues, are highly unlikely to be
accepted. Proposers may of course work with participants to address
their existing concerns before making an Interop proposal.


### Site Breakage and Workaround

This includes any evidence of interoperability problems affecting web
developers today, for example:

* Sites that are broken in some browsers due to interoperability
  problems.

* Evidence of sites or libraries needing to work around the browser
  differences in order to function correctly across multiple browsers.

### Size and Current State of the Feature

Whether or not the feature is already widely implemented, and the
confidence we have on full implementation being achievable:

* Features that are already widely implemented but have behavior
  differences may be considered more pressing than implementing new
  functionality.

* Features that are already present in multiple browser engines may be
  a higher priority than recently standardized features that are not
  yet implemented.

* Use counter data might be considered, if it's showing a clear trend
  and can be cleanly attributed to a real increase in use of the
  feature. Past experience shows that absolute numbers in use counter
  data can be misleading, so this is unlikely to carry much weight on
  its own.

### Browser Bugs

Any evidence of developer demand in public bug trackers. For example:

* +1 counts in the Chromium bug tracker.

### Developer Surveys

Surveys indicating the degree of developer interest in a specific
feature, or highlighting problems that the proposal is likely to
address. For example:

* State of HTML
* State of CSS
* State of JS
* Any MDN short survey
* Other similar public surveys or data sources measuring interest in
  web platform features.

Participants may also look at their internal research to understand
developer sentiment around a feature.

### Other Developer Sentiment

For example:

* Posts on sites like Stack Overflow asking about a feature, or trying
  to work around a missing feature or browser difference.

* Blog posts explaining how a feature addresses important problems.

### Likely Compatibility Impact

Whether the proposal covers a feature where browser differences are
likely to cause observable breakage:

* Whether the feature is easy to poly-fill accurately and with minimal
  performance impact.

* How likely users are to notice the absence of the feature (for
  example features that add new layout models compared to features
  that enable more subtle visual improvements).

* Whether the feature is a prerequisite to other features that
  themselves are expected to have high impact on users or developers.

### Platform Impact

Whether the proposal is likely to have a positive impact on
participants values for the web platform, for example:

* Accessibility

* Internationalization

* Privacy

* Security

### Overall Project Balance

Interop is intended to cover the entire web platform. Therefore the
assessment of proposals may also take into account what else has been
proposed, in order to ensure that the project is driving improvements
to many different areas of the platform.
