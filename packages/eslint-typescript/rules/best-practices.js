/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
  ],
  rules: {
    // https://typescript-eslint.io/rules/no-explicit-any
    // allow any types
    "@typescript-eslint/no-explicit-any": "off",
    // https://typescript-eslint.io/rules/no-unsafe-argument
    "@typescript-eslint/no-unsafe-argument": "off",
    // https://typescript-eslint.io/rules/no-unsafe-assignment
    "@typescript-eslint/no-unsafe-assignment": "off",
    // https://typescript-eslint.io/rules/no-unsafe-call
    "@typescript-eslint/no-unsafe-call": "off",
    // https://typescript-eslint.io/rules/no-unsafe-member-access
    "@typescript-eslint/no-unsafe-member-access": "off",
    // https://typescript-eslint.io/rules/no-unsafe-return
    "@typescript-eslint/no-unsafe-return": "off",

    // https://typescript-eslint.io/rules/no-shadow
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": [
      "error",
      {
        ignoreTypeValueShadow: true,
        ignoreFunctionTypeParameterNameValueShadow: true,
      },
    ],

    // https://typescript-eslint.io/rules/return-await
    "no-return-await": "off",
    "@typescript-eslint/return-await": "error",

    // https://typescript-eslint.io/rules/restrict-template-expressions
    "@typescript-eslint/restrict-template-expressions": [
      "error",
      {
        allowAny: true,
        allowBoolean: true,
        allowNullish: true,
        allowNumber: true,
        allowRegExp: true,
      },
    ],

    // https://typescript-eslint.io/rules/no-floating-promises
    "no-void": "off",
    "@typescript-eslint/no-floating-promises": [
      "error",
      {
        ignoreVoid: true,
        ignoreIIFE: true,
      },
    ],

    // https://typescript-eslint.io/rules/no-empty-interface
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        allowSingleExtends: true,
      },
    ],

    // https://typescript-eslint.io/rules/prefer-nullish-coalescing
    "@typescript-eslint/prefer-nullish-coalescing": [
      "error",
      {
        ignorePrimitives: {
          bigint: true,
          boolean: true,
          number: true,
          string: true,
        },
      },
    ],
  },
};
