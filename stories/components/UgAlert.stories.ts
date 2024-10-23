import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import "/lib/components/alert";
import "/lib/components/icon";

const meta: Meta = {
  title: "Components/Alert",
  component: "ug-alert",
};

export default meta;

type Story = StoryObj;

export const Alert: Story = {
  render: (args) => {
    return html`<ug-alert open
      ><ug-icon slot="icon" name="info-circle"></ug-icon>Alert</ug-alert
    >`;
  },
};
