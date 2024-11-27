import { i as Vt, S as jt, b as Yt, c as It, x as Rt, _ as x, n as A } from "./chunk.UYAO2JRR.js";
import { L as Xt } from "./chunk.WLV3FVBR.js";
import { c as qt } from "./chunk.TUVJKY7S.js";
import { e as Et } from "./class-map.js";
import { e as Tt } from "./query.js";
var Ut = Vt`
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
const I = Math.min, O = Math.max, st = Math.round, nt = Math.floor, F = (t) => ({
  x: t,
  y: t
}), Kt = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Gt = {
  start: "end",
  end: "start"
};
function dt(t, e, o) {
  return O(t, I(e, o));
}
function Z(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function X(t) {
  return t.split("-")[0];
}
function tt(t) {
  return t.split("-")[1];
}
function kt(t) {
  return t === "x" ? "y" : "x";
}
function yt(t) {
  return t === "y" ? "height" : "width";
}
function U(t) {
  return ["top", "bottom"].includes(X(t)) ? "y" : "x";
}
function wt(t) {
  return kt(U(t));
}
function Jt(t, e, o) {
  o === void 0 && (o = !1);
  const i = tt(t), n = wt(t), s = yt(n);
  let r = n === "x" ? i === (o ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return e.reference[s] > e.floating[s] && (r = at(r)), [r, at(r)];
}
function Qt(t) {
  const e = at(t);
  return [gt(t), e, gt(e)];
}
function gt(t) {
  return t.replace(/start|end/g, (e) => Gt[e]);
}
function Zt(t, e, o) {
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
function te(t, e, o, i) {
  const n = tt(t);
  let s = Zt(X(t), o === "start", i);
  return n && (s = s.map((r) => r + "-" + n), e && (s = s.concat(s.map(gt)))), s;
}
function at(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Kt[e]);
}
function ee(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function $t(t) {
  return typeof t != "number" ? ee(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function lt(t) {
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
function Ot(t, e, o) {
  let {
    reference: i,
    floating: n
  } = t;
  const s = U(e), r = wt(e), a = yt(r), l = X(e), c = s === "y", f = i.x + i.width / 2 - n.width / 2, u = i.y + i.height / 2 - n.height / 2, d = i[a] / 2 - n[a] / 2;
  let p;
  switch (l) {
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
      p[r] -= d * (o && c ? -1 : 1);
      break;
    case "end":
      p[r] += d * (o && c ? -1 : 1);
      break;
  }
  return p;
}
const oe = async (t, e, o) => {
  const {
    placement: i = "bottom",
    strategy: n = "absolute",
    middleware: s = [],
    platform: r
  } = o, a = s.filter(Boolean), l = await (r.isRTL == null ? void 0 : r.isRTL(e));
  let c = await r.getElementRects({
    reference: t,
    floating: e,
    strategy: n
  }), {
    x: f,
    y: u
  } = Ot(c, i, l), d = i, p = {}, h = 0;
  for (let g = 0; g < a.length; g++) {
    const {
      name: y,
      fn: m
    } = a[g], {
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
      rects: c,
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
    }, P && h <= 50 && (h++, typeof P == "object" && (P.placement && (d = P.placement), P.rects && (c = P.rects === !0 ? await r.getElementRects({
      reference: t,
      floating: e,
      strategy: n
    }) : P.rects), {
      x: f,
      y: u
    } = Ot(c, d, l)), g = -1);
  }
  return {
    x: f,
    y: u,
    placement: d,
    strategy: n,
    middlewareData: p
  };
};
async function bt(t, e) {
  var o;
  e === void 0 && (e = {});
  const {
    x: i,
    y: n,
    platform: s,
    rects: r,
    elements: a,
    strategy: l
  } = t, {
    boundary: c = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: u = "floating",
    altBoundary: d = !1,
    padding: p = 0
  } = Z(e, t), h = $t(p), y = a[d ? u === "floating" ? "reference" : "floating" : u], m = lt(await s.getClippingRect({
    element: (o = await (s.isElement == null ? void 0 : s.isElement(y))) == null || o ? y : y.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: f,
    strategy: l
  })), w = u === "floating" ? {
    x: i,
    y: n,
    width: r.floating.width,
    height: r.floating.height
  } : r.reference, b = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), R = await (s.isElement == null ? void 0 : s.isElement(b)) ? await (s.getScale == null ? void 0 : s.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, P = lt(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: w,
    offsetParent: b,
    strategy: l
  }) : w);
  return {
    top: (m.top - P.top + h.top) / R.y,
    bottom: (P.bottom - m.bottom + h.bottom) / R.y,
    left: (m.left - P.left + h.left) / R.x,
    right: (P.right - m.right + h.right) / R.x
  };
}
const ie = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: o,
      y: i,
      placement: n,
      rects: s,
      platform: r,
      elements: a,
      middlewareData: l
    } = e, {
      element: c,
      padding: f = 0
    } = Z(t, e) || {};
    if (c == null)
      return {};
    const u = $t(f), d = {
      x: o,
      y: i
    }, p = wt(n), h = yt(p), g = await r.getDimensions(c), y = p === "y", m = y ? "top" : "left", w = y ? "bottom" : "right", b = y ? "clientHeight" : "clientWidth", R = s.reference[h] + s.reference[p] - d[p] - s.floating[h], P = d[p] - s.reference[p], S = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c));
    let z = S ? S[b] : 0;
    (!z || !await (r.isElement == null ? void 0 : r.isElement(S))) && (z = a.floating[b] || s.floating[h]);
    const M = R / 2 - P / 2, $ = z / 2 - g[h] / 2 - 1, L = I(u[m], $), H = I(u[w], $), B = L, V = z - g[h] - H, E = z / 2 - g[h] / 2 + M, G = dt(B, E, V), W = !l.arrow && tt(n) != null && E !== G && s.reference[h] / 2 - (E < B ? L : H) - g[h] / 2 < 0, D = W ? E < B ? E - B : E - V : 0;
    return {
      [p]: d[p] + D,
      data: {
        [p]: G,
        centerOffset: E - G - D,
        ...W && {
          alignmentOffset: D
        }
      },
      reset: W
    };
  }
}), ne = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var o, i;
      const {
        placement: n,
        middlewareData: s,
        rects: r,
        initialPlacement: a,
        platform: l,
        elements: c
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
      const m = X(n), w = U(a), b = X(a) === a, R = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), P = d || (b || !g ? [at(a)] : Qt(a)), S = h !== "none";
      !d && S && P.push(...te(a, g, h, R));
      const z = [a, ...P], M = await bt(e, y), $ = [];
      let L = ((i = s.flip) == null ? void 0 : i.overflows) || [];
      if (f && $.push(M[m]), u) {
        const E = Jt(n, r, R);
        $.push(M[E[0]], M[E[1]]);
      }
      if (L = [...L, {
        placement: n,
        overflows: $
      }], !$.every((E) => E <= 0)) {
        var H, B;
        const E = (((H = s.flip) == null ? void 0 : H.index) || 0) + 1, G = z[E];
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
        let W = (B = L.filter((D) => D.overflows[0] <= 0).sort((D, j) => D.overflows[1] - j.overflows[1])[0]) == null ? void 0 : B.placement;
        if (!W)
          switch (p) {
            case "bestFit": {
              var V;
              const D = (V = L.filter((j) => {
                if (S) {
                  const Y = U(j.placement);
                  return Y === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  Y === "y";
                }
                return !0;
              }).map((j) => [j.placement, j.overflows.filter((Y) => Y > 0).reduce((Y, Ht) => Y + Ht, 0)]).sort((j, Y) => j[1] - Y[1])[0]) == null ? void 0 : V[0];
              D && (W = D);
              break;
            }
            case "initialPlacement":
              W = a;
              break;
          }
        if (n !== W)
          return {
            reset: {
              placement: W
            }
          };
      }
      return {};
    }
  };
};
async function re(t, e) {
  const {
    placement: o,
    platform: i,
    elements: n
  } = t, s = await (i.isRTL == null ? void 0 : i.isRTL(n.floating)), r = X(o), a = tt(o), l = U(o) === "y", c = ["left", "top"].includes(r) ? -1 : 1, f = s && l ? -1 : 1, u = Z(e, t);
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
  return a && typeof h == "number" && (p = a === "end" ? h * -1 : h), l ? {
    x: p * f,
    y: d * c
  } : {
    x: d * c,
    y: p * f
  };
}
const se = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var o, i;
      const {
        x: n,
        y: s,
        placement: r,
        middlewareData: a
      } = e, l = await re(e, t);
      return r === ((o = a.offset) == null ? void 0 : o.placement) && (i = a.arrow) != null && i.alignmentOffset ? {} : {
        x: n + l.x,
        y: s + l.y,
        data: {
          ...l,
          placement: r
        }
      };
    }
  };
}, ae = function(t) {
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
        limiter: a = {
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
        ...l
      } = Z(t, e), c = {
        x: o,
        y: i
      }, f = await bt(e, l), u = U(X(n)), d = kt(u);
      let p = c[d], h = c[u];
      if (s) {
        const y = d === "y" ? "top" : "left", m = d === "y" ? "bottom" : "right", w = p + f[y], b = p - f[m];
        p = dt(w, p, b);
      }
      if (r) {
        const y = u === "y" ? "top" : "left", m = u === "y" ? "bottom" : "right", w = h + f[y], b = h - f[m];
        h = dt(w, h, b);
      }
      const g = a.fn({
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
}, le = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      var o, i;
      const {
        placement: n,
        rects: s,
        platform: r,
        elements: a
      } = e, {
        apply: l = () => {
        },
        ...c
      } = Z(t, e), f = await bt(e, c), u = X(n), d = tt(n), p = U(n) === "y", {
        width: h,
        height: g
      } = s.floating;
      let y, m;
      u === "top" || u === "bottom" ? (y = u, m = d === (await (r.isRTL == null ? void 0 : r.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (m = u, y = d === "end" ? "top" : "bottom");
      const w = g - f.top - f.bottom, b = h - f.left - f.right, R = I(g - f[y], w), P = I(h - f[m], b), S = !e.middlewareData.shift;
      let z = R, M = P;
      if ((o = e.middlewareData.shift) != null && o.enabled.x && (M = b), (i = e.middlewareData.shift) != null && i.enabled.y && (z = w), S && !d) {
        const L = O(f.left, 0), H = O(f.right, 0), B = O(f.top, 0), V = O(f.bottom, 0);
        p ? M = h - 2 * (L !== 0 || H !== 0 ? L + H : O(f.left, f.right)) : z = g - 2 * (B !== 0 || V !== 0 ? B + V : O(f.top, f.bottom));
      }
      await l({
        ...e,
        availableWidth: M,
        availableHeight: z
      });
      const $ = await r.getDimensions(a.floating);
      return h !== $.width || g !== $.height ? {
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
  return Bt(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function C(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function _(t) {
  var e;
  return (e = (Bt(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Bt(t) {
  return ct() ? t instanceof Node || t instanceof C(t).Node : !1;
}
function T(t) {
  return ct() ? t instanceof Element || t instanceof C(t).Element : !1;
}
function N(t) {
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
function ce(t) {
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
function vt(t) {
  const e = xt(), o = T(t) ? k(t) : t;
  return o.transform !== "none" || o.perspective !== "none" || (o.containerType ? o.containerType !== "normal" : !1) || !e && (o.backdropFilter ? o.backdropFilter !== "none" : !1) || !e && (o.filter ? o.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((i) => (o.willChange || "").includes(i)) || ["paint", "layout", "strict", "content"].some((i) => (o.contain || "").includes(i));
}
function fe(t) {
  let e = q(t);
  for (; N(e) && !Q(e); ) {
    if (vt(e))
      return e;
    if (ft(e))
      return null;
    e = q(e);
  }
  return null;
}
function xt() {
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
    _(t)
  );
  return Ct(e) ? e.host : e;
}
function Dt(t) {
  const e = q(t);
  return Q(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : N(e) && it(e) ? e : Dt(e);
}
function ot(t, e, o) {
  var i;
  e === void 0 && (e = []), o === void 0 && (o = !0);
  const n = Dt(t), s = n === ((i = t.ownerDocument) == null ? void 0 : i.body), r = C(n);
  if (s) {
    const a = mt(r);
    return e.concat(r, r.visualViewport || [], it(n) ? n : [], a && o ? ot(a) : []);
  }
  return e.concat(n, ot(n, [], o));
}
function mt(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function Ft(t) {
  const e = k(t);
  let o = parseFloat(e.width) || 0, i = parseFloat(e.height) || 0;
  const n = N(t), s = n ? t.offsetWidth : o, r = n ? t.offsetHeight : i, a = st(o) !== s || st(i) !== r;
  return a && (o = s, i = r), {
    width: o,
    height: i,
    $: a
  };
}
function Pt(t) {
  return T(t) ? t : t.contextElement;
}
function J(t) {
  const e = Pt(t);
  if (!N(e))
    return F(1);
  const o = e.getBoundingClientRect(), {
    width: i,
    height: n,
    $: s
  } = Ft(e);
  let r = (s ? st(o.width) : o.width) / i, a = (s ? st(o.height) : o.height) / n;
  return (!r || !Number.isFinite(r)) && (r = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: r,
    y: a
  };
}
const pe = /* @__PURE__ */ F(0);
function Nt(t) {
  const e = C(t);
  return !xt() || !e.visualViewport ? pe : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function ue(t, e, o) {
  return e === void 0 && (e = !1), !o || e && o !== C(t) ? !1 : e;
}
function K(t, e, o, i) {
  e === void 0 && (e = !1), o === void 0 && (o = !1);
  const n = t.getBoundingClientRect(), s = Pt(t);
  let r = F(1);
  e && (i ? T(i) && (r = J(i)) : r = J(t));
  const a = ue(s, o, i) ? Nt(s) : F(0);
  let l = (n.left + a.x) / r.x, c = (n.top + a.y) / r.y, f = n.width / r.x, u = n.height / r.y;
  if (s) {
    const d = C(s), p = i && T(i) ? C(i) : i;
    let h = d, g = mt(h);
    for (; g && i && p !== h; ) {
      const y = J(g), m = g.getBoundingClientRect(), w = k(g), b = m.left + (g.clientLeft + parseFloat(w.paddingLeft)) * y.x, R = m.top + (g.clientTop + parseFloat(w.paddingTop)) * y.y;
      l *= y.x, c *= y.y, f *= y.x, u *= y.y, l += b, c += R, h = C(g), g = mt(h);
    }
  }
  return lt({
    width: f,
    height: u,
    x: l,
    y: c
  });
}
function At(t, e) {
  const o = pt(t).scrollLeft;
  return e ? e.left + o : K(_(t)).left + o;
}
function _t(t, e, o) {
  o === void 0 && (o = !1);
  const i = t.getBoundingClientRect(), n = i.left + e.scrollLeft - (o ? 0 : (
    // RTL <body> scrollbar.
    At(t, i)
  )), s = i.top + e.scrollTop;
  return {
    x: n,
    y: s
  };
}
function he(t) {
  let {
    elements: e,
    rect: o,
    offsetParent: i,
    strategy: n
  } = t;
  const s = n === "fixed", r = _(i), a = e ? ft(e.floating) : !1;
  if (i === r || a && s)
    return o;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = F(1);
  const f = F(0), u = N(i);
  if ((u || !u && !s) && ((et(i) !== "body" || it(r)) && (l = pt(i)), N(i))) {
    const p = K(i);
    c = J(i), f.x = p.x + i.clientLeft, f.y = p.y + i.clientTop;
  }
  const d = r && !u && !s ? _t(r, l, !0) : F(0);
  return {
    width: o.width * c.x,
    height: o.height * c.y,
    x: o.x * c.x - l.scrollLeft * c.x + f.x + d.x,
    y: o.y * c.y - l.scrollTop * c.y + f.y + d.y
  };
}
function de(t) {
  return Array.from(t.getClientRects());
}
function ge(t) {
  const e = _(t), o = pt(t), i = t.ownerDocument.body, n = O(e.scrollWidth, e.clientWidth, i.scrollWidth, i.clientWidth), s = O(e.scrollHeight, e.clientHeight, i.scrollHeight, i.clientHeight);
  let r = -o.scrollLeft + At(t);
  const a = -o.scrollTop;
  return k(i).direction === "rtl" && (r += O(e.clientWidth, i.clientWidth) - n), {
    width: n,
    height: s,
    x: r,
    y: a
  };
}
function me(t, e) {
  const o = C(t), i = _(t), n = o.visualViewport;
  let s = i.clientWidth, r = i.clientHeight, a = 0, l = 0;
  if (n) {
    s = n.width, r = n.height;
    const c = xt();
    (!c || c && e === "fixed") && (a = n.offsetLeft, l = n.offsetTop);
  }
  return {
    width: s,
    height: r,
    x: a,
    y: l
  };
}
function ye(t, e) {
  const o = K(t, !0, e === "fixed"), i = o.top + t.clientTop, n = o.left + t.clientLeft, s = N(t) ? J(t) : F(1), r = t.clientWidth * s.x, a = t.clientHeight * s.y, l = n * s.x, c = i * s.y;
  return {
    width: r,
    height: a,
    x: l,
    y: c
  };
}
function St(t, e, o) {
  let i;
  if (e === "viewport")
    i = me(t, o);
  else if (e === "document")
    i = ge(_(t));
  else if (T(e))
    i = ye(e, o);
  else {
    const n = Nt(t);
    i = {
      x: e.x - n.x,
      y: e.y - n.y,
      width: e.width,
      height: e.height
    };
  }
  return lt(i);
}
function Mt(t, e) {
  const o = q(t);
  return o === e || !T(o) || Q(o) ? !1 : k(o).position === "fixed" || Mt(o, e);
}
function we(t, e) {
  const o = e.get(t);
  if (o)
    return o;
  let i = ot(t, [], !1).filter((a) => T(a) && et(a) !== "body"), n = null;
  const s = k(t).position === "fixed";
  let r = s ? q(t) : t;
  for (; T(r) && !Q(r); ) {
    const a = k(r), l = vt(r);
    !l && a.position === "fixed" && (n = null), (s ? !l && !n : !l && a.position === "static" && !!n && ["absolute", "fixed"].includes(n.position) || it(r) && !l && Mt(t, r)) ? i = i.filter((f) => f !== r) : n = a, r = q(r);
  }
  return e.set(t, i), i;
}
function be(t) {
  let {
    element: e,
    boundary: o,
    rootBoundary: i,
    strategy: n
  } = t;
  const r = [...o === "clippingAncestors" ? ft(e) ? [] : we(e, this._c) : [].concat(o), i], a = r[0], l = r.reduce((c, f) => {
    const u = St(e, f, n);
    return c.top = O(u.top, c.top), c.right = I(u.right, c.right), c.bottom = I(u.bottom, c.bottom), c.left = O(u.left, c.left), c;
  }, St(e, a, n));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function ve(t) {
  const {
    width: e,
    height: o
  } = Ft(t);
  return {
    width: e,
    height: o
  };
}
function xe(t, e, o) {
  const i = N(e), n = _(e), s = o === "fixed", r = K(t, !0, s, e);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = F(0);
  if (i || !i && !s)
    if ((et(e) !== "body" || it(n)) && (a = pt(e)), i) {
      const d = K(e, !0, s, e);
      l.x = d.x + e.clientLeft, l.y = d.y + e.clientTop;
    } else n && (l.x = At(n));
  const c = n && !i && !s ? _t(n, a) : F(0), f = r.left + a.scrollLeft - l.x - c.x, u = r.top + a.scrollTop - l.y - c.y;
  return {
    x: f,
    y: u,
    width: r.width,
    height: r.height
  };
}
function ut(t) {
  return k(t).position === "static";
}
function zt(t, e) {
  if (!N(t) || k(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let o = t.offsetParent;
  return _(t) === o && (o = o.ownerDocument.body), o;
}
function Wt(t, e) {
  const o = C(t);
  if (ft(t))
    return o;
  if (!N(t)) {
    let n = q(t);
    for (; n && !Q(n); ) {
      if (T(n) && !ut(n))
        return n;
      n = q(n);
    }
    return o;
  }
  let i = zt(t, e);
  for (; i && ce(i) && ut(i); )
    i = zt(i, e);
  return i && Q(i) && ut(i) && !vt(i) ? o : i || fe(t) || o;
}
const Pe = async function(t) {
  const e = this.getOffsetParent || Wt, o = this.getDimensions, i = await o(t.floating);
  return {
    reference: xe(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: i.width,
      height: i.height
    }
  };
};
function Ae(t) {
  return k(t).direction === "rtl";
}
const rt = {
  convertOffsetParentRelativeRectToViewportRelativeRect: he,
  getDocumentElement: _,
  getClippingRect: be,
  getOffsetParent: Wt,
  getElementRects: Pe,
  getClientRects: de,
  getDimensions: ve,
  getScale: J,
  isElement: T,
  isRTL: Ae
};
function Re(t, e) {
  let o = null, i;
  const n = _(t);
  function s() {
    var a;
    clearTimeout(i), (a = o) == null || a.disconnect(), o = null;
  }
  function r(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), s();
    const {
      left: c,
      top: f,
      width: u,
      height: d
    } = t.getBoundingClientRect();
    if (a || e(), !u || !d)
      return;
    const p = nt(f), h = nt(n.clientWidth - (c + u)), g = nt(n.clientHeight - (f + d)), y = nt(c), w = {
      rootMargin: -p + "px " + -h + "px " + -g + "px " + -y + "px",
      threshold: O(0, I(1, l)) || 1
    };
    let b = !0;
    function R(P) {
      const S = P[0].intersectionRatio;
      if (S !== l) {
        if (!b)
          return r();
        S ? r(!1, S) : i = setTimeout(() => {
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
function Ee(t, e, o, i) {
  i === void 0 && (i = {});
  const {
    ancestorScroll: n = !0,
    ancestorResize: s = !0,
    elementResize: r = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = i, c = Pt(t), f = n || s ? [...c ? ot(c) : [], ...ot(e)] : [];
  f.forEach((m) => {
    n && m.addEventListener("scroll", o, {
      passive: !0
    }), s && m.addEventListener("resize", o);
  });
  const u = c && a ? Re(c, o) : null;
  let d = -1, p = null;
  r && (p = new ResizeObserver((m) => {
    let [w] = m;
    w && w.target === c && p && (p.unobserve(e), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var b;
      (b = p) == null || b.observe(e);
    })), o();
  }), c && !l && p.observe(c), p.observe(e));
  let h, g = l ? K(t) : null;
  l && y();
  function y() {
    const m = K(t);
    g && (m.x !== g.x || m.y !== g.y || m.width !== g.width || m.height !== g.height) && o(), g = m, h = requestAnimationFrame(y);
  }
  return o(), () => {
    var m;
    f.forEach((w) => {
      n && w.removeEventListener("scroll", o), s && w.removeEventListener("resize", o);
    }), u == null || u(), (m = p) == null || m.disconnect(), p = null, l && cancelAnimationFrame(h);
  };
}
const Oe = se, Ce = ae, Se = ne, Lt = le, ze = ie, Le = (t, e, o) => {
  const i = /* @__PURE__ */ new Map(), n = {
    platform: rt,
    ...o
  }, s = {
    ...n.platform,
    _c: i
  };
  return oe(t, e, {
    ...n,
    platform: s
  });
};
function Te(t) {
  return ke(t);
}
function ht(t) {
  return t.assignedSlot ? t.assignedSlot : t.parentNode instanceof ShadowRoot ? t.parentNode.host : t.parentNode;
}
function ke(t) {
  for (let e = t; e; e = ht(e)) if (e instanceof Element && getComputedStyle(e).display === "none") return null;
  for (let e = ht(t); e; e = ht(e)) {
    if (!(e instanceof Element)) continue;
    const o = getComputedStyle(e);
    if (o.display !== "contents" && (o.position !== "static" || o.filter !== "none" || e.tagName === "BODY"))
      return e;
  }
  return null;
}
function $e(t) {
  return t !== null && typeof t == "object" && "getBoundingClientRect" in t && ("contextElement" in t ? t instanceof Element : !0);
}
var v = class extends jt {
  constructor() {
    super(...arguments), this.localize = new Xt(this), this.active = !1, this.placement = "top", this.strategy = "absolute", this.distance = 0, this.skidding = 0, this.arrow = !1, this.arrowPlacement = "anchor", this.arrowPadding = 10, this.flip = !1, this.flipFallbackPlacements = "", this.flipFallbackStrategy = "best-fit", this.flipPadding = 0, this.shift = !1, this.shiftPadding = 0, this.autoSizePadding = 0, this.hoverBridge = !1, this.updateHoverBridge = () => {
      if (this.hoverBridge && this.anchorEl) {
        const t = this.anchorEl.getBoundingClientRect(), e = this.popup.getBoundingClientRect(), o = this.placement.includes("top") || this.placement.includes("bottom");
        let i = 0, n = 0, s = 0, r = 0, a = 0, l = 0, c = 0, f = 0;
        o ? t.top < e.top ? (i = t.left, n = t.bottom, s = t.right, r = t.bottom, a = e.left, l = e.top, c = e.right, f = e.top) : (i = e.left, n = e.bottom, s = e.right, r = e.bottom, a = t.left, l = t.top, c = t.right, f = t.top) : t.left < e.left ? (i = t.right, n = t.top, s = e.left, r = e.top, a = t.right, l = t.bottom, c = e.left, f = e.bottom) : (i = e.right, n = e.top, s = t.left, r = t.top, a = e.right, l = e.bottom, c = t.left, f = t.bottom), this.style.setProperty("--hover-bridge-top-left-x", `${i}px`), this.style.setProperty("--hover-bridge-top-left-y", `${n}px`), this.style.setProperty("--hover-bridge-top-right-x", `${s}px`), this.style.setProperty("--hover-bridge-top-right-y", `${r}px`), this.style.setProperty("--hover-bridge-bottom-left-x", `${a}px`), this.style.setProperty("--hover-bridge-bottom-left-y", `${l}px`), this.style.setProperty("--hover-bridge-bottom-right-x", `${c}px`), this.style.setProperty("--hover-bridge-bottom-right-y", `${f}px`);
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
    } else this.anchor instanceof Element || $e(this.anchor) ? this.anchorEl = this.anchor : this.anchorEl = this.querySelector('[slot="anchor"]');
    this.anchorEl instanceof HTMLSlotElement && (this.anchorEl = this.anchorEl.assignedElements({ flatten: !0 })[0]), this.anchorEl && this.active && this.start();
  }
  start() {
    this.anchorEl && (this.cleanup = Ee(this.anchorEl, this.popup, () => {
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
      Oe({ mainAxis: this.distance, crossAxis: this.skidding })
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
      Ce({
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
      ze({
        element: this.arrowEl,
        padding: this.arrowPadding
      })
    );
    const e = this.strategy === "absolute" ? (o) => rt.getOffsetParent(o, Te) : rt.getOffsetParent;
    Le(this.anchorEl, this.popup, {
      placement: this.placement,
      middleware: t,
      strategy: this.strategy,
      platform: Yt(It({}, rt), {
        getOffsetParent: e
      })
    }).then(({ x: o, y: i, middlewareData: n, placement: s }) => {
      const r = this.localize.dir() === "rtl", a = { top: "bottom", right: "left", bottom: "top", left: "right" }[s.split("-")[0]];
      if (this.setAttribute("data-current-placement", s), Object.assign(this.popup.style, {
        left: `${o}px`,
        top: `${i}px`
      }), this.arrow) {
        const l = n.arrow.x, c = n.arrow.y;
        let f = "", u = "", d = "", p = "";
        if (this.arrowPlacement === "start") {
          const h = typeof l == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          f = typeof c == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "", u = r ? h : "", p = r ? "" : h;
        } else if (this.arrowPlacement === "end") {
          const h = typeof l == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          u = r ? "" : h, p = r ? h : "", d = typeof c == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
        } else this.arrowPlacement === "center" ? (p = typeof l == "number" ? "calc(50% - var(--arrow-size-diagonal))" : "", f = typeof c == "number" ? "calc(50% - var(--arrow-size-diagonal))" : "") : (p = typeof l == "number" ? `${l}px` : "", f = typeof c == "number" ? `${c}px` : "");
        Object.assign(this.arrowEl.style, {
          top: f,
          right: u,
          bottom: d,
          left: p,
          [a]: "calc(var(--arrow-size-diagonal) * -1)"
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
v.styles = [qt, Ut];
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
