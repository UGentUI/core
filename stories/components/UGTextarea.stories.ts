import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/textarea';

const meta: Meta = {
  title: 'Components/Textarea',
  component: 'ug-textarea'
};

export default meta;

type Story = StoryObj;

export const Textarea: Story = {
  render: () => {
    return html`<ug-textarea></ug-textarea>`;
  }
};
