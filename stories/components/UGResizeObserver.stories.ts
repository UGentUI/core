import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/resize-observer';

const meta: Meta = {
  title: 'Components/ResizeObserver',
  component: 'ug-resize-observer'
};

export default meta;

type Story = StoryObj;

export const ResizeObserver: Story = {
  render: () => {
    return html`<div class="resize-observer-overview">
        <ug-resize-observer>
          <div>Resize this box and watch the console 👉</div>
        </ug-resize-observer>
      </div>

      <script>
        const container = document.querySelector('.resize-observer-overview');
        const resizeObserver = container.querySelector('ug-resize-observer');

        resizeObserver.addEventListener('ug-resize', (event) => {
          console.log(event.detail);
        });
      </script>

      <style>
        .resize-observer-overview div {
          display: flex;
          border: solid 2px var(--ug-input-border-color);
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 4rem 2rem;
        }
      </style>`;
  }
};
