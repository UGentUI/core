import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/progress-ring';

const meta: Meta = {
  title: 'Components/ProgressRing',
  component: 'progress-ring',

  parameters: {
    docs: {
      subtitle:
        'Progress rings are used to show the progress of a determinate operation in a circular fashion.',
      source: {
        format: true,
        transform: (code: string) => {
          return code
            .replace(/\s(value="0"|label="")/g, '')
            .replace(/\s* attribute=""/g, ' attribute');
        }
      },
      importSection: true // Enables the import section
    }
  },

  argTypes: {
    value: {
      control: 'number',
      description:
        'The current progress as a percentage, 0 to 100. <br>`reflects: true`',
      table: {
        category: 'Properties',
        type: { summary: 'number' },
        defaultValue: { summary: '0' }
      }
    },

    label: {
      control: 'text',
      description: 'A custom label for assistive devices.',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },

    updateComplete: {
      control: false,
      description:
        'A read-only promise that resolves when the component has finished updating.',
      table: {
        category: 'Properties',
        type: { summary: 'Promise<void>' },
        defaultValue: { summary: undefined }
      }
    },

    defaultSlot: {
      name: '(default)',
      control: 'text',
      description: 'A label to show inside the ring.',
      table: {
        category: 'Slots',
        type: { summary: 'slot' },
        defaultValue: { summary: undefined }
      }
    }
  }
};

export default meta;

type Story = StoryObj;

export const ProgressRing: Story = {
  args: {
    value: 25,
    label: '',
    defaultSlot: undefined
  },
  render: (args) =>
    html`<ug-progress-ring value="${args.value}" label="${args.label}"
      >${args.defaultSlot}</ug-progress-ring
    > `
};

export const Size: Story = {
  args: {
    value: 50
  },
  render: (args) => html`
    <ug-progress-ring
      value="${args.value}"
      style="--size: 200px;"
    ></ug-progress-ring>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Use the `--size` custom property to set the diameter of the progress ring.'
      }
    },
    controls: { disable: true }
  }
};

export const TrackAndIndicatorWidth: Story = {
  args: {
    value: 50
  },
  render: (args) => html`
    <ug-progress-ring
      value="${args.value}"
      style="--track-width: 6px; --indicator-width: 12px;"
    ></ug-progress-ring>
  `,
  parameters: {
    docs: {
      description: {
        story:
          "Use the `--track-width` and `--indicator-width` custom properties to set the width of the progress ring's track and indicator."
      }
    },
    controls: { disable: true }
  }
};

export const Colors: Story = {
  args: {
    value: 50
  },
  render: (args) => html`
    <ug-progress-ring
      value="${args.value}"
      style="--track-color: pink; --indicator-color: deeppink;"
    ></ug-progress-ring>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'To change the color, use the `--track-color` and `--indicator-color` custom properties.'
      }
    },
    controls: { disable: true }
  }
};

export const Labels: Story = {
  args: {
    value: 50,
    label: 'Upload progress'
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use the `label` attribute to label the progress ring and tell assistive devices how to announce it.'
      }
    },
    controls: { disable: true }
  },
  render: (args) => html`
    <ug-progress-ring
      value="${args.value}"
      label="${args.label}"
    ></ug-progress-ring>
  `
};

export const ShowingValues: Story = {
  args: {
    value: 50,
    defaultSlot: '50%'
  },
  render: (args) => html`
    <div
      style="display: flex; flex-direction: column; align-items: center; gap: 1rem;"
    >
      <ug-progress-ring
        value="${args.value}"
        class="ug-progress-ring-values"
        style="margin-bottom: .5rem;"
      >
        ${args.defaultSlot}
      </ug-progress-ring>

      <div style="display: flex; gap: 0.5rem;">
        <ug-button circle>
          <ug-icon name="dash" label="Decrease"></ug-icon>
        </ug-button>
        <ug-button circle>
          <ug-icon name="plus" label="Increase"></ug-icon>
        </ug-button>
      </div>

      <script>
        (() => {
          const progressRing = document.querySelector(
            '.ug-progress-ring-values'
          );
          const subtractButton =
            progressRing.nextElementSibling.querySelector('ug-button');
          const addButton = subtractButton.nextElementSibling;

          addButton.addEventListener('click', () => {
            const value = Math.min(100, progressRing.value + 10);
            progressRing.value = value;
            progressRing.textContent = \`\${value}%\`;
          });

          subtractButton.addEventListener('click', () => {
            const value = Math.max(0, progressRing.value - 10);
            progressRing.value = value;
            progressRing.textContent = \`\${value}%\`;
          });
        })();
      </script>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Use the default slot to show a label inside the progress ring.'
      }
    }
  }
};
