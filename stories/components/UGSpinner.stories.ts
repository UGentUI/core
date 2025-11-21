import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/spinner';

const meta: Meta = {
  title: 'Components/Spinner',
  component: 'spinner',
  parameters: {
    docs: {
      subtitle:
        'Spinners are used to show the progress of an indeterminate operation.',
      importSection: true,
      source: { format: true }
    }
  }
};

export default meta;

type Story = StoryObj;

export const Spinner: Story = {
  parameters: {
    controls: { disable: true }
  },
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

export const TrackWidth: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The width of the spinner's track can be changed by setting the `--track-width` custom property."
      }
    },
    controls: { disable: true }
  },
  render: () => html`
    <ug-spinner style="font-size: 50px; --track-width: 10px;"></ug-spinner>
  `
};

export const Colors: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The spinner's colors can be changed by setting the `--indicator-color` and `--track-color` custom properties."
      }
    },
    controls: { disable: true }
  },
  render: () => html`
    <ug-spinner
      style="
        font-size: 3rem;
        --indicator-color: var(--ug-color-danger-600);
        --track-color: var(--ug-color-danger-100);
      "
    ></ug-spinner>
  `
};
