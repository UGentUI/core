import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import { userEvent, within } from '@storybook/test';
import { action } from '@storybook/addon-actions';
import '/lib/components/checkbox';

const meta: Meta = {
  title: 'Components/Checkbox',
  component: 'ug-checkbox',
  parameters: {
    docs: {
      subtitle: 'Checkboxes allow the user to toggle an option on or off.'
    }
  },
  argTypes: {
    name: {
      control: 'text',
      description:
        'The name of the checkbox, submitted as a name/value pair with form data.',
      table: { category: 'attributes', defaultValue: { summary: undefined } }
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The checkbox’s size.',
      table: { category: 'attributes', defaultValue: { summary: 'medium' } }
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the checkbox.',
      table: { category: 'attributes', defaultValue: { summary: 'false' } }
    },
    checked: {
      control: 'boolean',
      description: 'Draws the checkbox in a checked state.',
      table: { category: 'attributes', defaultValue: { summary: 'false' } }
    },
    required: {
      control: 'boolean',
      description: 'Makes the checkbox a required field.',
      table: { category: 'attributes', defaultValue: { summary: 'false' } }
    },
    helpText: {
      control: 'text',
      description:
        'Text that describes how to use the checkbox. Alternatively, you can use the help-text attribute.',
      table: {
        category: 'slots',
        defaultValue: { summary: undefined }
      }
    },
    ugBlur: {
      name: 'ug-blur',
      action: 'ug-blur', // Logs the ug-blur event in the Actions panel
      description: 'Emitted when the checkbox loses focus.',
      table: {
        type: { summary: undefined },
        category: 'events',
        defaultValue: { summary: undefined }
      },
      control: false
    },
    ugChange: {
      name: 'ug-change',
      action: 'ug-change', // Logs the ug-change event in the Actions panel
      description: 'Emitted when the checked state changes.',
      table: {
        type: { summary: undefined },
        category: 'events',
        defaultValue: { summary: undefined }
      },
      control: false
    },
    ugFocus: {
      name: 'ug-focus',
      action: 'ug-focus', // Logs the ug-focus event in the Actions panel
      description: 'Emitted when the checkbox gains focus.',
      table: {
        type: { summary: undefined },
        category: 'events',
        defaultValue: { summary: undefined }
      },
      control: false
    },
    UgInput: {
      name: 'ug-input',
      action: 'ug-input', // Logs the ug-input event in the Actions panel
      description: 'Emitted when the checkbox receives input.',
      table: {
        type: { summary: undefined },
        category: 'events',
        defaultValue: { summary: undefined }
      },
      control: false
    },
    ugInvalid: {
      name: 'ug-invalid',
      action: 'ug-invalid', // Logs the ug-invalid event in the Actions panel
      description:
        'Emitted when the form control has been checked for validity and its constraints aren’t satisfied.',
      table: {
        type: { summary: undefined },
        category: 'events',
        defaultValue: { summary: undefined }
      },
      control: false
    },
    onClick: {
      name: 'click()',
      action: 'click', // Logs the click event in the Actions panel
      description: 'Simulates a click on the checkbox.',
      table: {
        type: { summary: undefined },
        category: 'methods',
        defaultValue: { summary: undefined }
      },
      control: false
    },
    onFocus: {
      name: 'focus()',
      action: 'focus', // Logs the focus method in the Actions panel
      description: 'Sets focus on the checkbox.',
      table: {
        type: { summary: undefined },
        category: 'methods',
        defaultValue: { summary: undefined }
      },
      control: false
    },
    onBlur: {
      name: 'blur()',
      action: 'blur', // Logs the blur method in the Actions panel
      description: 'Removes focus from the checkbox.',
      table: {
        type: { summary: undefined },
        category: 'methods',
        defaultValue: { summary: undefined }
      },
      control: false
    },
    onCheckValidity: {
      name: 'checkValidity()',
      action: 'checkValidity', // Logs the checkValidity method in the Actions panel
      description:
        'Checks for validity but does not show a validation message. Returns true when valid and false when invalid.',
      table: {
        type: { summary: undefined },
        category: 'methods',
        defaultValue: { summary: undefined }
      },
      control: false
    },
    onReportValidity: {
      name: 'reportValidity()',
      action: 'reportValidity', // Logs the reportValidity method in the Actions panel
      description:
        'Checks for validity and shows the browser’s validation message if the control is invalid.',
      table: {
        type: { summary: undefined },
        category: 'methods',
        defaultValue: { summary: undefined }
      },
      control: false
    },
    onSetCustomValidity: {
      name: 'setCustomValidity()',
      action: 'setCustomValidity', // Logs the setCustomValidity method in the Actions panel
      description:
        'Sets a custom validation message. The value provided will be shown to the user when the form is submitted. To clear the custom validation message, call this method with an empty string.',
      table: {
        type: { summary: undefined },
        category: 'methods',
        defaultValue: { summary: undefined }
      },
      control: false
    }
  }
};

export default meta;

type Story = StoryObj;

export const Checkbox: Story = {
  args: {
    size: 'medium',
    disabled: false,
    checked: false,
    required: false,
    helpText: '',
    name: 'Checkbox'
  },
  parameters: {
    docs: {
      disable: false,
      description: {
        story: `A default checkbox.`
      }
    }
  },
  // prettier-ignore
  render: (args) => {
    return html`<ug-checkbox
      size="${args.size}"
      ?disabled="${args.disabled}"
      ?checked="${args.checked}"
      ?required="${args.required}"
      help-text="${args.helpText}"
    >
    ${args.name}
</ug-checkbox>`;
  }
};

export const Sizes: Story = {
  args: {},
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Use the size attribute to change a checkbox’s size.`
      }
    }
  },
  // prettier-ignore
  render: () =>
    html`
<ug-checkbox size="small">Small</ug-checkbox>
<ug-checkbox size="medium">Medium</ug-checkbox>
<ug-checkbox size="large">Large</ug-checkbox>`
};

export const Disabled: Story = {
  args: {
    ...Checkbox.args,
    disabled: true
  },
  parameters: {
    docs: {
      controls: { disable: true },
      description: {
        story: `Use the disabled attribute to disable a checkbox.`
      },
      source: {
        code: `<ug-checkbox disabled>Disabled Button</ug-checkbox>`
      }
    },
    controls: {
      exclude: ['disabled']
    }
  },
  render: (args) =>
    html` <ug-checkbox
      size="${args.size}"
      ?disabled="${args.disabled}"
      ?checked="${args.checked}"
      ?required="${args.required}"
      help-text="${args.helpText}"
      >${args.name}</ug-checkbox
    >`
};

export const HelpText: Story = {
  args: {
    ...Checkbox.args,
    helpText: 'What should the user know about the checkbox?'
  },
  parameters: {
    docs: {
      controls: { disable: true },
      description: {
        story: `Add descriptive help text to a switch with the help-text attribute. For help texts that contain HTML, use the help-text slot instead.`
      },
      source: {
        code: `<ug-checkbox help-text="What should the user know about the checkbox?">Label</ug-checkbox>`
      }
    }
  },
  render: (args) =>
    html`<ug-checkbox
      size="${args.size}"
      ?disabled="${args.disabled}"
      ?checked="${args.checked}"
      ?required="${args.required}"
      help-text="${args.helpText}"
      >${args.name}</ug-checkbox
    >`
};

export const CheckboxWithEvents: Story = {
  args: {
    ...Checkbox.args
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `This story demonstrates how the Checkbox handles events like "ug-focus" and "ug-blur".`
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByText('Checkbox');
    // Simulate a click event
    await userEvent.click(checkbox);

    // Simulate focus
    checkbox.focus();
    await new Promise((resolve) => setTimeout(resolve, 500)); // Wait to see the focus effect

    // Simulate blur
    checkbox.blur();
  },
  // prettier-ignore
  render: (args) => html`
<ug-checkbox 
    @click="${args.onClick}"
    @focus="${action("ug-focus")}"
    @blur="${action("ug-blur")}"
>Checkbox</ug-checkbox>`
};
