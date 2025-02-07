import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/button-group';
import '/lib/components/button';
import '/lib/components/icon';
import '/lib/components/tooltip';
import '/lib/components/dropdown';

const meta: Meta = {
  title: 'Components/ButtonGroup',
  component: 'ug-button-group',
  parameters: {
    docs: {
      subtitle:
        'Button groups can be used to group related buttons into sections.',
      source: {
        format: true
      }
    }
  },
  argTypes: {
    propertyName: {
      // The type of control in Storybook UI
      control: 'text',

      // Detailed description of the property, add <br>`reflects: true` to mark the property as reflected
      description:
        'A label to use for the button group. This won’t be displayed on the screen, but it will be announced by assistive devices when interacting with the control and is strongly recommended.',

      table: {
        // Categorization in Storybook UI
        category: 'Properties',
        // Type information with optional details
        type: {
          summary: 'string'
        },
        // Default value information
        defaultValue: {
          summary: "''"
        }
      }
    },
    updateComplete: {
      description:
        'A read-only promise that resolves when the component has finished updating.',
      control: { disable: true }, // Read-only getter, not editable via Storybook controls
      table: {
        category: 'Attributes: Lifecycle',
        type: { summary: 'Promise<void>' },
        defaultValue: { summary: undefined }
      }
    },
    defaultSlot: {
      name: '(default)',
      description:
        'One or more <code><ug-button></code> elements to display in the button group.',
      control: false, // Slots are not controlled in the Storybook UI
      table: {
        category: 'Slots',
        type: { summary: 'slot' },
        defaultValue: { summary: 'undefined' }
      }
    }
  }
};

export default meta;

type Story = StoryObj;

export const ButtonGroup: Story = {
  render: () => {
    return html`<ug-button-group label="Alignment">
      <ug-button>Left</ug-button>
      <ug-button>Center</ug-button>
      <ug-button>Right</ug-button>
    </ug-button-group>`;
  }
};
