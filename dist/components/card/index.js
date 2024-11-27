import { i as c, S as n, x as p, t as h } from "../../chunks/chunk.UYAO2JRR.js";
import { H as b } from "../../chunks/chunk.NYIIDP5N.js";
import { c as _ } from "../../chunks/chunk.TUVJKY7S.js";
import { e as g } from "../../chunks/class-map.js";
var m = c`
  :host {
    --border-color: var(--ug-color-neutral-200);
    --border-radius: var(--ug-border-radius-medium);
    --border-width: 1px;
    --padding: var(--ug-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--ug-panel-background-color);
    box-shadow: var(--ug-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`, i = class extends n {
  constructor() {
    super(...arguments), this.hasSlotController = new b(this, "footer", "header", "image");
  }
  render() {
    return p`
      <div
        part="base"
        class=${g({
      card: !0,
      "card--has-footer": this.hasSlotController.test("footer"),
      "card--has-image": this.hasSlotController.test("image"),
      "card--has-header": this.hasSlotController.test("header")
    })}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `;
  }
};
i.styles = [_, m];
var u = Object.defineProperty, v = Object.getOwnPropertyDescriptor, f = (t, a, d, o) => {
  for (var r = o > 1 ? void 0 : o ? v(a, d) : a, e = t.length - 1, s; e >= 0; e--)
    (s = t[e]) && (r = (o ? s(a, d, r) : s(r)) || r);
  return o && r && u(a, d, r), r;
};
let l = class extends i {
};
l = f([
  h("ug-card")
], l);
export {
  l as UgCard
};
