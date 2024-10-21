import{i as v,k as f}from"./lit-element-CPYlYYac.js";import{S as w}from"./chunk.IXQOPD5K-CZ9yuCjV.js";import{s as g,g as y}from"./chunk.3EPZX5HE-DhHcnySa.js";import{L as C}from"./chunk.WLV3FVBR-BTBv_Sfe.js";import{S as L}from"./chunk.O7VCMB7W-quwE6Eft.js";import{c as S}from"./chunk.TUVJKY7S-B9PwIF6B.js";import{c as s,n as c,S as x,t as I}from"./chunk.NLWS5DN7-C0h9DzRV.js";import{R as k}from"./class-map-Bm7ZJXTF.js";import{r as _}from"./state-LdesfBTP.js";import{e as u}from"./query-DXShiZ7f.js";import"./chunk.H24ENZMO-BMmDawUn.js";import"./chunk.B4BZKR24-B0iVuGLD.js";import"./chunk.CCJUT23E-CIcXkUoC.js";import"./chunk.3Y6SB6QS-B3KesEIx.js";import"./directive-helpers-CHX3h6dV.js";import"./directive-Ctav8iJK.js";import"./base-DIkkzJ-c.js";var B=v`
  :host {
    --error-color: var(--ug-color-danger-600);
    --success-color: var(--ug-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
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
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--ug-focus-ring);
    outline-offset: var(--ug-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,t=class extends x{constructor(){super(...arguments),this.localize=new C(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let o=this.value;if(this.from){const a=this.getRootNode(),p=this.from.includes("."),n=this.from.includes("[")&&this.from.includes("]");let e=this.from,r="";p?[e,r]=this.from.trim().split("."):n&&([e,r]=this.from.trim().replace(/\]$/,"").split("["));const i="getElementById"in a?a.getElementById(e):null;i?n?o=i.getAttribute(r)||"":p?o=i[r]||"":o=i.textContent||"":(this.showStatus("error"),this.emit("ug-error"))}if(!o)this.showStatus("error"),this.emit("ug-error");else try{await navigator.clipboard.writeText(o),this.showStatus("success"),this.emit("ug-copy",{detail:{value:o}})}catch{this.showStatus("error"),this.emit("ug-error")}}async showStatus(o){const a=this.copyLabel||this.localize.term("copy"),p=this.successLabel||this.localize.term("copied"),n=this.errorLabel||this.localize.term("error"),e=o==="success"?this.successIcon:this.errorIcon,r=y(this,"copy.in",{dir:"ltr"}),i=y(this,"copy.out",{dir:"ltr"});this.tooltip.content=o==="success"?p:n,await this.copyIcon.animate(i.keyframes,i.options).finished,this.copyIcon.hidden=!0,this.status=o,e.hidden=!1,await e.animate(r.keyframes,r.options).finished,setTimeout(async()=>{await e.animate(i.keyframes,i.options).finished,e.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(r.keyframes,r.options).finished,this.tooltip.content=a,this.isCopying=!1},this.feedbackDuration)}render(){const o=this.copyLabel||this.localize.term("copy");return f`
      <ug-tooltip
        class=${k({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${o}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <ug-icon library="system" name="copy"></ug-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <ug-icon library="system" name="check"></ug-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <ug-icon library="system" name="x-lg"></ug-icon>
          </slot>
        </button>
      </ug-tooltip>
    `}};t.styles=[S,B];t.dependencies={"ug-icon":L,"ug-tooltip":w};s([u('slot[name="copy-icon"]')],t.prototype,"copyIcon",2);s([u('slot[name="success-icon"]')],t.prototype,"successIcon",2);s([u('slot[name="error-icon"]')],t.prototype,"errorIcon",2);s([u("ug-tooltip")],t.prototype,"tooltip",2);s([_()],t.prototype,"isCopying",2);s([_()],t.prototype,"status",2);s([c()],t.prototype,"value",2);s([c()],t.prototype,"from",2);s([c({type:Boolean,reflect:!0})],t.prototype,"disabled",2);s([c({attribute:"copy-label"})],t.prototype,"copyLabel",2);s([c({attribute:"success-label"})],t.prototype,"successLabel",2);s([c({attribute:"error-label"})],t.prototype,"errorLabel",2);s([c({attribute:"feedback-duration",type:Number})],t.prototype,"feedbackDuration",2);s([c({attribute:"tooltip-placement"})],t.prototype,"tooltipPlacement",2);s([c({type:Boolean})],t.prototype,"hoist",2);g("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});g("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});var $=Object.defineProperty,P=Object.getOwnPropertyDescriptor,z=(o,a,p,n)=>{for(var e=n>1?void 0:n?P(a,p):a,r=o.length-1,i;r>=0;r--)(i=o[r])&&(e=(n?i(a,p,e):i(e))||e);return n&&e&&$(a,p,e),e};let m=class extends t{};m=z([I("ug-copy-button")],m);const V={title:"Components/CopyButton",component:"ug-copy-button"},l={render:o=>f`<ug-copy-button></ug-copy-button>`};var h,b,d;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    return html\`<ug-copy-button></ug-copy-button>\`;
  }
}`,...(d=(b=l.parameters)==null?void 0:b.docs)==null?void 0:d.source}}};const W=["CopyButton"];export{l as CopyButton,W as __namedExportsOrder,V as default};
