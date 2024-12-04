import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/popup';

const meta: Meta = {
  title: 'Components/Popup',
  component: 'ug-popup'
};

export default meta;

type Story = StoryObj;

export const Popup: Story = {
  render: () => {
    return html`<span id="external-anchor"></span>

      <ug-popup anchor="external-anchor" placement="top" active>
        <div class="box"></div>
      </ug-popup>

      <style>
        #external-anchor {
          display: inline-block;
          width: 150px;
          height: 150px;
          border: dashed 2px var(--ug-color-neutral-600);
          margin: 50px 0 0 50px;
        }

        #external-anchor ~ ug-popup .box {
          width: 100px;
          height: 50px;
          background: var(--ug-color-primary-600);
          border-radius: var(--ug-border-radius-medium);
        }
      </style>`;
  }
};
