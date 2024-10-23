import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import "/lib/components/include";

const meta: Meta = {
  title: "Components/Include",
  component: "ug-include",
};

export default meta;

type Story = StoryObj;

export const Include: Story = {
  render: (args) => {
    return html`<ug-include></ug-include>`;
  },
};
