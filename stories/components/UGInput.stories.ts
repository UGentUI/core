import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/input';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Value } from 'sass';

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
        'The input’s help text. If you need to display HTML, use the help-text slot instead.',
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
        'Allows you to place the form control outside of a form and associate it with the form that has this id.',
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
      description: 'Specifies the granularity that the value must adhere to.',
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
        'Controls whether and how text input is automatically capitalized.',
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
        'Specifies what permission the browser has to provide assistance in filling out form field values.',
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
        'Specifies the type of data that is expected to be entered in the input.',
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
    'ug-blur': {
      description: 'Emitted when the control loses focus.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: '-' }
      }
    },
    'ug-change': {
      description:
        'Emitted when an alteration to the control’s value is committed by the user.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: '-' }
      }
    },
    'ug-clear': {
      description: 'Emitted when the clear button is activated.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: '-' }
      }
    },
    'ug-focus': {
      description: 'Emitted when the control gains focus.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: '-' }
      }
    },
    'ug-input': {
      description: 'Emitted when the control receives input.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: '-' }
      }
    },
    'ug-invalid': {
      description:
        'Emitted when the form control has been checked for validity and its constraints aren’t satisfied.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: '-' }
      }
    },
    blur: {
      description: 'Removes focus from the input.',
      table: {
        category: 'Methods',
        type: { summary: 'void' },
        defaultValue: { summary: '-' }
      }
    },
    click: {
      description: 'Simulates a click on the input.',
      table: {
        category: 'Methods',
        type: { summary: 'void' },
        defaultValue: { summary: '-' }
      }
    },
    focus: {
      description: 'Sets focus on the input.',
      table: {
        category: 'Methods',
        type: { summary: 'void' },
        defaultValue: { summary: '-' }
      }
    },
    select: {
      description: 'Selects all the text in the input.',
      table: {
        category: 'Methods',
        type: { summary: 'void' },
        defaultValue: { summary: '-' }
      }
    },
    setCustomValidity: {
      description:
        'Sets a custom validation message for the input. Passing an empty string clears the message.',
      table: {
        category: 'Methods',
        type: { summary: '(message: string) => void' },
        defaultValue: { summary: '-' }
      }
    },
    reportValidity: {
      description:
        "Checks the input's validity and displays the error message if invalid.",
      table: {
        category: 'Methods',
        type: { summary: '() => boolean' },
        defaultValue: { summary: '-' }
      }
    },
    checkValidity: {
      description:
        "Checks the input's validity without displaying the error message.",
      table: {
        category: 'Methods',
        type: { summary: '() => boolean' },
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
