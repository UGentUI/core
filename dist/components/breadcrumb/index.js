import { i as u, S as d, x as h, _ as n, n as m, t as f } from "../../chunks/chunk.UYAO2JRR.js";
import { L as b } from "../../chunks/chunk.WLV3FVBR.js";
import { S as g } from "../../chunks/chunk.E6QAPUBK.js";
import { c as S } from "../../chunks/chunk.TUVJKY7S.js";
import { e as c } from "../../chunks/query.js";
var v = u`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`, l = class extends d {
  constructor() {
    super(...arguments), this.localize = new b(this), this.separatorDir = this.localize.dir(), this.label = "";
  }
  // Generates a clone of the separator element to use for each breadcrumb item
  getSeparator() {
    const e = this.separatorSlot.assignedElements({ flatten: !0 })[0].cloneNode(!0);
    return [e, ...e.querySelectorAll("[id]")].forEach((r) => r.removeAttribute("id")), e.setAttribute("data-default", ""), e.slot = "separator", e;
  }
  handleSlotChange() {
    const s = [...this.defaultSlot.assignedElements({ flatten: !0 })].filter(
      (e) => e.tagName.toLowerCase() === "ug-breadcrumb-item"
    );
    s.forEach((e, r) => {
      const t = e.querySelector('[slot="separator"]');
      t === null ? e.append(this.getSeparator()) : t.hasAttribute("data-default") && t.replaceWith(this.getSeparator()), r === s.length - 1 ? e.setAttribute("aria-current", "page") : e.removeAttribute("aria-current");
    });
  }
  render() {
    return this.separatorDir !== this.localize.dir() && (this.separatorDir = this.localize.dir(), this.updateComplete.then(() => this.handleSlotChange())), h`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <ug-icon name=${this.localize.dir() === "rtl" ? "chevron-left" : "chevron-right"} library="system"></ug-icon>
        </slot>
      </span>
    `;
  }
};
l.styles = [S, v];
l.dependencies = { "ug-icon": g };
n([
  c("slot")
], l.prototype, "defaultSlot", 2);
n([
  c('slot[name="separator"]')
], l.prototype, "separatorSlot", 2);
n([
  m()
], l.prototype, "label", 2);
var _ = Object.defineProperty, y = Object.getOwnPropertyDescriptor, C = (s, e, r, t) => {
  for (var a = t > 1 ? void 0 : t ? y(e, r) : e, o = s.length - 1, i; o >= 0; o--)
    (i = s[o]) && (a = (t ? i(e, r, a) : i(a)) || a);
  return t && a && _(e, r, a), a;
};
let p = class extends l {
};
p = C([
  f("ug-breadcrumb")
], p);
export {
  p as UgBreadcrumb
};
