import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/tab-group';
import '/lib/components/tab-panel';
import '/lib/components/tab';
import '/lib/components/icon';
import '/lib/components/icon-button';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Components/TabGroup',
  component: 'ug-tab-group',

  parameters: {
    docs: {
      subtitle:
        'Tab groups organize content into a container that shows one section at a time.',
      description: {
        component:
          'Tab groups make use of [tabs](?path=/docs/components-tab--docs) and [tab panels](?path=/docs/components-tabpanel--docs). Each tab must be slotted into the <code>nav</code> slot and its <code>panel</code> must refer to a tab panel of the same name.'
      },
      source: {
        format: true,
        transform: (code: string) => {
          // Remove empty/default attributes and replace boolean attributes from the source code display
          return code
            .replace(/\s(placement="top")/g, '')
            .replace(/\s(activation="auto")/g, '')
            .replace(/\s* no-scroll-controls=""/g, ' no-scroll-controls')
            .replace(/\s* fixed-scroll-controls=""/g, ' fixed-scroll-controls');
        }
      }
    }
  },
  argTypes: {
    placement: {
      description: 'The placement of the tabs.',
      control: 'select',
      options: ['top', 'bottom', 'start', 'end'],
      table: {
        category: 'Properties',
        type: { summary: "'top' | 'bottom' | 'start' | 'end'" },
        defaultValue: { summary: "'top'" }
      }
    },
    activation: {
      description:
        'When set to auto, navigating tabs with the arrow keys will instantly show the corresponding tab panel. When set to manual, the tab will receive focus but will not show until the user presses spacebar or enter.',
      control: 'select',
      options: ['auto', 'manual'],
      table: {
        category: 'Properties',
        type: { summary: "'auto' | 'manual'" },
        defaultValue: { summary: "'auto'" }
      }
    },
    noScrollControls: {
      name: 'no-scroll-controls',
      description: 'Disables the scroll arrows that appear when tabs overflow.',
      control: 'boolean',
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    fixedScrollControls: {
      name: 'fixed-scroll-controls',
      description: 'Prevent scroll buttons from being hidden when inactive.',
      control: 'boolean',
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    updateComplete: {
      description:
        'A read-only promise that resolves when the component has finished updating.',
      control: { disable: true },
      table: {
        category: 'Properties',
        type: { summary: 'Promise<void>' },
        defaultValue: { summary: 'N/A (read-only)' }
      }
    },

    defaultSlot: {
      name: '(default)',
      description:
        'Used for grouping tab panels in the tab group. Must be <code><ug-tab-panel></code> elements.',
      table: {
        category: 'Slots',
        type: { summary: 'HTML' },
        defaultValue: { summary: 'None' }
      },
      control: { type: 'text' }
    },
    navSlot: {
      name: 'nav',
      description:
        'Used for grouping tabs in the tab group. Must be <code><ug-tab></code> elements.',
      table: {
        category: 'Slots',
        type: { summary: 'HTML' },
        defaultValue: { summary: 'None' }
      },
      control: { type: 'text' }
    },
    onUgTabShow: {
      name: 'ug-tab-show',
      control: false,
      description: 'Emitted when a tab is shown.',
      action: 'ug-tab-show',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: {
          // defaultValue.summary should be undefined to hide the - in the auto-docs table
          summary: undefined
        }
      }
    },
    onUgTabHide: {
      name: 'ug-tab-hide',
      control: false,
      description: 'Emitted when a tab is hidden.',
      action: 'ug-tab-hide',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: {
          // defaultValue.summary should be undefined to hide the - in the auto-docs table
          summary: undefined
        }
      }
    },
    show: {
      name: 'show()',
      control: false,
      description: 'Shows the specified tab panel.',
      action: 'show',
      table: {
        category: 'Methods',
        type: { summary: '(panel: string) => void' },
        defaultValue: {
          // defaultValue.summary should be undefined to hide the - in the auto-docs table
          summary: undefined
        }
      }
    }
  }
};

export default meta;

type Story = StoryObj;

export const TabGroup: Story = {
  args: {
    placement: 'top',
    activation: 'auto',
    noScrollControls: false,
    fixedScrollControls: false
  },
  render: (args) => {
    return html`<ug-tab-group
      id="tabGroup"
      placement="${args.placement}"
      activation="${args.activation}"
      ?no-scroll-controls="${args.noScrollControls}"
      ?fixed-scroll-controls="${args.fixedScrollControls}"
    >
      <ug-tab slot="nav" panel="general">General</ug-tab>
      <ug-tab slot="nav" panel="custom">Custom</ug-tab>
      <ug-tab slot="nav" panel="advanced">Advanced</ug-tab>
      <ug-tab slot="nav" panel="disabled" disabled>Disabled</ug-tab>

      <ug-tab-panel name="general">This is the general tab panel.</ug-tab-panel>
      <ug-tab-panel name="custom">This is the custom tab panel.</ug-tab-panel>
      <ug-tab-panel name="advanced"
        >This is the advanced tab panel.</ug-tab-panel
      >
      <ug-tab-panel name="disabled">This is a disabled tab panel.</ug-tab-panel>
    </ug-tab-group> `;
  }
};

export const TabsOnBottom: Story = {
  ...TabGroup,
  args: {
    ...TabGroup.args,
    position: 'bottom'
  },
  parameters: {
    docs: {
      description: {
        story: `Tabs can be shown on the bottom by setting <code>placement</code> to <code>bottom</code>.`
      }
    },
    controls: { disable: true }
  }
};

export const TabsOnStart: Story = {
  ...TabGroup,
  args: {
    ...TabGroup.args,
    position: 'start'
  },
  parameters: {
    docs: {
      description: {
        story: `Tabs can be shown on the starting side by setting <code>placement</code> to <code>start</code>.`
      }
    },
    controls: { disable: true }
  }
};

export const TabsOnEnd: Story = {
  ...TabGroup,
  args: {
    ...TabGroup.args,
    position: 'end'
  },
  parameters: {
    docs: {
      description: {
        story: `Tabs can be shown on the ending side by setting <code>placement</code> to <code>end</code>.`
      }
    },
    controls: { disable: true }
  }
};

export const ClosableTabs: Story = {
  parameters: {
    docs: {
      description: {
        story: `Add the <code>closable</code> attribute to a tab to show a close button. This example shows how you can dynamically remove tabs from the DOM when the close button is activated.`
      }
    },
    controls: { disable: true }
  },
  args: {
    placement: 'top',
    activation: 'auto',
    noScrollControls: false,
    fixedScrollControls: false
  },
  render: (args) => {
    return html`<ug-tab-group
        id="tabGroup"
        placement="${args.placement}"
        activation="${args.activation}"
        ?no-scroll-controls="${args.noScrollControls}"
        ?fixed-scroll-controls="${args.fixedScrollControls}"
      >
        <ug-tab slot="nav" panel="general">General</ug-tab>
        <ug-tab slot="nav" panel="closable-1" closable>Closable 1</ug-tab>
        <ug-tab slot="nav" panel="closable-2" closable>Closable 2</ug-tab>
        <ug-tab slot="nav" panel="closable-3" closable>Closable 3</ug-tab>

        <ug-tab-panel name="general"
          >This is the general tab panel.</ug-tab-panel
        >
        <ug-tab-panel name="closable-1"
          >This is the first closable tab panel.</ug-tab-panel
        >
        <ug-tab-panel name="closable-2"
          >This is the second closable tab panel.</ug-tab-panel
        >
        <ug-tab-panel name="closable-3"
          >This is the third closable tab panel.</ug-tab-panel
        >
      </ug-tab-group>

      <script>
        () => {
          const tabGroup = document.querySelector('.tabs-closable');

          tabGroup.addEventListener('ug-close', async (event) => {
            const tab = event.target;
            const panel = tabGroup.querySelector(
              'ug-tab-panel[name="\${tab.panel}"]'
            );

            // Show the previous tab if the tab is currently active
            if (tab.active) {
              tabGroup.show(tab.previousElementSibling.panel);
            }

            // Remove the tab + panel
            tab.remove();
            panel.remove();
          });
        };
      </script>`;
  }
};

export const ScrollingTabs: Story = {
  parameters: {
    docs: {
      description: {
        story: `When there are more tabs than horizontal space allows, the nav will be scrollable.`
      }
    },
    controls: { disable: true }
  },
  args: {
    placement: 'top',
    activation: 'auto',
    noScrollControls: false,
    fixedScrollControls: false
  },
  render: (args) => {
    return html`<ug-tab-group
      placement="${args.placement}"
      activation="${args.activation}"
      ?no-scroll-controls="${args.noScrollControls}"
      ?fixed-scroll-controls="${args.fixedScrollControls}"
    >
      <ug-tab slot="nav" panel="tab-1">Tab 1</ug-tab>
      <ug-tab slot="nav" panel="tab-2">Tab 2</ug-tab>
      <ug-tab slot="nav" panel="tab-3">Tab 3</ug-tab>
      <ug-tab slot="nav" panel="tab-4">Tab 4</ug-tab>
      <ug-tab slot="nav" panel="tab-5">Tab 5</ug-tab>
      <ug-tab slot="nav" panel="tab-6">Tab 6</ug-tab>
      <ug-tab slot="nav" panel="tab-7">Tab 7</ug-tab>
      <ug-tab slot="nav" panel="tab-8">Tab 8</ug-tab>
      <ug-tab slot="nav" panel="tab-9">Tab 9</ug-tab>
      <ug-tab slot="nav" panel="tab-10">Tab 10</ug-tab>
      <ug-tab slot="nav" panel="tab-11">Tab 11</ug-tab>
      <ug-tab slot="nav" panel="tab-12">Tab 12</ug-tab>
      <ug-tab slot="nav" panel="tab-13">Tab 13</ug-tab>
      <ug-tab slot="nav" panel="tab-14">Tab 14</ug-tab>
      <ug-tab slot="nav" panel="tab-15">Tab 15</ug-tab>
      <ug-tab slot="nav" panel="tab-16">Tab 16</ug-tab>
      <ug-tab slot="nav" panel="tab-17">Tab 17</ug-tab>
      <ug-tab slot="nav" panel="tab-18">Tab 18</ug-tab>
      <ug-tab slot="nav" panel="tab-19">Tab 19</ug-tab>
      <ug-tab slot="nav" panel="tab-20">Tab 20</ug-tab>

      <ug-tab-panel name="tab-1">Tab panel 1</ug-tab-panel>
      <ug-tab-panel name="tab-2">Tab panel 2</ug-tab-panel>
      <ug-tab-panel name="tab-3">Tab panel 3</ug-tab-panel>
      <ug-tab-panel name="tab-4">Tab panel 4</ug-tab-panel>
      <ug-tab-panel name="tab-5">Tab panel 5</ug-tab-panel>
      <ug-tab-panel name="tab-6">Tab panel 6</ug-tab-panel>
      <ug-tab-panel name="tab-7">Tab panel 7</ug-tab-panel>
      <ug-tab-panel name="tab-8">Tab panel 8</ug-tab-panel>
      <ug-tab-panel name="tab-9">Tab panel 9</ug-tab-panel>
      <ug-tab-panel name="tab-10">Tab panel 10</ug-tab-panel>
      <ug-tab-panel name="tab-11">Tab panel 11</ug-tab-panel>
      <ug-tab-panel name="tab-12">Tab panel 12</ug-tab-panel>
      <ug-tab-panel name="tab-13">Tab panel 13</ug-tab-panel>
      <ug-tab-panel name="tab-14">Tab panel 14</ug-tab-panel>
      <ug-tab-panel name="tab-15">Tab panel 15</ug-tab-panel>
      <ug-tab-panel name="tab-16">Tab panel 16</ug-tab-panel>
      <ug-tab-panel name="tab-17">Tab panel 17</ug-tab-panel>
      <ug-tab-panel name="tab-18">Tab panel 18</ug-tab-panel>
      <ug-tab-panel name="tab-19">Tab panel 19</ug-tab-panel>
      <ug-tab-panel name="tab-20">Tab panel 20</ug-tab-panel>
    </ug-tab-group>`;
  }
};

export const FixedScrollControls: Story = {
  ...ScrollingTabs,
  args: {
    ...ScrollingTabs.args,
    fixedScrollControls: true
  },
  parameters: {
    docs: {
      description: {
        story: `When tabs are scrolled all the way to one side, the scroll button on that side can’t be clicked. Set the <code>fixed-scroll-controls</code> attribute to keep the effected button visible in that case.`
      }
    },
    controls: { disable: true }
  }
};

export const ManualActivation: Story = {
  ...TabGroup,
  args: {
    ...TabGroup.args,
    activation: 'manual'
  },
  parameters: {
    docs: {
      description: {
        story: `When focused, keyboard users can press <kbd>Left</kbd> or <kbd>Right</kbd> to select the desired tab. By default, the corresponding tab panel will be shown immediately (automatic activation). You can change this behavior by setting <code>activation="manual"</code> which will require the user to press <kbd>Space</kbd> or <kbd>Enter</kbd> before showing the tab panel (manual activation).`
      }
    },
    controls: { disable: true }
  }
};

export const TabGroupWithEvents: Story = {
  tags: ['!autodocs'],

  args: {
    placement: 'top',
    activation: 'auto',
    noScrollControls: false,
    fixedScrollControls: false
  },
  render: (args) => {
    return html`<ug-tab-group
      id="tabGroup"
      placement="${args.placement}"
      activation="${args.activation}"
      ?no-scroll-controls="${args.noScrollControls}"
      ?fixed-scroll-controls="${args.fixedScrollControls}"
      @ug-tab-show="${action('ug-tab-show')}"
      @ug-tab-hide="${action('ug-tab-hide')}"
    >
      <ug-tab slot="nav" panel="general">General</ug-tab>
      <ug-tab slot="nav" panel="custom">Custom</ug-tab>
      <ug-tab slot="nav" panel="advanced">Advanced</ug-tab>
      <ug-tab slot="nav" panel="disabled" disabled>Disabled</ug-tab>

      <ug-tab-panel name="general">This is the general tab panel.</ug-tab-panel>
      <ug-tab-panel name="custom">This is the custom tab panel.</ug-tab-panel>
      <ug-tab-panel name="advanced"
        >This is the advanced tab panel.</ug-tab-panel
      >
      <ug-tab-panel name="disabled">This is a disabled tab panel.</ug-tab-panel>
    </ug-tab-group> `;
  },
  play: async ({ canvasElement }) => {
    const tabGroup = canvasElement.querySelector('#tabGroup');
    const tabs = tabGroup!.querySelectorAll('ug-tab');

    for (const tab of tabs) {
      if (!tab.hasAttribute('disabled')) {
        tab.click();
        await new Promise((resolve) => setTimeout(resolve, 500)); // Wait for animation/events
      }
    }
  }
};
