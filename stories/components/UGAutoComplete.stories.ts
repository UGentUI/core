import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/alert';
import '/lib/components/input';
import '/lib/components/autocomplete';
import '/lib/components/menu-item';
import '/lib/components/icon';
import '/lib/components/dropdown';
import '/lib/components/menu';
import '/lib/components/spinner';
import { userEvent, within } from '@storybook/test';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Components/Autocomplete',
  component: 'ug-autocomplete',
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
        story: `(start typing to show the dropdown)`
      }
    }
  },

  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the control.',
      table: { category: 'properties', defaultValue: { summary: 'medium' } }
    },
    threshold: {
      control: 'number',
      description:
        'The amount of characters in the search input required until the dropdown will be shown and a ug-search event will be fired.',
      table: { category: 'properties', defaultValue: { detail: '1' } }
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the control.',
      table: { category: 'properties', defaultValue: { summary: 'false' } }
    },
    loading: {
      control: 'boolean',
      description:
        'Shows whether the search is still busy or not. (This has only effect when the search dropdown is visible).',
      table: { category: 'properties', defaultValue: { summary: 'false' } }
    },
    label: {
      control: 'text',
      description: "The button's label.",
      table: {
        category: 'properties',
        defaultValue: { summary: undefined }
      }
    },
    clearable: {
      control: 'boolean',
      description: 'Show or hide a clear icon-button',
      table: {
        category: 'properties',
        defaultValue: { summary: 'false' }
      }
    },

    ugEditStarted: {
      name: 'ug-edit-started',
      description:
        'Emitted the input field becomes visible. (by clicking the trigger of by pressing enter or space when the trigger did have focus.',
      table: {
        type: { summary: undefined },
        category: 'events',
        defaultValue: { summary: undefined }
      },
      control: false
    },
    ugEditCancelled: {
      name: 'ug-edit-cancelled',
      description:
        'Emitted the input field becomes invisible again. This happens when the user presses escape or clicks somewhere outside the component, so cancelling the edit / searching.',
      table: {
        type: { summary: undefined },
        category: 'events',
        defaultValue: { summary: undefined }
      },
      control: false
    },
    ugSearch: {
      name: 'ug-search',
      description:
        'Emitted when the search dropdown is shown (number of entered characters is >= threshold. <br>' +
        "Use the 'loading' attribute to inform the users if an asynchronuous search was started.",
      table: {
        type: { summary: undefined },
        category: 'events',
        defaultValue: { summary: undefined }
      },
      control: false
    },
    ugSelected: {
      name: 'ug-selected',
      description:
        'Emitted when the user did select one of the available ug-menu-items. The selected element is in the details of the event.',
      table: {
        type: { summary: undefined },
        category: 'events',
        defaultValue: { summary: undefined }
      },
      control: false
    },
    ugClear: {
      name: 'ug-clear',
      description: 'Emitted when the user did click on the clear icon-button.',
      table: {
        type: { summary: undefined },
        category: 'events',
        defaultValue: { summary: undefined }
      },
      control: false
    },

    slotTrigger: {
      name: 'trigger',
      description:
        "contains the content (aka 'value') of the component. When the user clicks on it, it will be replaced" +
        "by an input textfield. It is completely up to the user to render here something meaningful. When the component is not in 'edit mode' ",
      table: { category: 'slot' },
      control: false
    },
    'slotNo-results': {
      name: 'no-results',
      description:
        'This slot is used in case you want to change the default behavior when no results are available after a search.',
      table: { category: 'slot' },
      control: false
    },
    slotLoading: {
      name: 'loading',
      description:
        'This slot is used in case you want to change the default behavior when a search is in progress.',
      table: { category: 'slot' },
      control: false
    },
    slotPrefix: {
      name: 'prefix',
      description:
        'If you want to insert something before the trigger / input, use this slot. (this works just like <ug-input>',
      table: { category: 'slot' },
      control: false
    },
    slotSuffix: {
      name: 'prefix',
      description:
        'If you want to insert something before the trigger / input, use this slot. (this works just like <ug-input>',
      table: { category: 'slot' },
      control: false
    }
  }
};

export default meta;

type Story = StoryObj;

const Autocomplete_Base: Story = {
  args: {
    size: 'medium',
    threshold: 0,
    disabled: false
  },

  parameters: {
    controls: { disable: true }
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
        @ug-edit-started="${action('ug-edit-started')}"
        @ug-edit-cancelled="${action('ug-edit-cancelled')}"
        @ug-search="${action('ug-search')}"
        @ug-selected="${action('ug-selected')}"
        @ug-clear="${action('ug-clear')}"
      >
        <span slot="trigger">Current value</span>

        <ug-menu-item value="english">English</ug-menu-item>
        <ug-menu-item value="mandarin">Mandarin</ug-menu-item>
        <ug-menu-item value="hindi">Hindi</ug-menu-item>
        <ug-menu-item value="spanish">Spanish</ug-menu-item>
        <ug-menu-item value="french">French</ug-menu-item>
      </ug-autocomplete>
    `;
  }
};

export const Autocomplete: Story = {
  ...Autocomplete_Base,
  parameters: {
    controls: { disable: false }
  }
};

export const Loading: Story = {
  ...Autocomplete_Base,
  args: {
    loading: true,
    size: 'medium'
  },
  parameters: {
    controls: { disable: false },
    docs: {
      description: {
        // story: `(start typing to show the dropdown)`,
      }
    }
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    let autoComplate = canvasElement.querySelector('ug-autocomplete')!;
    //click on the trigger
    const triggerLabel = canvas.getByText('Current value');
    await userEvent.click(triggerLabel);

    //get the input (we need to dig a bit deeper in the shadowDom for that...
    let shadowRoot = autoComplate.shadowRoot!;
    let textInput = shadowRoot.querySelector('input')!;

    await userEvent.type(textInput, 'search term', { delay: 100 });

    //await new Promise((resolve) => setTimeout(resolve, 500));
    // autoComplate.removeAttribute("loading")
  }
};

export const LoadingCustom: Story = {
  ...Autocomplete_Base,
  args: {
    loading: true,
    size: 'medium'
  },
  parameters: {
    controls: { disable: false },
    docs: {
      description: {
        story: `When the loading attribute added, we give an indication of the 'loading'. The default skeletons can be replaced 
                        by the slot 'loading'<br>
                        (start typing to show the dropdown)`
      }
    }
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    let autoComplate = canvasElement.querySelector('ug-autocomplete')!;
    //click on the trigger
    const triggerLabel = canvas.getByText('Current value');
    await userEvent.click(triggerLabel);

    //get the input (we need to dig a bit deeper in the shadowDom for that...
    let shadowRoot = autoComplate.shadowRoot!;
    let textInput = shadowRoot.querySelector('input')!;

    await userEvent.type(textInput, 'search term', { delay: 100 });

    //await new Promise((resolve) => setTimeout(resolve, 500));
    // autoComplate.removeAttribute("loading")
  },

  render: (args) =>
    html` <ug-autocomplete
      label="${args.label}"
      size="${args.size}"
      ?loading="${args.loading}"
      ?disabled="${args.disabled}"
      ?clearable="${args.clearable}"
      threshold="${args.threshold}"
      @ug-edit-started="${action('ug-edit-started')}"
      @ug-edit-cancelled="${action('ug-edit-cancelled')}"
      @ug-search="${action('ug-search')}"
      @ug-selected="${action('ug-selected')}"
      @ug-clear="${action('ug-clear')}"
    >
      <span slot="trigger">Current value</span>
      <span slot="loading">
        One moment please... We're looking for it! <ug-spinner></ug-spinner>
      </span>
    </ug-autocomplete>`
};

export const FoundResults: Story = {
  ...Autocomplete_Base,
  args: {
    loading: true,
    size: 'medium'
  },
  parameters: {
    controls: { disable: false },
    docs: {
      description: {
        story: `This is the most common usage. just add the <ug-menu-item>s to the <ug-autocomplete> body for adding items to the dropdown. (when there are no menu-items found, a no-results message will be shown)'<br>
                        (start typing to show the dropdown)`
      }
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    let autoComplate = canvasElement.querySelector('ug-autocomplete')!;
    //click on the trigger
    const triggerLabel = canvas.getByText('Current value');
    await userEvent.click(triggerLabel);

    //get the input (we need to dig a bit deeper in the shadowDom for that...
    let shadowRoot = autoComplate.shadowRoot!;
    let textInput = shadowRoot.querySelector('input')!;

    await userEvent.type(textInput, 'search term', { delay: 100 });

    await new Promise((resolve) => setTimeout(resolve, 500));
    autoComplate.removeAttribute('loading');
  }
};

export const NoResults: Story = {
  ...Autocomplete_Base,
  parameters: {
    controls: { disable: false },
    docs: {
      description: {
        story: `When no single <ug-menu-item> is available in the <ug-autocomplete> body, a message will be shown to the user that no items were found. <br>
Note that this will not be the case when the loading was added. In that case the loading message will be shown.<br>
(start typing to show the dropdown)`
      }
    }
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    let autoComplate = canvasElement.querySelector('ug-autocomplete')!;
    //click on the trigger
    const triggerLabel = canvas.getByText('Current value');
    await userEvent.click(triggerLabel);

    //get the input (we need to dig a bit deeper in the shadowDom for that...
    let shadowRoot = autoComplate.shadowRoot!;
    let textInput = shadowRoot.querySelector('input')!;

    await userEvent.type(textInput, 'search term', { delay: 100 });

    await new Promise((resolve) => setTimeout(resolve, 500));
    autoComplate.removeAttribute('loading');
  },
  render: (args) =>
    html` <ug-autocomplete
      label="${args.label}"
      size="${args.size}"
      ?loading="${args.loading}"
      ?disabled="${args.disabled}"
      ?clearable="${args.clearable}"
      threshold="${args.threshold}"
      @ug-edit-started="${action('ug-edit-started')}"
      @ug-edit-cancelled="${action('ug-edit-cancelled')}"
      @ug-search="${action('ug-search')}"
      @ug-selected="${action('ug-selected')}"
      @ug-clear="${action('ug-clear')}"
    >
      <span slot="trigger">Current value</span>
    </ug-autocomplete>`
};

export const NoResultsCustom: Story = {
  ...Autocomplete_Base,
  parameters: {
    controls: { disable: false },
    docs: {
      description: {
        story: `When no single <ug-menu-item> is available in the <ug-autocomplete> body, a message will be shown to the user that no items were found. <br>
Note that this will not be the case when the loading was added. In that case the loading message will be shown.<br>
(start typing to show the dropdown)`
      }
    }
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    let autoComplate = canvasElement.querySelector('ug-autocomplete')!;
    //click on the trigger
    const triggerLabel = canvas.getByText('Current value');
    await userEvent.click(triggerLabel);

    //get the input (we need to dig a bit deeper in the shadowDom for that...
    let shadowRoot = autoComplate.shadowRoot!;
    let textInput = shadowRoot.querySelector('input')!;

    await userEvent.type(textInput, 'search term', { delay: 100 });

    await new Promise((resolve) => setTimeout(resolve, 500));
    autoComplate.removeAttribute('loading');
  },
  render: (args) =>
    html` <ug-autocomplete
      label="${args.label}"
      size="${args.size}"
      ?loading="${args.loading}"
      ?disabled="${args.disabled}"
      ?clearable="${args.clearable}"
      threshold="${args.threshold}"
      @ug-edit-started="${action('ug-edit-started')}"
      @ug-edit-cancelled="${action('ug-edit-cancelled')}"
      @ug-search="${action('ug-search')}"
      @ug-selected="${action('ug-selected')}"
      @ug-clear="${action('ug-clear')}"
    >
      <span slot="trigger">Current value</span>
      <span slot="no-results">I'm sorry. We didn't find anything.</span>
    </ug-autocomplete>`
};
