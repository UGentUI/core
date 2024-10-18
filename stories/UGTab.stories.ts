
import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import "/lib/components/tab";

const meta: Meta = {
  title: "Components/Tab",
  component: "ug-tab",
};

export default meta;

type Story = StoryObj;

export const Tab: Story = {
  render: (args) => {
    return html`<ug-tab></ug-tab>`;
  },
};
