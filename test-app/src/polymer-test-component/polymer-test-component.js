import { html, PolymerElement } from '@polymer/polymer/polymer-element';

import './style-1.scss';
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
