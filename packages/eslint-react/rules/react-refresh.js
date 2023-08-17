/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
  },
};
