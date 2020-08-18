import {LitElement, customElement, html, property, css} from 'lit-element';

@customElement('kj-element')
export class KjElement extends LitElement {
  @property()
  message = 'MESSAGE';

  static styles = css`
    div {
      color: red;
    }
    :host {
      padding: 50px;
    }
    ::slotted(p) {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    div ::slotted(*) {
      color: green;
    }
  `;

  render() {
    return html`<slot></slot>
      <div>Hello KJ ${this.message} <slot name="two"></slot></div>`;
  }
}
