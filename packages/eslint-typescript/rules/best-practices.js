/** @type {import("eslint").Linter.Config} */
module.exports = {
  rules: {
    // https://typescript-eslint.io/rules/no-explicit-any
    // allow any types
    '@typescript-eslint/no-explicit-any': 'off',

    // https://typescript-eslint.io/rules/no-shadow
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': [
      'error',
      {
        ignoreTypeValueShadow: true,
        ignoreFunctionTypeParameterNameValueShadow: true,
      },
    ],

    // https://typescript-eslint.io/rules/no-empty-interface
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
  },
}
