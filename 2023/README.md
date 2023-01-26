# Interop 2023
Interop 2023 is an effort to increase interoperability across browsers in key technical areas that are of high priority to web developers and end users. This effort is part of the [web-platform-tests](https://github.com/web-platform-tests/wpt) (WPT) project — an automated test suite for web standards — and run by a team of representatives from companies that make substantial contributions to browser rendering engines (including Apple, Bocoup, Google, Igalia, Microsoft, and Mozilla).

The process we went through to arrive at our priority list for Interop 2023 is available in the [planning process](planning-process.md) document.

Similar to [Interop 2022](https://wpt.fyi/interop-2022), the tests we selected will be continuously run on automated testing infrastructure. The test pass rates for each browser rendering engine will be displayed on the [Interop 2023 Dashboard](https://wpt.fyi/interop-2023) — displaying the percentage of passing tests in each chosen area, and an overall total score of tests that pass in every browser. The dashboard will also display scores for group progress on particular Investigation Efforts selected for the Interop team to work on throughout the year.

Interop 2023 is tightly focused on technology that is already specified in web standards.

## Dashboard
Our dashboard lives at [wpt.fyi/interop-2023](https://wpt.fyi/interop-2023). It computes an interop score as the percentage of tests in WPT that pass in all three browser engines.


## Focus Areas

The folloing features were selected for Interop 2023. Descriptions are taken from issue proposal submissions and MDN documentation.


### Border Image in CSS

Authors can specify an image to be used in place of the border-style. In this case, the border’s design is taken from the sides and corners of an image specified ([CSS `border-image`](https://github.com/web-platform-tests/interop/issues/146)).

[https://developer.mozilla.org/en-US/docs/Web/CSS/border-image](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image)

[https://w3c.github.io/csswg-drafts/css-backgrounds/#the-border-image](https://w3c.github.io/csswg-drafts/css-backgrounds/#the-border-image)

[https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-cssborderimage](https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-cssborderimage)


### Color Spaces and Functions in CSS

[https://developer.mozilla.org/en-US/docs/Web/CSS/color_value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)

[https://w3c.github.io/csswg-drafts/css-color/#color-syntax](https://w3c.github.io/csswg-drafts/css-color/#color-syntax)

[https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-color](https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-color)


### Container Queries in CSS

CSS containment provides a way to isolate parts of a page and declare to the browser these parts are independent from the rest of the page in terms of styles and layout. ([Container Queries](https://github.com/web-platform-tests/interop/issues/133)).

[https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries)

[https://www.w3.org/TR/css-contain-3/#container-queries](https://www.w3.org/TR/css-contain-3/#container-queries)

[https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-container](https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-container)


### Containment in CSS

The contain CSS property indicates that an element and its contents are, as much as possible, independent from the rest of the document tree. Containment enables isolating a subsection of the DOM, providing performance benefits by limiting calculations of layout, style, paint, size, or any combination to a DOM subtree rather than the entire page. Containment can also be used to scope CSS counters and quotes.

[https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Containment](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Containment)

[https://www.w3.org/TR/css-contain-3/](https://www.w3.org/TR/css-contain-3/)

[https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-contain](https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-contain)


### CSS Pseudo-classes

A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s). For example, the pseudo-class :hover can be used to select a button when a user's pointer hovers over the button and this selected button can then be styled.

[https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

[https://html.spec.whatwg.org/multipage/semantics-other.html#pseudo-classes](https://html.spec.whatwg.org/multipage/semantics-other.html#pseudo-classes)

[https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-pseudos](https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-pseudos)


### Custom Properties in CSS

The @property CSS at-rule is part of the CSS Houdini umbrella of APIs, it allows developers to explicitly define their css custom properties, allowing for property type checking, setting default values, and define whether a property can inherit values or not.

[https://developer.mozilla.org/en-US/docs/Web/CSS/@property](https://developer.mozilla.org/en-US/docs/Web/CSS/@property)

[https://drafts.css-houdini.org/css-properties-values-api/](https://drafts.css-houdini.org/css-properties-values-api/)

[https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-property](https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-property)


### Flexbox

Flexbox is a one-dimensional layout method for arranging items in rows or columns. Items flex (expand) to fill additional space or shrink to fit into smaller spaces. This article explains all the fundamentals.

[https://developer.mozilla.org/docs/Learn/CSS/CSS_layout/Flexbox](https://developer.mozilla.org/docs/Learn/CSS/CSS_layout/Flexbox)

[https://drafts.csswg.org/css-flexbox/](https://drafts.csswg.org/css-flexbox/)

[https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-flexbox](https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-flexbox)


### Fonts

Enable testing for font stack capabilities and enable additional expressiveness with vector color fonts. ([Font feature detection and palettes](https://github.com/web-platform-tests/interop/issues/164))

[https://developer.mozilla.org/en-US/docs/Web/CSS/font-palette](https://developer.mozilla.org/en-US/docs/Web/CSS/font-palette)

[https://w3c.github.io/csswg-drafts/css-fonts/#font-palette-prop](https://w3c.github.io/csswg-drafts/css-fonts/#font-palette-prop)

[https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-fonts](https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-fonts)


### Forms

The &lt;form> HTML element represents a document section containing interactive controls for submitting information.

[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)

[https://html.spec.whatwg.org/multipage/forms.html#the-form-element](https://html.spec.whatwg.org/multipage/forms.html#the-form-element)


### Grid

CSS Grid Layout excels at dividing a page into major regions or defining the relationship in terms of size, position, and layer, between parts of a control built from HTML primitives.

[https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)

[https://drafts.csswg.org/css-grid/](https://drafts.csswg.org/css-grid/)

[https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-grid](https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-grid)


### :has()

With a :host() selector referencing the root of an element with a shadow root, it holds that :host(:has(...) should reference light DOM children of that root. Some browsers acknowledge this truth (Safari), others don't (Chrome), others have yet to ship :has() support (Firefox).

[https://developer.mozilla.org/en-US/docs/Web/CSS/:has](https://developer.mozilla.org/en-US/docs/Web/CSS/:has)

[https://w3c.github.io/csswg-drafts/selectors/#relational](https://w3c.github.io/csswg-drafts/selectors/#relational)

[https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-has](https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-has)


### Inert

The HTMLElement property inert reflects the value of the element's inert attribute. It is a boolean value that, when present, makes the browser "ignore" user input events for the element, including focus events and events from assistive technologies. The browser may also ignore page search and text selection in the element. This can be useful when building UIs such as modals where you would want to "trap" the focus inside the modal when it's visible.

[https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert)

[https://html.spec.whatwg.org/multipage/interaction.html#the-inert-attribute](https://html.spec.whatwg.org/multipage/interaction.html#the-inert-attribute)

[https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-inert](https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-inert)


### Masking in CSS

CSS Masking is a CSS module that defines means, including masking and clipping, for partially or fully hiding portions of visual elements.

[https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Masking](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Masking)

[https://drafts.fxtf.org/css-masking/#the-mask](https://drafts.fxtf.org/css-masking/#the-mask)

[https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-cssmasking](https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-cssmasking)


### Math Functions in CSS

The math functions allow CSS numeric values to be written as mathematical expressions.

[https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions#math_functions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions#math_functions)

[https://w3c.github.io/csswg-drafts/css-values-4/#math](https://w3c.github.io/csswg-drafts/css-values-4/#math)

[https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-mathfunctions](https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-mathfunctions)


### Media Queries 4

Media queries allow you to apply CSS styles depending on a device's general type (such as print vs. screen) or other characteristics such as screen resolution or browser viewport width. Media queries are used for the following:

[https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

[https://www.w3.org/TR/mediaqueries-4/](https://www.w3.org/TR/mediaqueries-4/)

[https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-mediaqueries](https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-mediaqueries)


### Modules in Web Workers

Add support for ES Modules in Web Worker contexts.

[https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)

[https://html.spec.whatwg.org/multipage/workers.html#module-worker-example](https://html.spec.whatwg.org/multipage/workers.html#module-worker-example)

[https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-modules](https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-modules)


### Motion Path in CSS Animations

Motion Path is a CSS module that allows authors to animate any graphical object along a custom path. CSS Motion Path is now supported in all three engines. But there are remaining test failures. This focus area is to make sure we reach a higher bar of interoperability, and make it more possible for developers to use Motion Path without problems.

[https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Motion_Path](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Motion_Path)

[https://drafts.fxtf.org/motion-1/](https://drafts.fxtf.org/motion-1/)

[https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-motion](https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-motion)


### Offscreen Canvas

The OffscreenCanvas interface provides a canvas that can be rendered off screen, decoupling the DOM and the Canvas API so that the &lt;canvas> element is no longer entirely dependent on the DOM. Rendering operations can also be run inside a worker context, allowing you to run some tasks in a separate thread and avoid heavy work on the main thread.

[https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas)

[https://html.spec.whatwg.org/multipage/canvas.html#the-offscreencanvas-interface](https://html.spec.whatwg.org/multipage/canvas.html#the-offscreencanvas-interface)

[https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-offscreencanvas](https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-offscreencanvas)


### Pointer & Mouse Events

Pointer events are DOM events that are fired for a pointing device. They are designed to create a single DOM event model to handle pointing input devices such as a mouse, pen/stylus or touch (such as one or more fingers). This focus area covers the behavior of pointer and mouse interaction with pages, including how they interact with hit testing and scrolling areas. We have decided to explicitly exclude touch and stylus due to lack of WPT testing support across all browsers.

[https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events)

[https://w3c.github.io/pointerevents/](https://w3c.github.io/pointerevents/)

[https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-events](https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-events)


### URL

The URL interface is used to parse, construct, normalize, and encode URLs. It works by providing properties which allow you to easily read and modify the components of a URL. This focus area is to get all browsers to agree on an implementation of URLs as defined in the URL Standard.

[https://developer.mozilla.org/en-US/docs/Web/API/URL](https://developer.mozilla.org/en-US/docs/Web/API/URL)

[https://url.spec.whatwg.org](https://url.spec.whatwg.org)

[https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-url](https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-url)


### Web Compat 2023

A catchall focus area for small bugs that cause known site compatibility issues, or documented problems for authors creating libraries or sites, but which are not part of a larger feature that's appropriate for its own focus area.

[https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-webcompat](https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-webcompat)


### Web Codecs (video)

The WebCodecs API gives web developers low-level access to the individual frames of a video stream and chunks of audio. It is useful for web applications that require full control over the way media is processed. For example, video or audio editors, and video conferencing.

[https://developer.mozilla.org/en-US/docs/Web/API/WebCodecs_API](https://developer.mozilla.org/en-US/docs/Web/API/WebCodecs_API)

[https://www.w3.org/TR/webcodecs/](https://www.w3.org/TR/webcodecs/)

[https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-webcodecs](https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-webcodecs)


### Web Components

Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.

[https://developer.mozilla.org/en-US/docs/Web/Web_Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

[https://www.w3.org/wiki/WebComponents](https://www.w3.org/wiki/WebComponents)

[https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-webcomponents](https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-webcomponents)


## Investigation Efforts
An investigation efforts consists of a set of tasks that will bring the feature up to the bar required for a Focus Area in the future. If this involves any standards work, that work must be done in the appropriate standards group, and those doing the work need to join that group.

The following investigation areas were selected for Interop 2023.

### Accessibility Testing
This investigation area involves working towards generating consistent accessibility tries from the same DOM + CSS.

### Mobile Testing
This investigation area involves doing the infrastructure work required to allow WPT Interop to accept future Interop proposals that test mobile-specific functionality which can't be scored using the current desktop-only wpt CI.

## Join the conversation

You're also welcome to join the conversation in the [`#interop20xx:matrix.org` Matrix channel](https://app.element.io/#/room/#interop2022:matrix.org)!
