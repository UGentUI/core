import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/tag';
import { action } from '@storybook/addon-actions';
import { userEvent, within } from '@storybook/test';

// Transform code that makes it more readable
const removeDefaultAttributes = (code: string): string => {
  return code
    .replace(/\s*(variant="neutral"|size="medium")/g, '')
    .replace(/pill=""/g, 'pill')
    .replace(/removable=""/g, 'removable');
};

const meta: Meta = {
  title: 'Components/Tag',
  component: 'ug-tag',
  parameters: {
    docs: {
      subtitle:
        'Tags are used as labels to organize things or to indicate a selection.',
      source: {
        format: true,
        transform: removeDefaultAttributes // Use the custom transform function here
      }
    }
  },
  argTypes: {
    variant: {
      name: 'variant',
      description: "The tag's theme variant.",
      control: { type: 'select' },
      options: ['primary', 'success', 'neutral', 'warning', 'danger', 'text'],
      table: {
        category: 'Properties',
        type: {
          summary:
            "'primary' | 'success' | 'neutral' | 'warning' | 'danger' | 'text'"
        },
        defaultValue: { summary: 'neutral' }
      }
    },
    size: {
      name: 'size',
      description: "The tag's size.",
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      table: {
        category: 'Properties',
        type: { summary: "'small' | 'medium' | 'large'" },
        defaultValue: { summary: 'medium' }
      }
    },
    pill: {
      name: 'pill',
      description: 'Draws a pill-style tag with rounded edges.',
      control: { type: 'boolean' },
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    removable: {
      name: 'removable',
      description: 'Makes the tag removable and shows a remove button.',
      control: { type: 'boolean' },
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    updateComplete: {
      name: 'updateComplete',
      description:
        'A read-only promise that resolves when the component has finished updating.',
      control: false,
      table: {
        category: 'Properties',
        type: { summary: 'Promise<void>' },
        defaultValue: { summary: undefined }
      }
    },
    defaultSlot: {
      name: '(default)',
      description: 'The tag’s content.',
      table: {
        category: 'Slots',
        type: { summary: 'slot' },
        defaultValue: {
          // defaultValue.summary should be undefined to hide the - in the auto-docs table
          summary: undefined
        }
      },
      control: { type: 'text' }
    },
    //Events
    ugRemove: {
      name: 'ug-remove',
      description: 'Emitted when the remove button is activated.',
      action: 'ug-remove',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      }
    }
  }
};

export default meta;

type Story = StoryObj;

export const Default = {
  args: {
    variant: 'neutral',
    size: 'medium',
    pill: false,
    removable: false
  },
  parameters: {
    docs: {
      source: {
        format: true
      }
    }
  },
  // prettier-ignore
  render: (args) => {
    return html`
<ug-tag
        variant="${args.variant}"
        size="${args.size}"
        ?pill="${args.pill}"
        ?removable="${args.removable}"
      >
  Interactive Tag
</ug-tag>
    `;}
};

export const Variants: Story = {
  args: {
    size: 'medium',
    pill: false,
    removable: false
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Use the <code>variant</code> attribute to set the tag's variant.`
      },
      source: {
        format: true
      }
    }
  },
  // prettier-ignore
  render: (args) => {
    return html`
<ug-tag variant="primary"
        size="${args.size}"
        ?pill="${args.pill}"
        ?removable="${args.removable}" >
  Primary
</ug-tag>

<ug-tag variant="success"
      size="${args.size}"
      ?pill="${args.pill}"
      ?removable="${args.removable}">
  Success
</ug-tag>

<ug-tag variant="neutral"
      size="${args.size}"
      ?pill="${args.pill}"
      ?removable="${args.removable}">
  Neutral
</ug-tag>

<ug-tag variant="warning"
      size="${args.size}"
      ?pill="${args.pill}"
      ?removable="${args.removable}">
  Warning
</ug-tag>

<ug-tag variant="danger" 
      size="${args.size}"
      ?pill="${args.pill}"
      ?removable="${args.removable}">
  Danger
</ug-tag>`;
  }
};

export const Sizes: Story = {
  args: {
    variant: 'neutral',
    pill: false,
    removable: false
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Use the <code>size</code> attribute to change a tag's size.`
      },
      source: {
        format: true
      }
    }
  },
  // prettier-ignore
  render: (args) => {
    return html`
<ug-tag size="small"
        variant="${args.variant}"
        ?pill="${args.pill}"
        ?removable="${args.removable}">
  Small
</ug-tag>

<ug-tag size="medium"
        variant="${args.variant}"
        ?pill="${args.pill}"
        ?removable="${args.removable}">
  Medium
</ug-tag>

<ug-tag size="large"
        variant="${args.variant}"
        ?pill="${args.pill}"
        ?removable="${args.removable}">
  Large
</ug-tag>
    `;
  }
};

export const Pill: Story = {
  args: {
    variant: 'neutral',
    size: 'medium',
    removable: false
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Use the <code>pill</code> attribute to give tags rounded edges.`
      },
      source: {
        format: true
      }
    }
  },
  // prettier-ignore
  render: (args) => {
    return html`
<ug-tag pill 
  size="${args.size}"
  variant="${args.variant}"
  ?removable="${args.removable}">
  Pill
</ug-tag>

<ug-tag 
  size="${args.size}"
  variant="${args.variant}"
  ?removable="${args.removable}">
  Default
</ug-tag>
    `;
  }
};

export const Removable: Story = {
  args: {
    variant: 'neutral',
    size: 'medium',
    pill: false
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Use the <code>removable</code> attribute to add a remove button to the tag.`
      },
      source: {
        format: true
      }
    }
  },
  // prettier-ignore
  render: (args) => {
    return html`
      <div class="tags-removable">
        <ug-tag
          removable
          size="${args.size}"
          variant="${args.variant}"
          ?pill="${args.pill}"
          >Close me</ug-tag
        >
      </div>

      <script>
        const div = document.querySelector('.tags-removable');

        div.addEventListener('ug-remove', (event) => {
          const tag = event.target;
          tag.style.opacity = '0';
          setTimeout(() => (tag.style.opacity = '1'), 2000);
        });
      </script>

      <style>
        .tags-removable ug-tag {
          transition: var(--ug-transition-medium) opacity;
        }
      </style>
    `;
  }
};

export const TagWithEvents: Story = {
  ...Default,
  tags: ['!autodocs'],
  args: {
    ...Default.args,
    removable: true
  },
  parameters: {
    controls: { disable: true }
  },
  // prettier-ignore
  render: (args) => {
    return html`
      <div class="tags-removable">
        <ug-tag
          variant="${args.variant}"
          size="${args.size}"
          ?pill="${args.pill}"
          ?removable="${args.removable}"
          @ug-remove="${action('ug-remove')}"
          data-testid="tag"
        >
          Interactive Tag
        </ug-tag>
      </div>

        <script>
          const div = document.querySelector('.tags-removable');

          div.addEventListener('ug-remove', (event) => {
            const tag = event.target;
            tag.style.opacity = '0';
            setTimeout(() => (tag.style.opacity = '1'), 2000);
          });
        </script>

        <style>
          .tags-removable ug-tag {
            transition: var(--ug-transition-medium) opacity;
          }
        </style>
      </div>
    `;},

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tag = await canvas.findByTestId('tag');

    // Find the remove button inside the tag's shadow DOM
    let removeButton = null;
    removeButton = tag.shadowRoot!.querySelector(
      '[part="remove-button"], button'
    )!;

    // Wait for the validation message to appear
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Click the remove button
    await userEvent.click(removeButton);
  }
};
