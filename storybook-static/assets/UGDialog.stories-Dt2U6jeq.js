import{i as z,k as h}from"./lit-element-CPYlYYac.js";import{M as O}from"./chunk.5EJHXPFX-CWbN7ION.js";import{l as v,u as y}from"./chunk.RWUUFNUL-D2u9RR_D.js";import{S as L}from"./chunk.AYP3HPB7-B1LDjdmr.js";import{s as d,g as l,b as n,a as c}from"./chunk.3EPZX5HE-DhHcnySa.js";import{w as _}from"./chunk.B4BZKR24-B0iVuGLD.js";import{H as q}from"./chunk.NYIIDP5N-BF-xModZ.js";import{L as E}from"./chunk.WLV3FVBR-BTBv_Sfe.js";import{w as P}from"./chunk.CCJUT23E-CIcXkUoC.js";import{c as B}from"./chunk.TUVJKY7S-B9PwIF6B.js";import{c as s,n as m,S as $,t as A}from"./chunk.NLWS5DN7-C0h9DzRV.js";import{R as H}from"./class-map-Bm7ZJXTF.js";import{t as b}from"./if-defined-4GS2c12S.js";import{e as f}from"./query-DXShiZ7f.js";import"./chunk.O7VCMB7W-quwE6Eft.js";import"./index-BDqxD1Sp.js";import"./chunk.LXDTFLWU-rMbNKnIm.js";import"./static-DHppwan5.js";import"./state-LdesfBTP.js";import"./directive-Ctav8iJK.js";import"./base-DIkkzJ-c.js";import"./chunk.3Y6SB6QS-B3KesEIx.js";import"./directive-helpers-CHX3h6dV.js";import"./chunk.R2T2D3TO-B7K_Sxkv.js";import"./chunk.2RCF7SLU-CB9V1Wsb.js";import"./chunk.MAQXLKQ7-CBa5hNL1.js";var W=z`
  :host {
    --width: 31rem;
    --header-spacing: var(--ug-spacing-large);
    --body-spacing: var(--ug-spacing-large);
    --footer-spacing: var(--ug-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--ug-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--ug-spacing-2x-large));
    max-height: calc(100% - var(--ug-spacing-2x-large));
    background-color: var(--ug-panel-background-color);
    border-radius: var(--ug-border-radius-medium);
    box-shadow: var(--ug-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--ug-font-size-large);
    line-height: var(--ug-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--ug-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions ug-icon-button,
  .dialog__header-actions ::slotted(ug-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--ug-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(ug-button:not(:first-of-type)) {
    margin-inline-start: var(--ug-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--ug-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--ug-color-neutral-0);
    }
  }
`,i=class extends ${constructor(){super(...arguments),this.hasSlotController=new q(this,"footer"),this.localize=new E(this),this.modal=new O(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),v(this))}disconnectedCallback(){var e;super.disconnectedCallback(),this.modal.deactivate(),y(this),(e=this.closeWatcher)==null||e.destroy()}requestClose(e){if(this.emit("ug-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const o=l(this,"dialog.denyClose",{dir:this.localize.dir()});n(this.panel,o.keyframes,o.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("ug-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),v(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([c(this.dialog),c(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("ug-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=l(this,"dialog.show",{dir:this.localize.dir()}),o=l(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([n(this.panel,t.keyframes,t.options),n(this.overlay,o.keyframes,o.options)]),this.emit("ug-after-show")}else{this.emit("ug-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([c(this.dialog),c(this.overlay)]);const e=l(this,"dialog.hide",{dir:this.localize.dir()}),t=l(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([n(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),n(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,y(this);const o=this.originalTrigger;typeof(o==null?void 0:o.focus)=="function"&&setTimeout(()=>o.focus()),this.emit("ug-after-hide")}}async show(){if(!this.open)return this.open=!0,_(this,"ug-after-show")}async hide(){if(this.open)return this.open=!1,_(this,"ug-after-hide")}render(){return h`
      <div
        part="base"
        class=${H({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${b(this.noHeader?this.label:void 0)}
          aria-labelledby=${b(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":h`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <ug-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></ug-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};i.styles=[B,W];i.dependencies={"ug-icon-button":L};s([f(".dialog")],i.prototype,"dialog",2);s([f(".dialog__panel")],i.prototype,"panel",2);s([f(".dialog__overlay")],i.prototype,"overlay",2);s([m({type:Boolean,reflect:!0})],i.prototype,"open",2);s([m({reflect:!0})],i.prototype,"label",2);s([m({attribute:"no-header",type:Boolean,reflect:!0})],i.prototype,"noHeader",2);s([P("open",{waitUntilFirstUpdate:!0})],i.prototype,"handleOpenChange",1);d("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});d("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});d("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});d("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});d("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var j=Object.defineProperty,F=Object.getOwnPropertyDescriptor,T=(e,t,o,r)=>{for(var a=r>1?void 0:r?F(t,o):t,p=e.length-1,u;p>=0;p--)(u=e[p])&&(a=(r?u(t,o,a):u(a))||a);return r&&a&&j(t,o,a),a};let w=class extends i{};w=T([A("ug-dialog")],w);var x=Object.freeze,R=Object.defineProperty,U=(e,t)=>x(R(e,"raw",{value:x(e.slice())})),k;const me={title:"Components/Dialog",component:"ug-dialog"},g={render:e=>h(k||(k=U([`<ug-dialog label="Dialog" class="dialog-overview">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <ug-button slot="footer" variant="primary">Close</ug-button>
      </ug-dialog>

      <ug-button>Open Dialog</ug-button>

      <script>
        const dialog = document.querySelector(".dialog-overview");
        const openButton = dialog.nextElementSibling;
        const closeButton = dialog.querySelector('ug-button[slot="footer"]');

        openButton.addEventListener("click", () => dialog.show());
        closeButton.addEventListener("click", () => dialog.hide());
      <\/script>`])))};var C,S,D;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    return html\`<ug-dialog label="Dialog" class="dialog-overview">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <ug-button slot="footer" variant="primary">Close</ug-button>
      </ug-dialog>

      <ug-button>Open Dialog</ug-button>

      <script>
        const dialog = document.querySelector(".dialog-overview");
        const openButton = dialog.nextElementSibling;
        const closeButton = dialog.querySelector('ug-button[slot="footer"]');

        openButton.addEventListener("click", () => dialog.show());
        closeButton.addEventListener("click", () => dialog.hide());
      <\/script>\`;
  }
}`,...(D=(S=g.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};const fe=["Dialog"];export{g as Dialog,fe as __namedExportsOrder,me as default};
