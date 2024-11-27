import { i as c, S as d, x as p, _ as n, n as u, t as b } from "../../chunks/chunk.UYAO2JRR.js";
import { c as v } from "../../chunks/chunk.TUVJKY7S.js";
import { e as m } from "../../chunks/class-map.js";
var f = c`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--ug-font-weight-semibold);
    letter-spacing: var(--ug-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--ug-border-radius-small);
    border: solid 1px var(--ug-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--ug-color-primary-600);
    color: var(--ug-color-neutral-0);
  }

  .badge--success {
    background-color: var(--ug-color-success-600);
    color: var(--ug-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--ug-color-neutral-600);
    color: var(--ug-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--ug-color-warning-600);
    color: var(--ug-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--ug-color-danger-600);
    color: var(--ug-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--ug-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--ug-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--ug-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--ug-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--ug-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--ug-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`, e = class extends d {
  constructor() {
    super(...arguments), this.variant = "primary", this.pill = !1, this.pulse = !1;
  }
  render() {
    return p`
      <span
        part="base"
        class=${m({
      badge: !0,
      "badge--primary": this.variant === "primary",
      "badge--success": this.variant === "success",
      "badge--neutral": this.variant === "neutral",
      "badge--warning": this.variant === "warning",
      "badge--danger": this.variant === "danger",
      "badge--pill": this.pill,
      "badge--pulse": this.pulse
    })}
        role="status"
      >
        <slot></slot>
      </span>
    `;
  }
};
e.styles = [v, f];
n([
  u({ reflect: !0 })
], e.prototype, "variant", 2);
n([
  u({ type: Boolean, reflect: !0 })
], e.prototype, "pill", 2);
n([
  u({ type: Boolean, reflect: !0 })
], e.prototype, "pulse", 2);
var h = Object.defineProperty, y = Object.getOwnPropertyDescriptor, w = (i, a, l, o) => {
  for (var r = o > 1 ? void 0 : o ? y(a, l) : a, s = i.length - 1, t; s >= 0; s--)
    (t = i[s]) && (r = (o ? t(a, l, r) : t(r)) || r);
  return o && r && h(a, l, r), r;
};
let g = class extends e {
};
g = w([
  b("ug-badge")
], g);
export {
  g as UgBadge
};
