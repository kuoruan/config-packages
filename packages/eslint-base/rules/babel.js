/** @type {import("eslint").Linter.Config} */
module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      parserOpts: {
        plugins: ["jsx"],
      },
      plugins: [require.resolve("@babel/plugin-syntax-import-attributes")],
    },
    requireConfigFile: false,
  },
};
