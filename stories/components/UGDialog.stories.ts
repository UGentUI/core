import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/dialog';
import '/lib/components/button';
import '/lib/components/icon';
import '/lib/components/icon-button';
import '/lib/components/input';
import { userEvent, within } from '@storybook/test';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Components/Dialog',
  component: 'ug-dialog',
  parameters: {
    docs: {
      subtitle:
        'Dialogs, sometimes called “modals”, appear above the page and require the user’s immediate attention.',
      source: {
        format: true,
        transform: (code: string) => {
          // Remove empty/default attributes and replace boolean attributes from the source code display
          return code
            .replace(/\s(default-attribute="value")/g, '')
            .replace(/\s* attribute=""/g, ' attribute');
        }
      }
    }
  },
  argTypes: {
    modal: {
      description:
        'Exposes the internal modal utility that controls focus trapping. To temporarily disable focus trapping and allow third-party modals spawned from an active modal, call <code>modal.activateExternal()</code> when the third-party modal opens. Upon closing, call <code>modal.deactivateExternal()</code> to restore focus trapping.',
      table: {
        category: 'Properties',
        type: { summary: 'Modal' },
        defaultValue: { summary: 'new Modal(this)' }
      },
      control: { disable: true }
    },
    open: {
      description:
        'Indicates whether or not the dialog is open. You can toggle this attribute to show and hide the dialog, or use the <code>show()</code> and <code>hide()</code> methods and this attribute will reflect the dialog’s open state.<br>`reflects: true`',
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: 'boolean'
    },
    label: {
      description:
        'The dialog’s label as displayed in the header. You should always include a relevant label even when using <code>no-header</code>, as it is required for proper accessibility. If you need to display HTML, use the <code>label</code> slot instead.<br>`reflects: true`',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      },
      control: 'text'
    },
    noHeader: {
      name: 'no-header',
      description:
        'Disables the header. This will also remove the default close button, so please ensure you provide an easy, accessible way for users to dismiss the dialog.<br>`reflects: true`',
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      control: 'boolean'
    },
    updateComplete: {
      control: { disable: true },
      description:
        'A read-only promise that resolves when the component has finished updating.',
      table: {
        category: 'Properties',
        type: { summary: 'Promise<void>' },
        defaultValue: { summary: undefined }
      }
    },
    //Slots
    defaultSlot: {
      control: 'text',
      name: '(default)',
      description: 'The dialog’s main content.',
      table: {
        category: 'Slots',
        type: {
          summary: 'slot'
        },
        defaultValue: {
          // defaultValue.summary should be undefined to hide the - in the auto-docs table
          summary: undefined
        }
      }
    },
    labelSlot: {
      name: 'label',
      description:
        'The dialog’s label. Alternatively, you can use the `label` attribute.',
      table: {
        category: 'Slots',
        type: {
          summary: 'slot'
        },
        defaultValue: {
          // defaultValue.summary should be undefined to hide the - in the auto-docs table
          summary: undefined
        }
      }
    },
    headerActionsSlot: {
      name: 'header-actions',
      description:
        'Optional actions to add to the header. Works best with `<ug-icon-button>`.',
      table: {
        category: 'Slots',
        type: {
          summary: 'slot'
        },
        defaultValue: {
          // defaultValue.summary should be undefined to hide the - in the auto-docs table
          summary: undefined
        }
      }
    },
    footerSlot: {
      name: 'footer',
      description:
        'The dialog’s footer, usually one or more buttons representing various options.',
      table: {
        category: 'Slots',
        type: {
          summary: 'slot'
        },
        defaultValue: {
          // defaultValue.summary should be undefined to hide the - in the auto-docs table
          summary: undefined
        }
      }
    },
    ugShow: {
      control: false,
      name: 'ug-show',
      action: 'ug-show',
      description: 'Emitted when the dialog opens.',
      table: {
        category: 'Events',
        // Type information with optional details
        type: {
          summary: 'CustomEvent'
        },
        defaultValue: {
          // defaultValue.summary should be undefined to hide the - in the auto-docs table
          summary: undefined
        }
      }
    },
    ugAfterShow: {
      name: 'ug-after-show',
      action: 'ug-after-show',
      description:
        'Emitted after the dialog opens and all animations are complete.',
      table: {
        category: 'Events',
        // Type information with optional details
        type: {
          summary: 'CustomEvent'
        },
        defaultValue: {
          // defaultValue.summary should be undefined to hide the - in the auto-docs table
          summary: undefined
        }
      }
    },
    ugHide: {
      name: 'ug-hide',
      action: 'ug-hide',
      description: 'Emitted when the dialog closes.',
      table: {
        category: 'Events',
        // Type information with optional details
        type: {
          summary: 'CustomEvent'
        },
        defaultValue: {
          // defaultValue.summary should be undefined to hide the - in the auto-docs table
          summary: undefined
        }
      }
    },
    ugAfterHide: {
      name: 'ug-after-hide',
      action: 'ug-after-hide',
      description:
        'Emitted after the dialog closes and all animations are complete.',
      table: {
        category: 'Events',
        // Type information with optional details
        type: {
          summary: 'CustomEvent'
        },
        defaultValue: {
          // defaultValue.summary should be undefined to hide the - in the auto-docs table
          summary: undefined
        }
      }
    },
    ugInitialFocus: {
      name: 'ug-initial-focus',
      action: 'ug-initial-focus',
      description:
        'Emitted when the dialog opens and is ready to receive focus. Calling event.preventDefault() will prevent focusing and allow you to set it on a different element, such as an input.',
      table: {
        category: 'Events',
        // Type information with optional details
        type: {
          summary: 'CustomEvent'
        },
        defaultValue: {
          // defaultValue.summary should be undefined to hide the - in the auto-docs table
          summary: undefined
        }
      }
    },
    ugRequestClose: {
      name: 'ug-request-close',
      action: 'ug-request-close',
      description:
        'Emitted when the user attempts to close the dialog by clicking the close button, clicking the overlay, or pressing escape. Calling <code>event.preventDefault()</code> will keep the dialog open. Avoid using this unless closing the dialog will result in destructive behavior such as data loss.',
      table: {
        category: 'Events',
        // Type information with optional details
        type: {
          summary: "{ source: 'close-button' | 'keyboard' | 'overlay' }"
        },
        defaultValue: {
          // defaultValue.summary should be undefined to hide the - in the auto-docs table
          summary: undefined
        }
      }
    },
    show: {
      name: 'show()',
      description: 'Shows the dialog.',
      table: {
        category: 'Methods',
        type: {
          // Add the method signature
          summary: '() => void'
        },
        defaultValue: {
          // defaultValue.summary should be undefined to hide the - in the auto-docs table
          summary: undefined
        }
      },
      control: false
    },
    hide: {
      name: 'hide()',
      description: 'Hides the dialog.',
      table: {
        category: 'Methods',
        type: {
          // Add the method signature
          summary: '() => void'
        },
        defaultValue: {
          // defaultValue.summary should be undefined to hide the - in the auto-docs table
          summary: undefined
        }
      },
      control: false
    }
  }
};

export default meta;

type Story = StoryObj;

export const Dialog: Story = {
  args: {
    open: false,
    label: 'Dialog',
    noHeader: false
  },
  render: (args) => {
    return html`<ug-dialog
        class="dialog-overview"
        ?open="${args.open}"
        label="${args.label}"
        ?no-header="${args.noHeader}"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <ug-button slot="footer" variant="primary">Close</ug-button>
      </ug-dialog>

      <ug-button>Open Dialog</ug-button>

      <script>
        const dialog = document.querySelector('.dialog-overview');
        const openButton = dialog.nextElementSibling;
        const closeButton = dialog.querySelector('ug-button[slot="footer"]');

        openButton.addEventListener('click', () => dialog.show());
        closeButton.addEventListener('click', () => dialog.hide());
      </script>`;
  }
};

export const Scrolling: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'By design, a dialog’s height will never exceed that of the viewport. As such, dialogs will not scroll with the page ensuring the header and footer are always accessible to the user.'
      }
    },
    controls: { disable: true }
  },
  args: {
    open: false,
    label: 'Dialog',
    noHeader: false
  },
  render: (args) => {
    return html`<ug-dialog
        class="dialog-scrolling"
        ?open="${args.open}"
        label="${args.label}"
        ?no-header="${args.noHeader}"
      >
        <div
          style="height: 150vh; border: dashed 2px var(--ug-color-neutral-200); padding: 0 1rem;"
        >
          <p>Scroll down and give it a try! 👇</p>
        </div>
        <ug-button slot="footer" variant="primary">Close</ug-button>
      </ug-dialog>

      <ug-button>Open Dialog</ug-button>

      <script>
        const dialog = document.querySelector('.dialog-scrolling');
        const openButton = dialog.nextElementSibling;
        const closeButton = dialog.querySelector('ug-button[slot="footer"]');

        openButton.addEventListener('click', () => dialog.show());
        closeButton.addEventListener('click', () => dialog.hide());
      </script>`;
  }
};

export const HeaderActions: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The header shows a functional close button by default. You can use the <code>header-actions</code> slot to add additional [icon buttons](?path=/docs/components-iconbutton--docs) if needed.'
      }
    },
    controls: { disable: true }
  },
  args: {
    open: false,
    label: 'Dialog',
    noHeader: false
  },
  render: (args) => {
    return html`<ug-dialog
        class="dialog-scrolling"
        ?open="${args.open}"
        label="${args.label}"
        ?no-header="${args.noHeader}"
      >
        <ug-icon-button
          class="new-window"
          slot="header-actions"
          name="box-arrow-up-right"
        ></ug-icon-button>
        <ug-icon-button
          class="new-window"
          slot="header-actions"
          name="gear"
        ></ug-icon-button>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <ug-button slot="footer" variant="primary">Close</ug-button>
      </ug-dialog>

      <ug-button>Open Dialog</ug-button>

      <script>
        const dialog = document.querySelector('.dialog-scrolling');
        const openButton = dialog.nextElementSibling;
        const closeButton = dialog.querySelector('ug-button[slot="footer"]');

        openButton.addEventListener('click', () => dialog.show());
        closeButton.addEventListener('click', () => dialog.hide());
      </script>`;
  }
};

export const PreventingTheDialogFromClosing: Story = {
  parameters: {
    docs: {
      description: {
        story: `By default, dialogs will close when the user clicks the close button, clicks the overlay, or presses the <key>Escape</key> key. In most cases, the default behavior is the best behavior in terms of UX. However, there are situations where this may be undesirable, such as when data loss will occur.

To keep the dialog open in such cases, you can cancel the <code>ug-request-close</code> event. When canceled, the dialog will remain open and pulse briefly to draw the user’s attention to it.

You can use <code>event.detail.source</code> to determine what triggered the request to close. This example prevents the dialog from closing when the overlay is clicked, but allows the close button or <key>Escape</key> to dismiss it.`
      }
    },
    controls: { disable: true }
  },
  args: {
    open: false,
    label: 'Dialog',
    noHeader: false
  },
  render: (args) => {
    return html`<ug-dialog label="Dialog" class="dialog-deny-close">
        This dialog will not close when you click on the overlay.
        <ug-button slot="footer" variant="primary">Close</ug-button>
      </ug-dialog>

      <ug-button>Open Dialog</ug-button>

      <script>
        const dialog = document.querySelector('.dialog-deny-close');
        const openButton = dialog.nextElementSibling;
        const closeButton = dialog.querySelector('ug-button[slot="footer"]');

        openButton.addEventListener('click', () => dialog.show());
        closeButton.addEventListener('click', () => dialog.hide());

        // Prevent the dialog from closing when the user clicks on the overlay
        dialog.addEventListener('ug-request-close', (event) => {
          if (event.detail.source === 'overlay') {
            event.preventDefault();
          }
        });
      </script>`;
  }
};

export const CustomizingInitialFocus: Story = {
  parameters: {
    docs: {
      description: {
        story: `By default, the dialog’s panel will gain focus when opened. This allows a subsequent tab press to focus on the first tabbable element in the dialog. If you want a different element to have focus, add the <code>autofocus</code> attribute to it as shown below.
        
You can further customize initial focus behavior by canceling the <code>ug-initial-focus</code> event and setting focus yourself inside the event handler.`
      }
    },
    controls: { disable: true }
  },
  args: {
    open: false,
    label: 'Dialog',
    noHeader: false
  },
  render: (args) => {
    return html`<ug-dialog label="Dialog" class="dialog-focus">
        <ug-input
          autofocus
          placeholder="I will have focus when the dialog is opened"
        ></ug-input>
        <ug-button slot="footer" variant="primary">Close</ug-button>
      </ug-dialog>

      <ug-button>Open Dialog</ug-button>

      <script>
        const dialog = document.querySelector('.dialog-focus');
        const openButton = dialog.nextElementSibling;
        const closeButton = dialog.querySelector('ug-button[slot="footer"]');

        openButton.addEventListener('click', () => dialog.show());
        closeButton.addEventListener('click', () => dialog.hide());
      </script>`;
  }
};

export const DialogWithEvents: Story = {
  args: {
    open: false,
    label: 'Dialog with Events',
    noHeader: false
  },
  render: (args) => html`
    <ug-dialog
      class="dialog-events"
      ?open="${args.open}"
      label="${args.label}"
      ?no-header="${args.noHeader}"
      data-testid="ug-dialog"
      @ug-show=${action('ug-show')}
      @ug-after-show=${action('ug-after-show')}
      @ug-hide=${action('ug-hide')}
      @ug-after-hide=${action('ug-after-hide')}
      @ug-initial-focus=${action('ug-initial-focus')}
      @ug-request-close=${action('ug-request-close')}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <ug-button data-testid="ug-button" slot="footer" variant="primary"
        >Close</ug-button
      >
    </ug-dialog>

    <ug-button>Open Dialog</ug-button>

    <script>
      const dialog = document.querySelector('.dialog-events');
      const openButton = dialog.nextElementSibling;
      const closeButton = dialog.querySelector('ug-button[slot="footer"]');

      openButton.addEventListener('click', () => dialog.show());
      closeButton.addEventListener('click', () => dialog.hide());
    </script>
  `,
  play: async ({ canvasElement }) => {
    //const canvas = within(canvasElement);

    const dialog = canvasElement.querySelector('.dialog-events');
    const openButton = dialog!.nextElementSibling;
    const closeButton = dialog!.querySelector(
      'ug-button[slot="footer"]'
    ) as HTMLElement;

    // Open the dialog
    await userEvent.click(openButton!);

    // Add delay to see validation message
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Close the dialog using the close button
    await userEvent.click(closeButton);
  }
};
