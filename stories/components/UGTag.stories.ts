import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/tag';

const meta: Meta = {
  title: 'Components/Tag',
  component: 'ug-tag'
};

export default meta;

type Story = StoryObj;

export const Tag: Story = {
  render: () => {
    return html`<ug-tag variant="primary">Primary</ug-tag>
      <ug-tag variant="success">Success</ug-tag>
      <ug-tag variant="neutral">Neutral</ug-tag>
      <ug-tag variant="warning">Warning</ug-tag>
      <ug-tag variant="danger">Danger</ug-tag>`;
  }
};
