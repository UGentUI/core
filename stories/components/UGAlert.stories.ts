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
        "Alerts will not be visible if the open attribute is not present.",
      table: { category: "properties", defaultValue: { summary: "false" } },
    },
    variant: {
      control: "select",
      options: ["primary", "success", "neutral", "warning", "danger"],
      description: "Set the variant attribute to change the alert's variant.",
      table: { category: "properties", defaultValue: { summary: "primary" } },
    },
    closable: {
      control: "boolean",
      description:
        "Add the closable attribute to show a close button that will hide the alert.",
      table: { category: "properties", defaultValue: { summary: "false" } },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Alert: Story = {
  args: {
    open: true,
    variant: "primary",
    closable: false,
  },
  render: (args) => {
    // prettier-ignore
    return html`
<ug-alert ?open="${args.open}" variant="${args.variant}" ?closable="${args.closable}">
    <ug-icon slot="icon" name="info-circle"></ug-icon>
    This is a standard alert. You can customize its content and even the icon.
</ug-alert>`;
  }
};

export const Variants: Story = {
  args: {},
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Set the variant attribute to change the alert’s variant.`,
      },
    },
  },
  // prettier-ignore
  render: (args) => html`
<ug-alert variant="primary" open>
    <ug-icon slot="icon" name="info-circle"></ug-icon>
    <strong>This is super informative</strong><br />
    You can tell by how pretty the alert is.
</ug-alert>

<br />

<ug-alert variant="success" open>
    <ug-icon slot="icon" name="check2-circle"></ug-icon>
    <strong>Your changes have been saved</strong><br />
    You can safely exit the app now.
</ug-alert>

<br />

<ug-alert variant="neutral" open>
    <ug-icon slot="icon" name="gear"></ug-icon>
    <strong>Your settings have been updated</strong><br />
    Settings will take effect on next login.
</ug-alert>

<br />

<ug-alert variant="warning" open>
    <ug-icon slot="icon" name="exclamation-triangle"></ug-icon>
    <strong>Your session has ended</strong><br />
    Please login again to continue.
</ug-alert>

<br />

<ug-alert variant="danger" open>
    <ug-icon slot="icon" name="exclamation-octagon"></ug-icon>
    <strong>Your account has been deleted</strong><br />
    We're very sorry to see you go!
</ug-alert>`,
};

export const Closable: Story = {
  ...Alert,
  args: {
    ...Alert.args,
    closable: true,
  },
};
