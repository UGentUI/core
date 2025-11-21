import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/card';
import '/lib/components/icon-button';
import '/lib/components/rating';
import '/lib/components/icon-button';
import '/lib/components/button';

const meta: Meta = {
  title: 'Components/Card',
  component: 'card',
  parameters: {
    docs: {
      subtitle: 'Cards can be used to group related subjects in a container.',
      source: {
        format: true
      },
      importSection: true // Enables the import section
    }
  },
  argTypes: {
    defaultSlot: {
      name: '(default)',
      description: 'The card’s main content.',
      control: 'text',
      table: {
        category: 'slots',
        type: { summary: 'HTML' },
        defaultValue: { summary: undefined }
      }
    },
    headerSlot: {
      name: 'header',
      description: 'An optional header for the card.',
      control: 'text',
      table: {
        category: 'slots',
        type: { summary: 'HTML' },
        defaultValue: { summary: undefined }
      }
    },
    footerSlot: {
      name: 'footer',
      description: 'An optional footer for the card.',
      control: 'text',
      table: {
        category: 'slots',
        type: { summary: 'HTML' },
        defaultValue: { summary: undefined }
      }
    },
    imageSlot: {
      name: 'image',
      description: 'An optional image to render at the start of the card.',
      control: 'check',
      options: ['<img>'],
      table: {
        category: 'slots',
        type: { summary: 'HTML <img> element' },
        defaultValue: { summary: undefined }
      }
    }
  }
};

export default meta;

type Story = StoryObj;

export const BasicCard: Story = {
  args: {
    defaultSlot:
      'This is just a basic card. No image, no header, and no footer. Just your content.',
    headerSlot: '',
    footerSlot: '',
    imageSlot: ''
  },
  render: (args) => {
    return html`<ug-card class="card-basic"
        >${args.headerSlot
          ? html`<div slot="header">${args.headerSlot}</div>`
          : ''}${args.imageSlot == '<img>'
          ? html`<img
              slot="image"
              src="https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"
              alt="A kitten walks towards camera on top of pallet."
            />`
          : ''}${args.defaultSlot}${args.footerSlot
          ? html`<div slot="footer">${args.footerSlot}</div>`
          : ''}</ug-card
      >

      <style>
        .card-basic {
          max-width: 300px;
        }
      </style>`;
  }
};

export const CardWithHeaderAndFooter: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Headers can be used to display titles and more. Footers can be used to display actions, summaries, or other relevant content.`
      },
      source: {
        format: true
      }
    }
  },
  render: () => {
    return html`<ug-card class="card-header-footer">
        <div slot="header">
          Header Title
          <ug-icon-button name="gear" label="Settings"></ug-icon-button>
        </div>

        This card has a header and a footer. You can put all sorts of things in
        them!

        <div slot="footer">
          <ug-rating></ug-rating>
          <ug-button variant="primary">Preview</ug-button>
        </div>
      </ug-card>

      <style>
        .card-header-footer {
          max-width: 300px;
        }

        .card-header-footer [slot='header'] {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .card-header-footer ug-icon-button {
          font-size: var(--ug-font-size-medium);
        }

        .card-header-footer [slot='footer'] {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      </style> `;
  }
};

export const CardWithImage: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Cards accept an <code>image</code> slot. The image is displayed atop the card and stretches to fit.`
      },
      source: {
        format: true
      }
    }
  },
  render: () => {
    return html`<ug-card class="card-image">
        <img
          slot="image"
          src="https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
          alt="A kitten walks towards camera on top of pallet."
        />
        This is a kitten, but not just any kitten. This kitten likes walking
        along pallets.
      </ug-card>

      <style>
        .card-image {
          max-width: 300px;
        }
      </style> `;
  }
};
