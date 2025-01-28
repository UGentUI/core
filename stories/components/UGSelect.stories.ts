import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from '@storybook/addon-actions';
import { userEvent, expect } from '@storybook/test';
import '/lib/components/select';
import '/lib/components/option';
import '/lib/components/tag';
import '/lib/components/icon';
import '/lib/components/button';
import '/lib/components/divider';

function removeDefaultAttributes(code: string): string {
  return code
    .replace(
      /\s*(name=""|size="medium"|placeholder=""|label=""|help-text=""|placeholder="")/g,
      ''
    )
    .replace(/\s* hoist=""/g, ' hoist')
    .replace(/\s* multiple=""/g, ' multiple')
    .replace(/\s* clearable=""/g, ' clearable')
    .replace(/\s* disabled=""/g, ' disabled')
    .replace(/\s* required=""/g, ' required');
}

const meta: Meta = {
  title: 'Components/Select',
  component: 'ug-select',
  parameters: {
    docs: {
      subtitle:
        'Selects allow you to choose items from a menu of predefined options.',
      source: {
        transform: (code: string) => removeDefaultAttributes(code),
        format: true
      }
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
    // Attributes (can ONLY be set via HTML)
    name: {
      name: 'name',
      description:
        'The name of the select, submitted as a name/value pair with form data.',
      type: { name: 'string' },
      defaultValue: '',
      table: {
        category: 'Attributes',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    helpText: {
      name: 'help-text',
      description:
        "The select's help text. If you need to display HTML, use the help-text slot instead.",
      type: { name: 'string' },
      defaultValue: '',
      table: {
        category: 'Attributes',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    // Properties (can be set via both HTML and JavaScript)
    value: {
      name: 'value',
      description: `The current value of the select, submitted as a name/value pair with form data. 
                    When multiple is enabled, the value attribute will be a space-delimited list 
                    of values based on the options selected, and the value property will be an array. 
                    For this reason, values must not contain spaces.`,
      control: 'select',
      options: [
        'option-1',
        'option-2',
        'option-3',
        'option-4',
        'option-5',
        'option-6'
      ],
      table: {
        category: 'Properties',
        type: { summary: 'string | string[]' },
        defaultValue: { summary: "''" }
      }
    },
    size: {
      name: 'size',
      description: "The select's size.",
      control: 'select',
      options: ['small', 'medium', 'large'],
      table: {
        category: 'Properties',
        type: {
          summary: '"small" | "medium" | "large"',
          detail:
            'This is a reflected property that syncs with the size attribute.'
        },
        defaultValue: { summary: "'medium'" }
      }
    },
    placeholder: {
      name: 'placeholder',
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
      name: 'multiple',
      description: 'Allows more than one option to be selected.',
      type: { name: 'boolean' },
      table: {
        category: 'Properties',
        type: {
          summary: 'boolean',
          detail:
            'This is a reflected property that syncs with the multiple attribute.'
        },
        defaultValue: { summary: 'false' }
      }
    },
    label: {
      name: 'label',
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
    clearable: {
      name: 'clearable',
      description: 'Adds a clear button when the select is not empty.',
      type: { name: 'boolean' },
      defaultValue: false,
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    disabled: {
      name: 'disabled',
      description: 'Disables the select control.',
      type: { name: 'boolean' },
      defaultValue: false,
      table: {
        category: 'Properties',
        type: {
          summary: 'boolean',
          detail:
            'This is a reflected property that syncs with the disabled attribute.'
        },
        defaultValue: { summary: 'false' }
      }
    },
    required: {
      name: 'required',
      description: "The select's required attribute.",
      type: { name: 'boolean' },
      defaultValue: false,
      table: {
        category: 'Properties',
        type: {
          summary: 'boolean',
          detail:
            'This is a reflected property that syncs with the required attribute.'
        },
        defaultValue: { summary: 'false' }
      }
    },
    hoist: {
      name: 'hoist',
      description:
        'Enable this option to prevent the listbox from being clipped when the component is placed inside a container with overflow: auto|scroll.',
      type: { name: 'boolean' },
      defaultValue: false,
      table: {
        category: 'Properties',
        type: {
          summary: 'boolean'
        },
        defaultValue: { summary: 'false' }
      }
    },

    // Slots
    defaultSlot: {
      name: 'default',
      control: false,
      description:
        'The listbox options. Must be `<ug-option>` elements. You can use `<ug-divider>` to group items visually.',

      table: {
        category: 'Slots',
        type: { summary: 'HTML' },
        defaultValue: { summary: undefined }
      }
    },
    labelSlot: {
      name: 'label',
      control: false,
      description:
        'The input’s label. Alternatively, you can use the `label` attribute.',
      table: {
        category: 'Slots',
        type: { summary: 'HTML' },
        defaultValue: { summary: undefined }
      }
    },
    'help-text': {
      control: false,
      description:
        'Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.',
      table: {
        category: 'Slots',
        type: { summary: 'HTML' },
        defaultValue: { summary: undefined }
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

    // Methods
    checkValidity: {
      name: 'checkValidity()',
      description:
        'Checks for validity but does not show a validation message. Returns true when valid and false when invalid.',
      table: {
        category: 'Methods',
        type: { summary: undefined },
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
        type: { summary: undefined },
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
        type: { summary: undefined },
        defaultValue: { summary: undefined }
      },
      control: false
    }
  }
};

export default meta;

type Story = StoryObj;

export const Select: Story = {
  args: {
    name: '',
    size: 'medium',
    placeholder: '',
    multiple: false,
    label: '',
    helpText: '',
    clearable: false,
    disabled: false,
    required: false,
    hoist: true
  },
  parameters: {
    docs: {
      description: {
        story: 'A default Select with hoisting enabled for demo purposes.'
      }
    }
  },
  render: (args) => {
    return html`<ug-select
      name=${args.name !== '' ? args.name : undefined}
      size=${ifDefined(args.size)}
      value=${ifDefined(args.value)}
      ?filled=${args.filled}
      placeholder=${ifDefined(args.placeholder)}
      ?multiple=${args.multiple}
      label=${ifDefined(args.label)}
      help-text=${ifDefined(args.helpText)}
      ?clearable=${args.clearable}
      ?disabled=${args.disabled}
      ?required=${args.required}
      ?hoist=${args.hoist}
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

export const Labels: Story = {
  ...Select,
  args: {
    ...Select.args,
    label: 'Select one',
    hoist: true
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use the `label` attribute to give the select an accessible label. For labels that contain HTML, use the label slot instead.'
      }
    }
  }
};

export const HelpText: Story = {
  ...Select,
  args: {
    ...Select.args,
    label: 'Experience',
    helpText: 'Please tell us your skill level.',
    hoist: true
  },
  parameters: {
    docs: {
      description: {
        story:
          'Add descriptive help text to a select with the `help-text` attribute. For help texts that contain HTML, use the help-text slot instead.'
      }
    }
  }
};

export const Placeholders: Story = {
  ...Select,
  args: {
    ...Select.args,
    placeholder: 'Select one',
    hoist: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the `placeholder` attribute to add a placeholder.'
      }
    }
  }
};

export const Clearable: Story = {
  ...Select,
  args: {
    ...Select.args,
    clearable: true,
    hoist: true
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use the `clearable` attribute to make the control clearable. The clear button only appears when an option is selected.'
      }
    }
  }
};

export const Disabled: Story = {
  ...Select,
  args: {
    ...Select.args,
    disabled: true,
    value: 'option-1 option-2 option-3'
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the `disabled` attribute to disable a select.'
      }
    }
  }
};

export const Multiple: Story = {
  ...Select,
  args: {
    ...Select.args,
    clearable: true,
    multiple: true,
    hoist: true,
    label: 'Select a Few'
  },
  parameters: {
    docs: {
      description: {
        story:
          'To allow multiple options to be selected, use the `multiple` attribute. It’s a good practice to use `clearable` when this option is enabled. To set multiple values at once, set `value` to a space-delimited list of values.'
      }
    }
  }
};

export const SettingInitialValues: Story = {
  ...Select,
  args: {
    ...Select.args,
    clearable: true,
    multiple: true,
    value: 'option-1 option-2 option-3',
    hoist: true
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use the `value` attribute to set the initial selection. When using `multiple`, the `value` *attribute* uses space-delimited values to select more than one option.'
      }
    }
  }
};

export const GroupingOptions: Story = {
  ...Select,
  args: {
    ...Select.args
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use `<ug-divider >` to group listbox items visually. You can also use `<small>` to provide labels, but they won’t be announced by most assistive devices.'
      }
    }
  },
  render: (args) => {
    return html`<ug-select
      name=${ifDefined(args.name)}
      value=${ifDefined(args.value)}
      ?filled=${args.filled}
      placeholder=${ifDefined(args.placeholder)}
      ?multiple=${args.multiple}
      label=${ifDefined(args.label)}
      helpText=${ifDefined(args.helpText)}
      ?clearable=${args.clearable}
      ?disabled=${args.disabled}
      ?required=${args.required}
      ?hoist=${args.hoist}
    >
      <small>Section 1</small>
      <ug-option value="option-1">Option 1</ug-option>
      <ug-option value="option-2">Option 2</ug-option>
      <ug-option value="option-3">Option 3</ug-option>
      <ug-divider></ug-divider>
      <small>Section 2</small>
      <ug-option value="option-4">Option 4</ug-option>
      <ug-option value="option-5">Option 5</ug-option>
      <ug-option value="option-6">Option 6</ug-option>
    </ug-select>`;
  }
};

export const Sizes: Story = {
  ...Select,
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Use the`size` attribute to change a select’s size. Note that size does not apply to listbox options.'
      },
      source: {
        format: true
      }
    }
  },
  render: () => {
    return html`
      <ug-select placeholder="Small" size="small">
        <ug-option value="option-1">Option 1</ug-option>
        <ug-option value="option-2">Option 2</ug-option>
        <ug-option value="option-3">Option 3</ug-option>
      </ug-select>

      <br />

      <ug-select placeholder="Medium" size="medium">
        <ug-option value="option-1">Option 1</ug-option>
        <ug-option value="option-2">Option 2</ug-option>
        <ug-option value="option-3">Option 3</ug-option>
      </ug-select>

      <br />

      <ug-select placeholder="Large" size="large">
        <ug-option value="option-1">Option 1</ug-option>
        <ug-option value="option-2">Option 2</ug-option>
        <ug-option value="option-3">Option 3</ug-option>
      </ug-select>
    `;
  }
};

export const Placement: Story = {
  ...Select,
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'The preferred placement of the select’s listbox can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport. Valid placements are `top` and `bottom`.'
      },
      source: {
        format: true
      }
    }
  },
  render: () => {
    return html`
      <ug-select placeholder="Top" placement="top" hoist>
        <ug-option value="option-1">Option 1</ug-option>
        <ug-option value="option-2">Option 2</ug-option>
        <ug-option value="option-3">Option 3</ug-option>
      </ug-select>
    `;
  }
};

export const LazyLoadingOptions: Story = {
  ...Select,
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
Lazy loading options is very hard to get right. \`<ug-select>\` largely follows how a native \`<select>\` works.

Here are the following conditions:

- If a \`<ug-select>\` is created without any options, but is given a value attribute, its value will be \`""\`, and then when options are added, if any of the options have a value equal to the \`<ug-select>\` value, the value of the \`<ug-select>\` will equal that of the option.

EX: \`<ug-select value="foo">\` will have a value of \`""\` until \`<ug-option value="foo">Foo</ug-option>\` connects, at which point its value will become \`"foo"\` when submitting.

- If a \`<ug-select multiple>\` with an initial value has multiple values, but only some of the options are present, it will only respect the options that are present, and if a selected option is loaded in later, *AND* the value of the select has not changed via user interaction or direct property assignment, it will add the selected option to the form value and to the .value of the select.

⚠️ **Security Warning**: When dynamically adding options based on user input or external data, always sanitize the input to prevent XSS attacks. Never directly insert unsanitized content into option values or labels.
`
      }
    }
  },
  render: () => {
    return html`
      <form id="lazy-options-example">
        <div>
          <ug-select
            name="select-1"
            value="foo"
            label="Single select (with existing options)"
          >
            <ug-option value="bar">Bar</ug-option>
            <ug-option value="baz">Baz</ug-option>
          </ug-select>
          <br />
          <ug-button type="button">Add "foo" option</ug-button>
        </div>

        <br />

        <div>
          <ug-select
            name="select-2"
            value="foo"
            label="Single select (with no existing options)"
          >
          </ug-select>
          <br />
          <ug-button type="button">Add "foo" option</ug-button>
        </div>

        <br />

        <div>
          <ug-select
            name="select-3"
            value="foo bar baz"
            multiple
            label="Multiple Select (with existing options)"
          >
            <ug-option value="bar">Bar</ug-option>
            <ug-option value="baz">Baz</ug-option>
          </ug-select>
          <br />
          <ug-button type="button">Add "foo" option</ug-button>
        </div>

        <br />

        <div>
          <ug-select
            name="select-4"
            value="foo"
            multiple
            label="Multiple Select (with no existing options)"
          >
          </ug-select>
          <br />
          <ug-button type="button">Add "foo" option</ug-button>
        </div>

        <br /><br />

        <div style="display: flex; gap: 16px;">
          <ug-button type="reset">Reset</ug-button>
          <ug-button type="submit" variant="primary">Show FormData</ug-button>
        </div>

        <br />

        <pre hidden><code id="lazy-options-example-form-data"></code></pre>

        <br />
      </form>

      <script type="module">
        function addFooOption(e) {
          const addFooButton = e.target.closest("ug-button[type='button']");
          if (!addFooButton) {
            return;
          }
          const select = addFooButton.parentElement.querySelector('ug-select');
          if (select.querySelector("ug-option[value='foo']")) {
            // Foo already exists. no-op.
            return;
          }
          const option = document.createElement('ug-option');
          option.setAttribute('value', 'foo');
          option.innerText = 'Foo';
          select.append(option);
        }
        function handleLazySubmit(event) {
          event.preventDefault();
          const formData = new FormData(event.target);
          const codeElement = document.querySelector(
            '#lazy-options-example-form-data'
          );
          const obj = {};
          for (const key of formData.keys()) {
            const val =
              formData.getAll(key).length > 1
                ? formData.getAll(key)
                : formData.get(key);
            obj[key] = val;
          }
          codeElement.textContent = JSON.stringify(obj, null, 2);
          const preElement = codeElement.parentElement;
          preElement.removeAttribute('hidden');
        }
        const container = document.querySelector('#lazy-options-example');
        container.addEventListener('click', addFooOption);
        container.addEventListener('submit', handleLazySubmit);
      </script>
    `;
  }
};

export const SelectWithEvents: Story = {
  ...Select,
  args: {
    ...Select.args
  },
  tags: ['!autodocs'],
  parameters: {
    controls: { disable: true }
  },
  play: async ({ canvasElement }) => {
    const select = canvasElement.querySelector('ug-select');

    // Wait for element to be ready
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Find and click the trigger element within the shadow DOM
    const trigger = select?.shadowRoot?.querySelector('.select__combobox');
    if (trigger) {
      await userEvent.click(trigger, { delay: 500 });
    } else {
      console.error('Could not find select trigger in shadow DOM');
    }

    // Add a small delay to allow animation to complete
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Verify the select is open
    await expect(select).toHaveAttribute('open');

    // Find and click option-2
    const option = canvasElement.querySelector('ug-option[value="option-2"]');
    if (option) {
      await userEvent.click(option, { delay: 500 });
    } else {
      console.error('Could not find option element');
    }

    // Add a small delay to allow selection to complete
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Verify the select has the correct value
    await expect(select).toHaveProperty('value', 'option-2');
  },
  render: (args) =>
    html` <ug-select
      name=${args.name !== '' ? args.name : undefined}
      size=${ifDefined(args.size)}
      value=${ifDefined(args.value)}
      ?filled=${args.filled}
      placeholder=${ifDefined(args.placeholder)}
      ?multiple=${args.multiple}
      label=${ifDefined(args.label)}
      help-text=${ifDefined(args.helpText)}
      ?clearable=${args.clearable}
      ?disabled=${args.disabled}
      ?required=${args.required}
      ?hoist=${args.hoist}
      @ug-change="${action('ug-change')}"
      @ug-clear="${action('ug-clear')}"
      @ug-input="${action('ug-input')}"
      @ug-focus="${action('ug-focus')}"
      @ug-blur="${action('ug-blur')}"
      @ug-show="${action('ug-show')}"
      @ug-after-show="${action('ug-after-show')}"
      @ug-hide="${action('ug-hide')}"
      @ug-after-hide="${action('ug-after-hide')}"
      @ug-invalid="${action('ug-invalid')}"
    >
      <ug-option value="option-1">Option 1</ug-option>
      <ug-option value="option-2">Option 2</ug-option>
      <ug-option value="option-3">Option 3</ug-option>
      <ug-option value="option-4">Option 4</ug-option>
      <ug-option value="option-5">Option 5</ug-option>
      <ug-option value="option-6">Option 6</ug-option>
    </ug-select>`
};

export const SelectWithEventsAndMultiselect: Story = {
  ...Select,
  args: {
    ...Select.args,
    value: 'option-1',
    multiple: true
  },
  tags: ['!autodocs'],
  parameters: {
    controls: { disable: true }
  },
  play: async ({ canvasElement }) => {
    const select = canvasElement.querySelector('ug-select');

    // Wait for element to be ready
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Find and click the trigger element within the shadow DOM
    const trigger = select?.shadowRoot?.querySelector('.select__combobox');
    if (trigger) {
      await userEvent.click(trigger, { delay: 500 });
    } else {
      console.error('Could not find select trigger in shadow DOM');
    }

    // Add a small delay to allow animation to complete
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Verify the select is open
    await expect(select).toHaveAttribute('open');

    // Find and click option-2
    const option = canvasElement.querySelector('ug-option[value="option-2"]');
    if (option) {
      await userEvent.hover(option, { delay: 500 });
      await userEvent.click(option, { delay: 500 });
    } else {
      console.error('Could not find option element');
    }

    // Add a small delay to allow selection to complete
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Verify the select has the correct value
    await expect(select).toHaveProperty('value', ['option-1', 'option-2']);

    // Click the trigger again to close the select
    if (trigger) {
      await userEvent.click(trigger, { delay: 500 });
    }

    // Add a small delay to allow animation to complete
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Verify the select is closed
    await expect(select).not.toHaveAttribute('open');
  },
  render: (args) =>
    html` <ug-select
      name=${args.name !== '' ? args.name : undefined}
      size=${ifDefined(args.size)}
      value=${ifDefined(args.value)}
      ?filled=${args.filled}
      placeholder=${ifDefined(args.placeholder)}
      ?multiple=${args.multiple}
      label=${ifDefined(args.label)}
      help-text=${ifDefined(args.helpText)}
      ?clearable=${args.clearable}
      ?disabled=${args.disabled}
      ?required=${args.required}
      ?hoist=${args.hoist}
      @ug-change="${action('ug-change')}"
      @ug-clear="${action('ug-clear')}"
      @ug-input="${action('ug-input')}"
      @ug-focus="${action('ug-focus')}"
      @ug-blur="${action('ug-blur')}"
      @ug-show="${action('ug-show')}"
      @ug-after-show="${action('ug-after-show')}"
      @ug-hide="${action('ug-hide')}"
      @ug-after-hide="${action('ug-after-hide')}"
      @ug-invalid="${action('ug-invalid')}"
    >
      <ug-option value="option-1">Option 1</ug-option>
      <ug-option value="option-2">Option 2</ug-option>
      <ug-option value="option-3">Option 3</ug-option>
      <ug-option value="option-4">Option 4</ug-option>
      <ug-option value="option-5">Option 5</ug-option>
      <ug-option value="option-6">Option 6</ug-option>
    </ug-select>`
};
