import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/radio-button';
import '/lib/components/radio-group';
import '/lib/components/icon';
import { action } from '@storybook/addon-actions';
import { userEvent, within } from '@storybook/test';

const meta: Meta = {
  title: 'Components/RadioButton',
  component: 'ug-radio-button',
  parameters: {
    docs: {
      subtitle:
        'Radios buttons allow the user to select a single option from a group using a button-like control.',
      description: {
        component:
          'Radio buttons are designed to be used with [radio groups](/?path=/docs/components-radiogroup--docs). When a radio button has focus, the arrow keys can be used to change the selected option just like standard radio controls.'
      },
      //Hide unused variables
      source: {
        format: true,
        transform: (code: string) => {
          return code.replace(
            /\s*(value=""|size="medium"|label=""|help-text=""|placeholder=""|rows="4"|resize="vertical"|form=""|spellcheck="true")/g,
            ''
          );
        }
      }
    }
  },
  argTypes: {
    value: {
      name: 'value',
      description: `The radio’s value. When selected, the radio group will receive this value.`,
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
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: { type: 'boolean' }
    },
    size: {
      name: 'size',
      description: `The radio button’s size. When used inside a radio group, the size will be determined by the radio group’s size so this attribute can typically be omitted.`,
      type: { name: 'enum', required: false },
      options: ['small', 'medium', 'large'],
      table: {
        category: 'attributes',
        type: { summary: `'small' | 'medium' | 'large'` },
        defaultValue: { summary: 'medium' }
      },
      control: { type: 'select' }
    },
    pill: {
      name: 'pill',
      description: `Draws a pill-style radio button with rounded edges.`,
      type: { name: 'boolean', required: false },
      table: {
        category: 'attributes',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: { type: 'boolean' }
    },
    updateComplete: {
      name: 'updateComplete',
      description: `A read-only promise that resolves when the component has finished updating.`,
      type: { name: 'object', required: false },
      table: {
        category: 'attributes',
        type: { summary: 'Promise<void>' },
        defaultValue: { summary: '-' }
      },
      control: { type: null } // updateComplete is not editable
    },
    defaultSlot: {
      name: '(default)',
      description: `The radio button’s label.`,
      table: {
        category: 'slots',
        type: { summary: 'HTML' },
        defaultValue: { summary: '-' }
      },
      control: { type: 'text' } // Allows editing the default slot content
    },
    prefixSlot: {
      name: 'prefix',
      description: `A presentational prefix icon or similar element.`,
      table: {
        category: 'slots',
        type: { summary: 'HTML' },
        defaultValue: { summary: '-' }
      },

      control: 'check',
      options: ['<img>']
    },
    suffixSlot: {
      name: 'suffix',
      description: `A presentational suffix icon or similar element.`,
      table: {
        category: 'slots',
        type: { summary: 'HTML' },
        defaultValue: { summary: '-' }
      },

      control: 'check',
      options: ['<img>']
    }
  },
  ugBlur: {
    name: 'ug-blur',
    description: 'Emitted when the button loses focus.',
    table: {
      category: 'events',
      type: { summary: 'CustomEvent' },
      defaultValue: { summary: '-' }
    },
    action: 'ug-blur' // Automatically captures the event in Storybook actions
  },
  ugFocus: {
    name: 'ug-focus',
    description: 'Emitted when the button gains focus.',
    table: {
      category: 'events',
      type: { summary: 'CustomEvent' },
      defaultValue: { summary: '-' }
    },
    action: 'ug-focus' // Automatically captures the event in Storybook actions
  },
  focus: {
    name: 'focus',
    description: 'Sets focus on the radio button.',
    table: {
      category: 'methods',
      type: { summary: 'Method' },
      defaultValue: { summary: '-' }
    },
    control: false // Methods can't be directly controlled in Storybook
  },
  blur: {
    name: 'blur',
    description: 'Removes focus from the radio button.',
    table: {
      category: 'methods',
      type: { summary: 'Method' },
      defaultValue: { summary: '-' }
    },
    control: false // Methods can't be directly controlled in Storybook
  }
};

export default meta;

type Story = StoryObj;

export const RadioButton: Story = {
  args: {
    value: '1',
    disabled: false,
    size: 'medium',
    pill: false,
    defaultSlot: 'Option 1',
    prefixSlot: '',
    suffixSlot: ''
  },
  render: (args) => {
    return html`<ug-radio-group
      label="Select an option"
      value="1"
      size="${args.size}"
    >
      <ug-radio-button
        value="${args.value}"
        ?disabled="${args.disabled}"
        ?pill="${args.pill}"
        >${args.prefixSlot == '<img>'
          ? html`<ug-icon slot="prefix" name="hand-thumbs-down"></ug-icon>`
          : ''}
        ${args.defaultSlot}${args.suffixSlot == '<img>'
          ? html`<ug-icon slot="suffix" name="hand-thumbs-up"></ug-icon>`
          : ''}
      </ug-radio-button>
      <ug-radio-button value="2" ?pill="${args.pill}">Option 2</ug-radio-button>
      <ug-radio-button value="3" ?pill="${args.pill}">Option 3</ug-radio-button>
    </ug-radio-group>`;
  }
};

export const CheckedStates: Story = {
  ...RadioButton,
  args: {
    ...RadioButton.args
  },
  parameters: {
    docs: {
      description: {
        story: `To set the initial value and checked state, use the <code>value</code> attribute on the containing radio group.`
      }
    }
  }
};

export const Disabled: Story = {
  ...RadioButton,
  args: {
    ...RadioButton.args,
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: `Use the <code>disabled</code> attribute to disable a radio button.`
      }
    }
  }
};

export const Sizes: Story = {
  ...RadioButton,
  args: {
    ...RadioButton.args
  },
  parameters: {
    docs: {
      description: {
        story: `The radio button’s size can be set through the size property. When used inside a radio group, the size will be determined by the radio group’s size so this attribute can typically be omitted.`
      }
    }
  },
  render: (args, context) => html`
    <h4>Small</h4>
    ${RadioButton.render
      ? RadioButton.render({ ...args, size: 'small' }, context)
      : html`<div>No render available</div>`}
    <br />
    <h4>Medium</h4>
    ${RadioButton.render
      ? RadioButton.render({ ...args, size: 'medium' }, context)
      : html`<div>No render available</div>`}
    <br />
    <h4>Large</h4>
    ${RadioButton.render
      ? RadioButton.render({ ...args, size: 'large' }, context)
      : html`<div>No render available</div>`}
  `
};

export const Pill: Story = {
  ...Sizes,
  args: {
    ...Sizes.args,
    pill: true
  },
  parameters: {
    docs: {
      description: {
        story: `Use the <code>pill</code> attribute to give radio buttons rounded edges.`
      }
    }
  }
};

export const PrefixAndSuffixIcons: Story = {
  ...RadioButton,
  args: {
    ...RadioButton.args,
    prefixSlot: '<img>',
    suffixSlot: '<img>'
  },
  parameters: {
    docs: {
      description: {
        story: `Use the <code>prefix</code> and <code>suffix</code> slots to add icons.`
      }
    }
  },
  render: (args) => {
    return html`<ug-radio-group
      label="Select an option"
      value="1"
      size="${args.size}"
    >
      <ug-radio-button
        value="${args.value}"
        ?disabled="${args.disabled}"
        ?pill="${args.pill}"
      >
        <ug-icon slot="prefix" name="archive"></ug-icon>
        ${args.defaultSlot}
      </ug-radio-button>
      <ug-radio-button value="2" ?pill="${args.pill}">
        <ug-icon slot="suffix" name="bag"></ug-icon>
        Option 2</ug-radio-button
      >
      <ug-radio-button value="3" ?pill="${args.pill}">
        <ug-icon slot="prefix" name="gift"></ug-icon>
        <ug-icon slot="suffix" name="cart"></ug-icon>
        Option 3</ug-radio-button
      >
    </ug-radio-group>`;
  }
};

export const ButtonsWithIcons: Story = {
  ...RadioButton,
  args: {
    ...RadioButton.args
  },
  parameters: {
    docs: {
      description: {
        story: `You can omit button labels and use icons instead. Make sure to set a label attribute on each icon so screen readers will announce each option correctly.`
      }
    }
  },
  render: (args) => {
    return html`<ug-radio-group
      label="Select an option"
      value="1"
      size="${args.size}"
    >
      <ug-radio-button value="email">
        <ug-icon name="envelope" label="Email"></ug-icon>
      </ug-radio-button>

      <ug-radio-button value="facebook">
        <ug-icon name="facebook" label="Facebook"></ug-icon>
      </ug-radio-button>

      <ug-radio-button value="youtube">
        <ug-icon name="youtube" label="Youtube"></ug-icon>
      </ug-radio-button>

      <ug-radio-button value="twitter">
        <ug-icon name="twitter" label="Twitter"></ug-icon>
      </ug-radio-button>

      <ug-radio-button value="whatsapp">
        <ug-icon name="whatsapp" label="Whatsapp"></ug-icon>
      </ug-radio-button>
    </ug-radio-group>`;
  }
};

export const RadioButtonWithEventsAndInteractios: Story = {
  args: {
    value: '1',
    disabled: false,
    size: 'medium',
    pill: false,
    defaultSlot: 'Option 1',
    prefixSlot: '',
    suffixSlot: ''
  },
  parameters: {
    docs: {
      disable: true // This removes the story from the Docs tab
    }
  },
  render: (args) => {
    return html`<ug-radio-group label="Select an option" size="${args.size}">
      <ug-radio-button
        value="${args.value}"
        ?disabled="${args.disabled}"
        ?pill="${args.pill}"
        >${args.prefixSlot == '<img>'
          ? html`<ug-icon slot="prefix" name="hand-thumbs-down"></ug-icon>`
          : ''}
        ${args.defaultSlot}${args.suffixSlot == '<img>'
          ? html`<ug-icon slot="suffix" name="hand-thumbs-up"></ug-icon>`
          : ''}
      </ug-radio-button>
      <ug-radio-button
        value="2"
        ?pill="${args.pill}"
        data-testid="myRadioButton"
        @ug-focus="${action('ug-focus')}"
        @ug-blur="${action('ug-blur')}"
        >Option 2</ug-radio-button
      >
      <ug-radio-button value="3" ?pill="${args.pill}">Option 3</ug-radio-button>
    </ug-radio-group>`;
  },
  play: async ({ canvasElement }) => {
    const radioButton = within(canvasElement).getByTestId('myRadioButton');
    const shadowRoot = radioButton.shadowRoot;
    const button = shadowRoot?.querySelector('button') as HTMLElement;
    let focusEventTriggered = false;
    let blurEventTriggered = false;

    if (radioButton != null) {
      // Add listeners for the ug-focus and ug-blur events
      radioButton.addEventListener(
        'ug-focus',
        () => {
          focusEventTriggered = true;
        },
        { once: true }
      );

      radioButton.addEventListener(
        'ug-blur',
        () => {
          blurEventTriggered = true;
        },
        { once: true }
      );

      // Simulate focus on the radio button
      await userEvent.click(button); // Focus

      await new Promise((resolve) => setTimeout(resolve, 100));

      // Assert that the invalid event was triggered
      if (!focusEventTriggered) {
        throw new Error('The ug-focus event was not triggered.');
      }

      // Simulate blur by moving focus out
      await userEvent.tab(); // Move focus away (to blur)

      // Add a small delay to allow selection to complete
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    // Assert that the invalid event was triggered
    if (!blurEventTriggered) {
      throw new Error('The ug-blur event was not triggered.');
    }
  }
};
