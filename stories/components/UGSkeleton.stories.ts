import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/skeleton';

const meta: Meta = {
  title: 'Components/Skeleton',
  component: 'ug-skeleton'
};

export default meta;

type Story = StoryObj;

export const Skeleton: Story = {
  render: () => {
    return html`<div class="skeleton-overview">
        <header>
          <ug-skeleton></ug-skeleton>
          <ug-skeleton></ug-skeleton>
        </header>

        <ug-skeleton></ug-skeleton>
        <ug-skeleton></ug-skeleton>
        <ug-skeleton></ug-skeleton>
      </div>

      <style>
        .skeleton-overview header {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }

        .skeleton-overview header ug-skeleton:last-child {
          flex: 0 0 auto;
          width: 30%;
        }

        .skeleton-overview ug-skeleton {
          margin-bottom: 1rem;
        }

        .skeleton-overview ug-skeleton:nth-child(1) {
          float: left;
          width: 3rem;
          height: 3rem;
          margin-right: 1rem;
          vertical-align: middle;
        }

        .skeleton-overview ug-skeleton:nth-child(3) {
          width: 95%;
        }

        .skeleton-overview ug-skeleton:nth-child(4) {
          width: 80%;
        }
      </style> `;
  }
};
