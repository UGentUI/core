import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/format-date';

const meta: Meta = {
  title: 'Components/FormatDate',
  component: 'ug-format-date'
};

export default meta;

type Story = StoryObj;

export const FormatDate: Story = {
  render: () => {
    return html`<ug-format-date
      date="2020-07-15T09:17:00-04:00"
    ></ug-format-date>`;
  }
};
