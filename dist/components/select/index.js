import { S as x } from "../../chunks/chunk.Q45FKJX7.js";
import { i as w, _ as s, n as r, S as O, k as p, t as C } from "../../chunks/chunk.NLWS5DN7.js";
import { s as k } from "../../chunks/chunk.RWUUFNUL.js";
import { d as S } from "../../chunks/chunk.GI7VDIWX.js";
import { f as D } from "../../chunks/chunk.SI4ACBFK.js";
import { S as $ } from "../../chunks/chunk.H24ENZMO.js";
import { F as z } from "../../chunks/chunk.2RCF7SLU.js";
import { s as _, a as g, g as m, b as f } from "../../chunks/chunk.3EPZX5HE.js";
import { w as b } from "../../chunks/chunk.B4BZKR24.js";
import { H as I } from "../../chunks/chunk.NYIIDP5N.js";
import { L as T } from "../../chunks/chunk.WLV3FVBR.js";
import { S as L } from "../../chunks/chunk.O7VCMB7W.js";
import { w as h } from "../../chunks/chunk.CCJUT23E.js";
import { c as A } from "../../chunks/chunk.TUVJKY7S.js";
import { R as v } from "../../chunks/class-map.js";
import { r as d } from "../../chunks/state.js";
import { e as u } from "../../chunks/query.js";
import { a as E } from "../../chunks/unsafe-html.js";
import "../../chunks/chunk.AYP3HPB7.js";
var F = w`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--ug-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--ug-input-font-family);
    font-weight: var(--ug-input-font-weight);
    letter-spacing: var(--ug-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--ug-transition-fast) color,
      var(--ug-transition-fast) border,
      var(--ug-transition-fast) box-shadow,
      var(--ug-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--ug-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--ug-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--ug-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--ug-spacing-2x-small);
  }

  .select__tags::slotted(ug-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(ug-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--ug-input-background-color);
    border: solid var(--ug-input-border-width) var(--ug-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--ug-input-background-color-disabled);
    border-color: var(--ug-input-border-color-disabled);
    color: var(--ug-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--ug-input-background-color-focus);
    border-color: var(--ug-input-border-color-focus);
    box-shadow: 0 0 0 var(--ug-focus-ring-width) var(--ug-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--ug-input-filled-background-color);
    color: var(--ug-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--ug-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--ug-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--ug-input-filled-background-color-focus);
    outline: var(--ug-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--ug-input-border-radius-small);
    font-size: var(--ug-input-font-size-small);
    min-height: var(--ug-input-height-small);
    padding-block: 0;
    padding-inline: var(--ug-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--ug-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--ug-input-spacing-small);
  }

  .select--small.select--multiple .select__prefix::slotted(*) {
    margin-inline-start: var(--ug-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--ug-input-border-radius-medium);
    font-size: var(--ug-input-font-size-medium);
    min-height: var(--ug-input-height-medium);
    padding-block: 0;
    padding-inline: var(--ug-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--ug-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--ug-input-spacing-medium);
  }

  .select--medium.select--multiple .select__prefix::slotted(*) {
    margin-inline-start: var(--ug-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--ug-input-border-radius-large);
    font-size: var(--ug-input-font-size-large);
    min-height: var(--ug-input-height-large);
    padding-block: 0;
    padding-inline: var(--ug-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--ug-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--ug-input-spacing-large);
  }

  .select--large.select--multiple .select__prefix::slotted(*) {
    margin-inline-start: var(--ug-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--ug-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--ug-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--ug-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--ug-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--ug-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--ug-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--ug-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--ug-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--ug-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--ug-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--ug-font-sans);
    font-size: var(--ug-font-size-medium);
    font-weight: var(--ug-font-weight-normal);
    box-shadow: var(--ug-shadow-large);
    background: var(--ug-panel-background-color);
    border: solid var(--ug-panel-border-width) var(--ug-panel-border-color);
    border-radius: var(--ug-border-radius-medium);
    padding-block: var(--ug-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(ug-divider) {
    --spacing: var(--ug-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--ug-font-size-small);
    font-weight: var(--ug-font-weight-semibold);
    color: var(--ug-color-neutral-500);
    padding-block: var(--ug-spacing-2x-small);
    padding-inline: var(--ug-spacing-x-large);
  }
`, i = class extends O {
  constructor() {
    super(...arguments), this.formControlController = new z(this, {
      assumeInteractionOn: ["ug-blur", "ug-input"]
    }), this.hasSlotController = new I(this, "help-text", "label"), this.localize = new T(this), this.typeToSelectString = "", this.hasFocus = !1, this.displayLabel = "", this.selectedOptions = [], this.name = "", this.value = "", this.defaultValue = "", this.size = "medium", this.placeholder = "", this.multiple = !1, this.maxOptionsVisible = 3, this.disabled = !1, this.clearable = !1, this.open = !1, this.hoist = !1, this.filled = !1, this.pill = !1, this.label = "", this.placement = "bottom", this.helpText = "", this.form = "", this.required = !1, this.getTag = (e) => p`
      <ug-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @ug-remove=${(t) => this.handleTagRemove(t, e)}
      >
        ${e.getTextLabel()}
      </ug-tag>
    `, this.handleDocumentFocusIn = (e) => {
      const t = e.composedPath();
      this && !t.includes(this) && this.hide();
    }, this.handleDocumentKeyDown = (e) => {
      const t = e.target, l = t.closest(".select__clear") !== null, o = t.closest("ug-icon-button") !== null;
      if (!(l || o)) {
        if (e.key === "Escape" && this.open && !this.closeWatcher && (e.preventDefault(), e.stopPropagation(), this.hide(), this.displayInput.focus({ preventScroll: !0 })), e.key === "Enter" || e.key === " " && this.typeToSelectString === "") {
          if (e.preventDefault(), e.stopImmediatePropagation(), !this.open) {
            this.show();
            return;
          }
          this.currentOption && !this.currentOption.disabled && (this.multiple ? this.toggleOptionSelection(this.currentOption) : this.setSelectedOptions(this.currentOption), this.updateComplete.then(() => {
            this.emit("ug-input"), this.emit("ug-change");
          }), this.multiple || (this.hide(), this.displayInput.focus({ preventScroll: !0 })));
          return;
        }
        if (["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
          const a = this.getAllOptions(), c = a.indexOf(this.currentOption);
          let n = Math.max(0, c);
          if (e.preventDefault(), !this.open && (this.show(), this.currentOption))
            return;
          e.key === "ArrowDown" ? (n = c + 1, n > a.length - 1 && (n = 0)) : e.key === "ArrowUp" ? (n = c - 1, n < 0 && (n = a.length - 1)) : e.key === "Home" ? n = 0 : e.key === "End" && (n = a.length - 1), this.setCurrentOption(a[n]);
        }
        if (e.key.length === 1 || e.key === "Backspace") {
          const a = this.getAllOptions();
          if (e.metaKey || e.ctrlKey || e.altKey)
            return;
          if (!this.open) {
            if (e.key === "Backspace")
              return;
            this.show();
          }
          e.stopPropagation(), e.preventDefault(), clearTimeout(this.typeToSelectTimeout), this.typeToSelectTimeout = window.setTimeout(() => this.typeToSelectString = "", 1e3), e.key === "Backspace" ? this.typeToSelectString = this.typeToSelectString.slice(0, -1) : this.typeToSelectString += e.key.toLowerCase();
          for (const c of a)
            if (c.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)) {
              this.setCurrentOption(c);
              break;
            }
        }
      }
    }, this.handleDocumentMouseDown = (e) => {
      const t = e.composedPath();
      this && !t.includes(this) && this.hide();
    };
  }
  /** Gets the validity state object */
  get validity() {
    return this.valueInput.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.valueInput.validationMessage;
  }
  connectedCallback() {
    super.connectedCallback(), this.open = !1;
  }
  addOpenListeners() {
    var e;
    document.addEventListener("focusin", this.handleDocumentFocusIn), document.addEventListener("keydown", this.handleDocumentKeyDown), document.addEventListener("mousedown", this.handleDocumentMouseDown), this.getRootNode() !== document && this.getRootNode().addEventListener("focusin", this.handleDocumentFocusIn), "CloseWatcher" in window && ((e = this.closeWatcher) == null || e.destroy(), this.closeWatcher = new CloseWatcher(), this.closeWatcher.onclose = () => {
      this.open && (this.hide(), this.displayInput.focus({ preventScroll: !0 }));
    });
  }
  removeOpenListeners() {
    var e;
    document.removeEventListener("focusin", this.handleDocumentFocusIn), document.removeEventListener("keydown", this.handleDocumentKeyDown), document.removeEventListener("mousedown", this.handleDocumentMouseDown), this.getRootNode() !== document && this.getRootNode().removeEventListener("focusin", this.handleDocumentFocusIn), (e = this.closeWatcher) == null || e.destroy();
  }
  handleFocus() {
    this.hasFocus = !0, this.displayInput.setSelectionRange(0, 0), this.emit("ug-focus");
  }
  handleBlur() {
    this.hasFocus = !1, this.emit("ug-blur");
  }
  handleLabelClick() {
    this.displayInput.focus();
  }
  handleComboboxMouseDown(e) {
    const l = e.composedPath().some((o) => o instanceof Element && o.tagName.toLowerCase() === "ug-icon-button");
    this.disabled || l || (e.preventDefault(), this.displayInput.focus({ preventScroll: !0 }), this.open = !this.open);
  }
  handleComboboxKeyDown(e) {
    e.key !== "Tab" && (e.stopPropagation(), this.handleDocumentKeyDown(e));
  }
  handleClearClick(e) {
    e.stopPropagation(), this.value !== "" && (this.setSelectedOptions([]), this.displayInput.focus({ preventScroll: !0 }), this.updateComplete.then(() => {
      this.emit("ug-clear"), this.emit("ug-input"), this.emit("ug-change");
    }));
  }
  handleClearMouseDown(e) {
    e.stopPropagation(), e.preventDefault();
  }
  handleOptionClick(e) {
    const l = e.target.closest("ug-option"), o = this.value;
    l && !l.disabled && (this.multiple ? this.toggleOptionSelection(l) : this.setSelectedOptions(l), this.updateComplete.then(() => this.displayInput.focus({ preventScroll: !0 })), this.value !== o && this.updateComplete.then(() => {
      this.emit("ug-input"), this.emit("ug-change");
    }), this.multiple || (this.hide(), this.displayInput.focus({ preventScroll: !0 })));
  }
  handleDefaultSlotChange() {
    const e = this.getAllOptions(), t = Array.isArray(this.value) ? this.value : [this.value], l = [];
    customElements.get("ug-option") ? (e.forEach((o) => l.push(o.value)), this.setSelectedOptions(e.filter((o) => t.includes(o.value)))) : customElements.whenDefined("ug-option").then(() => this.handleDefaultSlotChange());
  }
  handleTagRemove(e, t) {
    e.stopPropagation(), this.disabled || (this.toggleOptionSelection(t, !1), this.updateComplete.then(() => {
      this.emit("ug-input"), this.emit("ug-change");
    }));
  }
  // Gets an array of all <ug-option> elements
  getAllOptions() {
    return [...this.querySelectorAll("ug-option")];
  }
  // Gets the first <ug-option> element
  getFirstOption() {
    return this.querySelector("ug-option");
  }
  // Sets the current option, which is the option the user is currently interacting with (e.g. via keyboard). Only one
  // option may be "current" at a time.
  setCurrentOption(e) {
    this.getAllOptions().forEach((l) => {
      l.current = !1, l.tabIndex = -1;
    }), e && (this.currentOption = e, e.current = !0, e.tabIndex = 0, e.focus());
  }
  // Sets the selected option(s)
  setSelectedOptions(e) {
    const t = this.getAllOptions(), l = Array.isArray(e) ? e : [e];
    t.forEach((o) => o.selected = !1), l.length && l.forEach((o) => o.selected = !0), this.selectionChanged();
  }
  // Toggles an option's selected state
  toggleOptionSelection(e, t) {
    t === !0 || t === !1 ? e.selected = t : e.selected = !e.selected, this.selectionChanged();
  }
  // This method must be called whenever the selection changes. It will update the selected options cache, the current
  // value, and the display value
  selectionChanged() {
    var e, t, l, o;
    this.selectedOptions = this.getAllOptions().filter((a) => a.selected), this.multiple ? (this.value = this.selectedOptions.map((a) => a.value), this.placeholder && this.value.length === 0 ? this.displayLabel = "" : this.displayLabel = this.localize.term("numOptionsSelected", this.selectedOptions.length)) : (this.value = (t = (e = this.selectedOptions[0]) == null ? void 0 : e.value) != null ? t : "", this.displayLabel = (o = (l = this.selectedOptions[0]) == null ? void 0 : l.getTextLabel()) != null ? o : ""), this.updateComplete.then(() => {
      this.formControlController.updateValidity();
    });
  }
  get tags() {
    return this.selectedOptions.map((e, t) => {
      if (t < this.maxOptionsVisible || this.maxOptionsVisible <= 0) {
        const l = this.getTag(e, t);
        return p`<div @ug-remove=${(o) => this.handleTagRemove(o, e)}>
          ${typeof l == "string" ? E(l) : l}
        </div>`;
      } else if (t === this.maxOptionsVisible)
        return p`<ug-tag size=${this.size}>+${this.selectedOptions.length - t}</ug-tag>`;
      return p``;
    });
  }
  handleInvalid(e) {
    this.formControlController.setValidity(!1), this.formControlController.emitInvalidEvent(e);
  }
  handleDisabledChange() {
    this.disabled && (this.open = !1, this.handleOpenChange());
  }
  handleValueChange() {
    const e = this.getAllOptions(), t = Array.isArray(this.value) ? this.value : [this.value];
    this.setSelectedOptions(e.filter((l) => t.includes(l.value)));
  }
  async handleOpenChange() {
    if (this.open && !this.disabled) {
      this.setCurrentOption(this.selectedOptions[0] || this.getFirstOption()), this.emit("ug-show"), this.addOpenListeners(), await g(this), this.listbox.hidden = !1, this.popup.active = !0, requestAnimationFrame(() => {
        this.setCurrentOption(this.currentOption);
      });
      const { keyframes: e, options: t } = m(this, "select.show", { dir: this.localize.dir() });
      await f(this.popup.popup, e, t), this.currentOption && k(this.currentOption, this.listbox, "vertical", "auto"), this.emit("ug-after-show");
    } else {
      this.emit("ug-hide"), this.removeOpenListeners(), await g(this);
      const { keyframes: e, options: t } = m(this, "select.hide", { dir: this.localize.dir() });
      await f(this.popup.popup, e, t), this.listbox.hidden = !0, this.popup.active = !1, this.emit("ug-after-hide");
    }
  }
  /** Shows the listbox. */
  async show() {
    if (this.open || this.disabled) {
      this.open = !1;
      return;
    }
    return this.open = !0, b(this, "ug-after-show");
  }
  /** Hides the listbox. */
  async hide() {
    if (!this.open || this.disabled) {
      this.open = !1;
      return;
    }
    return this.open = !1, b(this, "ug-after-hide");
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.valueInput.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.valueInput.reportValidity();
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(e) {
    this.valueInput.setCustomValidity(e), this.formControlController.updateValidity();
  }
  /** Sets focus on the control. */
  focus(e) {
    this.displayInput.focus(e);
  }
  /** Removes focus from the control. */
  blur() {
    this.displayInput.blur();
  }
  render() {
    const e = this.hasSlotController.test("label"), t = this.hasSlotController.test("help-text"), l = this.label ? !0 : !!e, o = this.helpText ? !0 : !!t, a = this.clearable && !this.disabled && this.value.length > 0, c = this.placeholder && this.value.length === 0;
    return p`
      <div
        part="form-control"
        class=${v({
      "form-control": !0,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-label": l,
      "form-control--has-help-text": o
    })}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${l ? "false" : "true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <ug-popup
            class=${v({
      select: !0,
      "select--standard": !0,
      "select--filled": this.filled,
      "select--pill": this.pill,
      "select--open": this.open,
      "select--disabled": this.disabled,
      "select--multiple": this.multiple,
      "select--focused": this.hasFocus,
      "select--placeholder-visible": c,
      "select--top": this.placement === "top",
      "select--bottom": this.placement === "bottom",
      "select--small": this.size === "small",
      "select--medium": this.size === "medium",
      "select--large": this.size === "large"
    })}
            placement=${this.placement}
            strategy=${this.hoist ? "fixed" : "absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open ? "true" : "false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled ? "true" : "false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple ? p`<div part="tags" class="select__tags">${this.tags}</div>` : ""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value) ? this.value.join(", ") : this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${() => this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${a ? p`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <ug-icon name="x-circle-fill" library="system"></ug-icon>
                      </slot>
                    </button>
                  ` : ""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <ug-icon library="system" name="chevron-down"></ug-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open ? "true" : "false"}
              aria-multiselectable=${this.multiple ? "true" : "false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </ug-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
};
i.styles = [A, D, F];
i.dependencies = {
  "ug-icon": L,
  "ug-popup": $,
  "ug-tag": x
};
s([
  u(".select")
], i.prototype, "popup", 2);
s([
  u(".select__combobox")
], i.prototype, "combobox", 2);
s([
  u(".select__display-input")
], i.prototype, "displayInput", 2);
s([
  u(".select__value-input")
], i.prototype, "valueInput", 2);
s([
  u(".select__listbox")
], i.prototype, "listbox", 2);
s([
  d()
], i.prototype, "hasFocus", 2);
s([
  d()
], i.prototype, "displayLabel", 2);
s([
  d()
], i.prototype, "currentOption", 2);
s([
  d()
], i.prototype, "selectedOptions", 2);
s([
  r()
], i.prototype, "name", 2);
s([
  r({
    converter: {
      fromAttribute: (e) => e.split(" "),
      toAttribute: (e) => e.join(" ")
    }
  })
], i.prototype, "value", 2);
s([
  S()
], i.prototype, "defaultValue", 2);
s([
  r({ reflect: !0 })
], i.prototype, "size", 2);
s([
  r()
], i.prototype, "placeholder", 2);
s([
  r({ type: Boolean, reflect: !0 })
], i.prototype, "multiple", 2);
s([
  r({ attribute: "max-options-visible", type: Number })
], i.prototype, "maxOptionsVisible", 2);
s([
  r({ type: Boolean, reflect: !0 })
], i.prototype, "disabled", 2);
s([
  r({ type: Boolean })
], i.prototype, "clearable", 2);
s([
  r({ type: Boolean, reflect: !0 })
], i.prototype, "open", 2);
s([
  r({ type: Boolean })
], i.prototype, "hoist", 2);
s([
  r({ type: Boolean, reflect: !0 })
], i.prototype, "filled", 2);
s([
  r({ type: Boolean, reflect: !0 })
], i.prototype, "pill", 2);
s([
  r()
], i.prototype, "label", 2);
s([
  r({ reflect: !0 })
], i.prototype, "placement", 2);
s([
  r({ attribute: "help-text" })
], i.prototype, "helpText", 2);
s([
  r({ reflect: !0 })
], i.prototype, "form", 2);
s([
  r({ type: Boolean, reflect: !0 })
], i.prototype, "required", 2);
s([
  r()
], i.prototype, "getTag", 2);
s([
  h("disabled", { waitUntilFirstUpdate: !0 })
], i.prototype, "handleDisabledChange", 1);
s([
  h("value", { waitUntilFirstUpdate: !0 })
], i.prototype, "handleValueChange", 1);
s([
  h("open", { waitUntilFirstUpdate: !0 })
], i.prototype, "handleOpenChange", 1);
_("select.show", {
  keyframes: [
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 100, easing: "ease" }
});
_("select.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.9 }
  ],
  options: { duration: 100, easing: "ease" }
});
var V = Object.defineProperty, P = Object.getOwnPropertyDescriptor, B = (e, t, l, o) => {
  for (var a = o > 1 ? void 0 : o ? P(t, l) : t, c = e.length - 1, n; c >= 0; c--)
    (n = e[c]) && (a = (o ? n(t, l, a) : n(a)) || a);
  return o && a && V(t, l, a), a;
};
let y = class extends i {
};
y = B([
  C("ug-select")
], y);
export {
  y as UgSelect
};
