# Interop 2025

Interop 2025 is an effort to increase the interoperability of key features of the web platform across browsers. These features, which are of high priority to web developers and end users, have been [proposed](https://github.com/orgs/web-platform-tests/projects/5) by the web development community, and have been selected by the Interop Project team (to learn more, see [Interop 2025 proposal selection process](https://github.com/web-platform-tests/interop/blob/main/2025/selection-process.md)).

The Interop 2025 effort is part of the [web-platform-tests](https://github.com/web-platform-tests/wpt) (WPT) project — an automated test suite for web standards — and run by a team of representatives from companies that make substantial contributions to browser rendering engines (including Apple, Bocoup, Google, Igalia, Microsoft, and Mozilla).

Similar to previous years ([2022](https://wpt.fyi/interop-2022), [2023](https://wpt.fyi/interop-2023), and [2024](https://wpt.fyi/interop-2024)), the tests we selected will be continuously run on automated testing infrastructure. The test pass rates for each browser rendering engine will be displayed on the [Interop 2025 dashboard](https://wpt.fyi/interop-2025) — displaying the percentage of passing tests in each chosen area, and an overall total score of tests that pass in every browser. The dashboard will also display scores for group progress on particular investigation efforts selected by the Interop team to work on throughout the year.

Interop 2025 is focused on technology that is already specified in web standards.

## Contents

* [Focus areas](#focus-areas)
  * [Anchor positioning](#anchor-positioning)
  * [`backdrop-filter`](#backdrop-filter)
  * [Core Web Vitals](#core-web-vitals)
  * [`<details>` element](#details-element)
  * [Layout](#layout)
  * [Modules](#modules)
  * [Navigation API](#navigation-api)
  * [Pointer and Mouse events](#pointer-and-mouse-events)
  * [Remove mutation events](#remove-mutation-events)
  * [`@scope`](#scope)
  * [`scrollend` event](#scrollend)
  * [Storage Access API](#storage-access-api)
  * [`text-decoration`](#text-decoration)
  * [URLPattern](#urlpattern)
  * [View Transitions](#view-transitions)
  * [WebAssembly](#webassembly)
  * [Web Compat](#web-compat)
  * [WebRTC](#webrtc)
  * [Writing modes](#writing-modes)
* [Investigation efforts](#investigation-efforts)
  * [Accessibility testing](#accessibility-testing)
  * [Gaming](#gaming)
  * [Mobile testing](#mobile-testing)
  * [Privacy testing](#privacy)
  * [WebVTT](#webvtt)

<a name="focus-areas"></a>

## Focus areas

<a name="anchor-positioning"></a>

### Anchor positioning

CSS anchor positioning sets an element's position and size based on the position and size of another element. For example, you can use anchor positioning to place a tooltip next to the content it references, in a way that avoids overflows or offscreen rendering.

**Resources**:

* [Focus area proposal](https://github.com/web-platform-tests/interop/issues/752)
* [Tests](https://wpt.fyi/results/css/css-anchor-position?label=master&label=experimental&aligned&q=label%3Ainterop-2025-anchor-positioning)
* [Spec](https://drafts.csswg.org/css-anchor-position-1/)
* [CSS anchor positioning](https://developer.mozilla.org/docs/Web/CSS/CSS_anchor_positioning), on MDN

<a name="backdrop-filter"></a>

### `backdrop-filter`

The `backdrop-filter` CSS property applies graphical effects such as blurring or color shifting to the area that's behind an element.

**Resources**:

* [Focus area proposal](https://github.com/web-platform-tests/interop/issues/822)
* [Tests](https://wpt.fyi/results/css/filter-effects?label=master&label=experimental&aligned&q=label%3Ainterop-2025-backdrop-filter)
* [Spec](https://drafts.fxtf.org/filter-effects-2/#BackdropFilterProperty)
* [backdrop-filter](https://developer.mozilla.org/docs/Web/CSS/backdrop-filter), on MDN

<a name="core-web-vitals"></a>

### Core Web Vitals

Web Vitals is an initiative to provide unified guidance for quality signals that are essential to delivering a great user experience on the web. The Core Web Vitals metrics are the subset of Web Vitals that apply to all web pages and that each represents a distinct facet of the user experience.
This year, the work will focus on implementing the Largest Contentful Paint (LCP) and Interaction to Next Paint (INP) metrics across browsers. The Cumulative Layout Shift (CLS) metric is not in scope.

**Resources**:

* [Focus area proposal for LCP](https://github.com/web-platform-tests/interop/issues/892)
* [Focus area proposal for INP](https://github.com/web-platform-tests/interop/issues/894)
* [Tests](https://wpt.fyi/results/?label=master&label=experimental&aligned&q=label%3Ainterop-2025-core-web-vitals)
* [Web Vitals](https://web.dev/articles/vitals), on web.dev

<a name="details-element"></a>

### `<details>` element

The `<details>` element is a disclosure widget which can be expanded to reveal additional content. When closed, only the nested `<summary>` element is visible.
This year, the work will focus on making recent additions to the `<details>` element work across all browsers, including:

* The `::marker` and `::details-content` CSS pseudo-elements.
* Using `content-visibility` to toggle the content instead of display.
* Auto-expanding the `<details>` element with find-in-page matches.

In addition, this focus area also includes the `hidden="until-found"` attribute, which hides an element until it is found using the browser's find-in-page search or it is directly navigated to by following a URL fragment.

**Resources**:

* [Focus area proposal for `<details>/<summary>` rendering](https://github.com/web-platform-tests/interop/issues/871)
* [Focus area proposal for `hidden=until-found`](https://github.com/web-platform-tests/interop/issues/768)
* [Tests](https://wpt.fyi/results/?label=master&label=experimental&aligned&q=label%3Ainterop-2025-details)
* Specs: [details element](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element), [hidden attribute](https://html.spec.whatwg.org/multipage/interaction.html#the-hidden-attribute)
* [`<details>`: The Details disclosure element](https://developer.mozilla.org/docs/Web/HTML/Element/details), on MDN
* [::marker](https://developer.mozilla.org/docs/Web/CSS/::marker), on MDN
* [::details-content](https://developer.mozilla.org/docs/Web/CSS/::details-content), on MDN
* [The hidden until found state](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden#the_hidden_until_found_state), on MDN

<a name="layout"></a>

### Layout

This focus area is a carry over from Interop 2024. See [last year's layout focus area description](https://github.com/web-platform-tests/interop/blob/main/2024/README.md#layout). This year, the work will focus on continuing to improve the interoperability of Grid and Flexbox in CSS, as these are important primitives.

**Resources**:

* [Focus area proposal](https://github.com/web-platform-tests/interop/issues/804)
* [Tests](https://wpt.fyi/results/css?label=master&label=stable&aligned&view=interop&q=label%3Ainterop-2021-flexbox%20or%20label%3Ainterop-2023-flexbox%20or%20label%3Ainterop-2021-grid%20or%20label%3Ainterop-2023-grid%20or%20label%3Ainterop-2022-subgrid)
* Specs: [Grid](https://drafts.csswg.org/css-grid/), [Flexbox](https://drafts.csswg.org/css-flexbox/)
* [Flexbox](https://developer.mozilla.org/docs/Learn_web_development/Core/CSS_layout/Flexbox), on MDN
* [Grid](https://developer.mozilla.org/docs/Learn_web_development/Core/CSS_layout/Grids), on MDN

<a name="modules"></a>

### Modules

The JavaScript import statement can load JavaScript modules. In addition, when used with the `type` attribute, it can load CSS modules or JSON data. For example, `import … with { type: "json" }` loads JSON data (also known as JSON module scripts).
This year, the work will focus on importing JSON module scripts.

**Resources**:

* [Focus area proposal for JSON module scripts](https://github.com/web-platform-tests/interop/issues/705)
* [Focus area proposal for import attributes](https://github.com/web-platform-tests/interop/issues/733)
* [Tests](https://wpt.fyi/results/html/semantics/scripting-1/the-script-element?label=master&label=experimental&aligned&q=label%3Ainterop-2025-modules)
* [Spec](https://tc39.es/proposal-import-attributes/)
* [import](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/import), on MDN
* [import attributes](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/import/with), on MDN

<a name="navigation-api"></a>

### Navigation API

The Navigation API makes it easier for applications to manage meaningful user state changes within the application. The API initiates, intercepts, or modifies browser navigation actions.

**Resources**:

* [Focus area proposal](https://github.com/web-platform-tests/interop/issues/709)
* [Tests](https://wpt.fyi/results/navigation-api?label=master&label=experimental&aligned&q=label%3Ainterop-2025-navigation)
* [Spec](https://html.spec.whatwg.org/multipage/nav-history-apis.html#navigation-api)
* [Navigation API](https://developer.mozilla.org/docs/Web/API/Navigation_API), on MDN

<a name="pointer-and-mouse-events"></a>

### Pointer and Mouse events

Pointer and mouse events are DOM events that are fired due to the user interacting with a pointing device. Pointer events are designed to create a single DOM event model to handle pointing input devices such as a mouse, pen/stylus or touch (such as one or more fingers).
This focus area is a carry over from Interop 2024. See [last year's focus area description](https://github.com/web-platform-tests/interop/blob/main/2024/README.md#pointer-and-mouse-events).

**Resources**:

* [Focus area proposal](https://github.com/web-platform-tests/interop/issues/809)
* [Tests](https://wpt.fyi/results/?label=master&label=stable&aligned&view=interop&q=label%3Ainterop-2023-events)
* [Spec](https://w3c.github.io/pointerevents/)
* [Pointer events](https://developer.mozilla.org/docs/Web/API/Pointer_events), on MDN
* [MouseEvent](https://developer.mozilla.org/docs/Web/API/MouseEvent), on MDN

<a name="remove-mutation-events"></a>

### Remove mutation events

The legacy mutation events like `DOMSubtreeModified`, `DOMNodeInserted`, or `DOMNodeRemoved` watch for changes to the DOM and run an event listener callback when DOM changes occur. These mutation events were deprecated in favor of the MutationObserver API, which is more performant and less error-prone.
The goal this year is to fully remove support for mutation events in all browsers.

**Resources**:

* [Focus area proposal](https://github.com/web-platform-tests/interop/issues/784)
* [Tests](https://wpt.fyi/results/dom?label=master&label=experimental&aligned&q=label%3Ainterop-2025-remove-mutation-events)
* [MutationEvent](https://developer.mozilla.org/docs/Web/API/MutationEvent), on MDN
* [MutationObserver](https://developer.mozilla.org/docs/Web/API/MutationObserver), on MDN

<a name="scope"></a>

### `@scope`

The `@scope` CSS at-rule selects the DOM subtree within which a group of CSS rules apply.

**Resources**:

* [Focus area proposal](https://github.com/web-platform-tests/interop/issues/838)
* [Tests](https://wpt.fyi/results/css/css-cascade?label=master&label=experimental&aligned&q=label%3Ainterop-2025-scope)
* [Spec](https://drafts.csswg.org/css-cascade-6/#scoped-styles)
* [@scope](https://developer.mozilla.org/docs/Web/CSS/@scope), on MDN

<a name="scrollend"></a>

### `scrollend` event

The `scrollend` event fires when an element or document has finished scrolling.

**Resources**:

* [Focus area proposal](https://github.com/web-platform-tests/interop/issues/774)
* [Tests](https://wpt.fyi/results/dom/events/scrolling?label=master&label=experimental&aligned&q=label%3Ainterop-2025-scrollend)
* [Spec](https://drafts.csswg.org/cssom-view/#eventdef-document-scrollend)
* [Document: scrollend event](https://developer.mozilla.org/docs/Web/API/Document/scrollend_event), on MDN

<a name="storage-access-api"></a>

### Storage Access API

The `document.requestStorageAccess()` method allows content in iframes to request storing and reading cookies and other site data, while the `document.hasStorageAccess()` method checks if such access is granted. The Storage Access API makes it possible to remove third-party cookies while supporting authenticated embedding.
Storage access headers are out of scope for this focus area.

**Resources**:

* [Focus area proposal](https://github.com/web-platform-tests/interop/issues/844)
* [Tests](https://wpt.fyi/results/?label=master&label=experimental&aligned&view=interop&q=label%3Ainterop-2025-storageaccess)
* [Spec](https://privacycg.github.io/storage-access/)
* [Storage Access API](https://developer.mozilla.org/docs/Web/API/Storage_Access_API), on MDN

<a name="text-decoration"></a>

### `text-decoration`

The `text-decoration` CSS property sets the style and color of decorative lines including underline, overline, line-through, or a combination of lines.
This year, the goal is to remove the need for a vendor prefix when using the `text-decoration` CSS property, and to make it interoperable across all browsers.

**Resources**:

* [Focus area proposal](https://github.com/web-platform-tests/interop/issues/724)
* [Tests](https://wpt.fyi/results/?label=master&label=experimental&aligned&view=interop&q=label%3Ainterop-2025-textdecoration)
* [Spec](https://drafts.csswg.org/css-text-decor/#text-decoration-property)
* [text-decoration](https://developer.mozilla.org/docs/Web/CSS/text-decoration), on MDN

<a name="urlpattern"></a>

### URLPattern

The URLPattern API creates patterns that can be matched against URLs or URL components.

**Resources**:

* [Focus area proposal](https://github.com/web-platform-tests/interop/issues/740)
* [Tests](https://wpt.fyi/results/urlpattern?label=master&label=experimental&aligned&q=label%3Ainterop-2025-urlpattern)
* [Spec](https://urlpattern.spec.whatwg.org/)
* [URL Pattern API](https://developer.mozilla.org/docs/Web/API/URL_Pattern_API), on MDN

<a name="view-transitions"></a>

### View Transitions

View transitions allow you to create animated visual transitions between different states of a document.
This year, the work will focus on making same-document view transitions interoperable and on implementing the `view-transition-class` CSS property.

**Resources**:

* [Focus are proposal for same-document view transitions](https://github.com/web-platform-tests/interop/issues/764)
* [Focus area proposal for view transition classes](https://github.com/web-platform-tests/interop/issues/767)
* [Tests](https://wpt.fyi/results/css/css-view-transitions?label=master&label=experimental&aligned&view=interop&q=all%28label%3Ainterop-2025-view-transitions%29)
* [Spec](https://drafts.csswg.org/css-view-transitions/)
* [View Transition API](https://developer.mozilla.org/docs/Web/API/View_Transition_API), on MDN

<a name="webassembly"></a>

### WebAssembly

The WebAssembly API lets you load WebAssembly code (also known as Wasm), a portable binary instruction format.
This year, the work will focus on the following features:

* JS string builtins: to make the WebAssembly builtin string functions mirror a subset of the JavaScript String API so it can be callable without JavaScript glue code.
* Resizable buffers integration: to integrate WebAssembly into JS code that uses resizable buffers.

**Resources**:

* [Focus area proposal for JS string builtins](https://github.com/web-platform-tests/interop/issues/868)
* [Focus area proposal for resizable buffer integration](https://github.com/web-platform-tests/interop/issues/876)
* [Tests](https://wpt.fyi/results/?label=master&label=experimental&aligned&q=label%3Ainterop-2025-webassembly)
* [Spec](https://webassembly.github.io/spec/)
* [WebAssembly](https://developer.mozilla.org/docs/WebAssembly), on MDN

<a name="web-compat"></a>

### Web Compat

Web compatibility refers to whether a website works as intended in a particular browser version.
The tests in this focus area were selected based on evidence that differences between browsers have caused real-world problems for web developers or end users. This year, the work will focus on web compatibility issues with CSS properties like `appearance`, `zoom`, `list-style-position`, and `overscroll-behavior`, as well as CSP, PerformanceObserver, and `document.caretPositionFromPoint`.

**Resources**:

* [Focus area proposal for `appearance`](https://github.com/web-platform-tests/interop/issues/884)
* [Focus area proposal for `zoom`](https://github.com/web-platform-tests/interop/issues/825)
* [Focus area proposal for Error events when a worker is blocked via CSP](https://github.com/web-platform-tests/interop/issues/855)
* [Focus area proposal for `Performance.observe` with both `entryTypes` and `buffered`](https://github.com/web-platform-tests/interop/issues/856)
* [Focus area proposal for `list-style-position` on bare `<li>` elements](https://github.com/web-platform-tests/interop/issues/857)
* [Focus area proposal for `overscroll-behavior` on the root scroller](https://github.com/web-platform-tests/interop/issues/858)
* [Focus area proposal for `document.caretPositionFromPoint()`](https://github.com/web-platform-tests/interop/issues/710)
* [Tests](https://wpt.fyi/results/?label=master&label=experimental&aligned&view=interop&q=label%3Ainterop-2025-webcompat)
* [appearance](https://developer.mozilla.org/docs/Web/CSS/appearance), on MDN
* [zoom](https://developer.mozilla.org/docs/Web/CSS/zoom), on MDN
* [Content Security Policy (CSP)](https://developer.mozilla.org/docs/Web/HTTP/CSP), on MDN
* [PerformanceObserver: observe() method](https://developer.mozilla.org/docs/Web/API/PerformanceObserver/observe), on MDN
* [list-style-position](https://developer.mozilla.org/docs/Web/CSS/list-style-position), on MDN
* [overscroll-behavior](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior), on MDN
* [Document: caretPositionFromPoint() method](https://developer.mozilla.org/docs/Web/API/Document/caretPositionFromPoint), on MDN

<a name="webrtc"></a>

### WebRTC

The WebRTC API establishes real-time communication channels directly between browsers. It is commonly used in video conferencing applications.
This year, the work will focus on the following features:

* `RTCRtpScriptTransform`, which allows scripts to modify the media stream, and which is commonly used to implement end-to-end encryption in WebRTC applications.
* Make `RTCDataChannels` transferable to workers to enable off-main-thread processing of data.

**Resources**:

* [Focus area proposal for RTCRtpScriptTransform](https://github.com/web-platform-tests/interop/issues/847)
* [Focus area proposal for transferable RTCDataChannels](https://github.com/web-platform-tests/interop/issues/848)
* [Tests](https://wpt.fyi/results/?label=master&label=experimental&aligned&view=interop&q=label%3Ainterop-2025-webrtc)
* [Spec](https://w3c.github.io/webrtc-pc/)
* [WebRTC API](https://developer.mozilla.org/docs/Web/API/WebRTC_API), on MDN

<a name="writing-modes"></a>

### Writing modes

The `writing-mode` CSS property sets whether text is laid out horizontally or vertically, and left to right, or right to left. In addition, logical CSS properties, such as `overflow-inline` and `overflow-block` make it possible to control what happens when content overflows boxes, regardless of the writing mode.
The goal is to add support for the `sideways-lr` and `sideways-rl` values of the `writing-mode` property, as well as the `overflow-inline` and `overflow-block` properties.

**Resources**:

* [Focus area proposal for writing-mode](https://github.com/web-platform-tests/interop/issues/814)
* [Focus area proposal for overflow-inline/block](https://github.com/web-platform-tests/interop/issues/708)
* [Tests](https://wpt.fyi/results/?label=master&label=experimental&aligned&view=interop&q=label%3Ainterop-2025-writingmodes)
* [Spec](https://drafts.csswg.org/css-writing-modes/)
* [writing-mode](https://developer.mozilla.org/docs/Web/CSS/writing-mode), on MDN
* [overflow-inline](https://developer.mozilla.org/docs/Web/CSS/overflow-inline), on MDN
* [overflow-block](https://developer.mozilla.org/docs/Web/CSS/overflow-block), on MDN

<a name="investigation-efforts"></a>

## Investigation efforts

In addition to the above focus areas, Interop 2025 also commits to making progress on the following investigation efforts. Each investigation effort below consists of a set of tasks that will bring the corresponding feature up to the bar that's required for it to possibly become a focus area in the future.

<a name="accessibility-testing"></a>

### Accessibility testing

This is a continuation of [last year's accessibility testing investigation](https://github.com/web-platform-tests/interop/blob/main/2024/README.md#accessibility-testing). The goal is to work towards generating consistent accessibility trees from the same DOM and CSS and to investigate the testing infrastructure that's still needed for Interop.

**Resources**:

* [Focus area proposal](https://github.com/web-platform-tests/interop/issues/866)

<a name="gaming"></a>

### Gaming

The goal is to investigate improving game development on the web, by focusing on the Gamepad, Pointer Lock, and Screen Orientation APIs. These are critically important for gaming on the web, especially for cloud and mobile gaming.

**Resources**:

* [Focus area proposal](https://github.com/web-platform-tests/interop/issues/786)

<a name="mobile-testing"></a>

### Mobile testing

This is a continuation of [last year's mobile testing investigation](https://github.com/web-platform-tests/interop/blob/main/2024/README.md#mobile-testing). It involves doing the infrastructure work that's required for WPT tests to run correctly on mobile devices, and therefore for future iterations of the Interop project to accept proposals that are mobile-specific.

**Resources**:

* [Focus area proposal for Viewport meta element: interactive-widget property](https://github.com/web-platform-tests/interop/issues/706)
* [Focus area proposal for Layout Viewport and Viewport-Relative Lengths](https://github.com/web-platform-tests/interop/issues/870)
* [Focus area proposal for Mobile Testing Results for Interop/WPT](https://github.com/web-platform-tests/interop/issues/891)

<a name="privacy-testing"></a>

### Privacy testing

Privacy is an essential feature of the web platform. The goal is to investigate the tests that should be written to better cover the privacy-related features of the platform, and write those tests.

**Resources**:

* [Focus area proposal](https://github.com/web-platform-tests/interop/issues/831)

<a name="webvtt"></a>

### WebVTT

WebVTT is a captions and subtitles format. WebVTT files are loaded using the `<track>` element, and the VTTCue API can be used to create or update cues dynamically. The goal of this investigation effort is to **???** MISSING.

**Resources**:

* [Focus area proposal](https://github.com/web-platform-tests/interop/issues/860)
