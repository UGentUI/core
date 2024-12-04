import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/relative-time';

const meta: Meta = {
  title: 'Components/RelativeTime',
  component: 'ug-relative-time'
};

export default meta;

type Story = StoryObj;

export const RelativeTime: Story = {
  render: () => {
    return html`<ug-relative-time
      date="2020-07-15T09:17:00-04:00"
    ></ug-relative-time>`;
  }
};
