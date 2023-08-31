/** @type {import("eslint").Linter.Config} */
module.exports = {
  rules: {
    // Theses rules slow down the editor
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-misused-promises": "off",
  },
};
