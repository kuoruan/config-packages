/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: "plugin:unicorn/recommended",
  rules: {
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/catch-error-name.md
    "unicorn/catch-error-name": ["error", { name: "err", ignore: ["e"] }],
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-function-scoping.md
    "unicorn/consistent-function-scoping": "off",
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-module.md
    "unicorn/prefer-module": "off",
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prevent-abbreviations.md
    "unicorn/prevent-abbreviations": "off",
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-null.md
    "unicorn/no-null": "off",
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-reduce.md
    "unicorn/no-array-reduce": "off",
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-null.md
    "unicorn/prefer-export-from": "off",
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-protocol.md
    "unicorn/prefer-node-protocol": "off",
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
    "unicorn/filename-case": [
      "error",
      {
        case: "kebabCase",
        ignore: [
          "^[A-Z]\\w+\\.[jt]sx$",
          // react next.js router page
          "^\\[\\w+\\]\\.[jt]sx?$",
          // react hooks
          "^use[A-Z]\\w+\\.[jt]s$",
          // react context
          "^[A-Z]\\w+Context\\.[jt]s$",
          // uppercase markdown files
          "^[A-Z]+\\.mdx?$",
        ],
      },
    ],
  },
};
