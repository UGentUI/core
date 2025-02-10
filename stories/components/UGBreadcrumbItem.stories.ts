import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/breadcrumb-item';
import '/lib/components/icon';
import '/lib/components/icon-button';
import { ifDefined } from 'lit/directives/if-defined.js';

const meta: Meta = {
  title: 'Components/BreadcrumbItem',
  component: 'ug-breadcrumb-item',
  parameters: {
    docs: {
      description: {
        component:
          'Breadcrumb Items are used inside [breadcrumbs](?path=/docs/components-breadcrumb--docs) to represent different links.'
      },
      source: {
        format: true,
        transform: (code: string) => {
          // Remove empty/default attributes and replace boolean attributes from the source code display
          return code.replace(/\s(rel="noreferrer noopener")/g, '');
        }
      }
    }
  },

  argTypes: {
    href: {
      name: 'href',
      description:
        'Optional URL to direct the user to when the breadcrumb item is activated. When set, a link will be rendered internally. When unset, a button will be rendered instead.',
      control: 'text',
      table: {
        category: 'Properties',
        type: { summary: 'string | undefined' },
        defaultValue: { summary: undefined }
      }
    },
    target: {
      name: 'target',
      description:
        'Tells the browser where to open the link. Only used when <code>href</code> is set.',
      control: 'select',
      options: [undefined, '_blank', '_parent', '_self', '_top'],
      table: {
        category: 'Properties',
        type: {
          summary: "'_blank' | '_parent' | '_self' | '_top' | undefined"
        },
        defaultValue: { summary: undefined }
      }
    },
    rel: {
      name: 'rel',
      description:
        'The rel attribute to use on the link. Only used when href is set.',
      control: 'text',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: "'noreferrer noopener'" }
      }
    },
    updateComplete: {
      name: 'updateComplete',
      description:
        'A read-only promise that resolves when the component has finished updating.',
      table: {
        category: 'Properties',
        type: { summary: 'Promise<void>' },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    defaultSlot: {
      control: 'text',
      name: '(default)',
      description: 'The breadcrumb item’s label.',
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
    prefixSlot: {
      name: 'prefix',
      description: 'An optional prefix, usually an icon or icon button.',
      control: 'check',
      options: ['Icon'],
      table: {
        category: 'Slots',
        type: { summary: 'slot' },
        defaultValue: { summary: undefined }
      }
    },
    suffixSlot: {
      name: 'suffix',
      description: 'An optional suffix, usually an icon or icon button.',
      control: 'check',
      options: ['Icon'],
      table: {
        category: 'Slots',
        type: { summary: 'slot' },
        defaultValue: { summary: undefined }
      }
    },
    separatorSlot: {
      name: 'separator',
      description:
        'The separator to use for the breadcrumb item. This will only change the separator for this item. If you want to change it for all items in the group, set the separator on `<ug-breadcrumb>` instead.',
      table: {
        category: 'Slots',
        type: { summary: 'slot' },
        defaultValue: { summary: undefined }
      },
      control: 'text'
    }
  }
};

export default meta;

type Story = StoryObj;

export const BreadcrumbItem: Story = {
  args: {
    href: undefined,
    target: undefined,
    rel: 'noreferrer noopener',
    defaultSlot: 'Home',
    prefixSlot: undefined,
    suffixSlot: undefined,
    separatorSlot: undefined
  },
  //prettier-ignore
  render: (args) => {
    return html`
    <ug-breadcrumb>
      <ug-breadcrumb-item
        href="${ifDefined(args.href)}"
        target="${ifDefined(args.target)}"
        rel="${args.rel}"
        >${args.prefixSlot == 'Icon'
          ? html`
        <ug-icon slot="prefix" name="house"></ug-icon>`
          : null}${args.suffixSlot == 'Icon'
          ? html`
        <ug-icon slot="suffix" name="shield-lock"></ug-icon>`
          : null}${args.separatorSlot
          ? html`
        <span slot="separator">${args.separatorSlot}</span>`
          : null}
        ${ifDefined(args.defaultSlot)}
      </ug-breadcrumb-item>
      <ug-breadcrumb-item>Clothing</ug-breadcrumb-item>
      <ug-breadcrumb-item>Shirts</ug-breadcrumb-item>
    </ug-breadcrumb>`;
  }
};
