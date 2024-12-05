import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/menu';
import '/lib/components/menu-item';
import '/lib/components/menu-label';
import '/lib/components/divider';

const meta: Meta = {
  title: 'Components/MenuLabel',
  component: 'ug-menu-label'
};

export default meta;

type Story = StoryObj;

export const MenuLabel: Story = {
  render: () => {
    return html`<ug-menu style="max-width: 200px;">
      <ug-menu-label>Fruits</ug-menu-label>
      <ug-menu-item value="apple">Apple</ug-menu-item>
      <ug-menu-item value="banana">Banana</ug-menu-item>
      <ug-menu-item value="orange">Orange</ug-menu-item>
      <ug-divider></ug-divider>
      <ug-menu-label>Vegetables</ug-menu-label>
      <ug-menu-item value="broccoli">Broccoli</ug-menu-item>
      <ug-menu-item value="carrot">Carrot</ug-menu-item>
      <ug-menu-item value="zucchini">Zucchini</ug-menu-item>
    </ug-menu>`;
  }
};
