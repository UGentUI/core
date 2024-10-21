import{i as h,k as g}from"./lit-element-CPYlYYac.js";import{c as v}from"./chunk.TUVJKY7S-B9PwIF6B.js";import{c as m,n as p,S as f,t as w}from"./chunk.NLWS5DN7-C0h9DzRV.js";import{R as _}from"./class-map-Bm7ZJXTF.js";import"./directive-Ctav8iJK.js";var y=h`
  :host {
    --border-radius: var(--ug-border-radius-pill);
    --color: var(--ug-color-neutral-200);
    --sheen-color: var(--ug-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,a=class extends f{constructor(){super(...arguments),this.effect="none"}render(){return g`
      <div
        part="base"
        class=${_({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};a.styles=[v,y];m([p()],a.prototype,"effect",2);var b=Object.defineProperty,x=Object.getOwnPropertyDescriptor,S=(r,t,s,n)=>{for(var e=n>1?void 0:n?x(t,s):t,l=r.length-1,i;l>=0;l--)(i=r[l])&&(e=(n?i(t,s,e):i(e))||e);return n&&e&&b(t,s,e),e};let d=class extends a{};d=S([w("ug-skeleton")],d);const E={title:"Components/Skeleton",component:"ug-skeleton"},o={render:r=>g`<div class="skeleton-overview">
        <header>
          <ug-skeleton></ug-skeleton>
          <ug-skeleton></ug-skeleton>
        </header>

        <ug-skeleton></ug-skeleton>
        <ug-skeleton></ug-skeleton>
        <ug-skeleton></ug-skeleton>
      </div>

      <style>
        .skeleton-overview header {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }

        .skeleton-overview header ug-skeleton:last-child {
          flex: 0 0 auto;
          width: 30%;
        }

        .skeleton-overview ug-skeleton {
          margin-bottom: 1rem;
        }

        .skeleton-overview ug-skeleton:nth-child(1) {
          float: left;
          width: 3rem;
          height: 3rem;
          margin-right: 1rem;
          vertical-align: middle;
        }

        .skeleton-overview ug-skeleton:nth-child(3) {
          width: 95%;
        }

        .skeleton-overview ug-skeleton:nth-child(4) {
          width: 80%;
        }
      </style> `};var u,c,k;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    return html\`<div class="skeleton-overview">
        <header>
          <ug-skeleton></ug-skeleton>
          <ug-skeleton></ug-skeleton>
        </header>

        <ug-skeleton></ug-skeleton>
        <ug-skeleton></ug-skeleton>
        <ug-skeleton></ug-skeleton>
      </div>

      <style>
        .skeleton-overview header {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }

        .skeleton-overview header ug-skeleton:last-child {
          flex: 0 0 auto;
          width: 30%;
        }

        .skeleton-overview ug-skeleton {
          margin-bottom: 1rem;
        }

        .skeleton-overview ug-skeleton:nth-child(1) {
          float: left;
          width: 3rem;
          height: 3rem;
          margin-right: 1rem;
          vertical-align: middle;
        }

        .skeleton-overview ug-skeleton:nth-child(3) {
          width: 95%;
        }

        .skeleton-overview ug-skeleton:nth-child(4) {
          width: 80%;
        }
      </style> \`;
  }
}`,...(k=(c=o.parameters)==null?void 0:c.docs)==null?void 0:k.source}}};const R=["Skeleton"];export{o as Skeleton,R as __namedExportsOrder,E as default};
