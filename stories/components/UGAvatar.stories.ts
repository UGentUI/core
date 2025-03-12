import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import { action } from '@storybook/addon-actions';
import '/lib/components/avatar';
import '/lib/components/icon';
import { userEvent } from '@storybook/test';

// Utility function to remove default attributes
const removeDefaultAttributes = (code: string): string => {
  return code.replace(
    /\s*(loading="eager"|shape="circle"|image=""|initials="")/g,
    ''
  );
};

const meta: Meta = {
  title: 'Components/Avatar',
  component: 'avatar',
  parameters: {
    docs: {
      subtitle: 'Avatars are used to represent a person or object.',
      source: {
        format: true,
        transform: (code: string) => removeDefaultAttributes(code)
      },
      importSection: true, // Enables the import section
      dependencies: ['icon']
    }
  },
  argTypes: {
    // Attributes (set in HTML)
    image: {
      control: 'text',
      description: 'The image source to use for the avatar.',
      table: { category: 'attributes', defaultValue: { summary: '' } }
    },
    label: {
      control: 'text',
      description:
        'A label to use to describe the avatar to assistive devices.',
      table: { category: 'attributes', defaultValue: { summary: '' } }
    },
    initials: {
      control: 'text',
      description:
        'Initials to use as a fallback when no image is available (1–2 characters max recommended).',
      table: { category: 'attributes', defaultValue: { summary: '' } }
    },
    loading: {
      control: 'select',
      options: ['eager', 'lazy'],
      description: 'Indicates how the browser should load the image.',
      table: { category: 'attributes', defaultValue: { summary: 'eager' } }
    },
    shape: {
      control: 'select',
      options: ['circle', 'square', 'rounded'],
      description: 'The shape of the avatar.',
      table: { category: 'attributes', defaultValue: { summary: 'circle' } }
    },

    // Properties (accessed via JavaScript)

    // Slots
    icon: {
      control: 'text',
      description:
        'The default icon to use when no image or initials are present. Works best with <code><ug-icon></code>',
      table: {
        category: 'slots',
        defaultValue: { summary: undefined }
      }
    },

    // Events
    ugError: {
      name: 'ug-error',
      action: 'ug-error', // Logs the ug-error event in the Actions panel
      description:
        'The image could not be loaded. This may because of an invalid URL, a temporary network condition, or some unknown cause.',
      table: {
        type: { summary: undefined },
        category: 'events',
        defaultValue: { summary: undefined }
      },
      control: false
    }

    // Methods
  }
};

export default meta;

type Story = StoryObj;

// Default story
export const Avatar: Story = {
  args: {
    image: '',
    label: 'User avatar',
    initials: '',
    loading: 'eager',
    shape: 'circle'
  },
  parameters: {
    docs: {
      disable: false,
      description: {
        story: `By default, a generic icon will be shown. You can personalize avatars by adding custom icons, initials, and images. You should always provide a <code>label</code> for assistive devices.`
      }
    }
  },
  render: (args) => {
    return html`<ug-avatar
      image="${args.image}"
      label="${args.label}"
      initials="${args.initials}"
      loading="${args.loading}"
      shape="${args.shape}"
    ></ug-avatar>`;
  }
};

//Images
export const Images: Story = {
  parameters: {
    docs: {
      disable: false,
      description: {
        story: `To use an image for the avatar, set the <code>image</code> and <code>label</code> attributes. This will take priority and be shown over initials and icons. Avatar images can be lazily loaded by setting the <code>loading</code> attribute to <code>lazy</code>.`
      }
    }
  },
  render: () => {
    return html`
      <ug-avatar
        image="https://images.unsplash.com/photo-1612940960267-4549a58fb257?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        label="Avatar of a corgi on a pink background"
      ></ug-avatar>
      <ug-avatar
        image="https://images.unsplash.com/photo-1523626797181-8c5ae80d40c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        label="Grayscale avatar of a pug"
      ></ug-avatar>
    `;
  }
};

//Initials
export const Initials: Story = {
  args: {
    ...Avatar.args,
    initials: 'UG',
    label: 'Avatar with initials: UG'
  },
  parameters: {
    docs: {
      disable: false,
      description: {
        story: `When you don’t have an image to use, you can set the <code>initials</code> attribute to show something more personalized than an icon.`
      }
    }
  },
  render: (args) => {
    return html`
      <ug-avatar initials="${args.initials}" label="${args.label}"></ug-avatar>
    `;
  }
};

//Custom Icons
export const CustomIcons: Story = {
  parameters: {
    docs: {
      disable: false,
      description: {
        story: `When no image or initials are set, an icon will be shown. The default avatar shows a generic “user” icon, but you can customize this with the <code>icon</code> slot.`
      }
    }
  },
  render: () => {
    return html`
      <ug-avatar label="Avatar with an image icon">
        <ug-icon slot="icon" name="bank2"></ug-icon>
      </ug-avatar>

      <ug-avatar label="Avatar with an archive icon">
        <ug-icon slot="icon" name="book"></ug-icon>
      </ug-avatar>

      <ug-avatar label="Avatar with a briefcase icon">
        <ug-icon slot="icon" name="briefcase"></ug-icon>
      </ug-avatar>
    `;
  }
};

//Shapes
export const Shapes: Story = {
  parameters: {
    docs: {
      disable: false,
      description: {
        story: `Avatars can be shaped using the shape attribute.`
      }
    }
  },
  render: () => {
    return html`
      <ug-avatar shape="square" label="Square avatar"></ug-avatar>
      <ug-avatar shape="rounded" label="Rounded avatar"></ug-avatar>
      <ug-avatar shape="circle" label="Circle avatar"></ug-avatar>
    `;
  }
};

//Avatar Groups
export const AvatarGroups: Story = {
  parameters: {
    docs: {
      disable: false,
      description: {
        story: `You can group avatars with a few lines of CSS.`
      }
    }
  },
  render: () => {
    return html`<div class="avatar-group">
        <ug-avatar
          image="https://images.unsplash.com/photo-1612940960267-4549a58fb257?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
          label="Avatar 1 of 4"
        ></ug-avatar>
        <ug-avatar
          image="https://images.unsplash.com/photo-1523626797181-8c5ae80d40c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
          label="Avatar 2 of 4"
        ></ug-avatar>
        <ug-avatar
          image="https://images.unsplash.com/photo-1658337921399-5b803fa62c21?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
          label="Avatar 3 of 4"
        ></ug-avatar>
        <ug-avatar
          image="https://images.unsplash.com/photo-1585072857532-4bffcc57aaee?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
          label="Avatar 4 of 4"
        ></ug-avatar>
      </div>

      <style>
        .avatar-group ug-avatar:not(:first-of-type) {
          margin-left: -1rem;
        }

        .avatar-group ug-avatar::part(base) {
          border: solid 2px white;
        }
      </style>`;
  }
};

export const AvatarWithEvents: Story = {
  tags: ['!autodocs'],
  args: {
    ...Avatar.args
  },
  parameters: {
    controls: { disable: true }
  },
  play: async ({ canvasElement }) => {
    try {
      // Wait for custom element to be defined
      await customElements.whenDefined('ug-avatar');

      const avatar = canvasElement.querySelector('ug-avatar');
      if (!avatar) throw new Error('Avatar not found');

      // Wait for component to be ready
      await avatar.updateComplete;

      // 1. Test Error Event
      avatar.image = 'This is an invalid URL';
      action('Set image propperty')('Set an invalid URL');
    } catch (error) {
      console.error('Test failed:', error);
      action('test error')((error as Error).message);
    }
  },
  render: () => html` <ug-avatar @ug-error=${action('ug-error')}></ug-avatar> `
};
