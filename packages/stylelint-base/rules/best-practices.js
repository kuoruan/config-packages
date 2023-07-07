/** @type {import("stylelint").Config} */
module.exports = {
  rules: {
    // https://stylelint.io/user-guide/rules/list/color-function-notation/
    "color-function-notation": "legacy",
    // https://stylelint.io/user-guide/rules/list/alpha-value-notation/
    "alpha-value-notation": "number",
    // https://stylelint.io/user-guide/rules/list/declaration-empty-line-before/
    "declaration-empty-line-before": [
      "always",
      {
        except: [
          "first-nested",
          // 'after-declaration', // move to below(↓), to support `order/properties-order`
        ],
        ignore: ["after-comment", "after-declaration", "inside-single-line-block"],
      },
    ],
    // https://stylelint.io/user-guide/rules/list/selector-class-pattern/
    "selector-class-pattern": [
      "^[a-z][a-z0-9]*((-|--|__)[a-z0-9]+)*$",
      {
        message: (selector) =>
          `Expected class selector "${selector}" to be kebab-case under BEM style`,
      },
    ],
    // https://stylelint.io/user-guide/rules/list/selector-pseudo-element-no-unknown/
    "selector-pseudo-element-no-unknown": [
      true,
      { ignorePseudoElements: ["v-deep", "v-global", "v-slotted"] },
    ],
    // https://stylelint.io/user-guide/rules/list/selector-pseudo-class-no-unknown/
    // ::v-deep https://vue-loader.vuejs.org/guide/scoped-css.html#deep-selectors
    // :global, :local https://github.com/css-modules/css-modules#exceptions
    // :export https://github.com/css-modules/icss#export
    // :import https://github.com/css-modules/icss#import
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["deep", "global", "local", "export", "import"],
      },
    ],
    // https://stylelint.io/user-guide/rules/list/font-family-no-missing-generic-family-keyword
    "font-family-no-missing-generic-family-keyword": [true, { ignoreFontFamilies: [/icon/] }],
    // https://stylelint.io/user-guide/rules/list/at-rule-no-unknown
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "layer",
          /** tailwindcss v1, v2 */
          "variants",
          "responsive",
          "screen",
        ],
      },
    ],
    // https://stylelint.io/user-guide/rules/list/function-no-unknown
    "function-no-unknown": [
      true,
      {
        ignoreFunctions: ["theme"],
      },
    ],
  },
};
