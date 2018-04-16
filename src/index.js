module.exports = function addDisplayNames(options) {
  return function wrap(ReactClass, uniqueId) {
    ReactClass.displayName =
      options.components[uniqueId].displayName || ReactClass.name || "Unknown";
    return ReactClass;
  };
};
