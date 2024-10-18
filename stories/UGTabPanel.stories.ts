import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import "/lib/components/tab-panel";

const meta: Meta = {
  title: "Components/TabPanel",
  component: "ug-tab-panel",
};

export default meta;

type Story = StoryObj;

export const TabPanel: Story = {
  render: (args) => {
    return html`<ug-tab-group>
  <ug-tab slot="nav" panel="general">General</ug-tab>
  <ug-tab slot="nav" panel="custom">Custom</ug-tab>
  <ug-tab slot="nav" panel="advanced">Advanced</ug-tab>
  <ug-tab slot="nav" panel="disabled" disabled>Disabled</ug-tab>

  <ug-tab-panel name="general">This is the general tab panel.</ug-tab-panel>
  <ug-tab-panel name="custom">This is the custom tab panel.</ug-tab-panel>
  <ug-tab-panel name="advanced">This is the advanced tab panel.</ug-tab-panel>
  <ug-tab-panel name="disabled">This is a disabled tab panel.</ug-tab-panel>
</sl-tab-group>
`;
  },
};
