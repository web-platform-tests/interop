# Interop 2024

Interop 2023 is an effort to increase interoperability across browsers in key technical areas that are of high priority to web developers and end users. This effort is part of the [web-platform-tests](https://github.com/web-platform-tests/wpt) (WPT) project — an automated test suite for web standards — and run by a team of representatives from companies that make substantial contributions to browser rendering engines (including Apple, Bocoup, Google, Igalia, Microsoft, and Mozilla).

The process we went through to arrive at our priority list for Interop 2024 is available in the [proposal selection summary](./selection-process.md).

Similar to [Interop 2022](https://wpt.fyi/interop-2022) and [Interop 2023](https://wpt.fyi/interop-2023), the tests we selected will be continuously run on automated testing infrastructure. The test pass rates for each browser rendering engine will be displayed on the [Interop 2024 Dashboard](https://wpt.fyi/interop-2024) — displaying the percentage of passing tests in each chosen area, and an overall total score of tests that pass in every browser. The dashboard will also display scores for group progress on particular Investigation Efforts selected for the Interop team to work on throughout the year.

Interop 2024 is tightly focused on technology that is already specified in web standards.

## Dashboard

Our dashboard lives at [wpt.fyi/interop-2024](https://wpt.fyi/interop-2024).
It computes an interop score as the percentage of tests in WPT that pass in all three browser engines.

## Focus areas 

The following features were selected for Interop 2024.

### Accessibility 

- [Issue](https://github.com/web-platform-tests/interop/issues/526)
- [Tests](https://wpt.fyi/results/?product=chrome&product=edge&product=firefox&product=safari&aligned=&view=interop&q=label%3Ainterop-2024-accessibility&label=master&label=experimental) 

This focus area comes from work on one of the Interop 2023 investigation areas.
The work resulted in tests that mean we can include improving the interoperability of some specific areas relating to the browser’s accessibility tree.

The first area is Accessible Name and Description Computation (_accname_).
Accessible names convey the purpose or intent of the element.
This helps users understand what the element is for and how they can interact with it.
The accname specification defines how browsers create this accessible name string for an element.
[The ARIA specification includes a walkthrough of how this name is calculated](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/#name_calculation).

The second area is _computed role_.
The computed role of an element is a string that represents the role of the element as computed by the browser engine.
This is used primarily in developer tools and,
for example, in the WebDriver function getComputedRole, enabling interoperability testing.

Lastly, there's a new set of tests covering `display: contents`.

#### Work covered as part of Interop 2024

During Interop 2024 the aim is to ensure all browsers create accessible names and computed roles in the same way.

#### Resources

- [Accessible Name and Description Computation 1.2 Specification](https://w3c.github.io/accname/)
- [MDN: Accessible name](https://developer.mozilla.org/en-US/docs/Glossary/Accessible_name) 
- [More accessible markup with display: contents](https://hidde.blog/more-accessible-markup-with-display-contents/)


### CSS Nesting 

- [Issue](https://github.com/web-platform-tests/interop/issues/420)
- [Tests](https://wpt.fyi/results/css?product=chrome&product=edge&product=firefox&product=safari&aligned=&view=interop&q=label%3Ainterop-2024-nesting&label=master&label=experimental)

The CSS nesting module defines a syntax for nesting selectors,
providing the ability to nest one style rule inside another,
with the selector of the child rule relative to the selector of the parent rule.

CSS nesting is different from CSS preprocessors such as Sass in that it is parsed by the browser rather than being pre-compiled by a CSS preprocessor.

CSS nesting helps with the readability, modularity, and maintainability of CSS stylesheets.
It also potentially helps reduce the size of CSS files, thereby decreasing the amount of data downloaded by users.

#### Work covered as part of Interop 2024

While all engines support nesting,
there are differences as implementations happened while the specification was evolving.
The work here will ensure that all engines support nesting in the same way, and implement all features of the spec.

#### Resources

- [MDN: CSS nesting](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting)
- [Chrome for Developers: CSS nesting](https://developer.chrome.com/docs/css-ui/css-nesting)
- [Chrome for Developers: CSS nesting relaxed syntax update](https://developer.chrome.com/blog/css-nesting-relaxed-syntax-update)

### Custom Properties

- [Issue](https://github.com/web-platform-tests/interop/issues/477)
- [Tests](https://wpt.fyi/results/css/css-properties-values-api?product=chrome&product=edge&product=firefox&product=safari&aligned=&view=interop&q=label%3Ainterop-2023-property&label=master&label=experimental)

This focus area includes the `@property` at-rule.
This rule lets you define a custom property, including type checking and initial value.

#### Work covered as part of Interop 2024

This focus area was included in Interop 2023, work this year is to make it fully interoperable.

#### Resources

- [MDN @property](https://developer.mozilla.org/en-US/docs/Web/CSS/@property)

### Declarative Shadow DOM

- [Issue](https://github.com/web-platform-tests/interop/issues/501)
- [Tests](https://wpt.fyi/shadow-dom/declarative?product=chrome&product=edge&product=firefox&product=safari&aligned=&view=interop&q=label%3Ainterop-2024-dsd&label=master&label=experimental) 

Declarative Shadow DOM is a declarative API that allows the creation of shadow roots using only HTML and no JavaScript.
This API allows Web Components that use Shadow DOM to make use of Server-Side Rendering (SSR),
to get rendered content on screen quickly without requiring JavaScript for shadow root attachment.

#### Work covered as part of Interop 2024

Declarative Shadow DOM is already supported by Chrome, Safari, and Firefox. The work will ensure that any differences in implementation are resolved.

#### Resources

- [WebKit: Declarative Shadow DOM](https://webkit.org/blog/13851/declarative-shadow-dom/)
- [Chrome for Developers: Declarative Shadow DOM](https://developer.chrome.com/docs/css-ui/declarative-shadow-dom)

### font-size-adjust

- [Issue](https://github.com/web-platform-tests/interop/issues/541)
- [Tests](https://wpt.fyi/results/css/css-fonts?product=chrome&product=edge&product=firefox&product=safari&aligned=&view=interop&q=label%3Ainterop-2024-font-size-adjust&label=master&label=experimental) 

The `font-size-adjust` CSS property provides a way to modify the size of lowercase letters relative to the size of uppercase letters,
which defines the overall font-size.
This property is useful for situations where font fallback can occur.

#### Work covered as part of Interop 2024

The work includes basic support for the `font-size-adjust` property,
support for the `from-font` keyword, and support for the two value syntax
(which allows the developer to size according to another metric,
not just x-height).
Firefox and Safari have support for basic, `from-font` and two value.
The Chrome implementation needs updating.

#### Resources

- [MDN: font-size-adjust](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size-adjust)

### HTTP(S) URLs for WebSocket

- [Issue](https://github.com/web-platform-tests/interop/issues/567)
- [Tests](https://wpt.fyi/results/websockets?product=chrome&product=edge&product=firefox&product=safari&aligned=&view=interop&q=label%3Ainterop-2024-websockets&label=master&label=experimental)

The WebSocket constructor originally required `ws:` and `wss:` URLs,
preventing the use of relative URLs and resulting workaround code.

The specification has been updated to allow http(s) schemes, and therefore relative URLs.
These are normalized to `ws:` and `wss:`.

#### Work covered as part of Interop 2024

The change to the specification has already been implemented in Safari,
in Interop 2024 the aim is to land implementations in the other browsers.

#### Resources

- [WebSockets Living Standard](https://websockets.spec.whatwg.org/) 

### IndexedDB

- [Issue](https://github.com/web-platform-tests/interop/issues/516)
- [Tests](https://wpt.fyi/results/IndexedDB?product=chrome&product=edge&product=firefox&product=safari&aligned=&view=interop&q=label%3Ainterop-2024-indexeddb&label=master&label=experimental)

IndexedDB is a way to persistently store data inside a user's browser.
It lets authors create web applications with rich query abilities regardless of network availability,
so applications can work both online and offline.

#### Work covered as part of Interop 2024

All engines have good support for version 2 IndexedDB functionality,
however there are a number of inconsistencies with newer features (version 3),
and it is these that Interop 2024 seeks to address.

The work this year does not include storage buckets.

#### Resources

- [MDN: Using IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB) 
- [web.dev: IndexedDB](https://web.dev/articles/indexeddb)

#### Layout

- [Issue for flexbox](https://github.com/web-platform-tests/interop/issues/478)
- [Issue for grid](https://github.com/web-platform-tests/interop/issues/481)
- [Issue for subgrid](https://github.com/web-platform-tests/interop/issues/470)
- [Tests](https://wpt.fyi/results/css?product=chrome&product=edge&product=firefox&product=safari&aligned=&view=interop&q=label%3Ainterop-2021-flexbox+or+label%3Ainterop-2023-flexbox+or+label%3Ainterop-2021-grid+or+label%3Ainterop-2023-grid+or+label%3Ainterop-2022-subgrid&label=master&label=experimental)

This focus area covers layout methods included in Interop 2023 — flexbox, grid, and subgrid.

#### Work covered as part of Interop 2024

During Interop 24 remaining test failures for these areas will be addressed. 

#### Resources

- [MDN: CSS grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout)
- [MDN: Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout)
- [MDN: Subgrid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid)

### Pointer and mouse events

- [Issue](https://github.com/web-platform-tests/interop/issues/472)
- [Tests](https://wpt.fyi/results/?product=chrome&product=edge&product=firefox&product=safari&aligned=&view=interop&q=label%3Ainterop-2023-events&label=master&label=experimental)

Pointer events are DOM events that are fired for a pointing device.
They are designed to create a single DOM event model to handle pointing input devices such as a mouse,
pen/stylus or touch (such as one or more fingers).

In Interop 2022, pointer and mouse events were one of the investigation areas.
This led to the inclusion of pointer and mouse events as a focus area in 2023.
These work included pointer and mouse interaction with pages,
including how they behave with hit testing and scrolling areas.

#### Work covered as part of Interop 2024

Includes tests that were not addressed during Interop 2023, and some new tests.
The work does not include touch or pen input.

#### Resources

- [MDN: Pointer events](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events)

### Popover

- [Issue](https://github.com/web-platform-tests/interop/issues/423)
- [Tests](https://wpt.fyi/results/html/semantics/popovers?product=chrome&product=edge&product=firefox&product=safari&aligned=&view=interop&q=label%3Ainterop-2024-popover&label=master&label=experimental)

The Popover API provides developers with a standard, consistent,
flexible mechanism for displaying popover content on top of other page content.
Popover content can be controlled either declaratively using HTML attributes,
or via JavaScript.

#### Work covered as part of Interop 2024

The Popover API is implemented in Chrome and Safari,
with the Firefox implementation due to ship.
The work for Interop 2024 is to fix failing tests to ensure interoperable implementations.
Work in this area does not include close watcher, hints,
the anchor attribute, or the overlay property.

#### Resources

- [MDN: Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)
- [Chrome for Developers: Introducing the Popover API](https://developer.chrome.com/blog/introducing-popover-api)

### Relative Color Syntax

- [Issue](https://github.com/web-platform-tests/interop/issues/426)
- [Tests](https://wpt.fyi/results/css/css-color?product=chrome&product=edge&product=firefox&product=safari&aligned=&view=interop&q=label%3Ainterop-2024-relative-color&label=master&label=experimental)

The CSS Relative Color syntax allows a color to be defined relative to another color,
using the `from` keyword and optionally `calc()` for any of the color values.

#### Work covered as part of Interop 24

Relative color syntax is interoperable, however implementations don’t include the `currentcolor` keyword,
the work during Interop 2024 will implement this keyword interoperably.

#### Resources

- [Chrome for Developers: CSS Relative Color Syntax](https://developer.chrome.com/blog/css-relative-color-syntax)
- [CSS Color Spaces and Relative Color Syntax](https://12daysofweb.dev/2022/css-color-spaces-relative-color-syntax/)


### HTMLVideoElement.requestVideoFrameCallback()

- [Issue](https://github.com/web-platform-tests/interop/issues/494)
- [Tests](https://wpt.fyi/results/video-rvfc?product=chrome&product=edge&product=firefox&product=safari&aligned=&view=interop&q=label%3Ainterop-2024-video-rvfc&label=master&label=experimental)

The `requestVideoFrameCallback()` method of the HTMLVideoElement API
lets you register a callback that runs in the rendering steps when a new video frame is sent to the compositor.
This enables efficient per-video-frame operations on video,
such as video processing and painting to a canvas, video analysis,
or synchronization with external audio sources.

#### Work covered as part of Interop 24

The work involves implementing the method in Firefox,
and fixing bugs in the Chrome and Safari implementations.

#### Resources

- [MDN: requestVideoFrameCallback](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/requestVideoFrameCallback) 
- [MDN: HTMLVideoElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement)
- [web.dev: Perform efficient per-video-frame operations on video with requestVideoFrameCallback()](https://web.dev/articles/requestvideoframecallback-rvfc) 

### Scrollbar styling

- [Issue for scrollbar-width](https://github.com/web-platform-tests/interop/issues/571)
- [Issue for: scrollbar-gutter](https://github.com/web-platform-tests/interop/issues/419)
- [Tests](https://wpt.fyi/results/css?product=chrome&product=edge&product=firefox&product=safari&aligned=&view=interop&q=label%3Ainterop-2024-scrollbar&label=master&label=experimental)

The `scrollbar-width` property lets you set the maximum thickness of an element's scrollbars when they are shown.
The `scrollbar-gutter` property provides a way to reserve space for the scrollbar,
to prevent layout shifts as a scrollbar appears or disappears.

#### Work covered as part of Interop 2024

These properties are not currently implemented in all browsers,
so the work this year is to make the properties interoperable.

#### Resources

- [MDN: scrollbar-width](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width)
- [MDN: scrollbar-gutter](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter)
- [Chrome for Developers: Scrollbar styling](https://developer.chrome.com/docs/css-ui/scrollbar-styling) 

### @starting-style and transition-behavior

- [Issue for the `@starting-style` CSS rule](https://github.com/web-platform-tests/interop/issues/582) 
- [Issue for the `transition-behavior` CSS property](https://github.com/web-platform-tests/interop/issues/580)
- [Tests](https://wpt.fyi/results/css?product=chrome&product=edge&product=firefox&product=safari&aligned=&view=interop&q=label%3Ainterop-2024-starting-style+or+label%3Ainterop-2024-transition-behavior&label=master&label=experimental)

This focus area includes work on the `@starting-style` CSS rule.
This rule is used to define starting values for properties set on an element that you want to transition from when the element receives its first style update,
when first displayed on a previously loaded page.

Also included is the transition-behavior property which specifies whether transitions will be started for properties whose animation behavior is discrete.

#### Work covered as part of Interop 2024

These properties are currently implemented in Chrome and Edge,
the aim is to make them interoperable across all browsers this year. 

#### Resources

- [MDN: transition-behavior](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-behavior)
- [MDN: @starting-style](https://developer.mozilla.org/en-US/docs/Web/CSS/@starting-style)
- [Chrome for Developers: Entry and exit animations](https://developer.chrome.com/blog/entry-exit-animations#the_transition-behavior_property)

### Text directionality 

- [Issue](https://github.com/web-platform-tests/interop/issues/535)
- [Tests](https://wpt.fyi/results/html/dom/elements/global-attributes?product=chrome&product=edge&product=firefox&product=safari&aligned=&view=interop&q=label%3Ainterop-2024-dir&label=master&label=experimental)

The `:dir()` CSS pseudo-class selector matches elements based on directionality,
which is determined based on the HTML dir attribute. 
`:dir(ltr)` matches left-to-right text directionality,
and `:dir(rtl)` matches elements with right-to-left text directionality.
It is not equivalent to `[dir]` attribute selectors because it matches against directions inherited from an ancestor with the dir attribute,
and because it matches against the direction computed from use of `dir=auto
(which determines directionality from the first character in the text with strong directionality).

#### Work covered as part of Interop 2024

The `:dir()` pseudo-class was included in Interop 2023 as part of the pseudo-classes focus area.
The work resulted in the need for some specification improvements,
which have now been made.
The work this year will ensure interoperability of `:dir()` and `dir=auto`, based on these improvements.

#### Resources

- [MDN: :dir](https://developer.mozilla.org/en-US/docs/Web/CSS/:dir)

#### text-wrap: balance

- [Issue](https://github.com/web-platform-tests/interop/issues/561) 
- [Tests](https://wpt.fyi/results/css/css-text?product=chrome&product=edge&product=firefox&product=safari&aligned=&view=interop&q=label%3Ainterop-2024-text-wrap&label=master&label=experimental)

The balance value of text-wrap lets the browser know that you would like it to balance the lines of text.
It's typically used in headings or other short text sections to avoid typographic widows.

#### Work covered as part of Interop 2024

Currently, browsers differ in their support for the various longhand and shorthand versions of this property.
The work this year aims to make these interoperable.

The focus area does not include tests for interactions with float and `line-clamp`.

#### Resources

- [MDN: text-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap)
- [Chrome for Developers: CSS text-wrap: balance](https://developer.chrome.com/docs/css-ui/css-text-wrap-balance)
- [CSS text-wrap: balance](https://ishadeed.com/article/css-text-wrap-balance/) 
- [An end to typographic widows on the web](https://clagnut.com/blog/2424) 

### URL

- [Issue](https://github.com/web-platform-tests/interop/issues/424) 
- [Tests](https://wpt.fyi/results/url?product=chrome&product=edge&product=firefox&product=safari&aligned=&view=interop&q=label%3Ainterop-2023-url&label=master&label=experimental)

URLs are a fundamental part of the web platform,
however as part of the early web they were under-specified leading to various interoperability problems with URL parsing.

#### Work covered as part of Interop 2024

URL was an Interop 2023 focus area, work will continue during Interop 2024 to fix remaining test failures.

#### Resources

- [URL Living Standard](https://url.spec.whatwg.org/)

## Investigation Efforts

An investigation efforts consists of a set of tasks that will bring the feature up to the bar required for a Focus Area in the future. If this involves any standards work, that work must be done in the appropriate standards group, and those doing the work need to join that group.

The following investigation areas were selected for Interop 2023.


### Accessibility Testing

Carried over from 2023, this investigation area involves working towards generating consistent accessibility tries from the same DOM and CSS.


### Mobile Testing

Carried over from 2023, this investigation area involves doing the infrastructure work required to allow WPT Interop to accept future Interop proposals that test mobile-specific functionality which can't be scored using the current desktop-only wpt CI.

### WebAssembly Testing

A new investigation area for 2024.

## Join the conversation

You're also welcome to join the conversation in the [`#interop20xx:matrix.org` Matrix channel](https://app.element.io/#/room/#interop2022:matrix.org)!
