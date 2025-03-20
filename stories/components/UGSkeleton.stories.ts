import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/skeleton';

const meta: Meta = {
  title: 'Components/Skeleton',
  component: 'skeleton',
  parameters: {
    docs: {
      description: {
        component: `
Skeletons are used to provide a visual representation of where content will eventually be drawn.

These are simple containers for scaffolding layouts that mimic what users will see when content has finished loading. This prevents large areas of empty space during asynchronous operations.

Skeletons try not to be opinionated, as there are endless possibilities for designing layouts. Therefore, you'll likely use more than one skeleton to create the effect you want. If you find yourself using them frequently, consider creating a template that renders them with the desired arrangement and styles.`
      },
      importSection: true
    }
  },

  argTypes: {
    effect: {
      name: 'effect',
      description: 'Determines which effect the skeleton will use.',
      control: 'select',
      options: ['none', 'pulse', 'sheen'],
      table: {
        category: 'Properties',
        type: { summary: "'none' | 'pulse' | 'sheen'" },
        defaultValue: { summary: 'none' }
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
    }
  }
};

export default meta;

type Story = StoryObj;

export const Skeleton: Story = {
  parameters: {
    docs: {
      source: { format: true }
    }
  },
  args: {
    effect: 'none'
  },
  render: (args) => {
    return html`<div class="skeleton-overview">
        <header>
          <ug-skeleton effect="${args.effect}"></ug-skeleton>
          <ug-skeleton effect="${args.effect}"></ug-skeleton>
        </header>

        <ug-skeleton effect="${args.effect}"></ug-skeleton>
        <ug-skeleton effect="${args.effect}"></ug-skeleton>
        <ug-skeleton effect="${args.effect}"></ug-skeleton>
      </div>

      <style>
        .skeleton-overview header {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }

        .skeleton-overview header ug-skeleton:last-child {
          flex: 0 0 auto;
          width: 30%;
        }

        .skeleton-overview ug-skeleton {
          margin-bottom: 1rem;
        }

        .skeleton-overview ug-skeleton:nth-child(1) {
          float: left;
          width: 3rem;
          height: 3rem;
          margin-right: 1rem;
          vertical-align: middle;
        }

        .skeleton-overview ug-skeleton:nth-child(3) {
          width: 95%;
        }

        .skeleton-overview ug-skeleton:nth-child(4) {
          width: 80%;
        }
      </style> `;
  }
};

export const Effects: Story = {
  parameters: {
    docs: {
      description: {
        story: `There are two built-in effects, <code>sheen</code> and <code>pulse</code>. Effects are intentionally subtle, as they can be distracting when used extensively. The default is <code>none</code>, which displays a static, non-animated skeleton.`
      },
      source: { format: true }
    },
    controls: { disable: true }
  },
  render: () => {
    return html`<div class="skeleton-effects">
        <ug-skeleton effect="none"></ug-skeleton>
        None

        <ug-skeleton effect="sheen"></ug-skeleton>
        Sheen

        <ug-skeleton effect="pulse"></ug-skeleton>
        Pulse
      </div>

      <style>
        .skeleton-effects {
          font-size: var(--ug-font-size-small);
        }

        .skeleton-effects ug-skeleton:not(:first-child) {
          margin-top: 1rem;
        }
      </style>`;
  }
};

export const Paragraphs: Story = {
  parameters: {
    docs: {
      description: {
        story: `Use multiple skeletons and some clever styles to simulate paragraphs.`
      },
      source: { format: true }
    },
    controls: { disable: true }
  },
  render: () => {
    return html`<div class="skeleton-paragraphs">
        <ug-skeleton></ug-skeleton>
        <ug-skeleton></ug-skeleton>
        <ug-skeleton></ug-skeleton>
        <ug-skeleton></ug-skeleton>
        <ug-skeleton></ug-skeleton>
      </div>

      <style>
        .skeleton-paragraphs ug-skeleton {
          margin-bottom: 1rem;
        }

        .skeleton-paragraphs ug-skeleton:nth-child(2) {
          width: 95%;
        }

        .skeleton-paragraphs ug-skeleton:nth-child(4) {
          width: 90%;
        }

        .skeleton-paragraphs ug-skeleton:last-child {
          width: 50%;
        }
      </style> `;
  }
};

export const Avatars: Story = {
  parameters: {
    docs: {
      description: {
        story: `Set a matching width and height to make a circle, square, or rounded avatar skeleton.`
      },
      source: { format: true }
    },
    controls: { disable: true }
  },
  render: () => {
    return html`<div class="skeleton-avatars">
        <ug-skeleton></ug-skeleton>
        <ug-skeleton></ug-skeleton>
        <ug-skeleton></ug-skeleton>
      </div>

      <style>
        .skeleton-avatars ug-skeleton {
          display: inline-block;
          width: 3rem;
          height: 3rem;
          margin-right: 0.5rem;
        }

        .skeleton-avatars ug-skeleton:nth-child(1) {
          --border-radius: 0;
        }

        .skeleton-avatars ug-skeleton:nth-child(2) {
          --border-radius: var(--ug-border-radius-medium);
        }
      </style>`;
  }
};
