import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import "/lib/components/alert";
import "/lib/components/input";
import "/lib/components/autocomplete";
import "/lib/components/menu-item";
import "/lib/components/icon";
import "/lib/components/dropdown";
import "/lib/components/menu";
import "/lib/components/spinner";

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
      description: "Disables the control.",
      table: { category: "attributes", defaultValue: { summary: "false" } },
    },
    loading: {
      control: "boolean",
      description: "Shows whether the search is still busy or not. (This has only effect when the search dropdown is visible).",
      table: { category: "attributes", defaultValue: { summary: "false" } },
    },
    label: {
      control: "text",
      description: "The button's label.",
      table: { category: "attributes",  defaultValue: { summary: undefined },
      },
    },


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

    trigger: {
      description: "contains the content (aka 'value') of the component. When the user clicks on it, it will be replaced" +
          "by an input textfield. It is completely up to the user to render here something meaningful. When the component is not in 'edit mode' ",
      table: { category: "slot"},
    },
    "no-results": {
      description: "This slot is used in case you want to change the default behavior when no results are available after a search.",
      table: { category: "slot"},
    },
    "loading": {
      description: "This slot is used in case you want to change the default behavior when a search is in progress.",
      table: { category: "slot"},
    },

  }
};

export default meta;

type Story = StoryObj;

export const Autocomplete: Story = {
  args: {
    size: "medium",
  },

  render: (args) => {
    return html`
      
      <ug-autocomplete  
          label="${args.label}"
          size="${args.size}"
          ?loading="${args.loading}"
          ?disabled="${args.disabled}"
        >
        <span slot="trigger">Current value</span>
        
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
        story: `when popupVisible a`,
      },
    },
  },
  // prettier-ignore
  render: (args) => html`
    <ug-autocomplete  loading searchterm="some value">
      <span slot="trigger">Current value</span>
    </ug-autocomplete>`,
};

export const LoadingCustom: Story = {
  args: {},
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `When the loading attribute is given, we give an indication of the leading. The default skeletons can be replaced 
        by the slot 'loading'`,
      },
    },
  },

  render: (args) => html`
    <ug-autocomplete loading  searchterm="some value">
      <span slot="trigger">Current value</span>
      <span slot="loading">
         One moment please... We're looking for it! <ug-spinner ></ug-spinner>
      </span>
    </ug-autocomplete>`,
};


export const FoundResults: Story = {
  args: {},
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `Use the variant attribute to set the button’s variant.`,
      },
    },
  },
  render: (args) => html`
    <ug-autocomplete  popupVisible searchterm="some value">
      <span slot="trigger">Some Value</span>

      <ug-menu-item value="english" >English</ug-menu-item>
      <ug-menu-item value="mandarin" >Mandarin</ug-menu-item>
      <ug-menu-item value="hindi" >Hindi</ug-menu-item>

    </ug-autocomplete>`,
};

export const NoResults: Story = {
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
    <ug-autocomplete  popupVisible searchterm="some value">
      <span slot="trigger">Some Value</span>
    </ug-autocomplete>`,
};

export const NoResultsCustom: Story = {
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
    <ug-autocomplete  popupVisible searchterm="some value">
      <span slot="trigger">Some Value</span>
      <span slot="no-results">I'm sorry. We didn't find anything.</span>
    </ug-autocomplete>`,
};
