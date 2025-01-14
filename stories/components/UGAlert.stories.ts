import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/alert';
import '/lib/components/icon';
import '/lib/components/button';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ugIcons } from './icons';
import '@shoelace-style/shoelace/dist/themes/light.css';
//import '/lib/components/toastStack';
import { userEvent, within } from '@storybook/test';
import { action } from '@storybook/addon-actions';

import type { UgAlert } from '../../lib/components/alert';

const meta: Meta = {
  title: 'Components/Alert',
  component: 'UgAlert',
  parameters: {
    docs: {
      source: {
        format: true
      },
      toc: {
        /* options */
      },
      subtitle:
        'Alerts are used to display important messages inline or as toast notifications.'
    }
  },
  argTypes: {
    open: {
      control: 'boolean',
      description:
        'Indicates whether or not the alert is open. You can toggle this attribute to show and hide the alert, or you can use the show() and hide() methods and this attribute will reflect the alert’s open state.',
      table: {
        category: 'properties',
        defaultValue: { summary: 'false' }
      }
    },
    closable: {
      control: 'boolean',
      description:
        'Add the closable attribute to show a close button that will hide the alert.',
      table: {
        category: 'properties',
        defaultValue: { summary: 'false' }
      }
    },
    variant: {
      control: 'radio',
      options: ['primary', 'success', 'neutral', 'warning', 'danger'],
      description: "Set the variant attribute to change the alert's variant.",
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
        'Enables a countdown that indicates the remaining time the alert will be displayed. Typically used to indicate the remaining time before a whole app refresh.',
      table: {
        category: 'properties',
        defaultValue: { summary: 'undefined' },
        type: {
          summary: "'rtl' | 'ltr' | undefined"
        }
      }
    },
    show: {
      name: 'show()',
      description: 'Shows the alert.',
      table: {
        category: 'methods',
        type: { summary: 'method' },
        defaultValue: { summary: '-' }
      },
      action: 'show', // Adds an action to observe method usage in Storybook's Actions panel
      control: false
    },
    hide: {
      name: 'hide()',
      description: 'Hides the alert.',
      table: {
        category: 'methods',
        type: { summary: 'method' },
        defaultValue: { summary: '-' }
      },
      action: 'hide',
      control: false
    },
    toast: {
      name: 'toast()',
      description: `Displays the alert as a toast notification. This will move the alert out of its position in the DOM and, when dismissed, it will be removed from the DOM completely. By storing a reference to the alert, you can reuse it by calling this method again. The returned promise will resolve after the alert is hidden.`,
      table: {
        category: 'methods',
        type: { summary: 'method' },
        defaultValue: { summary: '-' }
      },
      action: 'toast',
      control: false
    },
    'ug-show': {
      description: 'Emitted when the alert opens.',
      table: {
        category: 'events',
        type: { summary: 'event' },
        defaultValue: { summary: '-' }
      },
      action: 'ug-show', // Captures the event in Storybook's Actions panel,
      control: false
    },
    'ug-after-show': {
      description:
        'Emitted after the alert opens and all animations are complete.',
      table: {
        category: 'events',
        type: { summary: 'event' },
        defaultValue: { summary: '-' }
      },
      action: 'ug-after-show',
      control: false
    },
    'ug-hide': {
      description: 'Emitted when the alert closes.',
      table: {
        category: 'events',
        type: { summary: 'event' },
        defaultValue: { summary: '-' }
      },
      action: 'ug-hide',
      control: false
    },
    'ug-after-hide': {
      description:
        'Emitted after the alert closes and all animations are complete.',
      table: {
        category: 'events',
        type: { summary: 'event' },
        defaultValue: { summary: '-' }
      },
      action: 'ug-after-hide',
      control: false
    },
    defaultSlot: {
      name: '(default)',
      description: 'The alert’s main content.',
      table: {
        category: 'slots',
        type: { summary: 'slot' },
        defaultValue: { summary: '-' }
      },
      control: false
    },
    iconSlot: {
      name: 'icon',
      description: 'An icon to show in the alert. Works best with <ug-icon>.',
      table: {
        category: 'slots',
        type: { summary: 'slot' },
        defaultValue: { summary: '-' }
      },
      control: {
        type: 'select'
      },

      options: ugIcons.map((icon) => icon.name) || [] // Use plain names
      //options: ugIcons.map((icon) => html`<ug-icon slot="icon" name="'+icon.name+'"></ug-icon>`) || []
    }
  }
};

export default meta;

type Story = StoryObj;

export const Alert: Story = {
  args: {
    open: true,
    closable: false,
    variant: 'primary',
    duration: undefined,
    countdown: undefined,
    iconSlot: 'info-circle'
  },
  render: (args) => {
    console.log('iconSlot:', args.iconSlot);
    return html`<ug-alert
      ?open="${args.open}"
      ?closable="${args.closable}"
      variant="${ifDefined(args.variant)}"
      duration="${ifDefined(args.duration)}"
      countdown="${ifDefined(args.countdown)}"
    >
      ${args.iconSlot
        ? html`<ug-icon slot="icon" name="${args.iconSlot}"></ug-icon>`
        : ``}
      This is a standard alert. You can customize its content and even the icon.
    </ug-alert>`;
  }
};

export const Variants: Story = {
  args: {
    ...Alert.args
  },
  parameters: {
    docs: {
      description: {
        story: `Set the <code>variant</code> attribute to change the alert’s variant.`
      }
    }
  },
  render: (args) => html` <ug-alert
      variant="primary"
      ?open="${args.open}"
      ?closable="${args.closable}"
      duration="${ifDefined(args.duration)}"
      countdown="${ifDefined(args.countdown)}"
    >
      <ug-icon slot="icon" name="info-circle"></ug-icon>
      <strong>This is super informative</strong><br />
      You can tell by how pretty the alert is.
    </ug-alert>

    <br />

    <ug-alert
      variant="success"
      ?open="${args.open}"
      ?closable="${args.closable}"
      duration="${ifDefined(args.duration)}"
      countdown="${ifDefined(args.countdown)}"
    >
      <ug-icon slot="icon" name="check2-circle"></ug-icon>
      <strong>Your changes have been saved</strong><br />
      You can safely exit the app now.
    </ug-alert>

    <br />

    <ug-alert
      variant="neutral"
      ?open="${args.open}"
      ?closable="${args.closable}"
      duration="${ifDefined(args.duration)}"
      countdown="${ifDefined(args.countdown)}"
    >
      <ug-icon slot="icon" name="gear"></ug-icon>
      <strong>Your settings have been updated</strong><br />
      Settings will take effect on next login.
    </ug-alert>

    <br />

    <ug-alert
      variant="warning"
      ?open="${args.open}"
      ?closable="${args.closable}"
      duration="${ifDefined(args.duration)}"
      countdown="${ifDefined(args.countdown)}"
    >
      <ug-icon slot="icon" name="exclamation-triangle"></ug-icon>
      <strong>Your session has ended</strong><br />
      Please login again to continue.
    </ug-alert>

    <br />

    <ug-alert
      variant="danger"
      ?open="${args.open}"
      ?closable="${args.closable}"
      duration="${ifDefined(args.duration)}"
      countdown="${ifDefined(args.countdown)}"
    >
      <ug-icon slot="icon" name="exclamation-octagon"></ug-icon>
      <strong>Your account has been deleted</strong><br />
      We're very sorry to see you go!
    </ug-alert>`
};

export const Closable: Story = {
  ...Alert,
  args: {
    ...Alert.args,
    closable: true
  }
};

export const WithoutIcons: Story = {
  ...Alert,
  args: {
    ...Alert.args,
    iconSlot: ''
  }
};

export const Duration: Story = {
  args: {
    ...Alert.args
  },
  parameters: {
    docs: {
      description: {
        story: `Set the <code>duration</code> attribute to automatically hide an alert after a period of time. This is useful for alerts that don’t require acknowledgement.`
      }
    }
  },
  render: (args) => html`<div class="alert-duration">
      <ug-button variant="primary">Show Alert</ug-button>

      <ug-alert variant="primary" duration="3000" open closable>
        <ug-icon slot="icon" name="info-circle"></ug-icon>
        This alert will automatically hide itself after three seconds, unless
        you interact with it.
      </ug-alert>
    </div>

    <script>
      const alertDurationContainer = document.querySelector('.alert-duration');
      const buttonDuration = alertDurationContainer.querySelector('ug-button');
      const alertDuration = alertDurationContainer.querySelector('ug-alert');

      buttonDuration.addEventListener('click', () => alertDuration.show());
    </script>

    <style>
      .alert-duration ug-alert {
        margin-top: var(--ug-spacing-medium);
      }
    </style>`,
  play: async () => {
    const durationContainer = document.querySelector('.alert-duration');
    const buttonDuration = durationContainer?.querySelector('ug-button');
    const alertDuration = durationContainer?.querySelector('ug-alert');

    buttonDuration?.addEventListener('click', () => alertDuration?.show());
  }
};

export const Countdown: Story = {
  args: {
    ...Alert.args
  },
  parameters: {
    docs: {
      description: {
        story: `Set the <code>countdown</code> attribute to display a loading bar that indicates the alert remaining time. This is useful for alerts with relatively long duration.`
      }
    }
  },
  render: (args) => html`<div class="alert-countdown">
      <ug-button variant="primary">Show Alert</ug-button>

      <ug-alert variant="primary" duration="10000" countdown="rtl" closable>
        <ug-icon slot="icon" name="info-circle"></ug-icon>
        You're not stuck, the alert will close after a pretty long duration.
      </ug-alert>
    </div>

    <script>
      const alertCountdownContainer =
        document.querySelector('.alert-countdown');
      const alertCountdownButton =
        alertCountdownContainer.querySelector('ug-button');
      const alertCountdownAlert =
        alertCountdownContainer.querySelector('ug-alert');

      alertCountdownButton.addEventListener('click', () =>
        alertCountdownAlert.show()
      );
    </script>

    <style>
      .alert-countdown ug-alert {
        margin-top: var(--ug-spacing-medium);
      }
    </style>`,

  play: async () => {
    const alertCountdownContainer = document.querySelector('.alert-countdown');
    const alertCountdownButton =
      alertCountdownContainer?.querySelector('ug-button');
    const alertCountdownAlert =
      alertCountdownContainer?.querySelector('ug-alert');

    alertCountdownButton?.addEventListener('click', () =>
      alertCountdownAlert?.show()
    );
  }
};

export const ToastNotifications: Story = {
  args: {
    ...Alert.args
  },
  parameters: {
    docs: {
      description: {
        story: `To display an alert as a toast notification, or “toast”, create the alert and call its <code>toast()</code> method. This will move the alert out of its position in the DOM and into [the toast stack](#theToastStack) where it will be shown. Once dismissed, it will be removed from the DOM completely. To reuse a toast, store a reference to it and call <code>toast()</code> again later on.

You should always use the <code>closable</code> attribute so users can dismiss the notification. It’s also common to set a reasonable <code>duration</code> when the notification doesn’t require acknowledgement.`
      }
    }
  },
  render: (args) => html` <div class="alert-toast">
      <ug-button variant="primary">Primary</ug-button>
      <ug-button variant="success">Success</ug-button>
      <ug-button variant="neutral">Neutral</ug-button>
      <ug-button variant="warning">Warning</ug-button>
      <ug-button variant="danger">Danger</ug-button>

      <ug-alert variant="primary" duration="3000" closable>
        <ug-icon slot="icon" name="info-circle"></ug-icon>
        <strong>This is super informative</strong><br />
        You can tell by how pretty the alert is.
      </ug-alert>

      <ug-alert variant="success" duration="3000" closable>
        <ug-icon slot="icon" name="check2-circle"></ug-icon>
        <strong>Your changes have been saved</strong><br />
        You can safely exit the app now.
      </ug-alert>

      <ug-alert variant="neutral" duration="3000" closable>
        <ug-icon slot="icon" name="gear"></ug-icon>
        <strong>Your settings have been updated</strong><br />
        Settings will take effect on next login.
      </ug-alert>

      <ug-alert variant="warning" duration="3000" closable>
        <ug-icon slot="icon" name="exclamation-triangle"></ug-icon>
        <strong>Your session has ended</strong><br />
        Please login again to continue.
      </ug-alert>

      <ug-alert variant="danger" duration="3000" closable>
        <ug-icon slot="icon" name="exclamation-octagon"></ug-icon>
        <strong>Your account has been deleted</strong><br />
        We're very sorry to see you go!
      </ug-alert>
    </div>
    <div class="my-toast-container"></div>

    <script>
      const root = document.querySelector('.my-toast-container');
      const alertToastContainer = document.querySelector('.alert-toast');
      ['primary', 'success', 'neutral', 'warning', 'danger'].forEach(
        (variant) => {
          const button = alertToastContainer.querySelector(
            \`ug-button[variant="\${variant}"]\`
          );
          const alert = alertToastContainer.querySelector(
            \`ug-alert[variant="\${variant}"]\`
          );
          button.addEventListener('click', () =>
            alert.toast({ container: root })
          );
        }
      );
    </script>`,
  play: async () => {
    const alertToastContainer = document.querySelector('.alert-toast');
    ['primary', 'success', 'neutral', 'warning', 'danger'].forEach(
      (variant) => {
        const button = alertToastContainer?.querySelector(
          `ug-button[variant="${variant}"]`
        );
        const alert = alertToastContainer?.querySelector(
          `ug-alert[variant="${variant}"]`
        ) as UgAlert;
        button?.addEventListener('click', () => alert?.toast());
      }
    );
  }
};

export const CreatingToastsImperatively: Story = {
  args: {
    ...Alert.args
  },
  parameters: {
    docs: {
      description: {
        story: `For convenience, you can create a utility that emits toast notifications with a function call rather than composing them in your HTML. To do this, generate the alert with JavaScript, append it to the body, and call the <code>toast()</code> method as shown in the example below.`
      }
    }
  },
  render: (args) => html`<div
      class="alert-creating-toasts-imperatively-toast-wrapper"
    >
      <ug-button variant="primary">Create Toast</ug-button>
    </div>

    <script>
      const alertCreatingToastsImperativelyToastWrapper =
        document.querySelector(
          '.alert-creating-toasts-imperatively-toast-wrapper'
        );
      const buttonCreatingToastsImperatively =
        alertCreatingToastsImperativelyToastWrapper.querySelector('ug-button');
      let count = 0;

      // Always escape HTML for text arguments!
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
        duration = 300000
      ) {
        const alertCreatingToastsImperatively = Object.assign(
          document.createElement('ug-alert'),
          {
            variant,
            closable: true,
            duration: duration,
            innerHTML: \`
              <ug-icon name="\${icon}" slot="icon"></ug-icon>
              \${escapeHtml(message)}
            \`
          }
        );

        document.body.append(alertCreatingToastsImperatively);
        return alertCreatingToastsImperatively.toast();
      }

      buttonCreatingToastsImperatively.addEventListener('click', () => {
        count++;
        notify('This is a custom toast ' + count);
      });
    </script> `
};

export const TheToastStack: Story = {
  parameters: {
    docs: {
      description: {
        story: `The toast stack is a fixed position singleton element created and managed internally by the alert component. It will be added and removed from the DOM as needed when toasts are shown. When more than one toast is visible, they will stack vertically in the toast stack.

By default, the toast stack is positioned at the top-right of the viewport. You can change its position by targeting .ug-toast-stack in your stylesheet. To make toasts appear at the top-left of the viewport, for example, use the following styles.

By design, it is not possible to show toasts in more than one stack simultaneously.`
      }
    }
  },
  // prettier-ignore
  render: (args) => html`.ug-toast-stack { 
  left: 0; 
  right: auto;
}`
};

export const AlertWithEvents: Story = {
  args: {
    ...Alert.args,
    closable: true,
    duration: 3000,
    open: false
  },
  parameters: {
    docs: {
      disable: true,

      description: {
        story: `A story that demonstrates Alert Events`
      }
    }
  },
  render: (args) => html`<div class="alert-event">
      <ug-button variant="primary">Show Alert</ug-button>

      <ug-alert
        ?open="${args.open}"
        ?closable="${args.closable}"
        variant="${ifDefined(args.variant)}"
        duration="${ifDefined(args.duration)}"
        countdown="${ifDefined(args.countdown)}"
        @ug-show="${action('ug-show')}"
        @ug-after-show="${action('ug-after-show')}"
        @ug-hide="${action('ug-hide')}"
        @ug-after-hide="${action('ug-after-hide')}"
      >
        ${args.iconSlot
          ? html`<ug-icon slot="icon" name="${args.iconSlot}"></ug-icon>`
          : ``}
        This is a standard alert. You can customize its content and even the
        icon.
      </ug-alert>
    </div>

    <style>
      .alert-duration ug-alert {
        margin-top: var(--ug-spacing-medium);
      }
    </style>`,
  play: async () => {
    const alertEventContainer = document.querySelector('.alert-event');
    if (alertEventContainer) {
      const buttonEvent = alertEventContainer.querySelector('ug-button');
      const alertEvent = alertEventContainer.querySelector(
        'ug-alert'
      ) as UgAlert;

      if (buttonEvent && alertEvent) {
        buttonEvent.addEventListener('click', () => alertEvent.show());

        // Variables to track events
        let ugShowTriggered = false;
        let ugAfterShowTriggered = false;
        let ugHideTriggered = false;
        let ugAfterHideTriggered = false;

        // Add event listeners
        alertEvent.addEventListener('ug-show', () => {
          console.log('ug-show event triggered');
          ugShowTriggered = true;
        });

        alertEvent.addEventListener('ug-after-show', () => {
          console.log('ug-after-show event triggered');
          ugAfterShowTriggered = true;
        });

        alertEvent.addEventListener('ug-hide', () => {
          console.log('ug-hide event triggered');
          ugHideTriggered = true;
        });

        alertEvent.addEventListener('ug-after-hide', () => {
          console.log('ug-after-hide event triggered');
          ugAfterHideTriggered = true;
        });

        await new Promise((r) => setTimeout(r, 500)); // Allow for focus animations/delays

        await userEvent.click(buttonEvent);

        await new Promise((r) => setTimeout(r, 15)); // Allow for focus animations/delays

        // Assert that all events were triggered
        if (!ugShowTriggered) {
          throw new Error('The ug-show event was not triggered.');
        }

        if (!ugAfterShowTriggered) {
          throw new Error('The ug-after-show event was not triggered.');
        }

        // Assert that all hide events not yet triggered
        if (ugHideTriggered) {
          throw new Error('The ug-hide event was triggered prematurely.');
        }

        if (ugAfterHideTriggered) {
          throw new Error('The ug-after-hide event was triggered prematurely.');
        }

        await new Promise((r) => setTimeout(r, alertEvent.duration)); // Allow for focus animations/delays

        // Assert that all hide events not yet triggered
        if (!ugHideTriggered) {
          throw new Error('The ug-hide event was not triggered.');
        }

        if (!ugAfterHideTriggered) {
          throw new Error('The ug-after-hide event was not triggered.');
        }
      }
    }
  }
};
