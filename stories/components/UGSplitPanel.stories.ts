import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/split-panel';
import { action } from '@storybook/addon-actions';
import { ifDefined } from 'lit/directives/if-defined.js';
import '/lib/components/select';
import '/lib/components/option';
import '/lib/components/icon';

// Utility function to remove default attributes
const removeDefaultAttributes = (code: string): string => {
  return code.replace(/\s*(position="50"|snapThreshold="12")/g, '');
};

const meta: Meta = {
  title: 'Components/SplitPanel',
  component: 'ug-split-panel',
  parameters: {
    docs: {
      subtitle:
        'Split panels display two adjacent panels, allowing the user to reposition them.'
    }
  },
  argTypes: {
    position: {
      name: 'Position',
      description:
        'The current position of the divider from the primary panel’s edge as a percentage 0–100. Defaults to 50% of the container’s initial size.',
      control: { type: 'number', min: 0, max: 100, step: 1 }, // Number input, range from 0 to 100
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '50' }
      }
    },
    positionInPixels: {
      name: 'Position in Pixels',
      description:
        'The current position of the divider from the primary panel’s edge in pixels.',
      control: { type: 'number' }, // Number input for pixel value
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '-' }
      }
    },
    vertical: {
      name: 'Vertical',
      description:
        'Draws the split panel in a vertical orientation with the start and end panels stacked.',
      control: { type: 'boolean' }, // Toggle switch for vertical orientation
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    disabled: {
      name: 'Disabled',
      description:
        'Disables resizing. Note that the position may still change as a result of resizing the host element.',
      control: { type: 'boolean' }, // Toggle switch for disabled state
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    primary: {
      name: 'Primary',
      description:
        'If a primary panel is designated, it will maintain its size and the other panel will grow or shrink as needed when the host element is resized.',
      control: { type: 'select', options: ['start', 'end', undefined] }, // Dropdown with options
      table: {
        type: { summary: "'start' | 'end' | undefined" },
        defaultValue: { summary: '-' }
      }
    },
    snap: {
      name: 'Snap',
      description:
        'One or more space-separated values at which the divider should snap. Values can be in pixels or percentages, e.g. "100px 50%".',
      control: { type: 'text' }, // Input text box for snap points
      table: {
        type: { summary: 'string | undefined' },
        defaultValue: { summary: '-' }
      }
    },
    snapThreshold: {
      name: 'Snap Threshold',
      description:
        'How close the divider must be to a snap point until snapping occurs.',
      control: { type: 'number', min: 0, step: 1 }, // Number input for snap threshold
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '12' }
      }
    },
    updateComplete: {
      name: 'Update Complete',
      description:
        'A read-only promise that resolves when the component has finished updating.',
      control: false, // Read-only, so no control
      table: {
        type: { summary: 'Promise<void>' }
      }
    }
  }
};

export default meta;

type Story = StoryObj;

export const SplitPanel: Story = {
  args: {
    position: 50,
    positionInPixels: undefined,
    vertical: false,
    disabled: false,
    primary: undefined,
    snap: undefined,
    snapThreshold: 12
  },
  render: (args) => {
    return html`<ug-split-panel
      position="${args.position}"
      positionInPixels="${ifDefined(args.positionInPixels)}"
      ?vertical="${args.vertical}"
      ?disabled="${args.disabled}"
      primary="${ifDefined(args.primary)}"
      snap="${ifDefined(args.snap)}"
      snapThreshold="${args.snapThreshold}"
    >
      <div
        slot="start"
        style="height: 200px; background: var(--ug-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
      >
        Start
      </div>
      <div
        slot="end"
        style="height: 200px; background: var(--ug-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
      >
        End
      </div>
    </ug-split-panel>`;
  }
};

export const InitialPosition: Story = {
  ...SplitPanel,
  args: {
    ...SplitPanel.args,
    positionInPixels: '75'
  },
  parameters: {
    docs: {
      description: {
        story: `To set the initial position, use the <code>position</code> attribute. If no position is provided, it will default to 50% of the available space.`
      },
      source: { format: true }
    }
  }
};

export const InitialPositionInPixels: Story = {
  ...SplitPanel,
  args: {
    ...SplitPanel.args,
    positionInPixels: '150'
  },
  parameters: {
    docs: {
      description: {
        story: `To set the initial position, use the <code>position</code> attribute. If no position is provided, it will default to 50% of the available space.`
      },
      source: {
        format: true,
        transform: (code: string) => removeDefaultAttributes(code)
      }
    },
    html: {
      transform: (code: string) => removeDefaultAttributes(code)
    }
  }
};

export const Vertical: Story = {
  ...SplitPanel,
  args: {
    ...SplitPanel.args,
    vertical: true
  },
  parameters: {
    docs: {
      description: {
        story: `Add the <code>vertical</code> attribute to render the split panel in a vertical orientation where the start and end panels are stacked. You also need to set a height when using the vertical orientation.`
      },
      source: {
        format: true,
        transform: (code: string) => removeDefaultAttributes(code)
      }
    },
    html: {
      transform: (code: string) => removeDefaultAttributes(code)
    }
  }
};

export const Snapping: Story = {
  ...SplitPanel,
  args: {
    ...SplitPanel.args,
    snap: '100px 50%'
  },
  parameters: {
    docs: {
      description: {
        story: `To snap panels at specific positions while dragging, add the <code>snap</code> attribute with one or more space-separated values. Values must be in pixels or percentages. For example, to snap the panel at <code>100px</code> and <code>50%</code>, use <code>snap="100px 50%"</code>. You can also customize how close the divider must be before snapping with the snap-threshold attribute.`
      },
      source: {
        format: true,
        transform: (code: string) => removeDefaultAttributes(code)
      }
    },
    html: {
      transform: (code: string) => removeDefaultAttributes(code)
    }
  },
  render: (args, context) => {
    // Call the old render method
    const splitPanel = SplitPanel.render
      ? SplitPanel.render(args, context)
      : html``;
    return html`<div class="split-panel-snapping">
        ${splitPanel}
        <div class="split-panel-snapping-dots"></div>
      </div>

      <style>
        .split-panel-snapping {
          position: relative;
        }

        .split-panel-snapping-dots::before,
        .split-panel-snapping-dots::after {
          content: '';
          position: absolute;
          bottom: -12px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--ug-color-neutral-400);
          transform: translateX(-3px);
        }

        .split-panel-snapping-dots::before {
          left: 100px;
        }

        .split-panel-snapping-dots::after {
          left: 50%;
        }
      </style>`;
  }
};

export const Disabled: Story = {
  ...SplitPanel,
  args: {
    ...SplitPanel.args,
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: `Add the <code>disabled</code> attribute to prevent the divider from being repositioned.`
      },
      source: {
        format: true,
        transform: (code: string) => removeDefaultAttributes(code)
      }
    },
    html: {
      transform: (code: string) => removeDefaultAttributes(code)
    }
  }
};

//TODO: this story needs te be in a resizable element
export const SettingThePrimaryPanel: Story = {
  ...SplitPanel,
  args: {
    ...SplitPanel.args,
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: `By default, both panels will grow or shrink proportionally when the host element is resized. If a primary panel is designated, it will maintain its size and the secondary panel will grow or shrink to fit the remaining space. You can set the primary panel to <code>start</code> or <code>end</code> using the primary attribute. Try resizing the example below with each option and notice how the panels respond.`
      },
      source: {
        format: true,
        transform: (code: string) => removeDefaultAttributes(code)
      }
    },
    html: {
      transform: (code: string) => removeDefaultAttributes(code)
    }
  },
  render: (args, context) => {
    // Call the old render method
    const splitPanel = SplitPanel.render
      ? SplitPanel.render(args, context)
      : html``;
    return html` <div class="split-panel-primary">
        ${splitPanel}

        <ug-select
          label="Primary Panel"
          value=""
          style="max-width: 200px; margin-top: 1rem;"
        >
          <ug-option value="">None</ug-option>
          <ug-option value="start">Start</ug-option>
          <ug-option value="end">End</ug-option>
        </ug-select>
      </div>

      <script>
        const container = document.querySelector('.split-panel-primary');
        const splitPanel = container.querySelector('ug-split-panel');
        const select = container.querySelector('ug-select');

        select.addEventListener(
          'ug-change',
          () => (splitPanel.primary = select.value)
        );
      </script>`;
  }
};

export const NestedSplitPanels: Story = {
  ...SplitPanel,
  args: {
    ...SplitPanel.args,
    disabled: true
  },
  parameters: {
    controls: false,
    docs: {
      description: {
        story: `Create complex layouts that can be repositioned independently by nesting split panels.`
      }
    }
  },
  render: (args) => {
    return html` <ug-split-panel>
      <div
        slot="start"
        style="height: 400px; background: var(--ug-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden"
      >
        Start
      </div>
      <div slot="end">
        <ug-split-panel vertical style="height: 400px;">
          <div
            slot="start"
            style="height: 100%; background: var(--ug-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden"
          >
            Top
          </div>
          <div
            slot="end"
            style="height: 100%; background: var(--ug-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden"
          >
            Bottom
          </div>
        </ug-split-panel>
      </div>
    </ug-split-panel>`;
  }
};

//TODO: devider does weird stuff
export const CustomizingTheDivider: Story = {
  ...SplitPanel,
  args: {
    ...SplitPanel.args,
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: `To add a custom handle, slot an icon into the <code>divider</code> slot. When customizing the divider, make sure to think about focus styles for keyboard users.`
      },
      source: {
        format: true,
        transform: (code: string) => removeDefaultAttributes(code)
      }
    },
    html: {
      transform: (code: string) => removeDefaultAttributes(code)
    }
  },
  render: (args) => {
    return html`<ug-split-panel
      position="${args.position}"
      positionInPixels="${ifDefined(args.positionInPixels)}"
      ?vertical="${args.vertical}"
      ?disabled="${args.disabled}"
      primary="${ifDefined(args.primary)}"
      snap="${ifDefined(args.snap)}"
      snapThreshold="${args.snapThreshold}"
    >
      <ug-icon slot="divider" name="grip-vertical"></ug-icon>
      <div
        slot="start"
        style="height: 200px; background: var(--ug-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
      >
        Start
      </div>
      <div
        slot="end"
        style="height: 200px; background: var(--ug-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
      >
        End
      </div>
    </ug-split-panel>`;
  }
};
