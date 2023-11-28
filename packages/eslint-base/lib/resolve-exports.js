// @ts-check

const { resolve: resolveExports } = require("resolve.exports");
const path = require("path");
const fs = require("fs");
const { builtinModules } = require("module");

/**
 * @param {string} source source
 * @param {string} file file
 * @param {import("resolve.exports").Options} config config
 */
const resolve = (source, file, config) => {
  if (source.startsWith(".") || source.startsWith("/")) {
    return { found: false };
  }

  try {
    const moduleId = require.resolve(source, { paths: [path.dirname(file)] });

    if (builtinModules.includes(moduleId)) {
      return { found: false };
    }

    return { found: true, path: moduleId };
  } catch (e) {
    if (e.code === "MODULE_NOT_FOUND" && e.path?.endsWith("/package.json")) {
      // eslint-disable-next-line import/no-dynamic-require
      const { exports, main, module, name } = require(e.path);

      const resolved = resolveExports({ name, exports, module, main }, source, config);

      if (!resolved || resolved.length === 0) {
        return { found: false };
      }

      for (const r of resolved) {
        const moduleId = path.join(path.dirname(e.path), r);

        if (fs.existsSync(moduleId)) {
          return { found: true, path: moduleId };
        }
      }
    }
  }

  return { found: false };
};

module.exports = {
  interfaceVersion: 2,
  resolve,
};
