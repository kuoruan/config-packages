/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["plugin:import/typescript"],
  rules: {
    // https://typescript-eslint.io/docs/linting/troubleshooting/#eslint-plugin-import
    "import/named": "off",
    "import/namespace": "off",
    "import/default": "off",
    "import/no-named-as-default-member": "off",

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
    // https://github.com/import-js/eslint-plugin-import/issues/1568#issuecomment-564687683
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        cjs: "never",
        mjs: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
      node: {
        extensions: [".js", ".cjs", ".mjs", ".jsx", ".ts", ".tsx"],
      },
    },
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
  },
};
