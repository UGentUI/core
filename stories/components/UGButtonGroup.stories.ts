import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/button-group';
import '/lib/components/button';
import '/lib/components/icon';
import '/lib/components/tooltip';
import '/lib/components/dropdown';
import '/lib/components/menu';
import '/lib/components/menu-item';
import '/lib/components/visually-hidden';

const meta: Meta = {
  title: 'Components/ButtonGroup',
  component: 'button-group',
  parameters: {
    docs: {
      subtitle:
        'Button groups can be used to group related buttons into sections.',
      source: {
        format: true
      },
      importSection: true, // Enables the import section
      dependencies: ['button']
    }
  },
  decorators: [
    (Story) => {
      // Apply CSS without showing in code snippet
      const style = document.createElement('style');
      // This breaks the zoom buttons in the toolbar
      style.textContent = '.docs-story :not(.sb-story) { transform: none; }';
      document.head.appendChild(style);
      return Story();
    }
  ],
  argTypes: {
    label: {
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
        category: 'Properties',
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
  args: {
    label: 'Alignment'
  },
  render: (args) => {
    return html`<ug-button-group label="${args.label}">
      <ug-button>Left</ug-button>
      <ug-button>Center</ug-button>
      <ug-button>Right</ug-button>
    </ug-button-group>`;
  }
};

export const ButtonSizes: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'All button sizes are supported, but avoid mixing sizes within the same button group.'
      }
    },
    controls: { disable: true }
  },
  args: {
    label: 'Alignment'
  },
  render: (args) => {
    return html`<ug-button-group label="${args.label}">
        <ug-button size="small">Left</ug-button>
        <ug-button size="small">Center</ug-button>
        <ug-button size="small">Right</ug-button>
      </ug-button-group>

      <br /><br />

      <ug-button-group label="${args.label}">
        <ug-button size="medium">Left</ug-button>
        <ug-button size="medium">Center</ug-button>
        <ug-button size="medium">Right</ug-button>
      </ug-button-group>

      <br /><br />

      <ug-button-group label="${args.label}">
        <ug-button size="large">Left</ug-button>
        <ug-button size="large">Center</ug-button>
        <ug-button size="large">Right</ug-button>
      </ug-button-group>`;
  }
};

export const ThemeButtons: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Theme buttons are supported through the button’s <code>variant</code> attribute.'
      }
    },
    controls: { disable: true }
  },
  args: {
    label: 'Alignment'
  },
  render: (args) => {
    return html`<ug-button-group label="${args.label}">
        <ug-button variant="primary">Left</ug-button>
        <ug-button variant="primary">Center</ug-button>
        <ug-button variant="primary">Right</ug-button>
      </ug-button-group>

      <br /><br />

      <ug-button-group label="${args.label}">
        <ug-button variant="success">Left</ug-button>
        <ug-button variant="success">Center</ug-button>
        <ug-button variant="success">Right</ug-button>
      </ug-button-group>

      <br /><br />

      <ug-button-group label="${args.label}">
        <ug-button variant="neutral">Left</ug-button>
        <ug-button variant="neutral">Center</ug-button>
        <ug-button variant="neutral">Right</ug-button>
      </ug-button-group>

      <br /><br />

      <ug-button-group label="${args.label}">
        <ug-button variant="warning">Left</ug-button>
        <ug-button variant="warning">Center</ug-button>
        <ug-button variant="warning">Right</ug-button>
      </ug-button-group>

      <br /><br />

      <ug-button-group label="${args.label}">
        <ug-button variant="danger">Left</ug-button>
        <ug-button variant="danger">Center</ug-button>
        <ug-button variant="danger">Right</ug-button>
      </ug-button-group> `;
  }
};

// export const PillButtons: Story = {
//   parameters: {
//     docs: {
//       description: {
//         story:
//           'Pill buttons are supported through the button’s <code>pill</code> attribute.'
//       }
//     },
//     controls: { disable: true }
//   },
//   args: {
//     label: 'Alignment'
//   },
//   render: (args) => {
//     return html`<ug-button-group label="${args.label}">
//         <ug-button size="small" pill>Left</ug-button>
//         <ug-button size="small" pill>Center</ug-button>
//         <ug-button size="small" pill>Right</ug-button>
//       </ug-button-group>

//       <br /><br />

//       <ug-button-group label="${args.label}">
//         <ug-button size="medium" pill>Left</ug-button>
//         <ug-button size="medium" pill>Center</ug-button>
//         <ug-button size="medium" pill>Right</ug-button>
//       </ug-button-group>

//       <br /><br />

//       <ug-button-group label="${args.label}">
//         <ug-button size="large" pill>Left</ug-button>
//         <ug-button size="large" pill>Center</ug-button>
//         <ug-button size="large" pill>Right</ug-button>
//       </ug-button-group> `;
//   }
// };

export const DropdownsInButtonGroups: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Dropdowns can be placed inside button groups as long as the trigger is an <code><ug-button></code> element.'
      }
    },
    controls: { disable: true }
  },
  render: () => {
    return html`<ug-button-group label="Example Button Group">
      <ug-button>Button</ug-button>
      <ug-button>Button</ug-button>
      <ug-dropdown hoist>
        <ug-button slot="trigger" caret>Dropdown</ug-button>
        <ug-menu>
          <ug-menu-item>Item 1</ug-menu-item>
          <ug-menu-item>Item 2</ug-menu-item>
          <ug-menu-item>Item 3</ug-menu-item>
        </ug-menu>
      </ug-dropdown>
    </ug-button-group>`;
  }
};

export const SplitButtons: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Create a split button using a button and a dropdown. Use a [visually hidden](?path=/docs/components-visuallyhidden--docs) label to ensure the dropdown is accessible to users with assistive devices.'
      }
    },
    controls: { disable: true }
  },
  args: {
    label: 'Example Button Group'
  },
  render: (args) => {
    return html`<ug-button-group label="${args.label}">
      <ug-button variant="primary">Save</ug-button>
      <ug-dropdown placement="bottom-end" hoist>
        <ug-button slot="trigger" variant="primary" caret>
          <ug-visually-hidden>More options</ug-visually-hidden>
        </ug-button>
        <ug-menu>
          <ug-menu-item>Save</ug-menu-item>
          <ug-menu-item>Save as&hellip;</ug-menu-item>
          <ug-menu-item>Save all</ug-menu-item>
        </ug-menu>
      </ug-dropdown>
    </ug-button-group> `;
  }
};

export const TooltipsInButtonGroups: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Buttons can be wrapped in tooltips to provide more detail when the user interacts with them.'
      }
    },
    controls: { disable: true }
  },
  args: {
    label: 'Alignment'
  },
  render: (args) => {
    return html`<ug-button-group label="${args.label}">
      <ug-tooltip content="I'm on the left">
        <ug-button>Left</ug-button>
      </ug-tooltip>

      <ug-tooltip content="I'm in the middle">
        <ug-button>Center</ug-button>
      </ug-tooltip>

      <ug-tooltip content="I'm on the right">
        <ug-button>Right</ug-button>
      </ug-tooltip>
    </ug-button-group> `;
  }
};

export const ToolbarExample: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Create interactive toolbars with button groups.'
      }
    },
    controls: { disable: true }
  },
  args: {
    label: 'History'
  },
  render: () => {
    return html`<div class="button-group-toolbar">
        <ug-button-group label="History">
          <ug-tooltip content="Undo">
            <ug-button
              ><ug-icon name="arrows-rotate-reverse" label="Undo"></ug-icon
            ></ug-button>
          </ug-tooltip>
          <ug-tooltip content="Redo">
            <ug-button
              ><ug-icon name="arrow-rotate-right" label="Redo"></ug-icon
            ></ug-button>
          </ug-tooltip>
        </ug-button-group>

        <ug-button-group label="Formatting">
          <ug-tooltip content="Bold">
            <ug-button><ug-icon name="bold" label="Bold"></ug-icon></ug-button>
          </ug-tooltip>
          <ug-tooltip content="Italic">
            <ug-button
              ><ug-icon name="italic" label="Italic"></ug-icon
            ></ug-button>
          </ug-tooltip>
          <ug-tooltip content="Underline">
            <ug-button
              ><ug-icon name="underline" label="Underline"></ug-icon
            ></ug-button>
          </ug-tooltip>
        </ug-button-group>

        <ug-button-group label="Alignment">
          <ug-tooltip content="Align Left">
            <ug-button
              ><ug-icon name="align-left" label="Align Left"></ug-icon
            ></ug-button>
          </ug-tooltip>
          <ug-tooltip content="Align Center">
            <ug-button
              ><ug-icon name="align-justify" label="Align Center"></ug-icon
            ></ug-button>
          </ug-tooltip>
          <ug-tooltip content="Align Right">
            <ug-button
              ><ug-icon name="align-right" label="Align Right"></ug-icon
            ></ug-button>
          </ug-tooltip>
        </ug-button-group>
      </div>

      <style>
        .button-group-toolbar ug-button-group:not(:last-of-type) {
          margin-right: var(--ug-spacing-x-small);
        }
      </style> `;
  }
};
