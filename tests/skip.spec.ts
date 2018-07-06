import compiler from "./compiler";

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

});