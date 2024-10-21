import{i as v,k as m}from"./lit-element-CPYlYYac.js";import{c as f}from"./chunk.TUVJKY7S-B9PwIF6B.js";import{c as u,n as i,S as h,t as y}from"./chunk.NLWS5DN7-C0h9DzRV.js";import{R as w}from"./class-map-Bm7ZJXTF.js";import"./directive-Ctav8iJK.js";var _=v`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--ug-font-weight-semibold);
    letter-spacing: var(--ug-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--ug-border-radius-small);
    border: solid 1px var(--ug-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--ug-color-primary-600);
    color: var(--ug-color-neutral-0);
  }

  .badge--success {
    background-color: var(--ug-color-success-600);
    color: var(--ug-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--ug-color-neutral-600);
    color: var(--ug-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--ug-color-warning-600);
    color: var(--ug-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--ug-color-danger-600);
    color: var(--ug-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--ug-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--ug-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--ug-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--ug-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--ug-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--ug-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,r=class extends h{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return m`
      <span
        part="base"
        class=${w({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};r.styles=[f,_];u([i({reflect:!0})],r.prototype,"variant",2);u([i({type:Boolean,reflect:!0})],r.prototype,"pill",2);u([i({type:Boolean,reflect:!0})],r.prototype,"pulse",2);var x=Object.defineProperty,B=Object.getOwnPropertyDescriptor,P=(l,a,t,o)=>{for(var e=o>1?void 0:o?B(a,t):a,n=l.length-1,g;n>=0;n--)(g=l[n])&&(e=(o?g(a,t,e):g(e))||e);return o&&e&&x(a,t,e),e};let d=class extends r{};d=P([y("ug-badge")],d);const D={title:"Components/Badge",component:"ug-badge"},s={render:l=>m`<ug-badge>Badge</ug-badge>`};var c,p,b;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    return html\`<ug-badge>Badge</ug-badge>\`;
  }
}`,...(b=(p=s.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};const E=["Badge"];export{s as Badge,E as __namedExportsOrder,D as default};
