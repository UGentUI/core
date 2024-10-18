import { c as u } from "./chunk.NLWS5DN7.js";
function w(t, c) {
  const l = u({
    waitUntilFirstUpdate: !1
  }, c);
  return (a, o) => {
    const { update: r } = a, d = Array.isArray(t) ? t : [t];
    a.update = function(s) {
      d.forEach((f) => {
        const i = f;
        if (s.has(i)) {
          const e = s.get(i), n = this[i];
          e !== n && (!l.waitUntilFirstUpdate || this.hasUpdated) && this[o](e, n);
        }
      }), r.call(this, s);
    };
  };
}
export {
  w
};
