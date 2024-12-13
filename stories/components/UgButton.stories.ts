import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import { userEvent, within } from "@storybook/test";
import { action } from "@storybook/addon-actions";
import "/lib/components/button";

const meta: Meta = {
  title: "Components/Button",
  component: "ug-button",
  parameters: {
    docs: {
      toc: {
        /* options */
      },
      subtitle: "Buttons represent actions that are available to the user",
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "primary",
        "success",
        "neutral",
        "warning",
        "danger",
        "text",
      ],
      description: "The variant of the button.",
      table: {
        category: "attributes",
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "The size of the button.",
      table: { category: "attributes", defaultValue: { summary: "medium" } },
    },
    disabled: {
      control: "boolean",
      description: "Disables the button.",
      table: { category: "attributes", defaultValue: { summary: "false" } },
    },
    outline: {
      control: "boolean",
      description: "Outlined button with transparent background.",
      table: { category: "attributes", defaultValue: { summary: "false" } },
    },
    caret: {
      control: "boolean",
      description: "Shows a dropdown indicator.",
      table: { category: "attributes", defaultValue: { summary: "false" } },
    },
    loading: {
      control: "boolean",
      description: "Shows a loading spinnner.",
      table: { category: "attributes", defaultValue: { summary: "false" } },
    },
    label: {
      control: "text",
      description: "The button's label.",
      table: {
        category: "slots",
        defaultValue: { summary: undefined },
      },
    },
    prefix: {
      control: "check",
      options: ["Icon"],
      description: "A prefix icon or similar element.",
      table: {
        type: { summary: "HTML" },
        category: "slots",
        defaultValue: { summary: undefined },
      },
    },
    suffix: {
      control: "check",
      options: ["Icon"],
      description: "A suffix icon or similar element.",
      table: {
        type: { summary: "HTML" },
        category: "slots",
        defaultValue: { summary: undefined },
      },
    },
    ugBlur: {
      name: "ug-blur",
      action: "ug-blur", // Logs the ug-blur event in the Actions panel
      description: "Emitted when the button loses focus.",
      table: {
        type: { summary: undefined },
        category: "events",
        defaultValue: { summary: undefined },
      },
      control: false,
    },
    ugFocus: {
      name: "ug-focus",
      action: "ug-focus", // Logs the ug-focus event in the Actions panel
      description: "Emitted when the button gains focus.",
      table: {
        type: { summary: undefined },
        category: "events",
        defaultValue: { summary: undefined },
      },
      control: false,
    },
    onClick: {
      name: "click()",
      action: "click", // Logs the click event in the Actions panel
      description: "Simulates a click on the button.",
      table: {
        type: { summary: undefined },
        category: "methods",
        defaultValue: { summary: undefined },
      },
      control: false,
    },
    onFocus: {
      name: "focus()",
      action: "focus", // Logs the focus method in the Actions panel
      description: "Sets focus on the button.",
      table: {
        type: { summary: undefined },
        category: "methods",
        defaultValue: { summary: undefined },
      },
      control: false,
    },
    onBlur: {
      name: "blur()",
      action: "blur", // Logs the blur method in the Actions panel
      description: "Removes focus from the button.",
      table: {
        type: { summary: undefined },
        category: "methods",
        defaultValue: { summary: undefined },
      },
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj;

export const Button: Story = {
  args: {
    variant: "default",
    size: "medium",
    disabled: false,
    outline: false,
    caret: false,
    loading: false,
    label: "Button",
    prefix: null,
    suffix: null,
  },
  parameters: {
    docs: {
      disable: false,
      description: {
        story: `A default button.`,
      },
    },
  },
  // prettier-ignore
  render: (args) => {
    return html`<ug-button
      variant="${args.variant}"
      size="${args.size}"
      ?disabled="${args.disabled}"
      ?outline="${args.outline}"
      ?caret="${args.caret}"
      ?loading="${args.loading}"
    >${args.prefix == "Icon" ? html`<ug-icon slot="prefix" name="gear"></ug-icon>` : null}${args.suffix == "Icon" ? html`<ug-icon slot="suffix" name="arrow-counterclockwise"></ug-icon>` : null}
    ${args.label}
</ug-button>`;
  },
};

export const Variants: Story = {
  args: {},
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Use the variant attribute to set the button’s variant.`,
      },
    },
  },
  // prettier-ignore
  render: (args) => html`
<ug-button variant="default">Default</ug-button>
<ug-button variant="primary">Primary</ug-button>
<ug-button variant="success">Success</ug-button>
<ug-button variant="neutral">Neutral</ug-button>
<ug-button variant="warning">Warning</ug-button>
<ug-button variant="danger">Danger</ug-button>`,
};

export const OutlineButtons: Story = {
  args: {},
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Use the outline attribute to draw outlined buttons with transparent backgrounds.`,
      },
    },
  },
  // prettier-ignore
  render: (args) => html`
<ug-button variant="default" outline>Default</ug-button>
<ug-button variant="primary" outline>Primary</ug-button>
<ug-button variant="success" outline>Success</ug-button>
<ug-button variant="neutral" outline>Neutral</ug-button>
<ug-button variant="warning" outline>Warning</ug-button>
<ug-button variant="danger" outline>Danger</ug-button>`,
};

export const Sizes: Story = {
  args: {},
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Use the size attribute to change a button’s size.`,
      },
    },
  },
  // prettier-ignore
  render: () =>
    html`
<ug-button size="small">Small</ug-button>
<ug-button size="medium">Medium</ug-button>
<ug-button size="large">Large</ug-button>`,
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    size: "medium",
    disabled: true,
  },
  parameters: {
    docs: {
      controls: { disable: true },
      description: {
        story: `Use the disabled attribute to disable a button.`,
      },
      source: {
        code: `<ug-button variant="primary" disabled>Disabled Button</ug-button>`,
      },
    },
    controls: {
      exclude: ["disabled"],
    },
  },
  render: (args) =>
    html`<ug-button
      variant="${args.variant}"
      size="${args.size}"
      ?disabled="${args.disabled}"
      >Button</ug-button
    >`,
};

export const TextButtons: Story = {
  args: {},
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Use the text variant to create text buttons that share the same size as regular buttons but don’t have backgrounds or borders.`,
      },
    },
  },
  // prettier-ignore
  render: () =>
      html`
<ug-button variant="text" size="small">Small</ug-button>
<ug-button variant="text" size="medium">Medium</ug-button>
<ug-button variant="text" size="large">Large</ug-button>`,
};

export const LinkButtons: Story = {
  args: {},
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `It’s often helpful to have a button that works like a link. This is possible by setting the href attribute, which will make the component render an <a> under the hood. This gives you all the default link behavior the browser provides (e.g. CMD/CTRL/SHIFT + CLICK) and exposes the target and download attributes.`,
      },
    },
  },
  // prettier-ignore
  render: () =>
        html`
<ug-button href="https://example.com/">Link</ug-button>
<ug-button href="https://example.com/" target="_blank">New Window</ug-button>
<ug-button href="/assets/images/wordmark.svg" download="shoelace.svg">Download</ug-button>
<ug-button href="https://example.com/" disabled>Disabled</ug-button>`,
};

export const PrefixAndSuffixIcons: Story = {
  args: {},
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Use the prefix and suffix slots to add icons.`,
      },
    },
  },
  // prettier-ignore
  render: () =>
          html`
<ug-button>
    <ug-icon slot="prefix" name="gear"></ug-icon>
    Settings
</ug-button>
<ug-button>
    <ug-icon slot="suffix" name="arrow-counterclockwise"></ug-icon>
    Refresh
</ug-button>`,
};

export const Caret: Story = {
  args: {},
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Use the caret attribute to add a dropdown indicator when a button will trigger a dropdown, menu, or popover.`,
      },
    },
  },
  // prettier-ignore
  render: () =>
            html`
<ug-button size="small" caret>Small</ug-button>
<ug-button size="medium" caret>Medium</ug-button>
<ug-button size="large" caret>Large</ug-button>`,
};

export const Loading: Story = {
  args: {},
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Use the loading attribute to make a button busy. The width will remain the same as before, preventing adjacent elements from moving around.`,
      },
    },
  },
  // prettier-ignore
  render: () =>
              html`
<ug-button variant="default" loading>Default</ug-button>
<ug-button variant="primary" loading>Primary</ug-button>
<ug-button variant="success" loading>Success</ug-button>
<ug-button variant="neutral" loading>Neutral</ug-button>
<ug-button variant="warning" loading>Warning</ug-button>
<ug-button variant="danger" loading>Danger</ug-button>`,
};

export const ButtonWithEvents: Story = {
  args: {
    variant: "default",
    size: "medium",
    disabled: false,
    outline: false,
    label: "Button",
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `This story demonstrates how the Button handles events like "ug-focus" and "ug-blur".`,
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Button");
    // Simulate a click event
    await userEvent.click(button);

    // Simulate focus
    button.focus();
    await new Promise((resolve) => setTimeout(resolve, 500)); // Wait to see the focus effect

    // Simulate blur
    button.blur();
  },
  // prettier-ignore
  render: (args) => html`
<ug-button 
    @click="${args.onClick}"
    @focus="${action("ug-focus")}"
    @blur="${action("ug-blur")}"
>${args.label}</ug-button>`,
};
