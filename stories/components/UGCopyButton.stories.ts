import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/copy-button';
import '/lib/components/icon';
import '/lib/components/popup';
import '/lib/components/tooltip';
import '/lib/components/input';
import { action } from '@storybook/addon-actions';
import { userEvent } from '@storybook/test';

const meta: Meta = {
  title: 'Components/Copy Button',
  component: 'copy-button',
  parameters: {
    docs: {
      subtitle:
        'Copies text data to the clipboard when the user clicks the trigger.',
      source: {
        format: true,
        transform: (code: string) => {
          return (
            code
              .replace(
                /\s(value=""|from=""|copy-label=""|success-label=""|error-label=""|feedback-duration="1000"|tooltip-placement="top")/g,
                ''
              )
              .replace(/\s* disabled=""/g, ' disabled')
              .replace(/\s* hoist=""/g, ' hoist')
              // Remove empty lines (two or more consecutive newlines)
              .replace(/\n\s*\n/g, '\n')
          );
        }
      },
      importSection: true, // Enables the import section
      dependencies: ['icon', 'popup', 'tooltip']
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
    value: {
      description: 'The text value to copy.',
      control: 'text',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    from: {
      description:
        'An id that references an element in the same document from which data will be copied. If both this and <code>value</code> are present, this value will take precedence. By default, the target element\'s <code>textContent</code> will be copied. To copy an attribute, append the attribute name wrapped in square brackets, e.g. <code>from="el[value]"</code>. To copy a property, append a dot and the property name, e.g. <code>from="el.value"</code>.',
      control: 'text',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    disabled: {
      description: 'Disables the copy button.<br>`reflects: true`',
      control: 'boolean',
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    copyLabel: {
      name: 'copy-label',
      description: 'A custom label to show in the tooltip.',
      control: 'text',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    successLabel: {
      name: 'success-label',
      description: 'A custom label to show in the tooltip after copying.',
      control: 'text',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    errorLabel: {
      name: 'error-label',
      description:
        'A custom label to show in the tooltip when a copy error occurs.',
      control: 'text',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    feedbackDuration: {
      name: 'feedback-duration',
      description:
        'The length of time to show feedback before restoring the default trigger.',
      control: { type: 'number', min: 0 },
      table: {
        category: 'Properties',
        type: { summary: 'number' },
        defaultValue: { summary: '1000' }
      }
    },
    tooltipPlacement: {
      name: 'tooltip-placement',
      description: 'The preferred placement of the tooltip.',
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      table: {
        category: 'Properties',
        type: { summary: "'top' | 'right' | 'bottom' | 'left'" },
        defaultValue: { summary: "'top'" }
      }
    },
    hoist: {
      description:
        'Enable this option to prevent the tooltip from being clipped when the component is placed inside a container with <code>overflow: auto|hidden|scroll</code>. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.',
      control: 'boolean',
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
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
    copyIconSlot: {
      name: 'copy-icon',
      description:
        'The icon to show in the default copy state. Works best with <code><ug-icon></code>.',
      control: 'check',
      options: ['Icon'],
      table: {
        category: 'Slots',
        type: { summary: 'slot' },
        defaultValue: { summary: undefined }
      }
    },
    successIconSlot: {
      name: 'success-icon',
      description:
        'The icon to show when the content is copied. Works best with <code><ug-icon></code>.',
      control: 'check',
      options: ['Icon'],
      table: {
        category: 'Slots',
        type: { summary: 'slot' },
        defaultValue: { summary: undefined }
      }
    },
    errorIconSlot: {
      name: 'error-icon',
      description:
        'The icon to show when a copy error occurs. Works best with <code><ug-icon></code>.',
      control: 'check',
      options: ['Icon'],
      table: {
        category: 'Slots',
        type: { summary: 'slot' },
        defaultValue: { summary: undefined }
      }
    },
    ugCopy: {
      control: false,
      name: 'ug-copy',
      action: 'ug-copy',
      description:
        'Emitted when the data has been copied. The event detail contains the copied value.',
      table: {
        category: 'Events',
        type: {
          summary: 'CustomEvent<{ value: string }>'
        },
        defaultValue: { summary: undefined }
      }
    },
    ugError: {
      control: false,
      name: 'ug-error',
      action: 'ug-error',
      description:
        'Emitted when the data could not be copied. The event detail contains the error object.',
      table: {
        category: 'Events',
        type: {
          summary: 'CustomEvent<{ error: Error }>'
        },
        defaultValue: { summary: undefined }
      }
    }
  }
};

export default meta;

type Story = StoryObj;

export const CopyButton: Story = {
  args: {
    value: 'Copy this text!',
    from: '',
    disabled: false,
    copyLabel: '',
    successLabel: '',
    errorLabel: '',
    feedbackDuration: 1000,
    tooltipPlacement: 'top',
    hoist: false,
    copyIconSlot: '',
    successIconSlot: '',
    errorIconSlot: ''
  },
  render: (args) => html`
    <ug-copy-button
      value="${args.value}"
      from="${args.from}"
      ?disabled="${args.disabled}"
      copy-label="${args.copyLabel}"
      success-label="${args.successLabel}"
      error-label="${args.errorLabel}"
      feedback-duration="${args.feedbackDuration}"
      tooltip-placement="${args.tooltipPlacement}"
      ?hoist="${args.hoist}"
      @ug-copy="${action('ug-copy')}"
      @ug-error="${action('ug-error')}"
    >
      ${args.copyIconSlot == 'Icon'
        ? html`<ug-icon slot="copy-icon" name="clipboard"></ug-icon>`
        : ''}
      ${args.successIconSlot == 'Icon'
        ? html`<ug-icon slot="success-icon" name="clipboard-check"></ug-icon>`
        : ''}
      ${args.errorIconSlot == 'Icon'
        ? html`<ug-icon slot="error-icon" name="clipboard-x"></ug-icon>`
        : ''}
      ${args.copyIconSlot == '' &&
      args.successIconSlot == '' &&
      args.errorIconSlot == ''
        ? html`<!-- slots -->`
        : ''}
    </ug-copy-button>
  `
};

export const CustomLabels: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Copy Buttons display feedback in a tooltip. You can customize the labels using the <code>copy-label</code>, <code>success-label</code>, and <code>error-label</code> attributes.'
      }
    }
  },
  render: () => {
    return html`
      <ug-copy-button
        value="Custom labels are easy"
        copy-label="Click to copy"
        success-label="You did it!"
        error-label="Whoops, your browser doesn't support this!"
      ></ug-copy-button>
    `;
  }
};

export const CustomIcons: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Use the <code>copy-icon</code>, <code>success-icon</code>, and <code>error-icon</code> slots to customize the icons that get displayed for each state. You can use [<ug-icon>](?path=/docs/components-icon--docs) or your own images.'
      }
    }
  },
  render: () => {
    return html`
      <ug-copy-button value="Copied from a custom button">
        <ug-icon slot="copy-icon" name="clipboard"></ug-icon>
        <ug-icon slot="success-icon" name="clipboard-check"></ug-icon>
        <ug-icon slot="error-icon" name="clipboard-x"></ug-icon>
      </ug-copy-button>
    `;
  }
};

export const CopyingValuesFromOtherElements: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Normally, the data that gets copied will come from the component's <code>value</code> attribute, but you can copy data from any element within the same document by providing its <code>id</code> to the <code>from</code> attribute.<br>When using the <code>from</code> attribute, the element's [textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) will be copied by default. Passing an attribute or property modifier will let you copy data from one of the element's attributes or properties instead.<br>To copy data from an attribute, use <code>from="id[attr]"</code> where <code>id</code> is the id of the target element and <code>attr</code> is the name of the attribute you'd like to copy. To copy data from a property, use <code>from="id.prop"</code> where <code>id</code> is the id of the target element and <code>prop</code> is the name of the property you'd like to copy.`
      }
    }
  },
  render: () => {
    return html`
      <!-- Copies the span's textContent -->
      <span id="my-phone">+1 (234) 456-7890</span>
      <ug-copy-button from="my-phone"></ug-copy-button>

      <br /><br />

      <!-- Copies the input's "value" property -->
      <ug-input
        id="my-input"
        type="text"
        value="User input"
        style="display: inline-block; max-width: 300px;"
      ></ug-input>
      <ug-copy-button from="my-input.value"></ug-copy-button>

      <br /><br />

      <!-- Copies the link's "href" attribute -->
      <a id="my-link" href="https://www.ugent.be/">UGent Website</a>
      <ug-copy-button from="my-link[href]"></ug-copy-button>
    `;
  }
};

export const HandlingErrors: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `A copy error will occur if the value is an empty string, if the <code>from</code> attribute points to an id that doesn't exist, or if the browser rejects the operation for any reason. When this happens, the <code>ug-error</code> event will be emitted.<br>This example demonstrates what happens when a copy error occurs. You can customize the error label and icon using the <code>error-label</code> attribute and the <code>error-icon</code> slot, respectively.`
      }
    }
  },
  render: () => {
    return html` <ug-copy-button from="i-do-not-exist"></ug-copy-button> `;
  }
};

export const Disabled: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Copy buttons can be disabled by adding the <code>disabled</code> attribute.`
      }
    }
  },
  render: () => {
    return html`
      <ug-copy-button value="You can't copy me" disabled></ug-copy-button>
    `;
  }
};

export const ChangingFeedbackDuration: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `A success indicator is briefly shown after copying. You can customize the length of time the indicator is shown using the <code>feedback-duration</code> attribute.`
      }
    }
  },
  render: () => {
    return html`
      <ug-copy-button
        value="I copy for a shorter time"
        feedback-duration="250"
      ></ug-copy-button>
    `;
  }
};

export const CopyButtonWithEvents: Story = {
  parameters: {
    controls: { disable: true }
  },
  tags: ['!autodocs'],

  render: () => html`
    <ug-copy-button
      value="Copy this text!"
      @ug-copy="${action('ug-copy')}"
      @ug-error="${action('ug-error')}"
    >
    </ug-copy-button>
  `,
  play: async ({ canvasElement }) => {
    const ugCopyButton = canvasElement.querySelector('ug-copy-button');
    await ugCopyButton?.updateComplete;

    const button = ugCopyButton?.shadowRoot?.querySelector('button');
    await userEvent.click(button!);
    // Wait for the copy operation and feedback to complete
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Test error case
    ugCopyButton?.setAttribute('value', '');
    await userEvent.click(button!);
  }
};
