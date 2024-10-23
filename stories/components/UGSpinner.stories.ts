
import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import "/lib/components/spinner";

const meta: Meta = {
  title: "Components/Spinner",
  component: "ug-spinner",
};

export default meta;

type Story = StoryObj;

export const Spinner: Story = {
  render: (args) => {
    return html`<ug-spinner></ug-spinner>`;
  },
};
