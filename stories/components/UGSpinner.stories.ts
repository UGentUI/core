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

export const Sizes: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Spinners are sized based on the current font size. To change their size, set the <code>font-size</code> property on the spinner itself or on a parent element as shown below.'
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  },
  render: () => {
    return html`<ug-spinner></ug-spinner>
      <ug-spinner style="font-size: 2rem;"></ug-spinner>
      <ug-spinner style="font-size: 3rem;"></ug-spinner>`;
  }
};
