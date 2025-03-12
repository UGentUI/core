import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/radio';
import '/lib/components/radio-group';
import { action } from '@storybook/addon-actions';
import { userEvent, within } from '@storybook/test';

const meta: Meta = {
  title: 'Components/Radio',
  component: 'radio',
  parameters: {
    docs: {
      subtitle: 'Radios allow the user to select a single option from a group.',
      description: {
        component: `Radios are designed to be used with [radio groups](./?path=/docs/components-radiogroup--docs).`
      },
      source: {
        format: true,
        transform: (code: string) =>
          code
            .replace(/\s*(value="")/g, '')
            .replace(/\s* disabled=""/g, ' disabled')
      },
      importSection: true // Enables the import section
    }
  },

  argTypes: {
    value: {
      name: 'value',
      description:
        'The radio’s value. When selected, the radio group will receive this value.',
      type: { name: 'string' },
      table: {
        category: 'attributes',
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      control: 'text'
    },
    disabled: {
      name: 'disabled',
      description: 'Disables the radio.',
      type: { name: 'boolean' },
      table: {
        category: 'attributes',
        type: {
          summary: 'boolean',
          detail:
            'This is a reflected property that syncs with the disabled attribute'
        },
        defaultValue: { summary: 'false' }
      },
      control: 'boolean'
    },
    defaultSlot: {
      name: '(default)',
      description: 'The radio’s label.',
      type: { name: 'string' },
      table: {
        category: 'slots',
        type: { summary: 'slot' },
        defaultValue: { summary: '-' }
      },
      control: 'text'
    }
  }
};

export default meta;

type Story = StoryObj;

export const Radio: Story = {
  args: {
    value: '',
    disabled: false,
    defaultSlot: 'Option'
  },
  parameters: {
    docs: {
      description: {
        story: 'A default radio.'
      }
    }
  },
  render: (args) => {
    return html` <ug-radio value=${args.value} ?disabled=${args.disabled}
      >${args.defaultSlot}</ug-radio
    >`;
  }
};

// export const InitialValue: Story = {
//   parameters: {
//     controls: { disable: true },
//     docs: {
//       description: {
//         story: `To set the initial value and checked state, use the <code>value</code> attribute on the containing radio group.`
//       },
//       source: {
//         format: true
//       }
//     }
//   },
//   render: () => {
//     return html`<ug-radio-group label="Select an option" name="a" value="1">
//       <ug-radio value="1">Option 1</ug-radio>
//       <ug-radio value="2">Option 2</ug-radio>
//       <ug-radio value="3">Option 3</ug-radio>
//     </ug-radio-group>`;
//   }
// };

export const Disabled: Story = {
  ...Radio,
  args: {
    ...Radio.args,
    disabled: true
  },
  parameters: {
    controls: {},
    docs: {
      description: {
        story: `Use the <code>disabled</code> attribute to disable a radio.`
      }
    }
  }
};

export const RadioFocusAndBlurEvents: Story = {
  args: {
    value: '1',
    size: 'medium',
    disabled: false,
    defaultSlot: 'Radio'
  },
  tags: ['!autodocs'],
  render: (args) => html`
    <ug-radio
      value=${args.value}
      size=${args.size}
      ?disabled=${args.disabled}
      @ug-focus="${action('ug-focus')}"
      @ug-blur="${action('ug-blur')}"
      data-testid="myRadio"
    >
      Radio Option
    </ug-radio>
  `,
  play: async ({ canvasElement }) => {
    //const radio = within(canvasElement).getByLabelText('Radio');

    //const radio = canvasElement.querySelector('ug-radio');
    const radio = within(canvasElement).getByTestId('myRadio');
    let focusEventTriggered = false;
    let blurEventTriggered = false;

    if (radio != null) {
      // Add listeners for the ug-focus and ug-blur events
      radio.addEventListener(
        'ug-focus',
        () => {
          focusEventTriggered = true;
        },
        { once: true }
      );

      radio.addEventListener(
        'ug-blur',
        () => {
          blurEventTriggered = true;
        },
        { once: true }
      );

      // Simulate focus on the radio button
      await userEvent.click(radio); // Focus

      // Assert that the invalid event was triggered
      if (!focusEventTriggered) {
        throw new Error('The ug-focus event was not triggered.');
      }

      // Simulate blur by moving focus out
      await userEvent.tab(); // Move focus away (to blur)

      radio.blur();

      // Add a small delay to allow selection to complete
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    // Assert that the invalid event was triggered
    if (!blurEventTriggered) {
      throw new Error('The ug-blur event was not triggered.');
    }
  }
};
