import { i as g, S as m, x as d, _ as l, n, t as h } from "../../chunks/chunk.UYAO2JRR.js";
import { L as u } from "../../chunks/chunk.WLV3FVBR.js";
import { c as b } from "../../chunks/chunk.TUVJKY7S.js";
import { e as v } from "../../chunks/class-map.js";
import { o as f } from "../../chunks/if-defined.js";
import { o as _ } from "../../chunks/style-map.js";
var w = g`
  :host {
    --height: 1rem;
    --track-color: var(--ug-color-neutral-200);
    --indicator-color: var(--ug-color-primary-600);
    --label-color: var(--ug-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--ug-border-radius-pill);
    box-shadow: inset var(--ug-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--ug-font-sans);
    font-size: 12px;
    font-weight: var(--ug-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--ug-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`, e = class extends m {
  constructor() {
    super(...arguments), this.localize = new u(this), this.value = 0, this.indeterminate = !1, this.label = "";
  }
  render() {
    return d`
      <div
        part="base"
        class=${v({
      "progress-bar": !0,
      "progress-bar--indeterminate": this.indeterminate,
      "progress-bar--rtl": this.localize.dir() === "rtl"
    })}
        role="progressbar"
        title=${f(this.title)}
        aria-label=${this.label.length > 0 ? this.label : this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate ? 0 : this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${_({ width: `${this.value}%` })}>
          ${this.indeterminate ? "" : d` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `;
  }
};
e.styles = [b, w];
l([
  n({ type: Number, reflect: !0 })
], e.prototype, "value", 2);
l([
  n({ type: Boolean, reflect: !0 })
], e.prototype, "indeterminate", 2);
l([
  n()
], e.prototype, "label", 2);
var y = Object.defineProperty, x = Object.getOwnPropertyDescriptor, $ = (c, t, o, a) => {
  for (var r = a > 1 ? void 0 : a ? x(t, o) : t, i = c.length - 1, s; i >= 0; i--)
    (s = c[i]) && (r = (a ? s(t, o, r) : s(r)) || r);
  return a && r && y(t, o, r), r;
};
let p = class extends e {
};
p = $([
  h("ug-progress-bar")
], p);
export {
  p as UgProgressBar
};
