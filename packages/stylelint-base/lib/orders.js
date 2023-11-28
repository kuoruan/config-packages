/**
 * [Concentric-CSS](https://github.com/brandon-rhodes/Concentric-CSS) orders
 *
 * - From: [css-declaration-sorter](https://github.com/Siilwyn/css-declaration-sorter/blob/master/src/orders/concentric-css.mjs)
 * - With: [@mdn/browser-compat-data@5.3.17](https://github.com/mdn/browser-compat-data)
 *
 * 1. Positioning
 * 2. Visibility
 * 3. Box model
 * 4. Dimensions
 * 5. Text
 */
module.exports = [
  {
    group: "Positioning",
    properties: [
      "all",
      "display",
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "offset",
      "offset-anchor",
      "offset-distance",
      "offset-path",
      "offset-rotate",
      "grid",
      "grid-template-rows",
      "grid-template-columns",
      "grid-template-areas",
      "grid-auto-rows",
      "grid-auto-columns",
      "grid-auto-flow",
      "column-gap",
      "row-gap",
      "grid-area",
      "grid-row",
      "grid-row-start",
      "grid-row-end",
      "grid-column",
      "grid-column-start",
      "grid-column-end",
      "grid-template",
      "flex",
      "flex-grow",
      "flex-shrink",
      "flex-basis",
      "flex-direction",
      "flex-flow",
      "flex-wrap",
      "box-decoration-break",
      "place-content",
      "align-content",
      "justify-content",
      "place-items",
      "align-items",
      "justify-items",
      "place-self",
      "align-self",
      "justify-self",
      "vertical-align",
      "baseline-source",
      "order",
      "float",
      "clear",
      "shape-margin",
      "shape-outside",
      "shape-image-threshold",
      "orphans",
      "gap",
      "columns",
      "column-fill",
      "column-rule",
      "column-rule-width",
      "column-rule-style",
      "column-rule-color",
      "column-width",
      "column-span",
      "column-count",
      "break-before",
      "break-after",
      "break-inside",
      "page",
      "page-break-before",
      "page-break-after",
      "page-break-inside",
      "transform",
      "transform-box",
      "transform-origin",
      "transform-style",
      "translate",
      "rotate",
      "scale",
    ],
  },
  {
    group: "Visibility",
    properties: [
      "perspective",
      "perspective-origin",
      "appearance",
      "visibility",
      "opacity",
      "z-index",
      "paint-order",
      "mix-blend-mode",
      "backface-visibility",
      "backdrop-filter",
      "clip-path",
      "mask",
      "mask-border",
      "mask-border-outset",
      "mask-border-repeat",
      "mask-border-slice",
      "mask-border-source",
      "mask-border-width",
      "mask-image",
      "mask-mode",
      "mask-position",
      "mask-size",
      "mask-repeat",
      "mask-origin",
      "mask-clip",
      "mask-composite",
      "mask-type",
      "filter",
      "animation",
      "animation-composition",
      "animation-duration",
      "animation-timing-function",
      "animation-delay",
      "animation-iteration-count",
      "animation-direction",
      "animation-fill-mode",
      "animation-play-state",
      "animation-name",
      "transition",
      "transition-delay",
      "transition-duration",
      "transition-property",
      "transition-timing-function",
      "will-change",
      "counter-increment",
      "counter-reset",
      "counter-set",
      "cursor",
    ],
  },
  {
    group: "Box Model",
    properties: [
      "box-sizing",
      "contain",
      "contain-intrinsic-height",
      "contain-intrinsic-size",
      "contain-intrinsic-width",
      "container",
      "container-name",
      "container-type",
      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      "margin-inline",
      "margin-inline-start",
      "margin-inline-end",
      "margin-block",
      "margin-block-start",
      "margin-block-end",
      "inset",
      "inset-block",
      "inset-block-end",
      "inset-block-start",
      "inset-inline",
      "inset-inline-end",
      "inset-inline-start",
      "outline",
      "outline-color",
      "outline-style",
      "outline-width",
      "outline-offset",
      "box-shadow",
      "border",
      "border-top",
      "border-right",
      "border-bottom",
      "border-left",
      "border-width",
      "border-top-width",
      "border-right-width",
      "border-bottom-width",
      "border-left-width",
      "border-style",
      "border-top-style",
      "border-right-style",
      "border-bottom-style",
      "border-left-style",
      "border-color",
      "border-top-color",
      "border-right-color",
      "border-bottom-color",
      "border-left-color",
      "border-radius",
      "border-top-right-radius",
      "border-top-left-radius",
      "border-bottom-right-radius",
      "border-bottom-left-radius",
      "border-inline",
      "border-inline-width",
      "border-inline-style",
      "border-inline-color",
      "border-inline-start",
      "border-inline-start-width",
      "border-inline-start-style",
      "border-inline-start-color",
      "border-inline-end",
      "border-inline-end-width",
      "border-inline-end-style",
      "border-inline-end-color",
      "border-block",
      "border-block-width",
      "border-block-style",
      "border-block-color",
      "border-block-start",
      "border-block-start-width",
      "border-block-start-style",
      "border-block-start-color",
      "border-block-end",
      "border-block-end-width",
      "border-block-end-style",
      "border-block-end-color",
      "border-image",
      "border-image-source",
      "border-image-slice",
      "border-image-width",
      "border-image-outset",
      "border-image-repeat",
      "border-collapse",
      "border-spacing",
      "border-start-start-radius",
      "border-start-end-radius",
      "border-end-start-radius",
      "border-end-end-radius",
      "background",
      "background-image",
      "background-position",
      "background-size",
      "background-repeat",
      "background-origin",
      "background-clip",
      "background-attachment",
      "background-color",
      "background-blend-mode",
      "background-position-x",
      "background-position-y",
      "isolation",
      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",
      "padding-inline",
      "padding-inline-start",
      "padding-inline-end",
      "padding-block",
      "padding-block-start",
      "padding-block-end",
      "image-orientation",
      "image-rendering",
    ],
  },
  {
    group: "Dimensions",
    properties: [
      "aspect-ratio",
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",
      "-webkit-line-clamp",
      "-webkit-text-fill-color",
      "-webkit-text-stroke",
      "-webkit-text-stroke-color",
      "-webkit-text-stroke-width",
      "inline-size",
      "min-inline-size",
      "max-inline-size",
      "block-size",
      "min-block-size",
      "max-block-size",
      "table-layout",
      "caption-side",
      "empty-cells",
      "overflow",
      "overflow-anchor",
      "overflow-block",
      "overflow-clip-margin",
      "overflow-inline",
      "overflow-x",
      "overflow-y",
      "overscroll-behavior",
      "overscroll-behavior-block",
      "overscroll-behavior-inline",
      "overscroll-behavior-x",
      "overscroll-behavior-y",
      "resize",
      "object-fit",
      "object-position",
      "scroll-behavior",
      "scroll-margin",
      "scroll-margin-block",
      "scroll-margin-block-end",
      "scroll-margin-block-start",
      "scroll-margin-bottom",
      "scroll-margin-inline",
      "scroll-margin-inline-end",
      "scroll-margin-inline-start",
      "scroll-margin-left",
      "scroll-margin-right",
      "scroll-margin-top",
      "scroll-padding",
      "scroll-padding-block",
      "scroll-padding-block-end",
      "scroll-padding-block-start",
      "scroll-padding-bottom",
      "scroll-padding-inline",
      "scroll-padding-inline-end",
      "scroll-padding-inline-start",
      "scroll-padding-left",
      "scroll-padding-right",
      "scroll-padding-top",
      "scroll-snap-align",
      "scroll-snap-stop",
      "scroll-snap-type",
      "scrollbar-color",
      "scrollbar-gutter",
      "scrollbar-width",
      "touch-action",
      "pointer-events",
    ],
  },
  {
    group: "Text",
    properties: [
      "content",
      "quotes",
      "hanging-punctuation",
      "color",
      "accent-color",
      "print-color-adjust",
      "forced-color-adjust",
      "color-scheme",
      "caret-color",
      "font",
      "font-style",
      "font-variant",
      "font-weight",
      "font-stretch",
      "font-size",
      "size-adjust",
      "line-height",
      "src",
      "font-family",
      "font-display",
      "font-kerning",
      "font-language-override",
      "font-optical-sizing",
      "font-palette",
      "font-size-adjust",
      "font-synthesis",
      "font-synthesis-weight",
      "font-synthesis-style",
      "font-synthesis-small-caps",
      "font-synthesis-position",
      "font-variant-alternates",
      "font-variant-caps",
      "font-variant-east-asian",
      "font-variant-emoji",
      "font-variant-ligatures",
      "font-variant-numeric",
      "font-variant-position",
      "font-variation-settings",
      "font-feature-settings",
      "ascent-override",
      "descent-override",
      "line-gap-override",
      "hyphens",
      "hyphenate-character",
      "letter-spacing",
      "line-break",
      "list-style",
      "list-style-type",
      "list-style-image",
      "list-style-position",
      "writing-mode",
      "direction",
      "unicode-bidi",
      "unicode-range",
      "user-select",
      "ruby-position",
      "math-depth",
      "math-style",
      "text-combine-upright",
      "text-align",
      "text-align-last",
      "text-decoration",
      "text-decoration-line",
      "text-decoration-style",
      "text-decoration-color",
      "text-decoration-thickness",
      "text-decoration-skip-ink",
      "text-emphasis",
      "text-emphasis-style",
      "text-emphasis-color",
      "text-emphasis-position",
      "text-indent",
      "text-justify",
      "text-underline-position",
      "text-underline-offset",
      "text-orientation",
      "text-overflow",
      "text-rendering",
      "text-shadow",
      "text-transform",
      "white-space",
      "word-break",
      "word-spacing",
      "overflow-wrap",
      "tab-size",
      "widows",
    ],
  },
];
