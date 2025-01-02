import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/textarea';

const meta: Meta = {
  title: 'Components/Textarea',
  component: 'ug-textarea',
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
          return code.replace(
            /\s*(value=""|size="medium"|label=""|help-text=""|placeholder=""|rows="4"|resize="vertical"|form=""|minlength=""|maxlength=""|autocapitalize=""|autocorrect=""|autocomplete=""|inputmode=""|spellcheck="")/g,
            ''
          );
        }
      }
    }
  },
  argTypes: {
    rows: {
      description: 'The number of rows to display by default.',
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '4' },
        category: 'properties'
      }
    },
    value: {
      description:
        'The current value of the textarea, submitted as a name/value pair with form data.',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
        category: 'properties'
      }
    },
    size: {
      description: "The textarea's size.",
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
      table: {
        type: { summary: "'small' | 'medium' | 'large'" },
        defaultValue: { summary: 'medium' },
        category: 'properties'
      },
      canvas: {
        defaultValue: 'medium' // For actual functionality in Storybook preview
      },
      defaultValue: 'medium' // For actual functionality in Storybook preview
    },
    label: {
      description: "The textarea's label. Use the label slot for HTML content.",
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
        category: 'properties'
      }
    },
    'help-text': {
      description:
        "The textarea's help text. Use the help-text slot for HTML content.",
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
        category: 'properties'
      }
    },
    placeholder: {
      description:
        'Placeholder text to show as a hint when the input is empty.',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
        category: 'properties'
      }
    },
    resize: {
      description: 'Controls how the textarea can be resized.',
      control: { type: 'radio' },
      options: ['none', 'vertical', 'auto'],
      table: {
        type: { summary: "'none' | 'vertical' | 'auto'" },
        defaultValue: { summary: 'vertical' },
        category: 'properties'
      }
    },
    disabled: {
      description: 'Disables the textarea.',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'properties'
      }
    },
    readonly: {
      description: 'Makes the textarea readonly.',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'properties'
      }
    },
    form: {
      description: 'Associates the textarea with a form by its ID.',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
        category: 'properties'
      }
    },
    required: {
      description: 'Makes the textarea a required field.',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'properties'
      }
    },
    minlength: {
      description: 'The minimum length of input that will be considered valid.',
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        category: 'properties'
      }
    },
    maxlength: {
      description: 'The maximum length of input that will be considered valid.',
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        category: 'properties'
      }
    },
    autocapitalize: {
      description:
        'Controls whether and how text input is automatically capitalized.',
      control: { type: 'radio' },
      options: ['off', 'none', 'on', 'sentences', 'words', 'characters'],
      table: {
        type: {
          summary:
            "'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'"
        },
        category: 'properties'
      }
    },
    autocorrect: {
      description:
        "Indicates whether the browser's autocorrect feature is on or off.",
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        category: 'properties'
      }
    },
    autocomplete: {
      description: 'Specifies the autocomplete behavior of the textarea.',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        category: 'properties'
      }
    },
    autofocus: {
      description:
        'Indicates that the input should receive focus on page load.',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        category: 'properties'
      }
    },
    spellcheck: {
      description: 'Enables spell checking on the textarea.',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'properties'
      }
    },
    inputmode: {
      description: 'Specifies the type of data entry expected by the input.',
      control: { type: 'radio' },
      options: [
        'none',
        'text',
        'decimal',
        'numeric',
        'tel',
        'search',
        'email',
        'url'
      ],
      table: {
        type: {
          summary:
            "'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url'"
        },
        category: 'properties'
      }
    },
    updateComplete: {
      description:
        'A read-only promise that resolves when the component has finished updating. Readonly',
      control: { type: 'null' },
      table: {
        type: { summary: 'Promise' },
        defaultValue: { summary: '-' },
        category: 'properties'
      }
    },

    // Events
    ugBlur: {
      name: 'ug-blur',
      description: 'Emitted when the control loses focus.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: '-' }
      },
      action: 'ugBlur'
    },
    ugChange: {
      name: 'ug-change',
      description:
        "Emitted when an alteration to the control's value is committed by the user.",
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: '-' }
      },
      action: 'ugChange'
    },
    ugFocus: {
      name: 'ug-focus',
      description: 'Emitted when the control gains focus.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: '-' }
      },
      action: 'ugFocus'
    },
    ugInput: {
      name: 'ug-input',
      description: 'Emitted when the control receives input.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: '-' }
      },
      action: 'ugInput'
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
      action: 'ugInvalid'
    },

    // Methods
    select: {
      name: 'select()',
      description: 'Selects all the text in the textarea.',
      table: {
        category: 'Methods',
        type: { summary: '() => void' },
        defaultValue: { summary: '-' }
      }
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
        defaultValue: { summary: '-' }
      }
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
        defaultValue: { summary: '-' }
      }
    },
    reportValidity: {
      name: 'reportValidity()',
      description:
        'Checks for validity and shows the browser’s validation message if the control is invalid.',
      table: {
        category: 'Methods',
        type: { summary: '() => boolean' },
        defaultValue: { summary: '-' }
      }
    },
    setCustomValidity: {
      name: 'setCustomValidity()',
      description:
        'Sets a custom validation message. Pass an empty string to restore validity.',
      table: {
        category: 'Methods',
        type: { summary: '(message: string) => void' },
        defaultValue: { summary: '-' }
      }
    },
    //Slots
    labelSlot: {
      name: 'label',
      description:
        'The textarea’s label. Alternatively, you can use the label attribute.',
      control: 'text',
      table: {
        category: 'Slots'
      }
    },
    'help-text-slot': {
      name: 'help-text',
      description:
        'Text that describes how to use the input. Alternatively, you can use the help-text attribute.',
      control: 'text',
      table: {
        category: 'Slots'
      }
    }
  }
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    value: 'Initial value',
    size: 'large',
    label: 'Textarea Label',
    'help-text': 'This is help text.',
    placeholder: 'Enter your text here...',
    rows: 4,
    resize: 'vertical',
    disabled: false,
    readonly: false,
    required: false,
    spellcheck: true,
    form: '',
    minlength: undefined,
    maxlength: undefined,
    autocapitalize: undefined,
    autocorrect: undefined,
    autocomplete: undefined,
    autofocus: false,
    inputmode: undefined
  },
  render: ({ ...args }) =>
    html`<ug-textarea
      value=${args.maxlength}
      size=${args.size}
      label=${args.label}
      help-text=${args['help-text']}
      placeholder=${args.placeholder}
      rows=${args.rows}
      resize=${args.resize}
      ?disabled=${args.disabled}
      ?readonly=${args.readonly}
      form=${args.form}
      ?required=${args.required}
      ${args.minlength !== undefined ? `minlength="${args.minlength}"` : ''}
      ${args.maxlength !== undefined ? `maxlength="${args.maxlength}"` : ''}
      autocapitalize=${args.autocapitalize}
      autocorrect=${args.autocorrect}
      autocomplete=${args.autocomplete}
      ?autofocus=${args.autofocus}
      ?spellcheck=${args.spellcheck}
      inputmode=${args.inputmode}
    ></ug-textarea> ` //      /*defaultValue=${args.defaultValue}*/ Removed because it didn't work correctly
};

export const Minimal: Story = {
  ...Default,
  args: {
    value: '',
    size: 'medium',
    label: '',
    helpText: '',
    placeholder: '',
    rows: 4,
    resize: 'vertical',
    disabled: false,
    readonly: false,
    required: false,
    spellcheck: true,
    form: '',
    minlength: undefined,
    maxlength: undefined,
    autocapitalize: undefined,
    autocorrect: undefined,
    autocomplete: undefined,
    autofocus: false,
    inputmode: undefined,
    defaultValue: ''
  }
};

export const Labels: Story = {
  ...Minimal,
  args: {
    ...Minimal.args,
    label: 'Comments'
  },
  parameters: {
    controls: {},
    docs: {
      description: {
        story: `Use the \`label\` attribute to give the textarea an accessible label. For labels that contain HTML, use the \`label\` slot instead.`
      }
    }
  }
};

export const HelpText: Story = {
  ...Minimal,
  args: {
    ...Minimal.args,
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

export const Rows: Story = {
  ...Minimal,
  args: {
    ...Minimal.args,
    rows: 2
  },
  parameters: {
    controls: {},
    docs: {
      description: {
        story: `Use the rows attribute to change the number of text rows that get shown.`
      }
    }
  }
};

export const Placeholder: Story = {
  ...Minimal,
  args: {
    ...Minimal.args,
    placeholder: 'Type something'
  },
  parameters: {
    controls: {},
    docs: {
      description: {
        story: `Use the \`placeholder\` attribute to add a placeholder.`
      }
    }
  }
};

export const Disabled: Story = {
  ...Minimal,
  args: {
    ...Minimal.args,
    placeholder: 'Type something',
    diasbled: true
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

export const Sizes: Story = {
  render: () => `
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
  ...Minimal,
  args: {
    ...Minimal.args,
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

export const ExpandWithContent: Story = {
  ...Minimal,
  args: {
    ...Minimal.args,
    resize: 'auto'
  },
  parameters: {
    controls: {},
    docs: {
      description: {
        story: `Textareas will automatically resize to expand to fit their content when \`resize\` is set to \`auto\`.`
      }
    }
  }
};

export const LabelSlot: Story = {
  args: {
    labelSlot: 'Custom Label'
  },
  render: ({ ...args }) => html`
    <my-textarea>
      <span slot="label">${args.labelSlot}</span>
    </my-textarea>
  `
};

export const HelpTextSlot: Story = {
  args: {
    helpTextSlot: 'Custom help text to provide better guidance.'
  },
  render: ({ ...args }) => html`
    <my-textarea>
      <span slot="help-text">${args.helpTextSlot}</span>
    </my-textarea>
  `
};
