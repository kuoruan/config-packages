/** @type {import("stylelint").Config} */
module.exports = {
  extends: ["@kuoruan/stylelint-config-base"],
  overrides: [
    {
      files: ["*.tsx", "**/*.tsx", "*.jsx", "**/*.jsx"],
      customSyntax: "postcss-styled-jsx",
    },
  ],
};
