import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('ug-app-shell')
export class AppShell extends LitElement {
  static styles = css`
    :host {
      display: block;
      height: 100vh;
      width: 100vw;
    }
  `;

  render() {
    return html`
      <div>
        <header>
          <slot name="header"></slot>
        </header>
        <main>
          <slot name="main"></slot>
        </main>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ug-app-shell': AppShell;
  }
}
