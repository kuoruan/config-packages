const config = require("./config");

function getPrettierConfig(parser) {
  return { ...config, parser };
}

module.exports.getPrettierConfig = getPrettierConfig;
