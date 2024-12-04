import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/alert';
import '/lib/components/icon';

const meta: Meta = {
  title: 'Components/Alert',
  component: 'UgAlert',
  parameters: {
    docs: {
      subtitle:
        'Alerts are used to display important messages inline or as toast notifications.'
    }
  },
  argTypes: {
    open: {
      control: 'boolean',
      description:
        'Alerts will not be visible if the open attribute is not present.',
      table: { category: 'attributes' }
    },
    variant: {
      control: 'select',
      options: ['primary', 'success', 'neutral', 'warning', 'danger', 'text'],
      description: "Set the variant attribute to change the alert's variant."
    }
  }
};

export default meta;

type Story = StoryObj;

export const Alert: Story = {
  args: {
    open: true,
    variant: 'primary'
  },
  render: (args) => {
    // prettier-ignore
    return html`
<ug-alert ?open="${args.open}" variant="${args.variant}">
    <ug-icon slot="icon" name="info-circle"></ug-icon>
    This is a standard alert. You can customize its content and even the icon.
</ug-alert>`;
  }
};
