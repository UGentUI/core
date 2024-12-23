import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from '@storybook/addon-actions';
import { userEvent, within } from '@storybook/test';
import '/lib/components/select';
import '/lib/components/option';
import '/lib/components/tag';
import '/lib/components/icon';
import '/lib/components/button';

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
    size: {
      name: 'Size',
      description: "The select's size.",
      control: 'select',
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
      table: {
        category: 'Properties',
        type: { summary: "'small' | 'medium' | 'large'" },
        defaultValue: { summary: "'medium'" }
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
    'help-text': {
      description:
        'Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.',
      table: {
        category: 'Slots',
        type: { summary: 'HTML content' }
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

function removeDefaultAttributes(code: string): string {
  return code.replace(
    /\s*(name=""|size="medium"|placeholder=""|label=""|help-text=""|placeholder="")/g,
    ''
  );
}

export const Select: Story = {
  args: {
    name: '',
    size: 'medium',
    filled: false,
    placeholder: '',
    multiple: false,
    label: '',
    ['help-text']: '',
    clearable: false,
    disabled: false,
    required: false,
    hoist: false
  },
  parameters: {
    docs: {
      source: {
        transform: (code: string) => removeDefaultAttributes(code),
        },
        format: true
      }
    }
  },
  render: (args) => {
    return html` <ug-select
      name=${args.name !== '' ? args.name : undefined}
      size=${ifDefined(args.size)}
      value=${ifDefined(args.value)}
      ?filled=${args.filled}
      placeholder=${ifDefined(args.placeholder)}
      ?multiple=${args.multiple}
      label=${ifDefined(args.label)}
      help-text=${args['help-text']}
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
        story: `Use the <code>label</code> attribute to give the select an accessible label. For labels that contain HTML, use the label slot instead.`
      },
      source: {
        transform: (code: string) => removeDefaultAttributes(code),
        format: true
      }
    }
  }
};

export const HelpText: Story = {
  ...Select,
  args: {
    ...Select.args,
    label: 'Experience',
    'help-text': 'Please tell us your skill level.',
    hoist: true
  },
  parameters: {
    docs: {
      description: {
        story: `Add descriptive help text to a select with the <code>help-text</code> attribute. For help texts that contain HTML, use the <code>help-text</code> slot instead.`
      },
      source: {
        transform: (code: string) => removeDefaultAttributes(code),
        format: true
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
        story: `Use the <code>placeholder</code> attribute to add a placeholder.`
      },
      source: {
        transform: (code: string) => removeDefaultAttributes(code),
        format: true
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
        story: `Use the <code>clearable</code> attribute to make the control clearable. The clear button only appears when an option is selected.`
      },
      source: {
        transform: (code: string) => removeDefaultAttributes(code),
        format: true
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
    value: 'option-1 option-2 option-3',
    hoist: true
  },
  parameters: {
    docs: {
      description: {
        story: `To allow multiple options to be selected, use the <code>multiple</code> attribute. It’s a good practice to use <code>clearable</code> when this option is enabled. To set multiple values at once, set <code>value</code> to a space-delimited list of values.`
      },
      source: {
        transform: (code: string) => removeDefaultAttributes(code),
        format: true
      }
    }
  }
};

export const Disabled: Story = {
  ...Select,
  args: {
    ...Select.args,
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: `Use the <code>disabled</code> attribute to disable a select.`
      },
      source: {
        transform: (code: string) => removeDefaultAttributes(code),
        format: true
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
        story: `Use <code><ug-divider></code> to group listbox items visually. You can also use <code><small></code> to provide labels, but they won’t be announced by most assistive devices.`
      },
      source: { format: true }
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
  args: {
    ...Select.args,
    hoist: true
  },
  parameters: {
    docs: {
      description: {
        story: `Use the <code>size</code> attribute to change a select’s size. Note that size does not apply to listbox options.`
      },
      source: {
        transform: (code: string) => removeDefaultAttributes(code),
        format: true
      }
    }
  },
  render: (args, context) => {
    if (!Select.render) {
      throw new Error('Select.render is not defined.');
    }

    return html`
      <div style="margin-bottom: 1rem;">
        ${Select.render({ ...args, size: 'small', label: 'Small' }, context)}
      </div>
      <div style="margin-bottom: 1rem;">
        ${Select.render({ ...args, size: 'medium', label: 'Medium' }, context)}
      </div>
      <div style="margin-bottom: 1rem;">
        ${Select.render({ ...args, size: 'large', label: 'Large' }, context)}
      </div>
    `;
  }
};

//TODO: this story doesn't work
export const Placement: Story = {
  ...Select,
  parameters: {
    docs: {
      description: {
        story: `The preferred placement of the select’s listbox can be set with the <code>placement</code> attribute. Note that the actual position may vary to ensure the panel remains in the viewport. Valid placements are <code>top</code> and <code>bottom</code>.`
      },
      source: {
        transform: (code: string) => removeDefaultAttributes(code),
        format: true
      }
    }
  },
  render: (args, context) => {
    if (!Select.render) {
      throw new Error('Select.render is not defined.');
    }

    return html`
      ${Select.render(
        {
          ...args,
          placement: 'top',
          label: 'Placement set to top',
          open: true
        },
        context
      )}
      ${Select.render(
        {
          ...args,
          placement: 'bottom',
          label: 'Placement set to bottom',
          open: true
        },
        context
      )}
    `;
  }
};

export const CustomTags: Story = {
  ...Select,
  parameters: {
    docs: {
      description: {
        story: `When multiple options can be selected, you can provide custom tags by passing a function to the getTag property. Your function can return a string of HTML, a [Lit Template](https://lit.dev/docs/templates/overview/), or an [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement). The <code>getTag()</code> function will be called for each option. The first argument is an <code>\<ug-option\></code> element and the second argument is the tag’s index (its position in the tag list).

Remember that custom tags are rendered in a shadow root. To style them, you can use the style attribute in your template or you can add your own [parts](https://shoelace.style/getting-started/customizing/#css-parts) and target them with the [::part()](https://developer.mozilla.org/en-US/docs/Web/CSS/::part) selector.`
      },
      source: { format: true }
    }
  },
  render: () => {
    return html`
      <ug-select
        placeholder="Select one"
        value="email phone"
        multiple
        clearable
        class="custom-tag"
        hoist
      >
        <ug-option value="email">
          <ug-icon slot="prefix" name="envelope"></ug-icon>
          Email
        </ug-option>
        <ug-option value="phone">
          <ug-icon slot="prefix" name="telephone"></ug-icon>
          Phone
        </ug-option>
        <ug-option value="chat">
          <ug-icon slot="prefix" name="chat-dots"></ug-icon>
          Chat
        </ug-option>
      </ug-select>

      <script type="module">
        const select = document.querySelector('.custom-tag');

        select.getTag = (option, index) => {
          // Use the same icon used in the <ug-option>
          const name = option.querySelector('ug-icon[slot="prefix"]').name;

          // You can return a string, a Lit Template, or an HTMLElement here
          return litHtml\`
            <ug-tag removable>
              <ug-icon name="\${name}" style="padding-inline-end: .5rem;"></ug-icon>
              \${option.getTextLabel()}
            </ug-tag>
          \`;
        };
      </script>

      <style>
        .docs-story :not(.sb-story *) {
          transform: none;
        }
        .story--components-select--custom-tags-inner :not(.sb-story *) {
          transform: none;
        }
      </style>
    `;
  }
};

export const LazyLoadingOptions: Story = {
  ...Select,
  parameters: {
    docs: {
      description: {
        story: `When multiple options can be selected, you can provide custom tags by passing a function to the getTag property. Your function can return a string of HTML, a Lit Template, or an HTMLElement. The getTag() function will be called for each option. The first argument is an <ug-option> element and the second argument is the tag’s index (its position in the tag list). Remember that custom tags are rendered in a shadow root. To style them, you can use the style attribute in your template or you can add your own parts and target them with the ::part() selector. Be sure you trust the content you are outputting! Passing unsanitized user input to <code>getTag()</code> can result in XSS vulnerabilities.`
      },
      source: { format: true }
    }
  },
  render: () => {
    return html`<form id="lazy-options-example">
        <div>
          <ug-select
            name="select-1"
            value="foo"
            label="Single select (with existing options)"
            hoist
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
          <ug-button type="submit" variant="brand">Show FormData</ug-button>
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
      </script> `;
  }
};

export const SelectWithEvents: Story = {
  ...Select,
  args: {
    ...Select.args,
    hoist: true
  },
  parameters: {
    docs: {
      description: {
        story: `An example of a story with select with interactions.`
      },
      source: { format: true },
      autodocs: false
    }
  },
  play: async ({ canvasElement }) => {
    //Select <ug-select>
    let select = canvasElement.querySelector('ug-select')!;
    //Doesn't work?
    await userEvent.click(select, { delay: 500 });
    //Open the selector
    await select.show();

    // Select an option by its value
    let option2 = canvasElement.querySelector('ug-option[value="option-2"]');
    if (option2) {
      await userEvent.hover(option2, { delay: 500 });
      await userEvent.click(option2, { delay: 500 });
    }
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
      help-text=${args['help-text']}
      ?clearable=${args.clearable}
      ?disabled=${args.disabled}
      ?required=${args.required}
      ?hoist=${args.hoist}
      @ug-change="${action('ug-change')}"
      @ug-input="${action('ug-input')}"
      @ug-focus="${action('ug-focus')}"
      @ug-blur="${action('ug-blur')}"
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
    hoist: true,
    value: 'option-1',
    multiple: 'true'
  },
  parameters: {
    docs: {
      description: {
        story: `An example of a story with select with interactions.`
      },
      source: { format: true },
      autodocs: false
    }
  },
  play: async ({ canvasElement }) => {
    //Select <ug-select>
    let select = canvasElement.querySelector('ug-select')!;
    //Doesn't work?
    await userEvent.click(select, { delay: 500 });
    //Open the selector
    await select.show();

    // Select an option by its value
    let option2 = canvasElement.querySelector('ug-option[value="option-2"]');
    if (option2) {
      await userEvent.hover(option2, { delay: 500 });
      await userEvent.click(option2, { delay: 500 });
    }

    //await new Promise((resolve) => setTimeout(resolve, 100));

    //setTimeout(100);
    //Gebeurt niet? Waarschijnlijk racecondities?
    await select.show();

    // Select an option by its value
    let option3 = canvasElement.querySelector('ug-option[value="option-3"]');
    if (option3) {
      await userEvent.hover(option3, { delay: 500 });
      await userEvent.click(option3, { delay: 500 });
    }

    if (select && select.shadowRoot) {
      const tagElement = select.shadowRoot.querySelector('ug-tag');
      if (tagElement && tagElement.shadowRoot) {
        const closeButton = tagElement.shadowRoot.querySelector(
          'ug-icon-button'
          //'button[part="remove-button"]'
        );
        if (closeButton) {
          // You can now interact with the closeButton element
          await userEvent.hover(closeButton, { delay: 50 });
          await userEvent.click(closeButton, { delay: 500 });
        } else {
          console.error('Close button not found within ug-tag');
        }
      } else {
        console.error(
          'ug-tag with value "option-2" not found or does not have a shadowRoot'
        );
      }
    }
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
      help-text=${args['help-text']}
      ?clearable=${args.clearable}
      ?disabled=${args.disabled}
      ?required=${args.required}
      ?hoist=${args.hoist}
      @ug-change="${action('ug-change')}"
      @ug-input="${action('ug-input')}"
      @ug-focus="${action('ug-focus')}"
      @ug-blur="${action('ug-blur')}"
    >
      <ug-option value="option-1">Option 1</ug-option>
      <ug-option value="option-2">Option 2</ug-option>
      <ug-option value="option-3">Option 3</ug-option>
      <ug-option value="option-4">Option 4</ug-option>
      <ug-option value="option-5">Option 5</ug-option>
      <ug-option value="option-6">Option 6</ug-option>
    </ug-select>`
};
