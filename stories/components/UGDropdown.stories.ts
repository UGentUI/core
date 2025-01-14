import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/dropdown';
import '/lib/components/button';
import '/lib/components/menu';
import '/lib/components/menu-item';
import '/lib/components/divider';
import { UgDropdown } from '../../dist/components/dropdown';

const meta: Meta<typeof UgDropdown> = {
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
    open: {
      description:
        'Indicates whether or not the dropdown is open. You can toggle this attribute to show and hide the dropdown, or you can use the <code>show()</code> and <code>hide()</code> methods and this attribute will reflect the dropdown’s open state.',
      control: 'boolean',
      table: {
        category: 'attributes',
        defaultValue: { summary: false }
      }
    },
    disabled: {
      description: 'Disables the dropdown so the panel will not open.',
      control: 'boolean',
      table: {
        category: 'attributes',
        defaultValue: { summary: false }
      }
    },
    stayOpenOnSelect: {
      description:
        'By default, the dropdown is closed when an item is selected. This attribute will keep it open instead. Useful for dropdowns that allow for multiple interactions.',
      control: 'boolean',
      table: {
        category: 'attributes',
        defaultValue: { summary: false }
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
        defaultValue: { summary: false }
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
    sync: undefined
  },
  parameters: {
    docs: {
      disable: false,
      description: {
        story: `A default dropdown.`
      }
    }
  },
  render: (args) => {
    return html`<ug-dropdown
      placement="${args.placement}"
      open="${args.open}"
      disabled="${args.disabled}"
      stay-open-on-select="${args.stayOpenOnSelect}"
      distance="${args.distance}"
      skidding="${args.skidding}"
      hoist="${args.hoist}"
      sync="${args.sync}"
    >
      <ug-button slot="trigger" caret>Dropdown</ug-button>
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
    </ug-dropdown>`;
  }
};
