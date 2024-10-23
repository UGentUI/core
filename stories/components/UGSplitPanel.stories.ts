import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import "/lib/components/split-panel";

const meta: Meta = {
  title: "Components/SplitPanel",
  component: "ug-split-panel",
};

export default meta;

type Story = StoryObj;

export const SplitPanel: Story = {
  render: (args) => {
    return html`<ug-split-panel>
      <div
        slot="start"
        style="height: 200px; background: var(--ug-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
      >
        Start
      </div>
      <div
        slot="end"
        style="height: 200px; background: var(--ug-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
      >
        End
      </div>
    </ug-split-panel>`;
  },
};
