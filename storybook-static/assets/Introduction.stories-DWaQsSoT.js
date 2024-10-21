const s={title:"Introduction",tags:["!autodocs"],parameters:{layout:"fullscreen"}},e={render:()=>`
    <div style="padding: 40px; max-width: 800px; margin: auto;">
    <h1>UGentUI Web Components</h1>
    <p>Welcome to the UGentUI Web Components Storybook. This documentation will guide you through the installation,
        usage, and theming of the UGentUI web components.</p>
    <h2>Getting Started</h2>
    <p>To begin using UGentUI web components, install the core package by running:</p>
    <pre><code>npm install @ugent-ui/core</code></pre>
    <h2>Usage</h2>
    <p>
        After installation, you can start using the components by importing them into your project. For example, to use
        the button component:
    </p>
    <pre><code>import "@ugent-ui/core/components/button";</code></pre>
    <h2>Theming</h2>
    <p>
        To apply the default styles globally across your project, import the UGentUI style sheet:
    </p>
    <pre><code>import "@ugent-ui/core/style.css";</code></pre>
    <h2>Setting the Base Path</h2>
    <p>
        Some UGentUI components rely on external assets. To ensure the components can locate these assets, you need to
        set the base path:
    </p>
    <pre><code>import { setBasePath } from "@ugent-ui/core";</code></pre>
    <pre><code>setBasePath("/node_modules/@ugent-ui/core/dist/");</code></pre>
    </div>
  `};var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => /*html*/\`
    <div style="padding: 40px; max-width: 800px; margin: auto;">
    <h1>UGentUI Web Components</h1>
    <p>Welcome to the UGentUI Web Components Storybook. This documentation will guide you through the installation,
        usage, and theming of the UGentUI web components.</p>
    <h2>Getting Started</h2>
    <p>To begin using UGentUI web components, install the core package by running:</p>
    <pre><code>npm install @ugent-ui/core</code></pre>
    <h2>Usage</h2>
    <p>
        After installation, you can start using the components by importing them into your project. For example, to use
        the button component:
    </p>
    <pre><code>import "@ugent-ui/core/components/button";</code></pre>
    <h2>Theming</h2>
    <p>
        To apply the default styles globally across your project, import the UGentUI style sheet:
    </p>
    <pre><code>import "@ugent-ui/core/style.css";</code></pre>
    <h2>Setting the Base Path</h2>
    <p>
        Some UGentUI components rely on external assets. To ensure the components can locate these assets, you need to
        set the base path:
    </p>
    <pre><code>import { setBasePath } from "@ugent-ui/core";</code></pre>
    <pre><code>setBasePath("/node_modules/@ugent-ui/core/dist/");</code></pre>
    </div>
  \`
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const r=["Introduction"];export{e as Introduction,r as __namedExportsOrder,s as default};
