import compiler from './compiler';

/**
 * This uses Webpack's compiler function (see compiler.js) to
 * generate an in-memory test of the loader. 
 * 
 * We load a dummy css and check for its creation and integrity of its 
 * content.
 * 
 * Right now, it duplicates most of the logic from template.spec.ts
 * 
 */

describe('The Loader', async () => {

  beforeAll(async () => {
    const stats = await compiler('test.css');
    this.output = stats.toJson().modules[0].source;

    this.unparsedStyleElementName = 'test';
    this.parsedStyleElementName = 'test'

  })

  it('Creates the file', async () => {
    expect(this.output).not.toBeNull();
  });

  it('Has the CSS contents', async () => {
    const hasCss = this.output.indexOf('background-color: magenta;')
    expect(hasCss).not.toBe(-1);
  })
  
  it('Should have parsed the unparsedStyleElementName properly', () => {
    expect(this.output.indexOf(this.parsedStyleElementName)).not.toBe(-1);
  })
  it('Should have injected the parsedFileContents', () => {
    expect(this.template.indexOf(this.parsedFileContents)).not.toBe(-1);
  })

  it('Should have the unparsedStyleElementName as the register', () => {
    const registrationString = `${this.parsedStyleElementName}.register('${this.unparsedStyleElementName}')`;
    expect(this.template.indexOf(registrationString)).not.toBe(-1);
  })
})