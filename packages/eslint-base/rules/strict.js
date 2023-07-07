/** @type {import("eslint").Linter.Config} */
module.exports = {
  rules: {
    // babel inserts `'use strict';` for us
    strict: ["error", "never"],
  },
};
