import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/format-bytes';

const meta: Meta = {
  title: 'Components/Format Bytes',
  component: 'format-bytes',
  parameters: {
    docs: {
      subtitle: 'Brief description of the component',
      source: {
        format: true,
        transform: (code: string) => {
          // Remove empty/default attributes and replace boolean attributes from the source code display
          return code.replace(/\s*(unit="byte"|display="short"|lang="")/g, '');
        }
      },
      importSection: true // Enables the import section
    }
  },
  argTypes: {
    value: {
      description: 'The number to format in bytes.',
      control: 'number',
      table: {
        category: 'Properties',
        type: { summary: 'number' },
        defaultValue: { summary: '0' }
      }
    },
    unit: {
      description: 'The type of unit to display.',
      control: 'select',
      options: ['byte', 'bit'],
      table: {
        category: 'Properties',
        type: { summary: "'byte' | 'bit'" },
        defaultValue: { summary: "'byte'" }
      }
    },
    display: {
      description:
        "Determines how to display the result, e.g. '100 bytes', '100 b', or '100b'.",
      control: 'select',
      options: ['long', 'short', 'narrow'],
      table: {
        category: 'Properties',
        type: { summary: "'long' | 'short' | 'narrow'" },
        defaultValue: { summary: "'short'" }
      }
    },
    lang: {
      description: `Sets the language to set the number formatting locale. Uses standard language codes like 'en-US' for American English, 'nl-BE' for Belgian Dutch, or 'fr-FR' for French. If not specified, inherits from the closest parent element with a lang attribute, or defaults to the browser's language.`,
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
        defaultValue: {
          summary: undefined
        }
      },
      control: false
    }
  }
};

export default meta;

type Story = StoryObj;

export const FormatBytes: Story = {
  args: {
    value: 1024,
    unit: 'byte',
    display: 'short',
    lang: ''
  },
  render: (args) => {
    return html`The file is
      <ug-format-bytes
        value="${args.value}"
        unit="${args.unit}"
        display="${args.display}"
        lang="${args.lang}"
      ></ug-format-bytes>
      in size`;
  }
};

export const FormattingBytes: Story = {
  // Story-specific parameters
  parameters: {
    docs: {
      description: {
        story:
          'Set the <code>value</code> attribute to a number to get the value in bytes.'
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  },
  render: () => {
    return html`<ug-format-bytes value="12"></ug-format-bytes><br />
      <ug-format-bytes value="1200"></ug-format-bytes><br />
      <ug-format-bytes value="1200000"></ug-format-bytes><br />
      <ug-format-bytes value="1200000000"></ug-format-bytes>`;
  }
};

export const FormattingBits: Story = {
  // Story-specific parameters
  parameters: {
    docs: {
      description: {
        story:
          'To get the value in bits, set the <code>unit</code> attribute to <code>bit</code>.'
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  },
  render: () => {
    return html`<ug-format-bytes value="12" unit="bit"></ug-format-bytes><br />
      <ug-format-bytes value="1200" unit="bit"></ug-format-bytes><br />
      <ug-format-bytes value="1200000" unit="bit"></ug-format-bytes><br />
      <ug-format-bytes value="1200000000" unit="bit"></ug-format-bytes> `;
  }
};

export const Localization: Story = {
  // Story-specific parameters
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
  render: () => {
    return html`<ug-format-bytes value="12" lang="de"></ug-format-bytes><br />
      <ug-format-bytes value="1200" lang="de"></ug-format-bytes><br />
      <ug-format-bytes value="1200000" lang="de"></ug-format-bytes><br />
      <ug-format-bytes value="1200000000" lang="de"></ug-format-bytes> `;
  }
};
