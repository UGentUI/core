import{i as S,k as c,D as x}from"./lit-element-CPYlYYac.js";import{c as C}from"./chunk.TUVJKY7S-B9PwIF6B.js";import{c as u,S as w,t as A,n as m}from"./chunk.NLWS5DN7-C0h9DzRV.js";import{e as b}from"./query-DXShiZ7f.js";import{r as E}from"./directive-helpers-CHX3h6dV.js";import{i as M,t as P,e as L}from"./directive-Ctav8iJK.js";import{S as D}from"./chunk.H24ENZMO-BMmDawUn.js";import{S as T}from"./chunk.R2T2D3TO-B7K_Sxkv.js";import{H as I,g as R}from"./chunk.NYIIDP5N-BF-xModZ.js";import{S as O}from"./chunk.O7VCMB7W-quwE6Eft.js";import{w as v}from"./chunk.CCJUT23E-CIcXkUoC.js";import{R as z}from"./class-map-Bm7ZJXTF.js";import"./chunk.WLV3FVBR-BTBv_Sfe.js";var H=S`
  :host {
    display: block;
    position: relative;
    background: var(--ug-panel-background-color);
    border: solid var(--ug-panel-border-width) var(--ug-panel-border-color);
    border-radius: var(--ug-border-radius-medium);
    padding: var(--ug-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(ug-divider) {
    --spacing: var(--ug-spacing-x-small);
  }
`,y=class extends w{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const s=["menuitem","menuitemcheckbox"],t=e.composedPath(),i=t.find(r=>{var h;return s.includes(((h=r==null?void 0:r.getAttribute)==null?void 0:h.call(r,"role"))||"")});if(!i||t.find(r=>{var h;return((h=r==null?void 0:r.getAttribute)==null?void 0:h.call(r,"role"))==="menu"})!==this)return;const a=i;a.type==="checkbox"&&(a.checked=!a.checked),this.emit("ug-select",{detail:{item:a}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const s=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),s==null||s.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const s=this.getAllItems(),t=this.getCurrentItem();let i=t?s.indexOf(t):0;s.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?i++:e.key==="ArrowUp"?i--:e.key==="Home"?i=0:e.key==="End"&&(i=s.length-1),i<0&&(i=s.length-1),i>s.length-1&&(i=0),this.setCurrentItem(s[i]),s[i].focus())}}handleMouseDown(e){const s=e.target;this.isMenuItem(s)&&this.setCurrentItem(s)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var s;return e.tagName.toLowerCase()==="ug-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((s=e.getAttribute("role"))!=null?s:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(t=>{t.setAttribute("tabindex",t===e?"0":"-1")})}render(){return c`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};y.styles=[C,H];u([b("slot")],y.prototype,"defaultSlot",2);var Y=Object.defineProperty,U=Object.getOwnPropertyDescriptor,N=(e,s,t,i)=>{for(var n=i>1?void 0:i?U(s,t):s,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(s,t,n):a(n))||n);return i&&n&&Y(s,t,n),n};let k=class extends y{};k=N([A("ug-menu")],k);var V=S`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--ug-font-sans);
    font-size: var(--ug-font-size-medium);
    font-weight: var(--ug-font-weight-normal);
    line-height: var(--ug-line-height-normal);
    letter-spacing: var(--ug-letter-spacing-normal);
    color: var(--ug-color-neutral-700);
    padding: var(--ug-spacing-2x-small) var(--ug-spacing-2x-small);
    transition: var(--ug-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(ug-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading ug-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--ug-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--ug-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--ug-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--ug-color-neutral-100);
    color: var(--ug-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--ug-color-primary-600);
    color: var(--ug-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  ug-popup::part(popup) {
    box-shadow: var(--ug-shadow-large);
    z-index: var(--ug-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl ug-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(ug-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d=(e,s)=>{var i;const t=e._$AN;if(t===void 0)return!1;for(const n of t)(i=n._$AO)==null||i.call(n,s,!1),d(n,s);return!0},p=e=>{let s,t;do{if((s=e._$AM)===void 0)break;t=s._$AN,t.delete(e),e=s}while((t==null?void 0:t.size)===0)},$=e=>{for(let s;s=e._$AM;e=s){let t=s._$AN;if(t===void 0)s._$AN=t=new Set;else if(t.has(e))break;t.add(e),j(s)}};function q(e){this._$AN!==void 0?(p(this),this._$AM=e,$(this)):this._$AM=e}function K(e,s=!1,t=0){const i=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(s)if(Array.isArray(i))for(let o=t;o<i.length;o++)d(i[o],!1),p(i[o]);else i!=null&&(d(i,!1),p(i));else d(this,e)}const j=e=>{e.type==P.CHILD&&(e._$AP??(e._$AP=K),e._$AQ??(e._$AQ=q))};class B extends M{constructor(){super(...arguments),this._$AN=void 0}_$AT(s,t,i){super._$AT(s,t,i),$(this),this.isConnected=s._$AU}_$AO(s,t=!0){var i,n;s!==this.isConnected&&(this.isConnected=s,s?(i=this.reconnected)==null||i.call(this):(n=this.disconnected)==null||n.call(this)),t&&(d(this,s),p(this))}setValue(s){if(E(this.t))this.t._$AI(s,this);else{const t=[...this.t._$AH];t[this.i]=s,this.t._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=()=>new W;class W{}const g=new WeakMap,Q=L(class extends B{render(e){return x}update(e,[s]){var i;const t=s!==this.Y;return t&&this.Y!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=s,this.ht=(i=e.options)==null?void 0:i.host,this.rt(this.ct=e.element)),x}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const s=this.ht??globalThis;let t=g.get(s);t===void 0&&(t=new WeakMap,g.set(s,t)),t.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),t.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,s;return typeof this.Y=="function"?(e=g.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(s=this.Y)==null?void 0:s.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var X=class{constructor(e,s){this.popupRef=F(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=t=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${t.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${t.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=t=>{switch(t.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":t.target!==this.host&&(t.preventDefault(),t.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(t);break}},this.handleClick=t=>{var i;t.target===this.host?(t.preventDefault(),t.stopPropagation()):t.target instanceof Element&&(t.target.tagName==="ug-menu-item"||(i=t.target.role)!=null&&i.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=t=>{t.relatedTarget&&t.relatedTarget instanceof Element&&this.host.contains(t.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=t=>{t.stopPropagation()},this.handlePopupReposition=()=>{const t=this.host.renderRoot.querySelector("slot[name='submenu']"),i=t==null?void 0:t.assignedElements({flatten:!0}).filter(f=>f.localName==="ug-menu")[0],n=this.host.matches(":dir(rtl)");if(!i)return;const{left:o,top:a,width:r,height:h}=i.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${n?o+r:o}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${a}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${n?o+r:o}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${a+h}px`)},(this.host=e).addController(this),this.hasSlotController=s}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("ug-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("ug-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const s=this.host.renderRoot.querySelector("slot[name='submenu']");if(!s){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let t=null;for(const i of s.assignedElements())if(t=i.querySelectorAll("ug-menu-item, [role^='menuitem']"),t.length!==0)break;if(!(!t||t.length===0)){t[0].setAttribute("tabindex","0");for(let i=1;i!==t.length;++i)t[i].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?t[0]instanceof HTMLElement&&t[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{t[0]instanceof HTMLElement&&t[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;const s=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((n,o)=>{var a;const r=(a=s.get(o))!=null?a:new CSSUnitValue(0,"px"),f=(r instanceof CSSUnitValue?r:new CSSUnitValue(0,"px")).to("px");return n-f.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=this.host.matches(":dir(rtl)");return this.isConnected?c`
      <ug-popup
        ${Q(this.popupRef)}
        placement=${e?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </ug-popup>
    `:c` <slot name="submenu" hidden></slot> `}},l=class extends w{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new I(this,"submenu"),this.submenuController=new X(this,this.hasSlotController),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return R(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.matches(":dir(rtl)"),s=this.submenuController.isExpanded();return c`
      <div
        id="anchor"
        part="base"
        class=${z({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":s})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!s}"
      >
        <span part="checked-icon" class="menu-item__check">
          <ug-icon name="check" library="system" aria-hidden="true"></ug-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <ug-icon name=${e?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></ug-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?c` <ug-spinner part="spinner" exportparts="base:spinner__base"></ug-spinner> `:""}
      </div>
    `}};l.styles=[C,V];l.dependencies={"ug-icon":O,"ug-popup":D,"ug-spinner":T};u([b("slot:not([name])")],l.prototype,"defaultSlot",2);u([b(".menu-item")],l.prototype,"menuItem",2);u([m()],l.prototype,"type",2);u([m({type:Boolean,reflect:!0})],l.prototype,"checked",2);u([m()],l.prototype,"value",2);u([m({type:Boolean,reflect:!0})],l.prototype,"loading",2);u([m({type:Boolean,reflect:!0})],l.prototype,"disabled",2);u([v("checked")],l.prototype,"handleCheckedChange",1);u([v("disabled")],l.prototype,"handleDisabledChange",1);u([v("type")],l.prototype,"handleTypeChange",1);var Z=Object.defineProperty,G=Object.getOwnPropertyDescriptor,J=(e,s,t,i)=>{for(var n=i>1?void 0:i?G(s,t):s,o=e.length-1,a;o>=0;o--)(a=e[o])&&(n=(i?a(s,t,n):a(n))||n);return i&&n&&Z(s,t,n),n};let _=class extends l{};_=J([A("ug-menu-item")],_);
