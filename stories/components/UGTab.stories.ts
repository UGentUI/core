import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/tab';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Components/Tab',
  component: 'ug-tab',

  argTypes: {
    panel: {
      name: 'Panel',
      description:
        'The name of the tab panel this tab is associated with. The panel must be located in the same tab group.',
      control: { type: 'text' }, // Input text box
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    active: {
      name: 'Active',
      description: 'Draws the tab in an active state.',
      control: { type: 'boolean' }, // Toggle switch
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    closable: {
      name: 'Closable',
      description: 'Makes the tab closable and shows a close button.',
      control: { type: 'boolean' }, // Toggle switch
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    disabled: {
      name: 'Disabled',
      description: 'Disables the tab and prevents selection.',
      control: { type: 'boolean' }, // Toggle switch
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    updateComplete: {
      name: 'Update Complete',
      description:
        'A read-only promise that resolves when the component has finished updating.',
      control: false, // Read-only, so no control
      table: {
        type: { summary: 'Promise<void>' }
      }
    }
  }
};

export default meta;

type Story = StoryObj;

export const Tab: Story = {
  args: {
    panel: '',
    active: false,
    closable: false,
    disabled: false
  },
  render: (args) => {
    return html` <ug-tab
      panel="${args.panel}"
      ?active="${args.active}"
      ?closable="${args.closable}"
      ?disabled="${args.disabled}"
    >
    </ug-tab>`;
  }
};
