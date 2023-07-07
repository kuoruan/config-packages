const { getPrettierConfig } = require("@kuoruan/prettier-config");

/** @type {import("stylelint").Config} */
module.exports = {
  extends: ["./rules/base", "./rules/best-practices", "./rules/order"].map((r) =>
    require.resolve(r),
  ),
  overrides: [
    {
      files: ["*.css", "**/*.css"],
      plugins: ["stylelint-prettier"],
      rules: {
        "prettier/prettier": [true, getPrettierConfig("css")],
      },
    },
    {
      files: [".html", ".htm", ".shtml", ".xhtml"].flatMap((ext) => [`*${ext}`, `**/*${ext}`]),
      extends: ["./rules/base-html", "./rules/best-practices", "./rules/order"].map((r) =>
        require.resolve(r),
      ),
      plugins: ["stylelint-prettier"],
      rules: {
        "prettier/prettier": [true, getPrettierConfig("html")],
      },
    },
    {
      files: [".scss", ".sass"].flatMap((ext) => [`*${ext}`, `**/*${ext}`]),
      extends: ["./rules/base-scss", "./rules/best-practices", "./rules/order", "./rules/scss"].map(
        (r) => require.resolve(r),
      ),
      plugins: ["stylelint-prettier"],
      rules: {
        "prettier/prettier": [true, getPrettierConfig("scss")],
      },
    },
  ],
};
