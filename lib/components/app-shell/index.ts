import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
// @ts-expect-error twlit genereert dit bestand, zonder declaration weliswaar.
import { TWStyles } from '../../styles/tw.js';
import { UgInput } from '../input';
import { UgMenu } from '../menu';
import { UgMenuItem } from '../menu-item';
import { UgDropdown } from '../dropdown';
import { UgTextarea } from '../textarea';
import { UgIconButton } from '../icon-button';
import { UgBadge } from '../badge';
import { UgDrawer } from '../drawer';
import { query } from 'lit/decorators/query.js';

const shellStyle = css`
    :host {
        //display: block;
        position: fixed;
        x: 0;
        y: 0;
        top: 0;
        bottom: 0;
        //height: 100vh;
        //width: 100vw;
    }
`;

@customElement('ug-app-shell')
export class AppShell extends LitElement {
  static styles = [TWStyles, shellStyle];

  static dependencies = {
    'ug-input': UgInput,
    'ug-icon': UgMenu,
    'ug-badge': UgBadge,
    'ug-menu-item': UgMenuItem,
    'ug-dropdown': UgDropdown,
    'ug-textarea': UgTextarea,
    'ug-icon-button': UgIconButton
  };

  @query('#drawer')
  ugDrawer!: UgDrawer;


/*
  const drawer = document.querySelector('ug-drawer');
  const sidebar = document.querySelector('aside');
  const mainContent = document.querySelector('main');
  const toggleIcon = document.querySelector('aside button ug-icon');
  let sidebarExpanded = true;

  function toggleSidebar() {
    drawer.show();
  }

  function closeDrawer() {
    drawer.hide();
  }

  function toggleDesktopSidebar() {
    sidebarExpanded = !sidebarExpanded;
    if (!sidebarExpanded) {
      sidebar.classList.remove('w-64');
      sidebar.classList.add('w-16');
      mainContent.classList.remove('lg:ml-64');
      mainContent.classList.add('lg:ml-16');
      toggleIcon.classList.add('rotate-180');
      document.querySelector('.sidebar-content').classList.add('hidden');
    } else {
      sidebar.classList.add('w-64');
      sidebar.classList.remove('w-16');
      mainContent.classList.add('lg:ml-64');
      mainContent.classList.remove('lg:ml-16');
      toggleIcon.classList.remove('rotate-180');
      document.querySelector('.sidebar-content').classList.remove('hidden');
    }
  }

*/

  toggleSidebar() {
    this.ugDrawer.show();
  }


  render() {
    return html`

      <div class="antialiased bg-neutral-50 h-screen w-screen flex flex-col overflow-hidden" >
        <!-- Mobile Drawer -->
        <div id="drawer-backdrop" class="bg-neutral-900/50 fixed inset-0 z-40 hidden lg:hidden"
             @click="${togg}">
        </div>
        <ug-drawer id="drawer" no-header placement="start" class="lg:hidden">
          <nav>
            <ug-icon-button library="fa" name="xmark-large" label="Close" onclick="closeDrawer()"
                            class="float-right"></ug-icon-button>
          </nav>
          <div>
            <!-- Mobile Navigation Content -->
          </div>
        </ug-drawer>

        <!-- Main Navigation Bar -->
        <nav class="bg-white border-b border-neutral-200 p-4  left-0 right-0 top-0 z-30">
          <div class="flex items-center justify-between">
            <!-- Left Section -->
            <div class="flex items-center h-8">
              <button type="button" onclick="toggleSidebar()" class="lg:hidden text-neutral-700 rounded-lg">
                <ug-icon library="fa" name="bars" class="h-5 w-5"></ug-icon>
              </button>
              <ug-divider vertical class="lg:hidden"></ug-divider>
              <a href="#" class="flex items-center">
                <ug-icon src="/lib/assets/brand/logo-ugent.svg" class="w-8 h-8 mr-2"></ug-icon>
                <span class="self-center text-2xl font-semibold whitespace-nowrap">Noasis</span>
              </a>
            </div>

            <!-- Optional Page Links -->
            <div class="hidden lg:flex items-center space-x-6">
              <a href="#" class="text-neutral-600 hover:text-ugent-blue-600 font-semibold text-sm">History</a>
              <a href="#" class="text-neutral-600 hover:text-ugent-blue-600 font-semibold text-sm">Settings</a>

              <ug-button variant="primary" size="small">
                <ug-icon slot="prefix" library="fa" name="plus"></ug-icon>
                New Project
              </ug-button>
            </div>

            <!-- Right Section: Search and Actions -->
            <div class="flex items-center h-8">
              <div class="hidden lg:block w-64 mr-4">
                <ug-input type="search" placeholder="Search..." size="small" clearable>
                  <ug-icon slot="prefix" library="fa" name="magnifying-glass"></ug-icon>
                </ug-input>
              </div>
              <div class="lg:hidden">
                <ug-icon-button library="fa" name="magnifying-glass" label="Search"></ug-icon-button>
              </div>
              <div class="flex items-center">
                <ug-icon-button library="fa" name="circle-question" label="Help"></ug-icon-button>
                <ug-icon-button library="fa" name="bell" label="Notifications"></ug-icon-button>
              </div>
              <ug-divider vertical class="mx-4"></ug-divider>
              <ug-dropdown placement="bottom-end" distance="10">
                <a slot="trigger" href="#" class="flex items-center">
                  <ug-avatar label="User avatar" size="small" class="mr-2"></ug-avatar>
                  <span class="mr-2 font-semibold text-sm">Professor Placeholder</span>
                  <ug-icon name="chevron-down" class="text-xs"></ug-icon>
                </a>
                <ug-menu class="border">
                  <ug-menu-item>Your profile</ug-menu-item>
                  <ug-divider></ug-divider>
                  <ug-menu-item>Logout</ug-menu-item>
                </ug-menu>
              </ug-dropdown>
            </div>
          </div>
        </nav>

        <!-- Page Layout -->
        <div class="flex-1  flex overflow-hidden">
          <!-- Desktop Sidebar -->
          <aside class="hidden lg:block w-64 bg-white border-r border-neutral-200 fixed top-16 bottom-0"
                 aria-label="Sidenav">
            <button type="button" onclick="toggleDesktopSidebar()"
                    class="absolute -right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 rounded-full bg-white border border-neutral-200 hover:bg-neutral-50 z-10"
                    aria-label="Toggle sidebar">
              <ug-icon library="fa" name="chevron-left" class="text-sm text-neutral-400"></ug-icon>
            </button>

            <nav>
              <div class="sidebar-content">
                <ul class="space-y-1 p-4">
                  <li class="bg-neutral-50">
                    <a href="#"
                       class="p-2 text-ugent-blue-600 hover:bg-neutral-50 rounded-sm flex items-center font-semibold text-sm group">
                      <ug-icon library="fa" name="house"
                               class="mr-2 text-xl text-ugent-blue-600 group-hover:text-ugent-blue-600"></ug-icon>
                      Dashboard
                      <ug-badge pill variant="neutral" class="ml-auto">5</ug-badge>
                    </a>
                  </li>
                  <li>
                    <a href="#"
                       class="p-2 text-neutral-800 hover:text-ugent-blue-600 hover:bg-neutral-50 rounded-sm flex items-center font-semibold text-sm group">
                      <ug-icon library="fa" name="users"
                               class="mr-2 text-xl text-neutral-400 group-hover:text-ugent-blue-600"></ug-icon>
                      Students
                    </a>
                  </li>
                  <li>
                    <a href="#"
                       class="p-2 text-neutral-800 hover:text-ugent-blue-600 hover:bg-neutral-50 rounded-sm flex items-center font-semibold text-sm group">
                      <ug-icon library="fa" name="folder"
                               class="mr-2 text-xl text-neutral-400 group-hover:text-ugent-blue-600"></ug-icon>
                      Projects
                      <ug-badge pill variant="neutral" class="ml-auto">12</ug-badge>
                    </a>
                  </li>
                  <li>
                    <a href="#"
                       class="p-2 text-neutral-800 hover:text-ugent-blue-600 hover:bg-neutral-50 rounded-sm flex items-center font-semibold text-sm group">
                      <ug-icon library="fa" name="chart-pie"
                               class="mr-2 text-xl text-neutral-400 group-hover:text-ugent-blue-600"></ug-icon>
                      Reports
                    </a>
                  </li>
                  <li>
                    <a href="#"
                       class="p-2 text-neutral-800 hover:text-ugent-blue-600 hover:bg-neutral-50 rounded-sm flex items-center font-semibold text-sm group">
                      <ug-icon library="fa" name="calendar"
                               class="mr-2 text-xl text-neutral-400 group-hover:text-ugent-blue-600"></ug-icon>
                      Calendar
                    </a>
                  </li>
                </ul>
                <ug-divider class="mx-4"></ug-divider>
                <small class="px-4 pt-4 block text-neutral-600 font-semibold">Your
                  faculties</small>
                <ul class="space-y-1 p-4">
                  <li>
                    <a href="#"
                       class="p-2 text-neutral-800 hover:text-ugent-blue-600 hover:bg-neutral-50 rounded-sm flex items-center font-semibold text-sm group">
                      <ug-icon library="fa" name="square-s"
                               class="mr-2 text-xl text-neutral-400 group-hover:text-ugent-blue-600"></ug-icon>
                      Sciences
                    </a>
                  </li>
                  <li>
                    <a href="#"
                       class="p-2 text-neutral-800 hover:text-ugent-blue-600 hover:bg-neutral-50 rounded-sm flex items-center font-semibold text-sm group">
                      <ug-icon library="fa" name="square-e"
                               class="mr-2 text-xl text-neutral-400 group-hover:text-ugent-blue-600"></ug-icon>
                      Engineering
                    </a>
                  </li>
                  <li>
                    <a href="#"
                       class="p-2 text-neutral-800 hover:text-ugent-blue-600 hover:bg-neutral-50 rounded-sm flex items-center font-semibold text-sm group">
                      <ug-icon library="fa" name="square-l"
                               class="mr-2 text-xl text-neutral-400 group-hover:text-ugent-blue-600"></ug-icon>
                      Law
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </aside>

          <!-- Main Content Area -->
          <main class="flex-1 p-4 overflow-y-auto lg:ml-64" style="border: solid red 2px">
            <slot name="main"></slot>
          </main>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ug-app-shell': AppShell;
  }
}
