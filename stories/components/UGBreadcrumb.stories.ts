import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/breadcrumb';

const meta: Meta = {
  title: 'Components/Breadcrumb',
  component: 'ug-breadcrumb'
};

export default meta;

type Story = StoryObj;

export const Breadcrumb: Story = {
  render: () => {
    return html`<ug-breadcrumb>
      <ug-breadcrumb-item>Catalog</ug-breadcrumb-item>
      <ug-breadcrumb-item>Clothing</ug-breadcrumb-item>
      <ug-breadcrumb-item>Women's</ug-breadcrumb-item>
      <ug-breadcrumb-item>Shirts &amp; Tops</ug-breadcrumb-item>
    </ug-breadcrumb>`;
  }
};
