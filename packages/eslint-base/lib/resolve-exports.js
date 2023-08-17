// @ts-check

const { resolve: resolveExports } = require("resolve.exports");
const path = require("path");
const fs = require("fs");

/**
 * Finds package.json for a package
 *
 * @param {string} filepath
 * @param {string} packageName
 * @returns {string} package.json path
 */
function findPackageJson(filepath, packageName) {
  for (;;) {
    const pkgFile = path.join(filepath, "node_modules", packageName, "package.json");

    if (fs.existsSync(pkgFile)) {
      return pkgFile;
    }
    const dir = path.dirname(filepath);

    if (dir === filepath) {
      return "";
    }
    filepath = dir;
  }
}

/**
 * @param {string} source source
 * @param {string} file file
 * @param {import("resolve.exports").Options} config config
 */
const resolve = (source, file, config) => {
  if (source.startsWith(".") || source.startsWith("/")) {
    return { found: false };
  }

  const [packageNameOrScope, packageNameOrPath] = source.split("/", 3);
  const packageName = packageNameOrScope.startsWith("@")
    ? `${packageNameOrScope}/${packageNameOrPath}`
    : packageNameOrScope;

  const pkgFile = findPackageJson(path.dirname(file), packageName);

  if (!pkgFile) {
    return { found: false };
  }

  try {
    const pkg = JSON.parse(fs.readFileSync(pkgFile, "utf8"));

    if (pkg.name !== packageName) {
      return { found: false };
    }

    const resolved = resolveExports(pkg, source, config);

    if (!resolved || resolved.length === 0) {
      return { found: false };
    }

    for (const r of resolved) {
      const moduleId = path.join(path.dirname(pkgFile), r);

      if (fs.existsSync(moduleId)) {
        return { found: true, path: moduleId };
      }
    }

    return { found: false };
  } catch {
    return { found: false };
  }
};

module.exports = {
  interfaceVersion: 2,
  resolve,
};
