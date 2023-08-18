# The Interop Project

Welcome to the Interop project, an ongoing effort to make the web more interoperable in key areas, prioritized by web developer and user needs. This is part of [the web-platform-tests project](https://github.com/web-platform-tests/wpt), the main test suite for the web platform.

Please see the [Interop 2023](./2023/README.md) for the current iteration of the project!


## The Purpose of the Interop Project

*Improve interoperability significantly for the benefit of web developers and users.*

The goal of the Interop Project is to improve the web by making it easier to make websites and web apps that work in every browser or browser engine at the same time.

This is done by increasing the amount of “interoperability” between browsers — when each browser engine has implemented the same technology the exact same way, as bug-free as possible.

Today’s browsers have made a commitment to implement web technology according to a shared web standard, created in organizations such as the W3C or WHATWG, where technologies such as CSS and HTML are officially defined.

There is a seemingly infinite amount of work that browser engineering teams could be focused on. The Interop Project provides incentives to focus on the specific and practical work that will help web developers most in the coming year.

## Scope

The Interop Project is a collaboration between organizations that implement web technology in browser engines. It’s a shared agreement to prioritize work on certain web technologies to improve interoperability. And to keep track of that work by using automated tests to score how much progress each participating browser has made reaching the shared goals.

There are many fantastic ideas for what the web could become. But the Interop Project is not the place to begin making those dreams a reality. This is a place to focus on interoperable implementations of ideas that have already been defined in detail in web standards. And it’s a place to focus on interoperability through the use of automated tests to evaluate whether or not a particular browser matches what the web standard says it should be doing. In order for this to be possible, the Interop Project only focuses on specific kinds of web technology.

Everything chosen for the next year’s project must be defined in a sufficiently mature standards-track web specification. If there is no web standard, then there is no definition of what a particular technology “should” be doing. The Interop Project is not an organization for defining web standards. That work is important, and must happen in the appropriate bodies, not here.

Everything chosen for the next year’s project must be testable using automated tests on existing testing platforms. A proposal cannot be accepted if there are no automated tests to evaluate conformance to the web standard; if it’s not possible to test the technology being proposed; or if the tests would need to run in environments that are not yet available on the infrastructure for Web Platform Tests (for example, in 2022 and 2023, testing on mobile operating systems was not possible).

If there is a particular blocker making it hard to test a certain feature, that could make for a good Investigation Project proposal. And ideas about how the WPT/Interop Project testing infrastructure can be improved for the future can be proposed as Investigation Projects, to be considered as work for the Interop Project to take on in the next year.

### **Requirements for Focus Area proposals**

* This feature has a mature-enough web standard from an established standards development organization such as IETF, Khronos Group, TC39, WHATWG, or the W3C.
* This feature has high quality tests in WPT or Test262.

### **Guidance for Prioritizing Focus Area proposals**

We should prioritize areas where web developers have had problems using them because of differences between browsers, or because they aren’t implemented in all browsers. There are many sources for such information:

* Perhaps there are issues filed about such problems in the Chromium, Gecko, or WebKit bug trackers.
* Perhaps there are many complaints about this feature in public discussions on sites like Stack Overflow.
* Perhaps this feature ranks in high-demand or as a pain-point consistently in polls and surveys of web developers.
* Perhaps there are documented examples of sites or libraries working around the fact that it is missing or not interoperable.

When assessing the prioritization of existing web technology, it can be helpful to assess how often the technology is being used currently. (Such thinking should also consider important technology might not be in popular use if a lack of interoperability is a painful barrier.)

* The feature has high usage via Chrome use counters.
* The feature has high usage via HTTP Archive.
* The feature has a high number of mentions on developer resources like Stack Overflow.

There are also guiding values that should be taken into consideration, beyond pure demand:

* This feature has a positive impact on accessibility.
* This feature has a positive impact on internationalization.
* This feature has a positive impact on privacy.
* This feature has a positive impact on security.
