import { R as l } from "./chunk.NLWS5DN7.js";
import { e as u, i as c, t as d } from "./directive.js";
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o = "important", f = " !" + o, p = u(class extends c {
  constructor(r) {
    var e;
    if (super(r), r.type !== d.ATTRIBUTE || r.name !== "style" || ((e = r.strings) == null ? void 0 : e.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(r) {
    return Object.keys(r).reduce((e, s) => {
      const t = r[s];
      return t == null ? e : e + `${s = s.includes("-") ? s : s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${t};`;
    }, "");
  }
  update(r, [e]) {
    const { style: s } = r.element;
    if (this.ft === void 0) return this.ft = new Set(Object.keys(e)), this.render(e);
    for (const t of this.ft) e[t] == null && (this.ft.delete(t), t.includes("-") ? s.removeProperty(t) : s[t] = null);
    for (const t in e) {
      const n = e[t];
      if (n != null) {
        this.ft.add(t);
        const i = typeof n == "string" && n.endsWith(f);
        t.includes("-") || i ? s.setProperty(t, i ? n.slice(0, -11) : n, i ? o : "") : s[t] = n;
      }
    }
    return l;
  }
});
export {
  p as s
};