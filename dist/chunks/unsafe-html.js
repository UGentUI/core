import { D as e, R as s } from "./chunk.NLWS5DN7.js";
import { i as n, t as o, e as c } from "./directive.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class i extends n {
  constructor(t) {
    if (super(t), this.it = e, t.type !== o.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(t) {
    if (t === e || t == null) return this._t = void 0, this.it = t;
    if (t === s) return t;
    if (typeof t != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (t === this.it) return this._t;
    this.it = t;
    const r = [t];
    return r.raw = r, this._t = { _$litType$: this.constructor.resultType, strings: r, values: [] };
  }
}
i.directiveName = "unsafeHTML", i.resultType = 1;
const l = c(i);
export {
  l as a
};
