module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    jsxPragma: null,
    project: ["**/tsconfig.json", "**/tsconfig.eslint.json"],
    warnOnUnsupportedTypeScriptVersion: false,
  },
};
