import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/menu';
import '/lib/components/menu-item';
import '/lib/components/menu-label';
import '/lib/components/divider';
import '/lib/components/icon';
import '/lib/components/popup';
import '/lib/components/badge';
import { userEvent, within } from '@storybook/test';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Components/MenuItem',
  component: 'ug-menu-item',

  parameters: {
    docs: {
      description: {
        component:
          'Menu items provide options for the user to pick from in a [menu](?path=/docs/components-menu--docs). You can sort them with [menu labels](?path=/docs/components-menulabel--docs).'
      },
      source: {
        format: true,
        transform: (code: string) => {
          // Remove empty/default attributes and replace boolean attributes from the source code display
          return code
            .replace(/\s(type="normal")/g, '')
            .replace(/\s* closable=""/g, ' closable');
        }
      }
    }
  },

  //Decorators are needed for submenu popups, otherwise the hoist is wrong
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

  argTypes: {
    type: {
      description:
        'The type of menu item to render. To use <code>checked</code>, this value must be set to <code>checkbox</code>.',
      control: { type: 'select' },
      options: ['normal', 'checkbox'],
      table: {
        category: 'Properties',
        type: { summary: "'normal' | 'checkbox'" },
        defaultValue: { summary: 'normal' }
      }
    },
    checked: {
      description: 'Draws the item in a checked state.<br>`reflects: true`',
      control: { type: 'boolean' },
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    value: {
      description:
        'A unique value to store in the menu item. This can be used as a way to identify menu items when selected.',
      control: { type: 'text' },
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    loading: {
      description:
        'Draws the menu item in a loading state.<br>`reflects: true`',
      control: { type: 'boolean' },
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    disabled: {
      description:
        'Draws the menu item in a disabled state, preventing selection.<br>`reflects: true`',
      control: { type: 'boolean' },
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
        defaultValue: { summary: 'undefined' }
      }
    },
    //Slots

    defaultSlot: {
      control: 'text',
      name: '(default)',
      description: 'The menu item’s label.',
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
    prefixSlot: {
      control: 'check',
      options: ['Icon'],
      name: 'prefix',
      description:
        'Used to prepend an icon or similar element to the menu item. This slot allows for additional visual elements before the label.',
      table: {
        category: 'Slots',
        type: {
          summary: 'slot'
        },
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    suffixSlot: {
      control: 'check',
      options: ['Icon'],
      name: 'suffix',
      description:
        'Used to append an icon or similar element to the menu item. This slot allows for additional visual elements after the label.',
      table: {
        category: 'Slots',
        type: {
          summary: 'slot'
        },
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    submenuSlot: {
      control: 'check',
      options: ['Submenu'],
      name: 'submenu',
      description:
        'Used to denote a nested menu. This slot determines if the menu item contains a submenu or not.',
      table: {
        category: 'Slots',
        type: {
          summary: 'slot'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    getTextLabel: {
      control: false,
      name: 'getTextLabel()',
      description:
        'Returns a text label based on the contents of the menu item’s default slot.',
      table: {
        category: 'Methods',
        type: {
          summary: '() => void'
        },
        defaultValue: {
          summary: undefined
        }
      }
    }
  }
};

export default meta;

type Story = StoryObj;

export const MenuItem: Story = {
  args: {
    type: 'normal',
    checked: false,
    value: '',
    loading: false,
    disabled: false,
    defaultSlot: 'Option 1'
  },
  render: (args) => {
    return html`<ug-menu style="max-width: 200px;">
      <ug-menu-item
        type="${args.type}"
        ?checked="${args.checked}"
        value="${args.value}"
        ?loading="${args.loading}"
        ?disabled="${args.disabled}"
      >
        ${args.prefixSlot == 'Icon'
          ? html`<ug-icon span="prefix" name="1-square"></ug-icon>`
          : ''}
        ${args.defaultSlot}
        ${args.suffixSlot == 'Icon'
          ? html`<ug-icon span="suffix" name="star"></ug-icon>`
          : ''}
        ${args.submenuSlot == 'Submenu'
          ? html`<ug-menu style="max-width: 200px;" slot="submenu">
              <ug-menu-item>Option 1</ug-menu-item>
              <ug-menu-item>Option 2</ug-menu-item>
              <ug-menu-item>Option 3</ug-menu-item>
            </ug-menu>`
          : ''}
      </ug-menu-item>
    </ug-menu> `;
  }
};

//Ik ben niet helemaal zeker welk van deze 2 aapakken beter is, dus ik wil ze graag allebei voorleggen
//Maar ik geloof meer in de eerste. Ik denk wel dat de eerste en de AllFunctionality story houden een meerwaarde heeft
//Deze is nogal incompleet
export const MenuItem2: Story = {
  // Story-specific parameters
  parameters: {
    docs: {
      description: {
        story:
          'This example showcases all the different properties in a menu. You can see a disabled item, an item with a checkbox, an item with a prefix, an item with a suffix and an item with a submenu.'
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  },
  args: {
    type: 'normal',
    checked: false,
    value: '',
    loading: false,
    disabled: false,
    defaultSlot: 'Option 1'
  },
  render: (args) => {
    return html`<ug-menu style="max-width: 200px;">
      <ug-menu-item>Option 1</ug-menu-item>
      <ug-menu-item>Option 2</ug-menu-item>
      <ug-menu-item>Option 3</ug-menu-item>
      <ug-divider></ug-divider>
      <ug-menu-item type="checkbox" ?checked="${args.checked}"
        >Checkbox</ug-menu-item
      >
      <ug-menu-item ?disabled="${args.disabled}">Disabled</ug-menu-item>
      <ug-menu-item ?loading="${args.loading}">Loading</ug-menu-item>
      <ug-divider></ug-divider>
      <ug-menu-item>
        Prefix Icon
        ${args.prefixSlot == 'Icon'
          ? html`<ug-icon span="prefix" name="gift"></ug-icon>`
          : ''}
      </ug-menu-item>
      <ug-menu-item>
        Suffix Icon
        ${args.suffixSlot == 'Icon'
          ? html`<ug-icon span="suffix" name="heart"></ug-icon>`
          : ''}
      </ug-menu-item>
      <ug-menu-item
        >Submenu
        ${args.submenuSlot == 'Submenu'
          ? html`<ug-menu style="max-width: 200px;" slot="submenu">
              <ug-menu-item>Option 1</ug-menu-item>
              <ug-menu-item>Option 2</ug-menu-item>
              <ug-menu-item>Option 3</ug-menu-item>
            </ug-menu>`
          : ''}
      </ug-menu-item>
    </ug-menu>`;
  }
};

export const AllFunctionality: Story = {
  // Story-specific parameters
  parameters: {
    docs: {
      description: {
        story:
          'This example showcases all the different properties in a menu. You can see a disabled item, an item with a checkbox, an item with a prefix, an item with a suffix and an item with a submenu.'
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  },
  render: () => {
    return html`<ug-menu style="max-width: 200px;">
      <ug-menu-item>Option 1</ug-menu-item>
      <ug-menu-item>Option 2</ug-menu-item>
      <ug-menu-item>Option 3</ug-menu-item>
      <ug-divider></ug-divider>
      <ug-menu-item type="checkbox" checked>Checkbox</ug-menu-item>
      <ug-menu-item disabled>Disabled</ug-menu-item>
      <ug-menu-item loading>Loading</ug-menu-item>
      <ug-divider></ug-divider>
      <ug-menu-item>
        Prefix Icon
        <ug-icon slot="prefix" name="gift"></ug-icon>
      </ug-menu-item>
      <ug-menu-item>
        Suffix Icon
        <ug-icon slot="suffix" name="heart"></ug-icon>
      </ug-menu-item>
      <ug-menu-item>
        Submenu
        <ug-menu style="max-width: 200px;" slot="submenu">
          <ug-menu-item>Option 1</ug-menu-item>
          <ug-menu-item>Option 2</ug-menu-item>
          <ug-menu-item>Option 3</ug-menu-item>
        </ug-menu>
      </ug-menu-item>
    </ug-menu>`;
  }
};

export const PrefixAndSuffix: Story = {
  // Story-specific parameters
  parameters: {
    docs: {
      description: {
        story:
          'Add content to the start and end of menu items using the <code>prefix</code> and <code>suffix</code> slots.'
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  },
  render: () => {
    return html`<ug-menu style="max-width: 200px;">
      <ug-menu-item>
        <ug-icon slot="prefix" name="house"></ug-icon>
        Home
      </ug-menu-item>

      <ug-menu-item>
        <ug-icon slot="prefix" name="envelope"></ug-icon>
        Messages
        <ug-badge slot="suffix" variant="primary" pill>12</ug-badge>
      </ug-menu-item>

      <ug-divider></ug-divider>

      <ug-menu-item>
        <ug-icon slot="prefix" name="gear"></ug-icon>
        Settings
      </ug-menu-item>
    </ug-menu>`;
  }
};

export const Disabled: Story = {
  // Story-specific parameters
  parameters: {
    docs: {
      description: {
        story:
          'Add the <code>disabled</code> attribute to disable the menu item so it cannot be selected.'
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  },
  render: () => {
    return html`
      <ug-menu style="max-width: 200px;">
        <ug-menu-item>Option 1</ug-menu-item>
        <ug-menu-item disabled>Option 2</ug-menu-item>
        <ug-menu-item>Option 3</ug-menu-item>
      </ug-menu>
    `;
  }
};

export const Loading: Story = {
  // Story-specific parameters
  parameters: {
    docs: {
      description: {
        story:
          'Use the <code>loading</code> attribute to indicate that a menu item is busy. Like a disabled menu item, clicks will be suppressed until the loading state is removed.'
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  },
  render: () => {
    return html`
      <ug-menu style="max-width: 200px;">
        <ug-menu-item>Option 1</ug-menu-item>
        <ug-menu-item loading>Option 2</ug-menu-item>
        <ug-menu-item>Option 3</ug-menu-item>
      </ug-menu>
    `;
  }
};

export const CheckboxMenuItems: Story = {
  // Story-specific parameters
  parameters: {
    docs: {
      description: {
        story: `Set the <code>type</code> attribute to <code>checkbox</code> to create a menu item that will toggle on and off when selected. You can use the <code>checked</code> attribute to set the initial state.

Checkbox menu items are visually indistinguishable from regular menu items. Their ability to be toggled is primarily inferred from context, much like you’d find in the menu of a native app.`
      }
    },
    controls: { disable: true }
  },
  render: () => {
    return html`<ug-menu style="max-width: 200px;">
      <ug-menu-item type="checkbox">Autosave</ug-menu-item>
      <ug-menu-item type="checkbox" checked>Check Spelling</ug-menu-item>
      <ug-menu-item type="checkbox">Word Wrap</ug-menu-item>
    </ug-menu> `;
  }
};

export const ValueAndSelection: Story = {
  // Story-specific parameters
  parameters: {
    docs: {
      description: {
        story: `The <code>value</code> attribute can be used to assign a hidden value, such as a unique identifier, to a menu item. When an item is selected, the <code>ug-select</code> event will be emitted and a reference to the item will be available at <code>event.detail.item</code>. You can use this reference to access the selected item’s value, its checked state, and more.`
      }
    },
    controls: { disable: true }
  },
  render: () => {
    return html`<ug-menu class="menu-value" style="max-width: 200px;">
        <ug-menu-item value="opt-1">Option 1</ug-menu-item>
        <ug-menu-item value="opt-2">Option 2</ug-menu-item>
        <ug-menu-item value="opt-3">Option 3</ug-menu-item>
        <ug-divider></ug-divider>
        <ug-menu-item type="checkbox" value="opt-4">Checkbox 4</ug-menu-item>
        <ug-menu-item type="checkbox" value="opt-5">Checkbox 5</ug-menu-item>
        <ug-menu-item type="checkbox" value="opt-6">Checkbox 6</ug-menu-item>
      </ug-menu>

      <script>
        const menu = document.querySelector('.menu-value');

        menu.addEventListener('ug-select', (event) => {
          const item = event.detail.item;

          // Log value
          if (item.type === 'checkbox') {
            alert(
              \`Selected value: \${item.value} (\${item.checked ? 'checked' : 'unchecked'})\`
            );
          } else {
            alert(\`Selected value: \${item.value}\`);
          }
        });
      </script> `;
  }
};

export const MenuItemWithEvents: Story = {
  // Story-specific parameters
  parameters: {
    docs: {
      description: {
        story: `The <code>value</code> attribute can be used to assign a hidden value, such as a unique identifier, to a menu item. When an item is selected, the <code>ug-select</code> event will be emitted and a reference to the item will be available at <code>event.detail.item</code>. You can use this reference to access the selected item’s value, its checked state, and more.`
      }
    },
    controls: { disable: true }
  },
  render: () => {
    return html`<ug-menu
      class="menu-value"
      style="max-width: 200px;"
      @ug-select="${action('ug-select')}"
    >
      <ug-menu-item value="opt-1">Option 1</ug-menu-item>
      <ug-menu-item value="opt-2">Option 2</ug-menu-item>
      <ug-menu-item value="opt-3">Option 3</ug-menu-item>
      <ug-divider></ug-divider>
      <ug-menu-item type="checkbox" value="opt-4">Checkbox 4</ug-menu-item>
      <ug-menu-item type="checkbox" value="opt-5">Checkbox 5</ug-menu-item>
      <ug-menu-item type="checkbox" value="opt-6">Checkbox 6</ug-menu-item>
    </ug-menu>`;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Select a menu item
    const menuItem = await canvas.findByText('Option 2');
    await userEvent.click(menuItem);

    // Ensure checkbox toggling works
    const checkboxItem = await canvas.findByText('Checkbox 4');
    await userEvent.click(checkboxItem);
    await userEvent.click(checkboxItem); // Toggle off
  }
};
