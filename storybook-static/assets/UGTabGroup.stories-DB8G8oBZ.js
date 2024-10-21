import{i as x,k as b}from"./lit-element-CPYlYYac.js";import{S as k}from"./chunk.YJK4WDCI-DFupQych.js";import{s as f}from"./chunk.RWUUFNUL-D2u9RR_D.js";import{S as A}from"./chunk.AYP3HPB7-B1LDjdmr.js";import{L as C}from"./chunk.WLV3FVBR-BTBv_Sfe.js";import{w as S}from"./chunk.CCJUT23E-CIcXkUoC.js";import{c as E}from"./chunk.TUVJKY7S-B9PwIF6B.js";import{c as n,n as p,S as $,a as B,t as L}from"./chunk.NLWS5DN7-C0h9DzRV.js";import{R as g}from"./class-map-Bm7ZJXTF.js";import{r as v}from"./state-LdesfBTP.js";import{t as O}from"./event-options-CNZcgQm4.js";import{e as h}from"./query-DXShiZ7f.js";import"./chunk.O7VCMB7W-quwE6Eft.js";import"./static-DHppwan5.js";import"./if-defined-4GS2c12S.js";import"./directive-Ctav8iJK.js";import"./base-DIkkzJ-c.js";import"./chunk.3Y6SB6QS-B3KesEIx.js";import"./directive-helpers-CHX3h6dV.js";var z=x`
  :host {
    --indicator-color: var(--ug-color-primary-600);
    --track-color: var(--ug-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--ug-transition-fast) translate ease,
      var(--ug-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--ug-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--ug-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(ug-tab-panel) {
    --padding: var(--ug-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(ug-tab-panel) {
    --padding: var(--ug-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(ug-tab-panel) {
    --padding: 0 var(--ug-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(ug-tab-panel) {
    --padding: 0 var(--ug-spacing-medium);
  }
`,i=class extends ${constructor(){super(...arguments),this.localize=new C(this),this.tabs=[],this.focusableTabs=[],this.panels=[],this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const t=Promise.all([customElements.whenDefined("ug-tab"),customElements.whenDefined("ug-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(a=>{a.some(o=>!["aria-labelledby","aria-controls"].includes(o.attributeName))&&setTimeout(()=>this.setAriaLabels()),a.some(o=>o.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((o,r)=>{var e;o[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((e=this.getActiveTab())!=null?e:this.tabs[0],{emitEvents:!1}),r.unobserve(o[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var t,a;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect(),(a=this.resizeObserver)==null||a.unobserve(this.nav)}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="ug-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const o=t.target.closest("ug-tab");(o==null?void 0:o.closest("ug-tab-group"))===this&&o!==null&&this.setActiveTab(o,{scrollBehavior:"smooth"})}handleKeyDown(t){const o=t.target.closest("ug-tab");if((o==null?void 0:o.closest("ug-tab-group"))===this&&(["Enter"," "].includes(t.key)&&o!==null&&(this.setActiveTab(o,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const e=this.tabs.find(c=>c.matches(":focus")),l=this.matches(":dir(rtl)");let s=null;if((e==null?void 0:e.tagName.toLowerCase())==="ug-tab"){if(t.key==="Home")s=this.focusableTabs[0];else if(t.key==="End")s=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(l?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){const c=this.tabs.findIndex(d=>d===e);s=this.findNextFocusableTab(c,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(l?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){const c=this.tabs.findIndex(d=>d===e);s=this.findNextFocusableTab(c,"forward")}if(!s)return;s.tabIndex=0,s.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(s,{scrollBehavior:"smooth"}):this.tabs.forEach(c=>{c.tabIndex=c===s?0:-1}),["top","bottom"].includes(this.placement)&&f(s,this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,a){if(a=B({emitEvents:!0,scrollBehavior:"auto"},a),t!==this.activeTab&&!t.disabled){const o=this.activeTab;this.activeTab=t,this.tabs.forEach(r=>{r.active=r===this.activeTab,r.tabIndex=r===this.activeTab?0:-1}),this.panels.forEach(r=>{var e;return r.active=r.name===((e=this.activeTab)==null?void 0:e.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&f(this.activeTab,this.nav,"horizontal",a.scrollBehavior),a.emitEvents&&(o&&this.emit("ug-tab-hide",{detail:{name:o.panel}}),this.emit("ug-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const a=this.panels.find(o=>o.name===t.panel);a&&(t.setAttribute("aria-controls",a.getAttribute("id")),a.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const a=t.clientWidth,o=t.clientHeight,r=this.matches(":dir(rtl)"),e=this.getAllTabs(),s=e.slice(0,e.indexOf(t)).reduce((c,d)=>({left:c.left+d.clientWidth,top:c.top+d.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${a}px`,this.indicator.style.height="auto",this.indicator.style.translate=r?`${-1*s.left}px`:`${s.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${o}px`,this.indicator.style.translate=`0 ${s.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(t,a){let o=null;const r=a==="forward"?1:-1;let e=t+r;for(;t<this.tabs.length;){if(o=this.tabs[e]||null,o===null){a==="forward"?o=this.focusableTabs[0]:o=this.focusableTabs[this.focusableTabs.length-1];break}if(!o.disabled)break;e+=r}return o}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){const a=this.tabs.find(o=>o.panel===t);a&&this.setActiveTab(a,{scrollBehavior:"smooth"})}render(){const t=this.matches(":dir(rtl)");return b`
      <div
        part="base"
        class=${g({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?b`
                <ug-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${g({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${t?"chevron-right":"chevron-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></ug-icon-button>
              `:""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <ug-resize-observer @ug-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </ug-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?b`
                <ug-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${g({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${t?"chevron-left":"chevron-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></ug-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};i.styles=[E,z];i.dependencies={"ug-icon-button":A,"ug-resize-observer":k};n([h(".tab-group")],i.prototype,"tabGroup",2);n([h(".tab-group__body")],i.prototype,"body",2);n([h(".tab-group__nav")],i.prototype,"nav",2);n([h(".tab-group__indicator")],i.prototype,"indicator",2);n([v()],i.prototype,"hasScrollControls",2);n([v()],i.prototype,"shouldHideScrollStartButton",2);n([v()],i.prototype,"shouldHideScrollEndButton",2);n([p()],i.prototype,"placement",2);n([p()],i.prototype,"activation",2);n([p({attribute:"no-scroll-controls",type:Boolean})],i.prototype,"noScrollControls",2);n([p({attribute:"fixed-scroll-controls",type:Boolean})],i.prototype,"fixedScrollControls",2);n([O({passive:!0})],i.prototype,"updateScrollButtons",1);n([S("noScrollControls",{waitUntilFirstUpdate:!0})],i.prototype,"updateScrollControls",1);n([S("placement",{waitUntilFirstUpdate:!0})],i.prototype,"syncIndicator",1);var I=(t,a)=>{let o=0;return function(...r){window.clearTimeout(o),o=window.setTimeout(()=>{t.call(this,...r)},a)}},m=(t,a,o)=>{const r=t[a];t[a]=function(...e){r.call(this,...e),o.call(this,r,...e)}},H="onscrollend"in window;if(!H){const t=new Set,a=new WeakMap,o=e=>{for(const l of e.changedTouches)t.add(l.identifier)},r=e=>{for(const l of e.changedTouches)t.delete(l.identifier)};document.addEventListener("touchstart",o,!0),document.addEventListener("touchend",r,!0),document.addEventListener("touchcancel",r,!0),m(EventTarget.prototype,"addEventListener",function(e,l){if(l!=="scrollend")return;const s=I(()=>{t.size?s():this.dispatchEvent(new Event("scrollend"))},100);e.call(this,"scroll",s,{passive:!0}),a.set(this,s)}),m(EventTarget.prototype,"removeEventListener",function(e,l){if(l!=="scrollend")return;const s=a.get(this);s&&e.call(this,"scroll",s,{passive:!0})})}var D=Object.defineProperty,P=Object.getOwnPropertyDescriptor,G=(t,a,o,r)=>{for(var e=r>1?void 0:r?P(a,o):a,l=t.length-1,s;l>=0;l--)(s=t[l])&&(e=(r?s(a,o,e):s(e))||e);return r&&e&&D(a,o,e),e};let _=class extends i{};_=G([L("ug-tab-group")],_);const rt={title:"Components/TabGroup",component:"ug-tab-group"},u={render:t=>b`<ug-tab-group>
      <ug-tab slot="nav" panel="general">General</ug-tab>
      <ug-tab slot="nav" panel="custom">Custom</ug-tab>
      <ug-tab slot="nav" panel="advanced">Advanced</ug-tab>
      <ug-tab slot="nav" panel="disabled" disabled>Disabled</ug-tab>

      <ug-tab-panel name="general">This is the general tab panel.</ug-tab-panel>
      <ug-tab-panel name="custom">This is the custom tab panel.</ug-tab-panel>
      <ug-tab-panel name="advanced"
        >This is the advanced tab panel.</ug-tab-panel
      >
      <ug-tab-panel name="disabled">This is a disabled tab panel.</ug-tab-panel>
    </ug-tab-group> `};var w,y,T;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => {
    return html\`<ug-tab-group>
      <ug-tab slot="nav" panel="general">General</ug-tab>
      <ug-tab slot="nav" panel="custom">Custom</ug-tab>
      <ug-tab slot="nav" panel="advanced">Advanced</ug-tab>
      <ug-tab slot="nav" panel="disabled" disabled>Disabled</ug-tab>

      <ug-tab-panel name="general">This is the general tab panel.</ug-tab-panel>
      <ug-tab-panel name="custom">This is the custom tab panel.</ug-tab-panel>
      <ug-tab-panel name="advanced"
        >This is the advanced tab panel.</ug-tab-panel
      >
      <ug-tab-panel name="disabled">This is a disabled tab panel.</ug-tab-panel>
    </ug-tab-group> \`;
  }
}`,...(T=(y=u.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};const st=["TabGroup"];export{u as TabGroup,st as __namedExportsOrder,rt as default};
