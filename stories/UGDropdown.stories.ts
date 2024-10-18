import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import "/lib/components/dropdown";
import "/lib/components/button";
import "/lib/components/menu";
import "/lib/components/menu-item";
import "/lib/components/divider";

const meta: Meta = {
  title: "Components/Dropdown",
  component: "ug-dropdown",
};

export default meta;

type Story = StoryObj;

export const Dropdown: Story = {
  render: (args) => {
    return html`<ug-dropdown>
      <ug-button slot="trigger" caret>Dropdown</ug-button>
      <ug-menu>
        <ug-menu-item>Dropdown Item 1</ug-menu-item>
        <ug-menu-item>Dropdown Item 2</ug-menu-item>
        <ug-menu-item>Dropdown Item 3</ug-menu-item>
        <ug-divider></ug-divider>
        <ug-menu-item type="checkbox" checked>Checkbox</ug-menu-item>
        <ug-menu-item disabled>Disabled</ug-menu-item>
        <ug-divider></ug-divider>
        <ug-menu-item>
          Prefix
          <ug-icon slot="prefix" name="gift"></ug-icon>
        </ug-menu-item>
        <ug-menu-item>
          Suffix Icon
          <ug-icon slot="suffix" name="heart"></ug-icon>
        </ug-menu-item>
      </ug-menu>
    </ug-dropdown>`;
  },
};
