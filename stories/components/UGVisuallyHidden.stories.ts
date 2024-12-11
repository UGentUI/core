import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/visually-hidden';

const meta: Meta = {
  title: 'Components/VisuallyHidden',
  component: 'ug-visually-hidden'
};

export default meta;

type Story = StoryObj;

export const VisuallyHidden: Story = {
  render: () => {
    return html`<div style="min-height: 1.875rem;">
      <ug-visually-hidden>
        <a href="#">Skip to main content</a>
      </ug-visually-hidden>
    </div>`;
  }
};
