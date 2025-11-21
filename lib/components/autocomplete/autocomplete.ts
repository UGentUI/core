import { html, LitElement, CSSResultGroup, TemplateResult } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';

import styles from './autocomplete.styles';
import { styleMap } from 'lit/directives/style-map.js';
import { UgMenu } from '../menu';
import { UgDropdown } from '../dropdown';
import { UgInput } from '../input';
import { UgMenuItem } from '../menu-item';
import { UgSkeleton } from '../skeleton';
import { UgTextarea } from '../textarea';
import { UgIconButton } from '../icon-button';

@customElement('ug-autocomplete')
export class UgAutocomplete extends LitElement {
  static styles: CSSResultGroup = styles;

  static dependencies = {
    'ug-skeleton': UgSkeleton,
    'ug-input': UgInput,
    'ug-menu': UgMenu,
    'ug-menu-item': UgMenuItem,
    'ug-dropdown': UgDropdown,
    'ug-textarea': UgTextarea,
    'ug-icon-button': UgIconButton
  };

  //The menu where we render options, loading placeholder and noResults placeholder
  @query('ug-menu') menu!: UgMenu;

  //The dropdown, used for managing show/hide popopver,
  @query('ug-dropdown') dropdown!: UgDropdown;
  @query('slot:not([name])') defaultSlot!: HTMLSlotElement;

  @query('.control input') input!: HTMLInputElement;

  @query('.control .trigger') trigger!: HTMLElement;

  // @state() private value: string = '';

  @state() private hasFocus: boolean = false;

  @state() private inputVisible: boolean = false;

  /**
   * Tells whether this component should behave as if the data is still loading
   */
  @property({ type: Boolean, reflect: true }) loading: boolean = false;

  /**
   * Tells whether this component should show a clear icon or not
   */
  @property({ type: Boolean, reflect: true }) clearable: boolean = false;

  /**
   * Tells whether this component is disabled (which means clear and typing is not allowed)
   */
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  /**
   * Tells whether this component should behave as if the data is still loading
   */
  @property({ reflect: true, type: String }) size:
    | 'small'
    | 'medium'
    | 'large' = 'medium';

  /**
   * When this boolean becomes true, the menu will be shown.
   * Note that other component interactions may cause the menu to be hidden, while this property will not be affected.
   * So, if you just want to show the after an interaction, you might want to use the method call {@link show()}
   */
  @state() dropdownVisible: boolean = false;

  /**
   * the number of characters that should be entered before the menu will be shown and the searchEntered event will be
   * fired
   */
  @property({ type: Number, reflect: true }) threshold: number = 0;

  @property({ type: String, reflect: true }) label: string | null = null;

  // @property({type: String, reflect: true}) searchTerm: string | null = null;
  @state() searchTerm: string | null = null;

  @state() private displayValue: string = '';

  //if true, a focus traverse from input to menu is allowed.
  //if false, such a focus traverse will be blocked
  allowFocusTraverse = false;

  loadingPlaceholder: TemplateResult = html`
    <div class="default-loading">
      <ug-skeleton effect="pulse"></ug-skeleton>
      <ug-skeleton effect="pulse"></ug-skeleton>
      <ug-skeleton effect="pulse"></ug-skeleton>
    </div>
  `;

  noResultsPlaceholder: TemplateResult = html`
    <div class="default-no-results">No items found</div>
  `;

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated(changedProperties);
    if (this.dropdownVisible) this.showDropdown();

    if (this.searchTerm || this.threshold == 0) {
      this.hasFocus = true;
      this.inputVisible = true;
    }
    // if (this.size == null || this.size == '') {
    //     this.size = 'medium'
    // }
  }

  handleSearchInput = (event: CustomEvent) => {
    const { value } = event.target as UgInput;
    this.searchTerm = value;

    this.filterOptions();

    if (this.meetsInputThreshold()) {
      void this.showDropdown();
      this.dispatchEvent(
        new CustomEvent('ug-search', { bubbles: true, detail: value })
      );
    }
  };

  handleInputBlur = () => {
    if (!this.inputVisible) {
      //Blur input caused by hiding the input. transferring focus to trigger again
      this.trigger.focus();
    } else {
      if (this.dropdownVisible) {
        //Input Blur because the focus moved to the dropdown menu --> nothing to do; let user navigate the dropdown
      } else {
        //Input Blur while dropdown was not visible --> canceling edit !!
        this.inputVisible = false;
        this.dispatchEvent(new CustomEvent('ug-edit-cancelled'));
      }
    }
  };

  handleUgSelect = (event: CustomEvent<{ item: UgMenuItem }>) => {
    this.dispatchEvent(
      new CustomEvent<unknown>('ug-selected', { detail: event.detail.item })
    );
    //this.inputVisible = false;
    //this.searchTerm = '';
    this.searchTerm = event.detail.item.value;
    void this.hideDropdown();
    setTimeout(() => {
      this.trigger.focus();
    }, 0);
  };

  handleInputKeydown = (event: KeyboardEvent) => {
    /*if (event.key == 'Escape') {
      this.inputVisible = false;
      //this.searchTerm = '';
      this.trigger.focus();
      void this.hideDropdown();
      this.dispatchEvent(new CustomEvent('ug-edit-cancelled'));
      return;
    } else if (event.key == 'Tab') {
      this.inputVisible = false;
      this.searchTerm = '';
      this.dispatchEvent(new CustomEvent('ug-edit-cancelled'));
      return;
    }*/

    const options = this.visibleOptions;

    if (options.length === 0) {
      return;
    }

    const firstItem = options[0];
    const lastItem = options[options.length - 1];

    switch (event.key) {
      case 'Tab':

      case 'ArrowDown':
        event.preventDefault();
        this.menu.setCurrentItem(firstItem);
        this.allowFocusTraverse = true;
        firstItem.focus();
        break;

      case 'ArrowUp':
        event.preventDefault();
        this.menu.setCurrentItem(lastItem);
        this.allowFocusTraverse = true;
        lastItem.focus();
        break;
    }
  };

  handleClearClick = () => {
    if (this.disabled) return;

    this.dispatchEvent(new CustomEvent('ug-clear'));
  };

  meetsInputThreshold() {
    return this.threshold == 0 || this.input.value?.length >= this.threshold;
  }

  handleUgFocus = () => {
    // console.info("handleUgFocus", event)
    if (this.meetsInputThreshold()) {
      this.hasFocus = true;
      // console.info("searching ", _event)
      this.dispatchEvent(new CustomEvent('ug-autocomplete-search'));
    }

    // Als threshold 0 en input zichtbaar (of we willen op focus altijd openen), open dropdown
    // We checken inputVisible zodat we niet per ongeluk opent bij focus op de trigger container
    if (this.threshold === 0 && this.inputVisible) {
      // safety: open pas als dropdown bestaat
      if (this.dropdown) {
        void this.showDropdown();
      } else {
        setTimeout(() => void this.showDropdown(), 0);
      }
    }
  };

  handleUgAfterHide = () => {
    // console.info("dropdown was hidden. showdropdown", this.dropdownVisible)
    if (this.dropdownVisible) {
      //dropdown was hidden without selecting (esc pressed?)
      //cancel input and transfer focus back to trigger
      this.dropdownVisible = false;
      //this.searchTerm = '';
      //this.inputVisible = false;
      this.dispatchEvent(new CustomEvent('ug-edit-cancelled'));
      if (this.hasFocus) {
        setTimeout(() => {
          this.trigger.focus();
        });
      }
      return;
    }
    this.allowFocusTraverse = false;
  };

  showDropdown() {
    if (this.dropdownVisible) return;

    this.dropdownVisible = true;
    void this.dropdown?.show();
    this.dispatchEvent(new CustomEvent('ug-dropdown-show'));
  }

  async hideDropdown() {
    if (this.dropdownVisible) {
      this.dropdownVisible = false;
      await this.dropdown?.hide();
      this.dispatchEvent(new CustomEvent('ug-dropdown-hidden'));
    }
  }

  reset() {
    this.input.value = '';
  }

  get options(): UgMenuItem[] {
    return (this.defaultSlot?.assignedElements() || []) as UgMenuItem[];
  }

  get visibleOptions() {
    return this.options.filter((option) => option.style.display !== 'none');
  }

  get hasResults() {
    return this.visibleOptions.length > 0;
  }

  get shouldDisplayPrefixSlot() {
    return this.hasNamedSlot('prefix');
  }

  get shouldDisplaySuffixSlot() {
    return this.hasNamedSlot('suffix');
  }

  get shouldDisplayLoadingText() {
    return (
      this.loading && (this.loadingPlaceholder || this.hasNamedSlot('loading'))
    );
  }

  get shouldDisplayEmptyText() {
    return (
      !this.hasResults &&
      !this.loading &&
      (this.noResultsPlaceholder || this.hasNamedSlot('no-results'))
    );
  }

  get shouldDisplayTrigger() {
    return !this.shouldDisplayInput;
  }

  get shouldDisplayInput() {
    return this.inputVisible;
  }

  private hasNamedSlot(name: string) {
    return this.querySelector(`:scope > [slot="${name}"]`) !== null;
  }

  private handleTriggerFocus = () => {
    if (this.disabled) return;
    this.hasFocus = true;
  };

  private handleTriggerClick = () => {
    if (this.disabled) return;
    this.hasFocus = true;
    this.inputVisible = true;
    setTimeout(() => {
      this.input.focus();
      this.dispatchEvent(new CustomEvent('ug-edit-started', { bubbles: true }));
    });
    if (this.threshold === 0) {
      this.showDropdown();
    }
  };

  private handleTriggerKeydown = (event: KeyboardEvent) => {
    //console.info('triggerKeydown')
    if (this.inputVisible) return;
    if (event.key === 'Enter' || event.key === ' ') {
      console.info('triggerKeydown ENTER');
      this.handleTriggerClick();
      event.preventDefault(); // To prevent scrolling when Space is pressed
    }
  };

  private handleTriggerBlur = () => {
    if (!this.inputVisible) {
      this.hasFocus = false;
    }
  };

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('focusin', this.preventMenuFocus);
  }

  disconnectedCallback() {
    this.removeEventListener('focusin', this.preventMenuFocus);
    super.disconnectedCallback();
  }

  private preventMenuFocus = (event: FocusEvent) => {
    // Otherwise, prevent focus on menu items
    if (
      event.target instanceof HTMLElement &&
      event.target.closest('ug-menu-item') &&
      !this.allowFocusTraverse
    ) {
      this.input.focus();
      event.preventDefault();
    }
  };

  get disabledClass() {
    return this.disabled ? 'input--disabled' : '';
  }

  private filterOptions() {
    const term = this.searchTerm?.toLowerCase() ?? '';

    this.options.forEach(option => {
      const text = (option.textContent || '').toLowerCase();
      const matches = text.includes(term);

      option.style.display = matches ? '' : 'none';
    });
  }

  render() {
    const { shouldDisplayLoadingText } = this;

    return html`
      <label>${this.label}</label>
      <div part="base" class="base">
        <div class="control control--${this.size} ${this.disabledClass}">
          <div
            class="fix-wrapper"
            tabindex=${this.disabled ? -1 : 0}
            @focus="${this.handleTriggerFocus}"
            @keydown=${this.handleTriggerKeydown}
            @blur=${this.handleTriggerBlur}
          >
            ${this.shouldDisplayPrefixSlot
              ? html` <div class="prefix">
                  <slot name="prefix"></slot>
                </div>`
              : ''}
            <input
              style="${styleMap({
                display: this.shouldDisplayInput ? 'block' : 'none'
              })}"
              role="textbox"
              @focus=${this.handleUgFocus}
              @ug-focus=${this.handleUgFocus}
              @input=${this.handleSearchInput}
              @blur=${this.handleInputBlur}
              @keydown=${this.handleInputKeydown}
              .value=${this.searchTerm}
            >
            </input>

            <ug-icon
              slot="suffix"
              name="chevron-down"
              @click=${this.handleTriggerClick}
              style="
                cursor: pointer;
                position: absolute;
                right: 24px;
                top: 50%;
                transform: translateY(-50%);
                pointer-events: auto;
              "
            ></ug-icon>

            <div
              class="trigger"
              style="${styleMap({
                display: this.shouldDisplayTrigger ? 'flex' : 'none'
              })}"
              @click="${this.handleTriggerClick}"
            >
              <slot name="trigger"></slot>
            </div>

            ${this.clearable && !this.disabled
              ? html` <ug-icon-button
                  class="clearbutton"
                  name="x-circle-fill"
                  @click="${this.handleClearClick}"
                ></ug-icon-button>`
              : ''}
            ${this.shouldDisplaySuffixSlot
              ? html` <div class="suffix">
                  <slot name="suffix"></slot>
                </div>`
              : ''}
          </div>

          <ug-dropdown @ug-hide=${this.handleUgAfterHide}>
            <ug-menu @ug-select="${this.handleUgSelect}">
              <slot
                style="${styleMap({
                  display: shouldDisplayLoadingText ? 'none' : 'block'
                })}"
              >
              </slot>

              <div
                part="loading-placeholder"
                id="loading-placeholder"
                class="loading-placeholder"
                aria-hidden=${shouldDisplayLoadingText ? 'false' : 'true'}
                style="${styleMap({
                  display: shouldDisplayLoadingText ? 'block' : 'none'
                })}"
              >
                <slot name="loading"> ${this.loadingPlaceholder}</slot>
              </div>

              <div
                part="no-results"
                id="no-results"
                class="no-results"
                aria-hidden=${this.shouldDisplayEmptyText ? 'false' : 'true'}
                style="${styleMap({
                  display: this.shouldDisplayEmptyText ? 'block' : 'none'
                })}"
              >
                <slot name="no-results">${this.noResultsPlaceholder}</slot>
              </div>

              <div
                aria-hidden="true"
                style=${styleMap({ width: `${this.clientWidth}px` })}
              ></div>
            </ug-menu>
          </ug-dropdown>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ug-autocomplete': UgAutocomplete;
  }
}
