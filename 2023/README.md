# Interop 2023

Interop 2023 is an effort to increase interoperability across browsers in key technical areas that are of high priority to web developers and end users. This effort is part of the [web-platform-tests](https://github.com/web-platform-tests/wpt) (WPT) project — an automated test suite for web standards — and run by a team of representatives from companies that make substantial contributions to browser rendering engines (including Apple, Bocoup, Google, Igalia, Microsoft, and Mozilla).

The process we went through to arrive at our priority list for Interop 2023 is available in the [proposal selection summary](./proposal-selection.md).

Similar to [Interop 2022](https://wpt.fyi/interop-2022), the tests we selected will be continuously run on automated testing infrastructure. The test pass rates for each browser rendering engine will be displayed on the [Interop 2023 Dashboard](https://wpt.fyi/interop-2023) — displaying the percentage of passing tests in each chosen area, and an overall total score of tests that pass in every browser. The dashboard will also display scores for group progress on particular Investigation Efforts selected for the Interop team to work on throughout the year.

Interop 2023 is tightly focused on technology that is already specified in web standards.


## Dashboard

Our dashboard lives at [wpt.fyi/interop-2023](https://wpt.fyi/interop-2023). It computes an interop score as the percentage of tests in WPT that pass in all three browser engines.


## Focus Areas

The following features were selected for Interop 2023. Descriptions are taken from issue proposal submissions and MDN documentation.

All tests: [view all tests on wpt.fyi](https://wpt.fyi/results/?label=master&label=experimental&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2021-aspect-ratio%20or%20label%3Ainterop-2021-flexbox%20or%20label%3Ainterop-2021-grid%20or%20label%3Ainterop-2021-position-sticky%20or%20label%3Ainterop-2021-transforms%20or%20label%3Ainterop-2022-cascade%20or%20label%3Ainterop-2022-color%20or%20label%3Ainterop-2022-contain%20or%20label%3Ainterop-2022-dialog%20or%20label%3Ainterop-2022-forms%20or%20label%3Ainterop-2022-scrolling%20or%20label%3Ainterop-2022-subgrid%20or%20label%3Ainterop-2022-text%20or%20label%3Ainterop-2022-viewport%20or%20label%3Ainterop-2022-webcompat%20or%20label%3Ainterop-2023-color%20or%20label%3Ainterop-2023-contain%20or%20label%3Ainterop-2023-container%20or%20label%3Ainterop-2023-cssborderimage%20or%20label%3Ainterop-2023-cssmasking%20or%20label%3Ainterop-2023-events%20or%20label%3Ainterop-2023-flexbox%20or%20label%3Ainterop-2023-fonts%20or%20label%3Ainterop-2023-forms%20or%20label%3Ainterop-2023-grid%20or%20label%3Ainterop-2023-has%20or%20label%3Ainterop-2023-inert%20or%20label%3Ainterop-2023-mathfunctions%20or%20label%3Ainterop-2023-mediaqueries%20or%20label%3Ainterop-2023-modules%20or%20label%3Ainterop-2023-motion%20or%20label%3Ainterop-2023-offscreencanvas%20or%20label%3Ainterop-2023-property%20or%20label%3Ainterop-2023-pseudos%20or%20label%3Ainterop-2023-url%20or%20label%3Ainterop-2023-webcodecs%20or%20label%3Ainterop-2023-webcompat%20or%20label%3Ainterop-2023-webcomponents)


### Border Image

Authors can specify an image to be used in place of the border-style. In this case, the border’s design is taken from the sides and corners of an image specified ([CSS `border-image`](https://github.com/web-platform-tests/interop/issues/146)).

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image)

[Spec](https://drafts.csswg.org/css-backgrounds-3/#the-border-image)

[Tests](https://wpt.fyi/results/css/css-backgrounds?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-cssborderimage)


### Color Spaces and Functions

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)

[Spec](https://drafts.csswg.org/css-color-4/)

[Tests](https://wpt.fyi/results/css?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2022-color%20or%20label%3Ainterop-2023-color)


### Container Queries

Container queries allow us to look at a container size and apply styles to the contents based on the size of their container rather than the viewport or other device characteristics. If the container has less space in the surrounding context, you can hide certain elements or use smaller fonts, for example. ([Container Queries](https://github.com/web-platform-tests/interop/issues/133)).

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries)

[Spec](https://drafts.csswg.org/css-contain-3/#container-queries)

[Tests](https://wpt.fyi/results/css/css-contain/container-queries?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-container)


### Containment

The contain CSS property indicates that an element and its contents are, as much as possible, independent from the rest of the document tree. Containment enables isolating a subsection of the DOM, providing performance benefits by limiting calculations of layout, style, paint, size, or any combination to a DOM subtree rather than the entire page. Containment can also be used to scope CSS counters and quotes.

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Containment)

[Spec](https://drafts.csswg.org/css-contain-3/)

[Tests](https://wpt.fyi/results/css?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2022-contain%20or%20label%3Ainterop-2023-contain)


### CSS Math Functions

The math functions allow CSS numeric values to be written as mathematical expressions.

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions#math_functions)

[Spec](https://drafts.csswg.org/css-values-4/#math)

[Tests](https://wpt.fyi/results/css/css-values?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-mathfunctions)


### CSS Pseudo-classes

A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s). For example, the pseudo-class :hover can be used to select a button when a user's pointer hovers over the button and this selected button can then be styled.

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

[Spec](https://html.spec.whatwg.org/multipage/semantics-other.html#pseudo-classes)

[Tests](https://wpt.fyi/results/css/selectors?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-pseudos)


### Custom Properties

The `@property` CSS at-rule is part of the CSS Houdini umbrella of APIs, it allows developers to explicitly define their css custom properties, allowing for property type checking, setting default values, and define whether a property can inherit values or not.

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@property)

[Spec](https://drafts.css-houdini.org/css-properties-values-api/)

[Tests](https://wpt.fyi/results/css/css-properties-values-api?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-property)


### Flexbox

Flexbox is a one-dimensional layout method for arranging items in rows or columns. Items flex (expand) to fill additional space or shrink to fit into smaller spaces. This article explains all the fundamentals.

[MDN](https://developer.mozilla.org/docs/Learn/CSS/CSS_layout/Flexbox)

[Spec](https://drafts.csswg.org/css-flexbox/)

[Tests](https://wpt.fyi/results/css/css-flexbox?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2021-flexbox%20or%20label%3Ainterop-2023-flexbox)


### Font Feature Detection and Palettes

Enable testing for font stack capabilities and enable additional expressiveness with vector color fonts. ([Font feature detection and palettes](https://github.com/web-platform-tests/interop/issues/164))

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-palette)

[Spec](https://drafts.csswg.org/css-fonts-4/#font-palette-prop)

[Tests](https://wpt.fyi/results/css?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-fonts)


### Forms

The &lt;form> HTML element represents a document section containing interactive controls for submitting information.

[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)

[Spec](https://html.spec.whatwg.org/multipage/forms.html#the-form-element)

[Tests](https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2022-forms%20or%20label%3Ainterop-2023-forms)

### Grid

CSS Grid Layout excels at dividing a page into major regions or defining the relationship in terms of size, position, and layer, between parts of a control built from HTML primitives.

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)

[Spec](https://drafts.csswg.org/css-grid-2/)

[Tests](https://wpt.fyi/results/css/css-grid?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2021-grid%20or%20label%3Ainterop-2023-grid)


### :has()

TODO

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:has)

[Spec](https://drafts.csswg.org/selectors-4/)

[Spec](https://wpt.fyi/results/css/selectors?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-has)


### Inert

The `inert` attribute on HTML elements makes the browser "ignore" user input events for the element, including focus events and events from assistive technologies. The browser may also ignore page search and text selection in the element. This can be useful when building UIs such as modals where you would want to "trap" the focus inside the modal when it's visible.

[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inert)

[Spec](https://html.spec.whatwg.org/multipage/interaction.html#the-inert-attribute)

[Tests](https://wpt.fyi/results/inert?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-inert)


### Masking

CSS Masking allows for partially or fully hiding portions of visual elements, using masking and clipping.

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Masking)

[Spec](https://drafts.fxtf.org/css-masking/#the-mask)

[Tests](https://wpt.fyi/results/css/css-masking?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-cssmasking)


### Media Queries 4

Media queries allow you to apply CSS styles depending on a device's general type (such as print vs. screen) or other characteristics such as screen resolution or browser viewport width. Media queries are used for the following:

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

[Spec](https://drafts.csswg.org/mediaqueries-4/)

[Tests](https://wpt.fyi/results/css/mediaqueries?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-mediaqueries)


### Modules

Add support for ES Modules in Web Worker contexts.

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)

[Spec](https://html.spec.whatwg.org/multipage/workers.html#module-worker-example)

[Tests](https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-modules)


### Motion Path

Motion Path is a CSS module that allows authors to animate any graphical object along a custom path. CSS Motion Path is now supported in all three engines. But there are remaining test failures. This focus area is to make sure we reach a higher bar of interoperability, and make it more possible for developers to use Motion Path without problems.

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Motion_Path)

[Spec](https://drafts.fxtf.org/motion-1/)

[Tests](https://wpt.fyi/results/css/motion?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-motion)


### Offscreen Canvas

Offscreen Canvas provides a canvas that can be rendered off screen, decoupling the DOM and the Canvas API so that the &lt;canvas> element is no longer entirely dependent on the DOM. Rendering operations can also be run inside a worker context, allowing you to run some tasks in a separate thread and avoid heavy work on the main thread.

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas)

[Spec](https://html.spec.whatwg.org/multipage/canvas.html#the-offscreencanvas-interface)

[Tests](https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-offscreencanvas)


### Pointer and Mouse Events

Pointer events are DOM events that are fired for a pointing device. They are designed to create a single DOM event model to handle pointing input devices such as a mouse, pen/stylus or touch (such as one or more fingers). This focus area covers the behavior of pointer and mouse interaction with pages, including how they interact with hit testing and scrolling areas. We have decided to explicitly exclude touch and stylus due to lack of WPT testing support across all browsers.

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events)

[Spec](https://w3c.github.io/pointerevents/)

[Tests](https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-events)


### Scrolling

The scroll-behavior, overscroll-behavior and scroll-snap CSS properties and the CSSOM View scroll-related APIs allow authors to influence how scrolling behaves.

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior)

[Spec](https://drafts.csswg.org/css-overflow-3/#propdef-scroll-behavior)

[Tests](https://wpt.fyi/results/css?label=master&label=experimental&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2022-scrolling)


### Subgrid

Subgrid makes it possible to nest grids while having the items of the nested grid line up with the main grid.

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Subgrid)

[Spec](https://drafts.csswg.org/css-grid-2/)

[Tests](https://wpt.fyi/results/css/css-grid/subgrid?label=master&label=experimental&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2022-subgrid)

### Transforms 

The transform CSS property lets you rotate, scale, skew, or translate an element.

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)

[Spec](https://w3c.github.io/csswg-drafts/css-transforms-2/#transform-functions)

[Tests](https://wpt.fyi/results/css/css-transforms?label=master&label=experimental&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2021-transforms)


### URL

The URL interface is used to parse, construct, normalize, and encode URLs. It works by providing properties which allow you to easily read and modify the components of a URL. This focus area is to get all browsers to agree on an implementation of URLs as defined in the URL Standard.

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/URL)

[Spec](https://url.spec.whatwg.org/)

[Tests](https://wpt.fyi/results/url?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-url)


### Web Codecs (video)

The Web Codecs API gives web developers low-level access to the individual frames of a video stream and chunks of audio. It is useful for web applications that require full control over the way media is processed. For example, video or audio editors, and video conferencing.

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebCodecs_API)

[Spec](https://w3c.github.io/webcodecs/)

[Tests](https://wpt.fyi/results/webcodecs?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-webcodecs)


### Web Compat 2023

A focus area for bugs that cause known site compatibility issues, or documented problems for authors creating libraries or sites, but which are not part of a larger feature that's appropriate for its own focus area.

[Tests](https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-webcompat)


### Web Components

Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.

[MDN](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

[Tests](https://wpt.fyi/results/?label=experimental&label=master&product=chrome&product=firefox&product=safari&aligned&view=interop&q=label%3Ainterop-2023-webcomponents)


## Investigation Efforts

An investigation efforts consists of a set of tasks that will bring the feature up to the bar required for a Focus Area in the future. If this involves any standards work, that work must be done in the appropriate standards group, and those doing the work need to join that group.

The following investigation areas were selected for Interop 2023.


### Accessibility Testing

This investigation area involves working towards generating consistent accessibility tries from the same DOM + CSS.


### Mobile Testing

This investigation area involves doing the infrastructure work required to allow WPT Interop to accept future Interop proposals that test mobile-specific functionality which can't be scored using the current desktop-only wpt CI.


## Join the conversation

You're also welcome to join the conversation in the [`#interop20xx:matrix.org` Matrix channel](https://app.element.io/#/room/#interop2022:matrix.org)!
