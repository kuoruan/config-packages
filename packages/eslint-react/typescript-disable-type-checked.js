/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@kuoruan/eslint-config-typescript/disable-type-checked"],
  overrides: [
    {
      files: ["**/*.tsx"],
      extends: ["./rules/best-practices", "./rules/react-refresh"].map((r) => require.resolve(r)),
    },
    {
      files: ["**/*.ts", "**/*.tsx"],
      extends: ["./rules/react-hooks"].map((r) => require.resolve(r)),
    },
  ],
};
