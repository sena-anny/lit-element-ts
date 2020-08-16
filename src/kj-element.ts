import {LitElement, customElement, html, property, css} from 'lit-element';

@customElement('kj-element')
export class KjElement extends LitElement {
  @property()
  message = 'MESSAGE';

  static styles = css`
    div {
      color: red;
    }
  `;

  render() {
    return html`<div>Hello KJ ${this.message} <slot name="two"></slot></div>`;
  }
}
