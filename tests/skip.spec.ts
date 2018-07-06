import compiler from "./compiler";
import { skip, include } from '../src/skipParser';

/**
 * Tests for
 * - Skipping a certain file. 
 * - Skipping all the files.
 * - Including a certain file.
*/

describe('Skip Parser', async () => {
  
  it('Should skip style.css', async() => {
    const stats = await compiler('test.css?skip');
    this.output = stats.toJson().modules[0].source;

    expect(this.output).not.toBeNull();

    const hasTemplate = this.output.indexOf('<template>');
    expect(hasTemplate).toBe(-1);

  });
  it('Should skip style.css with defaultSkip on', async() => {
    const stats = await compiler('test.css', { defaultSkip: true});
    this.output = stats.toJson().modules[0].source;

    expect(this.output).not.toBeNull();

    const hasTemplate = this.output.indexOf('<template>');
    expect(hasTemplate).toBe(-1);

  });
  it('Should include style.css even with defaultSkip on', async() => {
    const stats = await compiler('test.css?include', { defaultSkip: true});
    this.output = stats.toJson().modules[0].source;
    this.unparsedStyleElementName = 'test';
    this.parsedStyleElementName = 'test'
    this.parsedFileContents = `background-color: magenta;`
    
    const hasTemplate = this.output.indexOf('<template>');
    const registrationString = `${this.parsedStyleElementName}.register('${this.unparsedStyleElementName}')`;

    expect(this.output).not.toBeNull();
    expect(this.output.indexOf(registrationString)).not.toBe(-1);

    expect(hasTemplate).not.toBe(-1);

  });

  it('Should match ?skip', () => {
    const query = '?skip&somethingelsetoskippit';
    const query2 = '?name&skip'

    const parseResult = skip(query);
    const parseResult2 = skip(query2);

    expect(parseResult).toBe(true);
    expect(parseResult2).toBe(true);
  });

  
  it('Should not match ?skip', () => {
    const query = '?skipping&skipper';
    const parseResult = skip(query);
    expect(parseResult).toBe(false);
  });

   it('Should match ?include', () => {
    const query = '?include&somethingelsetoskippit';
    const query2 = '?name&include'
    
    const parseResult = include(query);
    const parseResult2 = include(query2);

    expect(parseResult).toBe(true);
    expect(parseResult2).toBe(true);
  });


});