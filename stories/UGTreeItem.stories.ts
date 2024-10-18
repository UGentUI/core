import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import "/lib/components/tree-item";

const meta: Meta = {
  title: "Components/TreeItem",
  component: "ug-tree-item",
};

export default meta;

type Story = StoryObj;

export const TreeItem: Story = {
  render: (args) => {
    return html`<ug-tree>
      <ug-tree-item>
        Item 1
        <ug-tree-item>Item A</ug-tree-item>
        <ug-tree-item>Item B</ug-tree-item>
        <ug-tree-item>Item C</ug-tree-item>
      </ug-tree-item>
      <ug-tree-item>Item 2</ug-tree-item>
      <ug-tree-item>Item 3</ug-tree-item>
    </ug-tree> `;
  },
};
