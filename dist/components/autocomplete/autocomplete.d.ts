import { LitElement, CSSResultGroup, TemplateResult } from 'lit';
import { UgMenu } from '../menu';
import { UgDropdown } from '../dropdown';
import { UgInput } from '../input';
import { UgMenuItem } from '../menu-item';
import { UgSkeleton } from '../skeleton';
import { UgTextarea } from '../textarea';
import { UgIconButton } from '../icon-button';
export declare class UgAutocomplete extends LitElement {
    static styles: CSSResultGroup;
    static dependencies: {
        'ug-skeleton': typeof UgSkeleton;
        'ug-input': typeof UgInput;
        'ug-menu': typeof UgMenu;
        'ug-menu-item': typeof UgMenuItem;
        'ug-dropdown': typeof UgDropdown;
        'ug-textarea': typeof UgTextarea;
        'ug-icon-button': typeof UgIconButton;
    };
    menu: UgMenu;
    dropdown: UgDropdown;
    defaultSlot: HTMLSlotElement;
    input: HTMLInputElement;
    trigger: HTMLElement;
    private hasFocus;
    private inputVisible;
    /**
     * Tells whether this component should behave as if the data is still loading
     */
    loading: boolean;
    /**
     * Tells whether this component should show a clear icon or not
     */
    clearable: boolean;
    /**
     * Tells whether this component should behave as if the data is still loading
     */
    size: 'small' | 'medium' | 'large';
    /**
     * When this boolean becomes true, the menu will be shown.
     * Note that other component interactions may cause the menu to be hidden, while this property will not be affected.
     * So, if you just want to show the after an interaction, you might want to use the method call {@link show()}
     */
    dropdownVisible: boolean;
    /**
     * the number of characters that should be entered before the menu will be shown and the searchEntered event will be
     * fired
     */
    threshold: number;
    label: string | null;
    searchTerm: string | null;
    allowFocusTraverse: boolean;
    loadingPlaceholder: TemplateResult;
    noResultsPlaceholder: TemplateResult;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    handleSearchInput(event: CustomEvent): void;
    handleInputBlur(): void;
    handleUgSelect(event: CustomEvent): void;
    handleInputKeydown(event: KeyboardEvent): void;
    handleClearClick(): void;
    meetsInputThreshold(): boolean;
    handleUgFocus(_event: CustomEvent): void;
    handleUgAfterHide(_event: CustomEvent): void;
    showDropdown(): void;
    hideDropdown(): void;
    reset(): void;
    get options(): UgMenuItem[];
    get visibleOptions(): UgMenuItem[];
    get hasResults(): boolean;
    get shouldDisplayPrefixSlot(): boolean;
    get shouldDisplaySuffixSlot(): boolean;
    get shouldDisplayLoadingText(): false | TemplateResult;
    get shouldDisplayEmptyText(): false | TemplateResult;
    get shouldDisplayTrigger(): boolean;
    get shouldDisplayInput(): boolean;
    private hasNamedSlot;
    private handleTriggerFocus;
    private handleTriggerClick;
    private handleTriggerKeydown;
    private handleTriggerBlur;
    dispatchEvent(event: any): boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private preventMenuFocus;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ug-autocomplete': UgAutocomplete;
    }
}