import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import "/lib/components/tooltip";
import "/lib/components/button";
import { action } from "@storybook/addon-actions";

const meta: Meta = {
  title: "Components/Tooltip",
  component: "ug-tooltip",
  parameters: {
    docs: {
      subtitle:
        "Tooltips display additional information based on a specific action.",

      description: {
        component:
          "A tooltip's target is its first child element, so you should only wrap one element inside of the tooltip. If you need the tooltip to show up for multiple elements, nest them inside a container first. Tooltips use display: contents so they won't interfere with how elements are positioned in a flex or grid layout.",
      },
    },
  },

  argTypes: {
    // Properties
    content: {
      control: "text",
      description:
        "The tooltip's content. If you need to display HTML, use the content slot instead.",
      defaultValue: {
        summary: "",
      },
      table: {
        category: "Properties",
      },
    },

    placement: {
      control: "select",
      description:
        "The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip inside of the viewport. Use the placement attribute to set the preferred placement of the tooltip.",
      options: [
        "top-start",
        "top",
        "top-end",
        "left-start",
        "right-start",
        "left",
        "right",
        "left-end",
        "right-end",
        "bottom-start",
        "bottom",
        "right",
      ],
      defaultValue: {
        summary: "top",
      },
      table: {
        category: "Properties",
      },
    },

    disabled: {
      control: "boolean",
      description: "Disables the tooltip so it won't show when triggered.",
      defaultValue: {
        summary: false,
      },
      table: {
        category: "Properties",
      },
    },

    distance: {
      control: "number",
      description:
        "The distance in pixels from which to offset the tooltip away from its target.",
      defaultValue: {
        summary: 8,
      },
      table: {
        category: "Properties",
      },
    },

    trigger: {
      control: "select",
      description:
        "Set the trigger attribute to click to toggle the tooltip on click instead of hover. Tooltips can be controlled programmatically by setting the trigger attribute to manual. Use the open attribute to control when the tooltip is shown.",
      options: ["click", "hover", "focus", "manual"],
      defaultValue: {
        summary: "hover",
      },
      table: {
        category: "Properties",
      },
    },

    open: {
      control: "boolean",
      description:
        "Tooltips can be controlled programmatically by setting the trigger attribute to manual. Use the open attribute to control when the tooltip is shown. You can use this in lieu of the show/hide methods.",
      defaultValue: {
        summary: false,
      },
      table: {
        category: "Properties",
      },
    },

    skidding: {
      control: "number",
      description:
        "The distance in pixels from which to offset the tooltip along its target.",
      defaultValue: {
        summary: 0,
      },
      table: {
        category: "Properties",
      },
    },

    hoist: {
      control: "boolean",
      description:
        "Tooltips will be clipped if they're inside a container that has overflow: auto|hidden|scroll. The hoist attribute forces the tooltip to use a fixed positioning strategy, allowing it to break out of the container. In this case, the tooltip will be positioned relative to its containing block, which is usually the viewport unless an ancestor uses a transform, perspective, or filter. Refer to this page for more details.",
      defaultValue: {
        summary: true,
      },
      table: {
        category: "Properties",
      },
    },

    updateComplete: {
      table: {
        category: "Properties",
        disable: true,
      },
      description:
        "A read-only promise that resolves when the component has finished updating. (Non-configurable property.)",
    },

    // Event handling
    slShow: {
      action: "sl-show",
      description: "Emitted when the tooltip begins to show.",
      table: {
        category: "Events",
        defaultValue: { summary: undefined },
      },
    },
    slAfterShow: {
      action: "sl-after-show",
      description:
        "Emitted after the tooltip has shown and all animations are complete.",
      table: {
        category: "Events",
        defaultValue: { summary: undefined },
      },
    },
    slHide: {
      action: "sl-hide",
      description: "Emitted when the tooltip begins to hide.",
      table: {
        category: "Events",
        defaultValue: { summary: undefined },
      },
    },
    slAfterHide: {
      action: "sl-after-hide",
      description:
        "Emitted after the tooltip has hidden and all animations are complete.",
      table: {
        category: "Events",
        defaultValue: { summary: undefined },
      },
    },

    // Methods
    show: {
      description: "Shows the tooltip.",
      table: {
        category: "Methods",
        type: { summary: undefined },
        defaultValue: { summary: undefined },
      },
    },
    hide: {
      description: "Hides the tooltip.",
      table: {
        category: "Methods",
        type: { summary: undefined },
        defaultValue: { summary: undefined },
      },
    },

    // CSS Custom Properties
    "--max-width": {
      description:
        "The maximum width of the tooltip before its content will wrap.",
      table: {
        category: "CSS Custom Properties",
        defaultValue: { summary: "undefined" },
      },
    },
    "--hide-delay": {
      description:
        "The amount of time to wait before hiding the tooltip when hovering.",
      table: {
        category: "CSS Custom Properties",
        defaultValue: { summary: "undefined" },
      },
    },
    "--show-delay": {
      description:
        "The amount of time to wait before showing the tooltip when hovering.",
      table: {
        category: "CSS Custom Properties",
        defaultValue: { summary: "undefined" },
      },
    },
  },
};

//TODO: style elements
//You can control the size of tooltip arrows by overriding the --sl-tooltip-arrow-size design token. To remove them, set the value to 0 as shown below.
//--sl-tooltip-arrow-size: 0;
//Use the --max-width custom property to change the width the tooltip can grow to before wrapping occurs.
//--max-width

export default meta;

type Story = StoryObj;

export const Tooltip: Story = {
  args: {
    content: "This is a tooltip",
    placement: "top",
    disabled: false,
    distance: 8,
    open: false,
    skidding: 0,
    trigger: "hover focus",
    hoist: true,
    "--max-width": "200px",
    "--hide-delay": "0ms",
    "--show-delay": "0ms",
  },
  render: (args) => {
    return html`<ug-tooltip
      content="${args.content}"
      placement="${args.placement}"
      ?disabled="${args.disabled}"
      ?open="${args.open}"
      distance="${args.distance}"
      skidding="${args.skidding}"
      trigger="${args.trigger}"
      ?hoist="${args.hoist}"
      @sl-Show="${action("sl-Show")}"
      @sl-AfterShow="${action("sl-AfterShow")}"
      @sl-Hide="${action("sl-Hide")}"
      style="--max-width: ${args["--max-width"]}; --hide-delay: ${args[
        "--hide-delay"
      ]}; --show-delay: ${args["--show-delay"]}"
    >
      <ug-button>Hover Me</ug-button>
    </ug-tooltip>`;
  },
};

export const ManualTrigger: Story = {
  ...Tooltip,
  args: {
    ...Tooltip.args,
  },
  parameters: {
    docs: {
      description: {
        story: `Tooltips can be controlled programmatically by setting the trigger attribute to manual. Use the open attribute to control when the tooltip is shown.`,
      },
    },
  },
  render: (args) => {
    return html`
      <ug-button style="margin-right: 4rem;">Toggle Manually</ug-button>

      <ug-tooltip
        content="This is an avatar"
        trigger="manual"
        class="manual-tooltip"
      >
        <ug-avatar label="User"></ug-avatar>
      </ug-tooltip>

      <script>
        const tooltip = document.querySelector(".manual-tooltip");
        const toggle = tooltip.previousElementSibling;

        toggle.addEventListener("click", () => (tooltip.open = !tooltip.open));
      </script>
    `;
  },
};

export const Positions2: Story = {
  ...Tooltip,
  args: {
    ...Tooltip.args,
    trigger: "click",
    open: true,
  },
  parameters: {
    docs: {
      description: {
        story: `Use the position attribute to change a tooltip's position.`,
      },
      note: "The divs are added for margining, without a margin the way the tooltip behaves sometimes changes",
    },
    controls: { disable: true },
  },
  render: (args) =>
    html`
      <div class="tooltip-placement-example">
        <div class="tooltip-placement-example-row">
          <ug-tooltip content="top-start" placement="top-start">
            <ug-button></ug-button>
          </ug-tooltip>

          <ug-tooltip content="top" placement="top">
            <ug-button></ug-button>
          </ug-tooltip>

          <ug-tooltip content="top-end" placement="top-end">
            <ug-button></ug-button>
          </ug-tooltip>
        </div>

        <div class="tooltip-placement-example-row">
          <ug-tooltip content="left-start" placement="left-start">
            <ug-button></ug-button>
          </ug-tooltip>

          <ug-tooltip content="right-start" placement="right-start">
            <ug-button></ug-button>
          </ug-tooltip>
        </div>

        <div class="tooltip-placement-example-row">
          <ug-tooltip content="left" placement="left">
            <ug-button></ug-button>
          </ug-tooltip>

          <ug-tooltip content="right" placement="right">
            <ug-button></ug-button>
          </ug-tooltip>
        </div>

        <div class="tooltip-placement-example-row">
          <ug-tooltip content="left-end" placement="left-end">
            <ug-button></ug-button>
          </ug-tooltip>

          <ug-tooltip content="right-end" placement="right-end">
            <ug-button></ug-button>
          </ug-tooltip>
        </div>

        <div class="tooltip-placement-example-row">
          <ug-tooltip content="bottom-start" placement="bottom-start">
            <ug-button></ug-button>
          </ug-tooltip>

          <ug-tooltip content="bottom" placement="bottom">
            <ug-button></ug-button>
          </ug-tooltip>

          <ug-tooltip content="bottom-end" placement="bottom-end">
            <ug-button></ug-button>
          </ug-tooltip>
        </div>
      </div>

      <style>
        .tooltip-placement-example {
          width: 500px;
          min-width: 500px;
          margin: auto;
          margin: 5rem;
          text-align: center;
        }

        .tooltip-placement-example-row:after {
          content: "";
          display: table;
          clear: both;
        }

        .tooltip-placement-example ug-button {
          float: left;
          width: 2.5rem;
          margin-right: 0.25rem;
          margin-bottom: 0.25rem;
        }

        .tooltip-placement-example-row:nth-child(1)
          ug-tooltip:first-child
          ug-button,
        .tooltip-placement-example-row:nth-child(5)
          ug-tooltip:first-child
          ug-button {
          margin-left: calc(40px + 0.25rem);
        }

        .tooltip-placement-example-row:nth-child(2)
          ug-tooltip:nth-child(2)
          ug-button,
        .tooltip-placement-example-row:nth-child(3)
          ug-tooltip:nth-child(2)
          ug-button,
        .tooltip-placement-example-row:nth-child(4)
          ug-tooltip:nth-child(2)
          ug-button {
          margin-left: calc((40px * 3) + (0.25rem * 3));
        }
      </style>
    `,
};

export const Positions: Story = {
  ...Tooltip,
  args: {
    ...Tooltip.args,
    trigger: "click",
    open: true,
  },
  parameters: {
    docs: {
      description: {
        story: `Use the position attribute to change a tooltip's position.`,
      },
      note: "The divs are added for margining, without a margin the way the tooltip behaves sometimes changes",
    },
    controls: { disable: true },
  },
  render: (args) =>
    html`<style>
        .tooltip-container {
          margin: 2rem;
          text-align: center;
        }
      </style>

      <div class="tooltip-container">
        <ug-tooltip
          content="Top Tooltip Text"
          placement="top"
          ?open="${args.open}"
          trigger="${args.trigger}"
        >
          <ug-button>Tooltip Button</ug-button>
        </ug-tooltip>
      </div>
      <div class="tooltip-container">
        <ug-tooltip
          content="Top-start Tooltip Text"
          placement="top-start"
          ?open="${args.open}"
          trigger="${args.trigger}"
        >
          <ug-button>Tooltip Button</ug-button>
        </ug-tooltip>
      </div>
      <div class="tooltip-container">
        <ug-tooltip
          content="Top-end Tooltip Text"
          placement="top-end"
          ?open="${args.open}"
          trigger="${args.trigger}"
        >
          <ug-button>Tooltip Button</ug-button>
        </ug-tooltip>
      </div>
      <div class="tooltip-container">
        <ug-tooltip
          content="Right Tooltip Text"
          placement="right"
          ?open="${args.open}"
          trigger="${args.trigger}"
        >
          <ug-button>Tooltip Button</ug-button>
        </ug-tooltip>
      </div>
      <div class="tooltip-container">
        <ug-tooltip
          content="Right-start Tooltip Text"
          placement="right-start"
          ?open="${args.open}"
          trigger="${args.trigger}"
        >
          <ug-button>Tooltip Button</ug-button>
        </ug-tooltip>
      </div>
      <div class="tooltip-container">
        <ug-tooltip
          content="Right-end Tooltip Text"
          placement="right-end"
          ?open="${args.open}"
          trigger="${args.trigger}"
        >
          <ug-button>Tooltip Button</ug-button>
        </ug-tooltip>
      </div>
      <div class="tooltip-container">
        <ug-tooltip
          content="Bottom Tooltip Text"
          placement="bottom"
          ?open="${args.open}"
          trigger="${args.trigger}"
        >
          <ug-button>Tooltip Button</ug-button>
        </ug-tooltip>
      </div>
      <div class="tooltip-container">
        <ug-tooltip
          content="Bottom-start Tooltip Text"
          placement="bottom-start"
          ?open="${args.open}"
          trigger="${args.trigger}"
        >
          <ug-button>Tooltip Button</ug-button>
        </ug-tooltip>
      </div>
      <div class="tooltip-container">
        <ug-tooltip
          content="Bottom-end Tooltip Text"
          placement="bottom-end"
          ?open="${args.open}"
          trigger="${args.trigger}"
        >
          <ug-button>Tooltip Button</ug-button>
        </ug-tooltip>
      </div>
      <div class="tooltip-container">
        <ug-tooltip
          content="Left Tooltip Text"
          placement="left"
          ?open="${args.open}"
          trigger="${args.trigger}"
        >
          <ug-button>Tooltip Button</ug-button>
        </ug-tooltip>
      </div>
      <div class="tooltip-container">
        <ug-tooltip
          content="Left-start Tooltip Text"
          placement="left-start"
          ?open="${args.open}"
          trigger="${args.trigger}"
        >
          <ug-button>Tooltip Button</ug-button>
        </ug-tooltip>
      </div>
      <div class="tooltip-container">
        <ug-tooltip
          content="Left-end Tooltip Text"
          placement="left-end"
          ?open="${args.open}"
          trigger="${args.trigger}"
        >
          <ug-button>Tooltip Button</ug-button>
        </ug-tooltip>
      </div> `,
};

export const Disabled: Story = {
  ...Tooltip,
  args: {
    ...Tooltip.args,
    disabled: true,
  },
};

export const TriggeredByClick: Story = {
  ...Tooltip,
  args: {
    ...Tooltip.args,
    trigger: "click",
  },
};

export const TriggeredByHover: Story = {
  ...Tooltip,
  args: {
    ...Tooltip.args,
    trigger: "hover",
  },
};

export const OpenedOnStart: Story = {
  ...Tooltip,
  args: {
    ...Tooltip.args,
    open: "true",
    trigger: "click",
  },
};

export const Hoist: Story = {
  args: {},
  parameters: {
    controls: { hoist: true },
    docs: {
      description: {
        story: `Tooltips will be clipped if they're inside a container that has overflow: auto|hidden|scroll. The hoist attribute forces the tooltip to use a fixed positioning strategy, allowing it to break out of the container. In this case, the tooltip will be positioned relative to its containing block, which is usually the viewport unless an ancestor uses a transform, perspective, or filter.`,
      },
    },
  },
  render: () =>
    html`
      <div class="tooltip-hoist">
        <ug-tooltip content="This is a tooltip">
          <ug-button>No Hoist</ug-button>
        </ug-tooltip>

        <ug-tooltip content="This is a tooltip" hoist>
          <ug-button>Hoist</ug-button>
        </ug-tooltip>
      </div>

      <style>
        .tooltip-hoist {
          position: relative;
          border: solid 2px var(--ug-panel-border-color);
          overflow: hidden;
          padding: var(--ug-spacing-medium);
          background-color: aliceblue;
        }

        .tooltip-hoist ug-button {
          margin: 1rem;
        }
      </style>
    `,
};

export const TriggeredByClickWithEvents: Story = {
  ...Tooltip,
  args: {
    ...Tooltip.args,
    trigger: "click",
  },
  parameters: {
    docs: {
      description: {
        story: `This story demonstrates how the Tooltip handles events like show, afterShow and hide in hover state.`,
      },
    },
  },
  render: (args) => html`<ug-tooltip
    content="${args.content}"
    placement="${args.placement}"
    ?disabled="${args.disabled}"
    ?open="${args.open}"
    distance="${args.distance}"
    skidding="${args.skidding}"
    ?hoist="${args.hoist}"
    trigger="${args.trigger}"
    @transitionstart="${action("sl-Show")}"
    @blur="${action("sl-Hide")}"
    @sl-show="${action("sl-show")}"
    @sl-after-show="${action("sl-after-show")}"
    @sl-hide="${action("sl-hide")}"
    style="--max-width: ${args["--max-width"]}; --hide-delay: ${args[
      "--hide-delay"
    ]}; --show-delay: ${args["--show-delay"]}"
  >
    <ug-button>I do things when you click me!</ug-button>
  </ug-tooltip>`,
};

export const TriggeredByHoverWithEvents: Story = {
  ...Tooltip,
  args: {
    ...Tooltip.args,
    trigger: "hover",
  },
  parameters: {
    docs: {
      description: {
        story: `This story demonstrates how the Tooltip handles events like show, afterShow and hide in hover state.`,
      },
    },
  },
  render: (args) => html` <ug-tooltip
    @hover="${action("sl-Show")}"
    @focus="${action("sl-Show")}"
    @blur="${action("sl-Hide")}"
    @sl-show="${action("sl-show")}"
    @sl-after-show="${action("sl-after-show")}"
    @sl-hide="${action("sl-hide")}"
    @sl-after-hide="${action("sl-after-hide")}"
    trigger="${args.trigger}"
    ><ug-button>I do things when you hover over me!</ug-button></ug-tooltip
  >`,
};
