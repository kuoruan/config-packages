/** @type {import("eslint").Linter.Config} */
module.exports = {
  rules: {
    // https://typescript-eslint.io/rules/padding-line-between-statements
    "padding-line-between-statements": "off",
    "@typescript-eslint/padding-line-between-statements": [
      "warn",
      {
        blankLine: "always",
        next: ["block", "block-like"],
        prev: ["block", "block-like"],
      },
      { blankLine: "any", next: ["case", "default"], prev: "case" },
      { blankLine: "always", next: "return", prev: "*" },
      { blankLine: "always", next: "*", prev: "directive" },
      { blankLine: "any", next: "directive", prev: "directive" },
      { blankLine: "always", next: "*", prev: ["const", "let", "var"] },
      {
        blankLine: "any",
        next: ["const", "let", "var"],
        prev: ["const", "let", "var"],
      },
      { blankLine: "always", next: ["interface", "type"], prev: "*" },
    ],

    // https://typescript-eslint.io/rules/naming-convention
    camelcase: "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: "default",
        format: ["camelCase", "UPPER_CASE", "PascalCase"],
        leadingUnderscore: "allow",
        trailingUnderscore: "allow",
      },
      /**
       * Allow PascalCase when it's used as a package name
       * eg. `const { default: ExcelJS } = await import('exceljs')`
       */
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE", "PascalCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "variable",
        types: ["boolean"],
        format: ["camelCase", "UPPER_CASE"],
      },
      {
        selector: "function",
        format: ["camelCase", "PascalCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "parameter",
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "memberLike",
        modifiers: ["static", "public"],
        format: ["camelCase", "UPPER_CASE"],
      },
      {
        selector: "memberLike",
        modifiers: ["private"],
        format: ["camelCase"],
        leadingUnderscore: "require",
      },
      {
        selector: "memberLike",
        modifiers: ["static", "private"],
        format: ["camelCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
      },
      {
        selector: "memberLike",
        modifiers: ["protected"],
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "memberLike",
        modifiers: ["public"],
        format: ["camelCase"],
        leadingUnderscore: "forbid",
      },
      {
        selector: "enumMember",
        format: ["UPPER_CASE", "PascalCase"],
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
        leadingUnderscore: "forbid",
      },
      {
        selector: "property",
        format: ["camelCase", "snake_case"],
        leadingUnderscore: "forbid",
      },
      {
        selector: "property",
        modifiers: ["static", "public"],
        format: ["camelCase", "UPPER_CASE", "PascalCase"],
      },
      {
        selector: "objectLiteralProperty",
        format: ["camelCase", "UPPER_CASE", "PascalCase"],
        leadingUnderscore: "forbid",
      },
      {
        selector: "method",
        modifiers: ["private"],
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: false,
        },
      },
      {
        selector: [
          "classProperty",
          "objectLiteralProperty",
          "typeProperty",
          "classMethod",
          "objectLiteralMethod",
          "typeMethod",
          "accessor",
          "enumMember",
        ],
        format: null,
        modifiers: ["requiresQuotes"],
      },
    ],
  },
};
