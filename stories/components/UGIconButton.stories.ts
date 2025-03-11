import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import { action } from '@storybook/addon-actions';
import '/lib/components/icon-button';
import '/lib/components/icon';
import icons from '/lib/assets/icons/icons.json';

const iconNames = Object.entries(icons)
  .filter(([, icon]) => !icon.styles.includes('brands'))
  .map(([name]) => name)
  .sort();

const meta: Meta = {
  title: 'Components/IconButton',
  component: 'icon-button',
  parameters: {
    docs: {
      subtitle:
        'Icon buttons are simple, icon-only buttons that can be used for actions and in toolbars.',
      description: {
        component:
          'For a full list of icons that come bundled with the UGent UI component library, refer to the <a href="?path=/docs/components-icon--docs">icon</a> component.'
      },
      source: {
        format: true,
        transform: (code: string) => {
          return code
            .replace(
              /\s*(name=""|label=""|library=""|src=""|href=""|target=""|download="")/g,
              ''
            )
            .replace(/\s* disabled=""/g, ' disabled');
        }
      },
      importSection: true, // Enables the import section
      dependencies: ['icon']
    }
  },
  argTypes: {
    // Properties
    name: {
      control: 'select',
      options: iconNames,
      description:
        'The name of the icon to draw. Available names depend on the icon library being used.',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: undefined }
      }
    },
    library: {
      control: false,
      description: 'The name of a registered custom icon library.',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: 'default' }
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
    href: {
      control: 'text',
      description:
        'When set, the button will be rendered as an `<a>` with this `href` instead of a `<button>`.',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: undefined }
      }
    },
    target: {
      control: 'select',
      options: ['_blank', '_parent', '_self', '_top'],
      description:
        'Tells the browser where to open the link. Only used when `href` is set.',
      table: {
        category: 'Properties',
        type: { summary: '_blank | _parent | _self | _top' },
        defaultValue: { summary: undefined }
      }
    },
    download: {
      control: 'text',
      description:
        'Tells the browser to download the linked file as this filename. Only used when `href` is set.',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: undefined }
      }
    },
    label: {
      control: 'text',
      description:
        'A description that gets read by assistive devices. For optimal accessibility, you should always include a label that describes what the icon button does.',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button. <br> `reflects: true`',
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    updateComplete: {
      control: false,
      description:
        'A read-only promise that resolves when the component has finished updating.',
      table: {
        category: 'Properties',
        type: { summary: 'Promise<void>' },
        defaultValue: { summary: undefined }
      }
    },
    // Events
    'ug-blur': {
      control: false,
      action: 'ug-blur',
      description: 'Emitted when the icon button loses focus.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      }
    },
    'ug-focus': {
      control: false,
      action: 'ug-focus',
      description: 'Emitted when the icon button gains focus.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      }
    },
    // Methods
    click: {
      control: false,
      name: 'click()',
      description: 'Simulates a click on the icon button.',
      table: {
        category: 'Methods',
        type: { summary: '() => void' },
        defaultValue: { summary: undefined }
      }
    },
    focus: {
      control: false,
      name: 'focus()',
      description: 'Sets focus on the icon button.',
      table: {
        category: 'Methods',
        type: { summary: '(options?: FocusOptions) => void' },
        defaultValue: { summary: undefined }
      }
    },
    blur: {
      control: false,
      name: 'blur()',
      description: 'Removes focus from the icon button.',
      table: {
        category: 'Methods',
        type: { summary: '() => void' },
        defaultValue: { summary: undefined }
      }
    }
  }
};

export default meta;

type Story = StoryObj;

// Default story with all controls
export const IconButton: Story = {
  args: {
    name: 'gear',
    label: 'Settings',
    disabled: false,
    href: undefined,
    src: undefined,
    target: undefined,
    download: undefined
  },
  render: (args) => html`
    <ug-icon-button
      name="${args.name}"
      label="${args.label}"
      ?disabled="${args.disabled}"
      href="${args.href}"
      src="${args.src}"
      target="${args.target}"
      download="${args.download}"
      @ug-blur="${action('ug-blur')}"
      @ug-focus="${action('ug-focus')}"
    ></ug-icon-button>
  `
};

// Size variants
export const Sizes: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "Icon buttons inherit their parent element's `font-size`."
      }
    }
  },
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <ug-icon-button
        name="pencil"
        label="Edit"
        style="font-size: var(--ug-font-size-large);"
      ></ug-icon-button>
      <ug-icon-button
        name="pencil"
        label="Edit"
        style="font-size: var(--ug-font-size-x-large);"
      ></ug-icon-button>
      <ug-icon-button
        name="pencil"
        label="Edit"
        style="font-size: var(--ug-font-size-2x-large);"
      ></ug-icon-button>
    </div>
  `
};

// Link button
export const Link: Story = {
  parameters: {
    controls: { disable: true }
  },
  render: () => html`
    <ug-icon-button
      name="gear"
      label="Settings"
      href="https://example.com"
      target="_blank"
    ></ug-icon-button>
  `
};

// Colors story
export const Colors: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Icon buttons can be customized using CSS custom properties.'
      }
    }
  },
  render: () => html`
    <div class="icon-button-color">
      <ug-icon-button name="bold" label="Bold"></ug-icon-button>
      <ug-icon-button name="italic" label="Italic"></ug-icon-button>
      <ug-icon-button name="underline" label="Underline"></ug-icon-button>
    </div>

    <style>
      .icon-button-color ug-icon-button::part(base) {
        color: var(--ug-color-danger-600);
      }

      .icon-button-color ug-icon-button::part(base):hover,
      .icon-button-color ug-icon-button::part(base):focus {
        color: var(--ug-color-danger-800);
      }

      .icon-button-color ug-icon-button::part(base):active {
        color: var(--ug-color-danger-900);
      }
    </style>
  `
};

// Events demonstration
export const IconButtonWithEvents: Story = {
  tags: ['!autodocs'],
  render: () => html`
    <ug-icon-button
      name="gear"
      label="Settings"
      @ug-blur="${action('ug-blur')}"
      @ug-focus="${action('ug-focus')}"
    ></ug-icon-button>
  `,
  play: async ({ canvasElement }) => {
    const iconButton = canvasElement.querySelector('ug-icon-button');
    await iconButton?.updateComplete;

    iconButton?.click();
    iconButton?.focus();
    iconButton?.blur();
  }
};
