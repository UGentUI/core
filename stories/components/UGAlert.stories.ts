import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/alert';
import '/lib/components/icon';
import { ifDefined } from 'lit/directives/if-defined.js';

const meta: Meta = {
  title: 'Components/Alert',
  component: 'UgAlert',
  parameters: {
    docs: {
      subtitle:
        'Alerts are used to display important messages inline or as toast notifications.'
    },
    toc: {
      /* options */
    },
    source: {
      format: true
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
      description: 'An icon to show in the alert. Works best with <sl-icon>.',
      table: {
        category: 'slots',
        type: { summary: 'slot' },
        defaultValue: { summary: '-' }
      },
      control: 'text'
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
  parameters: {
    source: {
      format: true
    }
  },
  render: (args) => {
    return html` <ug-alert
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
    source: {
      format: true
    },
    docs: {
      description: {
        story: `Set the <code>variant</code> attribute to change the alert’s variant.`
      }
    }
  },
  // prettier-ignore
  render: (args) => html`
<ug-alert variant="primary" 
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

<ug-alert variant="success" 
          ?open="${args.open}"
          ?closable="${args.closable}"
          duration="${ifDefined(args.duration)}"
          countdown="${ifDefined(args.countdown)}">
    <ug-icon slot="icon" name="check2-circle"></ug-icon>
    <strong>Your changes have been saved</strong><br />
    You can safely exit the app now.
</ug-alert>

<br />

<ug-alert variant="neutral" 
          ?open="${args.open}"
          ?closable="${args.closable}"
          duration="${ifDefined(args.duration)}"
          countdown="${ifDefined(args.countdown)}">
    <ug-icon slot="icon" name="gear"></ug-icon>
    <strong>Your settings have been updated</strong><br />
    Settings will take effect on next login.
</ug-alert>

<br />

<ug-alert variant="warning" 
          ?open="${args.open}"
          ?closable="${args.closable}"
          duration="${ifDefined(args.duration)}"
          countdown="${ifDefined(args.countdown)}">
    <ug-icon slot="icon" name="exclamation-triangle"></ug-icon>
    <strong>Your session has ended</strong><br />
    Please login again to continue.
</ug-alert>

<br />

<ug-alert variant="danger" 
          ?open="${args.open}"
          ?closable="${args.closable}"
          duration="${ifDefined(args.duration)}"
          countdown="${ifDefined(args.countdown)}">
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
