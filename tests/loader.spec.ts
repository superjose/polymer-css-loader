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
    // The minified version must be exact as the non-minified version.
    const stats = await compiler('test.css');
    const statsMin = await compiler('test.css', { minify: true });

    this.output = stats.toJson().modules[0].source;
    this.outputMin = statsMin.toJson().modules[0].source;

    this.unparsedStyleElementName = 'test';
    this.parsedStyleElementName = 'test'
    this.parsedFileContents = `background-color: magenta;`

  })

  it('Creates the file', async () => {
    expect(this.output).not.toBeNull();
    expect(this.outputMin).not.toBeNull();
  });

  it('Has the CSS contents', async () => {
    const hasCss = this.output.indexOf('background-color: magenta;')
    const hasCssMin = this.outputMin.indexOf('background-color: magenta;')
    expect(hasCss).not.toBe(-1);
    expect(hasCssMin).not.toBe(-1);
  })
  
  it('Should have parsed the unparsedStyleElementName properly', () => {
    expect(this.output.indexOf(this.parsedStyleElementName)).not.toBe(-1);
    expect(this.outputMin.indexOf(this.parsedStyleElementName)).not.toBe(-1);
  })
  it('Should have injected the parsedFileContents', () => {
   expect(this.output.indexOf(this.parsedFileContents)).not.toBe(-1);
   expect(this.outputMin.indexOf(this.parsedFileContents)).not.toBe(-1);
  })

  it('Should have the unparsedStyleElementName as the register', () => {
    const registrationString = `${this.parsedStyleElementName}.register('${this.unparsedStyleElementName}')`;
    expect(this.output.indexOf(registrationString)).not.toBe(-1);
    expect(this.outputMin.indexOf(registrationString)).not.toBe(-1);
  })
})