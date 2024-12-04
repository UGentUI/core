import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/animation';

const meta: Meta = {
  title: 'Components/Animation',
  component: 'ug-animation'
};

export default meta;

type Story = StoryObj;

export const Animation: Story = {
  render: () => {
    return html`<div class="animation-overview">
        <ug-animation name="bounce" duration="2000" play
          ><div class="box"></div
        ></ug-animation>
        <ug-animation name="jello" duration="2000" play
          ><div class="box"></div
        ></ug-animation>
        <ug-animation name="heartBeat" duration="2000" play
          ><div class="box"></div
        ></ug-animation>
        <ug-animation name="flip" duration="2000" play
          ><div class="box"></div
        ></ug-animation>
      </div>

      <style>
        .animation-overview .box {
          display: inline-block;
          width: 100px;
          height: 100px;
          background-color: var(--ug-color-primary-600);
          margin: 1.5rem;
        }
      </style> `;
  }
};
