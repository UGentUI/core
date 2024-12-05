import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/copy-button';

const meta: Meta = {
  title: 'Components/CopyButton',
  component: 'ug-copy-button'
};

export default meta;

type Story = StoryObj;

export const CopyButton: Story = {
  render: () => {
    return html`<ug-copy-button></ug-copy-button>`;
  }
};
