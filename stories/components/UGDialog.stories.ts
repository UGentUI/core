import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/dialog';
import '/lib/components/button';
import '/lib/components/icon';
import '/lib/components/icon-button';

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
