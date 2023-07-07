/** @type {import("eslint").Linter.Config} */
module.exports = {
  rules: {
    "no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: true,
        varsIgnorePattern: "\\w*Component",
      },
    ],
  },
};
