import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import "/lib/components/tree";

const meta: Meta = {
  title: "Components/Tree",
  component: "ug-tree",
};

export default meta;

type Story = StoryObj;

export const Tree: Story = {
  render: (args) => {
    return html`<ug-tree>
  <ug-tree-item>
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
</sl-tree>
`;
  },
};
