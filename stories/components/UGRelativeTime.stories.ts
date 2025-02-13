import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/relative-time';

const meta: Meta = {
  title: 'Components/RelativeTime',
  component: 'ug-relative-time',
  parameters: {
    docs: {
      subtitle:
        'Outputs a localized time phrase relative to the current date and time.',
      description: {
        component:
          'Localization is handled by the browser’s <code>[Intl.RelativeTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat)</code> [API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat). No language packs are required.'
      },
      source: {
        format: true,
        transform: (code: string) => {
          // Remove empty/default attributes and replace boolean attributes from the source code display
          return code
            .replace(/\s*(format="long"|numeric="auto")/g, '')
            .replace(/\s* sync=""/g, ' sync');
        }
      }
    }
  },
  argTypes: {
    date: {
      description:
        'The date from which to calculate time from. If not set, the current date and time will be used. When passing a string, it’s strongly recommended to use the ISO 8601 format to ensure timezones are handled correctly. To convert a date to this format in JavaScript, use <code>[date.toISOString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)</code>.',
      control: 'date',
      table: {
        category: 'Properties',
        type: { summary: 'Date | string' },
        defaultValue: { summary: 'new Date()' }
      }
    },
    format: {
      description: 'The formatting style to use.',
      control: 'select',
      options: ['long', 'short', 'narrow'],
      table: {
        category: 'Properties',
        type: { summary: "'long' | 'short' | 'narrow'" },
        defaultValue: { summary: "'long'" }
      }
    },
    numeric: {
      description:
        'When <code>auto</code>, values such as “yesterday” and “tomorrow” will be shown when possible. When <code>always</code>, values such as “1 day ago” and “in 1 day” will be shown.',
      control: 'select',
      options: ['always', 'auto'],
      table: {
        category: 'Properties',
        type: { summary: "'always' | 'auto'" },
        defaultValue: { summary: "'auto'" }
      }
    },
    sync: {
      description: 'Keep the displayed value up to date as time passes.',
      control: 'boolean',
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    updateComplete: {
      description:
        'A read-only promise that resolves when the component has finished updating.',
      table: {
        category: 'Properties',
        type: { summary: 'Promise<void>' },
        defaultValue: { summary: undefined }
      },
      control: false // Read-only property, so no control
    },
    lang: {
      description: `Gets or sets the base language of an element's attribute values and text content.
      
The language code returned by this property is defined in [RFC 5646: Tags for Identifying Languages (also known as BCP 47)](https://datatracker.ietf.org/doc/html/rfc5646). Common examples include "en" for English, "ja" for Japanese, "es" for Spanish and so on. The default value of this attribute is unknown. Note that this attribute, though valid at the individual element level described here, is most often specified for the root element of the document.`,
      control: 'text',
      table: {
        category: 'Relevant HTMLElement properties',
        type: { summary: 'string' },
        defaultValue: { summary: 'unknown' }
      }
    }
  }
};

export default meta;

type Story = StoryObj;

// Keep track of the last valid date so that you can set that if date is invalid
let lastValidDate: Date;

export const RelativeTime: Story = {
  args: {
    date: new Date().toISOString(), // Default to current date/time
    format: 'long',
    numeric: 'auto',
    lang: 'en',
    sync: false
  },
  render: (args) => {
    // Ensure `date` is properly converted to a valid ISO string
    let newDate =
      typeof args.date === 'string' || args.date instanceof Date
        ? new Date(args.date)
        : new Date(Number(args.date));
    //If date is invalid use cached value from lastValidDate: Date;
    if (isNaN(newDate.getTime())) {
      console.warn('Invalid date:', args.date);
      newDate = lastValidDate;
    } else {
      //chache the value
      lastValidDate = newDate;
    }
    const formattedDate = newDate.toISOString();
    return html`<ug-relative-time
      date="${formattedDate}"
      format="${args.format}"
      numeric="${args.numeric}"
      lang="${args.lang}"
    ></ug-relative-time>`;
  }
};

export const KeepingTimeInSync: Story = {
  ...RelativeTime,
  args: {
    ...RelativeTime.args,
    date: new Date(new Date().getTime() - 60000), // Default to current date/time
    sync: true
  },
  parameters: {
    docs: {
      description: {
        story: `Use the <code>sync</code> attribute to update the displayed value automatically as time passes.`
      }
    },
    controls: { disable: true }
  }
};

export const FormattingStyles: Story = {
  ...RelativeTime,
  args: {
    ...RelativeTime.args,
    date: new Date('1817-10-09T08:30:00-01:00') // 9 oktober 1817, oprichting UGent
  },
  parameters: {
    docs: {
      description: {
        story: `Use the <code>sync</code> attribute to update the displayed value automatically as time passes.`
      }
    },
    controls: { disable: true }
  },
  render: (args) => {
    // Convert the date to ISO format
    const formattedDate = (args.date as Date).toISOString();
    return html`<ug-relative-time
        date="${formattedDate}"
        format="narrow"
        numeric="${args.numeric}"
        lang="${args.lang}"
      ></ug-relative-time
      ><br />
      <ug-relative-time
        date="${formattedDate}"
        format="short"
        numeric="${args.numeric}"
        lang="${args.lang}"
      ></ug-relative-time
      ><br />
      <ug-relative-time
        date="${formattedDate}"
        format="long"
        numeric="${args.numeric}"
        lang="${args.lang}"
      ></ug-relative-time>`;
  }
};

export const Localization: Story = {
  ...RelativeTime,
  args: {
    ...RelativeTime.args,
    date: new Date(new Date().getTime() + 120000),
    sync: true
  },
  parameters: {
    docs: {
      description: {
        story: `Use the <code>lang</code> attribute to set the desired locale.`
      }
    },
    controls: { disable: true }
  },
  render: (args) => {
    // Convert the date to ISO format
    const formattedDate = (args.date as Date).toISOString();
    return html`English:
      <ug-relative-time
        date="${formattedDate}"
        format="${args.format}"
        numeric="${args.numeric}"
        lang="en"
      ></ug-relative-time
      ><br />
      Dutch:
      <ug-relative-time
        date="${formattedDate}"
        format="${args.format}"
        numeric="${args.numeric}"
        lang="nl"
      ></ug-relative-time
      ><br />
      French:
      <ug-relative-time
        date="${formattedDate}"
        format="${args.format}"
        numeric="${args.numeric}"
        lang="fr"
      ></ug-relative-time
      ><br />
      German:
      <ug-relative-time
        date="${formattedDate}"
        format="${args.format}"
        numeric="${args.numeric}"
        lang="de"
      ></ug-relative-time
      ><br />
      Korean:
      <ug-relative-time
        date="${formattedDate}"
        format="${args.format}"
        numeric="${args.numeric}"
        lang="ko"
      ></ug-relative-time
      ><br />
      Chinese:
      <ug-relative-time
        date="${formattedDate}"
        format="${args.format}"
        numeric="${args.numeric}"
        lang="zh-CN"
      ></ug-relative-time>`;
  }
};
