import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/input';

const meta: Meta = {
  title: 'Components/Input',
  component: 'ug-input'
};

export default meta;

type Story = StoryObj;

export const Input: Story = {
  render: () => {
    return html`<ug-input></ug-input>`;
  }
};
