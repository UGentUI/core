import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import "/lib/components/rating";

const meta: Meta = {
  title: "Components/Rating",
  component: "ug-rating",
};

export default meta;

type Story = StoryObj;

export const Rating: Story = {
  render: (args) => {
    return html`<ug-rating label="Rating"></ug-rating>`;
  },
};
