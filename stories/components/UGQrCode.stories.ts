import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/qr-code';

const meta: Meta = {
  title: 'Components/QrCode',
  component: 'ug-qr-code'
};

export default meta;

type Story = StoryObj;

export const QrCode: Story = {
  render: () => {
    return html`<ug-qr-code value="https://ugent.be/"></ug-qr-code>`;
  }
};
