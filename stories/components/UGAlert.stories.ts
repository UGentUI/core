import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/alert';
import '/lib/components/icon';
import '/lib/components/button';
import { ifDefined } from 'lit/directives/if-defined.js';
import '@shoelace-style/shoelace/dist/themes/light.css';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Components/Alert',
  component: 'UgAlert',
  parameters: {
    import: true, // Enables the import section
    docs: {
      subtitle:
        'Alerts are used to display important messages inline or as toast notifications.',
      importPath: 'alert',
      dependencies: ['icon', 'button'],
      source: {
        format: true,
        transform: (code: string) => {
          return code
            .replace(/\s* open=""/g, ' open')
            .replace(/\s* closable=""/g, ' closable');
        }
      }
    }
  },
  argTypes: {
    open: {
      control: 'boolean',
      description:
        "Indicates whether or not the alert is open. You can toggle this attribute to show and hide the alert, or you can use the show() and hide() methods and this attribute will reflect the alert's open state. <br>`reflects: true`",
      table: {
        category: 'properties',
        defaultValue: { summary: 'false' }
      }
    },
    closable: {
      control: 'boolean',
      description:
        'Add the closable attribute to show a close button that will hide the alert. <br>`reflects: true`',
      table: {
        category: 'properties',
        defaultValue: { summary: 'false' }
      }
    },
    variant: {
      control: 'radio',
      options: ['primary', 'success', 'neutral', 'warning', 'danger'],
      description:
        "Set the variant attribute to change the alert's variant. <br>`reflects: true`",
      table: {
        category: 'properties',
        defaultValue: { summary: 'primary' },
        type: {
          summary: "'primary', 'success', 'neutral', 'warning', 'danger'"
        }
      }
    },
    duration: {
      description:
        'The length of time, in milliseconds, the alert will show before closing itself. If the user interacts with the alert before it closes (e.g., moves the mouse over it), the timer will restart. Defaults to Infinity, meaning the alert will not close on its own.',
      control: { type: 'number' },
      table: {
        category: 'properties',
        type: { summary: 'number' },
        defaultValue: { summary: 'Infinity' }
      }
    },
    countdown: {
      control: 'radio',
      options: ['rtl', 'ltr', undefined],
      description:
        'Enables a countdown that indicates the remaining time the alert will be displayed. Typically used to indicate the remaining time before a whole app refresh. <br>`reflects: true`',
      table: {
        category: 'properties',
        defaultValue: { summary: 'undefined' },
        type: {
          summary: "'rtl' | 'ltr' | undefined"
        }
      }
    },
    updateComplete: {
      name: 'updateComplete',
      description:
        'A read-only promise that resolves when the component has finished updating.',
      table: {
        category: 'properties',
        type: { summary: 'Promise<void>' },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    defaultSlot: {
      name: '(default)',
      description: "The alert's main content.",
      table: {
        category: 'slots',
        type: { summary: 'slot' },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    iconSlot: {
      name: 'icon',
      description: 'An icon to show in the alert. Works best with <ug-icon>.',
      table: {
        category: 'slots',
        type: { summary: 'slot' },
        defaultValue: { summary: undefined }
      },
      control: {
        type: 'check'
      },
      options: ['Icon']
    },
    'ug-show': {
      description: 'Emitted when the alert opens.',
      table: {
        category: 'events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      },
      action: 'ug-show', // Captures the event in Storybook's Actions panel,
      control: false
    },
    'ug-after-show': {
      description:
        'Emitted after the alert opens and all animations are complete.',
      table: {
        category: 'events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      },
      action: 'ug-after-show',
      control: false
    },
    'ug-hide': {
      description: 'Emitted when the alert closes.',
      table: {
        category: 'events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      },
      action: 'ug-hide',
      control: false
    },
    'ug-after-hide': {
      description:
        'Emitted after the alert closes and all animations are complete.',
      table: {
        category: 'events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      },
      action: 'ug-after-hide',
      control: false
    },
    show: {
      name: 'show()',
      description: 'Shows the alert.',
      table: {
        category: 'methods',
        type: { summary: '() => Promise<void>' },
        defaultValue: { summary: undefined }
      },
      action: 'show', // Adds an action to observe method usage in Storybook's Actions panel
      control: false
    },
    hide: {
      name: 'hide()',
      description: 'Hides the alert.',
      table: {
        category: 'methods',
        type: { summary: '() => Promise<void>' },
        defaultValue: { summary: undefined }
      },
      action: 'hide',
      control: false
    },
    toast: {
      name: 'toast()',
      description: `Displays the alert as a toast notification. This will move the alert out of its position in the DOM and, when dismissed, it will be removed from the DOM completely. By storing a reference to the alert, you can reuse it by calling this method again. The returned promise will resolve after the alert is hidden.`,
      table: {
        category: 'methods',
        type: { summary: '() => Promise<void>' },
        defaultValue: { summary: undefined }
      },
      action: 'toast',
      control: false
    }
  }
};

export default meta;

type Story = StoryObj;

export const Alert: Story = {
  parameters: {
    componentName: 'badge3',
    docs: {
      description: {
        story: 'A default alert.'
      }
    }
  },
  args: {
    open: true,
    closable: false,
    variant: 'primary',
    duration: undefined,
    countdown: undefined,
    iconSlot: 'Icon'
  },
  render: (args) => {
    return html`<ug-alert
      ?open="${args.open}"
      ?closable="${args.closable}"
      variant="${ifDefined(args.variant)}"
      duration="${ifDefined(args.duration)}"
      countdown="${ifDefined(args.countdown)}"
    >
      ${args.iconSlot == 'Icon'
        ? html`<ug-icon slot="icon" name="circle-info"></ug-icon>`
        : ``}
      This is a standard alert. You can customize its content and even the icon.
    </ug-alert>`;
  }
};

export const Variants: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Set the <code>variant</code> attribute to change the alert's variant.`
      }
    }
  },
  render: () =>
    html` <ug-alert variant="primary" open>
        <ug-icon slot="icon" name="circle-info"></ug-icon>
        <strong>This is super informative</strong><br />
        You can tell by how pretty the alert is.
      </ug-alert>

      <br />

      <ug-alert variant="success" open>
        <ug-icon slot="icon" name="circle-check"></ug-icon>
        <strong>Your changes have been saved</strong><br />
        You can safely exit the app now.
      </ug-alert>

      <br />

      <ug-alert variant="neutral" open>
        <ug-icon slot="icon" name="gear"></ug-icon>
        <strong>Your settings have been updated</strong><br />
        Settings will take effect on next login.
      </ug-alert>

      <br />

      <ug-alert variant="warning" open>
        <ug-icon slot="icon" name="triangle-exclamation"></ug-icon>
        <strong>Your session has ended</strong><br />
        Please login again to continue.
      </ug-alert>

      <br />

      <ug-alert variant="danger" open>
        <ug-icon slot="icon" name="octagon-exclamation"></ug-icon>
        <strong>Your account has been deleted</strong><br />
        We're very sorry to see you go!
      </ug-alert>`
};

export const Closable: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Add the `closable` attribute to show a close button that will hide the alert.'
      },
      story: {
        inline: false
      }
    }
  },
  render: () =>
    html` <ug-alert variant="primary" open closable class="alert-closable">
        <ug-icon slot="icon" name="circle-info"></ug-icon>
        You can close this alert any time!
      </ug-alert>
      <script>
        (() => {
          const alert = document.querySelector('.alert-closable');
          alert.addEventListener('ug-after-hide', () => {
            setTimeout(() => (alert.open = true), 2000);
          });
        })();
      </script>`
};

export const WithoutIcons: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "Icons are optional. Simply omit the `icon` slot if you don't want them."
      }
    }
  },
  render: () => html`
    <ug-alert variant="primary" open>
      Nothing fancy here, just a simple alert.
    </ug-alert>
  `
};

export const Duration: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Set the <code>duration</code> attribute to automatically hide an alert after a period of time. This is useful for alerts that don't require acknowledgement.`
      },
      story: {
        inline: false,
        height: '140px'
      }
    }
  },
  render: () =>
    html`<div class="alert-duration">
        <ug-button variant="primary">Show Alert</ug-button>

        <ug-alert variant="primary" duration="3000" open closable>
          <ug-icon slot="icon" name="circle-info"></ug-icon>
          This alert will automatically hide itself after three seconds, unless
          you interact with it.
        </ug-alert>
      </div>

      <script>
        (() => {
          const alertDurationContainer =
            document.querySelector('.alert-duration');
          const buttonDuration =
            alertDurationContainer.querySelector('ug-button');
          const alertDuration =
            alertDurationContainer.querySelector('ug-alert');

          buttonDuration.addEventListener('click', () => alertDuration.show());
        })();
      </script>

      <style>
        .alert-duration ug-alert {
          margin-top: var(--ug-spacing-medium);
        }
      </style>`
};

export const Countdown: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Set the <code>countdown</code> attribute to display a loading bar that indicates the alert remaining time. This is useful for alerts with relatively long duration.`
      },
      story: {
        inline: false,
        height: '140px'
      }
    }
  },
  render: () =>
    html`<div class="alert-countdown">
        <ug-button variant="primary">Show Alert</ug-button>

        <ug-alert variant="primary" duration="10000" countdown="rtl" closable>
          <ug-icon slot="icon" name="circle-info"></ug-icon>
          You're not stuck, the alert will close after a pretty long duration.
        </ug-alert>
      </div>

      <script>
        (() => {
          const alertCountdownContainer =
            document.querySelector('.alert-countdown');
          const alertCountdownButton =
            alertCountdownContainer.querySelector('ug-button');
          const alertCountdownAlert =
            alertCountdownContainer.querySelector('ug-alert');

          alertCountdownButton.addEventListener('click', () =>
            alertCountdownAlert.show()
          );
        })();
      </script>

      <style>
        .alert-countdown ug-alert {
          margin-top: var(--ug-spacing-medium);
        }
      </style>`
};

export const ToastNotifications: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `To display an alert as a toast notification, or "toast", create the alert and call its <code>toast()</code> method. This will move the alert out of its position in the DOM and into [the toast stack](#theToastStack) where it will be shown. Once dismissed, it will be removed from the DOM completely. To reuse a toast, store a reference to it and call <code>toast()</code> again later on. <br> You should always use the <code>closable</code> attribute so users can dismiss the notification. It's also common to set a reasonable <code>duration</code> when the notification doesn't require acknowledgement.`
      },
      story: {
        inline: false,
        height: '140px'
      }
    }
  },
  render: () =>
    html` <div class="alert-toast">
        <div class="toast-buttons">
          <ug-button variant="primary">Primary</ug-button>
          <ug-button variant="success">Success</ug-button>
          <ug-button variant="neutral">Neutral</ug-button>
          <ug-button variant="warning">Warning</ug-button>
          <ug-button variant="danger">Danger</ug-button>
        </div>

        <ug-alert variant="primary" duration="3000" closable>
          <ug-icon slot="icon" name="circle-info"></ug-icon>
          <strong>This is super informative</strong><br />
          You can tell by how pretty the alert is.
        </ug-alert>

        <ug-alert variant="success" duration="3000" closable>
          <ug-icon slot="icon" name="circle-check"></ug-icon>
          <strong>Your changes have been saved</strong><br />
          You can safely exit the app now.
        </ug-alert>

        <ug-alert variant="neutral" duration="3000" closable>
          <ug-icon slot="icon" name="gear"></ug-icon>
          <strong>Your settings have been updated</strong><br />
          Settings will take effect on next login.
        </ug-alert>

        <ug-alert variant="warning" duration="3000" closable>
          <ug-icon slot="icon" name="triangle-exclamation"></ug-icon>
          <strong>Your session has ended</strong><br />
          Please login again to continue.
        </ug-alert>

        <ug-alert variant="danger" duration="3000" closable>
          <ug-icon slot="icon" name="octagon-exclamation"></ug-icon>
          <strong>Your account has been deleted</strong><br />
          We're very sorry to see you go!
        </ug-alert>
      </div>

      <script>
        (() => {
          const alertToastContainer = document.querySelector('.alert-toast');
          ['primary', 'success', 'neutral', 'warning', 'danger'].forEach(
            (variant) => {
              const button = alertToastContainer.querySelector(
                \`ug-button[variant="\${variant}"]\`
              );
              const alert = alertToastContainer.querySelector(
                \`ug-alert[variant="\${variant}"]\`
              );
              button.addEventListener('click', () => alert.toast());
            }
          );
        })();
      </script>`
};

export const CreatingToastsImperatively: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `For convenience, you can create a utility that emits toast notifications with a function call rather than composing them in your HTML. To do this, generate the alert with JavaScript, append it to the body, and call the <code>toast()</code> method as shown in the example below.`
      },
      story: {
        inline: false,
        height: '140px'
      }
    }
  },
  render: () =>
    html`<div class="alert-toast-wrapper">
        <ug-button variant="primary">Create Toast</ug-button>
      </div>

      <script>
        (() => {
          const container = document.querySelector('.alert-toast-wrapper');
          const button = container.querySelector('ug-button');
          let count = 0;

          //Always escape HTML for text arguments!
          function escapeHtml(html) {
            const div = document.createElement('div');
            div.textContent = html;
            return div.innerHTML;
          }

          // Custom function to emit toast notifications
          function notify(
            message,
            variant = 'primary',
            icon = 'info-circle',
            duration = 3000
          ) {
            const alert = Object.assign(document.createElement('ug-alert'), {
              variant,
              closable: true,
              duration: duration,
              innerHTML: \`<ug-icon name="\${icon}" slot="icon"></ug-icon>
                \${escapeHtml(message)}\`
            });

            document.body.append(alert);
            return alert.toast();
          }

          button.addEventListener('click', () => {
            notify(\`This is custom toast #\${count++}\`);
          });
        })();
      </script>`
};

export const AlertWithEvents: Story = {
  tags: ['!autodocs'],
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `This example demonstrates the various events and methods available on the Alert component. Click the buttons to trigger different actions and observe the events in the Actions panel.`
      }
    }
  },
  render: () => html`
    <ug-alert
      data-testid="demo-alert"
      variant="primary"
      duration="3000"
      @ug-show="${action('ug-show')}"
      @ug-after-show="${action('ug-after-show')}"
      @ug-hide="${action('ug-hide')}"
      @ug-after-hide="${action('ug-after-hide')}"
    >
      <ug-icon slot="icon" name="circle-info"></ug-icon>
      This alert demonstrates events and methods. Check the Actions panel to see
      events as they fire.
    </ug-alert>
  `,
  play: async ({ canvasElement }) => {
    const alert = canvasElement.querySelector('ug-alert');
    if (!alert) return;

    await alert.updateComplete;
    await alert.show();
    await new Promise((r) => setTimeout(r, 1000));
    await alert.hide();
    await new Promise((r) => setTimeout(r, 1000));
    await alert.toast();
  }
};
