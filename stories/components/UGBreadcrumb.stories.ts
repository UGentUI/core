import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/breadcrumb';
import '/lib/components/breadcrumb-item';
import '/lib/components/icon';
import '/lib/components/icon-button';
import '/lib/components/dropdown';
import '/lib/components/menu';
import '/lib/components/menu-item';
import '/lib/components/button';

const meta: Meta = {
  title: 'Components/Breadcrumb',
  component: 'ug-breadcrumb',
  decorators: [
    (Story) => {
      // Apply CSS without showing in code snippet
      const style = document.createElement('style');
      // This breaks the zoom buttons in the toolbar
      style.textContent = '.docs-story :not(.sb-story) { transform: none; }';
      document.head.appendChild(style);
      return Story();
    }
  ],
  parameters: {
    docs: {
      subtitle:
        'Breadcrumbs provide a group of links so users can easily navigate a website’s hierarchy.',
      description: {
        component:
          'Breadcrumbs are usually placed before a page’s main content with the current page shown last to indicate the user’s position in the navigation.'
      },
      source: {
        format: true,
        transform: (code: string) => {
          return code.replace(/\s(label="")/g, '');
        }
      }
    }
  },

  argTypes: {
    label: {
      name: 'label',
      description:
        'The label to use for the breadcrumb control. This will not be shown on the screen, but it will be announced by screen readers and other assistive devices to provide more context for users.',
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
        type: { summary: 'Promise<void>' },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    defaultSlot: {
      name: '(default)',
      description: 'One or more breadcrumb items to display.',
      table: {
        category: 'Slots',
        type: { summary: 'slot' },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    separatorSlot: {
      name: 'separator',
      description:
        'The separator to use between breadcrumb items. Works best with `<ug-icon>`.',
      table: {
        category: 'Slots',
        type: { summary: 'slot' },
        defaultValue: { summary: undefined }
      },
      control: false
    }
  }
};

export default meta;

type Story = StoryObj;

export const Breadcrumb: Story = {
  args: {
    label: ''
  },
  render: (args) => {
    return html`<ug-breadcrumb label="${args.label}">
      <ug-breadcrumb-item>Catalog</ug-breadcrumb-item>
      <ug-breadcrumb-item>Clothing</ug-breadcrumb-item>
      <ug-breadcrumb-item>Women's</ug-breadcrumb-item>
      <ug-breadcrumb-item>Shirts &amp; Tops</ug-breadcrumb-item>
    </ug-breadcrumb>`;
  }
};

export const BreadcrumbLinks: Story = {
  // Story-specific parameters
  parameters: {
    docs: {
      description: {
        story: `By default, breadcrumb items are rendered as buttons so you can use them to navigate single-page applications. In this case, you’ll need to add event listeners to handle clicks.

For websites, you’ll probably want to use links instead. You can make any breadcrumb item a link by applying an <code>href</code> attribute to it. Now, when the user activates it, they’ll be taken to the corresponding page — no event listeners required.`
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  },
  render: () => {
    return html`<ug-breadcrumb>
      <ug-breadcrumb-item href="https://example.com/home">
        Homepage
      </ug-breadcrumb-item>
      <ug-breadcrumb-item href="https://example.com/home/services">
        Our Services
      </ug-breadcrumb-item>
      <ug-breadcrumb-item href="https://example.com/home/services/digital">
        Digital Media
      </ug-breadcrumb-item>
      <ug-breadcrumb-item
        href="https://example.com/home/services/digital/web-design"
      >
        Web Design
      </ug-breadcrumb-item>
    </ug-breadcrumb>`;
  }
};

export const CustomSeparators: Story = {
  // Story-specific parameters
  parameters: {
    docs: {
      description: {
        story:
          'Use the <code>separator</code> slot to change the separator that goes between breadcrumb items. Icons work well, but you can also use text or an image.'
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  },
  render: () => {
    return html`<ug-breadcrumb>
        <ug-icon name="dot" slot="separator"></ug-icon>
        <ug-breadcrumb-item>First</ug-breadcrumb-item>
        <ug-breadcrumb-item>Second</ug-breadcrumb-item>
        <ug-breadcrumb-item>Third</ug-breadcrumb-item>
      </ug-breadcrumb>

      <br />

      <ug-breadcrumb>
        <ug-icon name="arrow-right" slot="separator"></ug-icon>
        <ug-breadcrumb-item>First</ug-breadcrumb-item>
        <ug-breadcrumb-item>Second</ug-breadcrumb-item>
        <ug-breadcrumb-item>Third</ug-breadcrumb-item>
      </ug-breadcrumb>

      <br />

      <ug-breadcrumb>
        <span slot="separator">/</span>
        <ug-breadcrumb-item>First</ug-breadcrumb-item>
        <ug-breadcrumb-item>Second</ug-breadcrumb-item>
        <ug-breadcrumb-item>Third</ug-breadcrumb-item>
      </ug-breadcrumb> `;
  }
};

export const Prefixes: Story = {
  // Story-specific parameters
  parameters: {
    docs: {
      description: {
        story:
          'Use the <code>prefix</code> slot to add content before any breadcrumb item.'
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  },
  render: () => {
    return html`<ug-breadcrumb>
      <ug-breadcrumb-item>
        <ug-icon slot="prefix" name="house"></ug-icon>
        Home
      </ug-breadcrumb-item>
      <ug-breadcrumb-item>Articles</ug-breadcrumb-item>
      <ug-breadcrumb-item>Traveling</ug-breadcrumb-item>
    </ug-breadcrumb>`;
  }
};

export const Suffixes: Story = {
  // Story-specific parameters
  parameters: {
    docs: {
      description: {
        story:
          'Use the <code>suffix</code> slot to add content after any breadcrumb item.'
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  },
  render: () => {
    return html`<ug-breadcrumb>
      <ug-breadcrumb-item>Documents</ug-breadcrumb-item>
      <ug-breadcrumb-item>Policies</ug-breadcrumb-item>
      <ug-breadcrumb-item>
        Security
        <ug-icon slot="suffix" name="shield-lock"></ug-icon>
      </ug-breadcrumb-item>
    </ug-breadcrumb>`;
  }
};

export const WithDropdownsInDefaultSlot: Story = {
  // Story-specific parameters
  parameters: {
    docs: {
      description: {
        story:
          'Dropdown menus can be placed in the default slot to provide additional options.'
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  },
  render: () => {
    return html`<ug-breadcrumb>
      <ug-breadcrumb-item>Homepage</ug-breadcrumb-item>
      <ug-breadcrumb-item>
        <ug-dropdown hoist>
          <ug-button slot="trigger" size="small" circle>
            <ug-icon label="More options" name="three-dots"></ug-icon>
          </ug-button>
          <ug-menu>
            <ug-menu-item type="checkbox" checked>Web Design</ug-menu-item>
            <ug-menu-item type="checkbox">Web Development</ug-menu-item>
            <ug-menu-item type="checkbox">Marketing</ug-menu-item>
          </ug-menu>
        </ug-dropdown>
      </ug-breadcrumb-item>
      <ug-breadcrumb-item>Our Services</ug-breadcrumb-item>
      <ug-breadcrumb-item>Digital Media</ug-breadcrumb-item>
    </ug-breadcrumb> `;
  }
};

export const WithDropdownsInPrefixOrSuffix: Story = {
  // Story-specific parameters
  parameters: {
    docs: {
      description: {
        story:
          'Alternatively, you can place dropdown menus in a <code>prefix</code> or <code>suffix</code> slot.'
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  },
  render: () => {
    return html`<ug-breadcrumb>
      <ug-breadcrumb-item>Homepage</ug-breadcrumb-item>
      <ug-breadcrumb-item>Our Services</ug-breadcrumb-item>
      <ug-breadcrumb-item>Digital Media</ug-breadcrumb-item>
      <ug-breadcrumb-item>
        Web Design
        <ug-dropdown slot="suffix" hoist>
          <ug-button slot="trigger" size="small" circle>
            <ug-icon label="More options" name="three-dots"></ug-icon>
          </ug-button>
          <ug-menu>
            <ug-menu-item type="checkbox" checked>Web Design</ug-menu-item>
            <ug-menu-item type="checkbox">Web Development</ug-menu-item>
            <ug-menu-item type="checkbox">Marketing</ug-menu-item>
          </ug-menu>
        </ug-dropdown>
      </ug-breadcrumb-item>
    </ug-breadcrumb> `;
  }
};
