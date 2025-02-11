import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/dropdown';
import '/lib/components/button';
import '/lib/components/menu';
import '/lib/components/menu-item';
import '/lib/components/divider';
import { action } from '@storybook/addon-actions';
import { userEvent, within } from '@storybook/test';
import { ifDefined } from 'lit/directives/if-defined.js';

const PLACEMENT_OPTIONS = [
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'right',
  'right-start',
  'right-end',
  'left',
  'left-start',
  'left-end'
];

const SYNC_OPTIONS = ['width', 'height', 'both', undefined];

function longDropdownContent(triggerLabel: string) {
  //prettier-ignore
  return html`${triggerLabel
      ? html`<ug-button slot="trigger" caret>${triggerLabel}</ug-button>`
      : html`<ug-button slot="trigger" caret>Dropdown</ug-button>`}
        <ug-menu>
          <ug-menu-item>Dropdown Item 1</ug-menu-item>
          <ug-menu-item>Dropdown Item 2</ug-menu-item>
          <ug-menu-item>Dropdown Item 3</ug-menu-item>
          <ug-divider></ug-divider>
          <ug-menu-item type="checkbox" checked>Checkbox</ug-menu-item>
          <ug-menu-item disabled>Disabled</ug-menu-item>
          <ug-divider></ug-divider>
          <ug-menu-item>
            Prefix
            <ug-icon slot="prefix" name="gift"></ug-icon>
          </ug-menu-item>
          <ug-menu-item>
            Suffix Icon
            <ug-icon slot="suffix" name="heart"></ug-icon>
          </ug-menu-item>
        </ug-menu>`;
}

function shortDropdownContent(triggerLabel: string) {
  //prettier-ignore
  return html`
        <ug-button slot="trigger" caret>${triggerLabel}</ug-button>
        <ug-menu>
          <ug-menu-item>Cut</ug-menu-item>
          <ug-menu-item>Copy</ug-menu-item>
          <ug-menu-item>Paste</ug-menu-item>
        </ug-menu>`;
}

const meta: Meta = {
  title: 'Components/Dropdown',
  component: 'ug-dropdown',
  parameters: {
    docs: {
      subtitle:
        'Dropdowns expose additional content that “drops down” in a panel.',
      source: {
        format: true,
        transform: (code: string) => {
          // Remove empty/default attributes and replace boolean attributes from the source code display
          return code
            .replace(
              /\s*( placement="bottom-start"| skidding="0"| distance="0")/g,
              ''
            )
            .replace(/\s* hoist=""/g, ' hoist');
        }
      }
    }
  },
  decorators: [
    (Story) => {
      // Apply CSS without showing in code snippet
      const style = document.createElement('style');
      // This breaks the zoom buttons in the toolbar
      style.textContent = '.docs-story :not(.sb-story) { transform: none; }';
      document.head.appendChild(style);
      return Story();
    }
  ],
  argTypes: {
    open: {
      description:
        'Indicates whether or not the dropdown is open. You can toggle this attribute to show and hide the dropdown, or you can use the <code>show()</code> and <code>hide()</code> methods and this attribute will reflect the dropdown’s open state.<br>`reflects: true`',
      control: 'boolean',
      table: {
        category: 'attributes',
        defaultValue: { summary: 'false' }
      }
    },
    placement: {
      control: 'select',
      options: PLACEMENT_OPTIONS,
      description:
        'The preferred placement of the dropdown panel. Note that the actual placement may vary as needed to keep the panel inside of the viewport.<br>`reflects: true`',
      table: {
        category: 'attributes',
        type: {
          summary: PLACEMENT_OPTIONS.join(' | ')
        },
        defaultValue: { summary: 'bottom-start' }
      }
    },
    disabled: {
      description:
        'Disables the dropdown so the panel will not open.<br>`reflects: true`',
      control: 'boolean',
      table: {
        category: 'attributes',
        defaultValue: { summary: 'false' }
      }
    },
    stayOpenOnSelect: {
      name: 'stay-open-on-select',
      description:
        'By default, the dropdown is closed when an item is selected. This attribute will keep it open instead. Useful for dropdowns that allow for multiple interactions.<br>`reflects: true`',
      control: 'boolean',
      table: {
        category: 'attributes',
        defaultValue: { summary: 'false' }
      }
    },
    distance: {
      control: 'number',
      description:
        'The distance in pixels from which to offset the panel away from its trigger.',
      table: {
        category: 'attributes',
        defaultValue: { detail: '0' }
      }
    },
    skidding: {
      control: 'number',
      description:
        'The distance in pixels from which to offset the panel along its trigger.',
      table: {
        category: 'attributes',
        defaultValue: { detail: '0' }
      }
    },
    hoist: {
      description:
        'Enable this option to prevent the panel from being clipped when the component is placed inside a container with overflow: auto|scroll. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.',
      control: 'boolean',
      table: {
        category: 'attributes',
        defaultValue: { summary: 'false' }
      }
    },
    sync: {
      control: 'select',
      options: SYNC_OPTIONS,
      description:
        'Syncs the popup width or height to that of the trigger element.<br>`reflects: true`',
      table: {
        category: 'attributes',
        type: {
          summary: SYNC_OPTIONS.map((v) => '' + v).join(' | ')
        },
        defaultValue: { summary: 'undefined' }
      }
    },
    updateComplete: {
      description:
        'A read-only promise that resolves when the component has finished updating.',
      control: { disable: true }, // Read-only getter, not editable via Storybook controls
      table: {
        category: 'attributes',
        type: { summary: 'Promise<void>' },
        defaultValue: { summary: undefined }
      }
    },
    defaultSlot: {
      control: 'text',
      description: 'The dropdown’s main content.',
      table: {
        category: 'slots',
        type: { summary: 'HTML' },
        defaultValue: { summary: undefined }
      }
    },
    triggerSlot: {
      control: 'text',
      description: 'The dropdown’s trigger, usually a <ug-button> element.',
      table: {
        category: 'slots',
        type: { summary: 'HTML' },
        defaultValue: { summary: undefined }
      }
    },
    ugShow: {
      name: 'ug-show',
      action: 'ug-show', // Logs the ug-show event in the Actions panel
      description: 'Emitted when the dropdown opens.',
      table: {
        type: { summary: undefined },
        category: 'events',
        defaultValue: { summary: undefined }
      },
      control: false
    },
    ugAfterShow: {
      name: 'ug-after-show',
      action: 'ug-after-show', // Logs the ug-after-show event in the Actions panel
      description:
        'Emitted after the dropdown opens and all animations are complete.',
      table: {
        type: { summary: undefined },
        category: 'events',
        defaultValue: { summary: undefined }
      },
      control: false
    },
    ugHide: {
      name: 'ug-hide',
      action: 'ug-hide', // Logs the ug-hide event in the Actions panel
      description: 'Emitted when the dropdown closes.',
      table: {
        type: { summary: undefined },
        category: 'events',
        defaultValue: { summary: undefined }
      },
      control: false
    },
    ugAfterHide: {
      name: 'ug-after-hide',
      action: 'ug-after-hide', // Logs the ug-after-hide event in the Actions panel
      description:
        'Emitted after the dropdown closes and all animations are complete.',
      table: {
        type: { summary: undefined },
        category: 'events',
        defaultValue: { summary: undefined }
      },
      control: false
    },
    show: {
      name: 'show()',
      action: 'show', // Logs the show event in the Actions panel
      description: 'Shows the dropdown panel.',
      table: {
        type: { summary: undefined },
        category: 'methods',
        defaultValue: { summary: undefined }
      },
      control: false
    },
    hide: {
      name: 'hide()',
      action: 'hide', // Logs the hide event in the Actions panel
      description: 'Hides the dropdown panel.',
      table: {
        type: { summary: undefined },
        category: 'methods',
        defaultValue: { summary: undefined }
      },
      control: false
    },
    reposition: {
      name: 'reposition()',
      action: 'reposition', // Logs the reposition event in the Actions panel
      description:
        'Instructs the dropdown menu to reposition. Useful when the position or size of the trigger changes when the menu is activated.',
      table: {
        type: { summary: undefined },
        category: 'methods',
        defaultValue: { summary: undefined }
      },
      control: false
    }
  }
};

export default meta;

type Story = StoryObj;

export const Dropdown: Story = {
  args: {
    placement: 'bottom-start',
    open: false,
    disabled: false,
    stayOpenOnSelect: false,
    distance: 0,
    skidding: 0,
    hoist: true,
    sync: undefined,
    triggerSlot: `Dropdown`
  },
  parameters: {
    docs: {
      disable: false,
      description: {
        story: `A default dropdown.`
      }
    }
  },
  render: (args) =>
    html`<ug-dropdown
      placement="${args.placement}"
      ?open="${args.open}"
      ?disabled="${args.disabled}"
      ?stay-open-on-select="${args.stayOpenOnSelect}"
      distance="${args.distance}"
      skidding="${args.skidding}"
      ?hoist="${args.hoist}"
      sync="${ifDefined(args.sync)}"
    >
      ${longDropdownContent(`${args.triggerSlot}`)}
    </ug-dropdown>`
};

export const GettingTheSelectedItem: Story = {
  args: {},
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `When dropdowns are used with [menus](?path=/docs/components-menu--docs), you can listen for the ug-select event to determine which menu item was selected. The menu item element will be exposed in <code>event.detail.item</code>. You can set <code>value</code> props to make it easier to identify commands.`
      }
    }
  },
  render: () =>
    html`<div class="dropdown-selection">
        <ug-dropdown hoist>
          <ug-button slot="trigger" caret>Edit</ug-button>
          <ug-menu>
            <ug-menu-item value="cut">Cut</ug-menu-item>
            <ug-menu-item value="copy">Copy</ug-menu-item>
            <ug-menu-item value="paste">Paste</ug-menu-item>
          </ug-menu>
        </ug-dropdown>
      </div>

      <script>
        () => {
          const container = document.querySelector('.dropdown-selection');
          const dropdown = container.querySelector('ug-dropdown');

          dropdown.addEventListener('ug-select', (event) => {
            const selectedItem = event.detail.item;
            alert(selectedItem.value);
          });
        };
      </script>`
};

export const Placements: Story = {
  args: {},
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `The preferred placement of the dropdown can be set with the <code>placement</code> attribute. Note that the actual position may vary to ensure the panel remains in the viewport.`
      }
    }
  },
  render: () =>
    //prettier-ignore
    html`
    <style>
    .placements {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding: 120px;
    }
    .dropdown {
      margin: 10px;
    }
    ug-button {
      width: -webkit-fill-available;
    }
    </style>
    <div class="placements">${PLACEMENT_OPTIONS.map((placement) =>
            html`
      <ug-dropdown class="dropdown" placement="${placement}">${shortDropdownContent(`Dropdown with ${placement} placement`)}
      </ug-dropdown>
      `
      )}
    </div>`
};

export const Distance: Story = {
  ...Dropdown,
  args: {
    ...Dropdown.args,
    distance: 30
  },
  parameters: {
    docs: {
      description: {
        story: `The distance from the panel to the trigger can be customized using the <code>distance</code> attribute. This value is specified in pixels.`
      }
    }
  }
};

export const Skidding: Story = {
  ...Dropdown,
  args: {
    ...Dropdown.args,
    skidding: 30
  },
  parameters: {
    docs: {
      description: {
        story: `The offset of the panel along the trigger can be customized using the <code>skidding</code> attribute. This value is specified in pixels.`
      }
    }
  }
};

export const Submenus: Story = {
  args: {},
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `To create a submenu, nest an <code><ug-menu slot="submenu"></code> element in a [menu item](?path=/docs/components-menuitem--docs). As a UX best practice, avoid using more than one level of submenu when possible. `
      }
    }
  },
  render: () =>
    html`<ug-dropdown hoist>
      <ug-button slot="trigger" caret>Edit</ug-button>

      <ug-menu style="max-width: 200px;">
        <ug-menu-item value="undo">Undo</ug-menu-item>
        <ug-menu-item value="redo">Redo</ug-menu-item>
        <ug-divider></ug-divider>
        <ug-menu-item value="cut">Cut</ug-menu-item>
        <ug-menu-item value="copy">Copy</ug-menu-item>
        <ug-menu-item value="paste">Paste</ug-menu-item>
        <ug-divider></ug-divider>
        <ug-menu-item>
          Find
          <ug-menu slot="submenu">
            <ug-menu-item value="find">Find…</ug-menu-item>
            <ug-menu-item value="find-previous">Find Next</ug-menu-item>
            <ug-menu-item value="find-next">Find Previous</ug-menu-item>
          </ug-menu>
        </ug-menu-item>
        <ug-menu-item>
          Transformations
          <ug-menu slot="submenu">
            <ug-menu-item value="uppercase">Make uppercase</ug-menu-item>
            <ug-menu-item value="lowercase">Make lowercase</ug-menu-item>
            <ug-menu-item value="capitalize">Capitalize</ug-menu-item>
          </ug-menu>
        </ug-menu-item>
      </ug-menu>
    </ug-dropdown> `
};

export const Hoisting: Story = {
  args: {},
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Dropdown panels will be clipped if they’re inside a container that has <code>overflow: auto|hidden</code>. The <code>hoist</code> attribute forces the panel to use a fixed positioning strategy, allowing it to break out of the container. In this case, the panel will be positioned relative to its [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block), which is usually the viewport unless an ancestor uses a <code>transform</code>, <code>perspective</code>, or <code>filter</code>. [Refer to this page](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) for more details.`
      }
    }
  },
  render: () =>
    html`<div class="dropdown-hoist">
        <ug-dropdown>
          <ug-button slot="trigger" caret>No Hoist</ug-button>
          <ug-menu>
            <ug-menu-item>Item 1</ug-menu-item>
            <ug-menu-item>Item 2</ug-menu-item>
            <ug-menu-item>Item 3</ug-menu-item>
          </ug-menu>
        </ug-dropdown>

        <ug-dropdown hoist>
          <ug-button slot="trigger" caret>Hoist</ug-button>
          <ug-menu>
            <ug-menu-item>Item 1</ug-menu-item>
            <ug-menu-item>Item 2</ug-menu-item>
            <ug-menu-item>Item 3</ug-menu-item>
          </ug-menu>
        </ug-dropdown>
      </div>

      <style>
        .dropdown-hoist {
          position: relative;
          border: solid 2px var(--ug-panel-border-color);
          padding: var(--ug-spacing-medium);
          overflow: hidden;
        }
      </style>`
};

export const DropdownWithEvents: Story = {
  tags: ['!autodocs'],
  args: {},
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `This story demonstrates how the Dropdown handles events like ug-show, ug-after-show, ug-hide, ug-after-hide`
      }
    }
  },
  render: () =>
    html` <div>
      <ug-dropdown
        data-testid="dropdown-test"
        class="dropdown"
        placement="bottom-start"
        @ug-show="${action('ug-show')}"
        @ug-after-show="${action('ug-after-show')}"
        @ug-hide="${action('ug-hide')}"
        @ug-after-hide="${action('ug-after-hide')}"
      >
        ${shortDropdownContent('Dropdown')}
      </ug-dropdown>
    </div>`,
  play: async ({ canvasElement }) => {
    // Get the dropdown inside the Storybook canvas
    const canvas = within(canvasElement);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const dropdown = canvas.getByTestId('dropdown-test'); // Make sure to add `data-testid="dropdown-test"` in your story

    // Access the trigger button inside <ug-dropdown>
    const button = dropdown.querySelector('ug-button');

    // The trigger itself might be inside another Shadow DOM
    const shadowButton = button!.shadowRoot!.querySelector('button')!;

    // Open dropdown
    await userEvent.click(shadowButton);

    await new Promise((resolve) => setTimeout(resolve, 800));

    // Close dropdown
    await userEvent.click(shadowButton);
  }
};
