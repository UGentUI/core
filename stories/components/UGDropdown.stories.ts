import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/dropdown';
import '/lib/components/button';
import '/lib/components/menu';
import '/lib/components/menu-item';
import '/lib/components/divider';

const meta: Meta = {
  title: 'Components/Dropdown',
  component: 'ug-dropdown',
  parameters: {
    docs: {
      subtitle:
        'Dropdowns expose additional content that “drops down” in a panel.',
      source: {
        format: true
      }
    }
  },
  argTypes: {
    open: {
      description:
        'Indicates whether or not the dropdown is open. You can toggle this attribute to show and hide the dropdown, or you can use the <code>show()</code> and <code>hide()</code> methods and this attribute will reflect the dropdown’s open state.',
      control: 'boolean',
      table: {
        category: 'attributes',
        defaultValue: { summary: 'false' }
      }
    },
    placement: {
      control: 'select',
      options: [
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
      ],
      description:
        'The preferred placement of the dropdown panel. Note that the actual placement may vary as needed to keep the panel inside of the viewport.',
      table: {
        category: 'attributes',
        type: {
          summary:
            'top | top-start | top-end | bottom | bottom-start | bottom-end | right | right-start | right-end | left | left-start | left-end'
        },
        defaultValue: { summary: 'bottom-start' }
      }
    },
    disabled: {
      description: 'Disables the dropdown so the panel will not open.',
      control: 'boolean',
      table: {
        category: 'attributes',
        defaultValue: { summary: 'false' }
      }
    },
    stayOpenOnSelect: {
      description:
        'By default, the dropdown is closed when an item is selected. This attribute will keep it open instead. Useful for dropdowns that allow for multiple interactions.',
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
      options: ['width', 'height', 'both', undefined],
      description:
        'Syncs the popup width or height to that of the trigger element.',
      table: {
        category: 'attributes',
        type: {
          summary: 'width, height, both, undefined'
        },
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

export const DefaultDropdown: Story = {
  args: {
    placement: 'bottom-start',
    open: false,
    disabled: false,
    stayOpenOnSelect: false,
    distance: 0,
    skidding: 0,
    hoist: false,
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
      open="${args.open}"
      disabled="${args.disabled}"
      stay-open-on-select="${args.stayOpenOnSelect}"
      distance="${args.distance}"
      skidding="${args.skidding}"
      hoist="${args.hoist}"
      sync="${args.sync}"
    >
      ${args.triggerSlot
        ? html`<ug-button slot="trigger" caret>${args.triggerSlot}</ug-button>`
        : ''}
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
      </ug-menu>
    </ug-dropdown>`
};

function exampleMenu(triggerLabel: string) {
  return html`<ug-button slot="trigger" caret>${triggerLabel}</ug-button>
    <ug-menu>
      <ug-menu-item>Cut</ug-menu-item>
      <ug-menu-item>Copy</ug-menu-item>
      <ug-menu-item>Paste</ug-menu-item>
      <ug-divider></ug-divider>
      <ug-menu-item>Find</ug-menu-item>
      <ug-menu-item>Replace</ug-menu-item>
    </ug-menu>`;
}

export const Placements: Story = {
  args: {},
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `The preferred placement of the dropdown can be set with the placement attribute. Note that the actual position may vary to ensure the panel remains in the viewport.`
      }
    }
  },
  render: () =>
    html`<style>
        .placements {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          padding: 10px;
        }
        .dropdown {
          margin: 10px;
        }
      </style>
      <div class="placements">
        <ug-dropdown class="dropdown" placement="bottom">
          ${exampleMenu('bottom')}
        </ug-dropdown>
        <ug-dropdown class="dropdown" placement="bottom-start">
          ${exampleMenu('bottom-start')}
        </ug-dropdown>
        <ug-dropdown class="dropdown" placement="bottom-end">
          ${exampleMenu('bottom-end')}
        </ug-dropdown>
        <ug-dropdown class="dropdown" placement="right">
          ${exampleMenu('right')}
        </ug-dropdown>
        <ug-dropdown class="dropdown" placement="right-start">
          ${exampleMenu('right-start')}
        </ug-dropdown>
        <ug-dropdown class="dropdown" placement="right-end">
          ${exampleMenu('right-end')}
        </ug-dropdown>
        <ug-dropdown class="dropdown" placement="left">
          ${exampleMenu('left')}
        </ug-dropdown>
        <ug-dropdown class="dropdown" placement="left-start">
          ${exampleMenu('left-start')}
        </ug-dropdown>
        <ug-dropdown class="dropdown" placement="left-end">
          ${exampleMenu('left-end')}
        </ug-dropdown>
        <ug-dropdown class="dropdown" placement="top"
          >${exampleMenu('top')}</ug-dropdown
        >
        <ug-dropdown class="dropdown" placement="top-start">
          ${exampleMenu('top-start')}
        </ug-dropdown>
        <ug-dropdown class="dropdown" placement="top-end">
          ${exampleMenu('top-end')}
        </ug-dropdown>
      </div>`
};
