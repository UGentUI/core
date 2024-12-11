import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/breadcrumb-item';

const meta: Meta = {
  title: 'Components/BreadcrumbItem',
  component: 'ug-breadcrumb-item'
};

export default meta;

type Story = StoryObj;

export const BreadcrumbItem: Story = {
  render: () => {
    return html`<ug-breadcrumb>
      <ug-breadcrumb-item>
        <ug-icon slot="prefix" name="house"></ug-icon>
        Home
      </ug-breadcrumb-item>
      <ug-breadcrumb-item>Clothing</ug-breadcrumb-item>
      <ug-breadcrumb-item>Shirts</ug-breadcrumb-item>
    </ug-breadcrumb>`;
  }
};
