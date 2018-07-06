import * as generateTemplate  from '../src/templateGenerator';

/**
 * Tests the template generator
 */

 describe('Template Generator', () => {

    beforeAll(() => {
        this.unparsedStyleElementName = 'polymer3-app';
        this.parsedStyleElementName= 'polymer3App'
        this.parsedFileContents = `
            div {
                /* Testing out CSS */
                background-color: magenta;
                /* Because we assume that our SCSS has been already parsed */
            }
        `;
        this.template = generateTemplate(this.unparsedStyleElementName, this.parsedFileContents);
    });

    it('Should generate the template', () => {
        expect(this.template).not.toBeUndefined();
        expect(this.template).not.toBeNull();
    });

    it('Should have parsed the unparsedStyleElementName properly', () => {
        expect(this.template.indexOf(this.parsedStyleElementName)).not.toBe(-1);
    }) 
    it('Should have injected the parsedFileContents', () => {
        expect(this.template.indexOf(this.parsedFileContents)).not.toBe(-1);
    }) 

    it('Should have the unparsedStyleElementName as the register', () => {
        const registrationString = `${this.parsedStyleElementName}.register('${this.unparsedStyleElementName}')`;
        expect(this.template.indexOf(registrationString)).not.toBe(-1);
    })

 })

