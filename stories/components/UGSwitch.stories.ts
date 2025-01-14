import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/switch';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from '@storybook/addon-actions';
import { userEvent, within } from '@storybook/test';

const removeDefaultAttributes = (code: string) => {
  return (
    code
      // Remove empty/default attributes
      .replace(/\s*(name=""|value=""|size="medium"|form=""|help-text="")/g, '')
      // Convert boolean attributes to their proper form
      .replace(/\s*required=""/g, ' required')
      .replace(/\s*disabled=""/g, ' disabled')
      .replace(/\s*checked=""/g, ' checked')
  );
};

const meta: Meta = {
  title: 'Components/Switch',
  component: 'ug-switch',
  parameters: {
    docs: {
      subtitle: 'Switches allow the user to toggle an option on or off.',
      source: {
        format: true,
        transform: removeDefaultAttributes
      }
    }
  },
  argTypes: {
    name: {
      name: 'name',
      description:
        'The name of the switch, submitted as a name/value pair with form data.',
      table: {
        category: 'Attributes',
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
      control: 'select',
      options: ['small', 'medium', 'large'],
      table: {
        category: 'Properties',
        type: {
          summary: "'small' | 'medium' | 'large'",
          detail:
            'This is a reflected property that syncs with the size attribute.'
        },
        defaultValue: { summary: "'medium'" }
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
        type: {
          summary: 'boolean',
          detail:
            'This is a reflected property that syncs with the disabled attribute.'
        },
        defaultValue: { summary: 'false' }
      },
      control: 'boolean'
    },
    checked: {
      name: 'checked',
      description: 'Draws the switch in a checked state.',
      table: {
        category: 'Properties',
        type: {
          summary: 'boolean',
          detail:
            'This is a reflected property that syncs with the checked attribute.'
        },
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
        category: 'Attributes',
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
        type: {
          summary: 'boolean',
          detail:
            'This is a reflected property that syncs with the required attribute.'
        },
        defaultValue: { summary: 'false' }
      },
      control: 'boolean'
    },
    helpText: {
      name: 'help-text',
      description:
        'The switch’s help text. If you need to display HTML, use the help-text slot instead.',
      table: {
        category: 'Attributes',
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
        type: { summary: undefined },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    validationMessage: {
      name: 'validationMessage',
      description: 'Gets the validation message.',
      table: {
        category: 'Properties',
        type: { summary: undefined },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    updateComplete: {
      name: 'updateComplete',
      description:
        'A read-only promise that resolves when the component has finished updating.',
      table: {
        category: 'Properties',
        type: { summary: undefined },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    //Slots
    helpTextSlot: {
      name: 'help-text',
      description:
        'Text that describes how to use the switch. Alternatively, you can use the help-text attribute.',
      table: {
        category: 'Slots',
        type: { summary: 'slot' },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    //Events
    'ug-blur': {
      name: 'ug-blur',
      description: 'Emitted when the control loses focus.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    'ug-change': {
      name: 'ug-change',
      description: 'Emitted when the control’s checked state changes.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    'ug-input': {
      name: 'ug-input',
      description: 'Emitted when the control receives input.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    'ug-focus': {
      name: 'ug-focus',
      description: 'Emitted when the control gains focus.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    'ug-invalid': {
      name: 'ug-invalid',
      description:
        'Emitted when the form control has been checked for validity and its constraints aren’t satisfied.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      },
      control: false
    }
  }
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    name: '',
    value: '',
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

export const Checked: Story = {
  ...Default,
  args: {
    ...Default.args,
    checked: true
  },
  parameters: {
    docs: {
      description: {
        story: `Use the <code>checked</code> attribute to activate the switch.`
      }
    }
  }
};

export const Disabled: Story = {
  ...Default,
  args: {
    ...Default.args,
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: `Use the <code>disabled</code> attribute to disable the switch.`
      }
    }
  }
};

export const Sizes: Story = {
  ...Default,
  args: {
    ...Default.args
  },
  parameters: {
    docs: {
      description: {
        story: `Use the <code>size</code> attribute to change a switch’s size.`
      }
    },
    controls: false
  },

  render: () => {
    return html`
      <ug-switch size="small">Small</ug-switch>
      <br />
      <ug-switch size="medium">Medium</ug-switch>
      <br />
      <ug-switch size="large">Large</ug-switch>
    `;
  }
};

export const HelpText: Story = {
  ...Default,
  args: {
    ...Default.args,
    helpText: 'What should the user know about the switch?'
  },
  parameters: {
    docs: {
      description: {
        story: `Add descriptive help text to a switch with the <code>help-text</code> attribute. For help texts that contain HTML, use the <code>help-text</code> slot instead.`
      }
    }
  }
};

export const HelpTextSlot: Story = {
  ...Default,
  args: {
    ...Default.args
  },
  parameters: {
    docs: {
      description: {
        story: `Add descriptive help text to a switch with the <code>help-text</code> attribute. For help texts that contain HTML, use the <code>help-text</code> slot instead.`
      }
    }
  },
  render: () => {
    return html`
      <ug-switch>
        <div slot="help-text">
          This is helpful text for the switch, maybe it has a
          <a href=".">link</a>.
        </div>
      </ug-switch>
    `;
  }
};

export const SwitchWithEvents: Story = {
  ...Default,
  args: {
    ...Default.args
  },
  tags: ['!autodocs'],
  parameters: {
    controls: { disable: true }
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
        @ug-blur="${action('ug-blur')}"
        @ug-change="${action('ug-change')}"
        @ug-input="${action('ug-input')}"
        @ug-focus="${action('ug-focus')}"
        @ug-invalid="${action('ug-invalid')}"
      >
        Interactive Switch
      </ug-switch>
    `;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Select the switch and form
    const switchHost = canvas.getByText('Interactive Switch');

    if (!switchHost || !switchHost.shadowRoot) {
      throw new Error('Switch host or its shadowRoot not found.');
    }

    // Access the internal switch element inside the Shadow DOM
    const switchElement = switchHost.shadowRoot.querySelector('label');

    if (!switchElement) {
      throw new Error('switchElement not found.');
    }

    // Track event triggers
    let changeEventTriggered = false;
    let focusEventTriggered = false;
    let blurEventTriggered = false;

    // Add event listeners
    switchHost.addEventListener('ug-change', () => {
      changeEventTriggered = true;
    });
    switchHost.addEventListener('ug-focus', () => {
      focusEventTriggered = true;
    });
    switchHost.addEventListener('ug-blur', () => {
      blurEventTriggered = true;
    });

    // Toggle the switch (triggers ug-change and ug-focus)
    await userEvent.click(switchElement);

    await new Promise((r) => setTimeout(r, 500)); // Allow for focus animations/delays

    if (!changeEventTriggered) {
      throw new Error('Change event was not triggered as expected.');
    }

    if (!focusEventTriggered) {
      throw new Error('Focus event was not triggered as expected.');
    }

    // Blur the switch (triggers ug-blur)
    await userEvent.tab();

    if (!blurEventTriggered) {
      throw new Error('Blur event was not triggered as expected.');
    }

    // Toggle the switch (triggers ug-change and ug-focus)
    await userEvent.click(switchElement);
  }
};
