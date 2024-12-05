import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/select';

const meta: Meta = {
  title: 'Components/Select',
  component: 'ug-select'
};

export default meta;

type Story = StoryObj;

export const Select: Story = {
  render: () => {
    return html`<ug-select>
      <ug-option value="option-1">Option 1</ug-option>
      <ug-option value="option-2">Option 2</ug-option>
      <ug-option value="option-3">Option 3</ug-option>
      <ug-option value="option-4">Option 4</ug-option>
      <ug-option value="option-5">Option 5</ug-option>
      <ug-option value="option-6">Option 6</ug-option>
    </ug-select>`;
  }
};
