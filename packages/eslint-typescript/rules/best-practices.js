module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
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
  },
};
