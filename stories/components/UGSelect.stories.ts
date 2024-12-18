import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/select';

const meta: Meta = {
  title: 'Components/Select',
  component: 'ug-select',

  parameters: {
    docs: {
      subtitle:
        'Selects allow you to choose items from a menu of predefined options.'
    }
  },

  argTypes: {
    name: {
      name: 'Name',
      description:
        'The name of the select, submitted as a name/value pair with form data.',
      type: { name: 'string' },
      defaultValue: '',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    value: {
      name: 'Value',
      description: `The current value of the select, submitted as a name/value pair with form data. 
                  When multiple is enabled, the value attribute will be a space-delimited list 
                  of values based on the options selected, and the value property will be an array. 
                  For this reason, values must not contain spaces.`,
      table: {
        category: 'Properties',
        type: { summary: 'string | string[]' }
      }
    },
    defaultValue: {
      name: 'Default Value',
      description:
        'The default value of the form control. Primarily used for resetting the form control.',
      defaultValue: '',
      table: {
        category: 'Properties',
        type: { summary: 'string | string[]' },
        defaultValue: { summary: "''" }
      }
    },
    size: {
      name: 'Size',
      description: "The select's size.",
      control: { type: 'select', options: ['small', 'medium', 'large'] },
      defaultValue: 'medium',
      table: {
        category: 'Properties',
        type: { summary: "'small' | 'medium' | 'large'" },
        defaultValue: { summary: "'medium'" }
      }
    },
    placeholder: {
      name: 'Placeholder',
      description:
        'Placeholder text to show as a hint when the select is empty.',
      type: { name: 'string' },
      defaultValue: '',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    multiple: {
      name: 'Multiple',
      description: 'Allows more than one option to be selected.',
      type: { name: 'boolean' },
      defaultValue: false,
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    maxOptionsVisible: {
      name: 'Max Options Visible',
      description:
        'The maximum number of selected options to show when multiple is true. After the maximum, "+n" will indicate the number of additional items selected. Set to 0 to remove the limit.',
      type: { name: 'number' },
      defaultValue: 3,
      table: {
        category: 'Properties',
        type: { summary: 'number' },
        defaultValue: { summary: '3' }
      }
    },
    disabled: {
      name: 'Disabled',
      description: 'Disables the select control.',
      type: { name: 'boolean' },
      defaultValue: false,
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    clearable: {
      name: 'Clearable',
      description: 'Adds a clear button when the select is not empty.',
      type: { name: 'boolean' },
      defaultValue: false,
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    open: {
      name: 'Open',
      description:
        'Indicates whether or not the select is open. You can toggle this attribute to show and hide the menu, or you can use the show() and hide() methods.',
      type: { name: 'boolean' },
      defaultValue: false,
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    hoist: {
      name: 'Hoist',
      description:
        'Enable this option to prevent the listbox from being clipped when the component is placed inside a container with overflow: auto|scroll.',
      type: { name: 'boolean' },
      defaultValue: false,
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    filled: {
      name: 'Filled',
      description: 'Draws a filled select.',
      type: { name: 'boolean' },
      defaultValue: false,
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    pill: {
      name: 'Pill',
      description: 'Draws a pill-style select with rounded edges.',
      type: { name: 'boolean' },
      defaultValue: false,
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    label: {
      name: 'Label',
      description:
        "The select's label. If you need to display HTML, use the label slot instead.",
      type: { name: 'string' },
      defaultValue: '',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    placement: {
      name: 'Placement',
      description:
        "The preferred placement of the select's menu. Note that the actual placement may vary as needed to keep the listbox inside the viewport.",
      control: { type: 'select', options: ['top', 'bottom'] },
      defaultValue: 'bottom',
      table: {
        category: 'Properties',
        type: { summary: "'top' | 'bottom'" },
        defaultValue: { summary: "'bottom'" }
      }
    },
    helpText: {
      name: 'Help Text',
      description:
        "The select's help text. If you need to display HTML, use the help-text slot instead.",
      type: { name: 'string' },
      defaultValue: '',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    form: {
      name: 'Form',
      description:
        'Allows you to associate the form control with a form that has this id. The form must be in the same document or shadow root for this to work.',
      type: { name: 'string' },
      defaultValue: '',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    required: {
      name: 'Required',
      description: "The select's required attribute.",
      type: { name: 'boolean' },
      defaultValue: false,
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    getTag: {
      name: 'Get Tag',
      description:
        'A function that customizes the tags to be rendered when multiple=true. The function should return either a Lit TemplateResult or a string containing trusted HTML of the symbol to render at the specified value.',
      table: {
        category: 'Properties',
        type: {
          summary:
            '(option: SlOption, index: number) => TemplateResult | string | HTMLElement'
        }
      }
    },
    validity: {
      name: 'Validity',
      description: 'Gets the validity state object.',
      table: {
        category: 'Properties',
        type: { summary: '-' }
      }
    },
    validationMessage: {
      name: 'Validation Message',
      description: 'Gets the validation message.',
      table: {
        category: 'Properties',
        type: { summary: '-' }
      }
    },

    // Events
    'ug-change': {
      description: 'Emitted when the control’s value changes.',
      action: 'ug-change',
      table: {
        category: 'Events',
        type: { summary: undefined },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    'ug-clear': {
      description: 'Emitted when the control’s value is cleared.',
      action: 'ug-clear',
      table: {
        category: 'Events',
        type: { summary: undefined },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    'ug-input': {
      description: 'Emitted when the control receives input.',
      action: 'ug-input',
      table: {
        category: 'Events',
        type: { summary: undefined },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    'ug-focus': {
      description: 'Emitted when the control gains focus.',
      action: 'ug-focus',
      table: {
        category: 'Events',
        type: { summary: undefined },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    'ug-blur': {
      description: 'Emitted when the control loses focus.',
      action: 'ug-blur',
      table: {
        category: 'Events',
        type: { summary: undefined },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    'ug-show': {
      description: 'Emitted when the select’s menu opens.',
      action: 'ug-show',
      table: {
        category: 'Events',
        type: { summary: undefined },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    'ug-after-show': {
      description:
        'Emitted after the select’s menu opens and all animations are complete.',
      action: 'ug-after-show',
      table: {
        category: 'Events',
        type: { summary: undefined },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    'ug-hide': {
      description: 'Emitted when the select’s menu closes.',
      action: 'ug-hide',
      table: {
        category: 'Events',
        type: { summary: undefined },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    'ug-after-hide': {
      description:
        'Emitted after the select’s menu closes and all animations are complete.',
      action: 'ug-after-hide',
      table: {
        category: 'Events',
        type: { summary: undefined },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    'ug-invalid': {
      description:
        'Emitted when the form control has been checked for validity and its constraints aren’t satisfied.',
      action: 'ug-invalid',
      table: {
        category: 'Events',
        type: { summary: undefined },
        defaultValue: { summary: undefined }
      },
      control: false
    },

    // Methods
    show: {
      description: 'Shows the listbox.',
      table: {
        category: 'Methods',
        type: { summary: undefined },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    hide: {
      description: 'Hides the listbox.',
      table: {
        category: 'Methods',
        type: { summary: undefined },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    checkValidity: {
      description:
        'Checks for validity but does not show a validation message. Returns true when valid and false when invalid.',
      table: {
        category: 'Methods',
        type: { summary: undefined },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    getForm: {
      description: 'Gets the associated form, if one exists.',
      table: {
        category: 'Methods',
        type: { summary: undefined },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    reportValidity: {
      description:
        'Checks for validity and shows the browser’s validation message if the control is invalid.',
      table: {
        category: 'Methods',
        type: { summary: undefined },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    setCustomValidity: {
      description:
        'Sets a custom validation message. Pass an empty string to restore validity.',
      table: {
        category: 'Methods',
        type: { summary: undefined },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    focus: {
      description: 'Sets focus on the control.',
      table: {
        category: 'Methods',
        type: { summary: undefined },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    blur: {
      description: 'Removes focus from the control.',
      table: {
        category: 'Methods',
        type: { summary: undefined },
        defaultValue: { summary: undefined }
      },
      control: false
    },

    // Slots
    default: {
      description:
        'The listbox options. Must be `<ug-option>` elements. You can use `<ug-divider>` to group items visually.',
      table: {
        category: 'Slots',
        type: { summary: '<ug-option> | <ug-divider>' }
      }
    },
    labelSlot: {
      name: 'label',
      description:
        'The input’s label. Alternatively, you can use the `label` attribute.',
      table: {
        category: 'Slots',
        type: { summary: 'HTML content' }
      }
    },
    prefix: {
      description:
        'Used to prepend a presentational icon or similar element to the combobox.',
      table: {
        category: 'Slots',
        type: { summary: 'HTML content' }
      }
    },
    suffix: {
      description:
        'Used to append a presentational icon or similar element to the combobox.',
      table: {
        category: 'Slots',
        type: { summary: 'HTML content' }
      }
    },
    'clear-icon': {
      description: 'An icon to use in lieu of the default clear icon.',
      table: {
        category: 'Slots',
        type: { summary: 'HTML content' }
      }
    },
    'expand-icon': {
      description:
        'The icon to show when the control is expanded and collapsed. Rotates on open and close.',
      table: {
        category: 'Slots',
        type: { summary: 'HTML content' }
      }
    },
    'help-text': {
      description:
        'Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.',
      table: {
        category: 'Slots',
        type: { summary: 'HTML content' }
      }
    }
  }
};

export default meta;

type Story = StoryObj;

export const Select: Story = {
  args: {
    name: '',
    value: '',
    defaultValue: '',
    size: 'medium',
    placeholder: 'Select an option',
    multiple: false,
    maxOptionsVisible: 3,
    disabled: false,
    clearable: false,
    open: false,
    hoist: false,
    filled: false,
    pill: false,
    label: 'Select Label',
    placement: 'bottom',
    helpText: 'Help text for the select',
    form: '',
    required: false
  },
  render: (args) => {
    return html`<ug-select
      name=${args.name}
      value=${args.value}
      defaultValue=${args.defaultValue}
      size=${args.size}
      placeholder=${args.placeholder}
      multiple=${args.multiple}
      maxOptionsVisible=${args.maxOptionsVisible}
      disabled=${args.disabled}
      clearable=${args.clearable}
      open=${args.open}
      hoist=${args.hoist}
      filled=${args.filled}
      pill=${args.pill}
      label=${args.label}
      placement=${args.placement}
      helpText=${args.helpText}
      form=${args.form}
      required=${args.required}
    >
      <ug-option value="option-1">Option 1</ug-option>
      <ug-option value="option-2">Option 2</ug-option>
      <ug-option value="option-3">Option 3</ug-option>
      <ug-option value="option-4">Option 4</ug-option>
      <ug-option value="option-5">Option 5</ug-option>
      <ug-option value="option-6">Option 6</ug-option>
    </ug-select>`;
  }
};

export const Select2: Story = {
  render: () => {
    return html`<ug-select>
      <ug-option value="option-1">Option 1</ug-option>
      <ug-option value="option-2">Option 2</ug-option>
      <ug-option value="option-3">Option 3</ug-option>
      <ug-option value="option-4">Option 4</ug-option>
      <ug-option value="option-5">Option 5</ug-option>
      <ug-option value="option-6">Option 6</ug-option>
    </ug-select>`;
  }
};
