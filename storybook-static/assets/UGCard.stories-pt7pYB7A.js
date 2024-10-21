import{i as m,k as u}from"./lit-element-CPYlYYac.js";import{H as b}from"./chunk.NYIIDP5N-BF-xModZ.js";import{c as g}from"./chunk.TUVJKY7S-B9PwIF6B.js";import{S as _,t as v}from"./chunk.NLWS5DN7-C0h9DzRV.js";import{R as f}from"./class-map-Bm7ZJXTF.js";import"./directive-Ctav8iJK.js";var y=m`
  :host {
    --border-color: var(--ug-color-neutral-200);
    --border-radius: var(--ug-border-radius-medium);
    --border-width: 1px;
    --padding: var(--ug-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--ug-panel-background-color);
    box-shadow: var(--ug-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,h=class extends _{constructor(){super(...arguments),this.hasSlotController=new b(this,"footer","header","image")}render(){return u`
      <div
        part="base"
        class=${f({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};h.styles=[g,y];var w=Object.defineProperty,x=Object.getOwnPropertyDescriptor,C=(d,a,s,o)=>{for(var r=o>1?void 0:o?x(a,s):a,t=d.length-1,c;t>=0;t--)(c=d[t])&&(r=(o?c(a,s,r):c(r))||r);return o&&r&&w(a,s,r),r};let l=class extends h{};l=C([v("ug-card")],l);const E={title:"Components/Card",component:"ug-card"},e={render:d=>u`<ug-card class="card-basic"
        >This is just a basic card. No image, no header, and no footer. Just
        your content.</ug-card
      ><style>
        .card-basic {
          max-width: 300px;
        }
      </style>`};var i,n,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    return html\`<ug-card class="card-basic"
        >This is just a basic card. No image, no header, and no footer. Just
        your content.</ug-card
      ><style>
        .card-basic {
          max-width: 300px;
        }
      </style>\`;
  }
}`,...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const H=["Card"];export{e as Card,H as __namedExportsOrder,E as default};
