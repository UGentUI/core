import{i as r,k as s}from"./lit-element-CPYlYYac.js";import{c as g}from"./chunk.TUVJKY7S-B9PwIF6B.js";import{c as a,n as i,S as b}from"./chunk.NLWS5DN7-C0h9DzRV.js";import{r as d}from"./state-LdesfBTP.js";import{e as p}from"./query-DXShiZ7f.js";var c=r`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,l=class extends b{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(o){const t=n(o.target);t==null||t.toggleAttribute("data-ug-button-group__button--focus",!0)}handleBlur(o){const t=n(o.target);t==null||t.toggleAttribute("data-ug-button-group__button--focus",!1)}handleMouseOver(o){const t=n(o.target);t==null||t.toggleAttribute("data-ug-button-group__button--hover",!0)}handleMouseOut(o){const t=n(o.target);t==null||t.toggleAttribute("data-ug-button-group__button--hover",!1)}handleSlotChange(){const o=[...this.defaultSlot.assignedElements({flatten:!0})];o.forEach(t=>{const e=o.indexOf(t),u=n(t);u&&(u.toggleAttribute("data-ug-button-group__button",!0),u.toggleAttribute("data-ug-button-group__button--first",e===0),u.toggleAttribute("data-ug-button-group__button--inner",e>0&&e<o.length-1),u.toggleAttribute("data-ug-button-group__button--last",e===o.length-1),u.toggleAttribute("data-ug-button-group__button--radio",u.tagName.toLowerCase()==="ug-radio-button"))})}render(){return s`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};l.styles=[g,c];a([p("slot")],l.prototype,"defaultSlot",2);a([d()],l.prototype,"disableRole",2);a([i()],l.prototype,"label",2);function n(o){var t;const e="ug-button, ug-radio-button";return(t=o.closest(e))!=null?t:o.querySelector(e)}export{l as S};
