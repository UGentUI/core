import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
// @ts-expect-error twlit genereert dit bestand, zonder declaration weliswaar.
import { TWStyles } from '../../../styles/tw.js';
import { UgMenu } from '../../../components/menu';
import { UgBadge } from '../../../components/badge';
import { classMap } from 'lit/directives/class-map.js';

export interface ICompactable {
  compact: boolean;
}

export function isCompactable(obj: unknown): obj is ICompactable {
  return obj instanceof HTMLElement && 'compact' in obj && typeof obj.compact === 'boolean';
}

const componentStyle = css`
  /* when compact is true, the badge is moved to the right upper corner of the prefix*/

  :host([compact]) ::slotted(ug-badge[slot='suffix']) {
    margin-left: -1rem;
    margin-top: -1rem;
  }
`;

@customElement('ug-navigation-item')
export class UgNavigationItem extends LitElement implements ICompactable {
  static styles = [TWStyles, componentStyle];

  static dependencies = {
    'ug-icon': UgMenu,
    'ug-badge': UgBadge
  };

  /**
   * when true, this navigation-item is rendered with text-ugent-blue-600, otherwize
   */
  @property({ type: Boolean, attribute: 'active', reflect: true })
  active!: boolean;

  @property({ type: Boolean, attribute: 'compact', reflect: true })
  compact = false;

  @property({ type: Boolean, attribute: 'priority' })
  priority = 1;

  render() {
    if (this.compact) {
      return html`
        <span
          class="compact p-2 text-nowrap text-neutral-800 hover:bg-neutral-50 rounded-sm flex items-center font-semibold text-sm group ${classMap(
            { 'text-ugent-blue-600': this.active, 'bg-neutral-100': this.active }
          )}"
        >
          <slot
            name="prefix"
            class="block mr-1 text-xl  text-neutral-600  ${classMap({
              'text-ugent-blue-600': this.active
            })}  group-hover:text-neutral-800"
          >
          </slot>

          <slot class="" style="border:solid green 1px" name="suffix"></slot>
        </span>
      `;
    } else {
      return html`
        <span
          class="p-2 text-nowrap text-neutral-800 hover:bg-neutral-50 rounded-sm flex items-center font-semibold text-sm group ${classMap(
            { 'text-ugent-blue-600': this.active, 'bg-neutral-100': this.active }
          )}"
        >
          <slot
            name="prefix"
            class="block mr-1 text-xl  text-neutral-600  ${classMap({
              'text-ugent-blue-600': this.active
            })}  group-hover:text-neutral-800"
          >
          </slot>

          <slot></slot>

          <slot class="block ml-auto" name="suffix"></slot>
        </span>
      `;
    }
  }

  private hasNamedSlot(name: string) {
    return this.querySelector(`:scope > [slot="${name}"]`) !== null;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ug-nav-item': UgNavigationItem;
  }
}
