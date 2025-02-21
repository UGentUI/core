import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/mutation-observer';
import '/lib/components/button';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Components/Mutation Observer',
  component: 'ug-mutation-observer',
  parameters: {
    docs: {
      subtitle:
        'The Mutation Observer component offers a thin, declarative interface to the MutationObserver API.',
      description: {
        component:
          'The mutation observer will report changes to the content it wraps through the `ug-mutation` event. When emitted, a collection of [MutationRecord](https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord) objects will be attached to `event.detail` that contains information about how it changed. When you create a mutation observer, you must indicate what changes it should respond to by including at least one of `attr`, `child-list`, or `char-data`. If you don’t specify at least one of these attributes, no mutation events will be emitted.'
      }
    },
    source: {
      format: true
    }
  },

  argTypes: {
    attr: {
      description:
        'Watches for changes to attributes. To watch only specific attributes, separate them by a space, e.g. `attr="class id title"`. To watch all attributes, use `*`.<br>`reflects: true`',
      control: 'text',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      }
    },
    attrOldValue: {
      name: 'attr-old-value',
      description:
        'Indicates whether or not the attribute’s previous value should be recorded when monitoring changes.<br>`reflects: true`',
      control: 'boolean',
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    charData: {
      name: 'char-data',
      description:
        'Watches for changes to the character data contained within the node.<br>`reflects: true`',
      control: 'boolean',
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    charDataOldValue: {
      name: 'char-data-old-value',
      description:
        'Indicates whether or not the previous value of the node’s text should be recorded.<br>`reflects: true`',
      control: 'boolean',
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    childList: {
      name: 'child-list',
      description:
        'Watches for the addition or removal of new child nodes.<br>`reflects: true`',
      control: 'boolean',
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
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
        defaultValue: { summary: '-' }
      },
      control: false
    },
    defaultSlot: {
      name: 'default',
      description: 'The content to watch for mutations.',
      table: {
        category: 'Slots',
        defaultValue: { summary: undefined },
        type: { summary: undefined }
      },
      control: false
    },
    ugMutation: {
      name: 'ug-mutation',
      description: 'Emitted when a mutation occurs.',
      table: {
        category: 'Events',
        type: { summary: '{ mutationList: MutationRecord[] }' },
        defaultValue: { summary: undefined }
      },
      control: false
    }
  }
};

export default meta;

type Story = StoryObj;

export const CharData: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Use the <code>char-data</code> attribute to watch for changes to the character data contained within the node.'
      },
      source: {
        format: true,
        transform: (code: string) => {
          return code
            .replace(/\s*char-data=""/g, ' char-data')
            .replace(/\s*char-data-old-value=""/g, ' char-data-old-value');
        }
      }
    }
  },
  render: () => {
    return html`<div class="mutation-char-data">
      <ug-mutation-observer
        char-data
        char-data-old-value
        @ug-mutation="${action('ug-mutation')}"
      >
        <ug-button variant="primary">Generate ID</ug-button>
        <span class="observed-text"> </span>
      </ug-mutation-observer>

      <br /><br />
      Click the button and watch the console

      <script>
        (() => {
          const container = document.querySelector('.mutation-char-data');
          const mutationObserver = container.querySelector(
            'ug-mutation-observer'
          );
          const observedText = container.querySelector('.observed-text');
          const button = container.querySelector('ug-button');

          // Change text content when clicking the button
          button.addEventListener('click', () => {
            const textNode = observedText.firstChild;
            textNode.nodeValue = Math.random().toString(36).slice(2, 8);
          });

          // Log mutations
          mutationObserver.addEventListener('ug-mutation', (event) => {
            console.log(event.detail);
          });
        })();
      </script>

      <style>
        .mutation-char-data .observed-text {
          display: inline;
          margin-left: 0.5rem;
          font-family: monospace;
        }
      </style>
    </div>`;
  }
};

export const Attr: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Use the <code>attr</code> attribute to watch for changes to element attributes. In this example, we're watching the <code>variant</code> attribute of the button."
      },
      source: {
        format: true,
        transform: (code: string) => {
          return code
            .replace(/\s*attr=""/g, ' attr')
            .replace(/\s*attr-old-value=""/g, ' attr-old-value');
        }
      }
    },
    controls: { disable: true }
  },
  render: () => {
    return html`<div class="mutation-overview">
      <ug-mutation-observer
        attr="variant"
        attr-old-value
        @ug-mutation="${action('ug-mutation')}"
      >
        <ug-button variant="primary">Click to mutate</ug-button>
      </ug-mutation-observer>

      <br />
      Click the button and watch the console

      <script>
        (() => {
          const container = document.querySelector('.mutation-overview');
          const mutationObserver = container.querySelector(
            'ug-mutation-observer'
          );
          const button = container.querySelector('ug-button');
          const variants = [
            'primary',
            'success',
            'neutral',
            'warning',
            'danger'
          ];
          let clicks = 0;

          // Change the button's variant attribute
          button.addEventListener('click', () => {
            clicks++;
            button.setAttribute('variant', variants[clicks % variants.length]);
          });

          // Log mutations
          mutationObserver.addEventListener('ug-mutation', (event) => {
            console.log(event.detail);
          });
        })();
      </script>

      <style>
        .mutation-overview ug-button {
          margin-bottom: 1rem;
        }
      </style>
    </div>`;
  }
};

export const ChildList: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use the <code>child-list</code> attribute to watch for new child elements that are added or removed.'
      },
      source: {
        format: true,
        transform: (code: string) => {
          return code.replace(/\s*child-list=""/g, ' child-list');
        }
      }
    },
    controls: { disable: true }
  },
  render: () => {
    return html`<div class="mutation-child-list">
      <ug-mutation-observer child-list @ug-mutation="${action('ug-mutation')}">
        <div class="buttons">
          <ug-button variant="primary">Add button</ug-button>
        </div>
      </ug-mutation-observer>

      Add and remove buttons and watch the console

      <script>
        (() => {
          const container = document.querySelector('.mutation-child-list');
          const mutationObserver = container.querySelector(
            'ug-mutation-observer'
          );
          const buttons = container.querySelector('.buttons');
          const button = container.querySelector(
            'ug-button[variant="primary"]'
          );
          let i = 0;

          // Add a button
          button.addEventListener('click', () => {
            const button = document.createElement('ug-button');
            button.textContent = ++i;
            buttons.append(button);
          });

          // Remove a button
          buttons.addEventListener('click', (event) => {
            const target = event.target.closest(
              'ug-button:not([variant="primary"])'
            );
            event.stopPropagation();

            if (target) {
              target.remove();
            }
          });

          // Log mutations
          mutationObserver.addEventListener('ug-mutation', (event) => {
            console.log(event.detail);
          });
        })();
      </script>

      <style>
        .mutation-child-list .buttons {
          display: flex;
          gap: 0.25rem;
          flex-wrap: wrap;
          margin-bottom: 1rem;
        }
      </style>
    </div> `;
  }
};
