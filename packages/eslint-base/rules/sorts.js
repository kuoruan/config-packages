/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: ["simple-import-sort", "sort-destructure-keys"],
  rules: {
    // https://github.com/lydell/eslint-plugin-simple-import-sort#usage
    "sort-imports": "off",
    "import/order": "off",
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",

    // https://github.com/mthadley/eslint-plugin-sort-destructure-keys
    "sort-destructure-keys/sort-destructure-keys": ["error", { caseSensitive: true }],
  },
};
