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
This is still an alpha release. While this may have worked well in <i>my</i> machine, the API may still change in the future.
</blockquote>

# polymer-css-loader
A loader for webpack that lets you "just import" the CSS into your JavaScript and it automatically creates the Styling JavaScript for you. This is intended for Polymer 3.

# Install:
` npm install save-dev polymer-css-loader extract-loader`
Or
` yarn add polymer-css-loader extract-loader`


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

<h2 align="center">Options</h2>

|Name|Type|Default|Description|
|:--:|:--:|:-----:|:----------|
|**[`minify`](#minify)**|`{Boolean}`|`false`|Will minify both the CSS and JavaScript output.

<h2 align="center">Parameters</h2>
Use URL style parameters at the end of the url of the import. E.g: 
```javascript
import './style-2.css?name=maria';
import './style-1.css?skip';
```

|Name|Type|Default|Description|
|:--:|:--:|:-----:|:----------|
|**[`name`](#minify)**|`{string}`|`false`|Specifies a different name to be used in the include. For example if you do: `import './style-2.css?name=maria';`, you'd use maria like: `<style include="maria">`
|**[`skip`](#minify)**|`{boolean}`|`N/A`|Just setting this value will skip the css together. This may be useful if you're using React and Polymer or you'd like to include the CSS without 

# Need an example? 
Navigate to test-app, and then execute: `npm start` and it will launch an express server @ localhost:3000, and then execute webpack. (Remember to have installed webpack-cli)


# Why this loader
Writing a template inside JavaScript is not good for styling CSS or SASS (Some Text Editors and IDEs lose autocomplete and static checking). 

With this, you just include your .css in your Polymer component and the loader takes care for it. 




# Ideas? Feedback?
Open a Github issue now! 😊