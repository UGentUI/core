import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/tab-group';

const meta: Meta = {
  title: 'Components/TabGroup',
  component: 'ug-tab-group'
};

export default meta;

type Story = StoryObj;

export const TabGroup: Story = {
  render: () => {
    return html`<ug-tab-group>
      <ug-tab slot="nav" panel="general">General</ug-tab>
      <ug-tab slot="nav" panel="custom">Custom</ug-tab>
      <ug-tab slot="nav" panel="advanced">Advanced</ug-tab>
      <ug-tab slot="nav" panel="disabled" disabled>Disabled</ug-tab>

      <ug-tab-panel name="general">This is the general tab panel.</ug-tab-panel>
      <ug-tab-panel name="custom">This is the custom tab panel.</ug-tab-panel>
      <ug-tab-panel name="advanced"
        >This is the advanced tab panel.</ug-tab-panel
      >
      <ug-tab-panel name="disabled">This is a disabled tab panel.</ug-tab-panel>
    </ug-tab-group> `;
  }
};
