import{i as x,k as v}from"./lit-element-CPYlYYac.js";import{s as k,a as u,g as c,b as m,c as y}from"./chunk.3EPZX5HE-DhHcnySa.js";import{w as f}from"./chunk.B4BZKR24-B0iVuGLD.js";import{L as D}from"./chunk.WLV3FVBR-BTBv_Sfe.js";import{S}from"./chunk.O7VCMB7W-quwE6Eft.js";import{w as O}from"./chunk.CCJUT23E-CIcXkUoC.js";import{c as C}from"./chunk.TUVJKY7S-B9PwIF6B.js";import{c as i,n as p,S as $,t as A}from"./chunk.NLWS5DN7-C0h9DzRV.js";import{R as P}from"./class-map-Bm7ZJXTF.js";import{e as n}from"./query-DXShiZ7f.js";import"./chunk.3Y6SB6QS-B3KesEIx.js";import"./directive-helpers-CHX3h6dV.js";import"./state-LdesfBTP.js";import"./directive-Ctav8iJK.js";import"./base-DIkkzJ-c.js";var H=x`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--ug-color-neutral-200);
    border-radius: var(--ug-border-radius-medium);
    background-color: var(--ug-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--ug-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--ug-focus-ring);
    outline-offset: calc(1px + var(--ug-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--ug-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--ug-spacing-medium);
  }
`,s=class extends ${constructor(){super(...arguments),this.localize=new D(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.detailsObserver)==null||e.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("ug-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await u(this.body);const{keyframes:t,options:a}=c(this,"details.show",{dir:this.localize.dir()});await m(this.body,y(t,this.body.scrollHeight),a),this.body.style.height="auto",this.emit("ug-after-show")}else{if(this.emit("ug-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await u(this.body);const{keyframes:t,options:a}=c(this,"details.hide",{dir:this.localize.dir()});await m(this.body,y(t,this.body.scrollHeight),a),this.body.style.height="auto",this.details.open=!1,this.emit("ug-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,f(this,"ug-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,f(this,"ug-after-hide")}render(){const e=this.matches(":dir(rtl)");return v`
      <details
        part="base"
        class=${P({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <ug-icon library="system" name=${e?"chevron-left":"chevron-right"}></ug-icon>
            </slot>
            <slot name="collapse-icon">
              <ug-icon library="system" name=${e?"chevron-left":"chevron-right"}></ug-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};s.styles=[C,H];s.dependencies={"ug-icon":S};i([n(".details")],s.prototype,"details",2);i([n(".details__header")],s.prototype,"header",2);i([n(".details__body")],s.prototype,"body",2);i([n(".details__expand-icon-slot")],s.prototype,"expandIconSlot",2);i([p({type:Boolean,reflect:!0})],s.prototype,"open",2);i([p()],s.prototype,"summary",2);i([p({type:Boolean,reflect:!0})],s.prototype,"disabled",2);i([O("open",{waitUntilFirstUpdate:!0})],s.prototype,"handleOpenChange",1);k("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});k("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});var L=Object.defineProperty,U=Object.getOwnPropertyDescriptor,z=(e,t,a,r)=>{for(var o=r>1?void 0:r?U(t,a):t,d=e.length-1,h;d>=0;d--)(h=e[d])&&(o=(r?h(t,a,o):h(o))||o);return r&&o&&L(t,a,o),o};let g=class extends s{};g=z([A("ug-details")],g);const W={title:"Components/Details",component:"ug-details"},l={render:e=>v`<ug-details summary="Toggle Me"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ug-details
    >`};var b,_,w;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => {
    return html\`<ug-details summary="Toggle Me"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ug-details
    >\`;
  }
}`,...(w=(_=l.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};const X=["Details"];export{l as Details,X as __namedExportsOrder,W as default};
