import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import "/lib/components/tooltip";
import "/lib/components/button";

const meta: Meta = {
  title: "Components/Tooltip",
  component: "ug-tooltip",
};

export default meta;

type Story = StoryObj;

export const Tooltip: Story = {
  render: (args) => {
    return html`<ug-tooltip content="This is a tooltip">
      <ug-button>Hover Me</ug-button>
    </ug-tooltip>`;
  },
};
