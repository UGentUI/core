import{i as m,k as v}from"./lit-element-CPYlYYac.js";import{L as h}from"./chunk.WLV3FVBR-BTBv_Sfe.js";import{c as _}from"./chunk.TUVJKY7S-B9PwIF6B.js";import{c as n,n as f,S as y,t as b}from"./chunk.NLWS5DN7-C0h9DzRV.js";import{r as k}from"./state-LdesfBTP.js";import{e as w}from"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";var x=m`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--ug-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--ug-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`,i=class extends y{constructor(){super(...arguments),this.localize=new h(this),this.value=0,this.label=""}updated(e){if(super.updated(e),e.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),s=2*Math.PI*t,a=s-this.value/100*s;this.indicatorOffset=`${a}px`}}render(){return v`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};i.styles=[_,x];n([w(".progress-ring__indicator")],i.prototype,"indicator",2);n([k()],i.prototype,"indicatorOffset",2);n([f({type:Number,reflect:!0})],i.prototype,"value",2);n([f()],i.prototype,"label",2);var P=Object.defineProperty,z=Object.getOwnPropertyDescriptor,O=(e,t,s,a)=>{for(var r=a>1?void 0:a?z(t,s):t,c=e.length-1,l;c>=0;c--)(l=e[c])&&(r=(a?l(t,s,r):l(r))||r);return a&&r&&P(t,s,r),r};let g=class extends i{};g=O([b("ug-progress-ring")],g);const L={title:"Components/ProgressRing",component:"ug-progress-ring"},o={render:e=>v`<ug-progress-ring value="25"></ug-progress-ring>`};var p,d,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    return html\`<ug-progress-ring value="25"></ug-progress-ring>\`;
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const F=["ProgressRing"];export{o as ProgressRing,F as __namedExportsOrder,L as default};
