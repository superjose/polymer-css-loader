import {
  html,
  PolymerElement,
} from '@polymer/polymer/polymer-element';

// import './polymer3-app-styles.scss?name=polymer3-app';
// import '../app-1/app-1.scss';
import './polymer3-app-styles';

/**
 * @customElement
 * @polymer
 */
class Polymer3App extends PolymerElement {
  static get template() {
    return html`
      <style include="app-1 polymer3-app-styles style-element">
        :host {
          display: block;
        }
      </style>
      <h2>Hello {{prop1}}!</h2>
      <input type="text" value="{{prop1}}" />
      <div>
      This is Polymer3-app.js   
      😉😉😉😉😉
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
