import{i as k,k as b}from"./lit-element-CPYlYYac.js";import{a as _}from"./chunk.LXDTFLWU-rMbNKnIm.js";import{S as E}from"./chunk.H24ENZMO-BMmDawUn.js";import{s as D,a as m,g as h,b as c}from"./chunk.3EPZX5HE-DhHcnySa.js";import{w as g}from"./chunk.B4BZKR24-B0iVuGLD.js";import{L as C}from"./chunk.WLV3FVBR-BTBv_Sfe.js";import{w as O}from"./chunk.CCJUT23E-CIcXkUoC.js";import{c as x}from"./chunk.TUVJKY7S-B9PwIF6B.js";import{c as s,n as a,S as T,t as L}from"./chunk.NLWS5DN7-C0h9DzRV.js";import{R as S}from"./class-map-Bm7ZJXTF.js";import{t as I}from"./if-defined-4GS2c12S.js";import{e as l}from"./query-DXShiZ7f.js";import"./index-BDqxD1Sp.js";import"./index-vU6fc3m8.js";import"./index-avp2Vr2_.js";import"./directive-Ctav8iJK.js";import"./base-DIkkzJ-c.js";import"./chunk.R2T2D3TO-B7K_Sxkv.js";import"./chunk.2RCF7SLU-CB9V1Wsb.js";import"./chunk.MAQXLKQ7-CBa5hNL1.js";import"./chunk.NYIIDP5N-BF-xModZ.js";import"./chunk.O7VCMB7W-quwE6Eft.js";import"./chunk.3Y6SB6QS-B3KesEIx.js";import"./directive-helpers-CHX3h6dV.js";import"./state-LdesfBTP.js";import"./static-DHppwan5.js";var z=k`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--ug-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--ug-font-sans);
    font-size: var(--ug-font-size-medium);
    font-weight: var(--ug-font-weight-normal);
    box-shadow: var(--ug-shadow-large);
    border-radius: var(--ug-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(ug-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,o=class extends T{constructor(){super(...arguments),this.localize=new C(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="ug-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var n,r,i;const p=((n=this.containingElement)==null?void 0:n.getRootNode())instanceof ShadowRoot?(i=(r=document.activeElement)==null?void 0:r.shadowRoot)==null?void 0:i.activeElement:document.activeElement;(!this.containingElement||(p==null?void 0:p.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="ug-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="ug-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const n=t.getAllItems(),r=n[0],i=n[n.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),n.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(r),r.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(i),i.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(r=>_(r).start);let n;if(t){switch(t.tagName.toLowerCase()){case"ug-button":case"ug-icon-button":n=t.button;break;default:n=t}n.setAttribute("aria-haspopup","true"),n.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,g(this,"ug-after-show")}async hide(){if(this.open)return this.open=!1,g(this,"ug-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener("ug-select",this.handlePanelSelect),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener("ug-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("ug-show"),this.addOpenListeners(),await m(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=h(this,"dropdown.show",{dir:this.localize.dir()});await c(this.popup.popup,e,t),this.emit("ug-after-show")}else{this.emit("ug-hide"),this.removeOpenListeners(),await m(this);const{keyframes:e,options:t}=h(this,"dropdown.hide",{dir:this.localize.dir()});await c(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("ug-after-hide")}}render(){return b`
      <ug-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${I(this.sync?this.sync:void 0)}
        class=${S({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </ug-popup>
    `}};o.styles=[x,z];o.dependencies={"ug-popup":E};s([l(".dropdown")],o.prototype,"popup",2);s([l(".dropdown__trigger")],o.prototype,"trigger",2);s([l(".dropdown__panel")],o.prototype,"panel",2);s([a({type:Boolean,reflect:!0})],o.prototype,"open",2);s([a({reflect:!0})],o.prototype,"placement",2);s([a({type:Boolean,reflect:!0})],o.prototype,"disabled",2);s([a({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],o.prototype,"stayOpenOnSelect",2);s([a({attribute:!1})],o.prototype,"containingElement",2);s([a({type:Number})],o.prototype,"distance",2);s([a({type:Number})],o.prototype,"skidding",2);s([a({type:Boolean})],o.prototype,"hoist",2);s([a({reflect:!0})],o.prototype,"sync",2);s([O("open",{waitUntilFirstUpdate:!0})],o.prototype,"handleOpenChange",1);D("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});D("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var A=Object.defineProperty,P=Object.getOwnPropertyDescriptor,$=(e,t,n,r)=>{for(var i=r>1?void 0:r?P(t,n):t,p=e.length-1,u;p>=0;p--)(u=e[p])&&(i=(r?u(t,n,i):u(i))||i);return r&&i&&A(t,n,i),i};let f=class extends o{};f=$([L("ug-dropdown")],f);const pe={title:"Components/Dropdown",component:"ug-dropdown"},d={render:e=>b`<ug-dropdown>
      <ug-button slot="trigger" caret>Dropdown</ug-button>
      <ug-menu>
        <ug-menu-item>Dropdown Item 1</ug-menu-item>
        <ug-menu-item>Dropdown Item 2</ug-menu-item>
        <ug-menu-item>Dropdown Item 3</ug-menu-item>
        <ug-divider></ug-divider>
        <ug-menu-item type="checkbox" checked>Checkbox</ug-menu-item>
        <ug-menu-item disabled>Disabled</ug-menu-item>
        <ug-divider></ug-divider>
        <ug-menu-item>
          Prefix
          <ug-icon slot="prefix" name="gift"></ug-icon>
        </ug-menu-item>
        <ug-menu-item>
          Suffix Icon
          <ug-icon slot="suffix" name="heart"></ug-icon>
        </ug-menu-item>
      </ug-menu>
    </ug-dropdown>`};var w,y,v;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => {
    return html\`<ug-dropdown>
      <ug-button slot="trigger" caret>Dropdown</ug-button>
      <ug-menu>
        <ug-menu-item>Dropdown Item 1</ug-menu-item>
        <ug-menu-item>Dropdown Item 2</ug-menu-item>
        <ug-menu-item>Dropdown Item 3</ug-menu-item>
        <ug-divider></ug-divider>
        <ug-menu-item type="checkbox" checked>Checkbox</ug-menu-item>
        <ug-menu-item disabled>Disabled</ug-menu-item>
        <ug-divider></ug-divider>
        <ug-menu-item>
          Prefix
          <ug-icon slot="prefix" name="gift"></ug-icon>
        </ug-menu-item>
        <ug-menu-item>
          Suffix Icon
          <ug-icon slot="suffix" name="heart"></ug-icon>
        </ug-menu-item>
      </ug-menu>
    </ug-dropdown>\`;
  }
}`,...(v=(y=d.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const de=["Dropdown"];export{d as Dropdown,de as __namedExportsOrder,pe as default};
