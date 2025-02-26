import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/format-date';
import { ifDefined } from 'lit/directives/if-defined.js';

const meta: Meta = {
  title: 'Components/Format Date',
  component: 'ug-format-date',
  parameters: {
    docs: {
      subtitle: 'Formats a date/time using the specified locale and options.',
      description: {
        component:
          'Localization is handled by the browser’s <code>[Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)</code> [API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat). No language packs are required.'
      },
      source: {
        format: true,
        transform: (code: string) => {
          // Remove empty/default attributes and replace boolean attributes from the source code display
          return code.replace(/\s(hour-format="auto")/g, '');
        }
      }
    }
  },
  argTypes: {
    date: {
      description:
        'The date/time to format. If not set, the current date and time will be used. When passing a string, it’s strongly recommended to use the ISO 8601 format to ensure timezones are handled correctly. To convert a date to this format in JavaScript, use [date.toISOString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString).',
      control: 'date',
      table: {
        category: 'Properties',
        type: { summary: 'Date | string' },
        defaultValue: { summary: 'new Date()' }
      }
    },
    weekday: {
      description: 'The format for displaying the weekday.',
      control: 'select',
      options: ['narrow', 'short', 'long'],
      table: {
        category: 'Properties',
        type: { summary: "'narrow' | 'short' | 'long'" },
        defaultValue: { summary: undefined }
      }
    },
    era: {
      description: 'The format for displaying the era.',
      control: 'select',
      options: ['narrow', 'short', 'long'],
      table: {
        category: 'Properties',
        type: { summary: "'narrow' | 'short' | 'long'" },
        defaultValue: { summary: undefined }
      }
    },
    year: {
      description: 'The format for displaying the year.',
      control: 'select',
      options: ['numeric', '2-digit'],
      table: {
        category: 'Properties',
        type: { summary: "'numeric' | '2-digit'" },
        defaultValue: { summary: undefined }
      }
    },
    month: {
      description: 'The format for displaying the month.',
      control: 'select',
      options: ['numeric', '2-digit', 'narrow', 'short', 'long'],
      table: {
        category: 'Properties',
        type: {
          summary: "'numeric' | '2-digit' | 'narrow' | 'short' | 'long'"
        },
        defaultValue: { summary: undefined }
      }
    },
    day: {
      description: 'The format for displaying the day.',
      control: 'select',
      options: ['numeric', '2-digit'],
      table: {
        category: 'Properties',
        type: { summary: "'numeric' | '2-digit'" },
        defaultValue: { summary: undefined }
      }
    },
    hour: {
      description: 'The format for displaying the hour.',
      control: 'select',
      options: ['numeric', '2-digit'],
      table: {
        category: 'Properties',
        type: { summary: "'numeric' | '2-digit'" },
        defaultValue: { summary: undefined }
      }
    },
    minute: {
      description: 'The format for displaying the minute.',
      control: 'select',
      options: ['numeric', '2-digit'],
      table: {
        category: 'Properties',
        type: { summary: "'numeric' | '2-digit'" },
        defaultValue: { summary: undefined }
      }
    },
    second: {
      description: 'The format for displaying the second.',
      control: 'select',
      options: ['numeric', '2-digit'],
      table: {
        category: 'Properties',
        type: { summary: "'numeric' | '2-digit'" },
        defaultValue: { summary: undefined }
      }
    },
    timeZoneName: {
      name: 'time-zone-name',
      description: 'The format for displaying the time.',
      control: 'select',
      options: ['short', 'long'],
      table: {
        category: 'Properties',
        type: { summary: "'short' | 'long'" },
        defaultValue: { summary: undefined }
      }
    },
    timeZone: {
      name: 'time-zone',
      description:
        'The time zone to express the time in. If not set, the browser’s default time zone will be used.',
      control: 'text',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: undefined }
      }
    },
    hourFormat: {
      name: 'hour-format',
      description: 'The format for displaying the hour.',
      control: 'select',
      options: ['auto', '12', '24'],
      table: {
        category: 'Properties',
        type: { summary: "'auto' | '12' | '24'" },
        defaultValue: { summary: "'auto'" }
      }
    },
    lang: {
      description: `Sets the language used for relative date formatting. Uses standard language codes like 'en-US' for American English, 'nl-BE' for Belgian Dutch, or 'fr-FR' for French. If not specified, inherits from the closest parent element with a lang attribute, or defaults to the browser's language.`,
      control: 'text',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: undefined }
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
      control: false
    }
  }
};

export default meta;

type Story = StoryObj;

export const FormatDate: Story = {
  args: {
    date: new Date().toISOString(),
    weekday: undefined,
    era: undefined,
    year: undefined,
    month: undefined,
    day: undefined,
    hour: undefined,
    minute: undefined,
    second: undefined,
    timeZoneName: undefined,
    timeZone: 'UTC',
    hourFormat: 'auto',
    lang: 'en-US'
  },
  render: (args) => {
    // Ensure `date` is properly converted to a valid ISO string
    const date =
      typeof args.date === 'string' || args.date instanceof Date
        ? new Date(args.date)
        : new Date(Number(args.date));

    const formattedDate = date.toISOString();
    return html`<ug-format-date
      date=${formattedDate}
      weekday=${ifDefined(args.weekday)}
      era=${ifDefined(args.era)}
      year=${ifDefined(args.year)}
      month=${ifDefined(args.month)}
      day=${ifDefined(args.day)}
      hour=${ifDefined(args.hour)}
      minute=${ifDefined(args.minute)}
      second=${ifDefined(args.second)}
      time-zone=${ifDefined(args.timeZone)}
      time-zone-name=${ifDefined(args.timeZoneName)}
      locale=${ifDefined(args.locale)}
      hour-format=${ifDefined(args.hourFormat)}
      lang=${ifDefined(args.lang)}
    ></ug-format-date>`;
  }
};

export const DateAndTimeFormatting: Story = {
  // Story-specific parameters
  parameters: {
    docs: {
      description: {
        story: `Formatting options are based on those found in the <code>[Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)</code> [API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat). When formatting options are provided, the date/time will be formatted according to those values. When no formatting options are provided, a localized, numeric date will be displayed instead.`
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  },
  // Component rendering logic
  render: () =>
    html`<!-- Human-readable date -->
      <ug-format-date month="long" day="numeric" year="numeric"></ug-format-date
      ><br />

      <!-- Time -->
      <ug-format-date hour="numeric" minute="numeric"></ug-format-date><br />

      <!-- Weekday -->
      <ug-format-date weekday="long"></ug-format-date><br />

      <!-- Month -->
      <ug-format-date month="long"></ug-format-date><br />

      <!-- Year -->
      <ug-format-date year="numeric"></ug-format-date><br />

      <!-- No formatting options -->
      <ug-format-date></ug-format-date> `
};

export const HourFormatting: Story = {
  // Story-specific parameters
  parameters: {
    docs: {
      description: {
        story: `By default, the browser will determine whether to use 12-hour or 24-hour time. To force one or the other, set the <code>hour-format</code> attribute to <code>12</code> or <code>24</code>.`
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  },
  // Component rendering logic
  render: () =>
    html`<ug-format-date
        hour="numeric"
        minute="numeric"
        hour-format="12"
      ></ug-format-date
      ><br />
      <ug-format-date
        hour="numeric"
        minute="numeric"
        hour-format="24"
      ></ug-format-date>`
};

export const Localization: Story = {
  // Story-specific parameters
  parameters: {
    docs: {
      description: {
        story: `Use the <code>lang</code> attribute to set the date/time formatting locale.`
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  },
  // Component rendering logic
  render: () =>
    html`English: <ug-format-date lang="en"></ug-format-date><br />
      French: <ug-format-date lang="fr"></ug-format-date><br />
      Korean: <ug-format-date lang="ko"></ug-format-date>`
};
