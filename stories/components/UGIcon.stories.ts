import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/icon';
import { action } from '@storybook/addon-actions';
import icons from '/lib/assets/icons/icons.json';

const iconNames = Object.entries(icons)
  .filter(([, icon]) => !icon.styles.includes('brands'))
  .map(([name]) => name)
  .sort();

const meta: Meta = {
  title: 'Components/Icon',
  component: 'icon',
  parameters: {
    docs: {
      subtitle:
        'Icons are symbols that can be used to represent various options within an application.',
      description: {
        component: `The UGent UI component library comes bundled with over ${Math.round(iconNames.length / 100) * 100} <a href="https://fontawesome.com/search?o=r&ic=pro-collection&s=regular&ip=sharp" >Font Awesome Pro - Regular Sharp</a> icons. <br>If you prefer, you can register <a href="#icon%20library">custom icon libraries</a> as well.`
      },
      source: {
        format: true,
        transform: (code: string) => {
          return code.replace(/\s*(name=""|library=""|label=""|src="")/g, '');
        }
      },
      importSection: true // Enables the import section
    }
  },
  argTypes: {
    // Properties
    name: {
      control: 'select',
      options: iconNames,
      description:
        'The name of the icon to draw. Available names depend on the icon library being used. <br> `reflects: true`',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: undefined }
      }
    },
    src: {
      control: 'text',
      description:
        'An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and can result in XSS attacks.',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: undefined }
      }
    },
    label: {
      control: 'text',
      description:
        'An alternate description to use for assistive devices. If omitted, the icon will be considered presentational and ignored by assistive devices.',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: undefined }
      }
    },
    library: {
      control: false,
      description:
        'The name of a registered custom icon library.<br>`reflects: true`',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: 'default' }
      }
    },
    updateComplete: {
      name: 'updateComplete',
      description:
        'A read-only promise that resolves when the component has finished updating.',
      table: {
        category: 'Properties',
        type: { summary: 'Promise<void>' },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    // Events
    'ug-load': {
      control: false,
      action: 'ug-load',
      description: 'Emitted when the icon has loaded.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      }
    },
    'ug-error': {
      control: false,
      action: 'ug-error',
      description: 'Emitted when the icon fails to load due to an error.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      }
    }
  }
};

export default meta;

type Story = StoryObj;

// Default story with controls
export const Icon: Story = {
  args: {
    name: 'bell',
    src: undefined,
    label: undefined,
    library: undefined
  },
  render: (args) => html`
    <ug-icon
      name="${args.name}"
      label="${args.label}"
      src="${args.src}"
      @ug-load="${action('ug-load')}"
      @ug-error="${action('ug-error')}"
    ></ug-icon>
  `
};

// Colors example
export const Colors: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Icons inherit their color from the current text color. Thus, you can set the color property on the `<ug-icon>` element or an ancestor to change the color.'
      }
    }
  },
  render: () => html`
    <div style="color: var(--ug-color-primary-600);">
      <ug-icon name="triangle-exclamation"></ug-icon>
      <ug-icon name="box-archive"></ug-icon>
      <ug-icon name="battery-bolt"></ug-icon>
      <ug-icon name="bell"></ug-icon>
    </div>
    <div style="color: var(--ug-color-warning-600);">
      <ug-icon name="clock"></ug-icon>
      <ug-icon name="cloud"></ug-icon>
      <ug-icon name="download"></ug-icon>
      <ug-icon name="file"></ug-icon>
    </div>
    <div style="color: var(--ug-color-success-600);">
      <ug-icon name="flag"></ug-icon>
      <ug-icon name="heart"></ug-icon>
      <ug-icon name="image"></ug-icon>
      <ug-icon name="bolt"></ug-icon>
    </div>
    <div style="color: var(--ug-color-danger-600);">
      <ug-icon name="microphone"></ug-icon>
      <ug-icon name="magnifying-glass"></ug-icon>
      <ug-icon name="star"></ug-icon>
      <ug-icon name="trash"></ug-icon>
    </div>
  `
};

// Sizes example
export const Sizes: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Icons are sized relative to the current font size. To change their size, set the `font-size` property on the icon itself or on a parent element as shown below.'
      }
    }
  },
  render: () => html`
    <div style="font-size: var(--ug-font-size-x-large);">
      <ug-icon name="triangle-exclamation"></ug-icon>
      <ug-icon name="box-archive"></ug-icon>
      <ug-icon name="battery-bolt"></ug-icon>
      <ug-icon name="bell"></ug-icon>
      <ug-icon name="clock"></ug-icon>
      <ug-icon name="cloud"></ug-icon>
      <ug-icon name="download"></ug-icon>
      <ug-icon name="file"></ug-icon>
      <ug-icon name="flag"></ug-icon>
      <ug-icon name="heart"></ug-icon>
      <ug-icon name="image"></ug-icon>
      <ug-icon name="bolt"></ug-icon>
      <ug-icon name="microphone"></ug-icon>
      <ug-icon name="magnifying-glass"></ug-icon>
      <ug-icon name="star"></ug-icon>
      <ug-icon name="trash"></ug-icon>
    </div>
  `
};

// Accessibility example
export const Labels: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'For non-decorative icons, use the `label` attribute to announce it to assistive devices.'
      }
    }
  },
  render: () => html` <ug-icon name="star" label="Add to favorites"></ug-icon> `
};

// Custom icon example
export const CustomIcons: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Custom icons can be loaded individually with the `src` attribute. Only SVGs on a local or CORS-enabled endpoint are supported. If you`re using more than one custom icon, it might make sense to register a custom icon library.'
      }
    }
  },
  render: () => html`
    <ug-icon
      src="/lib/assets/brand/logos/symbol-ugent.svg"
      style="font-size: var(--ug-font-size-x-large);"
    ></ug-icon>
  `
};

// Icon library example
export const IconLibrary: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Custom icon libraries can be registered to use additional icon sets. This example demonstrates how to use Font Awesome brand icons from their CDN. <br>If necessary, a mutator function can be used to mutate the SVG element before rendering. This is necessary for some libraries due to the many possible ways SVGs are crafted. For example, icons should ideally inherit the current text color via `currentColor`, so you may need to apply `fill="currentColor"` or `stroke="currentColor"` to the SVG element using this function'
      },
      //   canvas: {
      //     sourceState: 'shown'
      //   },
      source: {
        code: `
<div style="font-size: 24px;">
  <ug-icon library="brands" name="github"></ug-icon>
  <ug-icon library="brands" name="twitter"></ug-icon>
  <ug-icon library="brands" name="linkedin"></ug-icon>
</div>

<script type="module">
  import { registerIconLibrary } from '@ugent-ui/core';
  registerIconLibrary('brands', {
    resolver: (name) =>
      \`https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.1/svgs/brands/\${name}.svg\`,
    mutator: (svg) => svg.setAttribute('fill', 'currentColor')
  });
</script>`,
        expanded: true
      }
    }
  },
  render: () => {
    // Register the brand icons library
    void import('@shoelace-style/shoelace/dist/utilities/icon-library.js').then(
      ({ registerIconLibrary }) => {
        registerIconLibrary('brands', {
          resolver: (name) =>
            `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.1/svgs/brands/${name}.svg`,
          mutator: (svg) => svg.setAttribute('fill', 'currentColor')
        });
      }
    );

    return html`
      <div style="font-size: 24px;">
        <ug-icon library="brands" name="github"></ug-icon>
        <ug-icon library="brands" name="twitter"></ug-icon>
        <ug-icon library="brands" name="linkedin"></ug-icon>
      </div>
    `;
  }
};

// Events example
export const Events: Story = {
  parameters: {
    controls: { disable: true }
  },
  tags: ['!autodocs'],
  render: () => html`
    <ug-icon
      name="bell"
      @ug-load="${action('ug-load')}"
      @ug-error="${action('ug-error')}"
    ></ug-icon>
  `,
  play: async ({ canvasElement }) => {
    const icon = canvasElement.querySelector('ug-icon');
    await icon?.updateComplete;
    // Wait for the load event before setting the invalid src
    icon?.setAttribute('name', '');
    icon?.setAttribute('src', 'invalid-url.svg');
  }
};
