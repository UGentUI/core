import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/datetimeinput';
import { action } from '@storybook/addon-actions';
import { expect, userEvent } from '@storybook/test';
import { ifDefined } from 'lit/directives/if-defined.js';
import { assertDefined } from '../utils/storybook-utils';

const meta: Meta = {
  title: 'Components/Datetimeinput',
  component: 'ug-datetimeinput',
  parameters: {
    // layout: 'fullscreen',
    docs: {
      description: {
        component: `
<p>
This component is based on the <ug-input> web component. It contains the same events, properties, etc.
<br>
On top of that, it contains an input mask which helps the user entering a date with time in the right format.   
</p>`
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
      table: { category: 'properties', defaultValue: { summary: 'false' } }
    },
    placeholderwhiletyping: {
      attributes: ['placeholderwhiletyping'],
      name: 'placeholderWhileTyping',
      control: 'boolean',
      description: 'Keep showing the placeholder while typing',
      table: { category: 'properties', defaultValue: { summary: 'true' } }
    },
    showPicker: {
      control: 'boolean',
      description: 'Show or hide the picker icon',
      table: { category: 'properties', defaultValue: { summary: 'true' } }
    },
    dateMode: {
      control: 'select',
      options: ['dd/mm/yyyy', 'mm/dd/yyyy', 'yyyy/mm/dd'],
      description: `Defines the order of the 3 parts of a date: day, month and year. Note that the '/' in those options DO NOT have any meaning. It is only used to differentiate the parts in the input mask. <br>
                   To specify the separator, you should use the <code>dateSeparator</code> property`,
      table: { category: 'properties', defaultValue: { summary: 'dd/mm/yyyy' } }
    },
    dateSeparator: {
      control: 'text',
      description: `A character that is being used te separate the day, month and year in the input mask`,
      table: { category: 'properties', defaultValue: { summary: '/' } }
    },
    timeMode: {
      control: 'select',
      options: ['HH:MM', 'HH:MM:SS'],
      description: `Defines the order of the 2 or three parts of a time: hour, minutes and/or seconds. Note that the ':' in those options DO NOT have any meaning. It is only used to differentiate the parts in the input mask. <br>
                   To specify the separator in the visible ui, you should use the <code>timeSeparator</code> property`,
      table: { category: 'properties', defaultValue: { summary: 'HH:MM' } }
    },
    timeSeparator: {
      control: 'text',
      description: `A character that is being used te separate the hour, minutes and/or seconds in the input mask`,
      table: { category: 'properties', defaultValue: { summary: ':' } }
    },
    datetimeSeparator: {
      control: 'text',
      description: `A character that is being used te separate date part from the time part`,
      table: {
        category: 'properties'
      }
    },
    format: {
      control: 'text',
      description: `The date-fns format that is being used to format/parse the value of this component. So, the value of this component will always be 
      in this format. <br> 
It is important to understand that this format DOES NOT specify how the date is displayed. It only specifies the format of control.value.<br>
The format of the display is completely specified by <code>dateMode</code>, <code>dateSeparator</code>, <code>timeMode</code>, <code>TimeSeparator</code> and <code>datetimeSeparator</code>`,
      table: {
        category: 'properties'
      }
    },
    timezone: {
      control: 'text',
      description: `When timezone is specified, the local date, entered by the user, will be transformed to the given timezone before it is formatted as a 'value'. Otherwise, the local timezone will be used.`,
      table: {
        category: 'properties',
        defaultValue: {
          summary: 'null'
        }
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

export const Datetimeinput: Story = {
  args: {},
  // prettier-ignore
  render: (args) => {
    return html`
<ug-datetimeinput
  size="${ifDefined(args.size)}"
  value="${ifDefined(args.value)}"
  timemode="${ifDefined(args.timeMode)}"
  datemode="${ifDefined(args.dateMode)}"
  dateSeparator="${ifDefined(args.dateSeparator)}"
  timeSeparator="${ifDefined(args.timeSeparator)}"
  format="${ifDefined(args.format)}"
  label="${ifDefined(args.label)}"
  timezone="${ifDefined(args.timezone)}"
  datetimeSeparator="${ifDefined(args.datetimeSeparator)}"
  ?placeholderwhiletyping="${args.placeholderwhiletyping}"
  ?disabled="${args.disabled}"
  ?clearable="${args.clearable}"
  ?showpicker="${args.showPicker}"
  @ug-change="${action('ug-change')}"
  @ug-input="${action('ug-input')}"
  @ug-focus="${action('ug-focus')}"
  @ug-blur="${action('ug-blur')}"
  @ug-clear="${action('ug-clear')}"
></ug-datetimeinput>
    `;
  }
};

export const DatetimeWithoutOffset: Story = {
  ...Datetimeinput,
  args: {
    value: '2024-12-07T14:55',
    format: "yyyy-MM-dd'T'HH:mm",
    dateMode: 'dd/mm/yyyy',
    dateSeparator: '/',
    datetimeSeparator: ', '
  }
};

export const DatetimeWithoutOffsetIncludingSeconds: Story = {
  ...Datetimeinput,
  args: {
    value: '2024-12-07T14:55:32',
    format: "yyyy-MM-dd'T'HH:mm:ss",
    timeMode: 'HH:MM:SS'
  }
};

export const DatetimeInUTC: Story = {
  ...Datetimeinput,
  parameters: {
    docs: {
      description: {
        story: `When timezone is specified, the local date, entered by the user, will be transformed to the given timezone before it is formatted as a 'value'`
      }
    }
  },
  args: {
    label: 'datetimeinput',
    value: '2024-12-07T14:55+00:00',
    format: "yyyy-MM-dd'T'HH:mmXXX",
    dateMode: 'dd/mm/yyyy',
    dateSeparator: '/',
    datetimeSeparator: ', ',
    timezone: 'UTC'
  }
};

export const DatetimeWithEvents: Story = {
  ...Datetimeinput,
  parameters: {
    docs: {
      description: {
        story: ``
      }
    }
  },
  args: {
    label: 'My datetimeinput',
    value: '',
    format: "yyyy-MM-dd'T'HH:mm",
    dateMode: 'dd/mm/yyyy',
    dateSeparator: '/',
    datetimeSeparator: ', '
  },

  play: async ({ canvasElement }) => {
    let datetimeinput = canvasElement.querySelector('ug-datetimeinput')!;
    await datetimeinput.updateComplete;
    let shadowRoot = datetimeinput.shadowRoot!;
    let ugInput = shadowRoot.querySelector('ug-input');
    await expect(ugInput).toBeTruthy();
    await ugInput?.updateComplete;

    await expect(datetimeinput.value, 'Value should be empty at start').toEqual(
      ''
    );

    const input = ugInput?.shadowRoot?.querySelector(
      'input'
    ) as HTMLInputElement | null;
    assertDefined(input, 'Input should be present');

    await userEvent.type(input, '07/1');
    await expect(datetimeinput.value, 'No value when incomplete date').toEqual(
      ''
    );

    await userEvent.type(input, '2/1976');
    await expect(
      datetimeinput.value,
      'No value with complete date, but incomplete time'
    ).toEqual('');

    await userEvent.type(input, ', 1533');
    await expect(
      datetimeinput.value,
      'value with complete date and time'
    ).toEqual('1976-12-07T15:33');
  }
};
