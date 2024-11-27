import { i as h, S as d, x as m, _ as c, n as u, t as f } from "../../chunks/chunk.UYAO2JRR.js";
import { w as v } from "../../chunks/chunk.CCJUT23E.js";
import { c as y } from "../../chunks/chunk.TUVJKY7S.js";
var _ = h`
  :host {
    display: block;
  }
`, n = /* @__PURE__ */ new Map();
function w(t, e = "cors") {
  const r = n.get(t);
  if (r !== void 0)
    return Promise.resolve(r);
  const o = fetch(t, { mode: e }).then(async (s) => {
    const a = {
      ok: s.ok,
      status: s.status,
      html: await s.text()
    };
    return n.set(t, a), a;
  });
  return n.set(t, o), o;
}
var l = class extends d {
  constructor() {
    super(...arguments), this.mode = "cors", this.allowScripts = !1;
  }
  executeScript(t) {
    const e = document.createElement("script");
    [...t.attributes].forEach((r) => e.setAttribute(r.name, r.value)), e.textContent = t.textContent, t.parentNode.replaceChild(e, t);
  }
  async handleSrcChange() {
    try {
      const t = this.src, e = await w(t, this.mode);
      if (t !== this.src)
        return;
      if (!e.ok) {
        this.emit("ug-error", { detail: { status: e.status } });
        return;
      }
      this.innerHTML = e.html, this.allowScripts && [...this.querySelectorAll("script")].forEach((r) => this.executeScript(r)), this.emit("ug-load");
    } catch {
      this.emit("ug-error", { detail: { status: -1 } });
    }
  }
  render() {
    return m`<slot></slot>`;
  }
};
l.styles = [y, _];
c([
  u()
], l.prototype, "src", 2);
c([
  u()
], l.prototype, "mode", 2);
c([
  u({ attribute: "allow-scripts", type: Boolean })
], l.prototype, "allowScripts", 2);
c([
  v("src")
], l.prototype, "handleSrcChange", 1);
var S = Object.defineProperty, g = Object.getOwnPropertyDescriptor, x = (t, e, r, o) => {
  for (var s = o > 1 ? void 0 : o ? g(e, r) : e, a = t.length - 1, i; a >= 0; a--)
    (i = t[a]) && (s = (o ? i(e, r, s) : i(s)) || s);
  return o && s && S(e, r, s), s;
};
let p = class extends l {
};
p = x([
  f("ug-include")
], p);
export {
  p as UgInclude
};
