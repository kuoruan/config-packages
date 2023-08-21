/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@kuoruan/eslint-config-base"],
  overrides: [
    {
      files: ["**/*.jsx"],
      extends: ["./rules/best-practices", "./rules/react-refresh"].map((r) => require.resolve(r)),
    },
    {
      files: ["**/*.{js,jsx}"],
      extends: ["./rules/react-hooks"].map((r) => require.resolve(r)),
    },
  ],
};
