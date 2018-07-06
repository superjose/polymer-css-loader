const miniCss = require('minify-css-string').default;
const generateTemplate = require('./templateGenerator');
const minTemplate = require('./templateGenerator.min.js');

/**
 * Main Template file that generates either a minified
 * or uncompressed template
 */

/**
 *
 * @param {*} name The name of the element we're going to register
 * @param {*} source The actual CSS content
 * @param {*} options The Options from Webpackconfig.js
 */

function minifiedTemplate(name, source) {
  const cssMin = miniCss(source);
  return minTemplate(name, cssMin);
}

function template(name, source) {
  return generateTemplate(name, source);
}

module.exports = function (name, source, options) {
  return !options.minify ? template(name, source)
    : minifiedTemplate(name, source);
};
