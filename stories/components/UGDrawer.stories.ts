import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/drawer';
import '/lib/components/button';

const meta: Meta = {
  title: 'Components/Drawer',
  component: 'ug-drawer',
  parameters: {
    docs: {
      subtitle:
        'Drawers slide in from a container to expose additional options and information.'
    }
  },
  argTypes: {
    modal: {
      control: false,
      description:
        'Exposes the internal modal utility that controls focus trapping. To temporarily disable focus trapping and allow third-party modals spawned from an active modal, call `modal.activateExternal()` when the third-party modal opens. Upon closing, call `modal.deactivateExternal()` to restore focus trapping.',
      table: {
        category: 'Properties',
        type: { summary: 'Modal' },
        defaultValue: { summary: 'new Modal(this)' }
      }
    },
    open: {
      control: 'boolean',
      description:
        'Indicates whether or not the drawer is open. You can toggle this attribute to show and hide the drawer, or you can use the <code>show()</code> and <code>hide()</code> methods and this attribute will reflect the drawer’s open state.<br>`reflects: true`',
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    label: {
      control: 'text',
      description:
        'The drawer’s label displayed in the header. You should always include a relevant label even when using <code>no-header</code>, as it is required for proper accessibility. If you need to display HTML, use the <code>label</code> slot instead.<br>`reflects: true`',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    placement: {
      control: 'select',
      options: ['top', 'end', 'bottom', 'start'],
      description:
        'The direction from which the drawer will open.<br>`reflects: true`',
      table: {
        category: 'Properties',
        type: { summary: "'top' | 'end' | 'bottom' | 'start'" },
        defaultValue: { summary: "'end'" }
      }
    },
    contained: {
      control: 'boolean',
      description:
        'By default, the drawer slides out of its containing block (usually the viewport). To make the drawer slide out of its parent element, set this attribute and add <code>position: relative</code> to the parent.<br>`reflects: true`',
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    'no-header': {
      control: 'boolean',
      description:
        'Removes the header. This will also remove the default close button, so please ensure you provide an easy, accessible way for users to dismiss the drawer.<br>`reflects: true`',
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    updateComplete: {
      control: false,
      description:
        'A read-only promise that resolves when the component has finished updating.',
      table: {
        category: 'Properties',
        type: { summary: 'Promise<void>' },
        defaultValue: { summary: undefined }
      }
    },
    //SLOTS

    defaultSlot: {
      control: false,
      name: '(default)',
      description: 'The drawer’s main content.',
      table: {
        category: 'Slots',
        type: { summary: 'HTMLElement' }
      }
    },
    labelSlot: {
      control: false,
      name: 'label',
      description:
        'The drawer’s label. Alternatively, you can use the `label` attribute.',
      table: {
        category: 'Slots',
        type: { summary: 'HTMLElement' }
      }
    },
    headerActionsSlot: {
      control: false,
      name: 'header-actions',
      description:
        'Optional actions to add to the header. Works best with `<ug-icon-button>`.',
      table: {
        category: 'Slots',
        type: { summary: 'HTMLElement' }
      }
    },
    footerSlot: {
      control: false,
      name: 'footer',
      description:
        'The drawer’s footer, usually one or more buttons representing various options.',
      table: {
        category: 'Slots',
        type: { summary: 'HTMLElement' }
      }
    },
    //EVENTS
    'ug-show': {
      control: false,
      name: 'ug-show',
      action: 'ug-show',
      description: 'Emitted when the drawer opens.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      }
    },
    'ug-after-show': {
      control: false,
      name: 'ug-after-show',
      action: 'ug-after-show',
      description:
        'Emitted after the drawer opens and all animations are complete.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      }
    },
    'ug-hide': {
      control: false,
      name: 'ug-hide',
      action: 'ug-hide',
      description: 'Emitted when the drawer closes.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      }
    },
    'ug-after-hide': {
      control: false,
      name: 'ug-after-hide',
      action: 'ug-after-hide',
      description:
        'Emitted after the drawer closes and all animations are complete.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      }
    },
    'ug-initial-focus': {
      control: false,
      name: 'ug-initial-focus',
      action: 'ug-initial-focus',
      description:
        'Emitted when the drawer opens and is ready to receive focus. Calling `event.preventDefault()` will prevent focusing and allow you to set it on a different element, such as an input.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      }
    },
    'ug-request-close': {
      control: false,
      name: 'ug-request-close',
      action: 'ug-request-close',
      description:
        'Emitted when the user attempts to close the drawer by clicking the close button, clicking the overlay, or pressing escape. Calling `event.preventDefault()` will keep the drawer open. Avoid using this unless closing the drawer will result in destructive behavior such as data loss.',
      table: {
        category: 'Events',
        type: {
          summary:
            "CustomEvent<{ source: 'close-button' | 'keyboard' | 'overlay' }>"
        },
        defaultValue: { summary: undefined }
      }
    },
    //METHODS
    show: {
      name: 'show()',
      control: false,
      description: 'Shows the drawer.',
      table: {
        category: 'Methods',
        type: { summary: '() => void' }
      }
    },
    hide: {
      name: 'hide()',
      control: false,
      description: 'Hides the drawer.',
      table: {
        category: 'Methods',
        type: { summary: '() => void' }
      }
    }
  }
};

export default meta;

type Story = StoryObj;

export const Drawer: Story = {
  args: {
    open: false,
    label: 'Drawer Title',
    placement: 'end',
    contained: false,
    noHeader: false
  },
  render: (arg) => {
    return html`<ug-drawer
        label="Drawer"
        class="drawer-overview"
        ?open=${arg.open}
        label=${arg.label}
        placement=${arg.placement}
        ?contained=${arg.contained}
        ?no-header=${arg.noHeader}
      >
        > Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <ug-button slot="footer" variant="primary">Close</ug-button>
      </ug-drawer>

      <ug-button>Open Drawer</ug-button>

      <script>
        const drawer = document.querySelector('.drawer-overview');
        const openButton = drawer.nextElementSibling;
        const closeButton = drawer.querySelector(
          'ug-button[variant="primary"]'
        );

        openButton.addEventListener('click', () => drawer.show());
        closeButton.addEventListener('click', () => drawer.hide());
      </script>`;
  }
};

export const Drawer2: Story = {
  args: {
    open: false,
    label: 'Drawer Title',
    placement: 'end',
    contained: false,
    noHeader: false
  },
  render: () => {
    return html`<ug-drawer label="Drawer" class="drawer-overview">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <ug-button slot="footer" variant="primary">Close</ug-button>
      </ug-drawer>

      <ug-button>Open Drawer</ug-button>

      <script>
        const drawer = document.querySelector('.drawer-overview');
        const openButton = drawer.nextElementSibling;
        const closeButton = drawer.querySelector(
          'ug-button[variant="primary"]'
        );

        openButton.addEventListener('click', () => drawer.show());
        closeButton.addEventListener('click', () => drawer.hide());
      </script>`;
  }
};
