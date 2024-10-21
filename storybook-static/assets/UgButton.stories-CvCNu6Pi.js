import{k as a}from"./lit-element-CPYlYYac.js";import{w as ct,u as dt}from"./index-CuG0X5cE.js";import{v as gt}from"./v4-CQkTLCs1.js";import"./index-BDqxD1Sp.js";import"./chunk.R2T2D3TO-B7K_Sxkv.js";import"./chunk.WLV3FVBR-BTBv_Sfe.js";import"./chunk.TUVJKY7S-B9PwIF6B.js";import"./chunk.NLWS5DN7-C0h9DzRV.js";import"./chunk.2RCF7SLU-CB9V1Wsb.js";import"./chunk.MAQXLKQ7-CBa5hNL1.js";import"./chunk.NYIIDP5N-BF-xModZ.js";import"./chunk.O7VCMB7W-quwE6Eft.js";import"./chunk.3Y6SB6QS-B3KesEIx.js";import"./chunk.CCJUT23E-CIcXkUoC.js";import"./directive-helpers-CHX3h6dV.js";import"./state-LdesfBTP.js";import"./class-map-Bm7ZJXTF.js";import"./directive-Ctav8iJK.js";import"./static-DHppwan5.js";import"./if-defined-4GS2c12S.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";const{addons:bt}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:mt}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:k}=__STORYBOOK_MODULE_GLOBAL__;var pt="storybook/actions",ft=`${pt}/action-event`,ht={depth:10,clearOnStoryChange:!0,limit:50},ot=(t,n)=>{let e=Object.getPrototypeOf(t);return!e||n(e)?e:ot(e,n)},vt=t=>!!(typeof t=="object"&&t&&ot(t,n=>/^Synthetic(?:Base)?Event$/.test(n.constructor.name))&&typeof t.persist=="function"),yt=t=>{if(vt(t)){let n=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));n.persist();let e=Object.getOwnPropertyDescriptor(n,"view"),o=e==null?void 0:e.value;return typeof o=="object"&&(o==null?void 0:o.constructor.name)==="Window"&&Object.defineProperty(n,"view",{...e,value:Object.create(o.constructor.prototype)}),n}return t},wt=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?gt():Date.now().toString(36)+Math.random().toString(36).substring(2);function z(t,n={}){let e={...ht,...n},o=function(...h){var y,w;if(n.implicit){let x=(y="__STORYBOOK_PREVIEW__"in k?k.__STORYBOOK_PREVIEW__:void 0)==null?void 0:y.storyRenders.find(r=>r.phase==="playing"||r.phase==="rendering");if(x){let r=!((w=window==null?void 0:window.FEATURES)!=null&&w.disallowImplicitActionsInRenderV8),S=new mt({phase:x.phase,name:t,deprecated:r});if(r)console.warn(S);else throw S}}let rt=bt.getChannel(),st=wt(),ut=5,v=h.map(yt),it=h.length>1?v:v[0],lt={id:st,count:0,data:{name:t,args:it},options:{...e,maxDepth:ut+(e.depth||3),allowFunction:e.allowFunction||!1}};rt.emit(ft,lt)};return o.isAction=!0,o.implicit=n.implicit,o}const Nt={title:"Components/Button",component:"ug-button",parameters:{docs:{subtitle:"Buttons represent actions that are available to the user"}},argTypes:{variant:{control:"select",options:["default","primary","success","neutral","warning","danger","text"],description:"The variant of the button.",table:{category:"attributes",defaultValue:{summary:"default"}}},size:{control:"select",options:["small","medium","large"],description:"The size of the button.",table:{category:"attributes",defaultValue:{summary:"medium"}}},disabled:{control:"boolean",description:"Disables the button.",table:{category:"attributes",defaultValue:{summary:"false"}}},outline:{control:"boolean",description:"Outlined button with transparent background.",table:{category:"attributes",defaultValue:{summary:"false"}}},caret:{control:"boolean",description:"Shows a dropdown indicator.",table:{category:"attributes",defaultValue:{summary:"false"}}},loading:{control:"boolean",description:"Shows a loading spinnner.",table:{category:"attributes",defaultValue:{summary:"false"}}},label:{control:"text",description:"The button's label.",table:{category:"slots",defaultValue:{summary:void 0}}},prefix:{control:"check",options:["Icon"],description:"A prefix icon or similar element.",table:{type:{summary:"HTML"},category:"slots",defaultValue:{summary:void 0}}},suffix:{control:"check",options:["Icon"],description:"A suffix icon or similar element.",table:{type:{summary:"HTML"},category:"slots",defaultValue:{summary:void 0}}},ugBlur:{name:"ug-blur",action:"ug-blur",description:"Emitted when the button loses focus.",table:{type:{summary:void 0},category:"events",defaultValue:{summary:void 0}},control:!1},ugFocus:{name:"ug-focus",action:"ug-focus",description:"Emitted when the button gains focus.",table:{type:{summary:void 0},category:"events",defaultValue:{summary:void 0}},control:!1},onClick:{name:"click()",action:"click",description:"Simulates a click on the button.",table:{type:{summary:void 0},category:"methods",defaultValue:{summary:void 0}},control:!1},onFocus:{name:"focus()",action:"focus",description:"Sets focus on the button.",table:{type:{summary:void 0},category:"methods",defaultValue:{summary:void 0}},control:!1},onBlur:{name:"blur()",action:"blur",description:"Removes focus from the button.",table:{type:{summary:void 0},category:"methods",defaultValue:{summary:void 0}},control:!1}}},s={args:{variant:"default",size:"medium",disabled:!1,outline:!1,caret:!1,loading:!1,label:"Button",prefix:null,suffix:null},parameters:{docs:{disable:!1,description:{story:"A default button."}}},render:t=>a`<ug-button
      variant="${t.variant}"
      size="${t.size}"
      ?disabled="${t.disabled}"
      ?outline="${t.outline}"
      ?caret="${t.caret}"
      ?loading="${t.loading}"
    >${t.prefix=="Icon"?a`<ug-icon slot="prefix" name="gear"></ug-icon>`:null}${t.suffix=="Icon"?a`<ug-icon slot="suffix" name="arrow-counterclockwise"></ug-icon>`:null}
    ${t.label}
</ug-button>`},u={args:{},parameters:{controls:{disable:!0},docs:{description:{story:"Use the variant attribute to set the button’s variant."}}},render:t=>a`
<ug-button variant="default">Default</ug-button>
<ug-button variant="primary">Primary</ug-button>
<ug-button variant="success">Success</ug-button>
<ug-button variant="neutral">Neutral</ug-button>
<ug-button variant="warning">Warning</ug-button>
<ug-button variant="danger">Danger</ug-button>`},i={args:{},parameters:{controls:{disable:!0},docs:{description:{story:"Use the outline attribute to draw outlined buttons with transparent backgrounds."}}},render:t=>a`
<ug-button variant="default" outline>Default</ug-button>
<ug-button variant="primary" outline>Primary</ug-button>
<ug-button variant="success" outline>Success</ug-button>
<ug-button variant="neutral" outline>Neutral</ug-button>
<ug-button variant="warning" outline>Warning</ug-button>
<ug-button variant="danger" outline>Danger</ug-button>`},l={args:{},parameters:{controls:{disable:!0},docs:{description:{story:"Use the size attribute to change a button’s size."}}},render:()=>a`
<ug-button size="small">Small</ug-button>
<ug-button size="medium">Medium</ug-button>
<ug-button size="large">Large</ug-button>`},c={args:{variant:"primary",size:"medium",disabled:!0},parameters:{docs:{controls:{disable:!0},description:{story:"Use the disabled attribute to disable a button."},source:{code:'<ug-button variant="primary" disabled>Disabled Button</ug-button'}},controls:{exclude:["disabled"]}},render:t=>a`<ug-button
      variant="${t.variant}"
      size="${t.size}"
      ?disabled="${t.disabled}"
      >Button</ug-button
    >`},d={args:{},parameters:{controls:{disable:!0},docs:{description:{story:"Use the text variant to create text buttons that share the same size as regular buttons but don’t have backgrounds or borders."}}},render:()=>a`
<ug-button variant="text" size="small">Small</ug-button>
<ug-button variant="text" size="medium">Medium</ug-button>
<ug-button variant="text" size="large">Large</ug-button>`},g={args:{},parameters:{controls:{disable:!0},docs:{description:{story:"It’s often helpful to have a button that works like a link. This is possible by setting the href attribute, which will make the component render an <a> under the hood. This gives you all the default link behavior the browser provides (e.g. CMD/CTRL/SHIFT + CLICK) and exposes the target and download attributes."}}},render:()=>a`
<ug-button href="https://example.com/">Link</ug-button>
<ug-button href="https://example.com/" target="_blank">New Window</ug-button>
<ug-button href="/assets/images/wordmark.svg" download="shoelace.svg">Download</ug-button>
<ug-button href="https://example.com/" disabled>Disabled</ug-button>`},b={args:{},parameters:{controls:{disable:!0},docs:{description:{story:"Use the prefix and suffix slots to add icons."}}},render:()=>a`
<ug-button>
    <ug-icon slot="prefix" name="gear"></ug-icon>
    Settings
</ug-button>
<ug-button>
    <ug-icon slot="suffix" name="arrow-counterclockwise"></ug-icon>
    Refresh
</ug-button>`},m={args:{},parameters:{controls:{disable:!0},docs:{description:{story:"Use the caret attribute to add a dropdown indicator when a button will trigger a dropdown, menu, or popover."}}},render:()=>a`
<ug-button size="small" caret>Small</ug-button>
<ug-button size="medium" caret>Medium</ug-button>
<ug-button size="large" caret>Large</ug-button>`},p={args:{},parameters:{controls:{disable:!0},docs:{description:{story:"Use the loading attribute to make a button busy. The width will remain the same as before, preventing adjacent elements from moving around."}}},render:()=>a`
<ug-button variant="default" loading>Default</ug-button>
<ug-button variant="primary" loading>Primary</ug-button>
<ug-button variant="success" loading>Success</ug-button>
<ug-button variant="neutral" loading>Neutral</ug-button>
<ug-button variant="warning" loading>Warning</ug-button>
<ug-button variant="danger" loading>Danger</ug-button>`},f={args:{variant:"default",size:"medium",disabled:!1,outline:!1,label:"Button"},parameters:{controls:{disable:!0},docs:{description:{story:'This story demonstrates how the Button handles events like "ug-focus" and "ug-blur".'}}},play:async({canvasElement:t})=>{const e=ct(t).getByText("Button");await dt.click(e),e.focus(),await new Promise(o=>setTimeout(o,500)),e.blur()},render:t=>a`
<ug-button 
    @click="${t.onClick}"
    @focus="${z("ug-focus")}"
    @blur="${z("ug-blur")}"
>${t.label}</ug-button>`};var _,O,D;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "medium",
    disabled: false,
    outline: false,
    caret: false,
    loading: false,
    label: "Button",
    prefix: null,
    suffix: null
  },
  parameters: {
    docs: {
      disable: false,
      description: {
        story: \`A default button.\`
      }
    }
  },
  // prettier-ignore
  render: args => {
    return html\`<ug-button
      variant="\${args.variant}"
      size="\${args.size}"
      ?disabled="\${args.disabled}"
      ?outline="\${args.outline}"
      ?caret="\${args.caret}"
      ?loading="\${args.loading}"
    >\${args.prefix == "Icon" ? html\`<ug-icon slot="prefix" name="gear"></ug-icon>\` : null}\${args.suffix == "Icon" ? html\`<ug-icon slot="suffix" name="arrow-counterclockwise"></ug-icon>\` : null}
    \${args.label}
</ug-button>\`;
  }
}`,...(D=(O=s.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var B,$,T;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {},
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`Use the variant attribute to set the button’s variant.\`
      }
    }
  },
  // prettier-ignore
  render: args => html\`
<ug-button variant="default">Default</ug-button>
<ug-button variant="primary">Primary</ug-button>
<ug-button variant="success">Success</ug-button>
<ug-button variant="neutral">Neutral</ug-button>
<ug-button variant="warning">Warning</ug-button>
<ug-button variant="danger">Danger</ug-button>\`
}`,...(T=($=u.parameters)==null?void 0:$.docs)==null?void 0:T.source}}};var E,I,R;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {},
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`Use the outline attribute to draw outlined buttons with transparent backgrounds.\`
      }
    }
  },
  // prettier-ignore
  render: args => html\`
<ug-button variant="default" outline>Default</ug-button>
<ug-button variant="primary" outline>Primary</ug-button>
<ug-button variant="success" outline>Success</ug-button>
<ug-button variant="neutral" outline>Neutral</ug-button>
<ug-button variant="warning" outline>Warning</ug-button>
<ug-button variant="danger" outline>Danger</ug-button>\`
}`,...(R=(I=i.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var V,L,P;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {},
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`Use the size attribute to change a button’s size.\`
      }
    }
  },
  // prettier-ignore
  render: () => html\`
<ug-button size="small">Small</ug-button>
<ug-button size="medium">Medium</ug-button>
<ug-button size="large">Large</ug-button>\`
}`,...(P=(L=l.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var U,C,A;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "medium",
    disabled: true
  },
  parameters: {
    docs: {
      controls: {
        disable: true
      },
      description: {
        story: \`Use the disabled attribute to disable a button.\`
      },
      source: {
        code: \`<ug-button variant="primary" disabled>Disabled Button</ug-button\`
      }
    },
    controls: {
      exclude: ["disabled"]
    }
  },
  render: args => html\`<ug-button
      variant="\${args.variant}"
      size="\${args.size}"
      ?disabled="\${args.disabled}"
      >Button</ug-button
    >\`
}`,...(A=(C=c.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var W,M,j;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {},
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`Use the text variant to create text buttons that share the same size as regular buttons but don’t have backgrounds or borders.\`
      }
    }
  },
  // prettier-ignore
  render: () => html\`
<ug-button variant="text" size="small">Small</ug-button>
<ug-button variant="text" size="medium">Medium</ug-button>
<ug-button variant="text" size="large">Large</ug-button>\`
}`,...(j=(M=d.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var N,F,K;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {},
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`It’s often helpful to have a button that works like a link. This is possible by setting the href attribute, which will make the component render an <a> under the hood. This gives you all the default link behavior the browser provides (e.g. CMD/CTRL/SHIFT + CLICK) and exposes the target and download attributes.\`
      }
    }
  },
  // prettier-ignore
  render: () => html\`
<ug-button href="https://example.com/">Link</ug-button>
<ug-button href="https://example.com/" target="_blank">New Window</ug-button>
<ug-button href="/assets/images/wordmark.svg" download="shoelace.svg">Download</ug-button>
<ug-button href="https://example.com/" disabled>Disabled</ug-button>\`
}`,...(K=(F=g.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var Y,H,G;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {},
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`Use the prefix and suffix slots to add icons.\`
      }
    }
  },
  // prettier-ignore
  render: () => html\`
<ug-button>
    <ug-icon slot="prefix" name="gear"></ug-icon>
    Settings
</ug-button>
<ug-button>
    <ug-icon slot="suffix" name="arrow-counterclockwise"></ug-icon>
    Refresh
</ug-button>\`
}`,...(G=(H=b.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var q,J,Q;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {},
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`Use the caret attribute to add a dropdown indicator when a button will trigger a dropdown, menu, or popover.\`
      }
    }
  },
  // prettier-ignore
  render: () => html\`
<ug-button size="small" caret>Small</ug-button>
<ug-button size="medium" caret>Medium</ug-button>
<ug-button size="large" caret>Large</ug-button>\`
}`,...(Q=(J=m.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,tt;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {},
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`Use the loading attribute to make a button busy. The width will remain the same as before, preventing adjacent elements from moving around.\`
      }
    }
  },
  // prettier-ignore
  render: () => html\`
<ug-button variant="default" loading>Default</ug-button>
<ug-button variant="primary" loading>Primary</ug-button>
<ug-button variant="success" loading>Success</ug-button>
<ug-button variant="neutral" loading>Neutral</ug-button>
<ug-button variant="warning" loading>Warning</ug-button>
<ug-button variant="danger" loading>Danger</ug-button>\`
}`,...(tt=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:tt.source}}};var et,nt,at;f.parameters={...f.parameters,docs:{...(et=f.parameters)==null?void 0:et.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "medium",
    disabled: false,
    outline: false,
    label: "Button"
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: \`This story demonstrates how the Button handles events like "ug-focus" and "ug-blur".\`
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Button");
    // Simulate a click event
    await userEvent.click(button);

    // Simulate focus
    button.focus();
    await new Promise(resolve => setTimeout(resolve, 500)); // Wait to see the focus effect

    // Simulate blur
    button.blur();
  },
  // prettier-ignore
  render: args => html\`
<ug-button 
    @click="\${args.onClick}"
    @focus="\${action("ug-focus")}"
    @blur="\${action("ug-blur")}"
>\${args.label}</ug-button>\`
}`,...(at=(nt=f.parameters)==null?void 0:nt.docs)==null?void 0:at.source}}};const Ft=["Button","Variants","OutlineButtons","Sizes","Disabled","TextButtons","LinkButtons","PrefixAndSuffixIcons","Caret","Loading","ButtonWithEvents"];export{s as Button,f as ButtonWithEvents,m as Caret,c as Disabled,g as LinkButtons,p as Loading,i as OutlineButtons,b as PrefixAndSuffixIcons,l as Sizes,d as TextButtons,u as Variants,Ft as __namedExportsOrder,Nt as default};
