import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/resize-observer';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Components/ResizeObserver',
  component: 'resize-observer',
  parameters: {
    docs: {
      description: {
        component: `The Resize Observer component offers a thin, declarative interface to the [ResizeObserver API](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver).

The resize observer will report changes to the dimensions of the elements it wraps through the <code>ug-resize</code> event. When emitted, a collection of [ResizeObserverEntry](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry) objects will be attached to <code>event.detail</code> that contains the target element and information about its dimensions.`
      },
      source: {
        format: true,
        transform: (code: string) => {
          // Remove empty/default attributes and replace boolean attributes from the source code display
          return code.replace(/\s* disabled=""/g, ' disabled');
        }
      },
      importSection: true // Enables the import section
    }
  },
  argTypes: {
    disabled: {
      description: 'Disables the observer.<br>`reflects: true`',
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
      table: {
        category: 'Properties',
        type: { summary: 'Promise<void>' },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    default: {
      name: ' (default)',
      control: false,
      description: 'One or more elements to watch for resizing.',
      table: {
        category: 'Slots',
        type: {
          summary: 'slot'
        },
        defaultValue: {
          summary: undefined
        }
      }
    },
    ugResize: {
      name: 'ug-resize',
      description: 'Emitted when the element is resized.',
      action: 'ug-resize',
      control: false,
      table: {
        category: 'Events',
        type: { summary: '{ entries: ResizeObserverEntry[] }' },
        defaultValue: {
          summary: undefined
        }
      }
    }
  }
};

export default meta;

type Story = StoryObj;

export const ResizeObserver: Story = {
  args: {
    disabled: false
  },
  render: (args) => {
    return html`<div class="resize-observer-overview">
        <ug-resize-observer
          ?disabled="${args.disabled}"
          @ug-resize="${action('ug-resize')}"
        >
          <div>Resize this box and watch the console 👉</div>
        </ug-resize-observer>
      </div>

      <script>
        () => {
          const container = document.querySelector('.resize-observer-overview');
          const resizeObserver = container.querySelector('ug-resize-observer');

          resizeObserver.addEventListener('ug-resize', (event) => {
            console.log(event.detail);
          });
        };
      </script>

      <style>
        .resize-observer-overview div {
          display: flex;
          border: solid 2px var(--ug-input-border-color);
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 4rem 2rem;
        }
      </style>`;
  }
};
