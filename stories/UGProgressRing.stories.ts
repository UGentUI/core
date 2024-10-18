import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import "/lib/components/progress-ring";

const meta: Meta = {
  title: "Components/ProgressRing",
  component: "ug-progress-ring",
};

export default meta;

type Story = StoryObj;

export const ProgressRing: Story = {
  render: (args) => {
    return html`<ug-progress-ring value="25"></ug-progress-ring>`;
  },
};
