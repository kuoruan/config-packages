/** @type {import("stylelint").Config} */
module.exports = {
  rules: {
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-import-partial-extension/README.md
    "scss/at-import-partial-extension": "always",
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-rule-no-unknown/README.md
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": [
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
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-no-unknown/README.md
    "function-no-unknown": null,
    "scss/function-no-unknown": null,
  },
};
