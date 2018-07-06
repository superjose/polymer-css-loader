// See an explanation: https://webpack.js.org/api/loaders/#examples
const { getOptions, interpolateName } = require('loader-utils');
const nameParser = require('./src/nameQueryParser');
const template = require('./src/template');

module.exports = function (source) {
  // So Far no need for async since the whole computation is performed in CPU.
  // The loader is cacheable by default.

  // Get the options from webpack.config.js
  const options = getOptions(this) || {};

  // File-Loader does this.
  const context = this.rootContext || (this.options & this.options.context);
  // The name of the element that we're going to register.
  // this.resourceQuery in the form of: mystyle.css?name=my-custom-name
  const registrationName = nameParser(this.resourceQuery);
  const name = interpolateName(this, registrationName, {
    context,
    content: source,
  });
  const temp = template(name, source, options);
  
  // Generates the JavaScript required for Web Components
  return temp;
};
