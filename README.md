<div align="center">
  <img width="180" height="180" vspace="20"
    src="https://www.polymer-project.org/images/logos/p-logo.png">
  <img width="180" height="180" vspace="20"
    src="https://cdn.worldvectorlogo.com/logos/css-3.svg">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200"
      src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

<blockquote>
This is still an alpha release. While this may have worked well in <i>my</i> machine, there may still be unforeseen bugs and the  API may change in the future.
</blockquote>

# polymer-css-loader
A loader for webpack that lets you "just import" the CSS into your JavaScript and automatically create the Styling JavaScript for you. This is intended for Polymer 3.

# Install:
```
npm install save-dev polymer-css-loader extract-loader
```
Or
``` 
yarn add polymer-css-loader extract-loader -D
```


# Requirements
* Polymer 3+ only!
* Webpack 4 (Tested, could work with earlier versions)

# How this works:
1. Include it in your Webpack Config. Include it "last" or after all the loaders. You will need to use extract-loader if you're using sass-loader, less-loader and/or css-loader.

```javascript
module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
     {
        test: /\.css|\.s(c|a)ss$/,
        use: [{
          loader: 'polymer-css-loader',
          options: {
            minify: true, // defaults to false
          },
        }, 'extract-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
```
2. Include your .css or .scss or .less file in your JavaScript:
```javascript
import { html, PolymerElement } from '@polymer/polymer/polymer-element';

import './style-1.scss';
// The ?name will specify the name to be used in the include.
import './style-2.css?name=maria';
class PolymerTestComponent extends PolymerElement {
  static get template() {
    return html`
      <style include="style-1 maria">    
      </style>
      <p>This is the test component</p>
      <p>This is the propertie's value: {{prop1}} </p>
      <div>This font size should be bigger</div>
    `;
  }

  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'polymer3-app',
      },
    };
  }
}

window.customElements.define('polymer-test-component', PolymerTestComponent);
```
3. Use the base name of the file as the name for `<style include="">`.
Example, if you imported a filename called my-polymer-3.scss, you'd do it like this:

```javascript
static get template() {
  <style include="my-polymer-3">
  </style>
}
```

# Options

|Name|Type|Default|Description|
|:--:|:--:|:-----:|:----------|
|**[`minify`](#minify)**|`{Boolean}`|`false`|When true, it Will minify both the CSS and JavaScript output.
|**[`defaultSkip`](#minify)**|`{Boolean}`|`false`|When true, Will minify both the CSS and JavaScript output.

# Files Parameters
These are appended at the end of the CSS imports in your JavaScript file (Where the component is declared);
E.g: 

```javascript
import './style-2.css?name=maria';
import './style-1.css?skip';
```

|Name|Type|Default|Description|
|:--:|:--:|:-----:|:----------|
|**[`name`](#minify)**|`{string}`|`false`|Specifies a different name to be used in the include. For example if you do: `import './style-2.css?name=maria';`, you'd use maria like: `<style include="maria">`
|**[`skip`](#minify)**|`{boolean}`|`N/A`|Just setting this parameter will skip the css altogether. This may be useful if you're using React and Polymer or you'd like to include the CSS without. E.g: `import './style-2.css?skip'`
|**[`include`](#minify)**|`{boolean}`|`N/A`|Just setting this parameter will include the css even when defaultSkip is on. This may be useful if you just want to "polymerize" or "web-componentize" a .css/.scss/.less file. E.g:  `import './style-2.css?include'`

# Need an example? 
Navigate to [test-app](./test-app), and execute: `npm start`. It will launch an express server @ localhost:3000. Then, run `webpack`. (Remember to have installed webpack-cli)


# Why this loader
Writing CSS inside a JavaScript template is cumbersome and we lose autocomplete, and static analysis from our Text Editors and IDEs. Why not have an automatic way that creates these JavaScript templates for us? 

With this, you just include your .css in your Polymer component, add the name of the file to the style's include and you're set! The loader takes care for creating the file for you!

# Ideas? Feedback?
Open a Github issue now! 😊