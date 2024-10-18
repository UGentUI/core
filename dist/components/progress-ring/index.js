import { i as d, _ as o, n as p, S as g, k as u, t as v } from "../../chunks/chunk.NLWS5DN7.js";
import { L as f } from "../../chunks/chunk.WLV3FVBR.js";
import { c as h } from "../../chunks/chunk.TUVJKY7S.js";
import { r as _ } from "../../chunks/state.js";
import { e as m } from "../../chunks/query.js";
var y = d`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--ug-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--ug-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`, a = class extends g {
  constructor() {
    super(...arguments), this.localize = new f(this), this.value = 0, this.label = "";
  }
  updated(s) {
    if (super.updated(s), s.has("value")) {
      const e = parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")), t = 2 * Math.PI * e, i = t - this.value / 100 * t;
      this.indicatorOffset = `${i}px`;
    }
  }
  render() {
    return u`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length > 0 ? this.label : this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value / 100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `;
  }
};
a.styles = [h, y];
o([
  m(".progress-ring__indicator")
], a.prototype, "indicator", 2);
o([
  _()
], a.prototype, "indicatorOffset", 2);
o([
  p({ type: Number, reflect: !0 })
], a.prototype, "value", 2);
o([
  p()
], a.prototype, "label", 2);
var b = Object.defineProperty, k = Object.getOwnPropertyDescriptor, w = (s, e, t, i) => {
  for (var r = i > 1 ? void 0 : i ? k(e, t) : e, c = s.length - 1, l; c >= 0; c--)
    (l = s[c]) && (r = (i ? l(e, t, r) : l(r)) || r);
  return i && r && b(e, t, r), r;
};
let n = class extends a {
};
n = w([
  v("ug-progress-ring")
], n);
export {
  n as UgProgressRing
};
