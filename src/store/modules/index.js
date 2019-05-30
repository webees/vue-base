/**
 * import all modules in a one-shot manner.
 */

const files = require.context(".", false, /\.js$/);
const modules = {};

files.keys().forEach(key => {
  if (key === "./index.js") return;
  modules[key.replace(/(\.\/|\.js)/g, "")] = files(key).default;
});

export default modules;
