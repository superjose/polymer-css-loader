const camelCase = require('camelcase');

/**
 * Generates the code or the template that is required for the styles 
 * to happen, ex:
 * 
 * const styleElement = document.createElement('dom-module');

styleElement.innerHTML = `
    <template>
        <style>
            div {
                height:500px;
                width:100px;
                background-color: red;
            }
        </style>
    </template>
`;
 */

/**
 * Deletes any whitespace or hyphen and creates a camelCase
 * approach
 */
function parseStyleElementName(unparsedStyleElementName) {
    return camelCase(unparsedStyleElementName);
}

function generateDomModule(styleElementName) {
    return `const ${styleElementName} =  document.createElement('dom-module')`;
}


function wrapWithTags(styleElementName, parsedFileContents) {
    return `${styleElementName}.innerHTML = 
        <template>
            <style>
                ${ parsedFileContents}
            </style>
        </template>
    `;
}

function registerElement(styleElementName, unparsedStyleElementName) {
    return `
        ${styleElementName}.register('${unparsedStyleElementName}');
     `
}

module.exports =  function(unparsedStyleElementName, parsedFileContents) {
    const styleElementName = parseStyleElementName(unparsedStyleElementName);
    return `
        ${generateDomModule(styleElementName)}
        ${wrapWithTags(styleElementName, parsedFileContents)}
        ${registerElement(styleElementName, unparsedStyleElementName)}
    `
}
