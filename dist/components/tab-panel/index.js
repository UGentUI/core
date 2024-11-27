import { i as d, S as h, x as v, _ as i, n as c, t as b } from "../../chunks/chunk.UYAO2JRR.js";
import { w as u } from "../../chunks/chunk.CCJUT23E.js";
import { c as f } from "../../chunks/chunk.TUVJKY7S.js";
import { e as m } from "../../chunks/class-map.js";
var _ = d`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`, g = 0, e = class extends h {
  constructor() {
    super(...arguments), this.attrId = ++g, this.componentId = `ug-tab-panel-${this.attrId}`, this.name = "", this.active = !1;
  }
  connectedCallback() {
    super.connectedCallback(), this.id = this.id.length > 0 ? this.id : this.componentId, this.setAttribute("role", "tabpanel");
  }
  handleActiveChange() {
    this.setAttribute("aria-hidden", this.active ? "false" : "true");
  }
  render() {
    return v`
      <slot
        part="base"
        class=${m({
      "tab-panel": !0,
      "tab-panel--active": this.active
    })}
      ></slot>
    `;
  }
};
e.styles = [f, _];
i([
  c({ reflect: !0 })
], e.prototype, "name", 2);
i([
  c({ type: Boolean, reflect: !0 })
], e.prototype, "active", 2);
i([
  u("active")
], e.prototype, "handleActiveChange", 1);
var y = Object.defineProperty, C = Object.getOwnPropertyDescriptor, P = (o, a, r, s) => {
  for (var t = s > 1 ? void 0 : s ? C(a, r) : a, l = o.length - 1, n; l >= 0; l--)
    (n = o[l]) && (t = (s ? n(a, r, t) : n(t)) || t);
  return s && t && y(a, r, t), t;
};
let p = class extends e {
};
p = P([
  b("ug-tab-panel")
], p);
export {
  p as UgTabPanel
};
