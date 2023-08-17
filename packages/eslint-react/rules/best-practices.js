/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["plugin:react/recommended", "plugin:react/jsx-runtime"],
  rules: {
    "react/jsx-sort-props": "warn",
    "react/no-unknown-property": [
      "error",
      {
        ignore: ["jsx", "global"],
      },
    ],
  },
  settings: {
    react: {
      pragma: null,
      version: "detect",
    },
  },
};
