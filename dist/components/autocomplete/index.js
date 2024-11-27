import { i as g, r as m, x as p, n as a, t as f } from "../../chunks/chunk.UYAO2JRR.js";
import { r as c } from "../../chunks/state.js";
import { e as u } from "../../chunks/query.js";
import { o as n } from "../../chunks/style-map.js";
import { UgMenu as y } from "../menu/index.js";
import { UgDropdown as b } from "../dropdown/index.js";
import { UgInput as v } from "../input/index.js";
import { UgMenuItem as w } from "../menu-item/index.js";
import { UgSkeleton as x } from "../skeleton/index.js";
import { UgTextarea as k } from "../textarea/index.js";
const $ = g`

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


    .default-loading-placeholder {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin: .5rem;
        
    }

    .control {
        background-color: var(--ug-input-background-color);
        border: solid var(--ug-input-border-width) var(--ug-input-border-color);
        border-width: 1px;
        display: flex;
        flex-direction: column;
        align-items: center;
        //display: inline-flex;
        flex: 1; 
        
    }
    
    .control:focus-within{
        //border-color: red;
        //border:none
    }

    
    .base {
        width: 100%;
        display: inline-flex;

    }

    
    

    .control input {
        padding-left: 1rem;
        height: 100%;
        width: 100%;
        border: none;
    }

    .control .trigger {
        display: flex;
        align-items: center;
        margin-left: 1rem;
        height: 100%;
        width: 100%;
        vertical-align: center;
        margin-top:auto;
    }

    .control .trigger:focus {
        //border: solid red 1px
        outline: none;
        box-shadow: 0px 0px 3px 3px #abc;
    }


    .control--small {
        border-radius: var(--ug-input-border-radius-small);
        font-size: var(--ug-input-font-size-small);
        height: var(--ug-input-height-small);
        border-color: var(--ug-input-border-color);
    }

    .control--medium {
        border-radius: var(--ug-input-border-radius-medium);
        font-size: var(--ug-input-font-size-medium);
        height: var(--ug-input-height-medium);
        border-color: var(--ug-input-border-color);
    }

    .control--large {
        border-radius: var(--ug-input-border-radius-large);
        font-size: var(--ug-input-font-size-large);
        height: var(--ug-input-height-large);
        border-color: var(--ug-input-border-color);
    }


    trigger {
        .input--small {
        }

`;
var D = Object.defineProperty, T = Object.getOwnPropertyDescriptor, s = (e, o, r, l) => {
  for (var i = l > 1 ? void 0 : l ? T(o, r) : o, d = e.length - 1, h; d >= 0; d--)
    (h = e[d]) && (i = (l ? h(o, r, i) : h(i)) || i);
  return l && i && D(o, r, i), i;
};
let t = class extends m {
  constructor() {
    super(...arguments), this.value = "", this.hasFocus = !1, this.loading = !1, this.size = "medium", this.popupVisible = !1, this.threshold = 1, this.label = null, this.loadingPlaceholder = p`
        <div class="default-loading-placeholder">
            <ug-skeleton effect="pulse"></ug-skeleton>
            <ug-skeleton effect="pulse"></ug-skeleton>
            <ug-skeleton effect="pulse"></ug-skeleton>
        </div>
    `, this.noResultsPlaceholder = p`
        <div class="default-empty-results-placeholder">
            No items found
        </div>
    `;
  }
  updated(e) {
    super.updated(e), this.popupVisible && this.show();
  }
  handleUgInput(e) {
    const { value: o } = e.target;
    this.hasFocus = !0, this.value = o, this.dispatchEvent(new CustomEvent("ug-search", { bubbles: !0 }));
  }
  handleInputBlur() {
    this.dropdown.open || (this.hasFocus = !1, console.info("Blur input. window was not open, so focus becomes false", this.dropdown.open));
  }
  handleUgSelect(e) {
    let o = e.detail.item;
    console.info("menuitem selected", o), this.dispatchEvent(new CustomEvent("ug-selected", o)), this.hasFocus = !1;
  }
  handleKeydown(e) {
    if (!this.shouldDisplayAutoComplete || e.ctrlKey || e.metaKey)
      return;
    const o = this.visibleOptions;
    if (o.length === 0)
      return;
    const r = o[0], l = o[o.length - 1];
    switch (e.key) {
      case "Tab":
      case "Escape":
        this.hasFocus = !1;
        break;
      case "ArrowDown":
        e.preventDefault(), this.menu.setCurrentItem(r), r.focus();
        break;
      case "ArrowUp":
        e.preventDefault(), this.menu.setCurrentItem(l), l.focus();
        break;
    }
    this.hasFocus || setTimeout(() => {
    }, 500);
  }
  handleUgFocus(e) {
    console.info("handleUgFocus", event), this.value.length >= this.threshold && (this.hasFocus = !0, this.show(), console.info("searching ", e), this.dispatchEvent(new CustomEvent("ug-autocomplete-search")));
  }
  handleUgAfterHide(e) {
  }
  show() {
    var e;
    (e = this.dropdown) == null || e.show(), console.trace("autocomplete: dropdown was shown"), this.dispatchEvent(new CustomEvent("ug-autocomplete-show"));
  }
  hide() {
    var e;
    (e = this.dropdown) == null || e.hide(), console.trace("autocomplete: dropdown was hidden()"), this.dispatchEvent(new CustomEvent("ug-autocomplete-hidden"));
  }
  reset() {
    this.value = "";
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
  get shouldDisplayLoadingText() {
    return this.loading && (this.loadingPlaceholder || this.hasNamedSlot("loading-placeholder"));
  }
  get shouldDisplayEmptyText() {
    return !this.hasResults && !this.loading && (this.noResultsPlaceholder || this.hasNamedSlot("no-results-placeholder"));
  }
  get shouldDisplayTrigger() {
    return !this.hasFocus;
  }
  get shouldDisplayInput() {
    return this.hasFocus;
  }
  get shouldDisplayAutoComplete() {
    return this.hasFocus && (this.value.length >= this.threshold && this.hasResults || this.shouldDisplayLoadingText || this.shouldDisplayEmptyText);
  }
  hasNamedSlot(e) {
    return this.querySelector(`:scope > [slot="${e}"]`) !== null;
  }
  handleTriggerFocus() {
    this.handleTriggerClick();
  }
  handleTriggerClick() {
    this.hasFocus = !0, setTimeout(() => {
      this.input.focus();
    });
  }
  handleTriggerKeydown(e) {
    (e.key === "Enter" || e.key === " ") && (this.handleTriggerClick(), e.preventDefault());
  }
  render() {
    const { shouldDisplayLoadingText: e } = this;
    return p`
            <label>${this.label}</label>
            <div part="base" class="base">
                <div class="control control--${this.size}">
                    <input style="${n({ display: this.shouldDisplayInput ? "block" : "none" })}"
                           @ug-focus=${this.handleUgFocus}
                           @input=${this.handleUgInput}
                           @blur=${this.handleInputBlur}
                           @keydown=${this.handleKeydown}
                    >

                    <div tabindex="0" class="trigger"
                         style="${n({ display: this.shouldDisplayTrigger ? "flex" : "none" })}"
                         @click="${this.handleTriggerClick}"
                         @focus="${this.handleTriggerFocus}"
                    >
                        <slot name="trigger"></slot>
                    </div>

                    <ug-dropdown ?open=${this.shouldDisplayAutoComplete} @ug-after-hide=${this.handleUgAfterHide}>
                        <ug-menu @ug-select="${this.handleUgSelect}">
                            <slot
                                    style="${n({ display: e ? "none" : "block" })}"
                            >
                            </slot>

                            <div
                                    part="loading-placeholder"
                                    id="loading-placeholder"
                                    class="loading-placeholder"
                                    aria-hidden=${e ? "false" : "true"}
                                    style="${n({ display: e ? "block" : "none" })}"
                            >
                                <slot name="loading-placeholder"> ${this.loadingPlaceholder}</slot>
                            </div>

                            <div
                                    part="empty-text"
                                    id="empty-text"
                                    class="empty-text"
                                    aria-hidden=${this.shouldDisplayEmptyText ? "false" : "true"}
                                    style="${n({ display: this.shouldDisplayEmptyText ? "block" : "none" })}"
                            >
                                <slot name="empty-text">${this.noResultsPlaceholder}</slot>
                            </div>

                            <div aria-hidden="true" style=${n({ width: `${this.clientWidth}px` })}></div>
                        </ug-menu>
                    </ug-dropdown>
                </div>
        `;
  }
};
t.styles = $;
t.dependencies = {
  "ug-skeleton": x,
  "ug-input": v,
  "ug-menu": y,
  "ug-menu-item": w,
  "ug-dropdown": b,
  "ug-textarea": k
};
s([
  u("ug-menu")
], t.prototype, "menu", 2);
s([
  u("ug-dropdown")
], t.prototype, "dropdown", 2);
s([
  u("slot:not([name])")
], t.prototype, "defaultSlot", 2);
s([
  u(".control input")
], t.prototype, "input", 2);
s([
  u(".control .trigger")
], t.prototype, "trigger", 2);
s([
  c()
], t.prototype, "value", 2);
s([
  c()
], t.prototype, "hasFocus", 2);
s([
  a({ type: Boolean, reflect: !0 })
], t.prototype, "loading", 2);
s([
  a({ reflect: !0, type: String })
], t.prototype, "size", 2);
s([
  a({ type: Boolean })
], t.prototype, "popupVisible", 2);
s([
  a({ type: Number, reflect: !0 })
], t.prototype, "threshold", 2);
s([
  a({ type: String, reflect: !0 })
], t.prototype, "label", 2);
t = s([
  f("ug-autocomplete")
], t);
export {
  t as default
};
