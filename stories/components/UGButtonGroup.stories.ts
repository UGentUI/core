import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/button-group';

const meta: Meta = {
  title: 'Components/ButtonGroup',
  component: 'ug-button-group'
};

export default meta;

type Story = StoryObj;

export const ButtonGroup: Story = {
  render: () => {
    return html`<ug-button-group label="Alignment">
      <ug-button>Left</ug-button>
      <ug-button>Center</ug-button>
      <ug-button>Right</ug-button>
    </ug-button-group>`;
  }
};
