import {html, LitElement, CSSResultGroup, TemplateResult} from 'lit';
import {customElement, property, query, state} from 'lit/decorators.js';


import styles from './autocomplete.styles';
import {styleMap} from 'lit/directives/style-map.js';
import {UgMenu} from "../menu";
import {UgDropdown} from "../dropdown";
import {UgInput} from "../input";
import {UgMenuItem} from "../menu-item";
import {UgSkeleton} from "../skeleton";
import {UgTextarea} from "../textarea";

@customElement('ug-autocomplete')
export default class UgAutocomplete extends LitElement {
    static styles: CSSResultGroup = styles;

    static dependencies = {
        'ug-skeleton': UgSkeleton,
        'ug-input': UgInput,
        'ug-menu': UgMenu,
        'ug-menu-item': UgMenuItem,
        'ug-dropdown': UgDropdown,
        'ug-textarea': UgTextarea
    };

    //The menu where we render options, loading placeholder and noResults placeholder
    @query('ug-menu') menu!: UgMenu;

    //The dropdown, used for managing show/hide popopver,
    @query('ug-dropdown') dropdown!: UgDropdown;
    @query('slot:not([name])') defaultSlot!: HTMLSlotElement;

    @query('.control input') input!: HTMLInputElement;

    @query('.control .trigger') trigger!: HTMLElement;

    @state() private value: string = '';
    @state() private hasFocus: boolean = false;


    /**
     * Tells whether this component should behave as if the data is still loading
     */
    @property({type: Boolean, reflect: true}) loading: boolean = false;

    /**
     * Tells whether this component should behave as if the data is still loading
     */
    @property({reflect: true, type: String}) size: 'small' | 'medium' | 'large' = 'medium';

    /**
     * When this boolean becomes true, the menu will be shown.
     * Note that other component interactions may cause the menu to be hidden, while this property will not be affected.
     * So, if you just want to show the after an interaction, you might want to use the method call {@link show()}
     */
    @property({type: Boolean}) popupVisible: boolean = false;

    /**
     * the number of characters that should be entered before the menu will be shown and the searchEntered event will be
     * fired
     */
    @property({type: Number, reflect: true}) threshold: number = 1;


    @property({type: String, reflect: true}) label: string | null = null;

    loadingPlaceholder: TemplateResult = html`
        <div class="default-loading-placeholder">
            <ug-skeleton effect="pulse"></ug-skeleton>
            <ug-skeleton effect="pulse"></ug-skeleton>
            <ug-skeleton effect="pulse"></ug-skeleton>
        </div>
    `

    noResultsPlaceholder: TemplateResult = html`
        <div class="default-empty-results-placeholder">
            No items found
        </div>
    `


    updated(changedProperties: Map<string | number | symbol, unknown>) {
        super.updated(changedProperties);
        if (this.popupVisible)
            this.show();
    }

    handleUgInput(event: CustomEvent) {
        const {value} = event.target as UgInput;
        this.hasFocus = true;
        this.value = value;

        event = new CustomEvent('ug-search', {bubbles: true,detail : value})
        console.info("Dispatching event",event)
        this.dispatchEvent(event);
    }

    handleInputBlur() {
        if (!this.dropdown.open) {
            this.hasFocus = false
            console.info("Blur input. window was not open, so focus becomes false", this.dropdown.open)
        }
    }

    handleUgSelect(event: CustomEvent): void {
        let selectedItem = event.detail.item
        console.info("menuitem selected", selectedItem)
        this.dispatchEvent(new CustomEvent("ug-selected",selectedItem));
        this.hasFocus = false
    }

    handleKeydown(event: KeyboardEvent) {



        if (!this.shouldDisplayAutoComplete || event.ctrlKey || event.metaKey) {
            return;
        }

        1
        const options = this.visibleOptions;

        if (options.length === 0) {
            return;
        }

        const firstItem = options[0];
        const lastItem = options[options.length - 1];

        switch (event.key) {
            case 'Tab':
            case 'Escape':
                this.hasFocus = false;
                break;

            case 'ArrowDown':
                event.preventDefault();
                this.menu.setCurrentItem(firstItem);
                firstItem.focus();
                break;

            case 'ArrowUp':
                event.preventDefault();
                this.menu.setCurrentItem(lastItem);
                lastItem.focus();
                break;
        }

        if (!this.hasFocus) {
            setTimeout(() => {

                // this.trigger.focus()
            }, 500)
        }
    }


    handleUgFocus(_event: CustomEvent) {
        console.info("handleUgFocus", event)
        if (this.value.length >= this.threshold) {
            this.hasFocus = true;
            this.show();
            console.info("searching ", _event)
            this.dispatchEvent(new CustomEvent('ug-autocomplete-search'))
        }
    }

    handleUgAfterHide(_event: CustomEvent) {
        // this.hasFocus = false;
    }

    show() {
        this.dropdown?.show();
        console.trace("autocomplete: dropdown was shown")
        this.dispatchEvent(new CustomEvent("ug-autocomplete-show"))
    }

    hide() {
        this.dropdown?.hide();
        console.trace("autocomplete: dropdown was hidden()")
        this.dispatchEvent(new CustomEvent("ug-autocomplete-hidden"))
    }

    reset() {
        this.value = '';
    }

    get options(): UgMenuItem[] {
        return (this.defaultSlot?.assignedElements() || []) as UgMenuItem[];
    }

    get visibleOptions() {
        return this.options.filter(option => option.style.display !== 'none');
    }

    get hasResults() {
        return this.visibleOptions.length > 0;
    }

    get shouldDisplayLoadingText() {
        return this.loading && (this.loadingPlaceholder || this.hasNamedSlot('loading-placeholder'));
    }

    get shouldDisplayEmptyText() {
        // return false
        return !this.hasResults && !this.loading && (this.noResultsPlaceholder || this.hasNamedSlot('no-results-placeholder'));
    }

    get shouldDisplayTrigger() {
        // return false
        return !this.hasFocus;
    }

    get shouldDisplayInput() {
        // return false
        return this.hasFocus;
    }

    get shouldDisplayAutoComplete() {
        return (
            this.hasFocus &&
            ((this.value.length >= this.threshold && this.hasResults) || this.shouldDisplayLoadingText || this.shouldDisplayEmptyText)
        );
    }

    private hasNamedSlot(name: string) {
        return this.querySelector(`:scope > [slot="${name}"]`) !== null;

    }

    private handleTriggerFocus() {
        this.handleTriggerClick()
    }

    private handleTriggerClick(): void {
        this.hasFocus = true
        setTimeout(() => {
            this.input.focus()
        })

    }

    private handleTriggerKeydown(event: KeyboardEvent): void {
        if (event.key === 'Enter' || event.key === ' ') {
            this.handleTriggerClick();
            event.preventDefault(); // To prevent scrolling when Space is pressed
        }
    }

    render() {
        const {shouldDisplayLoadingText} = this

        return html`
            <label>${this.label}</label>
            <div part="base" class="base">
                <div class="control control--${this.size}">
                    <input style="${styleMap({display: this.shouldDisplayInput ? 'block' : 'none'})}"
                           @ug-focus=${this.handleUgFocus}
                           @input=${this.handleUgInput}
                           @blur=${this.handleInputBlur}
                           @keydown=${this.handleKeydown}
                    >

                    <div tabindex="0" class="trigger"
                         style="${styleMap({display: this.shouldDisplayTrigger ? 'flex' : 'none'})}"
                         @click="${this.handleTriggerClick}"
                         @focus="${this.handleTriggerFocus}"
                    >
                        <slot name="trigger"></slot>
                    </div>

                    <ug-dropdown ?open=${this.shouldDisplayAutoComplete} @ug-after-hide=${this.handleUgAfterHide}>
                        <ug-menu @ug-select="${this.handleUgSelect}">
                            <slot
                                    style="${styleMap({display: shouldDisplayLoadingText ? 'none' : 'block'})}"
                            >
                            </slot>

                            <div
                                    part="loading-placeholder"
                                    id="loading-placeholder"
                                    class="loading-placeholder"
                                    aria-hidden=${shouldDisplayLoadingText ? 'false' : 'true'}
                                    style="${styleMap({display: shouldDisplayLoadingText ? 'block' : 'none'})}"
                            >
                                <slot name="loading-placeholder"> ${this.loadingPlaceholder}</slot>
                            </div>

                            <div
                                    part="empty-text"
                                    id="empty-text"
                                    class="empty-text"
                                    aria-hidden=${this.shouldDisplayEmptyText ? 'false' : 'true'}
                                    style="${styleMap({display: this.shouldDisplayEmptyText ? 'block' : 'none'})}"
                            >
                                <slot name="empty-text">${this.noResultsPlaceholder}</slot>
                            </div>

                            <div aria-hidden="true" style=${styleMap({width: `${this.clientWidth}px`})}></div>
                        </ug-menu>
                    </ug-dropdown>
                </div>
        `;
    }
}

export declare class UgAutocomplete2 extends UgAutocomplete {}


declare global {
    interface HTMLElementTagNameMap {
        'ug-autocomplete': UgAutocomplete2;
    }
}


