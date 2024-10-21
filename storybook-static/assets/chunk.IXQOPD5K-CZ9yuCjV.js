import{i as g,k as y}from"./lit-element-CPYlYYac.js";import{S as f}from"./chunk.H24ENZMO-BMmDawUn.js";import{s as m,p as h,a as l,g as d,b as u}from"./chunk.3EPZX5HE-DhHcnySa.js";import{w as c}from"./chunk.B4BZKR24-B0iVuGLD.js";import{L as w}from"./chunk.WLV3FVBR-BTBv_Sfe.js";import{w as p}from"./chunk.CCJUT23E-CIcXkUoC.js";import{c as v}from"./chunk.TUVJKY7S-B9PwIF6B.js";import{c as o,n as i,S as b}from"./chunk.NLWS5DN7-C0h9DzRV.js";import{R as k}from"./class-map-Bm7ZJXTF.js";import{e as n}from"./query-DXShiZ7f.js";var _=g`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--ug-tooltip-arrow-size);
    --arrow-color: var(--ug-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--ug-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--ug-tooltip-border-radius);
    background-color: var(--ug-tooltip-background-color);
    font-family: var(--ug-tooltip-font-family);
    font-size: var(--ug-tooltip-font-size);
    font-weight: var(--ug-tooltip-font-weight);
    line-height: var(--ug-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--ug-tooltip-color);
    padding: var(--ug-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,t=class extends b{constructor(){super(),this.localize=new w(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=h(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=h(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,s;if(this.open){if(this.disabled)return;this.emit("ug-show"),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await l(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:a,options:r}=d(this,"tooltip.show",{dir:this.localize.dir()});await u(this.popup.popup,a,r),this.popup.reposition(),this.emit("ug-after-show")}else{this.emit("ug-hide"),(s=this.closeWatcher)==null||s.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await l(this.body);const{keyframes:a,options:r}=d(this,"tooltip.hide",{dir:this.localize.dir()});await u(this.popup.popup,a,r),this.popup.active=!1,this.body.hidden=!0,this.emit("ug-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,c(this,"ug-after-show")}async hide(){if(this.open)return this.open=!1,c(this,"ug-after-hide")}render(){return y`
      <ug-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${k({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </ug-popup>
    `}};t.styles=[v,_];t.dependencies={"ug-popup":f};o([n("slot:not([name])")],t.prototype,"defaultSlot",2);o([n(".tooltip__body")],t.prototype,"body",2);o([n("ug-popup")],t.prototype,"popup",2);o([i()],t.prototype,"content",2);o([i()],t.prototype,"placement",2);o([i({type:Boolean,reflect:!0})],t.prototype,"disabled",2);o([i({type:Number})],t.prototype,"distance",2);o([i({type:Boolean,reflect:!0})],t.prototype,"open",2);o([i({type:Number})],t.prototype,"skidding",2);o([i()],t.prototype,"trigger",2);o([i({type:Boolean})],t.prototype,"hoist",2);o([p("open",{waitUntilFirstUpdate:!0})],t.prototype,"handleOpenChange",1);o([p(["content","distance","hoist","placement","skidding"])],t.prototype,"handleOptionsChange",1);o([p("disabled")],t.prototype,"handleDisabledChange",1);m("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});m("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});export{t as S};
