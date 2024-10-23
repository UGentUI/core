import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import "/lib/components/radio-button";

const meta: Meta = {
  title: "Components/RadioButton",
  component: "ug-radio-button",
};

export default meta;

type Story = StoryObj;

export const RadioButton: Story = {
  render: (args) => {
    return html`<ug-radio-group label="Select an option" name="a" value="1">
      <ug-radio-button value="1">Option 1</ug-radio-button>
      <ug-radio-button value="2">Option 2</ug-radio-button>
      <ug-radio-button value="3">Option 3</ug-radio-button>
    </ug-radio-group>`;
  },
};
