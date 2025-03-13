import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/textarea';
import '/lib/components/button';
import { ifDefined } from 'lit/directives/if-defined.js';
import { userEvent } from '@storybook/test';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Components/Textarea',
  component: 'textarea',
  parameters: {
    docs: {
      toc: {
        /* options */
      },
      subtitle:
        'Textareas collect data from the user and allow multiple lines of text.',
      //Hide unused variables
      source: {
        format: true,
        transform: (code: string) => {
          return code
            .replace(
              /\s*(value=""|name=""|size="medium"|label=""|help-text=""|placeholder=""|rows="4"|resize="vertical"|form=""|spellcheck="true")/g,
              ''
            )
            .replace(/\s* required=""/g, ' required')
            .replace(/\s* disabled=""/g, ' disabled')
            .replace(/\s* readonly=""/g, ' readonly');
        }
      },
      importSection: true // Enables the import section
    },
    html: {
      transform: (code: string) => {
        return code;
      }
    }
  },
  argTypes: {
    name: {
      description:
        'The name of the textarea, submitted as a name/value pair with form data.',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
        category: 'Basic Attributes'
      }
    },
    rows: {
      description: 'The number of rows to display by default.',
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '4' },
        category: 'Basic Attributes'
      }
    },
    value: {
      description:
        'The current value of the textarea, submitted as a name/value pair with form data.',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
        category: 'Value Management'
      }
    },
    size: {
      description: "The textarea's size.",
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
      table: {
        type: {
          summary: "'small' | 'medium' | 'large'",
          detail:
            'This is a reflected property that syncs with the size attribute'
        },
        defaultValue: { summary: 'medium' },
        category: 'Appearance and Layout'
      },
      defaultValue: 'medium'
    },
    label: {
      description: "The textarea's label. Use the label slot for HTML content.",
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
        category: 'Accessibility'
      }
    },
    helpText: {
      name: 'help-text',
      description:
        "The textarea's help text. Use the help-text slot for HTML content.",
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
        category: 'Accessibility'
      }
    },
    placeholder: {
      description:
        'Placeholder text to show as a hint when the input is empty.',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
        category: 'Value Management'
      }
    },
    resize: {
      description: 'Controls how the textarea can be resized.',
      control: { type: 'radio' },
      options: ['none', 'vertical', 'auto'],
      table: {
        type: { summary: "'none' | 'vertical' | 'auto'" },
        defaultValue: { summary: 'vertical' },
        category: 'Appearance and Layout'
      }
    },
    disabled: {
      description: 'Disables the textarea.',
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
          detail:
            'This is a reflected property that syncs with the disabled attribute'
        },
        defaultValue: { summary: 'false' },
        category: 'State Attributes'
      }
    },
    readonly: {
      description: 'Makes the textarea readonly.',
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
          detail:
            'This is a reflected property that syncs with the readonly attribute'
        },
        defaultValue: { summary: 'false' },
        category: 'State Attributes'
      }
    },
    form: {
      description: 'Associates the textarea with a form by its ID.',
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
          detail:
            'This is a reflected property that syncs with the form attribute'
        },
        defaultValue: { summary: "''" },
        category: 'Form Association'
      }
    },
    required: {
      description: 'Makes the textarea a required field.',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'State Attributes'
      }
    },
    minlength: {
      description: 'The minimum length of input that will be considered valid.',
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: undefined },
        category: 'Validation'
      }
    },
    maxlength: {
      description: 'The maximum length of input that will be considered valid.',
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: undefined },
        category: 'Validation'
      }
    },
    spellcheck: {
      description: 'Enables spell checking on the textarea.',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Behavioral Attributes'
      }
    },
    // Events
    ugBlur: {
      name: 'ug-blur',
      description: 'Emitted when the control loses focus.',
      table: {
        category: 'Events',
        type: { summary: undefined },
        defaultValue: { summary: undefined }
      },
      control: false,
      action: 'ugBlur'
    },
    ugChange: {
      name: 'ug-change',
      description:
        "Emitted when an alteration to the control's value is committed by the user.",
      table: {
        category: 'Events',
        type: { summary: undefined },
        defaultValue: { summary: undefined }
      },
      control: false,
      action: 'ugChange'
    },
    ugFocus: {
      name: 'ug-focus',
      description: 'Emitted when the control gains focus.',
      table: {
        category: 'Events',
        type: { summary: undefined },
        defaultValue: { summary: undefined }
      },
      control: false,
      action: 'ugFocus'
    },
    ugInput: {
      name: 'ug-input',
      description: 'Emitted when the control receives input.',
      table: {
        category: 'Events',
        type: { summary: undefined },
        defaultValue: { summary: undefined }
      },
      control: false,
      action: 'ugInput'
    },
    ugInvalid: {
      name: 'ug-invalid',
      description:
        'Emitted when the form control has been checked for validity and its constraints aren’t satisfied.',
      table: {
        category: 'Events',
        type: { summary: undefined },
        defaultValue: { summary: undefined }
      },
      control: false,
      action: 'ugInvalid'
    },

    // Methods
    select: {
      name: 'select()',
      description: 'Selects all the text in the textarea.',
      table: {
        category: 'Methods',
        type: { summary: '() => void' },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    setSelectionRange: {
      name: 'setSelectionRange()',
      description:
        'Sets the start and end positions of the text selection (0-based).',
      table: {
        category: 'Methods',
        type: {
          summary:
            "(selectionStart: number, selectionEnd: number, selectionDirection: 'forward' | 'backward' | 'none') => void"
        },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    setRangeText: {
      name: 'setRangeText()',
      description: 'Replaces a range of text with a new string.',
      table: {
        category: 'Methods',
        type: {
          summary:
            "(replacement: string, start: number, end: number, selectMode: 'select' | 'start' | 'end' | 'preserve') => void"
        },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    reportValidity: {
      name: 'reportValidity()',
      description:
        'Checks for validity and shows the browser’s validation message if the control is invalid.',
      table: {
        category: 'Methods',
        type: { summary: '() => boolean' },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    setCustomValidity: {
      name: 'setCustomValidity()',
      description:
        'Sets a custom validation message. Pass an empty string to restore validity.',
      table: {
        category: 'Methods',
        type: { summary: '(message: string) => void' },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    //Slots
    labelSlot: {
      name: 'label',
      description:
        'The textarea’s label. Alternatively, you can use the label attribute.',
      table: {
        category: 'Slots',
        type: { summary: 'slot' },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    'help-text-slot': {
      name: 'help-text',
      description:
        'Text that describes how to use the input. Alternatively, you can use the help-text attribute.',
      table: {
        category: 'Slots',
        type: { summary: 'slot' },
        defaultValue: { summary: undefined }
      },
      control: false
    }
  }
};

export default meta;

type Story = StoryObj;

export const Textarea: Story = {
  args: {
    name: '',
    rows: 4,
    value: '',
    placeholder: '',
    disabled: false,
    readonly: false,
    required: false,
    minlength: undefined,
    maxlength: undefined,
    form: '',
    size: 'medium',
    resize: 'vertical',
    label: '',
    helpText: '',
    spellcheck: true
  },
  parameters: {
    docs: {
      description: {
        story: 'A default textarea.'
      }
    }
  },
  render: ({ ...args }) =>
    html`<ug-textarea
      name=${ifDefined(args.name)}
      value=${ifDefined(args.value)}
      size=${ifDefined(args.size)}
      label=${args.label}
      help-text=${args.helpText}
      placeholder=${args.placeholder}
      rows=${args.rows}
      resize=${args.resize}
      ?disabled=${args.disabled}
      ?readonly=${args.readonly}
      form=${args.form}
      ?required=${args.required}
      minlength=${ifDefined(args.minlength)}
      maxlength=${ifDefined(args.maxlength)}
      autocomplete=${ifDefined(args.autocomplete)}
      spellcheck=${args.spellcheck}
    ></ug-textarea> `
};

export const Sizes: Story = {
  render: () => html`
    <ug-textarea placeholder="Small" size="small"></ug-textarea>
    <br />
    <ug-textarea placeholder="Medium" size="medium"></ug-textarea>
    <br />
    <ug-textarea placeholder="Large" size="large"></ug-textarea>
  `,
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Use the \`size\` attribute to change a textarea's size.`
      }
    }
  }
};

export const PreventResizing: Story = {
  ...Textarea,
  args: {
    ...Textarea.args,
    resize: 'none'
  },
  parameters: {
    controls: {},
    docs: {
      description: {
        story: `By default, textareas can be resized vertically by the user. To prevent resizing, set the \`resize\` attribute to \`none\`.`
      }
    }
  }
};

export const TextareaWithCharacterLimit: Story = {
  ...Textarea,
  args: {
    ...Textarea.args,
    maxlength: 8,
    minlength: 2,
    value: '12345678'
  },
  parameters: {
    controls: {},
    docs: {
      description: {
        story: `You can set the character limit through the \`maxlength\` and  \`minlength\` properties. In this example \`maxlength\` is initially set to 8 and \`minlength\` is set to 2.`
      }
    }
  }
};

export const Disabled: Story = {
  ...Textarea,
  args: {
    ...Textarea.args,
    placeholder: 'Type something',
    disabled: true
  },
  parameters: {
    controls: {},
    docs: {
      description: {
        story: `Use the \`disabled\` attribute to disable a textarea.`
      }
    }
  }
};

export const Readonly: Story = {
  ...Textarea,
  args: {
    ...Textarea.args,
    placeholder: 'Type something',
    readonly: true
  },
  parameters: {
    controls: {},
    docs: {
      description: {
        story: `Use the \`readonly\` attribute to make a textarea readonly.`
      }
    }
  }
};

export const HelpText: Story = {
  ...Textarea,
  args: {
    ...Textarea.args,
    label: 'Feedback',
    helpText: 'Please tell us what you think.'
  },
  parameters: {
    controls: {},
    docs: {
      description: {
        story: `Add descriptive help text to a textarea with the \`help-text\` attribute. For help texts that contain HTML, use the \`help-text\` slot instead.`
      }
    }
  }
};

export const ExpandWithContent: Story = {
  ...Textarea,
  args: {
    ...Textarea.args,
    resize: 'auto'
  },
  parameters: {
    controls: {},
    docs: {
      description: {
        story:
          'Textareas will automatically resize to expand to fit their content when`resize` is set to `auto`.'
      }
    }
  }
};

export const TextareaWithEvents: Story = {
  tags: ['!autodocs'],
  parameters: {
    controls: { disable: true }
  },
  render: () => html`
    <form>
      <ug-textarea
        help-text="Interact to see events"
        placeholder="Type something here"
        @ug-focus=${action('ug-focus')}
        @ug-blur=${action('ug-blur')}
        @ug-input=${action('ug-input')}
        @ug-change=${action('ug-change')}
        @ug-invalid=${action('ug-invalid')}
      ></ug-textarea>
      <br />
      <ug-button type="submit">Submit</ug-button>
    </form>
  `,
  play: async ({ canvasElement }) => {
    // Wait for custom elements to be defined
    await customElements.whenDefined('ug-textarea');
    await customElements.whenDefined('ug-button');

    const textareaElement = canvasElement.querySelector('ug-textarea');
    const textarea = textareaElement?.shadowRoot?.querySelector('textarea');
    const submitButton = canvasElement.querySelector('ug-button');

    if (!textarea || !submitButton) {
      throw new Error('Required elements not found');
    }

    // Test focus and input
    textarea.focus();
    await userEvent.type(textarea, 'Hello World');

    // Small delay to allow events to propagate
    await new Promise((r) => setTimeout(r, 100));

    // Test blur
    textarea.blur();
    await new Promise((r) => setTimeout(r, 100));

    // Test invalid
    textarea.setCustomValidity('Custom error message');
    submitButton.click();
  }
};
