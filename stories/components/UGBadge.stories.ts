import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/badge';
import '/lib/components/button';
import '/lib/components/menu';
import '/lib/components/menu-item';
import '/lib/components/menu-label';

// Utility function to remove default attributes
const removeDefaultAttributes = (code: string): string => {
  return code
    .replace(/\s*(variant="primary")/g, '')
    .replace(/\s* pill=""/g, ' pill')
    .replace(/\s* pulse=""/g, ' pulse');
};

interface ComponentMeta extends Meta {
  importPath?: string;
}
const meta: ComponentMeta = {
  importPath: 'import "@ugent-ui/core/components/button',

  title: 'Components/Badge',
  component: 'ug-badge',
  parameters: {
    docs: {
      subtitle:
        'A compact UI element for highlighting key information such as notifications, statuses, or counts.',
      source: {
        format: true,
        transform: (code: string) => removeDefaultAttributes(code)
      }
    }
  },
  argTypes: {
    // Attributes (set in HTML)
    variant: {
      control: 'select',
      options: ['primary', 'success', 'neutral', 'warning', 'danger'],
      description: 'The badge’s theme variant.',
      table: { category: 'attributes', defaultValue: { summary: 'primary' } }
    },
    pill: {
      control: 'boolean',
      description: 'Draws a pill-style badge with rounded edges.',
      table: { category: 'attributes', defaultValue: { summary: 'false' } }
    },
    pulse: {
      control: 'boolean',
      description: 'Makes the badge pulsate to draw attention.',
      table: { category: 'attributes', defaultValue: { summary: 'false' } }
    },
    // Properties (accessed via JavaScript)

    // Slots
    label: {
      name: 'default',
      control: 'text',
      description: 'The badge’s content.',
      table: {
        category: 'slots',
        defaultValue: { summary: undefined }
      }
    }
  }
};

export default meta;

type Story = StoryObj;

export const Badge: Story = {
  args: {
    variant: 'primary',
    pill: false,
    pulse: false,
    label: 'Badge'
  },
  parameters: {
    docs: {
      disable: false,
      description: {
        story: `A default badge.`
      }
    }
  },
  render: (args) => {
    return html`<ug-badge
      variant="${args.variant}"
      ?pill="${args.pill}"
      ?pulse="${args.pulse}"
      >${args.label}</ug-badge
    >`;
  }
};

//Variants
export const Variants: Story = {
  parameters: {
    docs: {
      description: {
        story: `Set the variant attribute to change the badge’s variant.`
      }
    },
    controls: { disable: true }
  },
  render: () =>
    html`<ug-badge variant="primary">Primary</ug-badge>
      <ug-badge variant="success">Success</ug-badge>
      <ug-badge variant="neutral">Neutral</ug-badge>
      <ug-badge variant="warning">Warning</ug-badge>
      <ug-badge variant="danger">Danger</ug-badge>`
};

//Pill Badges
export const PillBadges: Story = {
  args: {
    ...Badge.args,
    pill: true
  },
  parameters: {
    docs: {
      description: {
        story: `Use the <code>pill</code> attribute to give badges rounded edges.`
      }
    },
    controls: { disable: true }
  },
  render: (args) =>
    html`<ug-badge variant="primary" ?pill="${args.pill}">Primary</ug-badge>
      <ug-badge variant="success" ?pill="${args.pill}">Success</ug-badge>
      <ug-badge variant="neutral" ?pill="${args.pill}">Neutral</ug-badge>
      <ug-badge variant="warning" ?pill="${args.pill}">Warning</ug-badge>
      <ug-badge variant="danger" ?pill="${args.pill}">Danger</ug-badge>`
};

//Pulsating Badges
export const PulsatingBadges: Story = {
  args: {
    ...Badge.args,
    pill: true,
    pulse: true
  },
  parameters: {
    docs: {
      description: {
        story: `Use the <code>pulse</code> attribute to draw attention to the badge with a subtle animation.`
      }
    },
    controls: { disable: true }
  },
  render: (args) =>
    html` <div class="badge-pulse">
        <ug-badge variant="primary" ?pill="${args.pill}" ?pulse="${args.pulse}">
          1
        </ug-badge>
        <ug-badge variant="success" ?pill="${args.pill}" ?pulse="${args.pulse}">
          1
        </ug-badge>
        <ug-badge variant="neutral" ?pill="${args.pill}" ?pulse="${args.pulse}">
          1
        </ug-badge>
        <ug-badge variant="warning" ?pill="${args.pill}" ?pulse="${args.pulse}">
          1
        </ug-badge>
        <ug-badge variant="danger" ?pill="${args.pill}" ?pulse="${args.pulse}">
          1
        </ug-badge>
      </div>
      <style>
        .badge-pulse ug-badge:not(:last-of-type) {
          margin-right: 1rem;
        }
      </style>`
};

//With Buttons
export const WithButtons: Story = {
  parameters: {
    docs: {
      description: {
        story: `One of the most common use cases for badges is attaching them to buttons. To make this easier, badges will be automatically positioned at the top-right when they’re a child of a button.`
      }
    },
    controls: { disable: true }
  },
  render: () =>
    html` <ug-button>
        Requests
        <ug-badge pill>30</ug-badge>
      </ug-button>

      <ug-button style="margin-inline-start: 1rem;">
        Warnings
        <ug-badge variant="warning" pill>8</ug-badge>
      </ug-button>

      <ug-button style="margin-inline-start: 1rem;">
        Errors
        <ug-badge variant="danger" pill>6</ug-badge>
      </ug-button>`
};

//With Menu Items
export const WithMenuItems: Story = {
  parameters: {
    docs: {
      description: {
        story: `When including badges in [menu items](?path=/docs/components-menu--docs), use the <code>suffix</code> slot to make sure they’re aligned correctly.`
      }
    },
    controls: { disable: true }
  },
  render: () =>
    html`<ug-menu style="max-width: 240px;">
      <ug-menu-label>Messages</ug-menu-label>
      <ug-menu-item>
        Comments
        <ug-badge slot="suffix" variant="neutral" pill> 4 </ug-badge>
      </ug-menu-item>
      <ug-menu-item>
        Replies
        <ug-badge slot="suffix" variant="neutral" pill>12</ug-badge>
      </ug-menu-item>
    </ug-menu>`
};
