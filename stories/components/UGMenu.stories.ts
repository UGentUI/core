import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/menu';
import '/lib/components/menu-item';
import '/lib/components/menu-label';
import '/lib/components/divider';

const meta: Meta = {
  title: 'Components/Menu',
  component: 'menu',

  parameters: {
    docs: {
      subtitle: 'Menus provide a list of options for the user to choose from.',
      description: {
        component: `You can use [menu items](path=/docs/components-menuitem--docs), [menu labels](?path=/docs/components-menulabel--docs), and [dividers](?path=/docs/components-divider--docs) to compose a menu. Menus support keyboard interactions, including type-to-select an option.
          
Menus are intended for system menus (dropdown menus, select menus, context menus, etc.). They should not be mistaken for navigation menus which serve a different purpose and have a different semantic meaning. If you’re building navigation, use <code><nav></code> and <code><a></code> elements instead.`
      },
      source: {
        format: true
      },
      importSection: true // Enables the import section
    }
  },
  argTypes: {
    defaultSlot: {
      control: 'text',
      name: '(default)',
      description:
        'The menu’s content, including menu items, menu labels, and dividers.',
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
    'ug-select': {
      description: 'Emitted when a menu item is selected.',
      action: 'ug-select',
      table: {
        category: 'Events',
        type: {
          summary: 'CustomEvent<{ item: UgMenuItem }>'
        },
        defaultValue: { summary: undefined }
      },
      control: false
    }
  }
};

export default meta;

type Story = StoryObj;

export const Menu: Story = {
  render: () => {
    return html`<ug-menu style="max-width: 200px;">
      <ug-menu-item value="undo">Undo</ug-menu-item>
      <ug-menu-item value="redo">Redo</ug-menu-item>
      <ug-divider></ug-divider>
      <ug-menu-item value="cut">Cut</ug-menu-item>
      <ug-menu-item value="copy">Copy</ug-menu-item>
      <ug-menu-item value="paste">Paste</ug-menu-item>
      <ug-menu-item value="delete">Delete</ug-menu-item>
    </ug-menu>`;
  }
};

export const InDropdown: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Menus work really well when used inside [dropdowns](?path=/docs/components-dropdown--docs).'
      }
    }
  },
  render: () => {
    return html`<ug-dropdown>
      <ug-button slot="trigger" caret>Edit</ug-button>
      <ug-menu>
        <ug-menu-item value="cut">Cut</ug-menu-item>
        <ug-menu-item value="copy">Copy</ug-menu-item>
        <ug-menu-item value="paste">Paste</ug-menu-item>
      </ug-menu>
    </ug-dropdown>`;
  }
};
export const MenuWithDivider: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'You can use [deviders](?path=/docs/components-divider--docs) within a menu to create more structure.'
      }
    }
  },
  render: () => {
    return html` <ug-menu>
      <ug-menu-item value="cut">Cut</ug-menu-item>
      <ug-menu-item value="copy">Copy</ug-menu-item>
      <ug-divider></ug-divider>
      <ug-menu-item value="paste">Paste</ug-menu-item>
    </ug-menu>`;
  }
};

export const Submenus: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'To create a submenu, nest an <code><ug-menu slot="submenu"></code> in any [menu item](?path=/docs/components-menuitem--docs). As a UX best practice, avoid using more than one level of submenus when possible.'
      }
    }
  },
  render: () => {
    return html`<ug-menu style="max-width: 200px;">
      <ug-menu-item value="undo">Undo</ug-menu-item>
      <ug-menu-item value="redo">Redo</ug-menu-item>
      <ug-divider></ug-divider>
      <ug-menu-item value="cut">Cut</ug-menu-item>
      <ug-menu-item value="copy">Copy</ug-menu-item>
      <ug-menu-item value="paste">Paste</ug-menu-item>
      <ug-divider></ug-divider>
      <ug-menu-item>
        Find
        <ug-menu slot="submenu">
          <ug-menu-item value="find">Find…</ug-menu-item>
          <ug-menu-item value="find-previous">Find Next</ug-menu-item>
          <ug-menu-item value="find-next">Find Previous</ug-menu-item>
        </ug-menu>
      </ug-menu-item>
      <ug-menu-item>
        Transformations
        <ug-menu slot="submenu">
          <ug-menu-item value="uppercase">Make uppercase</ug-menu-item>
          <ug-menu-item value="lowercase">Make lowercase</ug-menu-item>
          <ug-menu-item value="capitalize">Capitalize</ug-menu-item>
        </ug-menu>
      </ug-menu-item>
    </ug-menu> `;
  }
};
