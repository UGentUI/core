import { i as b, S as f, x as s, _ as a, n as p, t as c } from "../../chunks/chunk.UYAO2JRR.js";
import { H as h } from "../../chunks/chunk.NYIIDP5N.js";
import { w as g } from "../../chunks/chunk.CCJUT23E.js";
import { c as _ } from "../../chunks/chunk.TUVJKY7S.js";
import { e as y } from "../../chunks/class-map.js";
import { o as u } from "../../chunks/if-defined.js";
import { r as x } from "../../chunks/state.js";
import { e as v } from "../../chunks/query.js";
var w = b`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--ug-font-sans);
    font-size: var(--ug-font-size-small);
    font-weight: var(--ug-font-weight-semibold);
    color: var(--ug-color-neutral-600);
    line-height: var(--ug-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--ug-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--ug-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--ug-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--ug-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--ug-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--ug-focus-ring);
    outline-offset: var(--ug-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--ug-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--ug-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--ug-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`, e = class extends f {
  constructor() {
    super(...arguments), this.hasSlotController = new h(this, "prefix", "suffix"), this.renderType = "button", this.rel = "noreferrer noopener";
  }
  setRenderType() {
    const i = this.defaultSlot.assignedElements({ flatten: !0 }).filter((t) => t.tagName.toLowerCase() === "ug-dropdown").length > 0;
    if (this.href) {
      this.renderType = "link";
      return;
    }
    if (i) {
      this.renderType = "dropdown";
      return;
    }
    this.renderType = "button";
  }
  hrefChanged() {
    this.setRenderType();
  }
  handleSlotChange() {
    this.setRenderType();
  }
  render() {
    return s`
      <div
        part="base"
        class=${y({
      "breadcrumb-item": !0,
      "breadcrumb-item--has-prefix": this.hasSlotController.test("prefix"),
      "breadcrumb-item--has-suffix": this.hasSlotController.test("suffix")
    })}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType === "link" ? s`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${u(this.target ? this.target : void 0)}"
                rel=${u(this.target ? this.rel : void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            ` : ""}
        ${this.renderType === "button" ? s`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            ` : ""}
        ${this.renderType === "dropdown" ? s`
              <div part="label" class="breadcrumb-item__label breadcrumb-item__label--drop-down">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </div>
            ` : ""}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `;
  }
};
e.styles = [_, w];
a([
  v("slot:not([name])")
], e.prototype, "defaultSlot", 2);
a([
  x()
], e.prototype, "renderType", 2);
a([
  p()
], e.prototype, "href", 2);
a([
  p()
], e.prototype, "target", 2);
a([
  p()
], e.prototype, "rel", 2);
a([
  g("href", { waitUntilFirstUpdate: !0 })
], e.prototype, "hrefChanged", 1);
var C = Object.defineProperty, S = Object.getOwnPropertyDescriptor, $ = (i, t, l, o) => {
  for (var r = o > 1 ? void 0 : o ? S(t, l) : t, n = i.length - 1, m; n >= 0; n--)
    (m = i[n]) && (r = (o ? m(t, l, r) : m(r)) || r);
  return o && r && C(t, l, r), r;
};
let d = class extends e {
};
d = $([
  c("ug-breadcrumb-item")
], d);
export {
  d as UgBreadcrumbItem
};
