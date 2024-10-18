
import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import "/lib/components/range";

const meta: Meta = {
  title: "Components/Range",
  component: "ug-range",
};

export default meta;

type Story = StoryObj;

export const Range: Story = {
  render: (args) => {
    return html`<ug-range></ug-range>`;
  },
};
