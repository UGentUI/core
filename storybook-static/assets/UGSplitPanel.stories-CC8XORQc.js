import{i as b,k as y}from"./lit-element-CPYlYYac.js";import{c as v}from"./chunk.HF7GESMZ-CNy7Hbrd.js";import{L as z}from"./chunk.WLV3FVBR-BTBv_Sfe.js";import{w as p}from"./chunk.CCJUT23E-CIcXkUoC.js";import{c as C}from"./chunk.TUVJKY7S-B9PwIF6B.js";import{c as n,n as h,S as T,t as S}from"./chunk.NLWS5DN7-C0h9DzRV.js";import{t as _}from"./if-defined-4GS2c12S.js";import{e as $}from"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";var k=b`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--ug-color-neutral-200);
    color: var(--ug-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--ug-color-primary-600);
    color: var(--ug-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function I(e,i){function s(t){const d=e.getBoundingClientRect(),a=e.ownerDocument.defaultView,l=d.left+a.scrollX,x=d.top+a.scrollY,w=t.pageX-l,P=t.pageY-x;i!=null&&i.onMove&&i.onMove(w,P)}function r(){document.removeEventListener("pointermove",s),document.removeEventListener("pointerup",r),i!=null&&i.onStop&&i.onStop()}document.addEventListener("pointermove",s,{passive:!0}),document.addEventListener("pointerup",r),(i==null?void 0:i.initialEvent)instanceof PointerEvent&&s(i.initialEvent)}var o=class extends T{constructor(){super(...arguments),this.localize=new z(this),this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.resizeObserver)==null||e.unobserve(this)}detectSize(){const{width:e,height:i}=this.getBoundingClientRect();this.size=this.vertical?i:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const i=this.matches(":dir(rtl)");this.disabled||(e.cancelable&&e.preventDefault(),I(this,{onMove:(s,r)=>{let t=this.vertical?r:s;this.primary==="end"&&(t=this.size-t),this.snap&&this.snap.split(" ").forEach(a=>{let l;a.endsWith("%")?l=this.size*(parseFloat(a)/100):l=parseFloat(a),i&&!this.vertical&&(l=this.size-l),t>=l-this.snapThreshold&&t<=l+this.snapThreshold&&(t=l)}),this.position=v(this.pixelsToPercentage(t),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let i=this.position;const s=(e.shiftKey?10:1)*(this.primary==="end"?-1:1);e.preventDefault(),(e.key==="ArrowLeft"&&!this.vertical||e.key==="ArrowUp"&&this.vertical)&&(i-=s),(e.key==="ArrowRight"&&!this.vertical||e.key==="ArrowDown"&&this.vertical)&&(i+=s),e.key==="Home"&&(i=this.primary==="end"?100:0),e.key==="End"&&(i=this.primary==="end"?0:100),this.position=v(i,0,100)}}handleResize(e){const{width:i,height:s}=e[0].contentRect;this.size=this.vertical?s:i,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.emit("ug-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const e=this.vertical?"gridTemplateRows":"gridTemplateColumns",i=this.vertical?"gridTemplateColumns":"gridTemplateRows",s=this.matches(":dir(rtl)"),r=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,t="auto";return this.primary==="end"?s&&!this.vertical?this.style[e]=`${r} var(--divider-width) ${t}`:this.style[e]=`${t} var(--divider-width) ${r}`:s&&!this.vertical?this.style[e]=`${t} var(--divider-width) ${r}`:this.style[e]=`${r} var(--divider-width) ${t}`,this.style[i]="",y`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${_(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};o.styles=[C,k];n([$(".divider")],o.prototype,"divider",2);n([h({type:Number,reflect:!0})],o.prototype,"position",2);n([h({attribute:"position-in-pixels",type:Number})],o.prototype,"positionInPixels",2);n([h({type:Boolean,reflect:!0})],o.prototype,"vertical",2);n([h({type:Boolean,reflect:!0})],o.prototype,"disabled",2);n([h()],o.prototype,"primary",2);n([h()],o.prototype,"snap",2);n([h({type:Number,attribute:"snap-threshold"})],o.prototype,"snapThreshold",2);n([p("position")],o.prototype,"handlePositionChange",1);n([p("positionInPixels")],o.prototype,"handlePositionInPixelsChange",1);n([p("vertical")],o.prototype,"handleVerticalChange",1);var E=Object.defineProperty,D=Object.getOwnPropertyDescriptor,R=(e,i,s,r)=>{for(var t=r>1?void 0:r?D(i,s):i,d=e.length-1,a;d>=0;d--)(a=e[d])&&(t=(r?a(i,s,t):a(t))||t);return r&&t&&E(i,s,t),t};let u=class extends o{};u=R([S("ug-split-panel")],u);const M={title:"Components/SplitPanel",component:"ug-split-panel"},c={render:e=>y`<ug-split-panel>
      <div
        slot="start"
        style="height: 200px; background: var(--ug-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
      >
        Start
      </div>
      <div
        slot="end"
        style="height: 200px; background: var(--ug-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
      >
        End
      </div>
    </ug-split-panel>`};var m,f,g;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    return html\`<ug-split-panel>
      <div
        slot="start"
        style="height: 200px; background: var(--ug-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
      >
        Start
      </div>
      <div
        slot="end"
        style="height: 200px; background: var(--ug-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
      >
        End
      </div>
    </ug-split-panel>\`;
  }
}`,...(g=(f=c.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const U=["SplitPanel"];export{c as SplitPanel,U as __namedExportsOrder,M as default};
