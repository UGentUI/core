import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/switch';
import { ifDefined } from 'lit/directives/if-defined.js';

const meta: Meta = {
  title: 'Components/Switch',
  component: 'ug-switch',
  parameters: {
    docs: {
      toc: {
        /* options */
      },
      subtitle: 'Switches allow the user to toggle an option on or off.'
    }
  },
  argTypes: {
    name: {
      name: 'name',
      description:
        'The name of the switch, submitted as a name/value pair with form data.',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      },
      control: 'text'
    },
    value: {
      name: 'value',
      description:
        'The current value of the switch, submitted as a name/value pair with form data.',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      control: 'text'
    },
    size: {
      name: 'size',
      description: 'The switch’s size.',
      table: {
        category: 'Properties',
        type: { summary: "'small' | 'medium' | 'large'" },
        defaultValue: { summary: "'medium'" }
      },
      control: {
        type: 'select',
        options: ['small', 'medium', 'large']
      },
      defaultValue: {
        summary: 'medium'
      }
    },
    disabled: {
      name: 'disabled',
      description: 'Disables the switch.',
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: 'boolean'
    },
    checked: {
      name: 'checked',
      description: 'Draws the switch in a checked state.',
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: 'boolean'
    },
    defaultChecked: {
      name: 'defaultChecked',
      description:
        'The default value of the form control. Primarily used for resetting the form control.',
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: 'boolean'
    },
    form: {
      name: 'form',
      description:
        'Allows associating the switch with a form outside of the nearest containing <form> element.',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      },
      control: 'text'
    },
    required: {
      name: 'required',
      description: 'Makes the switch a required field.',
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: 'boolean'
    },
    helpText: {
      name: 'helpText',
      description:
        'The switch’s help text. If you need to display HTML, use the help-text slot instead.',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      },
      control: 'text'
    },
    validity: {
      name: 'validity',
      description: 'Gets the validity state object.',
      table: {
        category: 'Properties',
        type: { summary: '-' },
        defaultValue: { summary: '-' }
      },
      control: false
    },
    validationMessage: {
      name: 'validationMessage',
      description: 'Gets the validation message.',
      table: {
        category: 'Properties',
        type: { summary: '-' },
        defaultValue: { summary: '-' }
      },
      control: false
    },
    updateComplete: {
      name: 'updateComplete',
      description:
        'A read-only promise that resolves when the component has finished updating.',
      table: {
        category: 'Properties',
        type: { summary: '-' },
        defaultValue: { summary: '-' }
      },
      control: false
    },
    //Slots
    helpTextSlot: {
      name: 'helpText',
      description:
        'Text that describes how to use the switch. Alternatively, you can use the help-text attribute.',
      table: {
        category: 'Slots',
        type: { summary: 'string | slot' },
        defaultValue: { summary: "''" }
      },
      control: 'text'
    },
    //Events
    'ug-blur': {
      name: 'ug-blur',
      description: 'Emitted when the control loses focus.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: '-' }
      }
    },
    'ug-change': {
      name: 'ug-change',
      description: 'Emitted when the control’s checked state changes.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: '-' }
      }
    },
    'ug-input': {
      name: 'ug-input',
      description: 'Emitted when the control receives input.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: '-' }
      }
    },
    'ug-focus': {
      name: 'ug-focus',
      description: 'Emitted when the control gains focus.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: '-' }
      }
    },
    'ug-invalid': {
      name: 'ug-invalid',
      description:
        'Emitted when the form control has been checked for validity and its constraints aren’t satisfied.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: '-' }
      }
    }
  }
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    name: 'switch1',
    value: 'on',
    size: 'medium',
    disabled: false,
    checked: false,
    defaultChecked: false,
    form: '',
    required: false,
    helpText: ''
  },
  render: (args) => {
    return html`
      <ug-switch
        name="${args.name}"
        value="${args.value}"
        size="${args.size}"
        ?disabled="${args.disabled}"
        ?checked="${args.checked}"
        ?defaultChecked="${args.defaultChecked}"
        form="${ifDefined(args.form)}"
        ?required="${args.required}"
        help-text="${ifDefined(args.helpText)}"
      ></ug-switch>
    `;
  }
};
