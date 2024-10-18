import { i as c, _ as d, n as u, S as p, k as f, t as v } from "../../chunks/chunk.NLWS5DN7.js";
import { c as _ } from "../../chunks/chunk.TUVJKY7S.js";
import { R as h } from "../../chunks/class-map.js";
var k = c`
  :host {
    --border-radius: var(--ug-border-radius-pill);
    --color: var(--ug-color-neutral-200);
    --sheen-color: var(--ug-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`, n = class extends p {
  constructor() {
    super(...arguments), this.effect = "none";
  }
  render() {
    return f`
      <div
        part="base"
        class=${h({
      skeleton: !0,
      "skeleton--pulse": this.effect === "pulse",
      "skeleton--sheen": this.effect === "sheen"
    })}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `;
  }
};
n.styles = [_, k];
d([
  u()
], n.prototype, "effect", 2);
var m = Object.defineProperty, g = Object.getOwnPropertyDescriptor, b = (i, o, s, r) => {
  for (var e = r > 1 ? void 0 : r ? g(o, s) : o, t = i.length - 1, a; t >= 0; t--)
    (a = i[t]) && (e = (r ? a(o, s, e) : a(e)) || e);
  return r && e && m(o, s, e), e;
};
let l = class extends n {
};
l = b([
  v("ug-skeleton")
], l);
export {
  l as UgSkeleton
};
