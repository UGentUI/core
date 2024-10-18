import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import "/lib/components/menu";
import "/lib/components/menu-item";
import "/lib/components/menu-label";
import "/lib/components/divider";

const meta: Meta = {
  title: "Components/MenuItem",
  component: "ug-menu-item",
};

export default meta;

type Story = StoryObj;

export const MenuItem: Story = {
  render: (args) => {
    return html`<ug-menu style="max-width: 200px;">
      <ug-menu-item>Option 1</ug-menu-item>
      <ug-menu-item>Option 2</ug-menu-item>
      <ug-menu-item>Option 3</ug-menu-item>
      <ug-divider></ug-divider>
      <ug-menu-item type="checkbox" checked>Checkbox</ug-menu-item>
      <ug-menu-item disabled>Disabled</ug-menu-item>
      <ug-divider></ug-divider>
      <ug-menu-item>
        Prefix Icon
        <ug-icon slot="prefix" name="gift"></ug-icon>
      </ug-menu-item>
      <ug-menu-item>
        Suffix Icon
        <ug-icon slot="suffix" name="heart"></ug-icon>
      </ug-menu-item>
    </ug-menu>`;
  },
};
