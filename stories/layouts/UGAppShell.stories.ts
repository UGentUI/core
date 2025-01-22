import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/alert';
import '/lib/components/icon';
import '/lib/layouts/app-shell';

const meta: Meta = {
  title: 'Layout/AppShell',
  component: 'UgAppShell',
  parameters: {
    layout: 'fullscreen',
    docs: {
      // page: Docs,
      inlineStories: false,
      iframeHeight: 600,
      subtitle: 'Recommended layout to use for your application.'
    }
  },
  argTypes: {
    open: {
      control: 'boolean',
      description:
        'Alerts will not be visible if the open attribute is not present.',
      table: { category: 'properties', defaultValue: { summary: 'false' } }
    },
    variant: {
      control: 'select',
      options: ['primary', 'success', 'neutral', 'warning', 'danger'],
      description: "Set the variant attribute to change the alert's variant.",
      table: { category: 'properties', defaultValue: { summary: 'primary' } }
    },
    closable: {
      control: 'boolean',
      description:
        'Add the closable attribute to show a close button that will hide the alert.',
      table: { category: 'properties', defaultValue: { summary: 'false' } }
    }
  }
};

export default meta;

type Story = StoryObj;

export const AppShell: Story = {
  args: {
    open: true,
    variant: 'primary',
    closable: false
  },
  render: (args) => {
    // prettier-ignore
    return html`
  <ug-app-shell>
    <!-- Side navigation slots    -->
    <ug-navigation-item  slot="side">
      Dashboard
      <ug-icon slot="prefix" library="fa" name="house" label="Help"></ug-icon>
      <ug-badge slot="suffix"  pill variant="neutral" size="small" >5</ug-badge>
    </ug-navigation-item>

    <ug-navigation-item   active slot="side">
      Students
      <ug-icon slot="prefix" library="fa" name="users" label="Help"></ug-icon>
    </ug-navigation-item>

    <ug-navigation-item   slot="side">
      Projects
      <ug-icon slot="prefix" library="fa" name="folder" label="Help"></ug-icon>

    </ug-navigation-item>

    <ug-navigation-item   slot="side"  >
      <a href="https://www.google.com" target="_blank" class="no-underline hover:no-underline">Reports</a>
      <ug-icon slot="prefix" library="fa" name="chart-pie" label="Help"></ug-icon>
      <ug-icon slot="suffix" library="fa" name="square-arrow-up-right"   ></ug-icon>
    </ug-navigation-item>



    <!-- Top navigation-->
    <ug-navigation-item slot="navigation"  >
      History
    </ug-navigation-item>

    <ug-navigation-item slot="navigation"  >
      Page 1
    </ug-navigation-item>
    <ug-navigation-item slot="navigation" >
      Page 2
    </ug-navigation-item>

    <ug-navigation-item slot="navigation"  >
      Page 3
    </ug-navigation-item>

    <ug-navigation-item slot="navigation" label="Page4" >
      Page 4
    </ug-navigation-item>

    <ug-navigation-item slot="navigation">
      Page 5
    </ug-navigation-item>

    <ug-navigation-item slot="navigation" >
      Page 6
    </ug-navigation-item>
    
  </ug-app-shell>
    `;
  }
};

export const Variants: Story = {
  args: {},
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Set the variant attribute to change the alert’s variant.`
      }
    }
  },
  // prettier-ignore
  render: () => html`
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
</ug-alert>`
};

export const Closable: Story = {
  ...AppShell,
  args: {
    ...AppShell.args,
    closable: true
  }
};
