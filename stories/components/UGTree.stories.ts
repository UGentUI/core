import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/tree';
import '/lib/components/tree-item';
import '/lib/components/icon';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

const meta: Meta = {
  title: 'Components/Tree',
  component: 'ug-tree',
  parameters: {
    docs: {
      subtitle:
        "Trees allow you to display a hierarchical list of selectable [tree items](./components-treeitem--docs). Items with children can be expanded and collapsed as desired by the user. TODO: If this page doesn't load, please try going to a story and then back to docs"
    }
  },

  argTypes: {
    // Properties
    selection: {
      control: 'select',
      description:
        'The selection behavior of the tree. Single selection allows only one node to be selected at a time. Multiple displays checkboxes and allows more than one node to be selected. Leaf allows only leaf nodes to be selected.',
      options: ['single', 'multiple', 'leaf'],
      defaultValue: {
        summary: 'single'
      },
      table: {
        category: 'Properties'
      }
    },
    updateComplete: {
      description:
        'A read-only promise that resolves when the component has finished updating.',

      table: {
        category: 'Properties'
      }
    },

    //Slots
    expandIconSlot: {
      control: 'text',
      description:
        'The icon displayed when the tree item is expanded. Works best with `<sl-icon>`.',
      table: {
        category: 'Slots'
      }
    },
    collapseIconSlot: {
      control: 'text',
      description:
        'The icon displayed when the tree item is collapsed. Works best with `<sl-icon>`.',
      table: {
        category: 'Slots'
      }
    }
  }
};

export default meta;

type Story = StoryObj;

export const MinimalTree: Story = {
  render: (args) => {
    return html` <ug-tree> ${renderBaseTreeContents(args)} </ug-tree> `;
  }
};

export const FullFeatureTree: Story = {
  args: {
    selection: 'single',

    expandIconSlot: "<ug-icon name='chevron-down'></ug-icon>",
    collapseIconSlot: "<ug-icon name='chevron-right'></ug-icon>"
  },
  render: (args) => {
    return html`
      <ug-tree selection="${args.selection}">
        <div slot="expand-icon">${unsafeHTML(args.expandIconSlot)}</div>
        <div slot="collapse-icon">${unsafeHTML(args.collapseIconSlot)}</div>
        ${renderBaseTreeContents(args)}
      </ug-tree>
    `;
  }
};

// Utility function for rendering the base tree structure
const renderBaseTreeContents = (args: any) => html`
  <ug-tree-item aria-expanded="true" expanded>
    Deciduous
    <ug-tree-item>Birch</ug-tree-item>
    <ug-tree-item>
      Maple
      <ug-tree-item>Field maple</ug-tree-item>
      <ug-tree-item>Red maple</ug-tree-item>
      <ug-tree-item>Sugar maple</ug-tree-item>
    </ug-tree-item>
    <ug-tree-item>Oak</ug-tree-item>
  </ug-tree-item>

  <ug-tree-item>
    Coniferous
    <ug-tree-item>Cedar</ug-tree-item>
    <ug-tree-item>Pine</ug-tree-item>
    <ug-tree-item>Spruce</ug-tree-item>
  </ug-tree-item>

  <ug-tree-item>
    Non-trees
    <ug-tree-item>Bamboo</ug-tree-item>
    <ug-tree-item>Cactus</ug-tree-item>
    <ug-tree-item>Fern</ug-tree-item>
  </ug-tree-item>

  <ug-tree-item lazy>Forever Loading Lazy Item</ug-tree-item>
`;

export const SelectionModes: Story = {
  args: {
    selection: 'single'
  },
  parameters: {
    controls: { selection: true },
    docs: {
      disable: true,
      description: {
        story: `The selection attribute lets you change the selection behavior of the tree.`
      }
    }
  },
  render: (args) => {
    return html`
      <ug-tree selection="${args.selection}">
        ${renderBaseTreeContents(args)}
      </ug-tree>
    `;
  }
};

export const SingleSelectionMode: Story = {
  ...SelectionModes,
  args: {
    ...SelectionModes.args,
    selection: 'single'
  },
  parameters: {
    controls: { selection: true },
    docs: {
      description: {
        story: `Use single to allow the selection of a single item (default).`
      }
    }
  }
};

export const MultipleSelectionMode: Story = {
  ...SelectionModes,
  args: {
    ...SelectionModes.args,
    selection: 'multiple'
  },
  parameters: {
    controls: { selection: true },
    docs: {
      description: {
        story: `Use multiple to allow the selection of multiple items.`
      }
    }
  }
};

export const LeafSelectionMode: Story = {
  ...SelectionModes,
  args: {
    ...SelectionModes.args,
    selection: 'leaf'
  },
  parameters: {
    controls: { selection: true },
    docs: {
      description: {
        story: `Use leaf to only allow leaf nodes to be selected.`
      }
    }
  }
};

export const LazyLoading: Story = {
  ...FullFeatureTree,
  args: {
    ...FullFeatureTree.args
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

export const SignIcons: Story = {
  ...FullFeatureTree,
  args: {
    ...FullFeatureTree.args
  },
  parameters: {
    docs: {
      description: {
        story: `Use the expand-icon and collapse-icon slots to change the expand and collapse icons, respectively. To disable the animation, override the rotate property on the expand-button part.`
      }
    },
    controls: { disable: true }
  },
  render: (args) => html`
    <ug-tree class="custom-icons">
      <ug-icon name="plus-square" slot="expand-icon"></ug-icon>
      <ug-icon name="dash-square" slot="collapse-icon"></ug-icon>
      ${renderBaseTreeContents(args)}
    </ug-tree>
    <style>
      ug-tree-item::part(expand-button) {
        /* Disable the expand/collapse animation */
        rotate: none;
      }
    </style>
  `
};

export const FolderIcons: Story = {
  ...FullFeatureTree,
  args: {
    ...FullFeatureTree.args
  },
  parameters: {
    docs: {
      description: {
        story: `Use the expand-icon and collapse-icon slots to change the expand and collapse icons, respectively. To disable the animation, override the rotate property on the expand-button part.`
      }
    },
    controls: { disable: true }
  },
  render: (args) => html`
    <ug-tree class="tree-with-icons">
      <ug-tree-item expanded>
        <ug-icon name="folder"></ug-icon>
        Documents

        <ug-tree-item>
          <ug-icon name="folder"> </ug-icon>
          Photos
          <ug-tree-item>
            <ug-icon name="image"></ug-icon>
            birds.jpg
          </ug-tree-item>
          <ug-tree-item>
            <ug-icon name="image"></ug-icon>
            kitten.jpg
          </ug-tree-item>
          <ug-tree-item>
            <ug-icon name="image"></ug-icon>
            puppy.jpg
          </ug-tree-item>
        </ug-tree-item>

        <ug-tree-item>
          <ug-icon name="folder"></ug-icon>
          Writing
          <ug-tree-item>
            <ug-icon name="file"></ug-icon>
            draft.txt
          </ug-tree-item>
          <ug-tree-item>
            <ug-icon name="file-pdf"></ug-icon>
            final.pdf
          </ug-tree-item>
          <ug-tree-item>
            <ug-icon name="file-bar-graph"></ug-icon>
            sales.xls
          </ug-tree-item>
        </ug-tree-item>
      </ug-tree-item>
    </ug-tree>
  `
};

export const DisableRotationAnimation: Story = {
  ...FullFeatureTree,
  args: {
    ...FullFeatureTree.args
  },
  parameters: {
    docs: {
      description: {
        story: `To disable the rotation animation of the icon, override the rotate property on the expand-button part.`
      }
    },
    controls: { disable: true }
  },
  render: (args) => {
    return html`
      <ug-tree selection="${args.selection}">
        ${renderBaseTreeContents(args)}
      </ug-tree>
      <style>
        ug-tree-item::part(expand-button) {
          /* Disable the expand/collapse animation */
          rotate: none;
        }
      </style>
    `;
  }
};
