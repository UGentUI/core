import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/tooltip';
import '/lib/components/button';
import '/lib/components/avatar';
import { action } from '@storybook/addon-actions';

// Utility function to remove default attributes
const removeDefaultAttributes = (code: string): string => {
  return code
    .replace(
      /\s*(placement="top"|distance="8"|skidding="0"|trigger="hover")/g,
      ''
    )
    .replace(/\s*(hoist="")/g, ' hoist');
};

const meta: Meta = {
  title: 'Components/Tooltip',
  component: 'ug-tooltip',
  parameters: {
    docs: {
      subtitle:
        'Tooltips display additional information based on a specific action.',

      description: {
        component:
          "A tooltip's target is its <em>first child element</em>, so you should only wrap one element inside of the tooltip. If you need the tooltip to show up for multiple elements, nest them inside a container first. Tooltips use <code>display: contents</code> so they won't interfere with how elements are positioned in a flex or grid layout."
      },

      source: {
        format: true,
        transform: (code: string) => removeDefaultAttributes(code)
      }
    }
  },

  argTypes: {
    // Properties
    content: {
      control: 'text',
      description:
        "The tooltip's content. If you need to display HTML, use the <code>content</code> slot instead.",

      table: {
        category: 'Properties',
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: ''
        }
      }
    },

    placement: {
      control: 'select',
      description:
        'The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip inside of the viewport.',
      options: [
        'top-start',
        'top',
        'top-end',
        'left-start',
        'right-start',
        'left',
        'right',
        'left-end',
        'right-end',
        'bottom-start',
        'bottom',
        'right'
      ],
      table: {
        category: 'Properties',
        defaultValue: {
          summary: 'top'
        },
        type: {
          summary:
            "'top' | 'top-start' | 'top-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start'"
        }
      }
    },

    disabled: {
      control: 'boolean',
      description:
        "Disables the tooltip so it won't show when triggered.<br>`reflects: true`",

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

    distance: {
      control: 'number',
      description:
        'The distance in pixels from which to offset the tooltip away from its target.',

      table: {
        category: 'Properties',
        defaultValue: {
          summary: '8'
        },
        type: {
          summary: 'number'
        }
      }
    },

    trigger: {
      control: 'select',
      description:
        'Controls how the tooltip is activated. Possible options include <code>click</code>, <code>hover</code>, <code>focus</code>, and <code>manual</code>. Multiple options can be passed by separating them with a space. When manual is used, the tooltip must be activated programmatically.',
      options: ['click', 'hover', 'focus', 'manual'],
      table: {
        category: 'Properties',
        type: {
          summary: "'click' | 'hover' | 'focus' | 'manual'"
        },
        defaultValue: {
          summary: 'hover'
        }
      }
    },

    open: {
      control: 'boolean',
      description:
        'Indicates whether or not the tooltip is open. You can use this in lieu of the show/hide methods. <br>`reflects: true`',

      table: {
        category: 'Properties',
        defaultValue: {
          summary: 'false'
        },
        type: {
          summary: 'boolean'
        }
      }
    },

    skidding: {
      control: 'number',
      description:
        'The distance in pixels from which to offset the tooltip along its target.',
      table: {
        category: 'Properties',
        defaultValue: {
          summary: '0'
        },
        type: {
          summary: 'number'
        }
      }
    },

    hoist: {
      control: 'boolean',
      description:
        'Enable this option to prevent the tooltip from being clipped when the component is placed inside a container with <code>overflow: auto|hidden|scroll</code>. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.',

      table: {
        category: 'Properties',
        defaultValue: {
          summary: 'true'
        },
        type: {
          summary: 'boolean'
        }
      }
    },

    updateComplete: {
      table: {
        category: 'Properties',
        disable: true
      },
      description:
        'A read-only promise that resolves when the component has finished updating. (Non-configurable property.)'
    },

    //Slots
    defaultSlot: {
      name: '(default)',
      control: 'text',
      description:
        'The tooltip’s target element. Avoid slotting in more than one element, as subsequent ones will be ignored.',
      table: {
        type: { summary: 'HTML' },
        category: 'slots',
        defaultValue: { summary: undefined }
      }
    },
    contentSlot: {
      name: 'content',
      control: 'check',
      description:
        'The content to render in the tooltip. Alternatively, you can use the <code>content</code> attribute.',
      table: {
        type: { summary: 'HTML' },
        category: 'slots',
        defaultValue: { summary: undefined }
      }
    },

    // Event handling
    ugShow: {
      name: 'ug-show',
      action: 'ug-show',
      description: 'Emitted when the tooltip begins to show.',
      table: {
        category: 'Events',
        type: { summary: undefined },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    ugAfterShow: {
      name: 'ug-after-show',
      action: 'ug-after-show',
      description:
        'Emitted after the tooltip has shown and all animations are complete.',
      table: {
        category: 'Events',
        type: { summary: undefined },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    ugHide: {
      name: 'ug-hide',
      action: 'ug-hide',
      description: 'Emitted when the tooltip begins to hide.',
      table: {
        category: 'Events',
        type: { summary: undefined },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    ugAfterHide: {
      name: 'ug-after-hide',
      action: 'ug-after-hide',
      description:
        'Emitted after the tooltip has hidden and all animations are complete.',
      table: {
        category: 'Events',
        type: { summary: undefined },
        defaultValue: { summary: undefined }
      },
      control: false
    },

    // Methods
    show: {
      name: 'show()',
      description: 'Shows the tooltip.',
      table: {
        category: 'Methods',
        type: { summary: undefined },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    hide: {
      name: 'hide()',
      description: 'Hides the tooltip.',
      table: {
        category: 'Methods',
        type: { summary: undefined },
        defaultValue: { summary: undefined }
      },
      control: false
    }
  }
};

export default meta;

type Story = StoryObj;

export const Tooltip: Story = {
  args: {
    content: 'This is a tooltip',
    placement: 'top',
    disabled: false,
    distance: 8,
    open: false,
    skidding: 0,
    trigger: 'hover',
    hoist: true
  },

  render: (args) => {
    return html`<ug-tooltip
      content="${args.content}"
      placement="${args.placement}"
      ?disabled="${args.disabled}"
      ?open="${args.open}"
      distance="${args.distance}"
      skidding="${args.skidding}"
      trigger="${args.trigger}"
      ?hoist="${args.hoist}"
      @ug-Show="${action('ug-Show')}"
      @ug-AfterShow="${action('ug-AfterShow')}"
      @ug-Hide="${action('ug-Hide')}"
      @ug-AfterHide="${action('ug-AfterHide')}"
    >
      <ug-button>Hover Me</ug-button>
    </ug-tooltip>`;
  },
  parameters: {
    docs: {
      description: {
        story: `A default tooltip`
      },
      source: {
        format: true
      }
    }
  }
};

export const Placement: Story = {
  ...Tooltip,
  args: {
    ...Tooltip.args,
    trigger: 'click',
    open: true
  },
  parameters: {
    docs: {
      description: {
        story: `Use the <code>placement</code> attribute to change a tooltip's position.`
      },
      source: { format: true }
    },
    controls: { disable: true }
  },
  render: () => html`
    <div class="tooltip-placement-example">
      <div class="tooltip-placement-example-row">
        <ug-tooltip content="top-start" placement="top-start" hoist>
          <ug-button></ug-button>
        </ug-tooltip>

        <ug-tooltip content="top" placement="top" hoist>
          <ug-button></ug-button>
        </ug-tooltip>

        <ug-tooltip content="top-end" placement="top-end" hoist>
          <ug-button></ug-button>
        </ug-tooltip>
      </div>

      <div class="tooltip-placement-example-row">
        <ug-tooltip content="left-start" placement="left-start" hoist>
          <ug-button></ug-button>
        </ug-tooltip>

        <ug-tooltip content="right-start" placement="right-start" hoist>
          <ug-button></ug-button>
        </ug-tooltip>
      </div>

      <div class="tooltip-placement-example-row">
        <ug-tooltip content="left" placement="left" hoist>
          <ug-button></ug-button>
        </ug-tooltip>

        <ug-tooltip content="right" placement="right" hoist>
          <ug-button></ug-button>
        </ug-tooltip>
      </div>

      <div class="tooltip-placement-example-row">
        <ug-tooltip content="left-end" placement="left-end" hoist>
          <ug-button></ug-button>
        </ug-tooltip>

        <ug-tooltip content="right-end" placement="right-end" hoist>
          <ug-button></ug-button>
        </ug-tooltip>
      </div>

      <div class="tooltip-placement-example-row">
        <ug-tooltip content="bottom-start" placement="bottom-start" hoist>
          <ug-button></ug-button>
        </ug-tooltip>

        <ug-tooltip content="bottom" placement="bottom" hoist>
          <ug-button></ug-button>
        </ug-tooltip>

        <ug-tooltip content="bottom-end" placement="bottom-end" hoist>
          <ug-button></ug-button>
        </ug-tooltip>
      </div>
    </div>

    <style>
      .tooltip-placement-example {
        width: 500px;
        min-width: 500px;
        margin: auto;
        margin: 5rem;
        text-align: center;
      }

      .tooltip-placement-example-row:after {
        content: '';
        display: table;
        clear: both;
      }

      .tooltip-placement-example ug-button {
        float: left;
        width: 2.5rem;
        margin-right: 0.25rem;
        margin-bottom: 0.25rem;
      }

      .tooltip-placement-example-row:nth-child(1)
        ug-tooltip:first-child
        ug-button,
      .tooltip-placement-example-row:nth-child(5)
        ug-tooltip:first-child
        ug-button {
        margin-left: calc(40px + 0.25rem);
      }

      .tooltip-placement-example-row:nth-child(2)
        ug-tooltip:nth-child(2)
        ug-button,
      .tooltip-placement-example-row:nth-child(3)
        ug-tooltip:nth-child(2)
        ug-button,
      .tooltip-placement-example-row:nth-child(4)
        ug-tooltip:nth-child(2)
        ug-button {
        margin-left: calc((40px * 3) + (0.25rem * 3));
      }
    </style>
  `
};

export const ManualTrigger: Story = {
  ...Tooltip,
  args: {
    ...Tooltip.args
  },
  parameters: {
    docs: {
      description: {
        story: `Tooltips can be controlled programmatically by setting the trigger attribute to manual. Use the <code>open</code> attribute to control when the tooltip is shown.`
      },
      source: { format: true }
    },
    controls: { disable: true }
  },
  render: () => {
    return html`
      <ug-button style="margin-right: 4rem;">Toggle Manually</ug-button>

      <ug-tooltip
        content="This is an avatar"
        trigger="manual"
        class="manual-tooltip"
        hoist
      >
        <ug-avatar label="User"></ug-avatar>
      </ug-tooltip>

      <script>
        const tooltip = document.querySelector('.manual-tooltip');
        const toggle = tooltip.previousElementSibling;

        toggle.addEventListener('click', () => (tooltip.open = !tooltip.open));
      </script>
    `;
  }
};

export const Disabled: Story = {
  ...Tooltip,
  args: {
    ...Tooltip.args,
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: `Disables the tooltip so it won’t show when triggered.`
      },
      source: {
        format: true
      }
    }
  }
};

export const TriggeredByClick: Story = {
  ...Tooltip,
  args: {
    ...Tooltip.args,
    trigger: 'click'
  },
  parameters: {
    docs: {
      description: {
        story: `Set the <code>trigger</code> attribute to <code>click</code> to toggle the tooltip on click instead of hover.`
      },
      source: {
        format: true
      }
    }
  }
};

export const OpenByDefault: Story = {
  ...Tooltip,
  args: {
    ...Tooltip.args,
    open: 'true'
  },
  parameters: {
    docs: {
      description: {
        story: `Set the <code>open</code> attribute to <code>true</code> to display the tooltip by default when the page loads.`
      },
      source: {
        format: true
      }
    }
  }
};

export const Hoist: Story = {
  parameters: {
    docs: {
      description: {
        story: `Tooltips will be clipped if they're inside a container that has <code>overflow: auto|hidden|scroll</code>. The <code>hoist</code> attribute forces the tooltip to use a fixed positioning strategy, allowing it to break out of the container. In this case, the tooltip will be positioned relative to its containing block, which is usually the viewport unless an ancestor uses a <code>transform</code>, <code>perspective</code>, or <code>filter</code>.`
      },
      source: { format: true }
    },
    controls: { disable: true }
  },
  render: () => html`
    <div class="tooltip-hoist">
      <ug-tooltip content="This is a tooltip">
        <ug-button>No Hoist</ug-button>
      </ug-tooltip>

      <ug-tooltip content="This is a tooltip" hoist>
        <ug-button>Hoist</ug-button>
      </ug-tooltip>
    </div>

    <style>
      .tooltip-hoist {
        position: relative;
        border: solid 2px var(--ug-panel-border-color);
        overflow: hidden;
        padding: var(--ug-spacing-medium);
      }
    </style>
  `
};

export const HTMLInTooltips: Story = {
  ...Tooltip,
  args: {
    ...Tooltip.args
  },
  parameters: {
    docs: {
      description: {
        story: `Use the <code>content</code> slot to create tooltips with HTML content. Tooltips are designed only for text and presentational elements. Avoid placing interactive content, such as buttons, links, and form controls, in a tooltip.`
      },
      source: { format: true },
      controls: { disable: true }
    }
  },
  render: () => html`
    <ug-tooltip hoist>
      <div slot="content">
        I'm not <strong>just</strong> a tooltip, I'm a <em>tooltip</em> with
        HTML!
      </div>
      <ug-button>Hover me</ug-button>
    </ug-tooltip>
  `
};

export const TooltipWithEvents: Story = {
  ...Tooltip,
  tags: ['!autodocs'],
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `This story demonstrates how the Tooltip handles events like <code>ug-show</code> and <code>ug-hide</code>".`
      },
      source: { format: true }
    }
  },
  render: () =>
    html`<ug-tooltip
      @ug-show="${action('ug-show')}"
      @ug-after-show="${action('ug-after-show')}"
      @ug-hide="${action('ug-hide')}"
      @ug-after-hide="${action('ug-after-hide')}"
      content="This is a tooltip"
      hoist
    >
      <ug-button>Hover me</ug-button>
    </ug-tooltip>`
};
