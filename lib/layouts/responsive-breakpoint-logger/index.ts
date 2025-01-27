import { css, html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { TWStyles } from '../../styles/tw';

const shellStyle = css``;

@customElement('ug-breakpoint-logger')
export class ResponsiveBreakpointLogger extends LitElement {
  static styles = [TWStyles, shellStyle];
  static dependencies = {};

  @query('#sm')
  sm!: HTMLElement;

  @query('#md')
  md!: HTMLElement;

  @query('#lg')
  lg!: HTMLElement;

  @query('#xl')
  xl!: HTMLElement;

  @query('#xxl')
  xxl!: HTMLElement;

  render() {
    return html`
      <div class="hidden">
        <div id="sm" class="block md:hidden">sm</div>
        <div id="md" class="hidden md:block lg:hidden">md</div>
        <div id="lg" class="hidden lg:block xl:hidden">lg</div>
        <div id="xl" class="hidden xl:block 2xl:hidden">xl</div>
        <div id="xxl" class="hidden 2xl:block">2xl</div>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this.log);
  }

  log = () => {
    let activeBreakpoints = new Set<string>();
    if (window.getComputedStyle(this.sm).display !== 'none') {
      activeBreakpoints.add('sm');
    }
    if (window.getComputedStyle(this.md).display !== 'none') {
      activeBreakpoints.add('md');
    }

    if (window.getComputedStyle(this.lg).display !== 'none') {
      activeBreakpoints.add('lg');
    }

    if (window.getComputedStyle(this.xl).display !== 'none') {
      activeBreakpoints.add('xl');
    }

    if (window.getComputedStyle(this.xxl).display !== 'none') {
      activeBreakpoints.add('2xl');
    }

    console.log('active breakpoints ', ...activeBreakpoints);
  };
}

declare global {
  interface HTMLElementTagNameMap {
    'ug-breakpoint-logger': ResponsiveBreakpointLogger;
  }
}
