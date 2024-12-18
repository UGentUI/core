import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/spinner';

const meta: Meta = {
  title: 'Components/Spinner',
  component: 'ug-spinner',

  parameters: {
    docs: {
      subtitle:
        'Spinners are used to show the progress of an indeterminate operation.'
    }
  }
};

export default meta;

type Story = StoryObj;

export const Spinner: Story = {
  render: () => {
    return html`<ug-spinner></ug-spinner>`;
  }
};
