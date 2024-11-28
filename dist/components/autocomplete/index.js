import { i as g, r as f, x as n, n as u, t as m } from "../../chunks/chunk.UYAO2JRR.js";
import { r as h } from "../../chunks/state.js";
import { e as d } from "../../chunks/query.js";
import { o as a } from "../../chunks/style-map.js";
import { UgMenu as v } from "../menu/index.js";
import { UgDropdown as b } from "../dropdown/index.js";
import { UgInput as w } from "../input/index.js";
import { UgMenuItem as y } from "../menu-item/index.js";
import { UgSkeleton as x } from "../skeleton/index.js";
import { UgTextarea as T } from "../textarea/index.js";
import { UgIconButton as k } from "../icon-button/index.js";
const E = g`

    :host {
        display: inline-block;
        box-sizing: border-box;
        width: 100%;


    }

    ug-dropdown {
        display: block;
        width: 100%;
    }


    ug-dropdown::part(panel) {
        display: block;
        width: 100%;
    }


    .loading-placeholder, .no-results {
        margin-left: .5rem;
        margin-right: .5rem;
    }
    
    .default-loading {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .default-no-results {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .control {
        background-color: var(--ug-input-background-color);
        border: solid var(--ug-input-border-width) var(--ug-input-border-color);
        border-width: 1px;
        display: flex;
        flex-direction: column;
        //align-items: center;
        //display: inline-flex;
        flex: 1;

    }

    .control:focus-within {
        border-color: var(--ug-input-border-color-focus);
        box-shadow: 0 0 0 var(--ug-focus-ring-width) var(--ug-input-focus-ring-color);
        //border-width: 5px;
        //border:none
    }


    .base {
        width: 100%;
        display: inline-flex;

    }

    .control .fix-wrapper {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        height: 100%;

        font-family: var(--ug-input-font-family);
        font-weight: var(--ug-input-font-weight);
        letter-spacing: var(--ug-input-letter-spacing);
    }
    
    
    .control  input:focus {
        outline: none;
    }

    .control input {
        flex: 1;
        text-indent: .5rem;
        border: none;
        font-family: var(--ug-input-font-family);
        font-weight: var(--ug-input-font-weight);
        letter-spacing: var(--ug-input-letter-spacing);
        color: var(--ug-input-color);
    }

    .control .trigger {
        flex: 1;
        display: flex;
        align-items: center;
        margin-left: 1rem;
        vertical-align: center;
        margin-top: auto;
        margin-bottom: auto;
        color: var(--ug-input-color);
    }

    .control .trigger:focus {
        outline: none;
    }


    .control--small {
        border-radius: var(--ug-input-border-radius-small);
        font-size: var(--ug-input-font-size-small);
        height: var(--ug-input-height-small);
        border-color: var(--ug-input-border-color);
    }
    
    .control--small .fix-wrapper  * {
        //margin-inline-start: var(--ug-input-spacing-small);
        //margin-inline-end: var(--ug-input-spacing-small);
    }


    .control--medium {
        border-radius: var(--ug-input-border-radius-medium);
        font-size: var(--ug-input-font-size-medium);
        height: var(--ug-input-height-medium);
        border-color: var(--ug-input-border-color);
    }

    .control--medium .fix-wrapper .prefix {
        margin-inline-start: var(--ug-input-spacing-medium);
    }
    .control--medium .fix-wrapper .suffix {
        margin-inline-end: var(--ug-input-spacing-medium);
    }


    .control--large {
        border-radius: var(--ug-input-border-radius-large);
        font-size: var(--ug-input-font-size-large);
        height: var(--ug-input-height-large);
        border-color: var(--ug-input-border-color);
    }
    .control--large .fix-wrapper * {
        //margin-inline-start: var(--ug-input-spacing-large);
        //margin-inline-end: var(--ug-input-spacing-large);
    }


    trigger {
        .input--small {
        }

`;
var $ = Object.defineProperty, D = Object.getOwnPropertyDescriptor, i = (e, s, l, r) => {
  for (var o = r > 1 ? void 0 : r ? D(s, l) : s, p = e.length - 1, c; p >= 0; p--)
    (c = e[p]) && (o = (r ? c(s, l, o) : c(o)) || o);
  return r && o && $(s, l, o), o;
};
let t = class extends f {
  constructor() {
    super(...arguments), this.hasFocus = !1, this.inputVisible = !1, this.loading = !1, this.clearable = !1, this.size = "medium", this.dropdownVisible = !1, this.threshold = 1, this.label = null, this.searchTerm = null, this.allowFocusTraverse = !1, this.loadingPlaceholder = n`
        <div class="default-loading">
            <ug-skeleton effect="pulse"></ug-skeleton>
            <ug-skeleton effect="pulse"></ug-skeleton>
            <ug-skeleton effect="pulse"></ug-skeleton>
        </div>
    `, this.noResultsPlaceholder = n`
        <div class="default-no-results">
            No items found
        </div>
    `, this.preventMenuFocus = (e) => {
      console.info("prevent", e), e.target instanceof HTMLElement && e.target.closest("ug-menu-item") && !this.allowFocusTraverse && (this.input.focus(), e.preventDefault(), console.info("preventing menuFocus?", e));
    };
  }
  updated(e) {
    super.updated(e), this.dropdownVisible && this.showDropdown(), this.searchTerm && (this.hasFocus = !0, this.inputVisible = !0);
  }
  handleSearchInput(e) {
    const { value: s } = e.target;
    this.searchTerm = s, this.meetsInputThreshold() && (this.showDropdown(), this.dispatchEvent(new CustomEvent("ug-search", { bubbles: !0, detail: s })));
  }
  handleInputBlur() {
    this.inputVisible ? this.dropdownVisible || (this.inputVisible = !1) : this.trigger.focus();
  }
  handleUgSelect(e) {
    let s = e.detail.item;
    this.dispatchEvent(new CustomEvent("ug-selected", { detail: s })), this.inputVisible = !1, this.searchTerm = "", this.hideDropdown(), setTimeout(() => {
      this.trigger.focus();
    }, 0);
  }
  handleInputKeydown(e) {
    if (e.key == "Escape") {
      this.inputVisible = !1, this.searchTerm = "", this.trigger.focus(), this.hideDropdown(), this.dispatchEvent(new CustomEvent("ug-edit-cancelled"));
      return;
    } else if (e.key == "Tab") {
      this.inputVisible = !1, this.searchTerm = "", this.dispatchEvent(new CustomEvent("ug-edit-cancelled"));
      return;
    }
    const s = this.visibleOptions;
    if (s.length === 0)
      return;
    const l = s[0], r = s[s.length - 1];
    switch (e.key) {
      case "Tab":
      case "ArrowDown":
        e.preventDefault(), this.menu.setCurrentItem(l), this.allowFocusTraverse = !0, l.focus();
        break;
      case "ArrowUp":
        e.preventDefault(), this.menu.setCurrentItem(r), this.allowFocusTraverse = !0, r.focus();
        break;
    }
  }
  handleClearClick() {
    this.dispatchEvent(new CustomEvent("ug-clear"));
  }
  meetsInputThreshold() {
    var e;
    return ((e = this.input.value) == null ? void 0 : e.length) >= this.threshold;
  }
  handleUgFocus(e) {
    this.meetsInputThreshold() && (this.hasFocus = !0, this.dispatchEvent(new CustomEvent("ug-autocomplete-search")));
  }
  handleUgAfterHide(e) {
    if (this.dropdownVisible) {
      this.dropdownVisible = !1, this.searchTerm = "", this.inputVisible = !1, this.dispatchEvent(new CustomEvent("ug-edit-cancelled")), this.hasFocus && setTimeout(() => {
        this.trigger.focus();
      });
      return;
    }
    this.allowFocusTraverse = !1;
  }
  showDropdown() {
    var e;
    this.dropdownVisible || (this.dropdownVisible = !0, (e = this.dropdown) == null || e.show(), this.dispatchEvent(new CustomEvent("ug-dropdown-show")));
  }
  hideDropdown() {
    var e;
    this.dropdownVisible && (this.dropdownVisible = !1, (e = this.dropdown) == null || e.hide(), this.dispatchEvent(new CustomEvent("ug-dropdown-hidden")));
  }
  reset() {
    this.input.value = "";
  }
  get options() {
    var e;
    return ((e = this.defaultSlot) == null ? void 0 : e.assignedElements()) || [];
  }
  get visibleOptions() {
    return this.options.filter((e) => e.style.display !== "none");
  }
  get hasResults() {
    return this.visibleOptions.length > 0;
  }
  get shouldDisplayPrefixSlot() {
    return this.hasNamedSlot("prefix");
  }
  get shouldDisplaySuffixSlot() {
    return this.hasNamedSlot("suffix");
  }
  get shouldDisplayLoadingText() {
    return this.loading && (this.loadingPlaceholder || this.hasNamedSlot("loading"));
  }
  get shouldDisplayEmptyText() {
    return !this.hasResults && !this.loading && (this.noResultsPlaceholder || this.hasNamedSlot("no-results"));
  }
  get shouldDisplayTrigger() {
    return !this.shouldDisplayInput;
  }
  get shouldDisplayInput() {
    return this.inputVisible;
  }
  hasNamedSlot(e) {
    return this.querySelector(`:scope > [slot="${e}"]`) !== null;
  }
  handleTriggerFocus() {
    this.hasFocus = !0;
  }
  handleTriggerClick() {
    this.hasFocus = !0, this.inputVisible = !0, setTimeout(() => {
      this.input.focus();
    });
  }
  handleTriggerKeydown(e) {
    console.info("triggerKeydown"), (e.key === "Enter" || e.key === " ") && (console.info("triggerKeydown ENTER"), this.handleTriggerClick(), e.preventDefault());
  }
  handleTriggerBlur() {
    this.inputVisible || (this.hasFocus = !1);
  }
  dispatchEvent(e) {
    return console.info("autocomplete is fires event", e), super.dispatchEvent(e);
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("focusin", this.preventMenuFocus);
  }
  disconnectedCallback() {
    this.removeEventListener("focusin", this.preventMenuFocus), super.disconnectedCallback();
  }
  render() {
    const { shouldDisplayLoadingText: e } = this;
    return n`
            <label>${this.label}</label>
            <div part="base" class="base">
                <div class="control control--${this.size}">
                    <div class="fix-wrapper"
                         tabindex="0"
                         @focus="${this.handleTriggerFocus}"
                         @keydown=${this.handleTriggerKeydown}
                         @blur=${this.handleTriggerBlur}
                    >
                        ${this.shouldDisplayPrefixSlot ? n`<div class="prefix"> <slot  name="prefix" ></slot></div>` : ""}
                        <input style="${a({ display: this.shouldDisplayInput ? "block" : "none" })}"
                               @ug-focus=${this.handleUgFocus}
                               @input=${this.handleSearchInput}
                               @blur=${this.handleInputBlur}
                               @keydown=${this.handleInputKeydown}
                               .value=${this.searchTerm}
                        >
    
                        <div  class="trigger"
                             style="${a({ display: this.shouldDisplayTrigger ? "flex" : "none" })}"
                             @click="${this.handleTriggerClick}"
                        >
                            <slot name="trigger"></slot>
                        </div>
                        
                        ${this.clearable ? n`<ug-icon-button class="clearbutton" name="x-circle-fill"   @click="${this.handleClearClick}" ></ug-icon-button>` : ""}

                        ${this.shouldDisplaySuffixSlot ? n`<div class="suffix"> <slot  name="suffix" ></slot></div>` : ""}
                    </div>

                    <ug-dropdown @ug-hide=${this.handleUgAfterHide}>
                        <ug-menu @ug-select="${this.handleUgSelect}">
                            <slot
                                    style="${a({ display: e ? "none" : "block" })}"
                            >
                            </slot>

                            <div
                                    part="loading-placeholder"
                                    id="loading-placeholder"
                                    class="loading-placeholder"
                                    aria-hidden=${e ? "false" : "true"}
                                    style="${a({ display: e ? "block" : "none" })}"
                            >
                                <slot name="loading"> ${this.loadingPlaceholder}</slot>
                            </div>

                            <div
                                    part="no-results"
                                    id="no-results"
                                    class="no-results"
                                    aria-hidden=${this.shouldDisplayEmptyText ? "false" : "true"}
                                    style="${a({ display: this.shouldDisplayEmptyText ? "block" : "none" })}"
                            >
                                <slot name="no-results">${this.noResultsPlaceholder}</slot>
                            </div>

                            <div aria-hidden="true" style=${a({ width: `${this.clientWidth}px` })}></div>
                        </ug-menu>
                    </ug-dropdown>
                </div>
        `;
  }
};
t.styles = E;
t.dependencies = {
  "ug-skeleton": x,
  "ug-input": w,
  "ug-menu": v,
  "ug-menu-item": y,
  "ug-dropdown": b,
  "ug-textarea": T,
  "ug-icon-button": k
};
i([
  d("ug-menu")
], t.prototype, "menu", 2);
i([
  d("ug-dropdown")
], t.prototype, "dropdown", 2);
i([
  d("slot:not([name])")
], t.prototype, "defaultSlot", 2);
i([
  d(".control input")
], t.prototype, "input", 2);
i([
  d(".control .trigger")
], t.prototype, "trigger", 2);
i([
  h()
], t.prototype, "hasFocus", 2);
i([
  h()
], t.prototype, "inputVisible", 2);
i([
  u({ type: Boolean, reflect: !0 })
], t.prototype, "loading", 2);
i([
  u({ type: Boolean, reflect: !0 })
], t.prototype, "clearable", 2);
i([
  u({ reflect: !0, type: String })
], t.prototype, "size", 2);
i([
  h()
], t.prototype, "dropdownVisible", 2);
i([
  u({ type: Number, reflect: !0 })
], t.prototype, "threshold", 2);
i([
  u({ type: String, reflect: !0 })
], t.prototype, "label", 2);
i([
  h()
], t.prototype, "searchTerm", 2);
t = i([
  m("ug-autocomplete")
], t);
export {
  t as UgAutocomplete
};
