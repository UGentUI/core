import SlIcon from '@shoelace-style/shoelace/dist/components/icon/icon.component.js';
import { customElement } from 'lit/decorators.js';
import { registerIconLibrary } from '@shoelace-style/shoelace/dist/utilities/icon-library.js';
import { getBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';

/**
 * We've replaced the default icon set with the FontAwesome Pro Sharp Regular icon set.
 *
 * The registerIconLibrary call below configures the default icon library to:
 * 1. Use FontAwesome SVG files instead of Shoelace's icons
 * 2. Apply a mutator function that sets fill="currentColor" on each SVG
 *
 * This ensures icons inherit their color from parent elements (like buttons)
 * just like the original Shoelace icons did.
 */

registerIconLibrary('default', {
  resolver: (name) => `${getBasePath()}/assets/icons/${name}.svg`,
  mutator: (svg) => {
    svg.setAttribute('fill', 'currentColor');
  }
});

@customElement('ug-icon')
export class UgIcon extends SlIcon {}

declare global {
  interface HTMLElementTagNameMap {
    'ug-icon': UgIcon;
  }
}
