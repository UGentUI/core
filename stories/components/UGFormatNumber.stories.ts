import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/format-number';
import { ifDefined } from 'lit/directives/if-defined.js';

const meta: Meta = {
  title: 'Components/FormatNumber',
  component: 'ug-format-number',
  parameters: {
    docs: {
      subtitle: 'Formats a number using the specified locale and options.',
      description: {
        component:
          'Localization is handled by the browser’s <code>[Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)</code> [API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat). No language packs are required.'
      },
      source: {
        format: true,
        transform: (code: string) => {
          // Remove empty/default attributes and replace boolean attributes from the source code display
          return code
            .replace(/\s(default-attribute="value")/g, '')
            .replace(/\s* attribute=""/g, ' attribute');
        }
      }
    }
  },
  argTypes: {
    value: {
      description: 'The number to format.',
      control: 'number',
      table: {
        category: 'Properties',
        type: { summary: 'number' },
        defaultValue: { summary: '0' }
      }
    },
    type: {
      description: 'The formatting style to use.',
      control: 'select',
      options: ['currency', 'decimal', 'percent'],
      table: {
        category: 'Properties',
        type: { summary: "'currency' | 'decimal' | 'percent'" },
        defaultValue: { summary: "'decimal'" }
      }
    },
    noGrouping: {
      name: 'no-grouping',
      description: 'Turns off grouping separators.',
      control: 'boolean',
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    currency: {
      description:
        'The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code to use when formatting.',
      control: 'text',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: "'USD'" }
      }
    },
    currencyDisplay: {
      name: 'currency-display',
      description: 'How to display the currency.',
      control: 'select',
      options: ['symbol', 'narrowSymbol', 'code', 'name'],
      table: {
        category: 'Properties',
        type: { summary: "'symbol' | 'narrowSymbol' | 'code' | 'name'" },
        defaultValue: { summary: "'symbol'" }
      }
    },
    minimumIntegerDigits: {
      name: 'minimum-integer-digits',
      description:
        'The minimum number of integer digits to use. Possible values are 1–21.',
      control: { type: 'number', min: 1, max: 21 },
      table: {
        category: 'Properties',
        type: { summary: 'number' },
        defaultValue: { summary: undefined }
      }
    },
    minimumFractionDigits: {
      name: 'minimum-fraction-digits',
      description:
        'The minimum number of fraction digits to use. Possible values are 0–20.',
      control: { type: 'number', min: 0, max: 20 },
      table: {
        category: 'Properties',
        type: { summary: 'number' },
        defaultValue: { summary: undefined }
      }
    },
    maximumFractionDigits: {
      name: 'maximum-fraction-digits',
      description:
        'The maximum number of fraction digits to use. Possible values are 0–20.',
      control: { type: 'number', min: 0, max: 20 },
      table: {
        category: 'Properties',
        type: { summary: 'number' },
        defaultValue: { summary: undefined }
      }
    },
    minimumSignificantDigits: {
      name: 'minimum-significant-digits',
      description:
        'The minimum number of significant digits to use. Possible values are 1–21.',
      control: { type: 'number', min: 1, max: 21 },
      table: {
        category: 'Properties',
        type: { summary: 'number' },
        defaultValue: { summary: undefined }
      }
    },
    maximumSignificantDigits: {
      name: 'maximum-significant-digits',
      description:
        'The maximum number of significant digits to use. Possible values are 1–21.',
      control: { type: 'number', min: 1, max: 21 },
      table: {
        category: 'Properties',
        type: { summary: 'number' },
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

export const FormatNumber: Story = {
  args: {
    value: 12345.67,
    type: 'decimal',
    noGrouping: false,
    currency: 'USD',
    currencyDisplay: 'symbol'
  },
  render: (args) => {
    return html`<ug-format-number
      value="${args.value}"
      lang="${ifDefined(args.lang)}"
      type="${ifDefined(args.type)}"
      ?no-grouping="${args.noGrouping}"
      currency="${ifDefined(args.currency)}"
      currency-display="${ifDefined(args.currencyDisplay)}"
      minimum-integer-digits="${ifDefined(args.minimumIntegerDigits)}"
      minimum-fraction-digits="${ifDefined(args.minimumFractionDigits)}"
      maximum-fraction-digits="${ifDefined(args.maximumFractionDigits)}"
      minimum-significant-digits="${ifDefined(args.minimumSignificantDigits)}"
      maximum-significant-digits="${ifDefined(args.maximumSignificantDigits)}"
    ></ug-format-number>`;
  }
};

export const Percentages: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'To get the value as a percent, set the <code>type</code> attribute to percent.'
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  },
  render: () =>
    html`<ug-format-number type="percent" value="0"></ug-format-number><br />
      <ug-format-number type="percent" value="0.25"></ug-format-number><br />
      <ug-format-number type="percent" value="0.50"></ug-format-number><br />
      <ug-format-number type="percent" value="0.75"></ug-format-number><br />
      <ug-format-number type="percent" value="1"></ug-format-number> `
};

export const Localization: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use the <code>lang</code> attribute to set the number formatting locale.'
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  },
  render: () =>
    html`English:
      <ug-format-number
        value="2000"
        lang="en"
        minimum-fraction-digits="2"
      ></ug-format-number
      ><br />
      German:
      <ug-format-number
        value="2000"
        lang="de"
        minimum-fraction-digits="2"
      ></ug-format-number
      ><br />
      Korean:
      <ug-format-number
        value="2000"
        lang="ko"
        minimum-fraction-digits="2"
      ></ug-format-number> `
};

export const Currency: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'To format a number as a monetary value, set the <code>type</code> attribute to <code>currency</code> and set the <code>currency</code> attribute to the desired ISO 4217 currency code. You should also specify <code>lang</code> to ensure the the number is formatted correctly for the target locale.'
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  },
  render: () =>
    html`<ug-format-number
        type="currency"
        currency="USD"
        value="2000"
        lang="en-US"
      ></ug-format-number
      ><br />
      <ug-format-number
        type="currency"
        currency="GBP"
        value="2000"
        lang="en-GB"
      ></ug-format-number
      ><br />
      <ug-format-number
        type="currency"
        currency="EUR"
        value="2000"
        lang="de"
      ></ug-format-number
      ><br />
      <ug-format-number
        type="currency"
        currency="KRW"
        value="2000"
        lang="ko"
      ></ug-format-number
      ><br />
      <ug-format-number
        type="currency"
        currency="CNY"
        value="2000"
        lang="zh-cn"
      ></ug-format-number> `
};
