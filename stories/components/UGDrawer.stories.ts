import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/drawer';
import '/lib/components/button';
import '/lib/components/icon';
import '/lib/components/icon-button';
import '/lib/components/input';
import { action } from '@storybook/addon-actions';
import { userEvent } from '@storybook/test';
import dedent from 'dedent';

const meta: Meta = {
  title: 'Components/Drawer',
  component: 'ug-drawer',
  parameters: {
    docs: {
      subtitle:
        'Drawers slide in from a container to expose additional options and information.',
      source: {
        format: true,
        transform: (code: string) => {
          // Remove empty/default attributes and replace boolean attributes from the source code display
          return code
            .replace(/\s(placement="end")/g, '')
            .replace(/\s* open=""/g, ' open')
            .replace(/\s* contained=""/g, ' contained')
            .replace(/\s* no-header=""/g, ' no-header');
        }
      },
      story: {
        inline: false,
        iframeHeight: 250
      }
    }
  },
  argTypes: {
    modal: {
      control: false,
      description: dedent/*html*/ `
        Exposes the internal modal utility that controls focus trapping. To temporarily disable focus trapping and allow third-party modals spawned from an active modal, call <code>modal.activateExternal()</code> when the third-party modal opens. Upon closing, call <code>modal.deactivateExternal()</code> to restore focus trapping.
      `,
      table: {
        category: 'Properties',
        type: { summary: 'Modal' },
        defaultValue: { summary: 'new Modal(this)' }
      }
    },
    open: {
      control: false,
      description: dedent/*html*/ `
        Indicates whether or not the drawer is open. You can toggle this attribute to show and hide the drawer, or you can use the <code>show()</code> and <code>hide()</code> methods and this attribute will reflect the drawer’s open state.<br><code>reflects: true</code>
      `,
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    label: {
      control: 'text',
      description: dedent/*html*/ `
        The drawer’s label displayed in the header. You should always include a relevant label even when using <code>no-header</code>, as it is required for proper accessibility. If you need to display HTML, use the <code>label</code> slot instead.<br><code>reflects: true</code>`,
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },
    placement: {
      control: 'select',
      options: ['top', 'end', 'bottom', 'start'],
      description: dedent/*html*/ `
        The direction from which the drawer will open.<br><code>reflects: true</code>
      `,
      table: {
        category: 'Properties',
        type: { summary: "'top' | 'end' | 'bottom' | 'start'" },
        defaultValue: { summary: "'end'" }
      }
    },
    contained: {
      control: 'boolean',
      description: dedent/*html*/ `
        By default, the drawer slides out of its containing block (usually the viewport). To make the drawer slide out of its parent element, set this attribute and add <code>position: relative</code> to the parent.<br><code>reflects: true</code>
      `,
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    noHeader: {
      name: 'no-header',
      control: 'boolean',
      description: dedent/*html*/ `
        Removes the header. This will also remove the default close button, so please ensure you provide an easy, accessible way for users to dismiss the drawer.<br><code>reflects: true</code>
      `,
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    updateComplete: {
      control: false,
      description: dedent/*html*/ `
        A read-only promise that resolves when the component has finished updating.
      `,
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
      description: dedent/*html*/ `
        The drawer’s main content.
      `,
      table: {
        category: 'Slots',
        type: { summary: 'slot' },
        defaultValue: { summary: undefined }
      }
    },
    labelSlot: {
      control: false,
      name: 'label',
      description: dedent/*html*/ `
        The drawer’s label. Alternatively, you can use the <code>label</code> attribute.
      `,
      table: {
        category: 'Slots',
        type: { summary: 'slot' },
        defaultValue: { summary: undefined }
      }
    },
    headerActionsSlot: {
      control: false,
      name: 'header-actions',
      description: dedent/*html*/ `
        Optional actions to add to the header. Works best with <code>&lt;ug-icon-button&gt;</code>.
      `,
      table: {
        category: 'Slots',
        type: { summary: 'slot' },
        defaultValue: { summary: undefined }
      }
    },
    footerSlot: {
      control: false,
      name: 'footer',
      description: dedent/*html*/ `
        The drawer’s footer, usually one or more buttons representing various options.
      `,
      table: {
        category: 'Slots',
        type: { summary: 'slot' },
        defaultValue: { summary: undefined }
      }
    },
    //EVENTS
    'ug-show': {
      control: false,
      name: 'ug-show',
      action: 'ug-show',
      description: dedent/*html*/ `
        Emitted when the drawer opens.
      `,
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
      description: dedent/*html*/ `
        Emitted after the drawer opens and all animations are complete.
      `,
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
      description: dedent/*html*/ `
        Emitted when the drawer closes.
      `,
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
      description: dedent/*html*/ `
        Emitted after the drawer closes and all animations are complete.
      `,
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
      description: dedent/*html*/ `
        Emitted when the drawer opens and is ready to receive focus. Calling <code>event.preventDefault()</code> will prevent focusing and allow you to set it on a different element, such as an input.
      `,
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
      description: dedent/*html*/ `
        Emitted when the user attempts to close the drawer by clicking the close button, clicking the overlay, or pressing escape. Calling <code>event.preventDefault()</code> will keep the drawer open. Avoid using this unless closing the drawer will result in destructive behavior such as data loss.
      `,
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
        type: { summary: '() => void' },
        defaultValue: { summary: undefined }
      }
    },
    hide: {
      name: 'hide()',
      control: false,
      description: 'Hides the drawer.',
      table: {
        category: 'Methods',
        type: { summary: '() => void' },
        defaultValue: { summary: undefined }
      }
    }
  }
};

export default meta;

type Story = StoryObj;

export const Drawer: Story = {
  parameters: {
    docs: {
      source: {
        language: 'html',
        type: 'code',
        format: true,
        code: `
<ug-drawer label="Drawer Title" class="drawer-overview" open>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <ug-button slot="footer" variant="primary">Close</ug-button>
</ug-drawer>
<script>
  (() => {
    const drawer = document.querySelector('.drawer-overview');
    const closeButton = drawer.querySelector(
      'ug-button[variant="primary"]'
    );

    closeButton.addEventListener('click', () => drawer.hide());
  })();
</script>`
      }
    }
  },
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
        label=${arg.label}
        placement=${arg.placement}
        ?contained=${arg.contained}
        ?no-header=${arg.noHeader}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <ug-button slot="footer" variant="primary">Close</ug-button>
      </ug-drawer>
      <script>
        (() => {
          const drawer = document.querySelector('.drawer-overview');
          const closeButton = drawer.querySelector(
            'ug-button[variant="primary"]'
          );
          setTimeout(() => drawer.show(), 500);
          closeButton.addEventListener('click', () => drawer.hide());
          // Add event listener for after-hide to reopen the dialog if 'open' control is true
          drawer.addEventListener('ug-after-hide', () => {
            setTimeout(() => drawer.show(), 500);
          });
        })();
      </script>`;
  }
};

export const SlideInFromStart: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: dedent/*html*/ `
          By default, drawers slide in from the end. To make the drawer slide in from the start, set the <code>placement</code> attribute to <code>start</code>.
        `
      }
    }
  },
  render: () => {
    return html`<ug-drawer
        label="Drawer"
        placement="start"
        class="drawer-placement-start"
      >
        This drawer slides in from the start.
        <ug-button slot="footer" variant="primary">Close</ug-button>
      </ug-drawer>

      <ug-button>Open Drawer</ug-button>

      <script>
        (() => {
          const drawer = document.querySelector('.drawer-placement-start');
          const openButton = drawer.nextElementSibling;
          const closeButton = drawer.querySelector(
            'ug-button[variant="primary"]'
          );

          openButton.addEventListener('click', () => drawer.show());
          closeButton.addEventListener('click', () => drawer.hide());
        })();
      </script>`;
  }
};

export const SlideInFromTop: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: dedent/*html*/ `
          To make the drawer slide in from the top, set the <code>placement</code> attribute to <code>top</code>.
        `
      }
    }
  },
  render: () => {
    return html`<ug-drawer
        label="Drawer"
        placement="top"
        class="drawer-placement-top"
      >
        This drawer slides in from the top.
        <ug-button slot="footer" variant="primary">Close</ug-button>
      </ug-drawer>

      <ug-button>Open Drawer</ug-button>

      <script>
        (() => {
          const drawer = document.querySelector('.drawer-placement-top');
          const openButton = drawer.nextElementSibling;
          const closeButton = drawer.querySelector(
            'ug-button[variant="primary"]'
          );

          openButton.addEventListener('click', () => drawer.show());
          closeButton.addEventListener('click', () => drawer.hide());
        })();
      </script>`;
  }
};

export const SlideInFromBottom: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: dedent/*html*/ `
          To make the drawer slide in from the bottom, set the <code>placement</code> attribute to <code>bottom</code>.
        `
      }
    }
  },
  render: () => {
    return html`<ug-drawer
        label="Drawer"
        placement="bottom"
        class="drawer-placement-bottom"
      >
        This drawer slides in from the bottom.
        <ug-button slot="footer" variant="primary">Close</ug-button>
      </ug-drawer>

      <ug-button>Open Drawer</ug-button>

      <script>
        (() => {
          const drawer = document.querySelector('.drawer-placement-bottom');
          const openButton = drawer.nextElementSibling;
          const closeButton = drawer.querySelector(
            'ug-button[variant="primary"]'
          );

          openButton.addEventListener('click', () => drawer.show());
          closeButton.addEventListener('click', () => drawer.hide());
        })();
      </script>`;
  }
};

export const ContainedToAnElement: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: dedent/*html*/ `
          By default, drawers will close when the user clicks the close button, clicks the overlay, or presses the <code>Escape</code> key. In most cases, the default behavior is the best behavior in terms of UX. However, there are situations where this may be undesirable, such as when data loss will occur.

          To keep the drawer open in such cases, you can cancel the <code>ug-request-close</code> event. When canceled, the drawer will remain open and pulse briefly to draw the user's attention to it.

          You can use <code>event.detail.source</code> to determine what triggered the request to close. This example prevents the drawer from closing when the overlay is clicked, but allows the close button or <code>Escape</code> to dismiss it.
        `
      }
    }
  },
  render: () => {
    return html`<div
        style="position: relative; border: solid 2px var(--ug-panel-border-color); height: 140px; padding: 1rem; margin-bottom: 1rem;"
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

      <ug-button>Toggle Drawer</ug-button>

      <script>
        (() => {
          const drawer = document.querySelector('.drawer-contained');
          const openButton = drawer.parentElement.nextElementSibling;
          const closeButton = drawer.querySelector(
            'ug-button[variant="primary"]'
          );

          openButton.addEventListener(
            'click',
            () => (drawer.open = !drawer.open)
          );
          closeButton.addEventListener('click', () => drawer.hide());
        })();
      </script>`;
  }
};

export const CustomSize: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: dedent/*html*/ `
          Use the <code>--size</code> custom property to set the drawer’s size. This will be applied to the drawer’s width or height depending on its placement.
        `
      }
    }
  },
  render: () => {
    return html`<ug-drawer
        label="Drawer"
        class="drawer-custom-size"
        style="--size: 75vw;"
      >
        This drawer is always 75% of the viewport.
        <ug-button slot="footer" variant="primary">Close</ug-button>
      </ug-drawer>

      <ug-button>Open Drawer</ug-button>

      <script>
        (() => {
          const drawer = document.querySelector('.drawer-custom-size');
          const openButton = drawer.nextElementSibling;
          const closeButton = drawer.querySelector(
            'ug-button[variant="primary"]'
          );

          openButton.addEventListener('click', () => drawer.show());
          closeButton.addEventListener('click', () => drawer.hide());
        })();
      </script>`;
  }
};

export const Scrolling: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: dedent/*html*/ `
          By design, a drawer’s height will never exceed 100% of its container. As such, drawers will not scroll with the page to ensure the header and footer are always accessible to the user.
        `
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

      <ug-button>Open Drawer</ug-button>

      <script>
        (() => {
          const drawer = document.querySelector('.drawer-scrolling');
          const openButton = drawer.nextElementSibling;
          const closeButton = drawer.querySelector(
            'ug-button[variant="primary"]'
          );

          openButton.addEventListener('click', () => drawer.show());
          closeButton.addEventListener('click', () => drawer.hide());
        })();
      </script> `;
  }
};

export const HeaderActions: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: dedent/*html*/ `
          The header shows a functional close button by default. You can use the <code>header-actions</code> slot to add additional [icon buttons](?path=/docs/components-iconbutton--docs) if needed.
        `
      }
    }
  },
  render: () => {
    return html`<ug-drawer label="Drawer" class="drawer-header-actions">
        <ug-icon-button
          class="new-window"
          slot="header-actions"
          name="box-arrow-up-right"
        ></ug-icon-button>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <ug-button slot="footer" variant="primary">Close</ug-button>
      </ug-drawer>

      <ug-button>Open Drawer</ug-button>

      <script>
        (() => {
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
        })();
      </script>`;
  }
};

export const PreventingTheDrawerFromClosing: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: dedent/*html*/ `
          By default, drawers will close when the user clicks the close button, clicks the overlay, or presses the <code>Escape</code> key. In most cases, the default behavior is the best behavior in terms of UX. However, there are situations where this may be undesirable, such as when data loss will occur.
          
          To keep the drawer open in such cases, you can cancel the <code>ug-request-close</code> event. When canceled, the drawer will remain open and pulse briefly to draw the user's attention to it.
          
          You can use <code>event.detail.source</code> to determine what triggered the request to close. This example prevents the drawer from closing when the overlay is clicked, but allows the close button or <code>Escape</code> to dismiss it.`
      }
    }
  },
  render: () => {
    return html`<ug-drawer label="Drawer" class="drawer-deny-close">
        This drawer will not close when you click on the overlay.s
        <ug-button slot="footer" variant="primary">Close</ug-button>
      </ug-drawer>

      <ug-button>Open Drawer</ug-button>

      <script>
        (() => {
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
        })();
      </script>`;
  }
};

export const CustomizingInitialFocus: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: dedent/*html*/ `By default, the drawer’s panel will gain focus when opened. This allows a subsequent tab press to focus on the first tabbable element in the drawer. If you want a different element to have focus, add the <code>autofocus</code> attribute to it as shown below.`
      }
    }
  },
  render: () => {
    return html`<ug-drawer label="Drawer" class="drawer-focus">
        <ug-input
          autofocus
          placeholder="I will have focus when the drawer is opened"
        ></ug-input>
        <ug-button slot="footer" variant="primary">Close</ug-button>
      </ug-drawer>

      <ug-button>Open Drawer</ug-button>

      <script>
        const drawer = document.querySelector('.drawer-focus');
        const input = drawer.querySelector('ug-input');
        const openButton = drawer.nextElementSibling;
        const closeButton = drawer.querySelector(
          'ug-button[variant="primary"]'
        );

        openButton.addEventListener('click', () => drawer.show());
        closeButton.addEventListener('click', () => drawer.hide());
      </script>`;
  }
};

export const DrawerWithEvents: Story = {
  tags: ['!autodocs'],
  parameters: {
    controls: { disable: true }
  },
  render: () => {
    return html`<ug-drawer
      label="Drawer"
      @ug-show="${action('ug-show')}"
      @ug-after-show="${action('ug-after-show')}"
      @ug-hide="${action('ug-hide')}"
      @ug-after-hide="${action('ug-after-hide')}"
      @ug-initial-focus="${action('ug-initial-focus')}"
      @ug-request-close="${action('ug-request-close')}"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </ug-drawer>`;
  },
  play: async ({ canvasElement }) => {
    const drawer = canvasElement.querySelector('ug-drawer');
    if (!drawer) return;

    const closeButton = drawer?.shadowRoot?.querySelector(
      '[part="close-button"]'
    );
    if (!closeButton) return;

    await drawer.updateComplete;

    await drawer.show();

    await new Promise((resolve) => setTimeout(resolve, 500));

    await drawer.hide();

    await new Promise((resolve) => setTimeout(resolve, 500));

    await drawer.show();

    await userEvent.click(closeButton);

    await new Promise((resolve) => setTimeout(resolve, 500));

    await drawer.show();
  }
};
