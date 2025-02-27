import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/details';
import '/lib/components/icon';
import { userEvent } from '@storybook/test';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Components/Details',
  component: 'ug-details',
  parameters: {
    docs: {
      subtitle:
        'Details show a brief summary and expand to show additional content.',
      source: {
        format: true,
        transform: (code: string) => {
          // Remove empty/default attributes and replace boolean attributes from the source code display
          return code
            .replace(/\s* open=""/g, ' open')
            .replace(/\s* disabled=""/g, ' disabled');
        }
      }
    }
  },
  argTypes: {
    open: {
      description:
        'Indicates whether or not the details is open. You can toggle this attribute to show and hide the details, or use the <code>show()</code> and <code>hide()</code> methods. This attribute reflects the open state.<br>`reflects: true`',
      control: 'boolean',
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    summary: {
      description:
        'The summary to show in the header. If you need to display HTML, use the <code>summary</code> slot instead.',
      control: 'text',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    disabled: {
      description:
        'Disables the details so it can’t be toggled.<br>`reflects: true`',
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
      control: false, // Read-only, so no control in Storybook UI
      table: {
        category: 'Properties',
        type: { summary: 'Promise<void>' },
        defaultValue: { summary: undefined }
      }
    },
    defaultSlot: {
      name: '(default)',
      description: "The details' main content.",
      control: 'text',
      table: {
        category: 'Slots',
        type: { summary: 'slot' },
        defaultValue: { summary: 'undefined' }
      }
    },
    summarySlot: {
      name: 'summary',
      description:
        "The details' summary. Alternatively, you can use the `summary` attribute.",
      control: false,
      table: {
        category: 'Slots',
        type: { summary: 'slot' },
        defaultValue: { summary: 'undefined' }
      }
    },
    expandIconSlot: {
      name: 'expand-icon',
      description:
        'Optional expand icon to use instead of the default. Works best with `<ug-icon>`.',
      control: 'check',
      options: ['Icon'],
      table: {
        category: 'Slots',
        type: { summary: 'slot' },
        defaultValue: { summary: 'undefined' }
      }
    },
    collapseIconSlot: {
      name: 'collapse-icon',
      description:
        'Optional collapse icon to use instead of the default. Works best with `<ug-icon>`.',
      control: 'check',
      options: ['Icon'],
      table: {
        category: 'Slots',
        type: { summary: 'slot' },
        defaultValue: { summary: 'undefined' }
      }
    },
    ugShow: {
      name: 'ug-show',
      description: 'Emitted when the details opens.',
      control: false, // Events are not controlled in the UI
      action: 'ug-show', // Connects the event to Storybook's Actions panel
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      }
    },
    ugAfterShow: {
      name: 'ug-after-show',
      description:
        'Emitted after the details opens and all animations are complete.',
      control: false,
      action: 'ug-after-show',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      }
    },
    ugHide: {
      name: 'ug-hide',
      description: 'Emitted when the details closes.',
      control: false,
      action: 'ug-hide',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      }
    },
    ugAfterHide: {
      name: 'ug-after-hide',
      description:
        'Emitted after the details closes and all animations are complete.',
      control: false,
      action: 'ug-after-hide',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      }
    },
    show: {
      // Methods should not be controlled in the Storybook UI
      control: false,

      // Override how the method name appears in the controls panel
      name: 'show()',

      // Detailed description of the method
      description: 'Shows the details.',

      table: {
        // Categorization in Storybook UI
        category: 'Methods',
        type: {
          // Add the method signature
          summary: '() => void'
        },
        defaultValue: {
          // defaultValue.summary should be undefined to hide the - in the auto-docs table
          summary: undefined
        }
      }
    },
    hide: {
      // Methods should not be controlled in the Storybook UI
      control: false,

      // Override how the method name appears in the controls panel
      name: 'hide()',

      // Detailed description of the method
      description: 'Hides the details.',

      table: {
        // Categorization in Storybook UI
        category: 'Methods',
        type: {
          // Add the method signature
          summary: '() => void'
        },
        defaultValue: {
          // defaultValue.summary should be undefined to hide the - in the auto-docs table
          summary: undefined
        }
      }
    }
  }
};

export default meta;

type Story = StoryObj;

export const Details: Story = {
  args: {
    summary: 'Click to expand',
    open: false,
    disabled: false,
    defaultSlot: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  //prettier-ignore
  render: (args) => {
    return html`<ug-details
        class="${args.collapseIconSlot == 'Icon' ? 'custom-icons' : 'detail'}"
        summary=${args.summary}
        ?open=${args.open}
        ?disabled=${args.disabled}
        >${args.expandIconSlot == 'Icon'
          ? html` <ug-icon slot="expand-icon" name="square-plus"></ug-icon>`
          : null}${args.collapseIconSlot == 'Icon'
          ? html` <ug-icon slot="collapse-icon" name="square-minus"></ug-icon>`
          : null}
        ${args.defaultSlot} </ug-details
      >${args.collapseIconSlot == 'Icon'
        ? html` <style>
            ug-details.custom-icons::part(summary-icon) {
              /* Disable the expand/collapse animation */
              rotate: none;
            }
          </style>`
        : null}`;
  }
};

export const Disabled: Story = {
  ...Details,
  args: {
    ...Details.args,
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: `Use the <code>disable</code> attribute to prevent the details from expanding.`
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  }
};

export const CustomizingTheSummaryIcon: Story = {
  ...Details,
  args: {
    ...Details.args,
    expandIconSlot: 'Icon',
    collapseIconSlot: 'Icon'
  },
  parameters: {
    docs: {
      description: {
        story: `Use the <code>expand-icon</code> and <code>collapse-icon</code> slots to change the expand and collapse icons, respectively.`
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  }
};

export const GroupingDetails: Story = {
  ...Details,
  args: {
    ...Details.args,
    expandIconSlot: 'Icon',
    collapseIconSlot: 'Icon'
  },
  parameters: {
    docs: {
      description: {
        story: `Details are designed to function independently, but you can simulate a group or “accordion” where only one is shown at a time by listening for the <code>ug-show</code> event.`
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  },
  render: () => {
    return html`
      <div class="details-group-example">
        <ug-details summary="First" open>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </ug-details>

        <ug-details summary="Second">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </ug-details>

        <ug-details summary="Third">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </ug-details>
      </div>

      <script>
        (() => {
          const container = document.querySelector('.details-group-example');

          // Close all other details when one is shown
          container.addEventListener('ug-show', (event) => {
            if (event.target.localName === 'ug-details') {
              [...container.querySelectorAll('ug-details')].map(
                (details) => (details.open = event.target === details)
              );
            }
          });
        })();
      </script>

      <style>
        .details-group-example ug-details:not(:last-of-type) {
          margin-bottom: var(--ug-spacing-2x-small);
        }
      </style>
    `;
  }
};

export const DetailsWithEvents: Story = {
  tags: ['!autodocs'],
  // Story-specific parameters
  parameters: {
    controls: { disable: true }
  },
  args: {
    summary: 'Click to expand',
    open: false,
    disabled: false,
    defaultSlot: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  render: (args) => {
    return html`<ug-details
      summary=${args.summary}
      ?open=${args.open}
      ?disabled=${args.disabled}
      @ug-show="${action('ug-show')}"
      @ug-after-show="${action('ug-after-show')}"
      @ug-hide="${action('ug-hide')}"
      @ug-after-hide="${action('ug-after-hide')}"
      >${args.expandIconSlot == 'Icon'
        ? html`<ug-icon slot="expand-icon" name="plus-square"></ug-icon>`
        : null}${args.collapseIconSlot == 'Icon'
        ? html`<ug-icon slot="collapse-icon" name="dash-square"></ug-icon>`
        : null}
      ${args.defaultSlot}</ug-details
    >`;
  },
  play: async ({ canvasElement }) => {
    const details = canvasElement.querySelector('ug-details');
    const summaryElement =
      details!.shadowRoot!.querySelector('[part="summary"]');
    if (!summaryElement) return;

    // Simulate user clicking to open
    await userEvent.click(summaryElement);

    // Wait a moment to allow animations
    await new Promise((resolve) => setTimeout(resolve, 300));

    // Simulate user clicking to close
    await userEvent.click(summaryElement);
  }
};
