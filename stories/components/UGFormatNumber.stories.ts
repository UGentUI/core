import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/format-number';

const meta: Meta = {
  title: 'Components/FormatNumber',
  component: 'ug-format-number'
};

export default meta;

type Story = StoryObj;

export const FormatNumber: Story = {
  render: () => {
    return html`<ug-format-number
      value="1000"
      lang="nl-be"
    ></ug-format-number>`;
  }
};
