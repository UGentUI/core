import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/tree-item';
import '/lib/components/checkbox';
import '/lib/components/icon';
import '/lib/components/spinner';

const meta: Meta = {
  title: 'Components/TreeItem',
  component: 'tree-item',
  parameters: {
    docs: {
      subtitle:
        'A tree item serves as a hierarchical node that lives inside a tree. You can read more about it in [the documentation of a Tree](?path=/docs/components-tree--docs)',
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
