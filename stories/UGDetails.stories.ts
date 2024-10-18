import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import "/lib/components/details";

const meta: Meta = {
  title: "Components/Details",
  component: "ug-details",
};

export default meta;

type Story = StoryObj;

export const Details: Story = {
  render: (args) => {
    return html`<ug-details summary="Toggle Me"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ug-details
    >`;
  },
};
