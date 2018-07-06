// Dummy file to continue testing.

import {
  html,
  PolymerElement,
} from '@polymer/polymer/polymer-element';

/**
 * @customElement
 * @polymer
 */
class App1 extends PolymerElement {
  static get template() {
    // Maria in this case doesn't work.
    return html`
      <style include="maria">
      </style>
      <p>This is a dummy JavaScript file. </p>
    `;
  }

  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'app-1',
      },
    };
  }
}

window.customElements.define('app-1', App1);
