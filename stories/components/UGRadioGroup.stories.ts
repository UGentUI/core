import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/radio-group';
import '/lib/components/radio';
import '/lib/components/radio-button';
import '/lib/components/button';
import { userEvent, within } from '@storybook/test';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Components/RadioGroup',
  component: 'ug-radio-group',

  parameters: {
    docs: {
      description: {
        component:
          'Radio groups are used to group multiple radios [radios](./?path=/docs/components-radio--docs) or [radio buttons](./?path=/docs/components-radiobutton--docs) so they function as a single form control.'
      },
      source: {
        format: true,

        transform: (code: string) => {
          return code.replace(/\s*(name="option"|size="medium"|form="")/g, '');
        }
      }
    }
  },

  argTypes: {
    label: {
      name: 'label',
      description:
        'The radio group’s label. Required for proper accessibility. If you need to display HTML, use the label slot instead.',
      type: { name: 'string', required: false },
      defaultValue: '',
      table: {
        category: 'attributes',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      },
      control: { type: 'text' }
    },
    helpText: {
      name: 'helpText',
      description:
        'The radio group’s help text. If you need to display HTML, use the help-text slot instead.',
      type: { name: 'string', required: false },
      defaultValue: '',
      table: {
        category: 'attributes',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      },
      control: { type: 'text' }
    },
    name: {
      name: 'name',
      description:
        'The name of the radio group, submitted as a name/value pair with form data.',
      type: { name: 'string', required: false },
      defaultValue: 'option',
      table: {
        category: 'attributes',
        type: { summary: 'string' },
        defaultValue: { summary: "'option'" }
      },
      control: { type: 'text' }
    },
    value: {
      name: 'value',
      description:
        'The current value of the radio group, submitted as a name/value pair with form data.',
      type: { name: 'string', required: false },
      defaultValue: '',
      table: {
        category: 'attributes',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      },
      control: { type: 'text' }
    },
    size: {
      name: 'size',
      description:
        'The radio group’s size. This size will be applied to all child radios and radio buttons.',
      type: { name: 'enum', required: false },
      defaultValue: 'medium',
      table: {
        category: 'attributes',
        type: { summary: "'small' | 'medium' | 'large'" },
        defaultValue: { summary: "'medium'" }
      },
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' }
    },
    form: {
      name: 'form',
      description:
        'By default, form controls are associated with the nearest containing <form> element. This attribute allows you to place the form control outside of a form and associate it with the form that has this id. The form must be in the same document or shadow root for this to work.',
      type: { name: 'string', required: false },
      defaultValue: '',
      table: {
        category: 'attributes',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      },
      control: { type: 'text' }
    },
    required: {
      name: 'required',
      description:
        'Ensures a child radio is checked before allowing the containing form to submit.',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      table: {
        category: 'attributes',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: { type: 'boolean' }
    },
    validity: {
      name: 'validity',
      description: 'Gets the validity state object.',
      type: { name: 'object', required: false },
      table: {
        category: 'attributes',
        type: { summary: '-' },
        defaultValue: { summary: '-' }
      },
      control: false
    },
    validationMessage: {
      name: 'validationMessage',
      description: 'Gets the validation message.',
      type: { name: 'string', required: false },
      table: {
        category: 'attributes',
        type: { summary: '-' },
        defaultValue: { summary: '-' }
      },
      control: false
    },

    ugChange: {
      name: 'ug-change',
      description: 'Emitted when the radio group’s selected value changes.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: '-' }
      },
      action: 'ug-change',
      control: false
    },
    ugInput: {
      name: 'ug-input',
      description: 'Emitted when the radio group receives user input.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: '-' }
      },
      action: 'ug-input',
      control: false
    },
    ugInvalid: {
      name: 'ug-invalid',
      description:
        'Emitted when the form control has been checked for validity and its constraints aren’t satisfied.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: '-' }
      },
      action: 'ug-invalid',
      control: false
    },

    checkValidity: {
      name: 'checkValidity',
      description:
        'Checks for validity but does not show a validation message. Returns true when valid and false when invalid.',
      table: {
        category: 'Methods',
        type: { summary: '() => boolean' },
        defaultValue: { summary: '-' }
      },
      control: false
    },
    getForm: {
      name: 'getForm',
      description: 'Gets the associated form, if one exists.',
      table: {
        category: 'Methods',
        type: { summary: '() => HTMLFormElement | null' },
        defaultValue: { summary: '-' }
      },
      control: false
    },
    reportValidity: {
      name: 'reportValidity',
      description:
        'Checks for validity and shows the browser’s validation message if the control is invalid.',
      table: {
        category: 'Methods',
        type: { summary: '() => boolean' },
        defaultValue: { summary: '-' }
      },
      control: false
    },
    setCustomValidity: {
      name: 'setCustomValidity',
      description:
        'Sets a custom validation message. Pass an empty string to restore validity.',
      table: {
        category: 'Methods',
        type: { summary: '(message: string) => void' },
        defaultValue: { summary: '-' }
      },
      control: false
    },
    focus: {
      name: 'focus',
      description: 'Sets focus on the radio group.',
      table: {
        category: 'Methods',
        type: { summary: '(options?: FocusOptions) => void' },
        defaultValue: { summary: '-' }
      },
      control: false
    },

    defaultSlot: {
      name: '(default)',
      description:
        'The default slot where <ug-radio> or <ug-radio-button> elements are placed.',
      table: {
        category: 'Slots',
        defaultValue: { summary: '-' }
      },
      control: false
    },
    labelSlot: {
      name: 'label',
      description:
        'The radio group’s label. Required for proper accessibility. Alternatively, you can use the label attribute.',
      table: {
        category: 'Slots',
        defaultValue: { summary: '-' }
      },
      control: false
    },
    helpTextSlot: {
      name: 'help-text',
      description:
        'Text that describes how to use the radio group. Alternatively, you can use the help-text attribute.',
      table: {
        category: 'Slots',
        defaultValue: { summary: '-' }
      },
      control: false
    }
  }
};

export default meta;

type Story = StoryObj;

export const RadioGroup: Story = {
  args: {
    label: 'Select an option',
    helpText: 'Choose one of the options below.',
    name: 'option',
    value: '1',
    size: 'medium',
    form: '',
    required: false
  },
  render: (args) => {
    return html`<ug-radio-group
      label="${args.label}"
      help-text="${args.helpText}"
      name="${args.name}"
      value="${args.value}"
      size="${args.size}"
      form="${args.form}"
      ?required="${args.required}"
    >
      <ug-radio value="1">Option 1</ug-radio>
      <ug-radio value="2">Option 2</ug-radio>
      <ug-radio value="3">Option 3</ug-radio>
    </ug-radio-group>`;
  }
};

export const HelpText: Story = {
  ...RadioGroup,
  args: {
    ...RadioGroup.args,
    label: 'Select an option',
    helpText: 'Choose the most appropriate option.'
  },
  parameters: {
    docs: {
      description: {
        story: `Add descriptive help text to a radio group with the <code>help-text</code> attribute. For help texts that contain HTML, use the <code>help-text</code> slot instead.`
      }
    }
  }
};

export const RadioButtons: Story = {
  ...RadioGroup,
  args: {
    ...RadioGroup.args
  },
  parameters: {
    docs: {
      description: {
        story: `[Radio buttons](./?path=/docs/components-radiobutton--docs) offer an alternate way to display radio controls. In this case, an internal [button group](./?path=/docs/components-buttongroup--docs) is used to group the buttons into a single, cohesive control.`
      }
    }
  },
  render: (args) => {
    return html`<ug-radio-group
      label="${args.label}"
      help-text="${args.helpText}"
      name="${args.name}"
      value="${args.value}"
      size="${args.size}"
      form="${args.form}"
      ?required="${args.required}"
    >
      <ug-radio-button value="1">Option 1</ug-radio-button>
      <ug-radio-button value="2">Option 2</ug-radio-button>
      <ug-radio-button value="3">Option 3</ug-radio-button>
    </ug-radio-group>`;
  }
};

export const DisablingOptions: Story = {
  ...RadioGroup,
  args: {
    ...RadioGroup.args
  },
  parameters: {
    docs: {
      description: {
        story: `Radio buttons offer an alternate way to display radio controls. In this case, an internal button group is used to group the buttons into a single, cohesive control.`
      }
    }
  },
  render: (args) => {
    return html`<ug-radio-group
      label="${args.label}"
      help-text="${args.helpText}"
      name="${args.name}"
      value="${args.value}"
      size="${args.size}"
      form="${args.form}"
      ?required="${args.required}"
    >
      <ug-radio value="1">Option 1</ug-radio>
      <ug-radio value="2" disabled>Option 2</ug-radio>
      <ug-radio value="3">Option 3</ug-radio>
    </ug-radio-group>`;
  }
};

export const SizingOptions: Story = {
  ...RadioGroup,
  args: {
    ...RadioGroup.args
  },
  parameters: {
    docs: {
      description: {
        story: `The size of Radios and Radio Buttons will be determined by the Radio Group’s size attribute. Radios and Radio Buttons also have a size attribute. This can be useful in certain compositions, but it will be ignored when used inside of a Radio Group.`
      }
    }
  },
  render: (args, context) => html`
    <h4>Small</h4>
    ${RadioGroup.render
      ? RadioGroup.render({ ...args, size: 'small' }, context)
      : html`<div>No render available</div>`}
    <br />
    <h4>Medium</h4>
    ${RadioGroup.render
      ? RadioGroup.render({ ...args, size: 'medium' }, context)
      : html`<div>No render available</div>`}
    <br />
    <h4>Large</h4>
    ${RadioGroup.render
      ? RadioGroup.render({ ...args, size: 'large' }, context)
      : html`<div>No render available</div>`}
  `
};

export const Validation: Story = {
  args: {
    label: 'Select an option',
    helpText: 'Help text die bij de radio knop hoort.',
    name: 'option',
    value: '1',
    size: 'medium',
    form: '',
    required: true
  },
  parameters: {
    docs: {
      description: {
        story: `Use the <code>setCustomValidity()</code> method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.`
      }
    }
  },
  render: (args) => {
    return html`<form class="validation">
        <ug-radio-group
          label="${args.label}"
          help-text="${args.helpText}"
          name="${args.name}"
          value="${args.value}"
          size="${args.size}"
          form="${args.form}"
          ?required="${args.required}"
        >
          <ug-radio value="1">Option 1</ug-radio>
          <ug-radio value="2">Option 2</ug-radio>
          <ug-radio value="3">Option 3</ug-radio>
        </ug-radio-group>
        <br />
        <ug-button type="submit" variant="primary">Submit</ug-button>
      </form>

      <script>
        (() => {
          const form = document.querySelector('.validation');

          // Handle form submit
          form.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('All fields are valid!');
          });
        })();
      </script>`;
  }
};

export const CustomValidity: Story = {
  args: {
    label: 'Select an option',
    helpText: 'You must choose the last option to pass.',
    name: 'option',
    value: '1',
    size: 'medium',
    form: '',
    required: false
  },
  parameters: {
    docs: {
      description: {
        story: `Use the <code>setCustomValidity()</code> method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.`
      }
    }
  },
  render: (args) => {
    return html`<form class="custom-validity">
        <ug-radio-group
          label="${args.label}"
          help-text="${args.helpText}"
          name="${args.name}"
          value="${args.value}"
          size="${args.size}"
          form="${args.form}"
          ?required="${args.required}"
        >
          <ug-radio value="1">Option 1</ug-radio>
          <ug-radio value="2">Option 2</ug-radio>
          <ug-radio value="3">Option 3</ug-radio>
        </ug-radio-group>
        <br />
        <button type="submit" variant="primary" disabled>Submit</button>
      </form>

      <script>
        (() => {
          const customValidityForm = document.querySelector('.custom-validity');
          const radioGroup = customValidityForm.querySelector('ug-radio-group');
          const errorMessage = 'You must choose the last option';

          // Set initial validity as soon as the element is defined
          customElements.whenDefined('ug-radio').then(() => {
            radioGroup.setCustomValidity(errorMessage);
          });

          // Update validity when a selection is made
          customValidityForm.addEventListener('ug-change', () => {
            const isValid = radioGroup.value === '3';
            radioGroup.setCustomValidity(isValid ? '' : errorMessage);
          });

          // Handle form submit
          customValidityForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('All fields are valid!');
          });

          // Simulate form submission
          const submitButton = customValidityForm.querySelector('button');
          submitButton.disabled = false;
        })();
      </script> `;
  }
};

export const RadioGroupWithEvents: Story = {
  args: {
    label: 'Select an option',
    helpText: 'Choose one of the options below.',
    name: 'option',
    value: undefined,
    size: 'medium',
    form: '',
    required: false
  },
  parameters: {
    docs: {
      description: {
        story: `Use the <code>setCustomValidity()</code> method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.`
      }
    }
  },
  render: (args) => html`
    <form class="radiogroup-with-events-form">
      <ug-radio-group
        label="${args.label}"
        help-text="${args.helpText}"
        name="${args.name}"
        value="${args.value}"
        size="${args.size}"
        form="${args.form}"
        ?required="${args.required}"
        @ug-change=${action('ug-change')}
        @ug-input=${action('ug-input')}
        @ug-invalid=${action('ug-invalid')}
      >
        <ug-radio value="1" data-testid="option-1">Option 1</ug-radio>
        <ug-radio value="2" data-testid="option-2">Option 2</ug-radio>
        <ug-radio value="3" data-testid="option-3">Option 3</ug-radio>
      </ug-radio-group>
      <ug-button type="submit">Submit</ug-button>
    </form>
  `,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const form = document.querySelector(
      '.radiogroup-with-events-form'
    ) as HTMLFormElement;
    const radioGroup = form?.querySelector('ug-radio-group');
    const option1 = canvas.getByTestId('option-1');
    const option2 = canvas.getByTestId('option-2');
    const option3 = canvas.getByTestId('option-3');

    if (!radioGroup || !form) {
      throw new Error('radioGroup is not defined');
    }

    // Add listeners to validate event emissions
    let changeEventTriggered = false;
    let inputEventTriggered = false;
    let invalidEventTriggered = false;

    radioGroup.addEventListener('ug-change', () => {
      changeEventTriggered = true;
    });

    radioGroup.addEventListener('ug-input', () => {
      inputEventTriggered = true;
    });

    radioGroup.addEventListener('ug-invalid', () => {
      invalidEventTriggered = true;
    });

    // Simulate selecting the first radio button
    await userEvent.click(option1);

    // Validate that ug-change and ug-input events are triggered
    if (!changeEventTriggered) {
      throw new Error('The ug-change event was not triggered!');
    }
    if (!inputEventTriggered) {
      throw new Error('The ug-input event was not triggered!');
    }

    // Reset event flags
    changeEventTriggered = false;
    inputEventTriggered = false;

    // Simulate selecting the second radio button
    await userEvent.click(option2);

    // Validate that ug-change and ug-input events are triggered again
    if (!changeEventTriggered) {
      throw new Error('The ug-change event was not triggered for Option 2!');
    }
    if (!inputEventTriggered) {
      throw new Error('The ug-input event was not triggered for Option 2!');
    }

    //Add custom validation to get the invalid event

    const errorMessage = 'You must choose the last option';

    // Set initial validity as soon as the element is defined
    customElements.whenDefined('ug-radio').then(() => {
      radioGroup.setCustomValidity(errorMessage);
    });

    // Update validity when a selection is made
    form.addEventListener('ug-change', () => {
      const isValid = radioGroup.value === '3';
      radioGroup.setCustomValidity(isValid ? '' : errorMessage);
    });

    // Handle form submit
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('All fields are valid!');
    });

    // Simulate form submission
    const submitButton = canvas.getByText('Submit');
    await userEvent.click(submitButton);

    // Simulate form submission to check validation
    const isValid = form.checkValidity();
    if (!isValid && !invalidEventTriggered) {
      throw new Error(
        'The ug-invalid event was not triggered for validation failure!'
      );
    }
  }
};
