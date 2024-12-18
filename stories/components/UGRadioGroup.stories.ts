import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/radio-group';

const meta: Meta = {
  title: 'Components/RadioGroup',
  component: 'ug-radio-group'
};

export default meta;

type Story = StoryObj;

export const RadioGroup: Story = {
  render: () => {
    return html`<ug-radio-group label="Select an option" name="a" value="1">
      <ug-radio value="1">Option 1</ug-radio>
      <ug-radio value="2">Option 2</ug-radio>
      <ug-radio value="3">Option 3</ug-radio>
    </ug-radio-group>`;
  }
};
