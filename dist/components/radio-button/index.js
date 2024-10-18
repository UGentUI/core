import { b as d } from "../../chunks/chunk.MAQXLKQ7.js";
import { i as c, _ as e, n as i, S as b, t as f } from "../../chunks/chunk.NLWS5DN7.js";
import { H as m } from "../../chunks/chunk.NYIIDP5N.js";
import { w as _ } from "../../chunks/chunk.CCJUT23E.js";
import { c as y } from "../../chunks/chunk.TUVJKY7S.js";
import { R as x } from "../../chunks/class-map.js";
import { k as v } from "../../chunks/static.js";
import { t as g } from "../../chunks/if-defined.js";
import { r as w } from "../../chunks/state.js";
import { e as p } from "../../chunks/query.js";
var C = c`
  ${d}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`, t = class extends b {
  constructor() {
    super(...arguments), this.hasSlotController = new m(this, "[default]", "prefix", "suffix"), this.hasFocus = !1, this.checked = !1, this.disabled = !1, this.size = "medium", this.pill = !1;
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("role", "presentation");
  }
  handleBlur() {
    this.hasFocus = !1, this.emit("ug-blur");
  }
  handleClick(s) {
    if (this.disabled) {
      s.preventDefault(), s.stopPropagation();
      return;
    }
    this.checked = !0;
  }
  handleFocus() {
    this.hasFocus = !0, this.emit("ug-focus");
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  /** Sets focus on the radio button. */
  focus(s) {
    this.input.focus(s);
  }
  /** Removes focus from the radio button. */
  blur() {
    this.input.blur();
  }
  render() {
    return v`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked ? " button--checked" : ""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${x({
      button: !0,
      "button--default": !0,
      "button--small": this.size === "small",
      "button--medium": this.size === "medium",
      "button--large": this.size === "large",
      "button--checked": this.checked,
      "button--disabled": this.disabled,
      "button--focused": this.hasFocus,
      "button--outline": !0,
      "button--pill": this.pill,
      "button--has-label": this.hasSlotController.test("[default]"),
      "button--has-prefix": this.hasSlotController.test("prefix"),
      "button--has-suffix": this.hasSlotController.test("suffix")
    })}
          aria-disabled=${this.disabled}
          type="button"
          value=${g(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `;
  }
};
t.styles = [y, C];
e([
  p(".button")
], t.prototype, "input", 2);
e([
  p(".hidden-input")
], t.prototype, "hiddenInput", 2);
e([
  w()
], t.prototype, "hasFocus", 2);
e([
  i({ type: Boolean, reflect: !0 })
], t.prototype, "checked", 2);
e([
  i()
], t.prototype, "value", 2);
e([
  i({ type: Boolean, reflect: !0 })
], t.prototype, "disabled", 2);
e([
  i({ reflect: !0 })
], t.prototype, "size", 2);
e([
  i({ type: Boolean, reflect: !0 })
], t.prototype, "pill", 2);
e([
  _("disabled", { waitUntilFirstUpdate: !0 })
], t.prototype, "handleDisabledChange", 1);
var k = Object.defineProperty, $ = Object.getOwnPropertyDescriptor, F = (s, l, r, a) => {
  for (var o = a > 1 ? void 0 : a ? $(l, r) : l, u = s.length - 1, n; u >= 0; u--)
    (n = s[u]) && (o = (a ? n(l, r, o) : n(o)) || o);
  return a && o && k(l, r, o), o;
};
let h = class extends t {
};
h = F([
  f("ug-radio-button")
], h);
export {
  h as UgRadioButton
};
