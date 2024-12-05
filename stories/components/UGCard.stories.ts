import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/card';

const meta: Meta = {
  title: 'Components/Card',
  component: 'ug-card'
};

export default meta;

type Story = StoryObj;

export const Card: Story = {
  render: () => {
    return html`<ug-card class="card-basic"
        >This is just a basic card. No image, no header, and no footer. Just
        your content.</ug-card
      ><style>
        .card-basic {
          max-width: 300px;
        }
      </style>`;
  }
};
