import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/option';
import '/lib/components/select';
import '/lib/components/icon';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Components/Option',
  component: 'ug-option',

  parameters: {
    docs: {
      description: {
        component:
          'Options define the selectable items within various form controls such as [select](./?path=/docs/components-select--docs).'
      },
      source: {
        format: true,

        transform: (code: string) => {
          return code
            .replace(/\s*(name=""|size="medium"|form=""|help-text="")/g, '')
            .replace(/\s*(required="")/g, ' required')
            .replace(/\s*(disabled="")/g, ' disabled');
        }
      }
    }
  },
  //Hoist-problems
  decorators: [
    (Story) => {
      // Apply CSS without showing in code snippet
      const style = document.createElement('style');
      // This fixes the hoisting but breaks the zoom buttons in the toolbar
      style.textContent = '.docs-story :not(.sb-story) { transform: none; }';
      document.head.appendChild(style);
      return Story();
    }
  ],
  argTypes: {
    value: {
      name: 'value (Reflects)',
      description:
        'The option’s value. When selected, the containing form control will receive this value. The value must be unique from other options in the same group. Values may not contain spaces, as spaces are used as delimiters when listing multiple values.',
      type: { name: 'string', required: false },
      defaultValue: '',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    disabled: {
      name: 'disabled (Reflects)',
      description:
        'Draws the option in a disabled state, preventing selection.',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    updateComplete: {
      name: 'updateComplete',
      description:
        'A read-only promise that resolves when the component has finished updating.',
      type: { name: 'Promise', required: false },
      table: {
        type: { summary: 'Promise' }
      }
    },

    defaultSlot: {
      name: '(default)',
      description: 'The option’s label.',
      control: { type: 'text' },
      table: {
        category: 'Slots',
        type: { summary: 'slot' },
        defaultValue: { summary: undefined }
      }
    },
    prefixSlot: {
      name: 'prefix',
      description:
        'Used to prepend an icon or similar element to the menu item.',
      control: 'check',
      options: ['Icon'],
      table: {
        category: 'Slots',
        type: { summary: 'slot' },
        defaultValue: { summary: undefined }
      }
    },
    suffixSlot: {
      name: 'suffix',
      description:
        'Used to append an icon or similar element to the menu item.',
      control: 'check',
      options: ['Icon'],
      table: {
        category: 'Slots',
        type: { summary: 'slot' },
        defaultValue: { summary: undefined }
      }
    },
    getTextLabel: {
      name: 'getTextLabel()',
      description: 'Returns a plain text label based on the option’s content.',
      args: {},
      table: {
        category: 'Methods',
        type: { summary: 'function' },
        defaultValue: { summary: undefined }
      },
      control: false
    }
  }
};

export default meta;

type Story = StoryObj;

export const Option: Story = {
  args: {
    value: 'option-1',
    disabled: false,
    prefixSlot: '',
    suffixSlot: '',
    defaultSlot: 'Email'
  },
  //prettier-ignore
  render: (args) => {
    return html`<ug-select label="Select one">
  <ug-option value="${args.value} ?disabled="${args.disabled}>${
    args.prefixSlot == 'Icon'
      ? html` <ug-icon slot="prefix" name="email"></ug-icon>`
      : null
  }${
    args.suffixSlot == 'Icon'
      ? html` <ug-icon slot="suffix" name="arrow-counterclockwise"></ug-icon>`
      : null
  }
    ${args.defaultSlot}
  </ug-option>
  <ug-option value="option-2">${
    args.prefixSlot == 'Icon'
      ? html` <ug-icon slot="prefix" name="telephone"></ug-icon>`
      : null
  }${
    args.suffixSlot == 'Icon'
      ? html` <ug-icon slot="suffix" name="arrow-counterclockwise"></ug-icon>`
      : null
  }
    Phone
  </ug-option>
  <ug-option value="option-3">${
    args.prefixSlot == 'Icon'
      ? html` <ug-icon slot="prefix" name="chat-dots"></ug-icon>`
      : null
  }${
    args.suffixSlot == 'Icon'
      ? html` <ug-icon slot="suffix" name="arrow-counterclockwise"></ug-icon>`
      : null
  }
    Chat
  </ug-option>
</ul-select>`;
  }
};

export const Disabled: Story = {
  ...Option,
  args: {
    ...Option.args,
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use the <code>disabled</code> attribute to disable an option and prevent it from being selected.'
      }
    }
  }
};

export const PrefixAndSuffix: Story = {
  ...Option,
  args: {
    ...Option.args,
    prefixSlot: 'Icon',
    suffixSlot: 'Icon'
  },
  parameters: {
    docs: {
      description: {
        story:
          'Add icons to the start and end of menu items using the <code>prefix</code> and <code>suffix</code> slots.'
      }
    }
  }
};
