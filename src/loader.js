
const { getOptions, interpolateName } = require('loader-utils');
const validateOptions = require('schema-utils');
const generateTemplate  = require('./templateGenerator');

const schema = {
  type: 'object',
  properties: {
    test: {
      type: 'string'
    }
  }
};

module.exports = function(source) {

  const options = getOptions(this) || {};
  console.log('Hello world :D');

  // File-Loader does this.
  const context = options.context || this.rootContext 
                  || (this.options & this.options.context);
  const name = interpolateName(this, '[name]', {
    context, 
    content: source
  });

  const template = generateTemplate(name, source);
  console.log(template)
  // return `hello`;
  return template;
}