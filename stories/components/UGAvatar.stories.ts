import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/avatar';

const meta: Meta = {
  title: 'Components/Avatar',
  component: 'ug-avatar'
};

export default meta;

type Story = StoryObj;

export const Avatar: Story = {
  render: () => {
    return html`<ug-avatar></ug-avatar>`;
  }
};
