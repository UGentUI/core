import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/range';
import { action } from '@storybook/addon-actions';
import { userEvent } from '@storybook/test';

function removeDefaultAttributes(code: string): string {
  return code
    .replace(
      /\s*(name=""|value="0"|label=""|help-text=""|min="0"|max="100"|step="1"|tooltip="top")/g,
      ''
    )
    .replace(/\s* disabled=""/g, ' disabled');
}

const meta: Meta = {
  title: 'Components/Range',
  component: 'range',
  parameters: {
    docs: {
      subtitle:
        'Ranges allow the user to select a single value within a given range using a slider.',
      description: {
        component: 'This component works with standard `<form>` elements.'
      },
      source: {
        transform: (code: string) => removeDefaultAttributes(code),
        format: true
      },
      importSection: true // Enables the import section
    }
  },
  decorators: [
    (Story) => {
      // Apply CSS without showing in code snippet
      const style = document.createElement('style');
      // This fixes the hoisting but breaks the zoom buttons in the toolbar
      style.textContent = '.docs-story :not(.sb-story) { transform: none; }';
      document.head.appendChild(style);
      return Story();
    }
  ],
  argTypes: {
    name: {
      description:
        'The name of the range, submitted as a name/value pair with form data.',
      control: { type: 'text' },
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    value: {
      description:
        'The current value of the range, submitted as a name/value pair with form data.',
      control: { type: 'number' },
      table: {
        category: 'Properties',
        type: { summary: 'number' },
        defaultValue: { summary: '0' }
      }
    },
    label: {
      description:
        'The range’s label. If you need to display HTML, use the label slot instead.',
      control: { type: 'text' },
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    helpText: {
      description:
        'The range’s help text. If you need to display HTML, use the help-text slot instead.',
      control: { type: 'text' },
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    disabled: {
      name: 'disabled',
      description: 'Disables the range. <br>`reflects: true`',
      control: { type: 'boolean' },
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    min: {
      description: 'The minimum acceptable value of the range.',
      control: { type: 'number' },
      table: {
        category: 'Properties',
        type: { summary: 'number' },
        defaultValue: { summary: '0' }
      }
    },
    max: {
      description: 'The maximum acceptable value of the range.',
      control: { type: 'number' },
      table: {
        category: 'Properties',
        type: { summary: 'number' },
        defaultValue: { summary: '100' }
      }
    },
    step: {
      description:
        'The interval at which the range will increase and decrease.',
      control: { type: 'number' },
      table: {
        category: 'Properties',
        type: { summary: 'number' },
        defaultValue: { summary: '1' }
      }
    },
    tooltip: {
      description: 'The preferred placement of the range’s tooltip.',
      control: { type: 'select' },
      options: ['top', 'bottom', 'none'],
      table: {
        category: 'Properties',
        type: { summary: "'top' | 'bottom' | 'none'" },
        defaultValue: { summary: "'top'" }
      }
    },
    tooltipFormatter: {
      description:
        'A function used to format the tooltip’s value. The range’s value is passed as the first and only argument. The function should return a string to display in the tooltip.',
      control: false,
      table: {
        category: 'Properties',
        type: { summary: '(value: number) => string' },
        defaultValue: { summary: undefined }
      }
    },
    form: {
      name: 'form',
      description:
        'Associates the range with a form by id. <br>`reflects: true`',
      control: { type: 'text' },
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    defaultValue: {
      description:
        'The default value of the form control. Primarily used for resetting the form control.',
      control: { type: 'number' },
      table: {
        category: 'Properties',
        type: { summary: 'number' },
        defaultValue: { summary: '0' }
      }
    },
    validity: {
      description: 'Gets the validity state object.',
      control: false,
      table: {
        category: 'Properties',
        type: { summary: 'ValidityState' },
        defaultValue: { summary: undefined }
      }
    },
    validationMessage: {
      description: 'Gets the validation message.',
      control: false,
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: undefined }
      }
    },
    updateComplete: {
      description:
        'A read-only promise that resolves when the component has finished updating.',
      control: false,
      table: {
        category: 'Properties',
        type: { summary: 'Promise<void>' },
        defaultValue: { summary: undefined }
      }
    },
    labelSlot: {
      name: 'label',
      description:
        'The range’s label. Alternatively, you can use the label attribute.',
      table: {
        category: 'Slots',
        type: { summary: 'slot' },
        defaultValue: { summary: undefined }
      },
      control: { type: 'text' }
    },
    helpTextSlot: {
      name: 'help-text',
      description:
        'Text that describes how to use the input. Alternatively, you can use the help-text attribute.',
      table: {
        category: 'Slots',
        type: { summary: 'slot' },
        defaultValue: { summary: undefined }
      },
      control: { type: 'text' }
    },

    ugBlur: {
      description: 'Emitted when the control loses focus.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      },
      action: 'ug-blur',
      // Events should not be controlled in the Storybook UI
      control: false
    },
    ugChange: {
      description:
        'Emitted when an alteration to the control’s value is committed by the user.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      },
      action: 'ug-change',
      // Events should not be controlled in the Storybook UI
      control: false
    },
    ugFocus: {
      description: 'Emitted when the control gains focus.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      },
      action: 'ug-focus',
      // Events should not be controlled in the Storybook UI
      control: false
    },
    ugInput: {
      description: 'Emitted when the control receives input.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      },
      action: 'ug-input',
      // Events should not be controlled in the Storybook UI
      control: false
    },
    ugInvalid: {
      description:
        'Emitted when the form control has been checked for validity and its constraints aren’t satisfied.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      },
      action: 'ug-invalid',
      // Events should not be controlled in the Storybook UI
      control: false
    },
    focus: {
      name: 'focus()',
      description: 'Sets focus on the range.',
      table: {
        category: 'Methods',
        type: { summary: '(options?: FocusOptions) => void' },
        defaultValue: { summary: undefined }
      },
      // Methods should not be controlled in the Storybook UI
      control: false
    },
    blur: {
      name: 'blur()',
      description: 'Removes focus from the range.',
      table: {
        category: 'Methods',
        type: { summary: '() => void' },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    stepUp: {
      name: 'stepUp()',
      description:
        'Increments the value of the range by the value of the step attribute.',
      table: {
        category: 'Methods',
        type: { summary: '() => void' },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    stepDown: {
      name: 'stepDown()',
      description:
        'Decrements the value of the range by the value of the step attribute.',
      table: {
        category: 'Methods',
        type: { summary: '() => void' },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    checkValidity: {
      name: 'checkValidity()',
      description:
        'Checks for validity but does not show a validation message. Returns true when valid and false when invalid.',
      table: {
        category: 'Methods',
        type: { summary: '() => boolean' },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    getForm: {
      name: 'getForm()',
      description: 'Gets the associated form, if one exists.',
      table: {
        category: 'Methods',
        type: { summary: '() => HTMLFormElement | null' },
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
    }
  }
};

export default meta;

type Story = StoryObj;

export const Range: Story = {
  args: {
    name: '',
    value: 0,
    label: '',
    helpText: '',
    disabled: false,
    min: 0,
    max: 100,
    step: 1,
    tooltip: 'top',
    form: '',
    defaultValue: 0,
    labelSlot: undefined,
    helpTextSlot: undefined
  },
  render: (args) => {
    return html`<ug-range
      name="${args.name}"
      value="${args.value}"
      label="${args.label}"
      help-text="${args.helpText}"
      ?disabled="${args.disabled}"
      min="${args.min}"
      max="${args.max}"
      step="${args.step}"
      tooltip="${args.tooltip}"
      >${args.labelSlot
        ? html`<div slot="label">${args.labelSlot}</div>`
        : ''}${args.helpTextSlot
        ? html`<div slot="help-text">${args.helpTextSlot}</div>`
        : ''}</ug-range
    >`;
  }
};

export const Label: Story = {
  ...Range,
  args: {
    ...Range.args,
    label: 'Volume'
  },
  parameters: {
    docs: {
      description: {
        story: `Use the <code>label</code> attribute to give the range an accessible label. For labels that contain HTML, use the <code>label</code> slot instead.`
      }
    },
    controls: { disable: true }
  }
};

export const HelpText: Story = {
  ...Range,
  args: {
    ...Range.args,
    label: 'Volume',
    helpText: 'Controls the volume of the current song.'
  },
  parameters: {
    docs: {
      description: {
        story: `Add descriptive help text to a range with the <code>help-text</code> attribute. For help texts that contain HTML, use the <code>help-text</code> slot instead.`
      }
    },
    controls: { disable: true }
  }
};

export const MinMaxAndStep: Story = {
  ...Range,
  name: 'Min, Max, and Step', // New name for the story
  args: {
    ...Range.args,
    min: '10',
    max: '20',
    step: '2'
  },
  parameters: {
    docs: {
      description: {
        story: `Use the <code>min</code> and <code>max</code> attributes to set the range’s minimum and maximum values, respectively. The <code>step</code> attribute determines the value’s interval when increasing and decreasing.`
      }
    },
    controls: { disable: true }
  }
};

export const Disabled: Story = {
  ...Range,
  args: {
    ...Range.args,
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: `Use the <code>disabled</code> attribute to disable a slider.`
      }
    },
    controls: { disable: true }
  }
};

export const TooltipPlacement: Story = {
  ...Range,
  args: {
    ...Range.args,
    tooltip: 'bottom'
  },
  parameters: {
    docs: {
      description: {
        story: `By default, the tooltip is shown on top. Set <code>tooltip</code> to bottom to show it below the slider.`
      }
    },
    controls: { disable: true }
  }
};

export const DisableTheTooltip: Story = {
  ...Range,
  args: {
    ...Range.args,
    tooltip: 'none'
  },
  parameters: {
    docs: {
      description: {
        story: `To disable the tooltip, set <code>tooltip</code> to none.`
      }
    },
    controls: { disable: true }
  }
};

export const CustomTrackColors: Story = {
  ...Range,
  args: {
    ...Range.args
  },
  parameters: {
    docs: {
      description: {
        story: `You can customize the active and inactive portions of the track using the <code>--track-color-active</code> and <code>--track-color-inactive</code> custom properties.`
      }
    },
    controls: { disable: true }
  },
  render: (args) => {
    return html`<ug-range
      style="
        --track-color-active: var(--ug-color-primary-600);
        --track-color-inactive: var(--ug-color-primary-100);
      "
      >${args.labelSlot
        ? html`<div slot="label">${args.labelSlot}</div>`
        : ''}${args.helpTextSlot
        ? html`<div slot="help-text">${args.helpTextSlot}</div>`
        : ''}</ug-range
    >`;
  }
};

export const CustomTrackOffset: Story = {
  ...Range,
  args: {
    ...Range.args,
    min: -100,
    max: 100
  },
  parameters: {
    docs: {
      description: {
        story: `You can customize the initial offset of the active track using the <code>--track-active-offset</code> custom property.`
      }
    },
    controls: { disable: true }
  },
  render: (args) => {
    return html`<ug-range
      min="${args.min}"
      max="${args.max}"
      style="
        --track-color-active: var(--ug-color-primary-600);
        --track-color-inactive: var(--ug-color-primary-100);
        --track-active-offset: 50%;
      "
      >${args.labelSlot
        ? html`<div slot="label">${args.labelSlot}</div>`
        : ''}${args.helpTextSlot
        ? html`<div slot="help-text">${args.helpTextSlot}</div>`
        : ''}</ug-range
    >`;
  }
};

export const CustomTooltipFormatter: Story = {
  ...Range,
  args: {
    ...Range.args,
    min: 0,
    max: 100,
    step: 1
  },
  parameters: {
    docs: {
      description: {
        story: `You can change the tooltip's content by setting the <code>tooltipFormatter</code> property to a function that accepts the range's value as an argument.`
      }
    },
    controls: { disable: true }
  },
  render: (args) => {
    return html`<ug-range
        class="range-with-custom-formatter"
        min="${args.min}"
        max="${args.max}"
        step="${args.step}"
        >${args.labelSlot
          ? html`<div slot="label">${args.labelSlot}</div>`
          : ''}${args.helpTextSlot
          ? html`<div slot="help-text">${args.helpTextSlot}</div>`
          : ''}</ug-range
      >

      <script>
        (() => {
          const range = document.querySelector('.range-with-custom-formatter');
          range.tooltipFormatter = (value) => \`Total - \${value}%\`;
        })();
      </script>`;
  }
};

export const RangeWithEvents: Story = {
  ...Range,
  args: {
    ...Range.args
  },
  tags: ['!autodocs'],
  parameters: {
    docs: {
      description: {
        story: `You can change the tooltip’s content by setting the <code>tooltipFormatter</code> property to a function that accepts the range’s value as an argument.`
      }
    },
    controls: { disable: true }
  },
  render: (args) => {
    return html` <form id="range-with-events-form">
      <ug-range
        class="range-with-events"
        name="${args.name}"
        value="${args.value}"
        label="${args.label}"
        help-text="${args.helpText}"
        ?disabled="${args.disabled}"
        min="${args.min}"
        max="${args.max}"
        step="${args.step}"
        tooltip="${args.tooltip}"
        @ug-blur=${action('ug-blur')}
        @ug-change=${action('ug-change')}
        @ug-focus=${action('ug-focus')}
        @ug-input=${action('ug-input')}
        @ug-invalid=${action('ug-invalid')}
        >${args.labelSlot
          ? html`<div slot="label">${args.labelSlot}</div>`
          : ''}${args.helpTextSlot
          ? html`<div slot="help-text">${args.helpTextSlot}</div>`
          : ''}</ug-range
      >
    </form>`;
  },

  play: async ({ canvasElement }) => {
    const rangeElement = canvasElement.querySelector('ug-range')!;
    await rangeElement.updateComplete;

    // Test focus() method
    rangeElement.focus();

    // Test blur() method
    rangeElement.blur();

    // Test stepUp() method
    rangeElement.stepUp();
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Test stepDown() method
    rangeElement.stepDown();

    // Test getForm()
    action('getForm')(rangeElement.getForm()?.id);

    // Test checkValidity() with valid input
    rangeElement.value = 50;
    action('checkValidity - valid input')(rangeElement.checkValidity());

    // Test checkValidity() with invalid input
    rangeElement.value = -10;
    action('checkValidity - invalid input')(rangeElement.checkValidity());
    rangeElement.setCustomValidity('Custom invalid state');
    rangeElement.reportValidity();
    await new Promise((resolve) => setTimeout(resolve, 3000));
    // Reset custom validity
    rangeElement.setCustomValidity('');

    // Find the actual input[type="range"] in the shadow DOM
    const input = rangeElement.shadowRoot?.querySelector(
      'input[type="range"]'
    ) as HTMLInputElement;
    if (!input) {
      console.error('Could not find range input element');
      return;
    }

    // Focus the actual range input
    input.focus();

    // TODO: This is not working
    await userEvent.keyboard('{ArrowRight}');
    // Let's try directly setting the value
    const currentValue = Number(input.value);
    input.value = String(currentValue + 1);
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
  }
};
