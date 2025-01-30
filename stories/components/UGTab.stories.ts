import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/tab';
import '/lib/components/icon-button';
import { action } from '@storybook/addon-actions';
import { userEvent, within } from '@storybook/test';

const meta: Meta = {
  title: 'Components/Tab',
  component: 'ug-tab',

  parameters: {
    docs: {
      description: {
        component:
          'Tabs are used inside [tab groups](?path=/docs/components-tabgroup--docs) to represent and activate [tab panels](?path=/docs/components-tabpanel--docs).'
      },
      source: {
        format: true,
        transform: (code: string) => {
          // Remove empty/default attributes and replace boolean attributes from the source code display
          return (
            code
              //.replace(/\s(default-attribute="value")/g, '')
              .replace(/\s* closable=""/g, ' closable')
          );
        }
      }
    }
  },

  argTypes: {
    panel: {
      description:
        'The name of the tab panel this tab is associated with. The panel must be located in the same tab group.<br>`reflects: true`',
      control: { type: 'text' }, // Input text box
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    active: {
      description: 'Draws the tab in an active state.<br>`reflects: true`',
      control: { type: 'boolean' }, // Toggle switch
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    closable: {
      description:
        'Makes the tab closable and shows a close button.<br>`reflects: true`',
      control: { type: 'boolean' }, // Toggle switch
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    disabled: {
      description:
        'Disables the tab and prevents selection.<br>`reflects: true`',
      control: { type: 'boolean' }, // Toggle switch
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    updateComplete: {
      description:
        'A read-only promise that resolves when the component has finished updating.',
      control: false, // Read-only, so no control
      table: {
        type: { summary: 'Promise<void>' }
      }
    },
    defaultSlot: {
      name: 'default',
      description: 'The tab’s label.',
      table: {
        type: { summary: 'HTML' },
        defaultValue: { summary: 'None' }
      },
      control: { type: 'text' }
    },
    'ug-close': {
      name: 'ug-close',
      description:
        'Emitted when the tab is closable and the close button is activated.',
      table: {
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: '-' }
      },
      action: 'ug-close',
      control: false
    }
  }
};

export default meta;

type Story = StoryObj;

export const Tab: Story = {
  args: {
    panel: '',
    active: false,
    closable: false,
    disabled: false,
    defaultSlot: 'Tab Title'
  },
  //prettier-ignore
  render: (args) => {
    return html`<ug-tab
      panel="${args.panel}"
      ?active="${args.active}"
      ?closable="${args.closable}"
      ?disabled="${args.disabled}"
      >${args.defaultSlot}</ug-tab>`;
  }
};

export const Closable: Story = {
  ...Tab,
  args: {
    ...Tab.args,
    closable: true
  },
  parameters: {
    docs: {
      description: {
        story: `You can make the tab closable by adding the <code>closable</code> tag`
      }
    }
  }
};

export const Disabled: Story = {
  ...Tab,
  args: {
    ...Tab.args,
    disable: true
  },
  parameters: {
    docs: {
      description: {
        story: `You can disable the tab by adding the <code>disabled</code> tag`
      }
    }
  }
};

export const Active: Story = {
  ...Tab,
  args: {
    ...Tab.args,
    active: true
  },
  parameters: {
    docs: {
      description: {
        story: `You can make the tab active by adding the <code>active</code> tag`
      }
    }
  }
};

export const TabWithEvents: Story = {
  tags: ['!autodocs'],
  args: {
    panel: '',
    active: false,
    closable: true,
    disabled: false,
    defaultSlot: 'Tab Title'
  },
  render: (args) => {
    return html` <ug-tab
      @ug-close="${action('ug-close')}"
      panel="${args.panel}"
      ?active="${args.active}"
      ?closable="${args.closable}"
      ?disabled="${args.disabled}"
      >${args.defaultSlot}
    </ug-tab>`;
  },
  play: async ({ canvasElement }) => {
    const tab = canvasElement.querySelector('ug-tab');
    const iconButton = tab!.shadowRoot!.querySelector('ug-icon-button');
    const closeButton = iconButton!.shadowRoot!.querySelector('button');

    // Wait for the validation message to appear
    await new Promise((resolve) => setTimeout(resolve, 500));

    await userEvent.click(closeButton!);

    await userEvent.click(tab!);

    await userEvent.hover(tab!);
  }
};
