const { getPrettierConfig } = require("@kuoruan/prettier-config/utils");

module.exports = {
  extends: ["@kuoruan/eslint-config-base"],
  overrides: [
    {
      files: ["**/*.{ts,cts,mts,tsx}"],
      extends: [
        ...[
          "./rules/base",
          "./rules/without-type-checking",
          "./rules/best-practices",
          "./rules/style",
          "./rules/imports",
        ].map((r) => require.resolve(r)),
        "plugin:prettier/recommended",
      ],
      rules: {
        "prettier/prettier": ["error", getPrettierConfig("typescript")],
      },
    },
    {
      files: ["**/*.d.ts"],
      extends: ["./rules/types"].map((r) => require.resolve(r)),
    },
  ],
};
