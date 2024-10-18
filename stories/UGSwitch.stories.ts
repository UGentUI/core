import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import "/lib/components/switch";

const meta: Meta = {
  title: "Components/Switch",
  component: "ug-switch",
};

export default meta;

type Story = StoryObj;

export const Switch: Story = {
  render: (args) => {
    return html`<ug-switch>Switch</ug-switch>`;
  },
};
