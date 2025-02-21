import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/relative-time';

const meta: Meta = {
  title: 'Components/Relative Time',
  component: 'ug-relative-time',
  parameters: {
    docs: {
      subtitle:
        'Outputs a localized time phrase relative to the current date and time.',
      description: {
        component:
          'Localization is handled by the browser’s [Intl.RelativeTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat) [API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat). No language packs are required. <br>The `date` attribute determines when the date/time is calculated from. It must be a string that [Date.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) can interpret or a [Date object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) set via JavaScript.'
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
        'When <code>auto</code>, values such as "yesterday" and "tomorrow" will be shown when possible. When <code>always</code>, values such as "1 day ago" and "in 1 day" will be shown.',
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
      description: `Sets the language used for relative time formatting. Uses standard language codes like 'en-US' for American English, 'nl-BE' for Belgian Dutch, or 'fr-FR' for French. If not specified, inherits from the closest parent element with a lang attribute, or defaults to the browser's language.`,
      control: 'text',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: undefined }
      }
    }
  }
};

export default meta;

type Story = StoryObj;

export const RelativeTime: Story = {
  args: {
    date: new Date(new Date().getTime() - 3600000), // One hour ago (1000ms * 60s * 60m)
    format: 'long',
    numeric: 'auto',
    lang: 'en',
    sync: false
  },
  render: (args) => {
    const date =
      typeof args.date === 'string' || args.date instanceof Date
        ? new Date(args.date)
        : new Date(Number(args.date));

    return html` <ug-relative-time
      date="${date.toISOString()}"
      format="${args.format}"
      numeric="${args.numeric}"
      lang="${args.lang}"
      ?sync="${args.sync}"
    ></ug-relative-time>`;
  }
};

export const KeepingTimeInSync: Story = {
  parameters: {
    docs: {
      description: {
        story: `Use the <code>sync</code> attribute to update the displayed value automatically as time passes.`
      }
    },
    controls: { disable: true }
  },
  render: () => {
    return html`<div class="relative-time-sync">
        <ug-relative-time sync></ug-relative-time>
      </div>

      <script>
        (() => {
          const container = document.querySelector('.relative-time-sync');
          const relativeTime = container.querySelector('ug-relative-time');

          relativeTime.date = new Date(new Date().getTime() - 60000);
        })();
      </script>`;
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
        story:
          'You can change how the time is displayed using the `format` attribute. Note that some locales may display the same values for narrow and short formats.'
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
        lang="en-US"
      ></ug-relative-time
      ><br />
      Dutch:
      <ug-relative-time
        date="${formattedDate}"
        format="${args.format}"
        numeric="${args.numeric}"
        lang="nl-BE"
      ></ug-relative-time
      ><br />
      French:
      <ug-relative-time
        date="${formattedDate}"
        format="${args.format}"
        numeric="${args.numeric}"
        lang="fr-FR"
      ></ug-relative-time
      ><br />
      German:
      <ug-relative-time
        date="${formattedDate}"
        format="${args.format}"
        numeric="${args.numeric}"
        lang="de-DE"
      ></ug-relative-time
      ><br />
      Korean:
      <ug-relative-time
        date="${formattedDate}"
        format="${args.format}"
        numeric="${args.numeric}"
        lang="ko-KR"
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
