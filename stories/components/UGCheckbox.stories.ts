import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import { userEvent, within } from '@storybook/test';
import { action } from '@storybook/addon-actions';
import '/lib/components/checkbox';
import '/lib/components/icon';
import '/lib/components/button';

// Utility function to remove default attributes
const removeDefaultAttributes = (code: string): string => {
  return code
    .replace(/\s*(help-text=""|name=""|size="medium")/g, '')
    .replace(/\s* indeterminate=""/g, ' indeterminate')
    .replace(/\s* disabled=""/g, ' disabled')
    .replace(/\s* checked=""/g, ' checked')
    .replace(/\s* required=""/g, ' required')
    .replace(/\s* defaultchecked=""/g, ' defaultchecked');
};

const meta: Meta = {
  title: 'Components/Checkbox',
  component: 'ug-checkbox',
  parameters: {
    docs: {
      subtitle: 'Checkboxes allow the user to toggle an option on or off.'
    }
  },
  argTypes: {
    // Properties
    name: {
      control: 'text',
      description:
        'The name of the checkbox, submitted as a name/value pair with form data.',
      table: { category: 'properties', defaultValue: { summary: undefined } }
    },
    value: {
      control: false,
      description:
        'The current value of the checkbox, submitted as a name/value pair with form data.',
      table: { category: 'properties', defaultValue: { summary: undefined } }
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The checkbox’s size.',
      table: { category: 'properties', defaultValue: { summary: 'medium' } }
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the checkbox.',
      table: { category: 'properties', defaultValue: { summary: 'false' } }
    },
    checked: {
      control: 'boolean',
      description: 'Draws the checkbox in a checked state.',
      table: { category: 'properties', defaultValue: { summary: 'false' } }
    },
    indeterminate: {
      control: 'boolean',
      description:
        'Draws the checkbox in an indeterminate state. This is usually applied to checkboxes that represents a “select all/none” behavior when associated checkboxes have a mix of checked and unchecked states.',
      table: { category: 'properties', defaultValue: { summary: 'false' } }
    },
    defaultChecked: {
      control: 'boolean',
      description:
        'The default value of the form control. Primarily used for resetting the form control.',
      table: { category: 'properties', defaultValue: { summary: 'false' } }
    },
    form: {
      control: false,
      description:
        'By default, form controls are associated with the nearest containing &lt;form&gt; element. This attribute allows you to place the form control outside of a form and associate it with the form that has this id. The form must be in the same document or shadow root for this to work.',
      table: { category: 'properties', defaultValue: { summary: undefined } }
    },
    required: {
      control: 'boolean',
      description: 'Makes the checkbox a required field.',
      table: { category: 'properties', defaultValue: { summary: 'false' } }
    },
    helpText: {
      control: 'text',
      description:
        "The checkbox’s help text. If you need to display HTML, use the help-text slot instead. This property is different from its attribute 'help-text'",
      table: { category: 'properties', defaultValue: { summary: undefined } }
    },
    validity: {
      control: false,
      description: 'Gets the validity state object.',
      table: { category: 'properties', defaultValue: { summary: undefined } }
    },
    validationMessage: {
      control: false,
      description: 'Gets the validation message.',
      table: { category: 'properties', defaultValue: { summary: undefined } }
    },
    // Slots
    label: {
      control: 'text',
      description: "The checkbox's label.",
      table: { category: 'slots', defaultValue: { summary: undefined } }
    },
    'help-text': {
      control: 'text',
      description:
        'Text that describes how to use the checkbox. Alternatively, you can use the help-text attribute.',
      table: { category: 'slots', defaultValue: { summary: undefined } }
    },
    // Events
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
    // Methods
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
    onGetform: {
      name: 'getForm()',
      action: 'getForm', // Logs the form method in the Actions panel
      description: 'Gets the associated form, if one exists.',
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
    name: '',
    size: 'medium',
    disabled: false,
    checked: false,
    required: false,
    helpText: '',
    label: 'Checkbox',
    indeterminate: false,
    defaultChecked: false
  },
  parameters: {
    docs: {
      disable: false,
      description: {
        story: `A default checkbox.`
      },
      source: {
        format: true,
        transform: (code: string) => removeDefaultAttributes(code)
      }
    }
  },
  render: (args) => {
    return html`<ug-checkbox
      name="${args.name}"
      size="${args.size}"
      ?disabled="${args.disabled}"
      ?checked="${args.checked}"
      ?required="${args.required}"
      help-text="${args.helpText}"
      ?indeterminate="${args.indeterminate}"
      ?defaultChecked="${args.defaultChecked}"
    >
      ${args.label}
    </ug-checkbox>`;
  }
};

export const Checked: Story = {
  args: {
    ...Checkbox.args,
    checked: true
  },
  parameters: {
    docs: {
      disable: false,
      description: {
        story: `Use the checked attribute to activate the checkbox.`
      },
      source: {
        format: true,
        transform: (code: string) => removeDefaultAttributes(code)
      }
    }
  },
  render: (args) => {
    return html`<ug-checkbox ?checked="${args.checked}">
      ${args.label}
    </ug-checkbox>`;
  }
};

export const Indeterminate: Story = {
  args: {
    ...Checkbox.args,
    indeterminate: true
  },
  parameters: {
    docs: {
      disable: false,
      description: {
        story: `Use the indeterminate attribute to make the checkbox indeterminate.`
      },
      source: {
        format: true,
        transform: (code: string) => removeDefaultAttributes(code)
      }
    }
  },
  render: (args) => {
    return html`<ug-checkbox ?indeterminate="${args.indeterminate}">
      ${args.label}
    </ug-checkbox>`;
  }
};

export const Disabled: Story = {
  args: {
    ...Checkbox.args,
    disabled: true
  },
  parameters: {
    docs: {
      disable: false,
      description: {
        story: `Use the disabled attribute to disable a checkbox.`
      },
      source: {
        format: true,
        transform: (code: string) => removeDefaultAttributes(code)
      }
    }
  },
  render: (args) => {
    return html`<ug-checkbox ?disabled="${args.disabled}">
      ${args.label}
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
      },
      source: {
        format: true
      }
    }
  },
  render: () =>
    html`<ug-checkbox size="small">Small</ug-checkbox>
      <ug-checkbox size="medium">Medium</ug-checkbox>
      <ug-checkbox size="large">Large</ug-checkbox>`
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
        format: true,
        transform: (code: string) => removeDefaultAttributes(code)
      }
    }
  },
  render: (args) =>
    html`<ug-checkbox help-text="${args.helpText}">${args.label}</ug-checkbox>`
};

export const CustomValidity: Story = {
  parameters: {
    docs: {
      controls: { disable: true },
      description: {
        story: `Use the setCustomValidity() method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.`
      },
      source: {
        format: true
      }
    }
  },
  render: () =>
    html`<form class="custom-validity">
        <ug-checkbox>Check me</ug-checkbox><br />
        <ug-button type="submit" variant="primary" style="margin-top: 1rem;">
          Submit
        </ug-button>
      </form>
      <script>
        const form = document.querySelector('.custom-validity');
        const checkbox = form.querySelector('ug-checkbox');
        const errorMessage = "Don't forget to check me!";

        // Set initial validity as soon as the element is defined
        customElements.whenDefined('ug-checkbox').then(async () => {
          await checkbox.updateComplete;
          checkbox.setCustomValidity(errorMessage);
        });

        // Update validity on change
        checkbox.addEventListener('ug-change', () => {
          checkbox.setCustomValidity(checkbox.checked ? '' : errorMessage);
        });

        // Handle submit
        form.addEventListener('submit', (event) => {
          event.preventDefault();
          alert('All fields are valid!');
        });
      </script> `
};

export const CheckboxWithEvents: Story = {
  tags: ['!autodocs'],
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
