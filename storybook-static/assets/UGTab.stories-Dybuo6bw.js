import{i as f,k as d}from"./lit-element-CPYlYYac.js";import{S as v}from"./chunk.AYP3HPB7-B1LDjdmr.js";import{L as y}from"./chunk.WLV3FVBR-BTBv_Sfe.js";import{w as h}from"./chunk.CCJUT23E-CIcXkUoC.js";import{c as _}from"./chunk.TUVJKY7S-B9PwIF6B.js";import{c as e,n as s,S as x,t as C}from"./chunk.NLWS5DN7-C0h9DzRV.js";import{R as w}from"./class-map-Bm7ZJXTF.js";import{e as I}from"./query-DXShiZ7f.js";import"./chunk.O7VCMB7W-quwE6Eft.js";import"./static-DHppwan5.js";import"./if-defined-4GS2c12S.js";import"./state-LdesfBTP.js";import"./directive-Ctav8iJK.js";import"./base-DIkkzJ-c.js";import"./chunk.3Y6SB6QS-B3KesEIx.js";import"./directive-helpers-CHX3h6dV.js";var z=f`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--ug-font-sans);
    font-size: var(--ug-font-size-small);
    font-weight: var(--ug-font-weight-semibold);
    border-radius: var(--ug-border-radius-medium);
    color: var(--ug-color-neutral-600);
    padding: var(--ug-spacing-medium) var(--ug-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--ug-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible):not([disabled]) {
    color: var(--ug-color-primary-600);
  }

  :host(:focus-visible) {
    outline: var(--ug-focus-ring);
    outline-offset: calc(-1 * var(--ug-focus-ring-width) - var(--ug-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--ug-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--ug-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--ug-font-size-small);
    margin-inline-start: var(--ug-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--ug-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,S=0,t=class extends x{constructor(){super(...arguments),this.localize=new y(this),this.attrId=++S,this.componentId=`ug-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(o){o.stopPropagation(),this.emit("ug-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,d`
      <div
        part="base"
        class=${w({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?d`
              <ug-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></ug-icon-button>
            `:""}
      </div>
    `}};t.styles=[_,z];t.dependencies={"ug-icon-button":v};e([I(".tab")],t.prototype,"tab",2);e([s({reflect:!0})],t.prototype,"panel",2);e([s({type:Boolean,reflect:!0})],t.prototype,"active",2);e([s({type:Boolean,reflect:!0})],t.prototype,"closable",2);e([s({type:Boolean,reflect:!0})],t.prototype,"disabled",2);e([s({type:Number,reflect:!0})],t.prototype,"tabIndex",2);e([h("active")],t.prototype,"handleActiveChange",1);e([h("disabled")],t.prototype,"handleDisabledChange",1);var $=Object.defineProperty,A=Object.getOwnPropertyDescriptor,O=(o,r,n,i)=>{for(var a=i>1?void 0:i?A(r,n):r,c=o.length-1,b;c>=0;c--)(b=o[c])&&(a=(i?b(r,n,a):b(a))||a);return i&&a&&$(r,n,a),a};let p=class extends t{};p=O([C("ug-tab")],p);const K={title:"Components/Tab",component:"ug-tab"},l={render:o=>d`<ug-tab></ug-tab>`};var u,m,g;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    return html\`<ug-tab></ug-tab>\`;
  }
}`,...(g=(m=l.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const M=["Tab"];export{l as Tab,M as __namedExportsOrder,K as default};
