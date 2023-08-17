const { getPrettierConfig } = require("@kuoruan/prettier-config/utils");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: [
    "./rules/base",
    "./rules/best-practices",
    "./rules/errors",
    "./rules/node",
    "./rules/style",
    "./rules/variables",
    "./rules/es6",
    "./rules/imports",
    "./rules/strict",
    "./rules/promise",
    "./rules/unicorn",
    "./rules/sorts",
  ].map((r) => require.resolve(r)),
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  },
  overrides: [
    {
      files: ["**/*.{js,cjs,mjs,jsx}"],
      extends: [
        ...["./rules/javascript", "./rules/jsx"].map((r) => require.resolve(r)),
        "plugin:prettier/recommended",
      ],
      rules: {
        "prettier/prettier": ["error", getPrettierConfig("babel")],
      },
    },
    {
      files: ["**/*.{htm,htm}"],
      parser: "any-eslint-parser",
      extends: ["plugin:prettier/recommended"],
      rules: {
        "prettier/prettier": ["error", getPrettierConfig("html")],
      },
    },
    {
      files: ["**/*.md"],
      parser: "any-eslint-parser",
      extends: ["plugin:prettier/recommended"],
      rules: {
        "prettier/prettier": ["error", getPrettierConfig("markdown")],
      },
    },
    {
      files: ["**/*.mdx"],
      parser: "any-eslint-parser",
      extends: ["plugin:prettier/recommended"],
      rules: {
        "prettier/prettier": ["error", getPrettierConfig("mdx")],
      },
    },
    {
      files: ["**/*.json"],
      parser: "any-eslint-parser",
      extends: ["plugin:prettier/recommended"],
      rules: {
        "prettier/prettier": ["error", getPrettierConfig("json")],
      },
    },
    {
      files: ["**/*.json5"],
      parser: "any-eslint-parser",
      extends: ["plugin:prettier/recommended"],
      rules: {
        "prettier/prettier": ["error", getPrettierConfig("json5")],
      },
    },
    {
      files: ["**/*.{yml,yaml}"],
      parser: "any-eslint-parser",
      extends: ["plugin:prettier/recommended"],
      rules: {
        "prettier/prettier": ["error", getPrettierConfig("yaml")],
      },
    },
  ],
};
