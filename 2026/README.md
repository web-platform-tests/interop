# Interop 2026

Interop 2026 is an effort to increase the interoperability of key features of the web platform across browsers. These features, which are of high priority to web developers and end users, have been [proposed](https://github.com/web-platform-tests/interop/issues/?q=is%3Aissue%20state%3Aopen%20label%3Afocus-area-proposal%20created%3A%3E2025-09-01%20created%3A%3C2025-10-01) by the web development community, and have been selected by the Interop Project team (to learn more, see [Interop 2026 proposal selection process](./selection-process.md)).

The Interop 2026 effort is part of the [web-platform-tests](https://github.com/web-platform-tests/wpt) (WPT) project — an automated test suite for web standards — and run by a team of representatives from companies that make substantial contributions to browser rendering engines (including Apple, Bocoup, Google, Igalia, Microsoft, and Mozilla).

Similar to previous years ([2022](https://wpt.fyi/interop-2022), [2023](https://wpt.fyi/interop-2023), [2024](https://wpt.fyi/interop-2024), and [2025](https://wpt.fyi/interop-2025)), the tests we selected will be continuously run on automated testing infrastructure. The test pass rates for each browser rendering engine will be displayed on the [Interop 2026 dashboard](https://wpt.fyi/interop-2026) — displaying the percentage of passing tests in each chosen area, and an overall total score of tests that pass in every browser. The dashboard will also display scores for group progress on particular investigation efforts selected by the Interop team to work on throughout the year.

Interop 2026 is focused on technology that is already specified in web standards.

## Contents

* [Focus areas](#focus-areas)
  * [Container style queries](#container-style-queries)
  * [CSS anchor positioning](#css-anchor-positioning)
  * [CSS attr()](#css-attr)
  * [CSS contrast-color()](#css-contrast-color)
  * [CSS zoom](#css-zoom)
  * [Custom highlights](#custom-highlights)
  * [Dialogs and popovers](#dialogs-and-popovers)
  * [Fetch uploads and ranges](#fetch-uploads-and-ranges)
  * [IndexedDB](#indexeddb)
  * [JSPI for Wasm](#jspi-for-wasm)
  * [Media pseudo-classes](#media-pseudo-classes)
  * [Navigation API](#navigation-api)
  * [Scoped custom element registries](#scoped-custom-element-registries)
  * [Scroll-driven animations](#scroll-driven-animations)
  * [Scroll snap](#scroll-snap)
  * [CSS shape()](#css-shape)
  * [View transitions](#view-transitions)
  * [Web compat](#web-compat)
  * [WebRTC](#webrtc)
  * [WebTransport](#webtransport)
* [Investigation efforts](#investigation-efforts)
  * [Accessibility testing](#accessibility-testing)
  * [JPEG XL](#jpeg-xl)
  * [Mobile testing](#mobile-testing)
  * [WebVTT](#webvtt)

## Focus areas

### Container style queries

Container style queries, which use the `@container` at-rule together with one or more `style()` functions, apply styles to an element based on the computed values of custom properties of its container.

#### Resources

* [Proposal issue](https://github.com/web-platform-tests/interop/issues/1032)  
* [Tests](https://wpt.fyi/results/css/css-conditional/container-queries?label=master&label=experimental&aligned&q=label%3Ainterop-2026-container-style-queries)  
* [Spec](https://drafts.csswg.org/css-conditional-5/#style-container)  
* MDN docs: [Container style queries](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@container#container_style_queries)

### CSS anchor positioning

Anchor positioning places an element based on the position of another element. For example, you can place a tooltip next to the content it references.

This focus area is a carry over from Interop 2025\. See [last year's layout focus area description](https://github.com/web-platform-tests/interop/tree/main/2025#css-anchor-positioning).

#### Resources

* [Proposal issue](https://github.com/web-platform-tests/interop/issues/1172)  
* [Tests](https://wpt.fyi/results/css?label=master&label=experimental&aligned&view=interop&q=label%3Ainterop-2025-anchor-positioning)  
* [Spec](https://drafts.csswg.org/css-anchor-position-1/)  
* MDN docs: [CSS anchor positioning](https://developer.mozilla.org/docs/Web/CSS/Guides/Anchor_positioning)

### CSS attr()

The attr() CSS function returns the value of an attribute of an HTML element, with the option to return that value as a specific type or with a specific unit. For example: `background-color: attr(data-background type(\<color\>), red);`.

#### Resources

* [Proposal issue](https://github.com/web-platform-tests/interop/issues/1077)  
* [Tests](https://wpt.fyi/results/?label=master&label=experimental&aligned&q=label%3Ainterop-2026-attr)  
* [Spec](https://drafts.csswg.org/css-values-5/#attr-notation)  
* MDN docs: [attr()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/attr)

### CSS contrast-color()

The `contrast-color()` CSS function picks a color that has guaranteed contrast against a specified foreground or background color.

#### Resources

* [Proposal issue](https://github.com/web-platform-tests/interop/issues/1165)  
* [Tests](https://wpt.fyi/results/?label=master&label=experimental&aligned&q=label%3Ainterop-2026-contrast-color)  
* [Spec](https://drafts.csswg.org/css-color-5/#contrast-color)  
* MDN docs: [contrast-color()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/color_value/contrast-color)

### CSS zoom

This focus area is a carry over from Interop 2025\. See [last year's layout focus area description](https://github.com/web-platform-tests/interop/blob/main/2025/README.md#web-compat).

This year, the work will focus on continuing to improve the interoperability of the `zoom` CSS property, which scales the size of an element. Unlike the transform property, a zoomed element affects page layout.

#### Resources

* [Proposal issue](https://github.com/web-platform-tests/interop/issues/825)  
* [Tests](https://wpt.fyi/results/?label=master&label=experimental&aligned&q=label%3Ainterop-2026-zoom)  
* [Spec](https://drafts.csswg.org/css-viewport/#zoom-property)  
* MDN docs: [zoom](https://developer.mozilla.org/docs/Web/CSS/zoom)

### Custom highlights

Custom highlights style arbitrary text ranges, without adding extra elements to the DOM.

#### Resources

* [Proposal issue](https://github.com/web-platform-tests/interop/issues/1149)  
* [Tests](https://wpt.fyi/results/?label=master&label=experimental&aligned&q=label%3Ainterop-2026-custom-highlights)  
* [Spec](https://drafts.csswg.org/css-highlight-api-1/)  
* MDN docs: [CSS Custom Highlight API](https://developer.mozilla.org/docs/Web/API/CSS_Custom_Highlight_API)

### Dialogs and popovers

The `<dialog>` HTML element represents a modal or non-modal dialog box, such as a confirmation prompt or a subwindow used to enter data. The `popover` HTML attribute creates an overlay to display content on top of other page content. Popovers can be shown declaratively using HTML, or by using the `showPopover()` method.

This year, the work will focus on:

* The `<dialog closedby>` attribute, which sets the user actions that close a dialog. For example, `<dialog closedby="any">` allows the dialog to be closed by clicking outside of it.  
* The `:open` CSS pseudo-class, which matches elements that have open states like `<dialog>`.   
* The `popover="hint"` global attribute, which creates a popover that is subordinate to other popovers that have a `popover="auto"` attribute. You can use this to create tooltips that don't dismiss auto popovers for example.

#### Resources

* Proposal issues:  
  * [\<dialog closedby\> attribute](https://github.com/web-platform-tests/interop/issues/1111)  
  * [:open pseudo-class](https://github.com/web-platform-tests/interop/issues/1025)  
  * [popover="hint" attribute](https://github.com/web-platform-tests/interop/issues/1129)  
* [Tests](https://wpt.fyi/results/?label=master&label=experimental&aligned&q=label%3Ainterop-2026-dialogs-and-popovers)  
* Specs:  
  * [\<dialog closedby\> attribute](https://html.spec.whatwg.org/multipage/interactive-elements.html#attr-dialog-closedby)  
  * [:open pseudo-class](https://drafts.csswg.org/selectors-4/#open-state)  
  * [popover="hint" attribute](https://html.spec.whatwg.org/multipage/popover.html#attr-popover-hint)  
* MDN docs:  
  * [\<dialog closedby\> attribute](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dialog#closedby)  
  * [:open pseudo-class](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:open)  
  * [popover="hint" attribute](https://developer.mozilla.org/docs/Web/HTML/Reference/Global_attributes/popover#hint)

### Fetch uploads and ranges

The `fetch()` method makes asynchronous HTTP requests.

This year, the work will focus on:

* ReadableStream in body, to stream data to the server.  
* Supporting FormData and mime-type for requests and responses.  
* Supporting the Range header.

#### Resources

* Proposal issues:  
  * [ReadableStream in body](https://github.com/web-platform-tests/interop/issues/1072)  
  * [FormData](https://github.com/web-platform-tests/interop/issues/1156)  
  * [Range header](https://github.com/web-platform-tests/interop/issues/1157)  
* [Tests](https://github.com/web-platform-tests/wpt-metadata/pull/8497) (interop-2026-fetch)  
* [Spec](https://fetch.spec.whatwg.org/)  
* MDN docs:  
  * [ReadableStream in body](https://developer.mozilla.org/docs/Web/API/Request/body)  
  * [FormData](https://developer.mozilla.org/docs/Web/API/FormData)  
  * [Range header](https://developer.mozilla.org/docs/Web/HTTP/Reference/Headers/Range)

### IndexedDB

The IndexedDB API is a local storage transactional object database.

The work will focus on the `getAllRecords()` methods of `IDBObjectStore` and `IDBIndex`, which return records and their primary keys from an IndexedDB store or index. The records can be read in batches and in reverse order. The `getAllRecords()` methods speed up read operations on large datasets.

#### Resources

* [Proposal issue](https://github.com/web-platform-tests/interop/issues/1151)  
* Tests (interop-2026-indexeddb)  
* Specs:  
  * [IDBObjectStore.getAllRecords()](https://w3c.github.io/IndexedDB/#dom-idbobjectstore-getallrecords)  
  * [IDBIndex.getAllRecords()](https://w3c.github.io/IndexedDB/#dom-idbindex-getallrecords)  
* MDN docs:  
  * [IDBObjectStore.getAllRecords()](https://developer.mozilla.org/docs/Web/API/IDBObjectStore/getAllRecords)  
  * [IDBIndex.getAllRecords()](https://developer.mozilla.org/docs/Web/API/IDBIndex/getAllRecords)

### JSPI for Wasm

Wasm code (also known as WebAssembly) is a portable binary instruction format. The JavaScript Promise Integration API (JSPI) allows Wasm applications that were written assuming synchronous access to external functionality to operate smoothly in an environment where the functionality is actually asynchronous.

#### Resources

* [Proposal issue](https://github.com/web-platform-tests/interop/issues/1093)  
* [Tests](https://wpt.fyi/results/?label=master&label=experimental&aligned&q=label%3Ainterop-2026-jspi-for-wasm)  
* [Spec](https://github.com/WebAssembly/js-promise-integration)  
* V8 blog: [Introducing the WebAssembly JavaScript Promise Integration API](https://v8.dev/blog/jspi)

### Media pseudo-classes

The `:playing`, `:paused`, `:seeking`, `:buffering`, `:stalled`, `:muted`, and `:volume-locked` CSS pseudo-classes match `<audio>` and `<video>` elements based on their state. 

#### Resources

* [Proposal issue](https://github.com/web-platform-tests/interop/issues/1003)  
* [Tests](https://wpt.fyi/results/?label=master&label=experimental&aligned&q=label%3Ainterop-2026-media-pseudo-classes)  
* [Spec](https://drafts.csswg.org/selectors-4/#resource-pseudos)  
* MDN docs:  
  * [:playing](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:playing)  
  * [:paused](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:paused)  
  * [:seeking](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:seeking)  
  * [:buffering](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:buffering)  
  * [:stalled](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:stalled)  
  * [:muted](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:muted)  
  * [:volume-locked](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:volume-locked)

### Navigation API

The navigation API initiates, intercepts, or modifies browser navigation actions.

This year, the work will focus on continuing to improve the interoperability of the Navigation API, and on the `precommitHandler` option to `navigateEvent.intercept()`, which defers the commit until a handler has resolved.

#### Resources

* Proposal issues:  
  * [Carryover evaluation for Navigation API](https://github.com/web-platform-tests/interop/issues/1178)  
  * [Navigation API precommit handlers](https://github.com/web-platform-tests/interop/issues/1113)  
* [Tests](https://wpt.fyi/results/?label=master&label=experimental&aligned&q=label%3Ainterop-2026-navigation)  
* Specs:  
  * [The Navigation API](https://html.spec.whatwg.org/multipage/nav-history-apis.html#navigation-api)  
  * [NavigationPrecommitHandler](https://html.spec.whatwg.org/multipage/nav-history-apis.html#dom-navigationinterceptoptions-precommithandler)  
* MDN docs:  
  * [Navigation API](https://developer.mozilla.org/docs/Web/API/Navigation_API)  
  * [precommitHandler option for NavigateEvent.intercept()](https://developer.mozilla.org/docs/Web/API/NavigateEvent/intercept#precommithandler)

### Scoped custom element registries

The `CustomElementRegistry()` constructor creates a new custom element registry that's separate from the global `window.customElements` registry. Creating more than one registry is useful for multiple custom elements that have the same tag name to coexist.

#### Resources

* [Proposal issue](https://github.com/web-platform-tests/interop/issues/1027)  
* Tests (interop-2026-scoped-custom-element-registries)  
* Specs:  
  * [HTML](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements-api)  
  * [DOM](https://dom.spec.whatwg.org/#element-custom-element-registry)  
* MDN docs: [CustomElementRegistry](https://developer.mozilla.org/docs/Web/API/CustomElementRegistry)

### Scroll-driven animations

The `animation-timeline`, `scroll-timeline`, and `view-timeline` CSS properties advance animations based on the user's scroll position.

#### Resources

* [Proposal issue](https://github.com/web-platform-tests/interop/issues/1033)  
* [Tests](https://wpt.fyi/results/?label=master&label=experimental&aligned&q=label%3Ainterop-2026-scroll-driven-animations)  
* [Spec](https://drafts.csswg.org/scroll-animations-1/)  
* MDN docs: [CSS scroll-driven animations](https://developer.mozilla.org/docs/Web/CSS/Guides/Scroll-driven_animations)

### Scroll snap

CSS scroll snap controls the panning and scrolling behavior within a scroll container.

#### Resources

* [Proposal issue](https://github.com/web-platform-tests/interop/issues/1134)  
* [Tests](https://wpt.fyi/results/css/css-scroll-snap?label=master&label=experimental&aligned&view=interop&q=label%3Ainterop-2026-scroll-snap)  
* [Spec](https://drafts.csswg.org/css-scroll-snap-2/)  
* MDN docs: [CSS scroll snap](https://developer.mozilla.org/docs/Web/CSS/Guides/Scroll_snap)

### CSS shape()

The `shape()` CSS function creates shapes with a series of commands like line, move, and curve. It can be used with `clip-path` and `shape-outside`.

#### Resources

* [Proposal issue](https://github.com/web-platform-tests/interop/issues/1046)  
* [Tests](https://wpt.fyi/results/css/css-shapes/shape-functions?label=master&label=experimental&aligned&view=interop&q=label%3Ainterop-2026-shape)  
* [Spec](https://drafts.csswg.org/css-shapes-1/#shape-function)  
* MDN docs: [shape()](https://developer.mozilla.org/docs/Web/CSS/Reference/Values/basic-shape/shape)

### View transitions

View transitions allow you to create animated visual transitions between different states of a document, or between different documents in a multi-page application.

This year, the work will focus on:

* Continuing to improve the interoperability of same-document view transitions.  
* The `blocking="render"` attribute for `<link>`, `<script>`, and `<style>` elements, which blocks rendering until the external script or stylesheet has been loaded, or until a specific element is in the DOM.  
* The `<link rel="expect">` attribute, which is a hint to the browser to block rendering until the element that the href value references is connected to the document and fully parsed.  
* The `:active-view-transition-type()` CSS pseudo-class, which matches only when the active view transition was started with the specified type.  
* Cross-document view transitions.

#### Resources

* Proposal issues:  
  * [Carryover evaluation for View Transition API](https://github.com/web-platform-tests/interop/issues/1184)  
  * [HTML blocking=render attribute](https://github.com/web-platform-tests/interop/issues/1070)  
  * [`<link rel="expect">`](https://github.com/web-platform-tests/interop/issues/1198)  
  * [View Transition Types](https://github.com/web-platform-tests/interop/issues/1137)  
  * [Cross-document View Transitions](https://github.com/web-platform-tests/interop/issues/1110)   
* [Tests](https://wpt.fyi/results/?label=master&label=experimental&aligned&q=label%3Ainterop-2026-view-transitions)  
* Specs:  
  * [CSS View Transitions Module Level 1](https://drafts.csswg.org/css-view-transitions/)  
  * [Blocking attributes,](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#blocking-attributes) [in the HTML Living Standard](https://html.spec.whatwg.org/#event-loop-processing-model)  
  * [Link type “expect",](https://html.spec.whatwg.org/multipage/links.html#link-type-expect) [in the HTML Living Standard](https://html.spec.whatwg.org/#event-loop-processing-model)  
  * [The :active-view-transition-type() pseudo-class, in CSS View Transitions Module Level 2](https://drafts.csswg.org/css-view-transitions-2/#the-active-view-transition-type-pseudo)  
  * [CSS View Transitions Module Level 2](https://drafts.csswg.org/css-view-transitions-2/)   
* MDN docs:  
  * [View Transition API](https://developer.mozilla.org/docs/Web/API/View_Transition_API)  
  * Blocking attribute for [\<link\>](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link#blocking), [\<script\>](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script#blocking), [\<style\>](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/style#blocking)  
  * [rel="expect" attribute](https://developer.mozilla.org/docs/Web/HTML/Reference/Attributes/rel#expect)  
  * [:active-view-transition-type()](https://developer.mozilla.org/docs/Web/CSS/Reference/Selectors/:active-view-transition-type)  
  * [@view-transition](https://developer.mozilla.org/docs/Web/CSS/Reference/At-rules/@view-transition)

### Web compat

Web compatibility refers to whether a website works as intended in a particular browser version. The tests in this focus area were selected based on evidence that differences between browsers have caused real-world problems for web developers or end users.

This year, the work will focus on web compatibility issues with:

* ESM module loading  
* The timing of scroll events relative to animation events  
* Unprefixing the \-webkit-user-select property

#### Resources

* Proposal issues:  
  * [ESM Module Loading: Cyclic Module Records / multiple top-level awaits in different modules](https://github.com/web-platform-tests/interop/issues/1105)  
  * [Timing of scroll events relative to animation events](https://github.com/web-platform-tests/interop/issues/1126)  
  * [unprefix the `-webkit-user-select` CSS property](https://github.com/web-platform-tests/interop/issues/1000)  
* [Tests](https://wpt.fyi/results/?label=master&label=experimental&aligned&q=label%3Ainterop-2026-webcompat)  
* Specs:  
  * [Cyclic Module Records, in ECMAScript Language Specification](https://tc39.es/ecma262/#cyclic-module-record)  
  * [Event loop processing model, in the HTML Living Standard](https://html.spec.whatwg.org/#event-loop-processing-model)  
  * [Controlling content selection, in CSS Basic User Interface Module Level 4](https://www.w3.org/TR/css-ui-4/#content-selection)  
* MDN docs:  
  * [Top level await](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/await#top_level_await)  
  * [user-select](https://developer.mozilla.org/docs/Web/CSS/user-select)

### WebRTC

The WebRTC API establishes real-time communication channels directly between browsers. It is commonly used in video conferencing applications.

This year, the work will focus on:

* Continuing to improve the interoperability of WebRTC.  
* Fixing the remaining failing tests from the WebRTC Interop 2025 focus area.

#### Resources

* Proposal issues:  
  * [WebRTC Interop](https://github.com/web-platform-tests/interop/issues/1101)   
  * [Carryover evaluation for WebRTC](https://github.com/web-platform-tests/interop/issues/1188)   
* [Tests](https://wpt.fyi/results/?label=master&label=experimental&aligned&q=label%3Ainterop-2026-webrtc)  
* [Spec](https://w3c.github.io/webrtc-pc/)  
* MDN docs: [WebRTC API](https://developer.mozilla.org/docs/Web/API/WebRTC_API)

### WebTransport

The WebTransport API transmits data between a client and a server, by using the HTTP/3 protocol.

#### Resources

* [Proposal issue](https://github.com/web-platform-tests/interop/issues/1121)  
* [Tests](https://github.com/web-platform-tests/wpt-metadata/pull/8500) (interop-2026-webtransport)  
* [Spec](https://w3c.github.io/webtransport/)  
* MDN docs: [WebTransport API](https://developer.mozilla.org/docs/Web/API/WebTransport_API)  
* 

## Investigation efforts

In addition to the above focus areas, Interop 2026 also commits to making progress on the following investigation efforts. Each investigation effort below consists of a set of tasks that will bring the corresponding feature up to the bar that's required for it to possibly become a focus area in the future.

### Accessibility testing

This is a continuation of last year’s accessibility testing investigation effort, aimed at working towards generating consistent accessibility trees from the same DOM and CSS across browsers, and improving the WPT testing infrastructure for accessibility testing.

#### Resources

* [Proposal issue](https://github.com/web-platform-tests/interop/issues/1141)  
* [Accessibility testing Interop investigation repository](https://github.com/web-platform-tests/interop-accessibility)

### JPEG XL

The JPEG XL image format is a raster graphics file format that supports animation, alpha transparency, and lossy as well as lossless compression.

This investigation effort will focus on making the feature testable. [Current tests for this are sparse](https://wpt.fyi/results/jpegxl?label=experimental&label=master&aligned). Existing decoders have more comprehensive test suites, but we need to figure out the requirements. For example, progressive rendering is an important feature for developers, but how and when browsers should do this (to avoid performance issues) is currently being debated.

#### Resources

* [Proposal issue](https://github.com/web-platform-tests/interop/issues/994)  
* [JPEGXL Interop investigation repository](https://github.com/web-platform-tests/interop-jpegxl)

### Mobile testing

This is a continuation of last year’s mobile testing investigation effort, which was focused on getting mobile browser data onto [the wpt.fyi dashboard site](https://wpt.fyi).

This year, the work will focus on improving the WPT infrastructure to test mobile-specific features such as dynamic viewport changes.

#### Resources

* [Proposal issue](https://github.com/web-platform-tests/interop/issues/1145)  
* [Mobile testing Interop investigation repository](https://github.com/web-platform-tests/interop-mobile-testing)

### WebVTT

This is a continuation of last year’s WebVTT testing investigation effort, which aims at fixing as many tests as possible, making any needed changes to WebVTT specification along the way, so browser developers have a more transparent understanding of how their implementation conforms to the standard, hopefully opening up the future possibility for greatly improved interoperability.

#### Resources

* [Proposal issue](https://github.com/web-platform-tests/interop/issues/1161)  
* [WebVTT Interop investigation repository](https://github.com/web-platform-tests/interop-webvtt)
