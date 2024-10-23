
import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import "/lib/components/divider";

const meta: Meta = {
  title: "Components/Divider",
  component: "ug-divider",
};

export default meta;

type Story = StoryObj;

export const Divider: Story = {
  render: (args) => {
    return html`<ug-divider></ug-divider>`;
  },
};
