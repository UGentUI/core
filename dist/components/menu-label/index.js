import { i as u, S as g, k as c, t as p } from "../../chunks/chunk.NLWS5DN7.js";
import { c as f } from "../../chunks/chunk.TUVJKY7S.js";
var m = u`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--ug-font-sans);
    font-size: var(--ug-font-size-small);
    font-weight: var(--ug-font-weight-semibold);
    line-height: var(--ug-line-height-normal);
    letter-spacing: var(--ug-letter-spacing-normal);
    color: var(--ug-color-neutral-500);
    padding: var(--ug-spacing-2x-small) var(--ug-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`, i = class extends g {
  render() {
    return c` <slot part="base" class="menu-label"></slot> `;
  }
};
i.styles = [f, m];
var v = Object.defineProperty, b = Object.getOwnPropertyDescriptor, _ = (n, l, s, a) => {
  for (var e = a > 1 ? void 0 : a ? b(l, s) : l, r = n.length - 1, t; r >= 0; r--)
    (t = n[r]) && (e = (a ? t(l, s, e) : t(e)) || e);
  return a && e && v(l, s, e), e;
};
let o = class extends i {
};
o = _([
  p("ug-menu-label")
], o);
export {
  o as UgMenuLabel
};
