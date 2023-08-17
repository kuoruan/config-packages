/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@kuoruan/eslint-config-typescript"],
  overrides: [
    {
      files: ["**/*.tsx"],
      extends: ["./rules/best-practices"].map((r) => require.resolve(r)),
    },
    {
      files: ["**/*.ts", "**/*.tsx"],
      extends: ["./rules/react-hooks", "./rules/react-refresh"].map((r) => require.resolve(r)),
    },
  ],
};