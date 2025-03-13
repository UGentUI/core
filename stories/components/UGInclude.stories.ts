import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/include';

const meta: Meta = {
  title: 'Components/Include',
  component: 'include',
  parameters: {
    docs: {
      subtitle:
        'Includes give you the power to embed external HTML files into the page.',
      description: {
        component: `Included files are asynchronously requested using <code>window.fetch()</code>. Requests are cached, so the same file can be included multiple times, but only one request will be made.

The included content will be inserted into the <code><ug-include></code> element’s default slot so it can be easily accessed and styled through the light DOM.`
      },
      source: {
        format: true,
        transform: (code: string) => {
          // Remove empty/default attributes and replace boolean attributes from the source code display
          return code
            .replace(/\s(mode="cors")/g, '')
            .replace(/\s* allowScripts=""/g, ' allowScripts');
        }
      },
      importSection: true // Enables the import section
    }
  },
  argTypes: {
    src: {
      description:
        'The location of the HTML file to include. Be sure you trust the content you are including as it will be executed as code and can result in XSS attacks.',
      //using select, not text to protect from these attacks
      control: 'select',
      options: [
        'https://www.ugent.be/',
        'https://www.google.be/',
        'https://example.com/sample.html'
      ],
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: {
          summary: undefined
        }
      }
    },
    mode: {
      description: 'The fetch mode to use.',
      control: 'select',
      options: ['cors', 'no-cors', 'same-origin'],
      table: {
        category: 'Properties',
        type: { summary: "'cors' | 'no-cors' | 'same-origin'" },
        defaultValue: { summary: 'cors' }
      }
    },
    allowScripts: {
      name: 'allow-scripts',
      description:
        'Allows included scripts to be executed. Be sure you trust the content you are including as it will be executed as code and can result in XSS attacks.',
      control: 'boolean',
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    ugLoad: {
      description: 'Emitted when the included file is loaded.',
      name: 'ug-load',
      action: 'ug-load',
      control: false,
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent<void>' }
      }
    },
    ugError: {
      description:
        'Emitted when the included file fails to load due to an error.',
      name: 'ug-error',
      action: 'ug-error',
      control: false,
      table: {
        category: 'Events',
        type: { summary: '{ status: number }' }
      }
    }
  }
};

export default meta;

type Story = StoryObj;

export const Include: Story = {
  args: {
    src: 'https://www.ugent.be/',
    mode: 'cors',
    allowScripts: false
  },
  render: (args) => {
    return html`<ug-include
      src="${args.src}"
      mode="${args.mode}"
      ?allow-scripts="${args.allowScripts}"
    ></ug-include>`;
  }
};

export const ListeningForEvents: Story = {
  // Story-specific parameters
  parameters: {
    docs: {
      description: {
        story: `When an include file loads successfully, the <code>ug-load</code> event will be emitted. You can listen for this event to add custom loading logic to your includes.

If the request fails, the <code>ug-error</code> event will be emitted. In this case, <code>event.detail.status</code> will contain the resulting HTTP status code of the request, e.g. 404 (not found).`
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  },
  args: {
    src: 'https://www.ugent.be/',
    mode: 'cors',
    allowScripts: false
  },
  render: (args) => {
    return html`
      <ug-include
        src="${args.src}"
        mode="${args.mode}"
        ?allow-scripts="${args.allowScripts}"
      ></ug-include>

      <script>
        const include = document.querySelector('ug-include');

        include.addEventListener('ug-load', (event) => {
          if (event.eventPhase === Event.AT_TARGET) {
            console.log('Success');
          }
        });

        include.addEventListener('ug-error', (event) => {
          if (event.eventPhase === Event.AT_TARGET) {
            console.log('Error', event.detail.status);
          }
        });
      </script>
    `;
  }
};
