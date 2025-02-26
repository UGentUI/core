import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/icon-button';

const meta: Meta = {
  title: 'Components/IconButton',
  component: 'ug-icon-button'
};

export default meta;

type Story = StoryObj;

export const IconButton: Story = {
  render: () => {
    return html`<ug-icon-button name="gear" label="Settings"></ug-icon-button>`;
  }
};
