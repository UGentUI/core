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
export class UgAutocomplete extends LitElement {
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

    // @state() private value: string = '';

    @state() private hasFocus: boolean = false;

    @state() private inputVisible: boolean = false;


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
    @property({type: Boolean}) dropdownVisible: boolean = false;

    /**
     * the number of characters that should be entered before the menu will be shown and the searchEntered event will be
     * fired
     */
    @property({type: Number, reflect: true}) threshold: number = 1;


    @property({type: String, reflect: true}) label: string | null = null;

    // @property({type: String, reflect: true}) searchTerm: string | null = null;
    @state() searchTerm: string | null = null;

    loadingPlaceholder: TemplateResult = html`
        <div class="default-loading">
            <ug-skeleton effect="pulse"></ug-skeleton>
            <ug-skeleton effect="pulse"></ug-skeleton>
            <ug-skeleton effect="pulse"></ug-skeleton>
        </div>
    `

    noResultsPlaceholder: TemplateResult = html`
        <div class="default-no-results">
            No items found
        </div>
    `


    updated(changedProperties: Map<string | number | symbol, unknown>) {
        super.updated(changedProperties);
        if (this.dropdownVisible)
            this.showDropdown();

        if (this.searchTerm) {
            this.hasFocus = true
            this.inputVisible = true
        }
    }

    handleSearchInput(event: CustomEvent) {
        const {value} = event.target as UgInput;
        // this.hasFocus = true;
        this.searchTerm = value

        if (this.shouldDisplayInput) {
            this.showDropdown()
        }


        event = new CustomEvent('ug-search', {bubbles: true,detail : value})
        // console.info("Dispatching event",event)
        this.dispatchEvent(event);
    }

    handleInputBlur() {
        if (!this.inputVisible) {
            console.info("Blur input caused by hiding the input. transferring focus to trigger again")
            this.trigger.focus()
        }
    }

    handleUgSelect(event: CustomEvent): void {
        let selectedItem = event.detail.item
        this.dispatchEvent(new CustomEvent("ug-selected", {detail:selectedItem}));
        this.inputVisible = false
        this.searchTerm = ''
        this.hideDropdown()
        setTimeout(() => {
            this.trigger.focus()

        },0)


    }

    handleInputKeydown(event: KeyboardEvent) {
        console.info('Keydown on input' )
        if (event.key=='Escape') {
            this.inputVisible = false
            this.searchTerm = ''
            this.trigger.focus()
            this.hideDropdown()
            this.dispatchEvent(new CustomEvent("ug-edit-cancelled"))
            return;
        }

    // if (!this.shouldDisplayDropdown || event.ctrlKey || event.metaKey) {
    //         return;
    //     }

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
        if (this.input.value?.length >= this.threshold) {
            this.hasFocus = true;
            // this.show();
            console.info("searching ", _event)
            this.dispatchEvent(new CustomEvent('ug-autocomplete-search'))
        }
    }



    handleUgAfterHide(_event: CustomEvent) {
        console.info("dropdown was hidden. showdropdown", this.dropdownVisible)
        if (this.dropdownVisible) {
            //dropdown was hidden without selecting (esc pressed?)
            //cancel input and transfer focus back to trigger
            this.dropdownVisible = false;
            this.searchTerm = ''
            this.inputVisible = false
            if (this.hasFocus) {
                setTimeout(() => {
                    this.trigger.focus()
                })
            }
            return
        }

        this.dispatchEvent(new CustomEvent("ug-edit-cancelled"))
    }

    showDropdown() {
        if (this.dropdownVisible) return

        this.dropdownVisible = true;
        this.dropdown?.show();
        console.trace("autocomplete: dropdown was shown")
        this.dispatchEvent(new CustomEvent("ug-autocomplete-show"))
    }

    hideDropdown() {
        this.dropdownVisible = false
        this.dropdown?.hide();

        console.trace("autocomplete: dropdown was hidden()")
        this.dispatchEvent(new CustomEvent("ug-autocomplete-hidden"))
    }

    reset() {
        this.input.value = '';
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
        return this.loading && (this.loadingPlaceholder || this.hasNamedSlot('loading'));
    }

    get shouldDisplayEmptyText() {
        return !this.hasResults && !this.loading && (this.noResultsPlaceholder || this.hasNamedSlot('no-results'));
    }

    get shouldDisplayTrigger() {
        return !this.shouldDisplayInput;
    }

    get shouldDisplayInput() {
        return this.inputVisible;
    }

    // get shouldDisplayDropdown() {
    //     return (
    //         this.hasFocus && this.inputVisible &&
    //         ((this.input.value?.length >= this.threshold && this.hasResults) || this.shouldDisplayLoadingText || this.shouldDisplayEmptyText)
    //     );
    // }

    private hasNamedSlot(name: string) {
        return this.querySelector(`:scope > [slot="${name}"]`) !== null;

    }

    private handleTriggerFocus() {
        this.hasFocus = true
    }

    private handleTriggerClick(): void {
        this.hasFocus = true
        this.inputVisible = true
        setTimeout(() => {
            this.input.focus()
        })

    }

    private handleTriggerKeydown(event: KeyboardEvent): void {
        console.info("HandleTriggerKeydown", event)
        if (event.key === 'Enter' || event.key === ' ') {
            this.handleTriggerClick();
            event.preventDefault(); // To prevent scrolling when Space is pressed
        // } else if (event.key === 'Tab') {
        //     this.hasFocus = false
        }
    }

    private handleTriggerBlur(event: any): void {
        console.info("HandleTriggerBlur", event)
        if (!this.inputVisible) {
            this.hasFocus = false
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
                           @input=${this.handleSearchInput}
                           @blur=${this.handleInputBlur}
                           @keydown=${this.handleInputKeydown}
                           .value=${this.searchTerm}
                    >

                    <div tabindex="0" class="trigger"
                         style="${styleMap({display: this.shouldDisplayTrigger ? 'flex' : 'none'})}"
                         @click="${this.handleTriggerClick}"
                         @focus="${this.handleTriggerFocus}"
                         @keydown=${this.handleTriggerKeydown}
                         @blur=${this.handleTriggerBlur}
                    >
                        <slot name="trigger"></slot>
                    </div>

                    <ug-dropdown  @ug-hide=${this.handleUgAfterHide}>
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
                                <slot name="loading"> ${this.loadingPlaceholder}</slot>
                            </div>

                            <div
                                    part="no-results"
                                    id="no-results"
                                    class="no-results"
                                    aria-hidden=${this.shouldDisplayEmptyText ? 'false' : 'true'}
                                    style="${styleMap({display: this.shouldDisplayEmptyText ? 'block' : 'none'})}"
                            >
                                <slot name="no-results">${this.noResultsPlaceholder}</slot>
                            </div>

                            <div aria-hidden="true" style=${styleMap({width: `${this.clientWidth}px`})}></div>
                        </ug-menu>
                    </ug-dropdown>
                </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ug-autocomplete': UgAutocomplete;
    }
}


