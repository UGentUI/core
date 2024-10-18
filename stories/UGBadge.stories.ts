import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import "/lib/components/badge";

const meta: Meta = {
  title: "Components/Badge",
  component: "ug-badge",
};

export default meta;

type Story = StoryObj;

export const Badge: Story = {
  render: (args) => {
    return html`<ug-badge>Badge</ug-badge>`;
  },
};
