import{i as L,k as y}from"./lit-element-CPYlYYac.js";import{M as O}from"./chunk.5EJHXPFX-CWbN7ION.js";import{l as w,u as f}from"./chunk.RWUUFNUL-D2u9RR_D.js";import{S as E}from"./chunk.AYP3HPB7-B1LDjdmr.js";import{s as o,g as l,b as d,a as p}from"./chunk.3EPZX5HE-DhHcnySa.js";import{w as v}from"./chunk.B4BZKR24-B0iVuGLD.js";import{H as q}from"./chunk.NYIIDP5N-BF-xModZ.js";import{L as P}from"./chunk.WLV3FVBR-BTBv_Sfe.js";import{w as B}from"./chunk.CCJUT23E-CIcXkUoC.js";import{c as $}from"./chunk.TUVJKY7S-B9PwIF6B.js";import{c as i,n as c,S as A,t as F}from"./chunk.NLWS5DN7-C0h9DzRV.js";import{R as H}from"./class-map-Bm7ZJXTF.js";import{t as _}from"./if-defined-4GS2c12S.js";import{e as g}from"./query-DXShiZ7f.js";import"./chunk.O7VCMB7W-quwE6Eft.js";import"./index-BDqxD1Sp.js";import"./chunk.LXDTFLWU-rMbNKnIm.js";import"./static-DHppwan5.js";import"./state-LdesfBTP.js";import"./directive-Ctav8iJK.js";import"./base-DIkkzJ-c.js";import"./chunk.3Y6SB6QS-B3KesEIx.js";import"./directive-helpers-CHX3h6dV.js";import"./chunk.R2T2D3TO-B7K_Sxkv.js";import"./chunk.2RCF7SLU-CB9V1Wsb.js";import"./chunk.MAQXLKQ7-CBa5hNL1.js";var K=L`
  :host {
    --size: 25rem;
    --header-spacing: var(--ug-spacing-large);
    --body-spacing: var(--ug-spacing-large);
    --footer-spacing: var(--ug-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--ug-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--ug-panel-background-color);
    box-shadow: var(--ug-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--ug-font-size-large);
    line-height: var(--ug-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--ug-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions ug-icon-button,
  .drawer__header-actions ::slotted(ug-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--ug-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(ug-button:not(:last-of-type)) {
    margin-inline-end: var(--ug-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--ug-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--ug-color-neutral-0);
    }
  }
`;function b(e){return e.charAt(0).toUpperCase()+e.slice(1)}var a=class extends A{constructor(){super(...arguments),this.hasSlotController=new q(this,"footer"),this.localize=new P(this),this.modal=new O(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),w(this)))}disconnectedCallback(){var e;super.disconnectedCallback(),f(this),(e=this.closeWatcher)==null||e.destroy()}requestClose(e){if(this.emit("ug-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const t=l(this,"drawer.denyClose",{dir:this.localize.dir()});d(this.panel,t.keyframes,t.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;document.removeEventListener("keydown",this.handleDocumentKeyDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.open){this.emit("ug-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),w(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([p(this.drawer),p(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("ug-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const r=l(this,`drawer.show${b(this.placement)}`,{dir:this.localize.dir()}),t=l(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([d(this.panel,r.keyframes,r.options),d(this.overlay,t.keyframes,t.options)]),this.emit("ug-after-show")}else{this.emit("ug-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),f(this)),await Promise.all([p(this.drawer),p(this.overlay)]);const e=l(this,`drawer.hide${b(this.placement)}`,{dir:this.localize.dir()}),r=l(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([d(this.overlay,r.keyframes,r.options).then(()=>{this.overlay.hidden=!0}),d(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const t=this.originalTrigger;typeof(t==null?void 0:t.focus)=="function"&&setTimeout(()=>t.focus()),this.emit("ug-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),w(this)),this.open&&this.contained&&(this.modal.deactivate(),f(this))}async show(){if(!this.open)return this.open=!0,v(this,"ug-after-show")}async hide(){if(this.open)return this.open=!1,v(this,"ug-after-hide")}render(){return y`
      <div
        part="base"
        class=${H({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${_(this.noHeader?this.label:void 0)}
          aria-labelledby=${_(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":y`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <ug-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></ug-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};a.styles=[$,K];a.dependencies={"ug-icon-button":E};i([g(".drawer")],a.prototype,"drawer",2);i([g(".drawer__panel")],a.prototype,"panel",2);i([g(".drawer__overlay")],a.prototype,"overlay",2);i([c({type:Boolean,reflect:!0})],a.prototype,"open",2);i([c({reflect:!0})],a.prototype,"label",2);i([c({reflect:!0})],a.prototype,"placement",2);i([c({type:Boolean,reflect:!0})],a.prototype,"contained",2);i([c({attribute:"no-header",type:Boolean,reflect:!0})],a.prototype,"noHeader",2);i([B("open",{waitUntilFirstUpdate:!0})],a.prototype,"handleOpenChange",1);i([B("contained",{waitUntilFirstUpdate:!0})],a.prototype,"handleNoModalChange",1);o("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});o("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});o("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});o("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});o("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});o("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});o("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});o("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});o("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});o("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});o("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var T=Object.defineProperty,U=Object.getOwnPropertyDescriptor,W=(e,r,t,n)=>{for(var s=n>1?void 0:n?U(r,t):r,u=e.length-1,m;u>=0;u--)(m=e[u])&&(s=(n?m(r,t,s):m(s))||s);return n&&s&&T(r,t,s),s};let x=class extends a{};x=W([F("ug-drawer")],x);var k=Object.freeze,j=Object.defineProperty,I=(e,r)=>k(j(e,"raw",{value:k(e.slice())})),C;const fe={title:"Components/Drawer",component:"ug-drawer"},h={render:e=>y(C||(C=I([`<ug-drawer label="Drawer" class="drawer-overview">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <ug-button slot="footer" variant="primary">Close</ug-button>
      </ug-drawer>

      <ug-button>Open Drawer</ug-button>

      <script>
        const drawer = document.querySelector(".drawer-overview");
        const openButton = drawer.nextElementSibling;
        const closeButton = drawer.querySelector(
          'ug-button[variant="primary"]'
        );

        openButton.addEventListener("click", () => drawer.show());
        closeButton.addEventListener("click", () => drawer.hide());
      <\/script>`])))};var z,S,D;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => {
    return html\`<ug-drawer label="Drawer" class="drawer-overview">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <ug-button slot="footer" variant="primary">Close</ug-button>
      </ug-drawer>

      <ug-button>Open Drawer</ug-button>

      <script>
        const drawer = document.querySelector(".drawer-overview");
        const openButton = drawer.nextElementSibling;
        const closeButton = drawer.querySelector(
          'ug-button[variant="primary"]'
        );

        openButton.addEventListener("click", () => drawer.show());
        closeButton.addEventListener("click", () => drawer.hide());
      <\/script>\`;
  }
}`,...(D=(S=h.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};const ye=["Drawer"];export{h as Drawer,ye as __namedExportsOrder,fe as default};
