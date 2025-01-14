import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import { action } from '@storybook/addon-actions';
import '/lib/components/checkbox';
import '/lib/components/icon';
import '/lib/components/button';
import { userEvent } from '@storybook/test';

// Utility function to remove default attributes
const removeDefaultAttributes = (code: string): string => {
  return code
    .replace(/\s*(help-text=""|name=""|size="medium")/g, '')
    .replace(/\s* indeterminate=""/g, ' indeterminate')
    .replace(/\s* disabled=""/g, ' disabled')
    .replace(/\s* checked=""/g, ' checked')
    .replace(/\s* required=""/g, ' required');
};

const meta: Meta = {
  title: 'Components/Checkbox',
  component: 'ug-checkbox',
  parameters: {
    docs: {
      subtitle: 'Checkboxes allow the user to toggle an option on or off.',
      source: {
        format: true,
        transform: (code: string) => removeDefaultAttributes(code)
      }
    }
  },
  argTypes: {
    // Attributes (set in HTML)
    name: {
      control: 'text',
      description:
        'The name of the checkbox, submitted as a name/value pair with form data.',
      table: { category: 'attributes', defaultValue: { summary: '' } }
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: "The checkbox's size.",
      table: { category: 'attributes', defaultValue: { summary: 'medium' } }
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the checkbox.',
      table: { category: 'attributes', defaultValue: { summary: 'false' } }
    },
    required: {
      control: 'boolean',
      description: 'Makes the checkbox a required field.',
      table: { category: 'attributes', defaultValue: { summary: 'false' } }
    },
    helpText: {
      name: 'help-text',
      control: 'text',
      description: "The checkbox's help text.",
      table: { category: 'attributes', defaultValue: { summary: '' } }
    },
    // Properties (accessed via JavaScript)
    value: {
      control: false,
      description:
        'The current value of the checkbox, submitted as a name/value pair with form data.',
      table: {
        category: 'properties',
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      }
    },
    checked: {
      control: 'boolean',
      description: 'Draws the checkbox in a checked state.',
      table: {
        category: 'properties',
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
          detail:
            'This is a reflected property that syncs with the checked attribute.'
        }
      }
    },
    form: {
      control: false,
      description:
        'By default, form controls are associated with the nearest containing `<form>` element. This property allows you to place the form control outside of a form and associate it with the form that has this id. The form must be in the same document or shadow root for this to work.',
      table: {
        category: 'properties',
        type: {
          summary: 'string',
          detail:
            'This is a reflected property that syncs with the form attribute.'
        },
        defaultValue: { summary: '' }
      }
    },
    indeterminate: {
      control: 'boolean',
      description:
        'Draws the checkbox in an indeterminate state. This is usually applied to checkboxes that represents a “select all/none” behavior when associated checkboxes have a mix of checked and unchecked states.',
      table: {
        category: 'properties',
        defaultValue: { summary: 'false' },
        type: {
          summary: 'boolean',
          detail:
            'This is a reflected property that syncs with the indeterminate attribute.'
        }
      }
    },
    validity: {
      control: false,
      description: 'Gets the validity state object.',
      table: {
        type: { summary: undefined },
        category: 'properties',
        defaultValue: { summary: undefined }
      }
    },
    validationMessage: {
      control: false,
      description: 'Gets the validation message.',
      table: {
        type: { summary: undefined },
        category: 'properties',
        defaultValue: { summary: undefined }
      }
    },

    // Slots
    label: {
      name: 'default',
      control: 'text',
      description: "The checkbox's label.",
      table: {
        category: 'slots',
        defaultValue: { summary: undefined }
      }
    },
    helpTextSlot: {
      name: 'help-text',
      control: 'text',
      description:
        'Text that describes how to use the checkbox. Alternatively, you can use the help-text attribute.',
      table: {
        category: 'slots',
        defaultValue: { summary: undefined }
      }
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
    onGetForm: {
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
    indeterminate: false,
    label: 'Checkbox',
    helpTextSlot: ''
  },
  parameters: {
    docs: {
      disable: false,
      description: {
        story: `A default checkbox.`
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
      ${args.label}${!args.helpText && args.helpTextSlot
        ? html` <div slot="help-text">${args.helpTextSlot}</div> `
        : ''}
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
    controls: { disable: true }
  },
  play: async ({ canvasElement }) => {
    try {
      // Wait for custom element to be defined
      await customElements.whenDefined('ug-checkbox');

      const checkbox = canvasElement.querySelector('ug-checkbox');
      if (!checkbox) throw new Error('Checkbox not found');

      // Wait for component to be ready
      await checkbox.updateComplete;

      // Get the control element (the clickable wrapper)
      const control = checkbox.shadowRoot?.querySelector('.checkbox__control');
      if (!control)
        throw new Error('Checkbox control not found in shadow root');

      // 1. Test Methods
      // Focus method
      checkbox.focus();
      action('focus method')('Called focus()');
      await new Promise((r) => setTimeout(r, 100));

      // Click method
      checkbox.click();
      action('click method')('Called click()');
      await new Promise((r) => setTimeout(r, 100));

      // Blur method
      checkbox.blur();
      action('blur method')('Called blur()');
      await new Promise((r) => setTimeout(r, 100));

      // Check validity method
      const isValid = checkbox.checkValidity();
      action('checkValidity method')(`Result: ${isValid}`);

      // Get form method
      const form = checkbox.getForm();
      action('getForm method')(`Associated form: ${form ? 'Found' : 'None'}`);

      // 2. Test Events via User Interactions
      // Focus and click events
      await userEvent.click(control);
      await new Promise((r) => setTimeout(r, 100));

      // Second click for toggle
      await userEvent.click(control);
      await new Promise((r) => setTimeout(r, 100));

      // Tab away to trigger blur
      await userEvent.tab();
      await new Promise((r) => setTimeout(r, 100));

      // 3. Test Invalid Event
      checkbox.setCustomValidity('This field is required');
      action('setCustomValidity method')('Set custom error message');

      // Create a promise that resolves when the invalid event is fired
      const invalidPromise = new Promise((resolve) => {
        checkbox.addEventListener('ug-invalid', resolve, { once: true });
      });

      // Report validity method
      const reportResult = checkbox.reportValidity();
      action('reportValidity method')(`Result: ${reportResult}`);

      // Wait for the invalid event
      await invalidPromise;
      await new Promise((r) => setTimeout(r, 500));

      // Clear the validity state
      checkbox.setCustomValidity('');
    } catch (error) {
      console.error('Test failed:', error);
      action('test error')((error as Error).message);
    }
  },
  render: () => html`
    <form id="test-form">
      <ug-checkbox
        @ug-blur=${action('ug-blur')}
        @ug-change=${action('ug-change')}
        @ug-focus=${action('ug-focus')}
        @ug-input=${action('ug-input')}
        @ug-invalid=${action('ug-invalid')}
      >
        Checkbox
      </ug-checkbox>
    </form>
  `
};
