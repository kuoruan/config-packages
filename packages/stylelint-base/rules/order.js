const orders = require("../lib/orders");

/** @type {import("stylelint").Config} */
module.exports = {
  plugins: ["stylelint-order"],
  rules: {
    "order/order": [
      { type: "at-rule", name: "forward" },
      { type: "at-rule", name: "use" },
      { type: "at-rule", name: "import" },

      "custom-properties",
      "dollar-variables",

      { type: "at-rule", name: "extend" },
      { type: "at-rule", name: "mixin" },
      { type: "at-rule", name: "add-mixin" },
      { type: "at-rule", name: "include" },
      { type: "at-rule", name: "include", hasBlock: true },
      { type: "at-rule", name: "apply" },
      { type: "at-rule", name: "function" },

      { type: "rule", selector: "^%\\w" },

      "declarations",

      { type: "rule", selector: "/^&::[\\w-]+/" },
      { type: "rule", selector: "/^&:[\\w-]+/", hasBlock: true },
      { type: "rule", selector: "/^&/" },

      "rules",

      { type: "at-rule" },

      // Breakpoint Mixins
      { type: "at-rule", name: "include", parameter: /breakpoints?/i, hasBlock: true },
      { type: "at-rule", name: "mixin", parameter: /breakpoints?/i, hasBlock: true },
      { type: "at-rule", name: "add-mixin", parameter: /breakpoints?/i, hasBlock: true },

      // Media Queries
      { type: "at-rule", name: "media", hasBlock: true },
      { type: "at-rule", hasBlock: true },
    ],

    // https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-order/README.md
    "order/properties-order": [
      ...orders.map((item) => ({
        groupName: item.group,
        properties: item.properties,
        emptyLineBefore: "threshold",
        noEmptyLineBetween: true,
      })),
      {
        unspecified: "bottomAlphabetical",
        emptyLineBeforeUnspecified: "threshold",
        emptyLineMinimumPropertyThreshold: 5,
      },
    ],
  },
};
