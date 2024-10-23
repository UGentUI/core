import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import "/lib/components/option";

const meta: Meta = {
  title: "Components/Option",
  component: "ug-option",
};

export default meta;

type Story = StoryObj;

export const Option: Story = {
  render: (args) => {
    return html`<ug-select label="Select one">
  <ug-option value="option-1">Option 1</ug-option>
  <ug-option value="option-2">Option 2</ug-option>
  <ug-option value="option-3">Option 3</ug-option>
</sl-select>`;
  },
};
