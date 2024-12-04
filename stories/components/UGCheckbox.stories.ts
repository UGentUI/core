import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/checkbox';

const meta: Meta = {
  title: 'Components/Checkbox',
  component: 'ug-checkbox'
};

export default meta;

type Story = StoryObj;

export const Checkbox: Story = {
  render: () => {
    return html`<ug-checkbox>Checkbox</ug-checkbox>`;
  }
};
