/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: ["promise"],
  rules: {
    // https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/always-return.md
    "promise/always-return": "off",

    // https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-return-wrap.md
    "promise/no-return-wrap": "error",

    // https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/param-names.md
    "promise/param-names": "error",

    // https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/catch-or-return.md
    "promise/catch-or-return": ["error", { allowThen: true, allowFinally: true }],

    // https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-native.md
    "promise/no-native": "off",

    // https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-nesting.md
    "promise/no-nesting": "warn",

    // https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-promise-in-callback.md
    "promise/no-promise-in-callback": "warn",

    // https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-callback-in-promise.md
    "promise/no-callback-in-promise": "warn",

    // https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/avoid-new.md
    "promise/avoid-new": "off",

    // https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-new-statics.md
    "promise/no-new-statics": "error",

    // https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-return-in-finally.md
    "promise/no-return-in-finally": "warn",

    // https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/valid-params.md
    "promise/valid-params": "warn",
  },
};
