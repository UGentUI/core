import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/progress-ring';

const meta: Meta = {
  title: 'Components/ProgressRing',
  component: 'ug-progress-ring'
};

export default meta;

type Story = StoryObj;

export const ProgressRing: Story = {
  args: { value: 0, label: '', defaultSlot: undefined },
  render: (args) => {
    return html`<ug-progress-ring value="${args.value}" label="${args.label}">
      ${args.defaultSlot}
    </ug-progress-ring>`;
  }
};
