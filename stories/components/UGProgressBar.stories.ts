import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/progress-bar';
import '/lib/components/button';
import '/lib/components/icon';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from '@storybook/addon-actions';
import { userEvent } from '@storybook/test';

const meta: Meta = {
  title: 'Components/ProgressBar',
  component: 'ug-progress-bar',

  parameters: {
    docs: {
      subtitle:
        'Progress bars are used to show the status of an ongoing operation.',
      source: {
        format: true,
        transform: (code: string) => {
          // Remove empty/default attributes and replace boolean attributes from the source code display
          return code
            .replace(/\s(label="")/g, '')
            .replace(/\s* indeterminate=""/g, ' indeterminate');
        }
      }
    }
  },

  argTypes: {
    value: {
      name: 'value',
      description:
        'The current progress as a percentage, 0 to 100. <br>`reflects: true`',
      control: { type: 'number', min: 0, max: 100 },
      table: {
        category: 'Properties',
        type: { summary: 'number' },
        defaultValue: { summary: '0' }
      }
    },
    indeterminate: {
      name: 'indeterminate',
      description:
        'When true, percentage is ignored, the label is hidden, and the progress bar is drawn in an indeterminate state.<br>`reflects: true`',
      control: 'boolean',
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    label: {
      name: 'label',
      description: 'A custom label for assistive devices.',
      control: 'text',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    updateComplete: {
      name: 'updateComplete',
      description:
        'A read-only promise that resolves when the component has finished updating.',
      table: {
        category: 'Properties',
        type: { summary: 'Promise<void>' }
      },
      control: false
    },
    defaultSlot: {
      name: '(default)',
      description: 'A label to show inside the progress indicator.',
      table: {
        category: 'Slots',
        type: { summary: 'slot' }
      },
      control: 'text'
    }
  }
};

export default meta;

type Story = StoryObj;

export const ProgressBar: Story = {
  args: {
    value: 50,
    indeterminate: false,
    label: '',
    defaultSlot: '50%'
  },
  render: (args) => {
    return html`<ug-progress-bar
      value="${ifDefined(args.indeterminate ? undefined : args.value)}"
      ?indeterminate="${args.indeterminate}"
      label="${ifDefined(args.label)}"
    >
      ${args.defaultSlot}
    </ug-progress-bar>`;
  }
};

export const Labels: Story = {
  ...ProgressBar,
  args: {
    ...ProgressBar.args,
    label: 'Upload progress'
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use the <code>label</code> attribute to label the progress bar and tell assistive devices how to announce it.'
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  }
};

export const ShowingValues: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use the default slot to show a value.'
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  },
  render: (args) => {
    return html`<ug-progress-bar value="50" class="progress-bar-values"
        >50%</ug-progress-bar
      >

      <br />

      <ug-button circle
        ><ug-icon name="dash" label="Decrease"></ug-icon
      ></ug-button>
      <ug-button circle
        ><ug-icon name="plus" label="Increase"></ug-icon
      ></ug-button>

      <script>
        () => {
          const progressBar = document.querySelector('.progress-bar-values');
          const subtractButton =
            progressBar.nextElementSibling.nextElementSibling;
          const addButton = subtractButton.nextElementSibling;

          addButton.addEventListener('click', () => {
            const value = Math.min(100, progressBar.value + 10);
            progressBar.value = value;
            progressBar.textContent = \`\${value}%\`;
          });

          subtractButton.addEventListener('click', () => {
            const value = Math.max(0, progressBar.value - 10);
            progressBar.value = value;
            progressBar.textContent = \`\${value}%\`;
          });
        };
      </script> `;
  }
};

export const Indeterminate: Story = {
  ...ProgressBar,
  args: {
    ...ProgressBar.args,
    indeterminate: true
  },
  parameters: {
    docs: {
      description: {
        story:
          'The <code>indeterminate</code> attribute can be used to inform the user that the operation is pending, but its status cannot currently be determined. In this state, <code>value</code> is ignored and the label, if present, will not be shown.'
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  }
};
