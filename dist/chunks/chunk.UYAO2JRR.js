var ot = Object.defineProperty, _t = Object.defineProperties, ft = Object.getOwnPropertyDescriptor, vt = Object.getOwnPropertyDescriptors, K = Object.getOwnPropertySymbols, yt = Object.prototype.hasOwnProperty, At = Object.prototype.propertyIsEnumerable, D = (r, t) => (t = Symbol[r]) ? t : Symbol.for("Symbol." + r), Z = (r, t, e) => t in r ? ot(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e, gt = (r, t) => {
  for (var e in t || (t = {}))
    yt.call(t, e) && Z(r, e, t[e]);
  if (K)
    for (var e of K(t))
      At.call(t, e) && Z(r, e, t[e]);
  return r;
}, Jt = (r, t) => _t(r, vt(t)), ht = (r, t, e, s) => {
  for (var i = s > 1 ? void 0 : s ? ft(t, e) : t, n = r.length - 1, o; n >= 0; n--)
    (o = r[n]) && (i = (s ? o(t, e, i) : o(i)) || i);
  return s && i && ot(t, e, i), i;
}, at = (r, t, e) => {
  if (!t.has(r))
    throw TypeError("Cannot " + e);
}, mt = (r, t, e) => (at(r, t, "read from private field"), t.get(r)), Et = (r, t, e) => {
  if (t.has(r))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(r) : t.set(r, e);
}, bt = (r, t, e, s) => (at(r, t, "write to private field"), t.set(r, e), e), St = function(r, t) {
  this[0] = r, this[1] = t;
}, Kt = (r) => {
  var t = r[D("asyncIterator")], e = !1, s, i = {};
  return t == null ? (t = r[D("iterator")](), s = (n) => i[n] = (o) => t[n](o)) : (t = t.call(r), s = (n) => i[n] = (o) => {
    if (e) {
      if (e = !1, n === "throw")
        throw o;
      return o;
    }
    return e = !0, {
      done: !1,
      value: new St(new Promise((a) => {
        var h = t[n](o);
        if (!(h instanceof Object))
          throw TypeError("Object expected");
        a(h);
      }), 1)
    };
  }), i[D("iterator")] = () => i, s("next"), "throw" in t ? s("throw") : i.throw = (n) => {
    throw n;
  }, "return" in t && s("return"), i;
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const H = globalThis, V = H.ShadowRoot && (H.ShadyCSS === void 0 || H.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, W = Symbol(), F = /* @__PURE__ */ new WeakMap();
let lt = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== W) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (V && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = F.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && F.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const wt = (r) => new lt(typeof r == "string" ? r : r + "", void 0, W), Ft = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((s, i, n) => s + ((o) => {
    if (o._$cssResult$ === !0) return o.cssText;
    if (typeof o == "number") return o;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + r[n + 1], r[0]);
  return new lt(e, r, W);
}, Pt = (r, t) => {
  if (V) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const s = document.createElement("style"), i = H.litNonce;
    i !== void 0 && s.setAttribute("nonce", i), s.textContent = e.cssText, r.appendChild(s);
  }
}, G = V ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules) e += s.cssText;
  return wt(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ct, defineProperty: Ot, getOwnPropertyDescriptor: xt, getOwnPropertyNames: Ut, getOwnPropertySymbols: Tt, getPrototypeOf: Ht } = Object, f = globalThis, Q = f.trustedTypes, Rt = Q ? Q.emptyScript : "", I = f.reactiveElementPolyfillSupport, S = (r, t) => r, M = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? Rt : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, t) {
  let e = r;
  switch (t) {
    case Boolean:
      e = r !== null;
      break;
    case Number:
      e = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(r);
      } catch {
        e = null;
      }
  }
  return e;
} }, q = (r, t) => !Ct(r, t), X = { attribute: !0, type: String, converter: M, reflect: !1, hasChanged: q };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), f.litPropertyMetadata ?? (f.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class g extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = X) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const s = Symbol(), i = this.getPropertyDescriptor(t, s, e);
      i !== void 0 && Ot(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    const { get: i, set: n } = xt(this.prototype, t) ?? { get() {
      return this[e];
    }, set(o) {
      this[e] = o;
    } };
    return { get() {
      return i == null ? void 0 : i.call(this);
    }, set(o) {
      const a = i == null ? void 0 : i.call(this);
      n.call(this, o), this.requestUpdate(t, a, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? X;
  }
  static _$Ei() {
    if (this.hasOwnProperty(S("elementProperties"))) return;
    const t = Ht(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(S("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(S("properties"))) {
      const e = this.properties, s = [...Ut(e), ...Tt(e)];
      for (const i of s) this.createProperty(i, e[i]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [s, i] of e) this.elementProperties.set(s, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, s] of this.elementProperties) {
      const i = this._$Eu(e, s);
      i !== void 0 && this._$Eh.set(i, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const i of s) e.unshift(G(i));
    } else t !== void 0 && e.push(G(t));
    return e;
  }
  static _$Eu(t, e) {
    const s = e.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const s of e.keys()) this.hasOwnProperty(s) && (t.set(s, this[s]), delete this[s]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Pt(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var s;
      return (s = e.hostConnected) == null ? void 0 : s.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var s;
      return (s = e.hostDisconnected) == null ? void 0 : s.call(e);
    });
  }
  attributeChangedCallback(t, e, s) {
    this._$AK(t, s);
  }
  _$EC(t, e) {
    var n;
    const s = this.constructor.elementProperties.get(t), i = this.constructor._$Eu(t, s);
    if (i !== void 0 && s.reflect === !0) {
      const o = (((n = s.converter) == null ? void 0 : n.toAttribute) !== void 0 ? s.converter : M).toAttribute(e, s.type);
      this._$Em = t, o == null ? this.removeAttribute(i) : this.setAttribute(i, o), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var n;
    const s = this.constructor, i = s._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const o = s.getPropertyOptions(i), a = typeof o.converter == "function" ? { fromAttribute: o.converter } : ((n = o.converter) == null ? void 0 : n.fromAttribute) !== void 0 ? o.converter : M;
      this._$Em = i, this[i] = a.fromAttribute(e, o.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, s) {
    if (t !== void 0) {
      if (s ?? (s = this.constructor.getPropertyOptions(t)), !(s.hasChanged ?? q)(this[t], e)) return;
      this.P(t, e, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, e, s) {
    this._$AL.has(t) || this._$AL.set(t, e), s.reflect === !0 && this._$Em !== t && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var s;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [n, o] of this._$Ep) this[n] = o;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [n, o] of i) o.wrapped !== !0 || this._$AL.has(n) || this[n] === void 0 || this.P(n, this[n], o);
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (s = this._$EO) == null || s.forEach((i) => {
        var n;
        return (n = i.hostUpdate) == null ? void 0 : n.call(i);
      }), this.update(e)) : this._$EU();
    } catch (i) {
      throw t = !1, this._$EU(), i;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((s) => {
      var i;
      return (i = s.hostUpdated) == null ? void 0 : i.call(s);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((e) => this._$EC(e, this[e]))), this._$EU();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
}
g.elementStyles = [], g.shadowRootOptions = { mode: "open" }, g[S("elementProperties")] = /* @__PURE__ */ new Map(), g[S("finalized")] = /* @__PURE__ */ new Map(), I == null || I({ ReactiveElement: g }), (f.reactiveElementVersions ?? (f.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w = globalThis, N = w.trustedTypes, Y = N ? N.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, ct = "$lit$", _ = `lit$${Math.random().toFixed(9).slice(2)}$`, dt = "?" + _, Mt = `<${dt}>`, A = document, C = () => A.createComment(""), O = (r) => r === null || typeof r != "object" && typeof r != "function", J = Array.isArray, Nt = (r) => J(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", z = `[ 	
\f\r]`, b = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, tt = /-->/g, et = />/g, v = RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), st = /'/g, it = /"/g, pt = /^(?:script|style|textarea|title)$/i, jt = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), Gt = jt(1), m = Symbol.for("lit-noChange"), d = Symbol.for("lit-nothing"), rt = /* @__PURE__ */ new WeakMap(), y = A.createTreeWalker(A, 129);
function ut(r, t) {
  if (!J(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Y !== void 0 ? Y.createHTML(t) : t;
}
const kt = (r, t) => {
  const e = r.length - 1, s = [];
  let i, n = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = b;
  for (let a = 0; a < e; a++) {
    const h = r[a];
    let c, p, l = -1, u = 0;
    for (; u < h.length && (o.lastIndex = u, p = o.exec(h), p !== null); ) u = o.lastIndex, o === b ? p[1] === "!--" ? o = tt : p[1] !== void 0 ? o = et : p[2] !== void 0 ? (pt.test(p[2]) && (i = RegExp("</" + p[2], "g")), o = v) : p[3] !== void 0 && (o = v) : o === v ? p[0] === ">" ? (o = i ?? b, l = -1) : p[1] === void 0 ? l = -2 : (l = o.lastIndex - p[2].length, c = p[1], o = p[3] === void 0 ? v : p[3] === '"' ? it : st) : o === it || o === st ? o = v : o === tt || o === et ? o = b : (o = v, i = void 0);
    const $ = o === v && r[a + 1].startsWith("/>") ? " " : "";
    n += o === b ? h + Mt : l >= 0 ? (s.push(c), h.slice(0, l) + ct + h.slice(l) + _ + $) : h + _ + (l === -2 ? a : $);
  }
  return [ut(r, n + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), s];
};
class x {
  constructor({ strings: t, _$litType$: e }, s) {
    let i;
    this.parts = [];
    let n = 0, o = 0;
    const a = t.length - 1, h = this.parts, [c, p] = kt(t, e);
    if (this.el = x.createElement(c, s), y.currentNode = this.el.content, e === 2 || e === 3) {
      const l = this.el.content.firstChild;
      l.replaceWith(...l.childNodes);
    }
    for (; (i = y.nextNode()) !== null && h.length < a; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const l of i.getAttributeNames()) if (l.endsWith(ct)) {
          const u = p[o++], $ = i.getAttribute(l).split(_), T = /([.?@])?(.*)/.exec(u);
          h.push({ type: 1, index: n, name: T[2], strings: $, ctor: T[1] === "." ? It : T[1] === "?" ? zt : T[1] === "@" ? Lt : j }), i.removeAttribute(l);
        } else l.startsWith(_) && (h.push({ type: 6, index: n }), i.removeAttribute(l));
        if (pt.test(i.tagName)) {
          const l = i.textContent.split(_), u = l.length - 1;
          if (u > 0) {
            i.textContent = N ? N.emptyScript : "";
            for (let $ = 0; $ < u; $++) i.append(l[$], C()), y.nextNode(), h.push({ type: 2, index: ++n });
            i.append(l[u], C());
          }
        }
      } else if (i.nodeType === 8) if (i.data === dt) h.push({ type: 2, index: n });
      else {
        let l = -1;
        for (; (l = i.data.indexOf(_, l + 1)) !== -1; ) h.push({ type: 7, index: n }), l += _.length - 1;
      }
      n++;
    }
  }
  static createElement(t, e) {
    const s = A.createElement("template");
    return s.innerHTML = t, s;
  }
}
function E(r, t, e = r, s) {
  var o, a;
  if (t === m) return t;
  let i = s !== void 0 ? (o = e._$Co) == null ? void 0 : o[s] : e._$Cl;
  const n = O(t) ? void 0 : t._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== n && ((a = i == null ? void 0 : i._$AO) == null || a.call(i, !1), n === void 0 ? i = void 0 : (i = new n(r), i._$AT(r, e, s)), s !== void 0 ? (e._$Co ?? (e._$Co = []))[s] = i : e._$Cl = i), i !== void 0 && (t = E(r, i._$AS(r, t.values), i, s)), t;
}
class Dt {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: s } = this._$AD, i = ((t == null ? void 0 : t.creationScope) ?? A).importNode(e, !0);
    y.currentNode = i;
    let n = y.nextNode(), o = 0, a = 0, h = s[0];
    for (; h !== void 0; ) {
      if (o === h.index) {
        let c;
        h.type === 2 ? c = new U(n, n.nextSibling, this, t) : h.type === 1 ? c = new h.ctor(n, h.name, h.strings, this, t) : h.type === 6 && (c = new Bt(n, this, t)), this._$AV.push(c), h = s[++a];
      }
      o !== (h == null ? void 0 : h.index) && (n = y.nextNode(), o++);
    }
    return y.currentNode = A, i;
  }
  p(t) {
    let e = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class U {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, s, i) {
    this.type = 2, this._$AH = d, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = i, this._$Cv = (i == null ? void 0 : i.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = E(this, t, e), O(t) ? t === d || t == null || t === "" ? (this._$AH !== d && this._$AR(), this._$AH = d) : t !== this._$AH && t !== m && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Nt(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== d && O(this._$AH) ? this._$AA.nextSibling.data = t : this.T(A.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var n;
    const { values: e, _$litType$: s } = t, i = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = x.createElement(ut(s.h, s.h[0]), this.options)), s);
    if (((n = this._$AH) == null ? void 0 : n._$AD) === i) this._$AH.p(e);
    else {
      const o = new Dt(i, this), a = o.u(this.options);
      o.p(e), this.T(a), this._$AH = o;
    }
  }
  _$AC(t) {
    let e = rt.get(t.strings);
    return e === void 0 && rt.set(t.strings, e = new x(t)), e;
  }
  k(t) {
    J(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, i = 0;
    for (const n of t) i === e.length ? e.push(s = new U(this.O(C()), this.O(C()), this, this.options)) : s = e[i], s._$AI(n), i++;
    i < e.length && (this._$AR(s && s._$AB.nextSibling, i), e.length = i);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var s;
    for ((s = this._$AP) == null ? void 0 : s.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const i = t.nextSibling;
      t.remove(), t = i;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class j {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, s, i, n) {
    this.type = 1, this._$AH = d, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = n, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = d;
  }
  _$AI(t, e = this, s, i) {
    const n = this.strings;
    let o = !1;
    if (n === void 0) t = E(this, t, e, 0), o = !O(t) || t !== this._$AH && t !== m, o && (this._$AH = t);
    else {
      const a = t;
      let h, c;
      for (t = n[0], h = 0; h < n.length - 1; h++) c = E(this, a[s + h], e, h), c === m && (c = this._$AH[h]), o || (o = !O(c) || c !== this._$AH[h]), c === d ? t = d : t !== d && (t += (c ?? "") + n[h + 1]), this._$AH[h] = c;
    }
    o && !i && this.j(t);
  }
  j(t) {
    t === d ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class It extends j {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === d ? void 0 : t;
  }
}
class zt extends j {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== d);
  }
}
class Lt extends j {
  constructor(t, e, s, i, n) {
    super(t, e, s, i, n), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = E(this, t, e, 0) ?? d) === m) return;
    const s = this._$AH, i = t === d && s !== d || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, n = t !== d && (s === d || i);
    i && this.element.removeEventListener(this.name, this, s), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Bt {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    E(this, t);
  }
}
const L = w.litHtmlPolyfillSupport;
L == null || L(x, U), (w.litHtmlVersions ?? (w.litHtmlVersions = [])).push("3.2.1");
const Vt = (r, t, e) => {
  const s = (e == null ? void 0 : e.renderBefore) ?? t;
  let i = s._$litPart$;
  if (i === void 0) {
    const n = (e == null ? void 0 : e.renderBefore) ?? null;
    s._$litPart$ = i = new U(t.insertBefore(C(), n), n, void 0, e ?? {});
  }
  return i._$AI(r), i;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let P = class extends g {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e;
    const t = super.createRenderRoot();
    return (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild), t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Vt(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return m;
  }
};
var nt;
P._$litElement$ = !0, P.finalized = !0, (nt = globalThis.litElementHydrateSupport) == null || nt.call(globalThis, { LitElement: P });
const B = globalThis.litElementPolyfillSupport;
B == null || B({ LitElement: P });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Xt = (r) => (t, e) => {
  e !== void 0 ? e.addInitializer(() => {
    customElements.define(r, t);
  }) : customElements.define(r, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Wt = { attribute: !0, type: String, converter: M, reflect: !1, hasChanged: q }, qt = (r = Wt, t, e) => {
  const { kind: s, metadata: i } = e;
  let n = globalThis.litPropertyMetadata.get(i);
  if (n === void 0 && globalThis.litPropertyMetadata.set(i, n = /* @__PURE__ */ new Map()), n.set(e.name, r), s === "accessor") {
    const { name: o } = e;
    return { set(a) {
      const h = t.get.call(this);
      t.set.call(this, a), this.requestUpdate(o, h, r);
    }, init(a) {
      return a !== void 0 && this.P(o, void 0, r), a;
    } };
  }
  if (s === "setter") {
    const { name: o } = e;
    return function(a) {
      const h = this[o];
      t.call(this, a), this.requestUpdate(o, h, r);
    };
  }
  throw Error("Unsupported decorator location: " + s);
};
function $t(r) {
  return (t, e) => typeof e == "object" ? qt(r, t, e) : ((s, i, n) => {
    const o = i.hasOwnProperty(n);
    return i.constructor.createProperty(n, o ? { ...s, wrapped: !0 } : s), o ? Object.getOwnPropertyDescriptor(i, n) : void 0;
  })(r, t, e);
}
var R, k = class extends P {
  constructor() {
    super(), Et(this, R, !1), this.initialReflectedProperties = /* @__PURE__ */ new Map(), Object.entries(this.constructor.dependencies).forEach(([r, t]) => {
      this.constructor.define(r, t);
    });
  }
  emit(r, t) {
    const e = new CustomEvent(r, gt({
      bubbles: !0,
      cancelable: !1,
      composed: !0,
      detail: {}
    }, t));
    return this.dispatchEvent(e), e;
  }
  /* eslint-enable */
  static define(r, t = this, e = {}) {
    const s = customElements.get(r);
    if (!s) {
      try {
        customElements.define(r, t, e);
      } catch {
        customElements.define(r, class extends t {
        }, e);
      }
      return;
    }
    let i = " (unknown version)", n = i;
    "version" in t && t.version && (i = " v" + t.version), "version" in s && s.version && (n = " v" + s.version), !(i && n && i === n) && console.warn(
      `Attempted to register <${r}>${i}, but <${r}>${n} has already been registered.`
    );
  }
  attributeChangedCallback(r, t, e) {
    mt(this, R) || (this.constructor.elementProperties.forEach(
      (s, i) => {
        s.reflect && this[i] != null && this.initialReflectedProperties.set(i, this[i]);
      }
    ), bt(this, R, !0)), super.attributeChangedCallback(r, t, e);
  }
  willUpdate(r) {
    super.willUpdate(r), this.initialReflectedProperties.forEach((t, e) => {
      r.has(e) && this[e] == null && (this[e] = t);
    });
  }
};
R = /* @__PURE__ */ new WeakMap();
k.version = "2.18.0";
k.dependencies = {};
ht([
  $t()
], k.prototype, "dir", 2);
ht([
  $t()
], k.prototype, "lang", 2);
export {
  d as E,
  k as S,
  m as T,
  ht as _,
  Kt as a,
  Jt as b,
  gt as c,
  Ft as i,
  $t as n,
  P as r,
  Xt as t,
  M as u,
  Gt as x
};
