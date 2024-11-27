import { i as a, S as l, _ as i, n as r } from "./chunk.UYAO2JRR.js";
import { S as u } from "./chunk.E6QAPUBK.js";
import { c } from "./chunk.TUVJKY7S.js";
import { e as d } from "./class-map.js";
import { i as n, u as b } from "./static.js";
import { o as e } from "./if-defined.js";
import { r as p } from "./state.js";
import { e as h } from "./query.js";
var f = a`
  :host {
    display: inline-block;
    color: var(--ug-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--ug-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--ug-spacing-x-small);
    cursor: pointer;
    transition: var(--ug-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--ug-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--ug-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--ug-focus-ring);
    outline-offset: var(--ug-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`, t = class extends l {
  constructor() {
    super(...arguments), this.hasFocus = !1, this.label = "", this.disabled = !1;
  }
  handleBlur() {
    this.hasFocus = !1, this.emit("ug-blur");
  }
  handleFocus() {
    this.hasFocus = !0, this.emit("ug-focus");
  }
  handleClick(o) {
    this.disabled && (o.preventDefault(), o.stopPropagation());
  }
  /** Simulates a click on the icon button. */
  click() {
    this.button.click();
  }
  /** Sets focus on the icon button. */
  focus(o) {
    this.button.focus(o);
  }
  /** Removes focus from the icon button. */
  blur() {
    this.button.blur();
  }
  render() {
    const o = !!this.href, s = o ? n`a` : n`button`;
    return b`
      <${s}
        part="base"
        class=${d({
      "icon-button": !0,
      "icon-button--disabled": !o && this.disabled,
      "icon-button--focused": this.hasFocus
    })}
        ?disabled=${e(o ? void 0 : this.disabled)}
        type=${e(o ? void 0 : "button")}
        href=${e(o ? this.href : void 0)}
        target=${e(o ? this.target : void 0)}
        download=${e(o ? this.download : void 0)}
        rel=${e(o && this.target ? "noreferrer noopener" : void 0)}
        role=${e(o ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-label="${this.label}"
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <ug-icon
          class="icon-button__icon"
          name=${e(this.name)}
          library=${e(this.library)}
          src=${e(this.src)}
          aria-hidden="true"
        ></ug-icon>
      </${s}>
    `;
  }
};
t.styles = [c, f];
t.dependencies = { "ug-icon": u };
i([
  h(".icon-button")
], t.prototype, "button", 2);
i([
  p()
], t.prototype, "hasFocus", 2);
i([
  r()
], t.prototype, "name", 2);
i([
  r()
], t.prototype, "library", 2);
i([
  r()
], t.prototype, "src", 2);
i([
  r()
], t.prototype, "href", 2);
i([
  r()
], t.prototype, "target", 2);
i([
  r()
], t.prototype, "download", 2);
i([
  r()
], t.prototype, "label", 2);
i([
  r({ type: Boolean, reflect: !0 })
], t.prototype, "disabled", 2);
export {
  t as S
};
