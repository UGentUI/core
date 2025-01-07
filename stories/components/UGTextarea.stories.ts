import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/textarea';
import '/lib/components/button';
import { userEvent, within } from '@storybook/test';
import { action } from '@storybook/addon-actions';
import { ifDefined } from 'lit/directives/if-defined.js';

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
            /\s*(value=""|size="medium"|label=""|help-text=""|placeholder=""|rows="4"|resize="vertical"|form=""|spellcheck="true")/g,
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

export const Textarea: Story = {
  args: {
    rows: 4,
    resize: 'vertical',
    disabled: false,
    placeholder: '',
    readonly: false,
    required: false,
    value: '',
    form: '',
    label: '',
    'help-text': '',
    size: 'medium',
    spellcheck: true,
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
      value=${ifDefined(args.value)}
      size=${ifDefined(args.size)}
      label=${args.label}
      help-text=${args['help-text']}
      placeholder=${args.placeholder}
      rows=${args.rows}
      resize=${args.resize}
      ?disabled=${args.disabled}
      ?readonly=${args.readonly}
      form=${args.form}
      ?required=${args.required}
      minlength=${ifDefined(args.minlength)}
      maxlength=${ifDefined(args.maxlength)}
      autocapitalize=${ifDefined(args.autocapitalize)}
      autocorrect=${ifDefined(args.autocorrect)}
      autocomplete=${ifDefined(args.autocomplete)}
      ?autofocus=${args.autofocus}
      spellcheck=${args.spellcheck}
      inputmode=${ifDefined(args.inputmode)}
    ></ug-textarea> `
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
    'help-text': 'Please tell us what you think.'
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

export const SimpleCustomValidity: Story = {
  render: () =>
    html`<form class="input-validation-custom">
        <ug-textarea
          label="Type 'I agree to the terms and conditions'"
          placeholder="Type something..."
          required
          maxlength="50"
          @ug-input="${action('ug-input')}"
          @ug-change="${action('ug-change')}"
          @ug-focus="${action('ug-focus')}"
          @ug-blur="${action('ug-blur')}"
          @ug-invalid="${action('ug-invalid')}"
        ></ug-textarea>
        <br />
        <ug-button type="submit" variant="primary">Submit</ug-button>
        <ug-button type="reset" variant="default">Reset</ug-button>
      </form>

      <script type="module">
        const form = document.querySelector('.input-validation-custom');
        const textarea = form.querySelector('ug-textarea');

        // Wait for controls to be defined before attaching form listeners
        await Promise.all([
          customElements.whenDefined('ug-button'),
          customElements.whenDefined('ug-textarea')
        ]).then(() => {
          form.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('All fields are valid!');
          });

          textarea.addEventListener('ug-input', () => {
            if (textarea.value === 'I agree to the terms and conditions') {
              textarea.setCustomValidity('');
            } else {
              textarea.setCustomValidity(
                "Hey, you're supposed to type 'I agree to the terms and conditions' before submitting this!"
              );
            }
          });
        });
      </script>`,
  parameters: {
    docs: {
      description: {
        story: `This example demonstrates how to use the <code>setCustomValidity()</code> method for a custom validation on a <code>ug-textarea</code> input. 
        The user is required to type "I agree to the terms and conditions" into the input field before submitting the form.`
      }
    }
  }
};

export const CustomValidityWithEvents: Story = {
  render: () =>
    html` <form
        id="textarea-validation-custom-3"
        data-testid="textarea-validation-custom-3"
      >
        <ug-textarea
          id="feedback"
          label="Profanity checker"
          help-text="This text should be profanity free, but the profanity checker doesn't have a big vocabulary"
          placeholder="Type something..."
          required
          @ug-input="${action('ug-input')}"
          @ug-change="${action('ug-change')}"
          @ug-focus="${action('ug-focus')}"
          @ug-blur="${action('ug-blur')}"
          @ug-invalid="${action('ug-invalid')}"
        ></ug-textarea>
        <ug-button type="submit" variant="primary">Submit</ug-button>
      </form>
      <script type="module">
        const form = document.getElementById('textarea-validation-custom-3');
        const textarea = form.querySelector('ug-textarea');

        const profanityList = [
          'fuck',
          'shit',
          'crap',
          'jeepers',
          'son of a biscuit',
          'slut'
        ];
        const politeList = ['please', 'thank you', 'welcome'];

        //Change this function to suit your needs
        function checkValidity(inputText) {
          let hasProfanity = profanityList.some((word) =>
            inputText.includes(word)
          );

          let isPolite = politeList.some((word) => inputText.includes(word));

          if (hasProfanity) {
            textarea.setCustomValidity('Please, no profanity');
          } else if (isPolite) {
            alert('Thank you for being so polite');
            textarea.setCustomValidity('');
          } else {
            textarea.setCustomValidity('');
          }
          textarea.checkValidity(); // Ensure the validity state is re-evaluated
        }

        // Wait for controls to be defined before attaching form listeners
        await Promise.all([
          customElements.whenDefined('ug-button'),
          customElements.whenDefined('ug-textarea')
        ]).then(() => {
          form.addEventListener('submit', (event) => {
            event.preventDefault();
            let inputText = textarea.value.toLowerCase();
            checkValidity(inputText);
          });

          textarea.addEventListener('ug-input', () => {
            let inputText = textarea.value.toLowerCase();
            checkValidity(inputText);
          });
        });
      </script>`,
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        //prettier-ignore
        story: `Form validation can be extended using the <code>setCustomValidity()</code> method. There can be a variety of reasons to do this, like

1. **Prohibited Words**: Prevent users from including certain offensive or restricted words in their feedback.
2. **No Repeated Characters/Words**: Disallow spam-like input with repeated characters or words.
3. **Specific Formatting Requirements**: Validate that the input matches a required format, such as a JSON object, a list of dates or specific keywords.
4. **Character Restrictions**: Restrict input to only alphanumeric characters or other specific rules.

These validations enhance input quality and guide users toward more meaningful or valid responses, offering a tailored user experience for your application's needs.
`
      }
    }
  },
  play: async ({ canvasElement }) => {
    //Select <ug-select>
    const canvas = within(canvasElement);

    // Locate the shadow DOM host
    const textareaHost = canvas.getByPlaceholderText('Type something...');

    const form = canvas.getByTestId('textarea-validation-custom-3');

    const ugSubmitButton = form.querySelector('ug-button');

    if (
      textareaHost != null &&
      textareaHost.shadowRoot != null &&
      ugSubmitButton != null &&
      ugSubmitButton.shadowRoot != null
    ) {
      // Access the shadow DOM
      const textareaInput = textareaHost.shadowRoot.querySelector('textarea');
      const submitButton = ugSubmitButton.shadowRoot.querySelector('button');

      if (textareaInput != null && submitButton != null) {
        // Focus on the textarea
        await userEvent.click(textareaInput);
        await new Promise((r) => setTimeout(r, 500)); // Allow for focus animations/delays

        // Type into the textarea (triggers ug-input)
        await userEvent.type(
          textareaInput,
          'Quote from Macbeth (Act 1 Scene 3) by William Shakespeare\n',
          { delay: 100 }
        );

        // Blur the textarea (triggers ug-blur)
        await userEvent.tab();

        // Add a listener for the ug-invalid event
        let invalidEventTriggered = false;
        textareaInput.addEventListener('ug-invalid', () => {
          invalidEventTriggered = true;
        });

        // Focus on the textarea
        await userEvent.click(textareaInput);
        await new Promise((r) => setTimeout(r, 500)); // Allow for focus animations/delays

        // Type into the textarea (triggers ug-input)
        await userEvent.type(
          textareaInput,
          'Aroint thee: go away, rump-fed runion: slut',
          { delay: 100 }
        );

        // Blur the textarea (triggers ug-blur)
        await userEvent.tab();

        // Submit the form with invalid input
        await userEvent.click(submitButton);

        // Wait a moment to ensure the event is captured
        await new Promise((resolve) => setTimeout(resolve, 100));

        // Assert that the invalid event was triggered
        if (!invalidEventTriggered) {
          throw new Error('The ug-invalid event was not triggered.');
        }
      }
    }
  }
};

/*
export const Rows: Story = {
  ...Textarea,
  args: {
    ...Textarea.args,
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
  ...Textarea,
  args: {
    ...Textarea.args,
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
};*/
