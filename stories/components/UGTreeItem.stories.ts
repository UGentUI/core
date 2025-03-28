import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import { action } from '@storybook/addon-actions';
import { userEvent, within } from '@storybook/test';
import '/lib/components/tree-item';
import '/lib/components/tree';
import '/lib/components/checkbox';
import '/lib/components/icon';
import '/lib/components/spinner';
import { UgTreeItem } from '@ugent-ui/core/components/tree-item';
import { UgIcon } from '@ugent-ui/core/components/icon';

const meta: Meta = {
  title: 'Components/TreeItem',
  component: 'tree-item',
  parameters: {
    docs: {
      description: {
        component:
          'A tree item serves as a hierarchical node that lives inside a tree. You can read more about it in [the documentation of a Tree](?path=/docs/components-tree--docs)'
      },
      importSection: true, // Enables the import section
      dependencies: ['icon', 'checkbox', 'spinner']
    }
  },
  argTypes: {
    expanded: {
      control: 'boolean',
      description: 'Expands the tree item',
      defaultValue: false,
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    selected: {
      control: 'boolean',
      description: 'Draws the tree item in a selected state',
      defaultValue: false,
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the tree item',
      defaultValue: false,
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    lazy: {
      control: 'boolean',
      description: 'Enables lazy loading behavior',
      defaultValue: false,
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
        category: 'Properties'
      }
    },
    'expand-icon': {
      control: 'text',
      description: 'The icon to show when the tree item is expanded.',
      table: {
        category: 'Slots'
      }
    },
    'collapse-icon': {
      control: 'text',
      description: 'The icon to show when the tree item is collapsed.',
      table: {
        category: 'Slots'
      }
    },
    ugExpand: {
      control: false,
      name: 'ug-expand',
      action: 'ug-expand',
      description: 'Emitted when the tree item expands.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      }
    },
    ugAfterExpand: {
      control: false,
      name: 'ug-after-expand',
      action: 'ug-after-expand',
      description:
        'Emitted after the tree item expands and all animations are complete.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      }
    },
    ugCollapse: {
      control: false,
      name: 'ug-collapse',
      action: 'ug-collapse',
      description: 'Emitted when the tree item collapses.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      }
    },
    ugAfterCollapse: {
      control: false,
      name: 'ug-after-collapse',
      action: 'ug-after-collapse',
      description:
        'Emitted after the tree item collapses and all animations are complete.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      }
    },
    ugLazyChange: {
      control: false,
      name: 'ug-lazy-change',
      action: 'ug-lazy-change',
      description: 'Emitted when the tree item’s lazy state changes.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      }
    },
    ugLazyLoad: {
      control: false,
      name: 'ug-lazy-load',
      action: 'ug-lazy-load',
      description:
        'Emitted when a lazy item is selected. Use this event to asynchronously load data and append items to the tree before expanding. After appending new items, remove the lazy attribute to remove the loading state and update the tree.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      }
    },
    'getChildrenItems()': {
      getChildrenItems: {
        name: 'getChildrenItems()',
        description: 'Gets all the nested tree items in this node.',
        table: {
          type: {
            summary: 'summary: undefined '
          },
          category: 'Methods',
          defaultValue: {
            summary: undefined
          }
        },
        control: false
      }
    }
  }
};

export default meta;

type Story = StoryObj;

export const DemoTree: Story = {
  render: (args) => {
    return html`
      <ug-tree>
        <ug-tree-item>
          Collapsed
          <ug-tree-item>Item A</ug-tree-item>
          <ug-tree-item>Item B</ug-tree-item>
          <ug-tree-item>Item C</ug-tree-item>
        </ug-tree-item>
        <ug-tree-item expanded>
          Expanded
          <ug-tree-item>Item A</ug-tree-item>
          <ug-tree-item>Item B</ug-tree-item>
          <ug-tree-item>Item C</ug-tree-item>
        </ug-tree-item>
        <ug-tree-item selected>Selected</ug-tree-item>
        <ug-tree-item disabled>Disabled</ug-tree-item>
        <ug-tree-item lazy>Lazy Loading</ug-tree-item>
      </ug-tree>
    `;
  }
};

export const NestedTreeItems: Story = {
  parameters: {
    docs: {
      description: {
        story: `A tree item can contain other tree items. This allows the node to be expanded or collapsed by the user.`
      }
    }
  },
  render: (args) => {
    return html`
      <ug-tree>
        <ug-tree-item>
          Item 1
          <ug-tree-item>
            Item A
            <ug-tree-item>Item Z</ug-tree-item>
            <ug-tree-item>Item Y</ug-tree-item>
            <ug-tree-item>Item X</ug-tree-item>
          </ug-tree-item>
          <ug-tree-item>Item B</ug-tree-item>
          <ug-tree-item>Item C</ug-tree-item>
        </ug-tree-item>
        <ug-tree-item>Item 2</ug-tree-item>
        <ug-tree-item>Item 3</ug-tree-item>
      </ug-tree>
    `;
  }
};

export const SelectedTreeItems: Story = {
  parameters: {
    docs: {
      description: {
        story: `Use the selected attribute to select a tree item initially.`
      }
    }
  },
  render: (args) => {
    return html`
      <ug-tree>
        <ug-tree-item selected>
          Item 1
          <ug-tree-item>Item A</ug-tree-item>
          <ug-tree-item>Item B</ug-tree-item>
          <ug-tree-item>Item C</ug-tree-item>
        </ug-tree-item>
        <ug-tree-item>Item 2</ug-tree-item>
        <ug-tree-item>Item 3</ug-tree-item>
      </ug-tree>
    `;
  }
};

export const ExpandedTreeItems: Story = {
  parameters: {
    docs: {
      description: {
        story: `Use the expanded attribute to expand a tree item initially.`
      }
    }
  },
  render: (args) => {
    return html`
      <ug-tree>
        <ug-tree-item expanded>
          Item 1
          <ug-tree-item expanded>
            Item A
            <ug-tree-item>Item Z</ug-tree-item>
            <ug-tree-item>Item Y</ug-tree-item>
            <ug-tree-item>Item X</ug-tree-item>
          </ug-tree-item>
          <ug-tree-item>Item B</ug-tree-item>
          <ug-tree-item>Item C</ug-tree-item>
        </ug-tree-item>
        <ug-tree-item>Item 2</ug-tree-item>
        <ug-tree-item>Item 3</ug-tree-item>
      </ug-tree>
    `;
  }
};
export const DisabledTreeItems: Story = {
  parameters: {
    docs: {
      description: {
        story: `Use the disabled attribute to expand a tree item initially.`
      }
    }
  },
  render: (args) => {
    return html`
      <ug-tree>
        <ug-tree-item disabled>
          Item 1
          <ug-tree-item disabled>
            Item A
            <ug-tree-item>Item Z</ug-tree-item>
            <ug-tree-item>Item Y</ug-tree-item>
            <ug-tree-item>Item X</ug-tree-item>
          </ug-tree-item>
          <ug-tree-item>Item B</ug-tree-item>
          <ug-tree-item>Item C</ug-tree-item>
        </ug-tree-item>
        <ug-tree-item>
          Item 2
          <ug-tree-item disabled>
            Item A
            <ug-tree-item>Item Z</ug-tree-item>
            <ug-tree-item>Item Y</ug-tree-item>
            <ug-tree-item>Item X</ug-tree-item>
          </ug-tree-item>
          <ug-tree-item>Item B</ug-tree-item>
          <ug-tree-item>Item C</ug-tree-item>
        </ug-tree-item>
        <ug-tree-item>Item 3</ug-tree-item>
      </ug-tree>
    `;
  }
};

export const LazyLoading: Story = {
  ...DemoTree,
  args: {
    ...DemoTree.args
  },
  parameters: {
    docs: {
      description: {
        story: `Use the lazy attribute on a tree item to indicate that the content is not yet present and will be loaded later. When the user tries to expand the node, the loading state is set to true and the ug-lazy-load event will be emitted to allow you to load data asynchronously. The item will remain in a loading state until its content is changed. If you want to disable this behavior after the first load, simply remove the lazy attribute and, on the next expand, the existing content will be shown instead.
                `
      }
    }
  },
  render: (args) => html`
    <p>Click on the arrow to see how the data is loaded</p>
    <ug-tree selection="${args.selection}">
      <ug-tree-item lazy>Available Trees</ug-tree-item>
    </ug-tree>
    <script type="module">
      const lazyItem = document.querySelector('ug-tree-item[lazy]');
      lazyItem.addEventListener('ug-lazy-load', () => {
        // Simulate asynchronous loading
        setTimeout(() => {
          const subItems = ['Birch', 'Cedar', 'Maple', 'Pine'];
          for (const item of subItems) {
            const treeItem = document.createElement('ug-tree-item');
            treeItem.innerText = item;
            lazyItem.append(treeItem);
          }
          // Disable lazy mode once the content has been loaded
          lazyItem.lazy = false;
        }, 2000);
      });
    </script>
  `
};

export const TreeItemWithEvents: Story = {
  render: (args) => html`
    <ug-tree>
      <ug-tree-item id="parent" expanded>
        Parent Item
        <ug-tree-item id="child">Child Item</ug-tree-item>
      </ug-tree-item>
      <ug-tree-item
        lazy
        @ug-expand="${action('ug-expand')}"
        @ug-after-expand="${action('ug-after-expand')}"
        @ug-collapse="${action('ug-collapse')}"
        @ug-after-collapse="${action('ug-after-collapse')}"
        @ug-lazy-change="${action('ug-lazy-change')}"
        @ug-lazy-load="${action('ug-lazy-load')}"
        >Available Trees</ug-tree-item
      >
    </ug-tree>
  `,
  play: async ({ canvasElement }) => {
    const lazyItem: UgTreeItem = document.querySelector('ug-tree-item[lazy]')!;
    lazyItem.addEventListener('ug-lazy-load', () => {
      // Simulate asynchronous loading
      setTimeout(() => {
        const subItems = ['Birch', 'Cedar', 'Maple', 'Pine'];
        for (const item of subItems) {
          const treeItem = document.createElement('ug-tree-item');
          treeItem.innerText = item;
          lazyItem.append(treeItem);
        }
        // Disable lazy mode once the content has been loaded
        lazyItem.lazy = false;
      }, 2000);
    });

    await new Promise((resolve) => setTimeout(resolve, 100));

    const canvas = within(canvasElement);
    const parentItem = await canvas.getByText('Parent Item');
    const expandIcon: UgIcon = parentItem
      .closest('ug-tree-item')
      ?.shadowRoot?.querySelector('ug-icon')!;

    // Simulate collapsing the parent item
    await userEvent.click(expandIcon);

    await new Promise((resolve) => setTimeout(resolve, 100));

    // Simulate expanding the parent item again
    await userEvent.click(expandIcon);

    const lazyExpandIcon: UgIcon = (await canvas.getByText('Available Trees'))
      .closest('ug-tree-item')
      ?.shadowRoot?.querySelector('ug-icon')!;

    await new Promise((resolve) => setTimeout(resolve, 100));

    //Simulate clicking on lazy item
    await userEvent.click(lazyExpandIcon);

    await new Promise((resolve) => setTimeout(resolve, 100));

    //Close lazy item
    await userEvent.click(lazyExpandIcon);
  }
};
