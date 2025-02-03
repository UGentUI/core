import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/drawer';
import '/lib/components/button';
import '/lib/components/icon';
import '/lib/components/icon-button';
import { userEvent, within } from '@storybook/test';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Components/Drawer',
  component: 'ug-drawer',
  parameters: {
    docs: {
      subtitle:
        'Drawers slide in from a container to expose additional options and information.'
    },
    source: {
      format: true,
      transform: (code: string) => {
        // Remove empty/default attributes and replace boolean attributes from the source code display
        return code
          .replace(/\s(placement="end")/g, '')
          .replace(/\s* open=""/g, ' open')
          .replace(/\s* contained=""/g, ' contained')
          .replace(/\s* noheader=""/g, ' noheader');
      }
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
    noHeader: {
      name: 'no-header',
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

const buttonAndScript = (drawerClass: string) => {
  return html` <ug-button>Open Drawer</ug-button>
    <script>
      () => {
        const drawer = document.querySelector('.${drawerClass}');
        const openButton = drawer.parentElement.nextElementSibling;
        const closeButton = drawer.querySelector(
          'ug-button[variant="primary"]'
        );

        openButton.addEventListener(
          'click',
          () => (drawer.open = !drawer.open)
        );
        closeButton.addEventListener('click', () => drawer.hide());
      };
    </script>`;
};

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
        ?noHeader=${arg.noHeader}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <ug-button slot="footer" variant="primary">Close</ug-button>
      </ug-drawer>

      ${buttonAndScript('drawer-overview')} `;
  }
};

export const SlideInFromStart: Story = {
  ...Drawer,
  args: {
    ...Drawer.args,
    placement: 'start'
  },
  parameters: {
    // Disable controls for this story because its a predefined state of the component
    controls: { disable: true },
    docs: {
      description: {
        story: `By default, drawers slide in from the end. To make the drawer slide in from the start, set the <code>placement</code> attribute to <code>start</code>.`
      }
    }
  }
};

export const SlideInFromTop: Story = {
  ...Drawer,
  args: {
    ...Drawer.args,
    placement: 'top'
  },
  parameters: {
    // Disable controls for this story because its a predefined state of the component
    controls: { disable: true },
    docs: {
      description: {
        story: `To make the drawer slide in from the top, set the <code>placement</code> attribute to <code>top</code>.`
      }
    }
  }
};

export const SlideInFromBottom: Story = {
  ...Drawer,
  args: {
    ...Drawer.args,
    placement: 'bottom'
  },
  parameters: {
    // Disable controls for this story because its a predefined state of the component
    controls: { disable: true },
    docs: {
      description: {
        story: `To make the drawer slide in from the bottom, set the <code>placement</code> attribute to <code>bottom</code>.`
      }
    }
  }
};

export const ContainedToAnElement: Story = {
  parameters: {
    // Disable controls for this story because its a predefined state of the component
    controls: { disable: true },
    docs: {
      description: {
        story: `By default, drawers slide out of their [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block), which is usually the viewport. To make a drawer slide out of a parent element, add the <code>contained</code> attribute to the drawer and apply <code>position: relative</code> to its parent.

Unlike normal drawers, contained drawers are not modal. This means they do not show an overlay, they do not trap focus, and they are not dismissible with <key>Escape</key>. This is intentional to allow users to interact with elements outside of the drawer.`
      }
    }
  },
  render: () => {
    return html`<div
        style="position: relative; border: solid 2px var(--ug-panel-border-color); height: 300px; padding: 1rem; margin-bottom: 1rem;"
      >
        The drawer will be contained to this box. This content won't shift or be
        affected in any way when the drawer opens.

        <ug-drawer
          label="Drawer"
          contained
          class="drawer-contained"
          style="--size: 50%;"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <ug-button slot="footer" variant="primary">Close</ug-button>
        </ug-drawer>
      </div>

      ${buttonAndScript('drawer-contained')} `;
  }
};

export const Scrolling: Story = {
  parameters: {
    // Disable controls for this story because its a predefined state of the component
    controls: { disable: true },
    docs: {
      description: {
        story: `By design, a drawer’s height will never exceed 100% of its container. As such, drawers will not scroll with the page to ensure the header and footer are always accessible to the user.`
      }
    }
  },
  render: () => {
    return html`<ug-drawer label="Drawer" class="drawer-scrolling">
        <div
          style="height: 150vh; border: dashed 2px var(--ug-color-neutral-200); padding: 0 1rem;"
        >
          <p>Scroll down and give it a try! 👇</p>
        </div>
        <ug-button slot="footer" variant="primary">Close</ug-button>
      </ug-drawer>

      ${buttonAndScript('drawer-scrolling')} `;
  }
};

export const HeaderActions: Story = {
  parameters: {
    // Disable controls for this story because its a predefined state of the component
    controls: { disable: true },
    docs: {
      description: {
        story: `The header shows a functional close button by default. You can use the <code>header-actions</code> slot to add additional [icon buttons](?path=/docs/components-iconbutton--docs) if needed.`
      }
    }
  },
  render: () => {
    return html`<ug-drawer label="Drawer" class="drawer-header-actions">
        <ug-icon-button
          style="color: red;"
          class="new-window"
          slot="header-actions"
          name="box-arrow-up-right"
        ></ug-icon-button>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <ug-button slot="footer" variant="primary">Close</ug-button>
      </ug-drawer>

      <ug-button>Open Drawer</ug-button>

      <script>
        () => {
          const drawer = document.querySelector('.drawer-header-actions');
          const openButton = drawer.nextElementSibling;
          const closeButton = drawer.querySelector(
            'ug-button[variant="primary"]'
          );
          const newWindowButton = drawer.querySelector('.new-window');

          openButton.addEventListener('click', () => drawer.show());
          closeButton.addEventListener('click', () => drawer.hide());
          newWindowButton.addEventListener('click', () =>
            window.open(location.href)
          );
        };
      </script> `;
  }
};

export const PreventingTheDrawerFromClosing: Story = {
  parameters: {
    // Disable controls for this story because its a predefined state of the component
    controls: { disable: true },
    docs: {
      description: {
        story: `By default, drawers will close when the user clicks the close button, clicks the overlay, or presses the <key>Escape</key> key. In most cases, the default behavior is the best behavior in terms of UX. However, there are situations where this may be undesirable, such as when data loss will occur.

To keep the drawer open in such cases, you can cancel the <code>ug-request-close</code> event. When canceled, the drawer will remain open and pulse briefly to draw the user’s attention to it.

You can use <code>event.detail.source</code> to determine what triggered the request to close. This example prevents the drawer from closing when the overlay is clicked, but allows the close button or <key>Escape</key> to dismiss it.`
      }
    }
  },
  render: () => {
    return html`<ug-drawer label="Drawer" class="drawer-deny-close">
        This drawer will not close when you click on the overlay.
        <ug-button slot="footer" variant="primary">Close</ug-button>
      </ug-drawer>

      <ug-button>Open Drawer</ug-button>

      <script>
        () => {
          const drawer = document.querySelector('.drawer-deny-close');
          const openButton = drawer.nextElementSibling;
          const closeButton = drawer.querySelector(
            'ug-button[variant="primary"]'
          );

          openButton.addEventListener('click', () => drawer.show());
          closeButton.addEventListener('click', () => drawer.hide());

          // Prevent the drawer from closing when the user clicks on the overlay
          drawer.addEventListener('ug-request-close', (event) => {
            if (event.detail.source === 'overlay') {
              event.preventDefault();
            }
          });
        };
      </script>`;
  }
};

export const CustomizingInitialFocus: Story = {
  parameters: {
    // Disable controls for this story because its a predefined state of the component
    controls: { disable: true },
    docs: {
      description: {
        story: `By default, drawers will close when the user clicks the close button, clicks the overlay, or presses the <key>Escape</key> key. In most cases, the default behavior is the best behavior in terms of UX. However, there are situations where this may be undesirable, such as when data loss will occur.

To keep the drawer open in such cases, you can cancel the <code>ug-request-close</code> event. When canceled, the drawer will remain open and pulse briefly to draw the user’s attention to it.

You can use <code>event.detail.source</code> to determine what triggered the request to close. This example prevents the drawer from closing when the overlay is clicked, but allows the close button or <key>Escape</key> to dismiss it.

You can further customize initial focus behavior by canceling the ug-initial-focus event and setting focus yourself inside the event handler.`
      }
    }
  },
  render: () => {
    return html`<ug-drawer label="Drawer" class="drawer-deny-close">
        This drawer will not close when you click on the overlay.
        <ug-button slot="footer" variant="primary">Close</ug-button>
      </ug-drawer>

      <ug-button>Open Drawer</ug-button>

      <script>
        () => {
          const drawer = document.querySelector('.drawer-deny-close');
          const openButton = drawer.nextElementSibling;
          const closeButton = drawer.querySelector(
            'ug-button[variant="primary"]'
          );

          openButton.addEventListener('click', () => drawer.show());
          closeButton.addEventListener('click', () => drawer.hide());

          // Prevent the drawer from closing when the user clicks on the overlay
          drawer.addEventListener('ug-request-close', (event) => {
            if (event.detail.source === 'overlay') {
              event.preventDefault();
            }
          });
        };
      </script>`;
  }
};

export const DrawerWithEvents: Story = {
  tags: ['!autodocs'],
  parameters: {
    // Disable controls for this story because its a predefined state of the component
    controls: { disable: true }
  },
  render: (arg) => {
    return html`<ug-drawer
        label="Drawer"
        class="drawer-overview"
        ?open=${arg.open}
        label=${arg.label}
        placement=${arg.placement}
        ?contained=${arg.contained}
        ?noHeader=${arg.noHeader}
        @ug-show="${action('ug-show')}"
        @ug-after-show="${action('ug-after-show')}"
        @ug-hide="${action('ug-hide')}"
        @ug-after-hide="${action('ug-after-hide')}"
        @ug-initial-focus="${action('ug-initial-focus')}"
        @ug-request-close="${action('ug-request-close')}"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <ug-button slot="footer" variant="primary">Close</ug-button>
      </ug-drawer>

      ${buttonAndScript('drawer-overview')} `;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const openButton = canvas.getByText('Open Drawer');
    const closeButton = canvas.getByText('Close');

    // Simulate opening the drawer
    await userEvent.click(openButton);
    action('Drawer opened')();

    // Simulate closing the drawer
    await userEvent.click(closeButton);
    action('Drawer closed')();
  }
};
