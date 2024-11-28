import { i as c, r as f, x as p, n as u, t as m } from "../../chunks/chunk.UYAO2JRR.js";
import { r as g } from "../../chunks/state.js";
import { e as d } from "../../chunks/query.js";
import { o as n } from "../../chunks/style-map.js";
import { UgMenu as b } from "../menu/index.js";
import { UgDropdown as y } from "../dropdown/index.js";
import { UgInput as v } from "../input/index.js";
import { UgMenuItem as w } from "../menu-item/index.js";
import { UgSkeleton as T } from "../skeleton/index.js";
import { UgTextarea as x } from "../textarea/index.js";
const $ = c`

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

    .control input:focus {
        outline: none;
    }

    .control input {
        flex: 1;
        text-indent: .5rem;
    }

    .control .trigger {
        flex: 1;
        display: flex;
        align-items: center;
        margin-left: 1rem;
        vertical-align: center;
        margin-top: auto;
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
var k = Object.defineProperty, E = Object.getOwnPropertyDescriptor, s = (e, i, l, o) => {
  for (var r = o > 1 ? void 0 : o ? E(i, l) : i, a = e.length - 1, h; a >= 0; a--)
    (h = e[a]) && (r = (o ? h(i, l, r) : h(r)) || r);
  return o && r && k(i, l, r), r;
};
let t = class extends f {
  constructor() {
    super(...arguments), this.hasFocus = !1, this.inputVisible = !1, this.loading = !1, this.size = "medium", this.dropdownVisible = !1, this.threshold = 1, this.label = null, this.searchTerm = null, this.loadingPlaceholder = p`
        <div class="default-loading">
            <ug-skeleton effect="pulse"></ug-skeleton>
            <ug-skeleton effect="pulse"></ug-skeleton>
            <ug-skeleton effect="pulse"></ug-skeleton>
        </div>
    `, this.noResultsPlaceholder = p`
        <div class="default-no-results">
            No items found
        </div>
    `;
  }
  updated(e) {
    super.updated(e), this.dropdownVisible && this.showDropdown(), this.searchTerm && (this.hasFocus = !0, this.inputVisible = !0);
  }
  handleSearchInput(e) {
    const { value: i } = e.target;
    this.searchTerm = i, this.meetsInputThreshold() && (this.showDropdown(), this.dispatchEvent(new CustomEvent("ug-search", { bubbles: !0, detail: i })));
  }
  handleInputBlur() {
    this.inputVisible ? this.dropdownVisible || (this.inputVisible = !1) : this.trigger.focus();
  }
  handleUgSelect(e) {
    let i = e.detail.item;
    this.dispatchEvent(new CustomEvent("ug-selected", { detail: i })), this.inputVisible = !1, this.searchTerm = "", this.hideDropdown(), setTimeout(() => {
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
    const i = this.visibleOptions;
    if (i.length === 0)
      return;
    const l = i[0], o = i[i.length - 1];
    switch (e.key) {
      case "Tab":
      case "ArrowDown":
        e.preventDefault(), this.menu.setCurrentItem(l), l.focus();
        break;
      case "ArrowUp":
        e.preventDefault(), this.menu.setCurrentItem(o), o.focus();
        break;
    }
  }
  meetsInputThreshold() {
    var e;
    return ((e = this.input.value) == null ? void 0 : e.length) >= this.threshold;
  }
  handleUgFocus(e) {
    console.info("handleUgFocus", event), this.meetsInputThreshold() && (this.hasFocus = !0, console.info("searching ", e), this.dispatchEvent(new CustomEvent("ug-autocomplete-search")));
  }
  handleUgAfterHide(e) {
    if (this.dropdownVisible) {
      this.dropdownVisible = !1, this.searchTerm = "", this.inputVisible = !1, this.dispatchEvent(new CustomEvent("ug-edit-cancelled")), this.hasFocus && setTimeout(() => {
        this.trigger.focus();
      });
      return;
    }
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
    (e.key === "Enter" || e.key === " ") && (this.handleTriggerClick(), e.preventDefault());
  }
  handleTriggerBlur() {
    this.inputVisible || (this.hasFocus = !1);
  }
  dispatchEvent(e) {
    return console.info("autocomplete is fires event", e), super.dispatchEvent(e);
  }
  render() {
    const { shouldDisplayLoadingText: e } = this;
    return p`
            <label>${this.label}</label>
            <div part="base" class="base">
                <div class="control control--${this.size}">
                    <input style="${n({ display: this.shouldDisplayInput ? "block" : "none" })}"
                           @ug-focus=${this.handleUgFocus}
                           @input=${this.handleSearchInput}
                           @blur=${this.handleInputBlur}
                           @keydown=${this.handleInputKeydown}
                           .value=${this.searchTerm}
                    >

                    <div tabindex="0" class="trigger"
                         style="${n({ display: this.shouldDisplayTrigger ? "flex" : "none" })}"
                         @click="${this.handleTriggerClick}"
                         @focus="${this.handleTriggerFocus}"
                         @keydown=${this.handleTriggerKeydown}
                         @blur=${this.handleTriggerBlur}
                    >
                        <slot name="trigger"></slot>
                    </div>

                    <ug-dropdown @ug-hide=${this.handleUgAfterHide}>
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
                                <slot name="loading"> ${this.loadingPlaceholder}</slot>
                            </div>

                            <div
                                    part="no-results"
                                    id="no-results"
                                    class="no-results"
                                    aria-hidden=${this.shouldDisplayEmptyText ? "false" : "true"}
                                    style="${n({ display: this.shouldDisplayEmptyText ? "block" : "none" })}"
                            >
                                <slot name="no-results">${this.noResultsPlaceholder}</slot>
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
  "ug-skeleton": T,
  "ug-input": v,
  "ug-menu": b,
  "ug-menu-item": w,
  "ug-dropdown": y,
  "ug-textarea": x
};
s([
  d("ug-menu")
], t.prototype, "menu", 2);
s([
  d("ug-dropdown")
], t.prototype, "dropdown", 2);
s([
  d("slot:not([name])")
], t.prototype, "defaultSlot", 2);
s([
  d(".control input")
], t.prototype, "input", 2);
s([
  d(".control .trigger")
], t.prototype, "trigger", 2);
s([
  g()
], t.prototype, "hasFocus", 2);
s([
  g()
], t.prototype, "inputVisible", 2);
s([
  u({ type: Boolean, reflect: !0 })
], t.prototype, "loading", 2);
s([
  u({ reflect: !0, type: String })
], t.prototype, "size", 2);
s([
  u({ type: Boolean })
], t.prototype, "dropdownVisible", 2);
s([
  u({ type: Number, reflect: !0 })
], t.prototype, "threshold", 2);
s([
  u({ type: String, reflect: !0 })
], t.prototype, "label", 2);
s([
  g()
], t.prototype, "searchTerm", 2);
t = s([
  m("ug-autocomplete")
], t);
export {
  t as UgAutocomplete
};
