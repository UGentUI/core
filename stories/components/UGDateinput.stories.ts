import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/dateinput';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Components/Dateinput',
  component: 'ug-dateinput',
  parameters: {
    // layout: 'fullscreen',
    docs: {
      description: {
        component: `
<p>
This component is based on the <ug-input> web component. It contains the same events, properties, etc.
<br>
On top of that, it contains an input mask which helps the user entering a date in the right format.   
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
    disabled: {
      control: 'boolean',
      description: 'Disables the control.',
      table: { category: 'properties', defaultValue: { summary: 'false' } }
    },
    label: {
      control: 'text',
      description: "The button's label.",
      table: {
        category: 'properties'
      }
    },
    clearable: {
      control: 'boolean',
      description: 'Show or hide a clear icon-button',
      table: {
        category: 'properties'
      }
    },
    dateMode: {
      control: 'select',
      options: ['dd/mm/yyyy', 'mm/dd/yyyy', 'yyyy/mm/dd'],
      description: `Defines the order of the 3 parts of a date: day, month and year. Note that the '/' in those options DO NOT have any meaning. It is only used to differentiate the parts in the input mask. <br>
                   To specify the separator, you should use the dateSeparator property`,
      table: {
        category: 'properties'
      }
    },
    dateSeparator: {
      control: 'text',
      description: `A character that is being used te separate the day, month and year in the input mask`,
      table: {
        category: 'properties'
      }
    },
    format: {
      control: 'text',
      description: `The date-fns format that is being used to format/parse the value of this component. So, the value of this component will always be 
      in this format. <br> 
It is important to understand that this format DOES NOT specify how the date is displayed. It only specifies the format of control.value.<br>
The format of the display is completely specified by <i>dateMode</i> and <i>dateSeparator</i>`,
      table: {
        category: 'properties'
      }
    },

    value: {
      control: 'text',
      description: `The value of this formcontrol. Note that it is not necessarily the same as the value you can see in the browser.`,
      table: {
        category: 'properties'
      }
    },

    ugFocus: {
      name: 'ug-focus',
      description: 'Emitted when this control gained focus.',
      table: {
        type: { summary: undefined },
        category: 'events'
      },
      control: false
    },
    ugBlur: {
      name: 'ug-blur',
      description: 'Emitted when this control lost focus.',
      table: {
        type: { summary: undefined },
        category: 'events'
      },
      control: false
    },
    ugInput: {
      name: 'ug-input',
      description:
        'Emitted when the is changing the date by using the input field. This event is fired, even if the entered value cannot be parsed to a valid date (yet).<br>' +
        'If you are only interested in emits of a valid date change, use the ug-change event instead.',
      table: {
        type: { summary: undefined },
        category: 'events'
      },
      control: false
    },
    ugChange: {
      name: 'ug-change',
      description:
        'Emitted when the value of this control did change from an empty value to a valid date or vice versa. Note that, when the user input could not yet be parsed to a valid date, the value will not change until it becomes valid again. (or empty when it stays invalid)',
      table: {
        type: { summary: undefined },
        category: 'events'
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

export const Dateinput: Story = {
  args: {
    size: 'medium',
    dateMode: 'dd/mm/yyyy',
    dateSeparator: '/',
    value: '2024-12-07',
    format: 'yyyy-MM-dd'
  },

  render: (args) => {
    return html`
      <ug-dateinput
        label="${args.label}"
        size="${args.size}"
        dateMode="${args.dateMode}"
        dateSeparator="${args.dateSeparator}"
        format="${args.format}"
        value="${args.value}"
        ?disabled="${args.disabled}"
        ?clearable="${args.clearable}"
        @ug-change="${action('ug-change')}"
        @ug-input="${action('ug-input')}"
        @ug-focus="${action('ug-focus')}"
        @ug-blur="${action('ug-blur')}"
        @ug-clear="${action('ug-clear')}"
      >
      </ug-dateinput>
    `;
  }
};

export const Clearable: Story = {
  ...Dateinput,
  args: {
    ...Dateinput.args,
    clearable: true
  }
};
