import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/progress-bar';

const meta: Meta = {
  title: 'Components/ProgressBar',
  component: 'ug-progress-bar'
};

export default meta;

type Story = StoryObj;

export const ProgressBar: Story = {
  render: () => {
    return html`<ug-progress-bar value="50"></ug-progress-bar>`;
  }
};
