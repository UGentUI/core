import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/menu';
import '/lib/components/menu-item';
import '/lib/components/divider';

const meta: Meta = {
  title: 'Components/Menu',
  component: 'ug-menu'
};

export default meta;

type Story = StoryObj;

export const Menu: Story = {
  render: () => {
    return html`<ug-menu style="max-width: 200px;">
      <ug-menu-item value="undo">Undo</ug-menu-item>
      <ug-menu-item value="redo">Redo</ug-menu-item>
      <ug-divider></ug-divider>
      <ug-menu-item value="cut">Cut</ug-menu-item>
      <ug-menu-item value="copy">Copy</ug-menu-item>
      <ug-menu-item value="paste">Paste</ug-menu-item>
      <ug-menu-item value="delete">Delete</ug-menu-item>
    </ug-menu>`;
  }
};
