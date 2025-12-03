import SlButton from '@shoelace-style/shoelace/dist/components/button/button.component.js';
import { customElement } from 'lit/decorators.js';

@customElement('ug-button')
export class UgButton extends SlButton {
  private slotObserver?: MutationObserver;

  connectedCallback() {
    super.connectedCallback();

    //gerelateerd aan deze bug: https://github.com/shoelace-style/shoelace/issues/476
    // wanneer de 'body' of main slot van de button wordt gewijzigd, wordt de button niet geupdate. hierdoor ontbreekt  de class button--has-label waardoor de padding niet juist wordt toegepast.

    // Workaround: gebruik een mutation observer om de button te update als er een wijziging in de slot is. (straf dat dit niet standaard in Shoelace zit, (of LIT)
    this.slotObserver = new MutationObserver(() => {
      console.info("Slot changed in ug-button; requesting update.")
      this.requestUpdate();
    });

    this.slotObserver.observe(this, {
      childList: true,
      characterData: true,
      subtree: true,
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.slotObserver?.disconnect();
  }


}

declare global {
  interface HTMLElementTagNameMap {
    'ug-button': UgButton;
  }
}
