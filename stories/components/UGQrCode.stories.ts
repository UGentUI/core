import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/qr-code';

// Utility function to remove default attributes
const removeDefaultAttributes = (code: string): string => {
  return code.replace(
    /\s*(size="128"|fill="black"|background="white"|error-correction="H")/g,
    ''
  );
};

const meta: Meta = {
  title: 'Components/QrCode',
  component: 'ug-qr-code',
  parameters: {
    docs: {
      subtitle:
        'QR codes are useful for providing small pieces of information to users who can quickly scan them with a smartphone. Most smartphones have built-in QR code scanners, so simply pointing the camera at a QR code will decode it and allow the user to visit a website, dial a phone number, read a message, etc.',
      source: {
        format: true,
        transform: (code: string) => removeDefaultAttributes(code)
      }
    }
  },
  argTypes: {
    // Attributes (set in HTML)
    value: {
      control: 'text',
      description: 'The QR code’s value.',
      table: { category: 'attributes', defaultValue: { summary: '' } }
    },
    label: {
      control: 'text',
      description:
        'The label for assistive devices to announce. If unspecified, the value will be used instead.',
      table: { category: 'attributes', defaultValue: { summary: '' } }
    },
    size: {
      control: 'number',
      description: 'The size of the QR code, in pixels.',
      table: { category: 'attributes', defaultValue: { summary: '128' } }
    },
    fill: {
      control: 'text',
      description:
        'The fill color. This can be any valid CSS color, but not a CSS custom property.',
      table: { category: 'attributes', defaultValue: { summary: 'black' } }
    },
    background: {
      control: 'text',
      description:
        'The background color. This can be any valid CSS color or <code>transparent</code>. It cannot be a CSS custom property.',
      table: { category: 'attributes', defaultValue: { summary: 'white' } }
    },
    errorCorrection: {
      name: 'error-correction',
      control: 'select',
      options: ['L', 'M', 'Q', 'H'],
      description: 'The level of error correction to use.',
      table: { category: 'attributes', defaultValue: { summary: 'H' } }
    }
  }
};

export default meta;

type Story = StoryObj;

export const QrCode: Story = {
  args: {
    value: 'https://ugent.be/',
    label: 'QR code for UGent',
    size: 128,
    fill: 'black',
    background: 'white',
    errorCorrection: 'H'
  },
  parameters: {
    docs: {
      disable: false,
      description: {
        story: `A default QR Code.`
      }
    }
  },
  render: (args) => {
    return html`<ug-qr-code
      value="${args.value}"
      label="${args.label}"
      size="${args.size}"
      fill="${args.fill}"
      background="${args.background}"
      error-correction="${args.errorCorrection}"
    >
    </ug-qr-code>`;
  }
};

//Customizing Colors
export const Colors: Story = {
  args: {
    ...QrCode.args,
    fill: 'royalblue',
    background: 'aliceblue'
  },
  parameters: {
    docs: {
      disable: false,
      description: {
        story: `Use the <code>fill</code> and <code>background</code> attributes to modify the QR code’s colors. You should always ensure good contrast for optimal compatibility with QR code scanners.`
      }
    }
  },
  render: (args) => {
    return html`<ug-qr-code
      value="${args.value}"
      label="${args.label}"
      size="${args.size}"
      fill="${args.fill}"
      background="${args.background}"
      error-correction="${args.errorCorrection}"
    >
    </ug-qr-code>`;
  }
};

//Custom Size
export const CustomSize: Story = {
  args: {
    ...QrCode.args,
    size: 64
  },
  parameters: {
    docs: {
      disable: false,
      description: {
        story: `Use the <code>size</code> attribute to change the size of the QR code.`
      }
    }
  },
  render: (args) => {
    return html`<ug-qr-code
      value="${args.value}"
      label="${args.label}"
      size="${args.size}"
      fill="${args.fill}"
      background="${args.background}"
      error-correction="${args.errorCorrection}"
    >
    </ug-qr-code>`;
  }
};

//Error Correction
export const ErrorCorrection: Story = {
  args: {
    ...QrCode.args
  },
  parameters: {
    docs: {
      disable: false,
      description: {
        story: `QR codes can be rendered with various levels of <a href="https://www.qrcode.com/en/about/error_correction.html">error correction</a> that can be set using the <code>error-correction</code> attribute. This example generates four codes with the same value using different error correction levels.`
      }
    }
  },
  render: (args) => {
    return html`<div class="qr-error-correction">
        <ug-qr-code value="${args.value}" error-correction="L"></ug-qr-code>
        <ug-qr-code value="${args.value}" error-correction="M"></ug-qr-code>
        <ug-qr-code value="${args.value}" error-correction="Q"></ug-qr-code>
        <ug-qr-code value="${args.value}" error-correction="H"></ug-qr-code>
      </div>

      <style>
        .qr-error-correction {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
      </style>`;
  }
};
