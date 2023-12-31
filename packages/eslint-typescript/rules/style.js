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
      {
        selector: "property",
        format: ["camelCase", "UPPER_CASE", "PascalCase", "snake_case"],
        leadingUnderscore: "forbid",
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
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
