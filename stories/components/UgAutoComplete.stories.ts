import {html} from "lit";
import type {Meta, StoryObj} from "@storybook/web-components";
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
        docs: {
            description: {
                component: `
<p>
This component can be used for implementing an 'autocomplete" component in your web application framework of choice.
<br>
<strong>Important: </strong>This is not a working 'of the shelf' component. Is is more a utility/starting point to implement such a component in the web framework of choice.
</p>
<p>This component handles focus behavior, showing / hiding the dropdown and firing the corresponding events.<br>
It is up to you to implement the (asynchronous) loading behavior, and adding the <ug-menu-item>'s as a result of that.
</p>`,
                story: `(start typing to show the dropdown)`,

            },
        },
    },

    argTypes: {
        size: {
            control: "select",
            options: ["small", "medium", "large"],
            description: "The size of the control.",
            table: {category: "attributes", defaultValue: {summary: "medium"}},
        },
        threshold: {
            control: "number",
            description: "The amount of characters in the search input required until the dropdown will be shown and a ug-search event will be fired.",
            table: {category: "attributes", defaultValue: {detail:'1'}},
        },
        disabled: {
            control: "boolean",
            description: "Disables the control.",
            table: {category: "attributes", defaultValue: {summary: "false"}},
        },
        loading: {
            control: "boolean",
            description: "Shows whether the search is still busy or not. (This has only effect when the search dropdown is visible).",
            table: {category: "attributes", defaultValue: {summary: "false"}},
        },
        label: {
            control: "text",
            description: "The button's label.",
            table: {
                category: "attributes", defaultValue: {summary: undefined},
            },
        },
        clearable: {
            control: "boolean",
            description: "Show or hide a clear icon-button",
            table: {
                category: "attributes", defaultValue: {summary: false},
            },
        },

        ugEditStarted: {
            name: "ug-edit-started",
            description: "Emitted the input field becomes visible. (by clicking the trigger of by pressing enter or space when the trigger did have focus.",
            table: {
                type: {summary: undefined},
                category: "events",
                defaultValue: {summary: undefined},
            },
            control: false,
        },
        ugEditCancelled: {
            name: "ug-edit-cancelled",
            description: "Emitted the input field becomes invisible again. This happens when the user presses escape or clicks somewhere outside the component, so cancelling the edit / searching.",
            table: {
                type: {summary: undefined},
                category: "events",
                defaultValue: {summary: undefined},
            },
            control: false,
        },
        ugSearch: {
            name: "ug-search",
            description: "Emitted when the search dropdown is shown (number of entered characters is >= threshold. <br>" +
                "Use the 'loading' attribute to inform the users if an asynchronuous search was started.",
            table: {
                type: {summary: undefined},
                category: "events",
                defaultValue: {summary: undefined},
            },
            control: false,
        },
        ugSelected: {
            name: "ug-selected",
            description: "Emitted when the user did select one of the available ug-menu-items. The selected element is in the details of the event.",
            table: {
                type: {summary: undefined},
                category: "events",
                defaultValue: {summary: undefined},
            },
            control: false,
        },
        ugClear: {
            name: "ug-clear",
            description: "Emitted when the user did click on the clear icon-button.",
            table: {
                type: {summary: undefined},
                category: "events",
                defaultValue: {summary: undefined},
            },
            control: false,
        },

        slotTrigger: {
            name: "trigger",
            description: "contains the content (aka 'value') of the component. When the user clicks on it, it will be replaced" +
                "by an input textfield. It is completely up to the user to render here something meaningful. When the component is not in 'edit mode' ",
            table: {category: "slot"},
            control: false,

        },
        "slotNo-results": {
            name:'no-results',
            description: "This slot is used in case you want to change the default behavior when no results are available after a search.",
            table: {category: "slot"},
            control: false,

        },
        "slotLoading": {
            name:'loading',
            description: "This slot is used in case you want to change the default behavior when a search is in progress.",
            table: {category: "slot"},
            control: false,

        },
        "slotPrefix": {
            name:'prefix',
            description: "If you want to insert something before the trigger / input, use this slot. (this works just like <ug-input>",
            table: {category: "slot"},
            control: false,
        },
        "slotSuffix": {
            name:'prefix',
            description: "If you want to insert something before the trigger / input, use this slot. (this works just like <ug-input>",
            table: {category: "slot"},
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


    render: (args) => {
        return html`

<ug-autocomplete
        label="${args.label}"
        size="${args.size}"
        ?loading="${args.loading}"
        ?disabled="${args.disabled}"
        ?clearable="${args.clearable}"
        threshold="${args.threshold}"
>
    <span slot="trigger">Current value</span>

    <ug-menu-item value="english">English</ug-menu-item>
    <ug-menu-item value="mandarin">Mandarin</ug-menu-item>
    <ug-menu-item value="hindi">Hindi</ug-menu-item>
    <ug-menu-item value="spanish">Spanish</ug-menu-item>
    <ug-menu-item value="french">French</ug-menu-item>
</ug-autocomplete>
        `;
    },
};


export const Loading: Story = {
    args: {},
    parameters: {
        controls: {disable: true},
        docs: {
            description: {
                // story: `(start typing to show the dropdown)`,
            },
        },
    },
    // prettier-ignore
    render: (args) => html`
<ug-autocomplete loading searchterm="some value">
    <span slot="trigger">Current value</span>
</ug-autocomplete>`,
};

export const LoadingCustom: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: `When the loading attribute added, we give an indication of the 'loading'. The default skeletons can be replaced 
                        by the slot 'loading'<br>
                        (start typing to show the dropdown)`,
            },
        },
    },

    render: (args) => html`
<ug-autocomplete loading >
    <span slot="trigger">Current value</span>
    <span slot="loading">
        One moment please... We're looking for it! <ug-spinner></ug-spinner>
    </span>
</ug-autocomplete>`,
};


export const FoundResults: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: `This is the most common usage. just add the <ug-menu-item>s to the <ug-autocomplete> body for adding items to the dropdown. (when there are no menu-items found, a no-results message will be shown)'<br>
                        (start typing to show the dropdown)`,
            },
        },
    },
    render: (args) => html`
<ug-autocomplete>
    <span slot="trigger">Some Value</span>

    <ug-menu-item value="english">English</ug-menu-item>
    <ug-menu-item value="mandarin">Mandarin</ug-menu-item>
    <ug-menu-item value="hindi">Hindi</ug-menu-item>

</ug-autocomplete>`,
};

export const NoResults: Story = {
    args: {},
    parameters: {
        controls: {disable: true},
        docs: {
            description: {
                story: `When no single <ug-menu-item> is available in the <ug-autocomplete> body, a message will be shown to the user that no items were found. <br>
Note that this will not be the case when the loading was added. In that case the loading message will be shown.<br>
(start typing to show the dropdown)`,
            },
        },
    },
    // prettier-ignore
    render: (args) => html`
<ug-autocomplete>
    <span slot="trigger">Some Value</span>
</ug-autocomplete>`,
};

export const NoResultsCustom: Story = {
    args: {},
    parameters: {
        docs: {
            description: {
                story: `By using the slog 'no-results', you can show your own message to inform the user that no results were found'<br>
                        (start typing to show the dropdown)`,
            },
        },
    },
    // prettier-ignore
    render: (args) => html`
<ug-autocomplete >
    <span slot="trigger">Some Value</span>
    <span slot="no-results">I'm sorry. We didn't find anything.</span>
</ug-autocomplete>`,
};
