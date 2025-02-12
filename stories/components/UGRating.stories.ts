import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/rating';
import '/lib/components/icon';

const meta: Meta = {
  title: 'Components/Rating',
  component: 'ug-rating',
  parameters: {
    docs: {
      subtitle:
        'Ratings give users a way to quickly view and provide feedback.',
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
    label: {
      control: 'text',
      description: 'A label that describes the rating to assistive devices.',
      table: {
        category: 'Properties',
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: "''"
        }
      }
    },
    value: {
      control: { type: 'number', min: 0 },
      description: 'The current rating.',
      table: {
        category: 'Properties',
        type: {
          summary: 'number'
        },
        defaultValue: {
          summary: '0'
        }
      }
    },
    max: {
      control: { type: 'number', min: 1 },
      description: 'The highest rating to show.',
      table: {
        category: 'Properties',
        type: {
          summary: 'number'
        },
        defaultValue: {
          summary: '5'
        }
      }
    },
    precision: {
      control: { type: 'number', step: 0.1, min: 0.1 },
      description:
        'The precision at which the rating will increase and decrease.  For example, to allow half-star ratings, set this attribute to <code>0.5</code>.',
      table: {
        category: 'Properties',
        type: {
          summary: 'number'
        },
        defaultValue: {
          summary: '1'
        }
      }
    },
    readonly: {
      control: 'boolean',
      description: 'Makes the rating readonly.<br>`reflects: true`',
      table: {
        category: 'Properties',
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the rating.<br>`reflects: true`',
      table: {
        category: 'Properties',
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    getSymbol: {
      description:
        'A function that customizes the symbol to be rendered. The first and only argument is the rating’s current value. The function should return a string containing trusted HTML of the symbol to render at the specified value. Works well with <code><ug-icon></code> elements.',
      control: false,
      table: {
        category: 'Properties',
        type: {
          summary: '(value: number) => string'
        },
        defaultValue: {
          summary: undefined
        }
      }
    },
    updateComplete: {
      description:
        'A read-only promise that resolves when the component has finished updating.',
      control: false,
      table: {
        category: 'Properties',
        type: {
          summary: 'Promise<void>'
        },
        defaultValue: {
          summary: undefined
        }
      }
    },
    // Events
    ugChange: {
      name: 'ug-change',
      action: 'ug-change',
      description: "Emitted when the rating's value changes.",
      control: false,

      table: {
        category: 'Events',
        type: {
          summary: 'CustomEvent'
        },
        defaultValue: {
          // defaultValue.summary should be undefined to hide the - in the auto-docs table
          summary: undefined
        }
      }
    },
    ugHover: {
      name: 'ug-hover',
      action: 'ug-hover',
      description:
        'Emitted when the user hovers over a value. The `phase` property indicates when hovering starts, moves to a new value, or ends. The `value` property tells what the rating’s value would be if the user were to commit to the hovered value.',
      control: false,

      table: {
        category: 'Events',
        type: {
          summary: "{ phase: 'start' | 'move' | 'end', value: number }"
        },
        defaultValue: {
          // defaultValue.summary should be undefined to hide the - in the auto-docs table
          summary: undefined
        }
      }
    },

    // Methods
    focus: {
      name: 'focus()',
      description: 'Sets focus on the rating.',
      control: false,

      table: {
        category: 'Methods',
        type: {
          // Add the method signature
          summary: '(options: FocusOptions) => void'
        },
        defaultValue: {
          // defaultValue.summary should be undefined to hide the - in the auto-docs table
          summary: undefined
        }
      }
    },
    blur: {
      name: 'blur()',
      description: 'Removes focus from the rating.',
      control: false,

      table: {
        category: 'Methods',
        type: {
          // Add the method signature
          summary: '() => void'
        },
        defaultValue: {
          // defaultValue.summary should be undefined to hide the - in the auto-docs table
          summary: undefined
        }
      }
    }
  }
};

export default meta;

type Story = StoryObj;

export const Rating: Story = {
  render: () => {
    return html`<ug-rating label="Rating"></ug-rating>`;
  }
};
