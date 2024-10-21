import{i as a}from"./lit-element-CPYlYYac.js";import{S as l}from"./chunk.O7VCMB7W-quwE6Eft.js";import{c as u}from"./chunk.TUVJKY7S-B9PwIF6B.js";import{c as i,n as r,S as c}from"./chunk.NLWS5DN7-C0h9DzRV.js";import{R as d}from"./class-map-Bm7ZJXTF.js";import{e as n,k as b}from"./static-DHppwan5.js";import{t as e}from"./if-defined-4GS2c12S.js";import{r as p}from"./state-LdesfBTP.js";import{e as h}from"./query-DXShiZ7f.js";var f=a`
  :host {
    display: inline-block;
    color: var(--ug-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--ug-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--ug-spacing-x-small);
    cursor: pointer;
    transition: var(--ug-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--ug-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--ug-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--ug-focus-ring);
    outline-offset: var(--ug-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,t=class extends c{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("ug-blur")}handleFocus(){this.hasFocus=!0,this.emit("ug-focus")}handleClick(o){this.disabled&&(o.preventDefault(),o.stopPropagation())}click(){this.button.click()}focus(o){this.button.focus(o)}blur(){this.button.blur()}render(){const o=!!this.href,s=o?n`a`:n`button`;return b`
      <${s}
        part="base"
        class=${d({"icon-button":!0,"icon-button--disabled":!o&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${e(o?void 0:this.disabled)}
        type=${e(o?void 0:"button")}
        href=${e(o?this.href:void 0)}
        target=${e(o?this.target:void 0)}
        download=${e(o?this.download:void 0)}
        rel=${e(o&&this.target?"noreferrer noopener":void 0)}
        role=${e(o?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <ug-icon
          class="icon-button__icon"
          name=${e(this.name)}
          library=${e(this.library)}
          src=${e(this.src)}
          aria-hidden="true"
        ></ug-icon>
      </${s}>
    `}};t.styles=[u,f];t.dependencies={"ug-icon":l};i([h(".icon-button")],t.prototype,"button",2);i([p()],t.prototype,"hasFocus",2);i([r()],t.prototype,"name",2);i([r()],t.prototype,"library",2);i([r()],t.prototype,"src",2);i([r()],t.prototype,"href",2);i([r()],t.prototype,"target",2);i([r()],t.prototype,"download",2);i([r()],t.prototype,"label",2);i([r({type:Boolean,reflect:!0})],t.prototype,"disabled",2);export{t as S};
