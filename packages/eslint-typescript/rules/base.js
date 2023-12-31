/** @type {import("eslint").Linter.Config} */
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    jsxPragma: null,
    tsconfigRootDir: process.cwd(),
    project: "./tsconfig.json",
    warnOnUnsupportedTypeScriptVersion: false,
  },
};
