// See an explanation: https://webpack.js.org/api/loaders/#examples

const { getOptions, interpolateName } = require('loader-utils');
const validateOptions = require('schema-utils');
const generateTemplate  = require('./src/templateGenerator');

const schema = {
  type: 'object',
  properties: {
    test: {
      type: 'string'
    }
  }
};

module.exports = function(source) {

  // So Far no need for async since the whole computation is performed in CPU.
  // The loader is cacheable by default. 

  // Get the options from webpack.config.js
  const options = getOptions(this) || {};
  console.log('Hello world :D');

  // File-Loader does this.
  const context = options.context || this.rootContext 
                  || (this.options & this.options.context);
  const name = interpolateName(this, '[name]', {
    context, 
    content: source
  });
  console.log('Resource Query', this.resourceQuery)

  const template = generateTemplate(name, source);
  console.log(template)
  // return `hello`;
  return template.toString();
}