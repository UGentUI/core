import { i as Ht, _ as x, n as A, S as Vt, b as jt, c as Yt, k as Rt } from "./chunk.NLWS5DN7.js";
import { c as Xt } from "./chunk.TUVJKY7S.js";
import { R as Et } from "./class-map.js";
import { e as Tt } from "./query.js";
var It = Ht`
  :host {
    --arrow-color: var(--ug-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--ug-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;
const Y = Math.min, S = Math.max, st = Math.round, nt = Math.floor, X = (t) => ({
  x: t,
  y: t
}), qt = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ut = {
  start: "end",
  end: "start"
};
function dt(t, e, o) {
  return S(t, Y(e, o));
}
function Z(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function I(t) {
  return t.split("-")[0];
}
function tt(t) {
  return t.split("-")[1];
}
function kt(t) {
  return t === "x" ? "y" : "x";
}
function wt(t) {
  return t === "y" ? "height" : "width";
}
function U(t) {
  return ["top", "bottom"].includes(I(t)) ? "y" : "x";
}
function bt(t) {
  return kt(U(t));
}
function Kt(t, e, o) {
  o === void 0 && (o = !1);
  const i = tt(t), n = bt(t), s = wt(n);
  let r = n === "x" ? i === (o ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return e.reference[s] > e.floating[s] && (r = lt(r)), [r, lt(r)];
}
function Gt(t) {
  const e = lt(t);
  return [gt(t), e, gt(e)];
}
function gt(t) {
  return t.replace(/start|end/g, (e) => Ut[e]);
}
function Jt(t, e, o) {
  const i = ["left", "right"], n = ["right", "left"], s = ["top", "bottom"], r = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return o ? e ? n : i : e ? i : n;
    case "left":
    case "right":
      return e ? s : r;
    default:
      return [];
  }
}
function Qt(t, e, o, i) {
  const n = tt(t);
  let s = Jt(I(t), o === "start", i);
  return n && (s = s.map((r) => r + "-" + n), e && (s = s.concat(s.map(gt)))), s;
}
function lt(t) {
  return t.replace(/left|right|bottom|top/g, (e) => qt[e]);
}
function Zt(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Bt(t) {
  return typeof t != "number" ? Zt(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function at(t) {
  const {
    x: e,
    y: o,
    width: i,
    height: n
  } = t;
  return {
    width: i,
    height: n,
    top: o,
    left: e,
    right: e + i,
    bottom: o + n,
    x: e,
    y: o
  };
}
function St(t, e, o) {
  let {
    reference: i,
    floating: n
  } = t;
  const s = U(e), r = bt(e), l = wt(r), c = I(e), a = s === "y", f = i.x + i.width / 2 - n.width / 2, u = i.y + i.height / 2 - n.height / 2, d = i[l] / 2 - n[l] / 2;
  let p;
  switch (c) {
    case "top":
      p = {
        x: f,
        y: i.y - n.height
      };
      break;
    case "bottom":
      p = {
        x: f,
        y: i.y + i.height
      };
      break;
    case "right":
      p = {
        x: i.x + i.width,
        y: u
      };
      break;
    case "left":
      p = {
        x: i.x - n.width,
        y: u
      };
      break;
    default:
      p = {
        x: i.x,
        y: i.y
      };
  }
  switch (tt(e)) {
    case "start":
      p[r] -= d * (o && a ? -1 : 1);
      break;
    case "end":
      p[r] += d * (o && a ? -1 : 1);
      break;
  }
  return p;
}
const te = async (t, e, o) => {
  const {
    placement: i = "bottom",
    strategy: n = "absolute",
    middleware: s = [],
    platform: r
  } = o, l = s.filter(Boolean), c = await (r.isRTL == null ? void 0 : r.isRTL(e));
  let a = await r.getElementRects({
    reference: t,
    floating: e,
    strategy: n
  }), {
    x: f,
    y: u
  } = St(a, i, c), d = i, p = {}, h = 0;
  for (let g = 0; g < l.length; g++) {
    const {
      name: y,
      fn: m
    } = l[g], {
      x: w,
      y: b,
      data: R,
      reset: P
    } = await m({
      x: f,
      y: u,
      initialPlacement: i,
      placement: d,
      strategy: n,
      middlewareData: p,
      rects: a,
      platform: r,
      elements: {
        reference: t,
        floating: e
      }
    });
    f = w ?? f, u = b ?? u, p = {
      ...p,
      [y]: {
        ...p[y],
        ...R
      }
    }, P && h <= 50 && (h++, typeof P == "object" && (P.placement && (d = P.placement), P.rects && (a = P.rects === !0 ? await r.getElementRects({
      reference: t,
      floating: e,
      strategy: n
    }) : P.rects), {
      x: f,
      y: u
    } = St(a, d, c)), g = -1);
  }
  return {
    x: f,
    y: u,
    placement: d,
    strategy: n,
    middlewareData: p
  };
};
async function vt(t, e) {
  var o;
  e === void 0 && (e = {});
  const {
    x: i,
    y: n,
    platform: s,
    rects: r,
    elements: l,
    strategy: c
  } = t, {
    boundary: a = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: u = "floating",
    altBoundary: d = !1,
    padding: p = 0
  } = Z(e, t), h = Bt(p), y = l[d ? u === "floating" ? "reference" : "floating" : u], m = at(await s.getClippingRect({
    element: (o = await (s.isElement == null ? void 0 : s.isElement(y))) == null || o ? y : y.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(l.floating)),
    boundary: a,
    rootBoundary: f,
    strategy: c
  })), w = u === "floating" ? {
    x: i,
    y: n,
    width: r.floating.width,
    height: r.floating.height
  } : r.reference, b = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l.floating)), R = await (s.isElement == null ? void 0 : s.isElement(b)) ? await (s.getScale == null ? void 0 : s.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, P = at(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: w,
    offsetParent: b,
    strategy: c
  }) : w);
  return {
    top: (m.top - P.top + h.top) / R.y,
    bottom: (P.bottom - m.bottom + h.bottom) / R.y,
    left: (m.left - P.left + h.left) / R.x,
    right: (P.right - m.right + h.right) / R.x
  };
}
const ee = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: o,
      y: i,
      placement: n,
      rects: s,
      platform: r,
      elements: l,
      middlewareData: c
    } = e, {
      element: a,
      padding: f = 0
    } = Z(t, e) || {};
    if (a == null)
      return {};
    const u = Bt(f), d = {
      x: o,
      y: i
    }, p = bt(n), h = wt(p), g = await r.getDimensions(a), y = p === "y", m = y ? "top" : "left", w = y ? "bottom" : "right", b = y ? "clientHeight" : "clientWidth", R = s.reference[h] + s.reference[p] - d[p] - s.floating[h], P = d[p] - s.reference[p], O = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a));
    let z = O ? O[b] : 0;
    (!z || !await (r.isElement == null ? void 0 : r.isElement(O))) && (z = l.floating[b] || s.floating[h]);
    const _ = R / 2 - P / 2, B = z / 2 - g[h] / 2 - 1, L = Y(u[m], B), W = Y(u[w], B), $ = L, H = z - g[h] - W, E = z / 2 - g[h] / 2 + _, G = dt($, E, H), M = !c.arrow && tt(n) != null && E !== G && s.reference[h] / 2 - (E < $ ? L : W) - g[h] / 2 < 0, D = M ? E < $ ? E - $ : E - H : 0;
    return {
      [p]: d[p] + D,
      data: {
        [p]: G,
        centerOffset: E - G - D,
        ...M && {
          alignmentOffset: D
        }
      },
      reset: M
    };
  }
}), oe = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var o, i;
      const {
        placement: n,
        middlewareData: s,
        rects: r,
        initialPlacement: l,
        platform: c,
        elements: a
      } = e, {
        mainAxis: f = !0,
        crossAxis: u = !0,
        fallbackPlacements: d,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: g = !0,
        ...y
      } = Z(t, e);
      if ((o = s.arrow) != null && o.alignmentOffset)
        return {};
      const m = I(n), w = U(l), b = I(l) === l, R = await (c.isRTL == null ? void 0 : c.isRTL(a.floating)), P = d || (b || !g ? [lt(l)] : Gt(l)), O = h !== "none";
      !d && O && P.push(...Qt(l, g, h, R));
      const z = [l, ...P], _ = await vt(e, y), B = [];
      let L = ((i = s.flip) == null ? void 0 : i.overflows) || [];
      if (f && B.push(_[m]), u) {
        const E = Kt(n, r, R);
        B.push(_[E[0]], _[E[1]]);
      }
      if (L = [...L, {
        placement: n,
        overflows: B
      }], !B.every((E) => E <= 0)) {
        var W, $;
        const E = (((W = s.flip) == null ? void 0 : W.index) || 0) + 1, G = z[E];
        if (G)
          return {
            data: {
              index: E,
              overflows: L
            },
            reset: {
              placement: G
            }
          };
        let M = ($ = L.filter((D) => D.overflows[0] <= 0).sort((D, V) => D.overflows[1] - V.overflows[1])[0]) == null ? void 0 : $.placement;
        if (!M)
          switch (p) {
            case "bestFit": {
              var H;
              const D = (H = L.filter((V) => {
                if (O) {
                  const j = U(V.placement);
                  return j === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  j === "y";
                }
                return !0;
              }).map((V) => [V.placement, V.overflows.filter((j) => j > 0).reduce((j, Wt) => j + Wt, 0)]).sort((V, j) => V[1] - j[1])[0]) == null ? void 0 : H[0];
              D && (M = D);
              break;
            }
            case "initialPlacement":
              M = l;
              break;
          }
        if (n !== M)
          return {
            reset: {
              placement: M
            }
          };
      }
      return {};
    }
  };
};
async function ie(t, e) {
  const {
    placement: o,
    platform: i,
    elements: n
  } = t, s = await (i.isRTL == null ? void 0 : i.isRTL(n.floating)), r = I(o), l = tt(o), c = U(o) === "y", a = ["left", "top"].includes(r) ? -1 : 1, f = s && c ? -1 : 1, u = Z(e, t);
  let {
    mainAxis: d,
    crossAxis: p,
    alignmentAxis: h
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: u.mainAxis || 0,
    crossAxis: u.crossAxis || 0,
    alignmentAxis: u.alignmentAxis
  };
  return l && typeof h == "number" && (p = l === "end" ? h * -1 : h), c ? {
    x: p * f,
    y: d * a
  } : {
    x: d * a,
    y: p * f
  };
}
const ne = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var o, i;
      const {
        x: n,
        y: s,
        placement: r,
        middlewareData: l
      } = e, c = await ie(e, t);
      return r === ((o = l.offset) == null ? void 0 : o.placement) && (i = l.arrow) != null && i.alignmentOffset ? {} : {
        x: n + c.x,
        y: s + c.y,
        data: {
          ...c,
          placement: r
        }
      };
    }
  };
}, re = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: o,
        y: i,
        placement: n
      } = e, {
        mainAxis: s = !0,
        crossAxis: r = !1,
        limiter: l = {
          fn: (y) => {
            let {
              x: m,
              y: w
            } = y;
            return {
              x: m,
              y: w
            };
          }
        },
        ...c
      } = Z(t, e), a = {
        x: o,
        y: i
      }, f = await vt(e, c), u = U(I(n)), d = kt(u);
      let p = a[d], h = a[u];
      if (s) {
        const y = d === "y" ? "top" : "left", m = d === "y" ? "bottom" : "right", w = p + f[y], b = p - f[m];
        p = dt(w, p, b);
      }
      if (r) {
        const y = u === "y" ? "top" : "left", m = u === "y" ? "bottom" : "right", w = h + f[y], b = h - f[m];
        h = dt(w, h, b);
      }
      const g = l.fn({
        ...e,
        [d]: p,
        [u]: h
      });
      return {
        ...g,
        data: {
          x: g.x - o,
          y: g.y - i,
          enabled: {
            [d]: s,
            [u]: r
          }
        }
      };
    }
  };
}, se = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      var o, i;
      const {
        placement: n,
        rects: s,
        platform: r,
        elements: l
      } = e, {
        apply: c = () => {
        },
        ...a
      } = Z(t, e), f = await vt(e, a), u = I(n), d = tt(n), p = U(n) === "y", {
        width: h,
        height: g
      } = s.floating;
      let y, m;
      u === "top" || u === "bottom" ? (y = u, m = d === (await (r.isRTL == null ? void 0 : r.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (m = u, y = d === "end" ? "top" : "bottom");
      const w = g - f.top - f.bottom, b = h - f.left - f.right, R = Y(g - f[y], w), P = Y(h - f[m], b), O = !e.middlewareData.shift;
      let z = R, _ = P;
      if ((o = e.middlewareData.shift) != null && o.enabled.x && (_ = b), (i = e.middlewareData.shift) != null && i.enabled.y && (z = w), O && !d) {
        const L = S(f.left, 0), W = S(f.right, 0), $ = S(f.top, 0), H = S(f.bottom, 0);
        p ? _ = h - 2 * (L !== 0 || W !== 0 ? L + W : S(f.left, f.right)) : z = g - 2 * ($ !== 0 || H !== 0 ? $ + H : S(f.top, f.bottom));
      }
      await c({
        ...e,
        availableWidth: _,
        availableHeight: z
      });
      const B = await r.getDimensions(l.floating);
      return h !== B.width || g !== B.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ct() {
  return typeof window < "u";
}
function et(t) {
  return $t(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function C(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function N(t) {
  var e;
  return (e = ($t(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function $t(t) {
  return ct() ? t instanceof Node || t instanceof C(t).Node : !1;
}
function T(t) {
  return ct() ? t instanceof Element || t instanceof C(t).Element : !1;
}
function F(t) {
  return ct() ? t instanceof HTMLElement || t instanceof C(t).HTMLElement : !1;
}
function Ct(t) {
  return !ct() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof C(t).ShadowRoot;
}
function it(t) {
  const {
    overflow: e,
    overflowX: o,
    overflowY: i,
    display: n
  } = k(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + i + o) && !["inline", "contents"].includes(n);
}
function le(t) {
  return ["table", "td", "th"].includes(et(t));
}
function ft(t) {
  return [":popover-open", ":modal"].some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
function xt(t) {
  const e = Pt(), o = T(t) ? k(t) : t;
  return o.transform !== "none" || o.perspective !== "none" || (o.containerType ? o.containerType !== "normal" : !1) || !e && (o.backdropFilter ? o.backdropFilter !== "none" : !1) || !e && (o.filter ? o.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((i) => (o.willChange || "").includes(i)) || ["paint", "layout", "strict", "content"].some((i) => (o.contain || "").includes(i));
}
function ae(t) {
  let e = q(t);
  for (; F(e) && !Q(e); ) {
    if (xt(e))
      return e;
    if (ft(e))
      return null;
    e = q(e);
  }
  return null;
}
function Pt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Q(t) {
  return ["html", "body", "#document"].includes(et(t));
}
function k(t) {
  return C(t).getComputedStyle(t);
}
function pt(t) {
  return T(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function q(t) {
  if (et(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    Ct(t) && t.host || // Fallback.
    N(t)
  );
  return Ct(e) ? e.host : e;
}
function Dt(t) {
  const e = q(t);
  return Q(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : F(e) && it(e) ? e : Dt(e);
}
function ot(t, e, o) {
  var i;
  e === void 0 && (e = []), o === void 0 && (o = !0);
  const n = Dt(t), s = n === ((i = t.ownerDocument) == null ? void 0 : i.body), r = C(n);
  if (s) {
    const l = mt(r);
    return e.concat(r, r.visualViewport || [], it(n) ? n : [], l && o ? ot(l) : []);
  }
  return e.concat(n, ot(n, [], o));
}
function mt(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function Ft(t) {
  const e = k(t);
  let o = parseFloat(e.width) || 0, i = parseFloat(e.height) || 0;
  const n = F(t), s = n ? t.offsetWidth : o, r = n ? t.offsetHeight : i, l = st(o) !== s || st(i) !== r;
  return l && (o = s, i = r), {
    width: o,
    height: i,
    $: l
  };
}
function At(t) {
  return T(t) ? t : t.contextElement;
}
function J(t) {
  const e = At(t);
  if (!F(e))
    return X(1);
  const o = e.getBoundingClientRect(), {
    width: i,
    height: n,
    $: s
  } = Ft(e);
  let r = (s ? st(o.width) : o.width) / i, l = (s ? st(o.height) : o.height) / n;
  return (!r || !Number.isFinite(r)) && (r = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: r,
    y: l
  };
}
const ce = /* @__PURE__ */ X(0);
function Nt(t) {
  const e = C(t);
  return !Pt() || !e.visualViewport ? ce : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function fe(t, e, o) {
  return e === void 0 && (e = !1), !o || e && o !== C(t) ? !1 : e;
}
function K(t, e, o, i) {
  e === void 0 && (e = !1), o === void 0 && (o = !1);
  const n = t.getBoundingClientRect(), s = At(t);
  let r = X(1);
  e && (i ? T(i) && (r = J(i)) : r = J(t));
  const l = fe(s, o, i) ? Nt(s) : X(0);
  let c = (n.left + l.x) / r.x, a = (n.top + l.y) / r.y, f = n.width / r.x, u = n.height / r.y;
  if (s) {
    const d = C(s), p = i && T(i) ? C(i) : i;
    let h = d, g = mt(h);
    for (; g && i && p !== h; ) {
      const y = J(g), m = g.getBoundingClientRect(), w = k(g), b = m.left + (g.clientLeft + parseFloat(w.paddingLeft)) * y.x, R = m.top + (g.clientTop + parseFloat(w.paddingTop)) * y.y;
      c *= y.x, a *= y.y, f *= y.x, u *= y.y, c += b, a += R, h = C(g), g = mt(h);
    }
  }
  return at({
    width: f,
    height: u,
    x: c,
    y: a
  });
}
function pe(t) {
  let {
    elements: e,
    rect: o,
    offsetParent: i,
    strategy: n
  } = t;
  const s = n === "fixed", r = N(i), l = e ? ft(e.floating) : !1;
  if (i === r || l && s)
    return o;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = X(1);
  const f = X(0), u = F(i);
  if ((u || !u && !s) && ((et(i) !== "body" || it(r)) && (c = pt(i)), F(i))) {
    const d = K(i);
    a = J(i), f.x = d.x + i.clientLeft, f.y = d.y + i.clientTop;
  }
  return {
    width: o.width * a.x,
    height: o.height * a.y,
    x: o.x * a.x - c.scrollLeft * a.x + f.x,
    y: o.y * a.y - c.scrollTop * a.y + f.y
  };
}
function ue(t) {
  return Array.from(t.getClientRects());
}
function yt(t, e) {
  const o = pt(t).scrollLeft;
  return e ? e.left + o : K(N(t)).left + o;
}
function he(t) {
  const e = N(t), o = pt(t), i = t.ownerDocument.body, n = S(e.scrollWidth, e.clientWidth, i.scrollWidth, i.clientWidth), s = S(e.scrollHeight, e.clientHeight, i.scrollHeight, i.clientHeight);
  let r = -o.scrollLeft + yt(t);
  const l = -o.scrollTop;
  return k(i).direction === "rtl" && (r += S(e.clientWidth, i.clientWidth) - n), {
    width: n,
    height: s,
    x: r,
    y: l
  };
}
function de(t, e) {
  const o = C(t), i = N(t), n = o.visualViewport;
  let s = i.clientWidth, r = i.clientHeight, l = 0, c = 0;
  if (n) {
    s = n.width, r = n.height;
    const a = Pt();
    (!a || a && e === "fixed") && (l = n.offsetLeft, c = n.offsetTop);
  }
  return {
    width: s,
    height: r,
    x: l,
    y: c
  };
}
function ge(t, e) {
  const o = K(t, !0, e === "fixed"), i = o.top + t.clientTop, n = o.left + t.clientLeft, s = F(t) ? J(t) : X(1), r = t.clientWidth * s.x, l = t.clientHeight * s.y, c = n * s.x, a = i * s.y;
  return {
    width: r,
    height: l,
    x: c,
    y: a
  };
}
function Ot(t, e, o) {
  let i;
  if (e === "viewport")
    i = de(t, o);
  else if (e === "document")
    i = he(N(t));
  else if (T(e))
    i = ge(e, o);
  else {
    const n = Nt(t);
    i = {
      ...e,
      x: e.x - n.x,
      y: e.y - n.y
    };
  }
  return at(i);
}
function _t(t, e) {
  const o = q(t);
  return o === e || !T(o) || Q(o) ? !1 : k(o).position === "fixed" || _t(o, e);
}
function me(t, e) {
  const o = e.get(t);
  if (o)
    return o;
  let i = ot(t, [], !1).filter((l) => T(l) && et(l) !== "body"), n = null;
  const s = k(t).position === "fixed";
  let r = s ? q(t) : t;
  for (; T(r) && !Q(r); ) {
    const l = k(r), c = xt(r);
    !c && l.position === "fixed" && (n = null), (s ? !c && !n : !c && l.position === "static" && !!n && ["absolute", "fixed"].includes(n.position) || it(r) && !c && _t(t, r)) ? i = i.filter((f) => f !== r) : n = l, r = q(r);
  }
  return e.set(t, i), i;
}
function ye(t) {
  let {
    element: e,
    boundary: o,
    rootBoundary: i,
    strategy: n
  } = t;
  const r = [...o === "clippingAncestors" ? ft(e) ? [] : me(e, this._c) : [].concat(o), i], l = r[0], c = r.reduce((a, f) => {
    const u = Ot(e, f, n);
    return a.top = S(u.top, a.top), a.right = Y(u.right, a.right), a.bottom = Y(u.bottom, a.bottom), a.left = S(u.left, a.left), a;
  }, Ot(e, l, n));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function we(t) {
  const {
    width: e,
    height: o
  } = Ft(t);
  return {
    width: e,
    height: o
  };
}
function be(t, e, o) {
  const i = F(e), n = N(e), s = o === "fixed", r = K(t, !0, s, e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = X(0);
  if (i || !i && !s)
    if ((et(e) !== "body" || it(n)) && (l = pt(e)), i) {
      const p = K(e, !0, s, e);
      c.x = p.x + e.clientLeft, c.y = p.y + e.clientTop;
    } else n && (c.x = yt(n));
  let a = 0, f = 0;
  if (n && !i && !s) {
    const p = n.getBoundingClientRect();
    f = p.top + l.scrollTop, a = p.left + l.scrollLeft - // RTL <body> scrollbar.
    yt(n, p);
  }
  const u = r.left + l.scrollLeft - c.x - a, d = r.top + l.scrollTop - c.y - f;
  return {
    x: u,
    y: d,
    width: r.width,
    height: r.height
  };
}
function ut(t) {
  return k(t).position === "static";
}
function zt(t, e) {
  if (!F(t) || k(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let o = t.offsetParent;
  return N(t) === o && (o = o.ownerDocument.body), o;
}
function Mt(t, e) {
  const o = C(t);
  if (ft(t))
    return o;
  if (!F(t)) {
    let n = q(t);
    for (; n && !Q(n); ) {
      if (T(n) && !ut(n))
        return n;
      n = q(n);
    }
    return o;
  }
  let i = zt(t, e);
  for (; i && le(i) && ut(i); )
    i = zt(i, e);
  return i && Q(i) && ut(i) && !xt(i) ? o : i || ae(t) || o;
}
const ve = async function(t) {
  const e = this.getOffsetParent || Mt, o = this.getDimensions, i = await o(t.floating);
  return {
    reference: be(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: i.width,
      height: i.height
    }
  };
};
function xe(t) {
  return k(t).direction === "rtl";
}
const rt = {
  convertOffsetParentRelativeRectToViewportRelativeRect: pe,
  getDocumentElement: N,
  getClippingRect: ye,
  getOffsetParent: Mt,
  getElementRects: ve,
  getClientRects: ue,
  getDimensions: we,
  getScale: J,
  isElement: T,
  isRTL: xe
};
function Pe(t, e) {
  let o = null, i;
  const n = N(t);
  function s() {
    var l;
    clearTimeout(i), (l = o) == null || l.disconnect(), o = null;
  }
  function r(l, c) {
    l === void 0 && (l = !1), c === void 0 && (c = 1), s();
    const {
      left: a,
      top: f,
      width: u,
      height: d
    } = t.getBoundingClientRect();
    if (l || e(), !u || !d)
      return;
    const p = nt(f), h = nt(n.clientWidth - (a + u)), g = nt(n.clientHeight - (f + d)), y = nt(a), w = {
      rootMargin: -p + "px " + -h + "px " + -g + "px " + -y + "px",
      threshold: S(0, Y(1, c)) || 1
    };
    let b = !0;
    function R(P) {
      const O = P[0].intersectionRatio;
      if (O !== c) {
        if (!b)
          return r();
        O ? r(!1, O) : i = setTimeout(() => {
          r(!1, 1e-7);
        }, 1e3);
      }
      b = !1;
    }
    try {
      o = new IntersectionObserver(R, {
        ...w,
        // Handle <iframe>s
        root: n.ownerDocument
      });
    } catch {
      o = new IntersectionObserver(R, w);
    }
    o.observe(t);
  }
  return r(!0), s;
}
function Ae(t, e, o, i) {
  i === void 0 && (i = {});
  const {
    ancestorScroll: n = !0,
    ancestorResize: s = !0,
    elementResize: r = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = i, a = At(t), f = n || s ? [...a ? ot(a) : [], ...ot(e)] : [];
  f.forEach((m) => {
    n && m.addEventListener("scroll", o, {
      passive: !0
    }), s && m.addEventListener("resize", o);
  });
  const u = a && l ? Pe(a, o) : null;
  let d = -1, p = null;
  r && (p = new ResizeObserver((m) => {
    let [w] = m;
    w && w.target === a && p && (p.unobserve(e), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var b;
      (b = p) == null || b.observe(e);
    })), o();
  }), a && !c && p.observe(a), p.observe(e));
  let h, g = c ? K(t) : null;
  c && y();
  function y() {
    const m = K(t);
    g && (m.x !== g.x || m.y !== g.y || m.width !== g.width || m.height !== g.height) && o(), g = m, h = requestAnimationFrame(y);
  }
  return o(), () => {
    var m;
    f.forEach((w) => {
      n && w.removeEventListener("scroll", o), s && w.removeEventListener("resize", o);
    }), u == null || u(), (m = p) == null || m.disconnect(), p = null, c && cancelAnimationFrame(h);
  };
}
const Re = ne, Ee = re, Se = oe, Lt = se, Ce = ee, Oe = (t, e, o) => {
  const i = /* @__PURE__ */ new Map(), n = {
    platform: rt,
    ...o
  }, s = {
    ...n.platform,
    _c: i
  };
  return te(t, e, {
    ...n,
    platform: s
  });
};
function ze(t) {
  return Le(t);
}
function ht(t) {
  return t.assignedSlot ? t.assignedSlot : t.parentNode instanceof ShadowRoot ? t.parentNode.host : t.parentNode;
}
function Le(t) {
  for (let e = t; e; e = ht(e)) if (e instanceof Element && getComputedStyle(e).display === "none") return null;
  for (let e = ht(t); e; e = ht(e)) {
    if (!(e instanceof Element)) continue;
    const o = getComputedStyle(e);
    if (o.display !== "contents" && (o.position !== "static" || o.filter !== "none" || e.tagName === "BODY"))
      return e;
  }
  return null;
}
function Te(t) {
  return t !== null && typeof t == "object" && "getBoundingClientRect" in t && ("contextElement" in t ? t instanceof Element : !0);
}
var v = class extends Vt {
  constructor() {
    super(...arguments), this.active = !1, this.placement = "top", this.strategy = "absolute", this.distance = 0, this.skidding = 0, this.arrow = !1, this.arrowPlacement = "anchor", this.arrowPadding = 10, this.flip = !1, this.flipFallbackPlacements = "", this.flipFallbackStrategy = "best-fit", this.flipPadding = 0, this.shift = !1, this.shiftPadding = 0, this.autoSizePadding = 0, this.hoverBridge = !1, this.updateHoverBridge = () => {
      if (this.hoverBridge && this.anchorEl) {
        const t = this.anchorEl.getBoundingClientRect(), e = this.popup.getBoundingClientRect(), o = this.placement.includes("top") || this.placement.includes("bottom");
        let i = 0, n = 0, s = 0, r = 0, l = 0, c = 0, a = 0, f = 0;
        o ? t.top < e.top ? (i = t.left, n = t.bottom, s = t.right, r = t.bottom, l = e.left, c = e.top, a = e.right, f = e.top) : (i = e.left, n = e.bottom, s = e.right, r = e.bottom, l = t.left, c = t.top, a = t.right, f = t.top) : t.left < e.left ? (i = t.right, n = t.top, s = e.left, r = e.top, l = t.right, c = t.bottom, a = e.left, f = e.bottom) : (i = e.right, n = e.top, s = t.left, r = t.top, l = e.right, c = e.bottom, a = t.left, f = t.bottom), this.style.setProperty("--hover-bridge-top-left-x", `${i}px`), this.style.setProperty("--hover-bridge-top-left-y", `${n}px`), this.style.setProperty("--hover-bridge-top-right-x", `${s}px`), this.style.setProperty("--hover-bridge-top-right-y", `${r}px`), this.style.setProperty("--hover-bridge-bottom-left-x", `${l}px`), this.style.setProperty("--hover-bridge-bottom-left-y", `${c}px`), this.style.setProperty("--hover-bridge-bottom-right-x", `${a}px`), this.style.setProperty("--hover-bridge-bottom-right-y", `${f}px`);
      }
    };
  }
  async connectedCallback() {
    super.connectedCallback(), await this.updateComplete, this.start();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.stop();
  }
  async updated(t) {
    super.updated(t), t.has("active") && (this.active ? this.start() : this.stop()), t.has("anchor") && this.handleAnchorChange(), this.active && (await this.updateComplete, this.reposition());
  }
  async handleAnchorChange() {
    if (await this.stop(), this.anchor && typeof this.anchor == "string") {
      const t = this.getRootNode();
      this.anchorEl = t.getElementById(this.anchor);
    } else this.anchor instanceof Element || Te(this.anchor) ? this.anchorEl = this.anchor : this.anchorEl = this.querySelector('[slot="anchor"]');
    this.anchorEl instanceof HTMLSlotElement && (this.anchorEl = this.anchorEl.assignedElements({ flatten: !0 })[0]), this.anchorEl && this.active && this.start();
  }
  start() {
    this.anchorEl && (this.cleanup = Ae(this.anchorEl, this.popup, () => {
      this.reposition();
    }));
  }
  async stop() {
    return new Promise((t) => {
      this.cleanup ? (this.cleanup(), this.cleanup = void 0, this.removeAttribute("data-current-placement"), this.style.removeProperty("--auto-size-available-width"), this.style.removeProperty("--auto-size-available-height"), requestAnimationFrame(() => t())) : t();
    });
  }
  /** Forces the popup to recalculate and reposition itself. */
  reposition() {
    if (!this.active || !this.anchorEl)
      return;
    const t = [
      // The offset middleware goes first
      Re({ mainAxis: this.distance, crossAxis: this.skidding })
    ];
    this.sync ? t.push(
      Lt({
        apply: ({ rects: o }) => {
          const i = this.sync === "width" || this.sync === "both", n = this.sync === "height" || this.sync === "both";
          this.popup.style.width = i ? `${o.reference.width}px` : "", this.popup.style.height = n ? `${o.reference.height}px` : "";
        }
      })
    ) : (this.popup.style.width = "", this.popup.style.height = ""), this.flip && t.push(
      Se({
        boundary: this.flipBoundary,
        // @ts-expect-error - We're converting a string attribute to an array here
        fallbackPlacements: this.flipFallbackPlacements,
        fallbackStrategy: this.flipFallbackStrategy === "best-fit" ? "bestFit" : "initialPlacement",
        padding: this.flipPadding
      })
    ), this.shift && t.push(
      Ee({
        boundary: this.shiftBoundary,
        padding: this.shiftPadding
      })
    ), this.autoSize ? t.push(
      Lt({
        boundary: this.autoSizeBoundary,
        padding: this.autoSizePadding,
        apply: ({ availableWidth: o, availableHeight: i }) => {
          this.autoSize === "vertical" || this.autoSize === "both" ? this.style.setProperty("--auto-size-available-height", `${i}px`) : this.style.removeProperty("--auto-size-available-height"), this.autoSize === "horizontal" || this.autoSize === "both" ? this.style.setProperty("--auto-size-available-width", `${o}px`) : this.style.removeProperty("--auto-size-available-width");
        }
      })
    ) : (this.style.removeProperty("--auto-size-available-width"), this.style.removeProperty("--auto-size-available-height")), this.arrow && t.push(
      Ce({
        element: this.arrowEl,
        padding: this.arrowPadding
      })
    );
    const e = this.strategy === "absolute" ? (o) => rt.getOffsetParent(o, ze) : rt.getOffsetParent;
    Oe(this.anchorEl, this.popup, {
      placement: this.placement,
      middleware: t,
      strategy: this.strategy,
      platform: jt(Yt({}, rt), {
        getOffsetParent: e
      })
    }).then(({ x: o, y: i, middlewareData: n, placement: s }) => {
      const r = this.matches(":dir(rtl)"), l = { top: "bottom", right: "left", bottom: "top", left: "right" }[s.split("-")[0]];
      if (this.setAttribute("data-current-placement", s), Object.assign(this.popup.style, {
        left: `${o}px`,
        top: `${i}px`
      }), this.arrow) {
        const c = n.arrow.x, a = n.arrow.y;
        let f = "", u = "", d = "", p = "";
        if (this.arrowPlacement === "start") {
          const h = typeof c == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          f = typeof a == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "", u = r ? h : "", p = r ? "" : h;
        } else if (this.arrowPlacement === "end") {
          const h = typeof c == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          u = r ? "" : h, p = r ? h : "", d = typeof a == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
        } else this.arrowPlacement === "center" ? (p = typeof c == "number" ? "calc(50% - var(--arrow-size-diagonal))" : "", f = typeof a == "number" ? "calc(50% - var(--arrow-size-diagonal))" : "") : (p = typeof c == "number" ? `${c}px` : "", f = typeof a == "number" ? `${a}px` : "");
        Object.assign(this.arrowEl.style, {
          top: f,
          right: u,
          bottom: d,
          left: p,
          [l]: "calc(var(--arrow-size-diagonal) * -1)"
        });
      }
    }), requestAnimationFrame(() => this.updateHoverBridge()), this.emit("ug-reposition");
  }
  render() {
    return Rt`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Et({
      "popup-hover-bridge": !0,
      "popup-hover-bridge--visible": this.hoverBridge && this.active
    })}
      ></span>

      <div
        part="popup"
        class=${Et({
      popup: !0,
      "popup--active": this.active,
      "popup--fixed": this.strategy === "fixed",
      "popup--has-arrow": this.arrow
    })}
      >
        <slot></slot>
        ${this.arrow ? Rt`<div part="arrow" class="popup__arrow" role="presentation"></div>` : ""}
      </div>
    `;
  }
};
v.styles = [Xt, It];
x([
  Tt(".popup")
], v.prototype, "popup", 2);
x([
  Tt(".popup__arrow")
], v.prototype, "arrowEl", 2);
x([
  A()
], v.prototype, "anchor", 2);
x([
  A({ type: Boolean, reflect: !0 })
], v.prototype, "active", 2);
x([
  A({ reflect: !0 })
], v.prototype, "placement", 2);
x([
  A({ reflect: !0 })
], v.prototype, "strategy", 2);
x([
  A({ type: Number })
], v.prototype, "distance", 2);
x([
  A({ type: Number })
], v.prototype, "skidding", 2);
x([
  A({ type: Boolean })
], v.prototype, "arrow", 2);
x([
  A({ attribute: "arrow-placement" })
], v.prototype, "arrowPlacement", 2);
x([
  A({ attribute: "arrow-padding", type: Number })
], v.prototype, "arrowPadding", 2);
x([
  A({ type: Boolean })
], v.prototype, "flip", 2);
x([
  A({
    attribute: "flip-fallback-placements",
    converter: {
      fromAttribute: (t) => t.split(" ").map((e) => e.trim()).filter((e) => e !== ""),
      toAttribute: (t) => t.join(" ")
    }
  })
], v.prototype, "flipFallbackPlacements", 2);
x([
  A({ attribute: "flip-fallback-strategy" })
], v.prototype, "flipFallbackStrategy", 2);
x([
  A({ type: Object })
], v.prototype, "flipBoundary", 2);
x([
  A({ attribute: "flip-padding", type: Number })
], v.prototype, "flipPadding", 2);
x([
  A({ type: Boolean })
], v.prototype, "shift", 2);
x([
  A({ type: Object })
], v.prototype, "shiftBoundary", 2);
x([
  A({ attribute: "shift-padding", type: Number })
], v.prototype, "shiftPadding", 2);
x([
  A({ attribute: "auto-size" })
], v.prototype, "autoSize", 2);
x([
  A()
], v.prototype, "sync", 2);
x([
  A({ type: Object })
], v.prototype, "autoSizeBoundary", 2);
x([
  A({ attribute: "auto-size-padding", type: Number })
], v.prototype, "autoSizePadding", 2);
x([
  A({ attribute: "hover-bridge", type: Boolean })
], v.prototype, "hoverBridge", 2);
export {
  v as S
};
