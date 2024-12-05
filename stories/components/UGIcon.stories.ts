import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/icon';

const meta: Meta = {
  title: 'Components/Icon',
  component: 'ug-icon'
};

export default meta;

type Story = StoryObj;

export const Icon: Story = {
  render: () => {
    return html`<ug-icon name="bell"></ug-icon>`;
  }
};
