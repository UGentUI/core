import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/input';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Value } from 'sass';
import { action } from '@storybook/addon-actions';
import { userEvent, within } from '@storybook/test';
import { UgInput } from '@ugent-ui/core/components/input';

function removeDefaultAttributes(code: string): string {
  return code
    .replace(
      /\s*(type="text"|size="medium"|name=""|value=""|label=""|default-value=""|form=""|pattern=""|autocapitalize="off"|autocorrect="off"|autocomplete=""|enterkeyhint="enter"|inputmode="text"|help-text=""|placeholder="")/g,
      ''
    )
    .replace(/\s* filled=""/g, ' filled')
    .replace(/\s* pill=""/g, ' pill')
    .replace(/\s* clearable=""/g, ' clearable')
    .replace(/\s* disabled=""/g, ' disabled')
    .replace(/\s* readonly=""/g, ' readonly')
    .replace(/\s* password-toggle=""/g, ' password-toggle')
    .replace(/\s* password-visible=""/g, ' password-visible')
    .replace(/\s* no-spin-buttons=""/g, ' no-spin-buttons')
    .replace(/\s* required=""/g, ' required')
    .replace(/\s* no-spin-buttons=""/g, ' no-spin-buttons');
}

const meta: Meta = {
  title: 'Components/Input',
  component: 'ug-input',

  parameters: {
    docs: {
      subtitle: 'This component works with standard <form> elements',
      source: {
        transform: (code: string) => removeDefaultAttributes(code),
        format: true
      }
    }
  },
  argTypes: {
    type: {
      description:
        'The type of input. Works the same as a native <code>&lt;input&gt;</code> element, but only a subset of types are supported.',
      control: { type: 'select' },
      options: [
        'date',
        'datetime-local',
        'email',
        'number',
        'password',
        'search',
        'tel',
        'text',
        'time',
        'url'
      ],
      defaultValue: 'text',
      table: {
        category: 'Attributes: Basic Input Behavior',
        type: {
          summary:
            "'date' | 'datetime-local' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url'"
        },
        defaultValue: { summary: "'text'" }
      }
    },
    name: {
      description:
        'The name of the input, submitted as a name/value pair with form data.',
      control: { type: 'text' },
      defaultValue: '',
      table: {
        category: 'Attributes: Basic Input Behavior',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    value: {
      description:
        'The current value of the input, submitted as a name/value pair with form data.',
      control: { type: 'text' },
      defaultValue: '',
      table: {
        category: 'Attributes: Basic Input Behavior',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    defaultValue: {
      description:
        'The default value of the form control. Primarily used for resetting the form control.',
      control: { type: 'text' },
      defaultValue: '',
      table: {
        category: 'Attributes: Basic Input Behavior',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    size: {
      description: 'The input’s size.',
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
      table: {
        category: 'Attributes: Visual Appearance',
        type: { summary: "'small' | 'medium' | 'large'" },
        defaultValue: { summary: "'medium'" }
      }
    },
    filled: {
      description: 'Draws a filled input.',
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        category: 'Attributes: Visual Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    pill: {
      description: 'Draws a pill-style input with rounded edges.',
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        category: 'Attributes: Visual Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    label: {
      description:
        'The input’s label. If you need to display HTML, use the label slot instead.',
      control: { type: 'text' },
      defaultValue: '',
      table: {
        category: 'Attributes: Visual Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    helpText: {
      description:
        'The input’s help text. If you need to display HTML, use the <code>help-text</code> slot instead.',
      control: { type: 'text' },
      defaultValue: '',
      table: {
        category: 'Attributes: Visual Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    clearable: {
      description: 'Adds a clear button when the input is not empty.',
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        category: 'Attributes: Form and Accessibility',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    disabled: {
      description: 'Disables the input.',
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        category: 'Attributes: Visual Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    placeholder: {
      description:
        'Placeholder text to show as a hint when the input is empty.',
      control: { type: 'text' },
      defaultValue: '',
      table: {
        category: 'Attributes: Basic Input Behavior',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    readonly: {
      description: 'Makes the input readonly.',
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        category: 'Attributes: Visual Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    passwordToggle: {
      description:
        'Adds a button to toggle the password’s visibility. Only applies to password types.',
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        category: 'Attributes: Visual Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    passwordVisible: {
      description:
        'Determines whether or not the password is currently visible. Only applies to password input types.',
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        category: 'Attributes: Visual Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    noSpinButtons: {
      description:
        'Hides the browser’s built-in increment/decrement spin buttons for number inputs.',
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        category: 'Attributes: Visual Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    form: {
      description:
        'Allows you to place the form control outside of a form and associate it with the form that has this id. By default, form controls are associated with the nearest containing <code>&lt;form&gt;</code> element. This attribute allows you to place the form control outside of a form and associate it with the form that has this id. The form must be in the same document or shadow root for this to work.',
      control: { type: 'text' },
      defaultValue: '',
      table: {
        category: 'Attributes: Form and Accessibility',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    required: {
      description: 'Makes the input a required field.',
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        category: 'Attributes: validation',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    pattern: {
      description: 'A regular expression pattern to validate input against.',
      control: { type: 'text' },
      defaultValue: undefined,
      table: {
        category: 'Attributes: validation',
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      }
    },
    minlength: {
      description: 'The minimum length of input that will be considered valid.',
      control: { type: 'number' },
      defaultValue: undefined,
      table: {
        category: 'Attributes: validation',
        type: { summary: 'number' },
        defaultValue: { summary: '-' }
      }
    },
    maxlength: {
      description: 'The maximum length of input that will be considered valid.',
      control: { type: 'number' },
      defaultValue: undefined,
      table: {
        category: 'Attributes: validation',
        type: { summary: 'number' },
        defaultValue: { summary: '-' }
      }
    },
    min: {
      description:
        'The input’s minimum value. Only applies to date and number input types.',
      control: { type: 'text' },
      defaultValue: undefined,
      table: {
        category: 'Attributes: validation',
        type: { summary: 'number | string' },
        defaultValue: { summary: '-' }
      }
    },
    max: {
      description:
        'The input’s maximum value. Only applies to date and number input types.',
      control: { type: 'text' },
      defaultValue: undefined,
      table: {
        category: 'Attributes: validation',
        type: { summary: 'number | string' },
        defaultValue: { summary: '-' }
      }
    },
    step: {
      description:
        'Specifies the granularity that the value must adhere to, or the special value <code>any</code> which means no stepping is implied, allowing any numeric value. Only applies to date and number input types.. ',
      control: { type: 'text' },
      defaultValue: undefined,
      table: {
        category: 'Attributes: Basic Input Behavior',
        type: { summary: "number | 'any'" },
        defaultValue: { summary: '-' }
      }
    },
    autocapitalize: {
      description:
        'Controls whether and how text input is automatically capitalized as it is entered by the user.',
      control: { type: 'select' },
      options: ['off', 'none', 'on', 'sentences', 'words', 'characters'],
      defaultValue: undefined,
      table: {
        category: 'Attributes: Form and Accessibility',
        type: {
          summary:
            "'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'"
        },
        defaultValue: { summary: '-' }
      }
    },
    autocorrect: {
      description:
        'Indicates whether the browser’s autocorrect feature is on or off.',
      control: { type: 'select' },
      options: ['off', 'on'],
      defaultValue: undefined,
      table: {
        category: 'Attributes: Form and Accessibility',
        type: { summary: "'off' | 'on'" },
        defaultValue: { summary: '-' }
      }
    },
    autocomplete: {
      description:
        'Specifies what permission the browser has to provide assistance in filling out form field values. Refer to [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.',
      control: { type: 'text' },
      defaultValue: undefined,
      table: {
        category: 'Attributes: Basic Input Behavior',
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      }
    },
    autofocus: {
      description:
        'Indicates that the input should receive focus on page load.',
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        category: 'Attributes: Basic Input Behavior',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    enterkeyhint: {
      description:
        'Used to customize the label or icon of the enter key on virtual keyboards.',
      control: { type: 'text' },
      defaultValue: undefined,
      table: {
        category: 'Attributes: Form and Accessibility',
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      }
    },
    inputmode: {
      description:
        'Specifies the type of data that is expected to be entered in the input, allowing it to display the appropriate virtual keyboard on supportive devices.',
      control: { type: 'select' },
      options: [
        'none',
        'text',
        'tel',
        'url',
        'email',
        'numeric',
        'decimal',
        'search'
      ],
      defaultValue: undefined,
      table: {
        category: 'Attributes: Basic Input Behavior',
        type: {
          summary:
            "'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'"
        },
        defaultValue: { summary: '-' }
      }
    },
    spellcheck: {
      description:
        'Indicates whether the element is to have its spelling and grammar checked.',
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        category: 'Attributes: Form and Accessibility',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    labelSlot: {
      name: 'label',
      description:
        'The input’s label. Alternatively, you can use the `label` attribute.',
      control: { type: 'text' },
      table: {
        category: 'Slots',
        type: { summary: 'HTML' },
        defaultValue: { summary: 'undefined' }
      }
    },
    prefixSlot: {
      name: 'prefix',
      description:
        'Used to prepend a presentational icon or similar element to the input.',
      control: { type: 'text' },
      table: {
        category: 'Slots',
        type: { summary: 'HTML' },
        defaultValue: { summary: 'undefined' }
      }
    },
    suffixSlot: {
      name: 'suffix',
      description:
        'Used to append a presentational icon or similar element to the input.',
      control: { type: 'text' },
      table: {
        category: 'Slots',
        type: { summary: 'HTML' },
        defaultValue: { summary: 'undefined' }
      }
    },
    clearIconSlot: {
      name: 'clear-icon',
      description: 'An icon to use in lieu of the default clear icon.',
      control: { type: 'text' },
      table: {
        category: 'Slots',
        type: { summary: 'HTML' },
        defaultValue: { summary: 'undefined' }
      }
    },
    showPasswordIconSlot: {
      name: 'show-password-icon',
      description: 'An icon to use in lieu of the default show password icon.',
      control: { type: 'text' },
      table: {
        category: 'Slots',
        type: { summary: 'HTML' },
        defaultValue: { summary: 'undefined' }
      }
    },
    hidePasswordIconSlot: {
      name: 'hide-password-icon',
      description: 'An icon to use in lieu of the default hide password icon.',
      control: { type: 'text' },
      table: {
        category: 'Slots',
        type: { summary: 'HTML' },
        defaultValue: { summary: 'undefined' }
      }
    },
    helpTextSlot: {
      name: 'help-text',
      description:
        'Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.',
      control: { type: 'text' },
      table: {
        category: 'Slots',
        type: { summary: 'HTML' },
        defaultValue: { summary: 'undefined' }
      }
    },
    ugBlur: {
      name: 'ug-blur',
      description: 'Emitted when the control loses focus.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: '-' }
      }
    },
    ugChange: {
      name: 'ug-change',
      description:
        'Emitted when an alteration to the control’s value is committed by the user.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: '-' }
      }
    },
    ugClear: {
      name: 'ug-clear',
      description: 'Emitted when the clear button is activated.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: '-' }
      }
    },
    ugFocus: {
      name: 'ug-focus',
      description: 'Emitted when the control gains focus.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: '-' }
      }
    },
    ugInput: {
      name: 'ug-input',
      description: 'Emitted when the control receives input.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: '-' }
      }
    },
    ugInvalid: {
      name: 'ug-invalid',
      description:
        'Emitted when the form control has been checked for validity and its constraints aren’t satisfied.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: '-' }
      }
    },
    focus: {
      name: 'focus()',
      description: 'Sets focus on the input.',
      args: { options: { control: 'object' } },
      table: {
        category: 'Methods',
        type: { summary: 'void' },
        defaultValue: { summary: '-' }
      }
    },
    blur: {
      name: 'blur()',
      description: 'Removes focus from the input.',
      args: {},
      table: {
        category: 'Methods',
        type: { summary: 'void' },
        defaultValue: { summary: '-' }
      }
    },
    select: {
      name: 'select()',
      description: 'Selects all the text in the input.',
      args: {},
      table: {
        category: 'Methods',
        type: { summary: 'void' },
        defaultValue: { summary: '-' }
      }
    },
    setSelectionRange: {
      name: 'setSelectionRange()',
      description:
        'Sets the start and end positions of the text selection (0-based).',
      args: {
        selectionStart: { control: 'number' },
        selectionEnd: { control: 'number' },
        selectionDirection: {
          control: 'select',
          options: ['forward', 'backward', 'none']
        }
      },
      table: {
        category: 'Methods',
        type: { summary: 'void' },
        defaultValue: { summary: '-' }
      }
    },
    setRangeText: {
      name: 'setRangeText()',
      description: 'Replaces a range of text with a new string.',
      args: {
        replacement: { control: 'text' },
        start: { control: 'number' },
        end: { control: 'number' },
        selectMode: {
          control: 'select',
          options: ['select', 'start', 'end', 'preserve']
        }
      },
      table: {
        category: 'Methods',
        type: { summary: 'void' },
        defaultValue: { summary: '-' }
      }
    },
    showPicker: {
      name: 'showPicker()',
      description:
        'Displays the browser picker for an input element (only works if the browser supports it for the input type).',
      args: {},
      table: {
        category: 'Methods',
        type: { summary: 'void' },
        defaultValue: { summary: '-' }
      }
    },
    stepUp: {
      name: 'stepUp()',
      description:
        'Increments the value of a numeric input type by the value of the step attribute.',
      args: {},
      table: {
        category: 'Methods',
        type: { summary: 'void' },
        defaultValue: { summary: '-' }
      }
    },
    stepDown: {
      name: 'stepDown()',
      description:
        'Decrements the value of a numeric input type by the value of the step attribute.',
      args: {},
      table: {
        category: 'Methods',
        type: { summary: 'void' },
        defaultValue: { summary: '-' }
      }
    },
    checkValidity: {
      name: 'checkValidity()',
      description:
        'Checks for validity but does not show a validation message. Returns <code>true</code> when valid and <code>false</code> when invalid.',
      args: {},
      table: {
        category: 'Methods',
        type: { summary: 'boolean' },
        defaultValue: { summary: '-' }
      }
    },
    getForm: {
      name: 'getForm()',
      description: 'Gets the associated form, if one exists.',
      args: {},
      table: {
        category: 'Methods',
        type: { summary: 'HTMLFormElement | null' },
        defaultValue: { summary: '-' }
      }
    },
    reportValidity: {
      name: 'reportValidity()',
      description:
        'Checks for validity and shows the browser’s validation message if the control is invalid.',
      args: {},
      table: {
        category: 'Methods',
        type: { summary: 'boolean' },
        defaultValue: { summary: '-' }
      }
    },
    setCustomValidity: {
      name: 'setCustomValidity()',
      description:
        'Sets a custom validation message. Pass an empty string to restore validity.',
      args: { message: { control: 'text' } },
      table: {
        category: 'Methods',
        type: { summary: 'void' },
        defaultValue: { summary: '-' }
      }
    }
  }
};

export default meta;

type Story = StoryObj;

export const Input: Story = {
  args: {
    type: 'text',
    name: '',
    value: '',
    defaultValue: '',
    size: 'medium',
    filled: false,
    pill: false,
    label: '',
    helpText: '',
    clearable: false,
    disabled: false,
    placeholder: '',
    readonly: false,
    passwordToggle: false,
    passwordVisible: false,
    noSpinButtons: false,
    form: '',
    required: false,
    pattern: '',
    minlength: undefined,
    maxlength: undefined,
    min: undefined,
    max: undefined,
    step: undefined,
    autocapitalize: 'off',
    autocorrect: 'off',
    autocomplete: '',
    autofocus: false,
    enterkeyhint: 'enter',
    spellcheck: true,
    inputmode: 'text'
  },
  render: (args) => {
    return html` <ug-input
      type="${args.type}"
      name="${args.name}"
      value="${args.value}"
      default-value="${args.defaultValue}"
      size="${args.size}"
      ?filled="${args.filled}"
      ?pill="${args.pill}"
      label="${args.label}"
      help-text="${args.helpText}"
      ?clearable="${args.clearable}"
      ?disabled="${args.disabled}"
      placeholder="${args.placeholder}"
      ?readonly="${args.readonly}"
      ?password-toggle="${args.passwordToggle}"
      ?password-visible="${args.passwordVisible}"
      ?no-spin-buttons="${args.noSpinButtons}"
      form="${args.form}"
      ?required="${args.required}"
      pattern="${args.pattern}"
      minlength="${ifDefined(args.minlength)}"
      maxlength="${ifDefined(args.maxlength)}"
      min="${ifDefined(args.min)}"
      max="${ifDefined(args.max)}"
      step="${ifDefined(args.step)}"
      autocapitalize="${args.autocapitalize}"
      autocorrect="${args.autocorrect}"
      autocomplete="${args.autocomplete}"
      ?autofocus="${args.autofocus}"
      enterkeyhint="${args.enterkeyhint}"
      ?spellcheck="${args.spellcheck}"
      inputmode="${args.inputmode}"
    ></ug-input>`;
  }
};

export const Labels: Story = {
  ...Input,
  args: {
    ...Input.args,
    label: 'What is your name?'
  },
  parameters: {
    docs: {
      description: {
        story: `Use the <code>label</code> attribute to give the input an accessible label. For labels that contain HTML, use the <code>label</code> slot instead.`
      }
    }
  }
};

export const HelpText: Story = {
  ...Input,
  args: {
    ...Input.args,
    label: 'Nickname',
    helpText: 'What would you like people to call you?'
  },
  parameters: {
    docs: {
      description: {
        story: `Add descriptive help text to an input with the <code>help-text</code> attribute. For help texts that contain HTML, use the <code>help-text</code> slot instead.`
      }
    }
  }
};

export const Placeholders: Story = {
  ...Input,
  args: {
    ...Input.args,
    placeholder: 'Type something'
  },
  parameters: {
    docs: {
      description: {
        story: `Use the <code>placeholder</code> attribute to add a placeholder.`
      }
    }
  }
};

export const Clearable: Story = {
  ...Input,
  args: {
    ...Input.args,
    value: 'Look at the cross symbol on the right of this text',
    clearable: true
  },
  parameters: {
    docs: {
      description: {
        story: `Add the <code>clearable</code> attribute to add a clear button when the input has content.`
      }
    }
  }
};

export const TogglePassword: Story = {
  ...Input,
  args: {
    ...Input.args,
    type: 'password',
    placeholder: 'Password Toggle',
    passwordToggle: true
  },
  parameters: {
    docs: {
      description: {
        story: `Add the <code>password-toggle</code> attribute to add a toggle button that will show the password when activated.`
      }
    }
  }
};

export const FilledInputs: Story = {
  ...Input,
  args: {
    ...Input.args,
    placeholder: 'I am a different color',
    filled: true
  },
  parameters: {
    docs: {
      description: {
        story: `Add the <code>filled</code> attribute to draw a filled input.`
      }
    }
  }
};

export const Disabled: Story = {
  ...Input,
  args: {
    ...Input.args,
    placeholder: 'Disabled',
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: `Use the <code>disabled</code> attribute to disable an input.`
      }
    }
  }
};

export const Sizes: Story = {
  ...Input,
  args: {
    ...Input.args
  },
  parameters: {
    docs: {
      description: {
        story: `Use the <code>size</code> attribute to change an input’s size.`
      }
    }
  },
  render: (args, context) => html`
    <h4>Small</h4>
    ${Input.render
      ? Input.render({ ...args, size: 'small' }, context)
      : html`<div>No render available</div>`}
    <br />
    <h4>Medium</h4>
    ${Input.render
      ? Input.render({ ...args, size: 'medium' }, context)
      : html`<div>No render available</div>`}
    <br />
    <h4>Large</h4>
    ${Input.render
      ? Input.render({ ...args, size: 'large' }, context)
      : html`<div>No render available</div>`}
  `
};

export const Pill: Story = {
  ...Input,
  args: {
    ...Input.args,
    pill: true
  },
  parameters: {
    docs: {
      description: {
        story: `Use the <code>pill</code> attribute to give inputs rounded edges.`
      }
    }
  },
  render: (args, context) => html`
    <h4>Small</h4>
    ${Input.render
      ? Input.render({ ...args, size: 'small' }, context)
      : html`<div>No render available</div>`}
    <br />
    <h4>Medium</h4>
    ${Input.render
      ? Input.render({ ...args, size: 'medium' }, context)
      : html`<div>No render available</div>`}
    <br />
    <h4>Large</h4>
    ${Input.render
      ? Input.render({ ...args, size: 'large' }, context)
      : html`<div>No render available</div>`}
  `
};

export const InputTypes: Story = {
  ...Input,
  args: {
    ...Input.args
  },
  parameters: {
    docs: {
      description: {
        story: `The <code>type</code> attribute controls the type of input the browser renders.`
      }
    }
  },
  render: (args, context) => html`
    <h4>Date</h4>
    ${Input.render
      ? Input.render({ ...args, type: 'date', placeholder: 'Date' }, context)
      : html`<div>No render available</div>`}
    <br />
    <h4>Datetime-local</h4>
    ${Input.render
      ? Input.render(
          { ...args, type: 'datetime-local', placeholder: 'Datetime-local' },
          context
        )
      : html`<div>No render available</div>`}
    <br />
    <h4>Email</h4>
    ${Input.render
      ? Input.render({ ...args, type: 'email', placeholder: 'Email' }, context)
      : html`<div>No render available</div>`}
    <br />
    <h4>Number</h4>
    ${Input.render
      ? Input.render(
          { ...args, type: 'number', placeholder: 'number' },
          context
        )
      : html`<div>No render available</div>`}
    <br />
    <h4>Password</h4>
    ${Input.render
      ? Input.render(
          { ...args, type: 'password', placeholder: 'password' },
          context
        )
      : html`<div>No render available</div>`}
    <br />
    <h4>Search</h4>
    ${Input.render
      ? Input.render(
          { ...args, type: 'search', placeholder: 'search' },
          context
        )
      : html`<div>No render available</div>`}
    <br />
    <h4>Tel</h4>
    ${Input.render
      ? Input.render({ ...args, type: 'tel', placeholder: 'tel' }, context)
      : html`<div>No render available</div>`}
    <br />
    <h4>Text</h4>
    ${Input.render
      ? Input.render({ ...args, type: 'text', placeholder: 'text' }, context)
      : html`<div>No render available</div>`}
    <br />
    <h4>Time</h4>
    ${Input.render
      ? Input.render({ ...args, type: 'time', placeholder: 'time' }, context)
      : html`<div>No render available</div>`}
    <br />
    <h4>Url</h4>
    ${Input.render
      ? Input.render({ ...args, type: 'url', placeholder: 'url' }, context)
      : html`<div>No render available</div>`}
  `
};

export const PrefixAndSuffixIcons: Story = {
  parameters: {
    docs: {
      description: {
        story: `Use the <code>prefix</code> and <code>suffix</code> slots to add icons.`
      }
    },
    controls: { disable: true } // Completely disable controls
  },
  render: () => {
    return html`<ug-input placeholder="Small" size="small">
        <ug-icon name="house" slot="prefix"></ug-icon>
        <ug-icon name="chat" slot="suffix"></ug-icon>
      </ug-input>
      <br />
      <ug-input placeholder="Medium" size="medium">
        <ug-icon name="house" slot="prefix"></ug-icon>
        <ug-icon name="chat" slot="suffix"></ug-icon>
      </ug-input>
      <br />
      <ug-input placeholder="Large" size="large">
        <ug-icon name="house" slot="prefix"></ug-icon>
        <ug-icon name="chat" slot="suffix"></ug-icon>
      </ug-input>`;
  }
};

export const InputWithEvents: Story = {
  parameters: {
    docs: { disable: true }
  },
  args: {
    type: 'text',
    name: '',
    value: '',
    defaultValue: '',
    size: 'medium',
    filled: false,
    pill: false,
    label: '',
    helpText: '',
    clearable: true,
    disabled: false,
    placeholder: 'Enter text...',
    readonly: false,
    passwordToggle: false,
    passwordVisible: false,
    noSpinButtons: false,
    form: '',
    required: false,
    pattern: '',
    minlength: undefined,
    maxlength: undefined,
    min: undefined,
    max: undefined,
    step: undefined,
    autocapitalize: 'off',
    autocorrect: 'off',
    autocomplete: '',
    autofocus: false,
    enterkeyhint: 'enter',
    spellcheck: true,
    inputmode: 'text'
  },
  render: (args) => {
    return html` <ug-input
      data-testid="input"
      type="${args.type}"
      name="${args.name}"
      value="${args.value}"
      default-value="${args.defaultValue}"
      size="${args.size}"
      ?filled="${args.filled}"
      ?pill="${args.pill}"
      label="${args.label}"
      help-text="${args.helpText}"
      ?clearable="${args.clearable}"
      ?disabled="${args.disabled}"
      placeholder="${args.placeholder}"
      ?readonly="${args.readonly}"
      ?password-toggle="${args.passwordToggle}"
      ?password-visible="${args.passwordVisible}"
      ?no-spin-buttons="${args.noSpinButtons}"
      form="${args.form}"
      ?required="${args.required}"
      pattern="${args.pattern}"
      minlength="${ifDefined(args.minlength)}"
      maxlength="${ifDefined(args.maxlength)}"
      min="${ifDefined(args.min)}"
      max="${ifDefined(args.max)}"
      step="${ifDefined(args.step)}"
      autocapitalize="${args.autocapitalize}"
      autocorrect="${args.autocorrect}"
      autocomplete="${args.autocomplete}"
      ?autofocus="${args.autofocus}"
      enterkeyhint="${args.enterkeyhint}"
      ?spellcheck="${args.spellcheck}"
      inputmode="${args.inputmode}"
      @ug-blur="${action('ug-blur')}"
      @ug-change="${action('ug-change')}"
      @ug-clear="${action('ug-clear')}"
      @ug-focus="${action('ug-focus')}"
      @ug-input="${action('ug-input')}"
      @ug-invalid="${action('ug-invalid')}"
    ></ug-input>`;
  },
  play: async ({ canvasElement }) => {
    const inputElement = canvasElement.querySelector('ug-input');

    if (inputElement == null) {
      throw new Error('InputElement was null');
    }
    if (inputElement.shadowRoot == null) {
      throw new Error('ShadowRoot was null');
    }
    const shadowRoot: ShadowRoot = inputElement.shadowRoot; // Access its shadowRoot

    const input = shadowRoot.querySelector('input');
    if (input == null) {
      throw new Error('Input is null');
    }

    // Track if events fire
    let focusFired = false;
    let inputFired = false;
    let blurFired = false;
    let changeFired = false;
    let clearFired = false;
    let invalidFired = false;

    // Attach event listeners
    inputElement.addEventListener('ug-focus', () => (focusFired = true));
    inputElement.addEventListener('ug-input', () => (inputFired = true));
    inputElement.addEventListener('ug-blur', () => (blurFired = true));
    inputElement.addEventListener('ug-change', () => (changeFired = true));
    inputElement.addEventListener('ug-clear', () => (clearFired = true));
    inputElement.addEventListener('ug-invalid', () => (invalidFired = true));

    // Simulate focus
    await userEvent.click(input);
    if (focusFired) {
      console.log('Focus event triggered successfully.');
    } else {
      console.error('Focus event did not fire.');
    }

    // Simulate input
    await userEvent.type(input, 'Testing input...', { delay: 100 });
    if (inputFired) {
      console.log('Input event triggered successfully.');
    } else {
      console.error('Input event did not fire.');
    }

    // Simulate blur
    await userEvent.tab();
    if (blurFired) {
      console.log('Blur event triggered successfully.');
    } else {
      console.error('Blur event did not fire.');
    }

    // Simulate change
    // (Change events usually fire when the user commits the value and leaves the input)
    if (changeFired) {
      console.log('Change event triggered successfully.');
    } else {
      console.error('Change event did not fire.');
    }

    // Simulate clear button click
    // Directly query the clear button from the shadow root using native methods
    const clearButton = shadowRoot.querySelector(
      'button[aria-label="Clear entry"]'
    );
    if (clearButton == null) {
      throw new Error('clearButton was null');
    }
    await userEvent.click(clearButton);
    if (clearFired) {
      console.log('Clear event triggered successfully.');
    } else {
      console.error('Clear event did not fire.');
    }

    // Simulate invalid input
    inputElement.setCustomValidity('This is invalid');
    inputElement.reportValidity();
    if (invalidFired) {
      console.log('Invalid event triggered successfully.');
    } else {
      console.error('Invalid event did not fire.');
    }
  }
};
