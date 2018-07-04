import {
  html,
  PolymerElement,
} from '@polymer/polymer/polymer-element';

import './polymer3-app-styles.scss';

/**
 * @customElement
 * @polymer
 */
class Polymer3App extends PolymerElement {
  static get template() {
    return html`
      <style include="style-element style-element-2 polymer3-app-styles">
        :host {
          display: block;
        }
      </style>
      <h2>Hello {{prop1}}!</h2>
      <input type="text" value="{{prop1}}" />
      <div>
        Poop
      </div>
      <div id="he">
        Poop
      </div>
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

window.customElements.define('polymer3-app', Polymer3App);
