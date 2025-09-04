# The Interop Project

Welcome to the Interop Project, an ongoing effort to make the web more interoperable in key areas, prioritized by user and web developer needs. This is part of [the web-platform-tests project](https://github.com/web-platform-tests/wpt), the main test suite for the web platform, and worked on by the [Interop Team](./charter.md).

Please see the [Interop 2024 Dashboard](https://wpt.fyi/interop-2024) and [Interop 2024 README](./2024/README.md) for the current iteration of the project!

Please see the [Interop 2025 README](./2025/README.md) for the ongoing planning of Interop 2025, which will be announced in early 2025.

## Proposing a focus area for 2026

**Interop 2026 is now open for proposals!** See the [proposal guide](./making-a-proposal.md) for details, and how to give your proposal the best chance of success.

## The Purpose of the Interop Project

*Improve interoperability significantly for the benefit of users and web developers.*

The goal of the Interop Project is to improve the web by making it easier to make websites and web apps that work in every browser or browser engine at the same time.

This is done by increasing the amount of “interoperability” between browsers — when each browser engine has implemented the same technology the exact same way, as bug-free as possible.

Today’s browsers have made a commitment to implement web technology according to a shared web standard, created in organizations such as the [W3C](https://w3.org) or [WHATWG](https://whatwg.org), where technologies such as CSS and HTML are officially defined.

There is a seemingly infinite amount of work that browser engineering teams could be focused on. The Interop Project provides incentives to focus on the specific and practical work that will have the most positive impact on the web platform in the coming year.

## Scope

The Interop Project is a collaboration between organizations that implement web technology in browser engines. It defines a metric based on a set of web technologies that we collectively believe to be important to improve interoperability. This metric publicly keeps track of that work by using automated tests to score how much progress each participating browser has made reaching the shared goals.

There are many fantastic ideas for what the web could become. But the Interop Project is not the place to begin making those dreams a reality. This is a place to focus on interoperable implementations of ideas that have already been defined in detail in web standards. And it’s a place to focus on interoperability through the use of automated tests to evaluate whether or not a particular browser matches what the web standard says it should be doing. In order for this to be possible, the Interop Project only focuses on specific kinds of web technology.

Everything chosen for the next year’s project must be defined in a sufficiently mature standards-track web specification. If there is no web standard, then there is no definition of what a particular technology “should” be doing. The Interop Project is not an organization for defining web standards. That work is important, and must happen in the appropriate bodies, not here.

Everything chosen for the next year’s project must be testable using automated tests on existing testing platforms. A proposal cannot be accepted if there are no automated tests to evaluate conformance to the web standard; if it’s not possible to test the technology being proposed; or if the tests would need to run in environments that are not yet available on the infrastructure for Web Platform Tests (for example, in 2022 and 2023, testing on mobile operating systems was not possible).

If there is a particular blocker making it hard to test a certain feature, that could make for a good Investigation Project proposal. And ideas about how the WPT/Interop Project testing infrastructure can be improved for the future can be proposed as Investigation Projects, to be considered as work for the Interop Project to take on in the next year.

### **Requirements for Focus Area proposals**

* This feature has a mature-enough web standard from an established standards development organization such as IETF, Khronos Group, TC39, WHATWG, or the W3C.
* This feature has high quality tests in WPT or Test262.

### **Guidance for Prioritizing Focus Area proposals**

Beyond the above requirements, in line with the above goal, areas where web developers have had problems using them should be prioritized, whether that is because of differences between browsers, or because they aren’t implemented in all browsers. There are many potential sources for information about such areas, including but not limited to:

* Issues filed about such problems in the [Chromium](https://crbug.com/), [Gecko](https://bugzilla.mozilla.org/), or [WebKit](https://bugs.webkit.org/) bug trackers.
* Complaints about this feature in public discussions on sites like Stack Overflow.
* Ranking as a high-demand feature or as a pain-point consistently in polls and surveys of web developers.
* Documented examples of sites or libraries working around the fact that a feature is missing or not interoperable.
* Compat issues that affect users on existing sites, such as those reported on [webcompat.com](https://webcompat.com/).

When assessing the prioritization of existing web technology, it can be helpful to assess how often the technology is being used currently. However, one should also consider if important technology might not be in popular use due to lack of interoperability. Potential sources of data include but are not limited to:

* Browser use counters.
* Usage recorded via HTTP Archive crawls.
* Number of mentions on developer resources like Stack Overflow.

There are also guiding values that should be taken into consideration:

* The feature has a positive impact on accessibility.
* The feature has a positive impact on internationalization.
* The feature has a positive impact on privacy.
* The feature has a positive impact on security.

## Feedback

If you see a bug or unclarity in the site or process of Interop, please file an [issue](https://github.com/web-platform-tests/interop/issues). For other questions or advice, you can also [email us](mailto:interop-questions@googlegroups.com).
