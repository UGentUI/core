import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/rating';
import '/lib/components/icon';
import { ifDefined } from 'lit/directives/if-defined.js';

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
            .replace(/\s*(label=""|value="3"|max="5"|precision="1")/g, '')
            .replace(/\s* readonly=""/g, ' readonly')
            .replace(/\s* disabled=""/g, ' disabled');
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
  args: {
    label: 'Rating',
    value: 3,
    max: 5,
    precision: 1,
    readonly: false,
    disabled: false
  },
  render: (args) => {
    return html`<ug-rating
      label=${args.label}
      value=${ifDefined(args.value)}
      max=${ifDefined(args.max)}
      precision=${ifDefined(args.precision)}
      ?readonly=${args.readonly}
      ?disabled=${args.disabled}
    ></ug-rating>`;
  }
};

export const Label: Story = {
  ...Rating,
  args: {
    ...Rating.args,
    label: 'User Rating'
  },
  parameters: {
    docs: {
      description: {
        story: `Ratings are commonly identified contextually, so labels aren’t displayed. However, you should always provide one for assistive devices using the <code>label</code> attribute.`
      }
    },
    controls: { disable: true }
  }
};

export const MaximumValue: Story = {
  ...Rating,
  args: {
    ...Rating.args,
    max: 3
  },
  parameters: {
    docs: {
      description: {
        story: `Ratings are 0–5 by default. To change the maximum possible value, use the <code>max</code> attribute.`
      }
    },
    controls: { disable: true }
  }
};

export const Precision: Story = {
  ...Rating,
  args: {
    ...Rating.args,
    precision: '0.5',
    value: '2.5'
  },
  parameters: {
    docs: {
      description: {
        story: `Use the <code>precision</code> attribute to let users select fractional ratings.`
      }
    },
    controls: { disable: true }
  }
};

export const Readonly: Story = {
  ...Rating,
  args: {
    ...Rating.args,
    readonly: true,
    value: 3
  },
  parameters: {
    docs: {
      description: {
        story: `Use the <code>readonly</code> attribute to display a rating that users can’t change.`
      }
    },
    controls: { disable: true }
  }
};

export const Disabled: Story = {
  ...Rating,
  args: {
    ...Rating.args,
    disabled: true,
    value: 3
  },
  parameters: {
    docs: {
      description: {
        story: `Use the <code>disable</code> attribute to disable the rating.`
      }
    },
    controls: { disable: true }
  }
};

export const DetectingHover: Story = {
  parameters: {
    docs: {
      description: {
        story: `Use the <code>ug-hover</code> event to detect when the user hovers over (or touch and drag) the rating. This lets you hook into values as the user interacts with the rating, but before they select a value.

The event has a payload with <code>phase</code> and <code>value</code> properties. The <code>phase</code> property tells when hovering starts, moves to a new value, and ends. The <code>value</code> property tells what the rating’s value would be if the user were to commit to the hovered value.`
      }
    },
    controls: { disable: true }
  },
  render: () => {
    return html`<div class="detect-hover">
        <ug-rating label="Rating"></ug-rating>
        <span></span>
      </div>

      <script>
        () => {
          const rating = document.querySelector('.detect-hover > ug-rating');
          const span = rating.nextElementSibling;
          const terms = [
            'No rating',
            'Terrible',
            'Bad',
            'OK',
            'Good',
            'Excellent'
          ];

          rating.addEventListener('ug-hover', (event) => {
            span.textContent = terms[event.detail.value];

            // Clear feedback when hovering stops
            if (event.detail.phase === 'end') {
              span.textContent = '';
            }
          });
        };
      </script>

      <style>
        .detect-hover span {
          position: relative;
          top: -4px;
          left: 8px;
          border-radius: var(--ug-border-radius-small);
          background: var(--ug-color-neutral-900);
          color: var(--ug-color-neutral-0);
          text-align: center;
          padding: 4px 6px;
        }

        .detect-hover span:empty {
          display: none;
        }
      </style> `;
  }
};

export const CustomIcons: Story = {
  parameters: {
    docs: {
      description: {
        story: `You can provide custom icons by passing a function to the <code>getSymbol</code> property.`
      }
    },
    controls: { disable: true }
  },
  render: () => {
    return html`<ug-rating
        label="Rating"
        class="rating-hearts"
        style="--symbol-color-active: #ff4136;"
      ></ug-rating>

      <script>
        () => {
          const rating = document.querySelector('.rating-hearts');
          rating.getSymbol = () => '<ug-icon name="heart-fill"></ug-icon>';
          rating.requestUpdate();
        };
      </script> `;
  }
};

export const ValueBasedIcons: Story = {
  name: 'Value-based Icons',
  parameters: {
    docs: {
      description: {
        story: `You can also use the <code>getSymbol</code> property to render different icons based on value.`
      }
    },
    controls: { disable: true }
  },
  render: () => {
    return html`
      <ug-rating label="Rating" class="rating-emojis"></ug-rating>
      <script>
        () => {
          const rating = document.querySelector('.rating-emojis');

          rating.getSymbol = (value) => {
            const icons = [
              'emoji-angry',
              'emoji-frown',
              'emoji-expressionless',
              'emoji-smile',
              'emoji-laughing'
            ];
            const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
            return \`<ug-icon name="\${icons[value - 1]}" style="color: \${colors[value - 1]};"></ug-icon>\`;
          };
          rating.requestUpdate();
        };
      </script>
    `;
  }
};
