import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import "/lib/components/alert";
import "/lib/components/input";
import "/lib/components/autocomplete";
import "/lib/components/menu-item";
import "/lib/components/icon";
import "/lib/components/dropdown";
import "/lib/components/menu";

const meta: Meta = {
  title: "Components/Autocomplete",
  component: "ug-autocomplete",
  parameters: {
    // layout: 'fullscreen',
    docds: {
      description: {
        component: `This component can be used for implementing an 'autocomplete" behavior.
            Note that this component only facilitates the ui for this kind of component.
            This component does not implement search functionality at all, but its API and events provide ways to build one.`
      },
    },
  },

  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "The size of the control.",
      table: { category: "attributes", defaultValue: { summary: "medium" } },
    },
    disabled: {
      control: "boolean",
      description: "Disables the button.",
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
    search: {
      control: "text",
      description: "Initial search term. In most cases this won't be used, since it is the user who will enter ",
      table: {
        category: "slots",
        defaultValue: { summary: undefined },
      },
    },
    popupVisible: {
      control: "boolean",
      description: "Show the result menu or not. Note that only the change from false to true will trigger the popup to become visible." +
          "A better approach to show the result menu is to use the method show() ",
      table: { category: "attributes", defaultValue: { summary: "false" } },
    },
    // ugBlur: {
    //   name: "ug-blur",
    //   action: "ug-blur", // Logs the ug-blur event in the Actions panel
    //   description: "Emitted when the button loses focus.",
    //   table: {
    //     type: { summary: undefined },
    //     category: "events",
    //     defaultValue: { summary: undefined },
    //   },
    //   control: false,
    // },
    // ugFocus: {
    //   name: "ug-focus",
    //   action: "ug-focus", // Logs the ug-focus event in the Actions panel
    //   description: "Emitted when the button gains focus.",
    //   table: {
    //     type: { summary: undefined },
    //     category: "events",
    //     defaultValue: { summary: undefined },
    //   },
    //   control: false,
    // },
    ugSearch: {
      name: "ug-search",
      action: "ug-search", // Logs the ug-focus event in the Actions panel
      description: "Emitted when the search dropdown is shown (number of entered characters is >= threshold en rendering the available ug-menu-items. <br>" +
          "Use loading when to inform the user about this.",
      table: {
        type: { summary: undefined },
        category: "events",
        defaultValue: { summary: undefined },
      },
      control: false,
    },
    ugSelected: {
      name: "ug-selected",
      action: "ug-selected", // Logs the ug-focus event in the Actions panel
      description: "Emitted when the user did select one of the available ug-menu-items",
      table: {
        type: { summary: undefined },
        category: "events",
        defaultValue: { summary: undefined },
      },
      control: false,
    },
  }
};

export default meta;

type Story = StoryObj;

export const Autocomplete: Story = {
  args: {
    size: "medium",
  },
  // decorators: [
  //   (Story) => html`
  //     <div style=" height: 200px;">
  //       ${Story()}
  //     </div>
  //   `,
  // ],

  render: (args) => {
    return html`
      
      <ug-autocomplete  
          search="${args.search}"
          label="${args.label}"
          size="${args.size}"
          ?loading="${args.loading}"
          ?popupVisible="${args.popupVisible}"
          ?disabled="${args.disabled}"
        >
        <ug-menu-item value="english" >English</ug-menu-item>
        <ug-menu-item value="mandarin" >Mandarin</ug-menu-item>
        <ug-menu-item value="hindi" >Hindi</ug-menu-item>
        <ug-menu-item value="spanish" >Spanish</ug-menu-item>
        <ug-menu-item value="french" >French</ug-menu-item>

      </ug-autocomplete>
    `;
  },
};


export const Loading: Story = {
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
    <ug-autocomplete loading popupVisible searchterm="some value">
    </ug-autocomplete>`,
};
