/**
 * Error messages for ESLint rules.
 */

function isDeprecated(name) {
  return `${name} is deprecated.`;
}

function useWindowFunction(name) {
  return `Do not use ${name}. Use window.${name} instead.`;
}

function useWrapperFunction(name) {
  return `Do not use ${name} directly. Use a wrapper function instead.`;
}

function useOtherFunction(name, otherName) {
  return `Do not use ${name}. Use ${otherName} instead.`;
}

function useInstead(name) {
  return `Use ${name} instead.`;
}

module.exports.isDeprecated = isDeprecated;
module.exports.useWindowFunction = useWindowFunction;
module.exports.useWrapperFunction = useWrapperFunction;
module.exports.useOtherFunction = useOtherFunction;
module.exports.useInstead = useInstead;
