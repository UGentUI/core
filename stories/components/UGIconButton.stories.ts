import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import { userEvent, within } from '@storybook/test';
import { action } from '@storybook/addon-actions';
import '/lib/components/icon-button';

const meta: Meta = {
  title: 'Components/IconButton',
  component: 'ug-icon-button',
  parameters: {
    docs: {
      subtitle:
        'Icon buttons are simple, icon-only buttons that can be used for actions and in toolbars'
    }
  },
  argTypes: {
    name: {
      control: 'text',
      description: 'The name of the icon to draw',
      table: {
        category: 'properties',
        defaultValue: { summary: undefined }
      }
    },
    label: {
      control: 'text',
      description: 'A description that gets read by assistive devices',
      table: {
        category: 'properties',
        defaultValue: { summary: '' }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
      table: {
        category: 'properties',
        defaultValue: { summary: 'false' }
      }
    },
    href: {
      control: 'text',
      description: 'When set, the button will be rendered as an <a> element',
      table: {
        category: 'properties',
        defaultValue: { summary: undefined }
      }
    }
  }
};

export default meta;

type Story = StoryObj;

export const IconButton: Story = {
  args: {
    name: 'gear',
    label: 'Settings',
    disabled: false
  },
  render: (args) => html`
    <ug-icon-button
      name="${args.name}"
      label="${args.label}"
      ?disabled="${args.disabled}"
    ></ug-icon-button>
  `
};

export const Sizes: Story = {
  parameters: {
    docs: {
      description: {
        story: "Icon buttons inherit their parent element's font-size."
      }
    }
  },
  render: () => html`
    <ug-icon-button
      name="pencil"
      label="Edit"
      style="font-size: 1.5rem;"
    ></ug-icon-button>
    <ug-icon-button
      name="pencil"
      label="Edit"
      style="font-size: 2rem;"
    ></ug-icon-button>
    <ug-icon-button
      name="pencil"
      label="Edit"
      style="font-size: 2.5rem;"
    ></ug-icon-button>
  `
};

export const Colors: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Icon buttons can be customized by styling the base part.'
      }
    }
  },
  render: () => html`
    <div class="icon-button-color">
      <ug-icon-button name="type-bold" label="Bold"></ug-icon-button>
      <ug-icon-button name="type-italic" label="Italic"></ug-icon-button>
      <ug-icon-button name="type-underline" label="Underline"></ug-icon-button>
    </div>
    <style>
      .icon-button-color ug-icon-button::part(base) {
        color: #b00091;
      }
      .icon-button-color ug-icon-button::part(base):hover,
      .icon-button-color ug-icon-button::part(base):focus {
        color: #c913aa;
      }
      .icon-button-color ug-icon-button::part(base):active {
        color: #960077;
      }
    </style>
  `
};

export const LinkButtons: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use the href attribute to convert the button to a link.'
      }
    }
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

export const WithTooltip: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Wrap a tooltip around an icon button to provide contextual information.'
      }
    }
  },
  render: () => html`
    <ug-tooltip content="Settings">
      <ug-icon-button name="gear" label="Settings"></ug-icon-button>
    </ug-tooltip>
  `
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use the disabled attribute to disable the icon button.'
      }
    }
  },
  render: () => html`
    <ug-icon-button name="gear" label="Settings" disabled></ug-icon-button>
  `
};

export const WithEvents: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates event handling on the icon button.'
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    button.focus();
    await new Promise((resolve) => setTimeout(resolve, 500));
    button.blur();
  },
  render: () => html`
    <ug-icon-button
      name="gear"
      label="Settings"
      @click="${action('click')}"
      @focus="${action('ug-focus')}"
      @blur="${action('ug-blur')}"
    ></ug-icon-button>
  `
};
