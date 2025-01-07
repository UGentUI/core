import SlDivider from '@shoelace-style/shoelace/dist/components/divider/divider.component.js';
import { customElement } from 'lit/decorators.js';
import { css } from 'lit';

@customElement('ug-divider')
export class UgDivider extends SlDivider {
  static styles = [
    ...(Array.isArray(SlDivider.styles)
      ? SlDivider.styles
      : [SlDivider.styles]),
    css`
      :host(:not([vertical])) {
        border-top: solid var(--width) var(--color) !important;
      }
      :host([vertical]) {
        border-left: solid var(--width) var(--color) !important;
      }
    `
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'ug-divider': UgDivider;
  }
}
