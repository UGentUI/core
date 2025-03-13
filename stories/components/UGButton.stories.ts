import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import { userEvent } from '@storybook/test';
import { action } from '@storybook/addon-actions';
import '/lib/components/button';

const meta: Meta = {
  title: 'Components/Button',
  component: 'button',
  parameters: {
    docs: {
      subtitle: 'Buttons represent actions that are available to the user',
      source: {
        format: true,
        transform: (code: string) => {
          return code
            .replace(
              /\s*(variant="default"|type="button"|href=""|target=""|rel=""|download=""|name=""|value=""|size="medium"|form=""|help-text="")/g,
              ''
            )
            .replace(/\s* caret=""/g, ' caret')
            .replace(/\s* disabled=""/g, ' disabled')
            .replace(/\s* outline=""/g, ' outline')
            .replace(/\s* loading=""/g, ' loading')
            .replace(/\s* required=""/g, ' required');
        }
      },
      importSection: true // Enables the import section
    }
  },
  argTypes: {
    // Properties
    variant: {
      control: 'select',
      options: [
        'default',
        'primary',
        'success',
        'neutral',
        'warning',
        'danger',
        'text'
      ],
      description: "The button's theme variant.<br>`reflects: true`",
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: 'default' }
      }
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: "The button's size.<br>`reflects: true`",
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' }
      }
    },
    caret: {
      control: 'boolean',
      description:
        'Draws the button with a caret. Used to indicate that the button triggers a dropdown menu or similar behavior.<br>`reflects: true`',
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button.<br>`reflects: true`',
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    loading: {
      control: 'boolean',
      description: 'Draws the button in a loading state.<br>`reflects: true`',
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    outline: {
      control: 'boolean',
      description: 'Draws an outlined button.<br>`reflects: true`',
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description:
        'The type of button. Note that the default value is `button` instead of `submit`, which is opposite of how native `<button>` elements behave. When the type is `submit`, the button will submit the surrounding form.',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: 'button' }
      }
    },
    name: {
      control: 'text',
      description:
        'The name of the button, submitted as a name/value pair with form data, but only when this button is the submitter. This attribute is ignored when href is present.',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    value: {
      control: 'text',
      description:
        'The value of the button, submitted as a pair with the button’s name as part of the form data, but only when this button is the submitter. This attribute is ignored when href is present.',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    href: {
      control: 'text',
      description:
        'When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`.',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    target: {
      control: 'select',
      options: ['_blank', '_parent', '_self', '_top'],
      description:
        'Tells the browser where to open the link. Only used when `href` is present.',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: undefined }
      }
    },
    rel: {
      control: 'text',
      description:
        'When using `href`, this attribute will map to the underlying link’s `rel` attribute. Unlike regular links, the default is `noreferrer noopener` to prevent security exploits. However, if you’re using `target` to point to a specific tab/window, this will prevent that from working correctly. You can remove or change the default value by setting the attribute to an empty string or a value of your choice, respectively.',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: '"noreferrer noopener"' }
      }
    },
    download: {
      control: 'text',
      description:
        'Tells the browser to download the linked file as this filename. Only used when `href` is present.',
      table: {
        category: 'Properties',
        type: { summary: 'string | undefined' },
        defaultValue: { summary: undefined }
      }
    },

    // Slots
    default: {
      name: '(default)',
      control: 'text',
      description: "The button's label.",
      table: {
        category: 'Slots',
        type: { summary: 'slot' },
        defaultValue: { summary: undefined }
      }
    },
    prefix: {
      control: 'check',
      options: ['Icon'],
      description: 'A presentational prefix icon or similar element.',
      table: {
        category: 'Slots',
        type: { summary: 'slot' },
        defaultValue: { summary: undefined }
      }
    },
    suffix: {
      control: 'check',
      options: ['Icon'],
      description: 'A presentational suffix icon or similar element.',
      table: {
        category: 'Slots',
        type: { summary: 'slot' },
        defaultValue: { summary: undefined }
      }
    },

    // Events
    'ug-blur': {
      action: 'ug-blur',
      description: 'Emitted when the button loses focus.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      }
    },
    'ug-focus': {
      action: 'ug-focus',
      description: 'Emitted when the button gains focus.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      }
    },

    // Methods
    click: {
      name: 'click()',
      description: 'Simulates a click on the button.',
      table: {
        category: 'Methods',
        type: { summary: '() => void' },
        defaultValue: { summary: undefined }
      }
    },
    focus: {
      name: 'focus()',
      description: 'Sets focus on the button.',
      table: {
        category: 'Methods',
        type: { summary: '(options?: FocusOptions) => void' },
        defaultValue: { summary: undefined }
      }
    },
    blur: {
      name: 'blur()',
      description: 'Removes focus from the button.',
      table: {
        category: 'Methods',
        type: { summary: '() => void' },
        defaultValue: { summary: undefined }
      }
    },
    getForm: {
      name: 'getForm()',
      description: 'Gets the associated form, if one exists.',
      table: {
        category: 'Methods',
        type: { summary: '() => HTMLFormElement | null' },
        defaultValue: { summary: undefined }
      }
    }
  }
};

export default meta;

type Story = StoryObj;

// Default story with all controls
export const Button: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    caret: false,
    disabled: false,
    loading: false,
    outline: false,
    type: 'button',
    name: '',
    value: '',
    href: '',
    target: '',
    rel: '',
    download: '',
    default: 'Button',
    prefix: false,
    suffix: false
  },
  render: (args) =>
    html`<ug-button
      variant="${args.variant}"
      size="${args.size}"
      ?disabled="${args.disabled}"
      ?outline="${args.outline}"
      ?caret="${args.caret}"
      ?loading="${args.loading}"
      type="${args.type}"
      name="${args.name}"
      value="${args.value}"
      href="${args.href}"
      target="${args.target}"
      rel="${args.rel}"
      download="${args.download}"
    >
      ${args.prefix == 'Icon'
        ? html`<ug-icon slot="prefix" name="gear"></ug-icon>`
        : ''}${args.default}${args.suffix == 'Icon'
        ? html`<ug-icon slot="suffix" name="arrows-rotate-reverse"></ug-icon>`
        : ''}
    </ug-button>`
};

// Variants
export const Variants: Story = {
  ...Button,
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Use the `variant` attribute to set the button’s variant.'
      }
    }
  },
  render: () => html`
    <ug-button variant="default">Default</ug-button>
    <ug-button variant="primary">Primary</ug-button>
    <ug-button variant="success">Success</ug-button>
    <ug-button variant="neutral">Neutral</ug-button>
    <ug-button variant="warning">Warning</ug-button>
    <ug-button variant="danger">Danger</ug-button>
  `
};

// Sizes
export const Sizes: Story = {
  ...Button,
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Use the `size` attribute to change a button’s size.'
      }
    }
  },
  render: () => html`
    <ug-button size="small">Small</ug-button>
    <ug-button size="medium">Medium</ug-button>
    <ug-button size="large">Large</ug-button>
  `
};

// Outline buttons
export const OutlineButtons: Story = {
  ...Button,
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Use the `outline` attribute to draw outlined buttons with transparent backgrounds.'
      }
    }
  },
  render: () => html`
    <ug-button variant="default" outline>Default</ug-button>
    <ug-button variant="primary" outline>Primary</ug-button>
    <ug-button variant="success" outline>Success</ug-button>
    <ug-button variant="neutral" outline>Neutral</ug-button>
    <ug-button variant="warning" outline>Warning</ug-button>
    <ug-button variant="danger" outline>Danger</ug-button>
  `
};

// Text buttons
export const TextButtons: Story = {
  ...Button,
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Use the `text` variant to create text buttons that share the same size as regular buttons but don’t have backgrounds or borders.'
      }
    }
  },
  render: () => html`
    <ug-button variant="text" size="small">Text</ug-button>
    <ug-button variant="text" size="medium">Text</ug-button>
    <ug-button variant="text" size="large">Text</ug-button>
  `
};

// Link buttons
export const LinkButtons: Story = {
  ...Button,
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'It’s often helpful to have a button that works like a link. This is possible by setting the `href` attribute, which will make the component render an `<a>` under the hood. This gives you all the default link behavior the browser provides (e.g. `CMD/CTRL/SHIFT + CLICK`) and exposes the `target` and `download` attributes.'
      }
    }
  },
  render: () => html`
    <ug-button href="https://ugent.be">Link</ug-button>
    <ug-button href="https://ugent.be/" target="_blank">New Window</ug-button>
    <ug-button href="/assets/icons/wordmark.svg" download="logo.svg"
      >Download</ug-button
    >
    <ug-button href="https://ugent.be/" disabled>Disabled</ug-button>
  `
};

// Setting a Custom Width
export const CustomWidth: Story = {
  ...Button,
  name: 'Setting a Custom Width',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'As expected, buttons can be given a custom width by passing inline styles to the component (or using a class). This is useful for making buttons span the full width of their container on smaller screens.'
      }
    }
  },
  render: () => html`
    <ug-button
      variant="default"
      size="small"
      style="width: 100%; margin-bottom: 1rem;"
      >Small</ug-button
    >
    <ug-button
      variant="default"
      size="medium"
      style="width: 100%; margin-bottom: 1rem;"
      >Medium</ug-button
    >
    <ug-button variant="default" size="large" style="width: 100%;"
      >Large</ug-button
    >
  `
};

// Prefix and Suffix Icons
export const PrefixAndSuffixIcons: Story = {
  ...Button,
  name: 'Prefix and Suffix Icons',
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Use the prefix and suffix slots to add icons.'
      }
    }
  },
  render: () => html`
    <ug-button variant="default" size="small">
      <ug-icon slot="prefix" name="gear"></ug-icon>
      Settings
    </ug-button>

    <ug-button variant="default" size="small">
      <ug-icon slot="suffix" name="arrows-rotate-reverse"></ug-icon>
      Refresh
    </ug-button>

    <ug-button variant="default" size="small">
      <ug-icon slot="prefix" name="link-horizontal"></ug-icon>
      <ug-icon slot="suffix" name="arrow-up-right-from-square"></ug-icon>
      Open
    </ug-button>

    <br /><br />

    <ug-button variant="default">
      <ug-icon slot="prefix" name="gear"></ug-icon>
      Settings
    </ug-button>

    <ug-button variant="default">
      <ug-icon slot="suffix" name="arrows-rotate-reverse"></ug-icon>
      Refresh
    </ug-button>

    <ug-button variant="default">
      <ug-icon slot="prefix" name="link-horizontal"></ug-icon>
      <ug-icon slot="suffix" name="arrow-up-right-from-square"></ug-icon>
      Open
    </ug-button>

    <br /><br />

    <ug-button variant="default" size="large">
      <ug-icon slot="prefix" name="gear"></ug-icon>
      Settings
    </ug-button>

    <ug-button variant="default" size="large">
      <ug-icon slot="suffix" name="arrows-rotate-reverse"></ug-icon>
      Refresh
    </ug-button>

    <ug-button variant="default" size="large">
      <ug-icon slot="prefix" name="link-horizontal"></ug-icon>
      <ug-icon slot="suffix" name="arrow-up-right-from-square"></ug-icon>
      Open
    </ug-button>
  `
};

// Caret buttons
export const Caret: Story = {
  ...Button,
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Use the `caret` attribute to add a dropdown indicator when a button will trigger a dropdown, menu, or popover.'
      }
    }
  },
  render: () => html`
    <ug-button size="small" caret>Small</ug-button>
    <ug-button size="medium" caret>Medium</ug-button>
    <ug-button size="large" caret>Large</ug-button>
  `
};

// Loading buttons
export const Loading: Story = {
  ...Button,
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Use the `loading` attribute to make a button busy. The width will remain the same as before, preventing adjacent elements from moving around.'
      }
    }
  },
  render: () => html`
    <ug-button variant="default" loading>Default</ug-button>
    <ug-button variant="primary" loading>Primary</ug-button>
    <ug-button variant="success" loading>Success</ug-button>
    <ug-button variant="neutral" loading>Neutral</ug-button>
    <ug-button variant="warning" loading>Warning</ug-button>
    <ug-button variant="danger" loading>Danger</ug-button>
  `
};

// Disabled buttons
export const Disabled: Story = {
  ...Button,
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Use the `disabled` attribute to disable a button.'
      }
    }
  },
  render: () => html`
    <ug-button variant="default" disabled>Default</ug-button>
    <ug-button variant="primary" disabled>Primary</ug-button>
    <ug-button variant="success" disabled>Success</ug-button>
    <ug-button variant="neutral" disabled>Neutral</ug-button>
    <ug-button variant="warning" disabled>Warning</ug-button>
    <ug-button variant="danger" disabled>Danger</ug-button>
  `
};

// Events demonstration
export const ButtonWithEvents: Story = {
  tags: ['!autodocs'],
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: 'Demonstrates button events and methods.'
      }
    }
  },
  render: () => html`
    <form id="test-form">
      <ug-button
        @ug-focus="${action('ug-focus')}"
        @ug-blur="${action('ug-blur')}"
        @click="${action('click')}"
      >
        Interactive Button
      </ug-button>
    </form>
  `,
  play: async ({ canvasElement }) => {
    const button = canvasElement.querySelector('ug-button');
    if (!button) throw new Error('Button not found');

    await button.updateComplete;

    // Click the button
    await userEvent.click(button);

    // Focus the button
    button.focus();
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Blur the button
    button.blur();

    // Get and log the form
    const form = button.getForm();
    action('getForm()')(form?.id);
  }
};
