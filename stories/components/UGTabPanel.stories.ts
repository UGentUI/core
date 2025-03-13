import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/tab-panel';
import '/lib/components/tab';
import '/lib/components/tab-group';
import '/lib/components/icon-button';
import '/lib/components/icon';

const meta: Meta = {
  title: 'Components/TabPanel',
  component: 'tab-panel',

  parameters: {
    docs: {
      description: {
        component:
          'Tabs are used inside [tab groups](?path=/docs/components-tabgroup--docs) to display tabbed content.'
      },
      importSection: true // Enables the import section
    }
  },

  argTypes: {
    name: {
      description: 'The tab panel’s name. <br>`reflects: true`',
      control: 'text',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    active: {
      description:
        'When true, the tab panel will be shown. You cannot set this property on the panel, you must set it on the tab<br>`reflects: true`',
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
      control: { disable: true },
      table: {
        category: 'Properties',
        type: { summary: 'Promise<void>' },
        defaultValue: { summary: 'N/A (read-only)' }
      }
    },
    defaultSlot: {
      name: '(default)',
      description: 'The tab panel’s content.',
      table: {
        category: 'Slot ',
        type: { summary: 'HTML' },
        defaultValue: { summary: 'None' }
      },
      control: { type: 'text' }
    }
  }
};

export default meta;

type Story = StoryObj;

export const TabPanel: Story = {
  args: {
    name: '',
    active: false,
    defaultSlot: 'This is the content of Tab 1.'
  },
  render: (args) => html`
    <ug-tab-group>
      <ug-tab slot="nav" panel="${args.name}">Tab 1</ug-tab>
      <ug-tab-panel name="${args.name}" ?active="${args.active}">
        ${args.defaultSlot}
      </ug-tab-panel>
    </ug-tab-group>
  `
};

export const TabPanelInGroup: Story = {
  render: () => {
    return html`<ug-tab-group>
      <ug-tab slot="nav" panel="general">General</ug-tab>
      <ug-tab slot="nav" panel="custom" active="true">Custom</ug-tab>
      <ug-tab slot="nav" panel="advanced" active="true">Advanced</ug-tab>
      <ug-tab slot="nav" panel="disabled" disabled>Disabled</ug-tab>

      <ug-tab-panel name="general">This is the general tab panel.</ug-tab-panel>
      <ug-tab-panel name="custom">This is the custom tab panel.</ug-tab-panel>
      <ug-tab-panel name="advanced" active="true"
        >This is the advanced tab panel.</ug-tab-panel
      >
      <ug-tab-panel name="disabled">This is a disabled tab panel.</ug-tab-panel>
    </ug-tab-group> `;
  }
};
