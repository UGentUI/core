import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/alert';
import '/lib/components/icon';
import '/lib/layouts/app-shell';
import '/lib/layouts/app-shell-user';

const meta: Meta = {
  title: 'Layout/AppShell',
  component: 'UgAppShell',
  parameters: {
    layout: 'fullscreen',
    docs: {
      disable: true,
      // page: Docs,
      inlineStories: false,
      iframeHeight: 600,
      subtitle: 'Recommended layout to use for your application.'
    }
  },
  argTypes: {
    appTitle: {
      name: 'app-title (reflected)',
      control: 'text',
      description: 'Main title. Displayed in front of the logo.',
      table: { category: 'properties' }
    },
    sidebarExpanded: {
      name: 'sidebar-expanded (reflected)',
      control: 'boolean',
      description: 'Add the closable attribute to show a close button that will hide the alert.',
      table: { category: 'properties', defaultValue: { summary: 'false' } }
    }
  }
};

export default meta;

type Story = StoryObj;

export const AppShell: Story = {
  args: {
    appTitle: 'Deddmo'
  },
  render: (args) => {
    // prettier-ignore
    return html`
  <ug-app-shell app-title="${args['appTitle']}" ?sidebar-expanded="${args.sidebarExpanded}"
                >

    <div slot="main">
      <h1 class="text-2xl font-semibold ">Welcome to Noasis</h1>

      <p class="text-neutral-600">This is the main content area. Your application content will appear here.</p>
      <p class="text-neutral-600">fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf qsdf </p>
      <p class="text-neutral-600">fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf qsdf </p>
      <p class="text-neutral-600">fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf qsdf </p>
      <p class="text-neutral-600">fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf fqsdfq sdfq sdf sdfqsdf qsdf </p>
    </div>


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

    <!-- Actions    -->
    <ug-icon-button slot="action" library="fa" name="circle-question" label="Help"></ug-icon-button>
    <ug-icon-button slot="action" library="fa" name="bell" label="Notifications"></ug-icon-button>

    <!--User avatar/menu -->
    <ug-app-shell-user slot="user" display-name="Voornaam naam" >
      <ug-menu-item slot="menu-item">Your profile</ug-menu-item>
      <ug-divider slot="menu-item"></ug-divider>
      <ug-menu-item slot="menu-item">Logout</ug-menu-item>

    </ug-app-shell-user>


  </ug-app-shell>
    `;
  }
};

