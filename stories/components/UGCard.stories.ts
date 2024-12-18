import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/card';

const meta: Meta = {
  title: 'Components/Card',
  component: 'ug-card',
  parameters: {
    docs: {
      subtitle: 'Cards can be used to group related subjects in a container.'
    }
  },
  argTypes: {
    headerSlot: {
      name: 'header',
      description: 'An optional header for the card.',
      control: 'text',
      table: {
        category: 'slots',
        defaultValue: { summary: undefined }
      }
    },
    footerSlot: {
      name: 'footer',
      description: 'An optional footer for the card.',
      control: 'text',
      table: {
        category: 'slots',
        defaultValue: { summary: undefined }
      }
    },
    imageSlot: {
      name: 'image',
      description: 'An optional image to render at the start of the card.',
      control: 'text',
      table: {
        category: 'slots',
        defaultValue: { summary: undefined }
      }
    }
  }
};

export default meta;

type Story = StoryObj;

export const Card: Story = {
  render: () => {
    return html`<ug-card class="card-basic"
        >This is just a basic card. No image, no header, and no footer. Just
        your content.</ug-card
      ><style>
        .card-basic {
          max-width: 300px;
        }
      </style>`;
  }
};

export const CardWithHeader: Story = {
  parameters: {
    docs: {
      description: {
        story: `Headers can be used to display titles and more.`
      },
      source: {
        format: true
      }
    }
  },
  render: () => {
    return html`<ug-card class="card-header">
        <div slot="header">
          Header Title
          <ug-icon-button name="gear" label="Settings"></ug-icon-button>
        </div>

        This card has a header. You can put all sorts of things in it!
      </ug-card>

      <style>
        .card-header {
          max-width: 300px;
        }

        .card-header [slot='header'] {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .card-header h3 {
          margin: 0;
        }

        .card-header ug-icon-button {
          font-size: var(--ug-font-size-medium);
        }
      </style> `;
  }
};
