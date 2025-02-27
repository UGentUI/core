import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/radio-button';
import '/lib/components/radio-group';
import '/lib/components/icon';
import { action } from '@storybook/addon-actions';
import { userEvent } from '@storybook/test';

const meta: Meta = {
  title: 'Components/RadioButton',
  component: 'ug-radio-button',
  parameters: {
    docs: {
      subtitle:
        'Radios buttons allow the user to select a single option from a group using a button-like control.',
      description: {
        component:
          'Radio buttons are designed to be used with [radio groups](?path=/docs/components-radiogroup--docs). When a radio button has focus, the arrow keys can be used to change the selected option just like standard radio controls.'
      },
      //Hide unused variables
      source: {
        format: true,
        transform: (code: string) => {
          return code
            .replace(/\s*(value=""|size="medium")/g, '')
            .replace(/\s*(disabled="")/g, ' disabled');
        }
      }
    }
  },
  argTypes: {
    value: {
      name: 'value',
      description: `The radio's value. When selected, the radio group will receive this value.`,
      type: { name: 'string', required: false },
      table: {
        category: 'attributes',
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      control: { type: 'text' }
    },
    disabled: {
      name: 'disabled',
      description: `Disables the radio button.`,
      type: { name: 'boolean', required: false },
      table: {
        category: 'attributes',
        type: {
          summary: 'boolean',
          detail:
            'This is a reflected property that syncs with the disabled attribute'
        },
        defaultValue: { summary: 'false' }
      },
      control: { type: 'boolean' }
    },
    size: {
      name: 'size',
      description: `The radio button's size. When used inside a radio group, the size will be determined by the radio group's size so this attribute can typically be omitted.`,
      type: { name: 'string', required: false },
      options: ['small', 'medium', 'large'],
      table: {
        category: 'attributes',
        type: {
          summary: `'small' | 'medium' | 'large'`,
          detail:
            'This is a reflected property that syncs with the size attribute'
        },
        defaultValue: { summary: 'medium' }
      },
      control: false
    },
    // pill: {
    //   name: 'pill',
    //   description: `Draws a pill-style radio button with rounded edges.`,
    //   type: { name: 'boolean', required: false },
    //   table: {
    //     category: 'attributes',
    //     type: { summary: 'boolean' },
    //     defaultValue: { summary: 'false' }
    //   },
    //   control: { type: 'boolean' }
    // },
    // updateComplete: {
    //   name: 'updateComplete',
    //   description: `A read-only promise that resolves when the component has finished updating.`,
    //   type: { name: 'object', required: false },
    //   table: {
    //     category: 'attributes',
    //     type: { summary: 'Promise<void>' },
    //     defaultValue: { summary: '-' }
    //   },
    //   control: { type: null } // updateComplete is not editable
    // },
    defaultSlot: {
      name: '(default)',
      description: `The radio button's label.`,
      table: {
        category: 'slots',
        type: { summary: 'slot' },
        defaultValue: { summary: undefined }
      },
      control: { type: 'text' } // Allows editing the default slot content
    },
    prefixSlot: {
      name: 'prefix',
      description: `A presentational prefix icon or similar element.`,
      table: {
        category: 'slots',
        type: { summary: 'slot' },
        defaultValue: { summary: undefined }
      },

      control: 'check',
      options: ['ug-icon']
    },
    suffixSlot: {
      name: 'suffix',
      description: `A presentational suffix icon or similar element.`,
      table: {
        category: 'slots',
        type: { summary: 'slot' },
        defaultValue: { summary: undefined }
      },

      control: 'check',
      options: ['ug-icon']
    },
    ugBlur: {
      name: 'ug-blur',
      description: 'Emitted when the button loses focus.',
      table: {
        category: 'events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    ugFocus: {
      name: 'ug-focus',
      description: 'Emitted when the button gains focus.',
      table: {
        category: 'events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    focus: {
      name: 'focus()',
      description: 'Sets focus on the radio button.',
      table: {
        category: 'methods',
        type: { summary: 'Method' },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    blur: {
      name: 'blur()',
      description: 'Removes focus from the radio button.',
      table: {
        category: 'methods',
        type: { summary: 'Method' },
        defaultValue: { summary: undefined }
      },
      control: false
    }
  }
};

export default meta;

type Story = StoryObj;

export const RadioButton: Story = {
  args: {
    value: '1',
    disabled: false,
    size: 'medium',
    defaultSlot: 'Option 1',
    prefixSlot: '',
    suffixSlot: ''
  },
  parameters: {
    docs: {
      description: {
        story: 'A default radio button *(group)*.'
      }
    }
  },
  render: (args) => {
    return html`<ug-radio-group label="Select an option" value="1">
      <ug-radio-button value="${args.value}" ?disabled="${args.disabled}"
        >${args.prefixSlot == 'ug-icon'
          ? html`<ug-icon slot="prefix" name="hand-thumbs-down"></ug-icon>`
          : ''}${args.defaultSlot}${args.suffixSlot == 'ug-icon'
          ? html`<ug-icon slot="suffix" name="hand-thumbs-up"></ug-icon>`
          : ''}</ug-radio-button
      >
      <ug-radio-button value="2">Option 2</ug-radio-button>
      <ug-radio-button value="3">Option 3</ug-radio-button>
    </ug-radio-group>`;
  }
};

export const CheckedStates: Story = {
  parameters: {
    docs: {
      description: {
        story: `To set the initial value and checked state, use the <code>value</code> attribute on the containing radio group.`
      }
    },
    controls: { disable: true }
  },
  render: () => {
    return html`<ug-radio-group label="Select an option" value="2">
      <ug-radio-button value="1">Option 1</ug-radio-button>
      <ug-radio-button value="2">Option 2</ug-radio-button>
      <ug-radio-button value="3">Option 3</ug-radio-button>
    </ug-radio-group>`;
  }
};

export const Disabled: Story = {
  ...RadioButton,
  args: {
    ...RadioButton.args,
    disabled: true
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Use the <code>disabled</code> attribute to disable a radio button.`
      }
    }
  }
};

export const Sizes: Story = {
  parameters: {
    docs: {
      description: {
        story: `The radio button's size can be set through the size property. When used inside a radio group, the size will be determined by the radio group's size so this attribute can typically be omitted.`
      }
    },
    controls: { disable: true }
  },
  render: () => html`
    <ug-radio-group size="small" label="Select an option" name="a" value="1">
      <ug-radio-button value="1">Option 1</ug-radio-button>
      <ug-radio-button value="2">Option 2</ug-radio-button>
      <ug-radio-button value="3">Option 3</ug-radio-button>
    </ug-radio-group>

    <br />

    <ug-radio-group size="medium" label="Select an option" name="a" value="1">
      <ug-radio-button value="1">Option 1</ug-radio-button>
      <ug-radio-button value="2">Option 2</ug-radio-button>
      <ug-radio-button value="3">Option 3</ug-radio-button>
    </ug-radio-group>

    <br />

    <ug-radio-group size="large" label="Select an option" name="a" value="1">
      <ug-radio-button value="1">Option 1</ug-radio-button>
      <ug-radio-button value="2">Option 2</ug-radio-button>
      <ug-radio-button value="3">Option 3</ug-radio-button>
    </ug-radio-group>
  `
};

export const PrefixAndSuffixIcons: Story = {
  parameters: {
    docs: {
      description: {
        story: `Use the <code>prefix</code> and <code>suffix</code> slots to add icons.`
      }
    },
    controls: { disable: true }
  },
  render: () => {
    return html`<ug-radio-group label="Select an option" name="a" value="1">
      <ug-radio-button value="1">
        <ug-icon slot="prefix" name="box-archive"></ug-icon>
        Option 1
      </ug-radio-button>

      <ug-radio-button value="2">
        <ug-icon slot="suffix" name="bag-shopping"></ug-icon>
        Option 2
      </ug-radio-button>

      <ug-radio-button value="3">
        <ug-icon slot="prefix" name="gift"></ug-icon>
        <ug-icon slot="suffix" name="cart-shopping"></ug-icon>
        Option 3
      </ug-radio-button>
    </ug-radio-group> `;
  }
};

export const ButtonsWithIcons: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `You can omit button labels and use icons instead. Make sure to set a label attribute on each icon so screen readers will announce each option correctly.`
      }
    }
  },
  render: () => {
    return html`<ug-radio-group label="Select an option">
      <ug-radio-button value="angry">
        <ug-icon name="face-angry" label="Angry"></ug-icon>
      </ug-radio-button>

      <ug-radio-button value="sad">
        <ug-icon name="face-frown" label="Sad"></ug-icon>
      </ug-radio-button>

      <ug-radio-button value="neutral">
        <ug-icon name="face-meh" label="Neutral"></ug-icon>
      </ug-radio-button>

      <ug-radio-button value="happy">
        <ug-icon name="face-smile" label="Happy"></ug-icon>
      </ug-radio-button>

      <ug-radio-button value="laughing">
        <ug-icon name="face-laugh" label="Laughing"></ug-icon>
      </ug-radio-button>
    </ug-radio-group> `;
  }
};

export const RadioButtonWithEvents: Story = {
  tags: ['!autodocs'],
  parameters: {
    controls: { disable: true }
  },
  render: () => html`
    <ug-radio-group label="Select an option">
      <ug-radio-button
        value="1"
        @ug-focus="${action('ug-focus')}"
        @ug-blur="${action('ug-blur')}"
      >
        Option 1
      </ug-radio-button>
      <ug-radio-button value="2">Option 2</ug-radio-button>
    </ug-radio-group>
  `,
  play: async ({ canvasElement }) => {
    const radioButton = canvasElement.querySelectorAll('ug-radio-button')[0];
    if (!radioButton) {
      throw new Error('Radio not found');
    }

    await radioButton.updateComplete;
    radioButton.focus();
    // Wait a moment to see the focus state
    await new Promise((resolve) => setTimeout(resolve, 1000));
    radioButton.blur();

    // Get the internal button from shadow DOM
    const button = radioButton.shadowRoot?.querySelector('button');
    if (!button) {
      throw new Error('button not found');
    }

    await userEvent.click(button);
    await userEvent.tab();
  }
};
