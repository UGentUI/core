import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/copy-button';

const meta: Meta = {
  title: 'Components/CopyButton',
  component: 'ug-copy-button',
  parameters: {
    docs: {
      subtitle:
        'Copies text data to the clipboard when the user clicks the trigger.'
    }
  },
  argTypes: {
    value: {
      description: 'The text value to copy.',
      control: 'text',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    from: {
      description:
        'An id that references an element in the same document from which data will be copied. If both this and <code>value</code> are present, this value will take precedence. By default, the target element’s <code>textContent</code> will be copied. To copy an attribute, append the attribute name wrapped in square brackets, e.g. <code>from="el[value]"</code>. To copy a property, append a dot and the property name, e.g. <code>from="el.value"</code>.',
      control: 'text',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    disabled: {
      description: 'Disables the copy button.<br>`reflects: true`',
      control: 'boolean',
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    copyLabel: {
      name: 'copy-label',
      description: 'A custom label to show in the tooltip.',
      control: 'text',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    successLabel: {
      name: 'success-label',
      description: 'A custom label to show in the tooltip after copying.',
      control: 'text',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    errorLabel: {
      name: 'error-label',
      description:
        'A custom label to show in the tooltip when a copy error occurs.',
      control: 'text',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    feedbackDuration: {
      name: 'feedback-duration',
      description:
        'The length of time to show feedback before restoring the default trigger.',
      control: { type: 'number', min: 0 },
      table: {
        category: 'Properties',
        type: { summary: 'number' },
        defaultValue: { summary: '1000' }
      }
    },
    tooltipPlacement: {
      name: 'tooltip-placement',
      description: 'The preferred placement of the tooltip.',
      control: { type: 'select', options: ['top', 'right', 'bottom', 'left'] },
      table: {
        category: 'Properties',
        type: { summary: "'top' | 'right' | 'bottom' | 'left'" },
        defaultValue: { summary: "'top'" }
      }
    },
    hoist: {
      description:
        'Enable this option to prevent the tooltip from being clipped when the component is placed inside a container with <code>overflow: auto|hidden|scroll</code>. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.',
      control: 'boolean',
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    updateComplete: {
      description:
        'A read-only promise that resolves when the component has finished updating.',
      control: false,
      table: {
        category: 'Properties',
        type: { summary: 'Promise<void>' },
        defaultValue: { summary: undefined }
      }
    },
    copyIconSlot: {
      control: 'check',
      options: ['Icon'],
      name: 'copy-icon',
      description:
        'The icon to show in the default copy state. Works best with <code><ug-icon></code>.',
      table: {
        category: 'Slots',
        type: {
          summary: 'slot'
        },
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    successIconSlot: {
      control: 'check',
      options: ['Icon'],
      name: 'success-icon',
      description:
        'The icon to show when the content is copied. Works best with <code><ug-icon></code>.',
      table: {
        category: 'Slots',
        type: {
          summary: 'slot'
        },
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    errorIconSlot: {
      control: 'check',
      options: ['Icon'],
      name: 'error-icon',
      description:
        'The icon to show when a copy error occurs. Works best with <code><ug-icon></code>.',
      table: {
        category: 'Slots',
        type: {
          summary: 'slot'
        },
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    ugCopy: {
      // Events should not be controlled in the Storybook UI
      control: false,

      // Optional: Override how the event name appears in the controls panel
      name: 'ug-copy',

      // Connect the event to Storybook's Actions panel
      action: 'ug-copy',

      // Detailed description of the event
      description: 'Emitted when the data has been copied.	',

      table: {
        // Categorization in Storybook UI
        category: 'Events',
        // Type information with optional details
        type: {
          summary: 'CustomEvent'
        },
        defaultValue: {
          // defaultValue.summary should be undefined to hide the - in the auto-docs table
          summary: undefined
        }
      }
    },
    ugError: {
      // Events should not be controlled in the Storybook UI
      control: false,

      // Optional: Override how the event name appears in the controls panel
      name: 'ug-error',

      // Connect the event to Storybook's Actions panel
      action: 'ug-error',

      // Detailed description of the event
      description: 'Emitted when the data could not be copied.',

      table: {
        // Categorization in Storybook UI
        category: 'Events',
        // Type information with optional details
        type: {
          summary: 'CustomEvent'
        },
        defaultValue: {
          // defaultValue.summary should be undefined to hide the - in the auto-docs table
          summary: undefined
        }
      }
    }
  }
};

export default meta;

type Story = StoryObj;

export const CopyButton: Story = {
  render: () => {
    return html`<ug-copy-button></ug-copy-button>`;
  }
};
