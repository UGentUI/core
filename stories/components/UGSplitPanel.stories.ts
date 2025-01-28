import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/split-panel';
import { action } from '@storybook/addon-actions';
import { ifDefined } from 'lit/directives/if-defined.js';
import '/lib/components/select';
import '/lib/components/option';
import '/lib/components/icon';
import { userEvent } from '@storybook/test';

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
      description:
        'The current position of the divider from the primary panel’s edge as a percentage 0–100. Defaults to 50% of the container’s initial size. <br>`reflects: true`',
      control: { type: 'number', min: 0, max: 100, step: 1 }, // Number input, range from 0 to 100
      table: {
        category: 'Properties',
        type: { summary: 'number' },
        defaultValue: { summary: '50' }
      }
    },
    positionInPixels: {
      name: 'position-in-pixels',
      description:
        'The current position of the divider from the primary panel’s edge in pixels.',
      control: { type: 'number' }, // Number input for pixel value
      table: {
        category: 'Properties',
        type: { summary: 'number' },
        defaultValue: { summary: '-' }
      }
    },
    vertical: {
      description:
        'Draws the split panel in a vertical orientation with the start and end panels stacked. <br>`reflects: true`',
      control: { type: 'boolean' }, // Toggle switch for vertical orientation
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    disabled: {
      description:
        'Disables resizing. Note that the position may still change as a result of resizing the host element.<br>`reflects: true`',
      control: { type: 'boolean' }, // Toggle switch for disabled state
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    primary: {
      description:
        'If a primary panel is designated, it will maintain its size and the other panel will grow or shrink as needed when the host element is resized.',
      control: { type: 'select', options: ['start', 'end', undefined] }, // Dropdown with options
      table: {
        category: 'Properties',
        type: { summary: "'start' | 'end' | undefined" },
        defaultValue: { summary: '-' }
      }
    },
    snap: {
      description:
        'One or more space-separated values at which the divider should snap. Values can be in pixels or percentages, e.g. <code>"100px 50%"</code>.',
      control: { type: 'text' }, // Input text box for snap points
      table: {
        category: 'Properties',
        type: { summary: 'string | undefined' },
        defaultValue: { summary: '-' }
      }
    },
    snapThreshold: {
      description:
        'How close the divider must be to a snap point until snapping occurs.',
      control: { type: 'number', min: 0, step: 1 }, // Number input for snap threshold
      table: {
        category: 'Properties',
        type: { summary: 'number' },
        defaultValue: { summary: '12' }
      }
    },
    updateComplete: {
      description:
        'A read-only promise that resolves when the component has finished updating.',
      control: false, // Read-only, so no control
      table: {
        category: 'Properties',
        type: { summary: 'Promise<void>' }
      }
    },
    // Slots
    startSlot: {
      name: 'start',
      control: 'text',
      description: 'Content to place in the start panel.',
      table: {
        category: 'Slots',
        type: { summary: 'HTML' }, // Type of slot content
        defaultValue: { summary: '-' } // No default value
      }
    },
    endSlot: {
      name: 'end',
      control: 'text',
      description: 'Content to place in the end panel.',
      table: {
        category: 'Slots',
        type: { summary: 'HTML' },
        defaultValue: { summary: '-' }
      }
    },
    dividerSlot: {
      name: 'divider',
      control: 'text',
      description:
        'The divider. Useful for slotting in a custom icon that renders as a handle.',
      table: {
        category: 'Slots',
        type: { summary: 'HTML' },
        defaultValue: { summary: '-' }
      }
    },
    // Events
    ugReposition: {
      name: 'ug-reposition',
      control: false,
      description: 'Emitted when the divider’s position changes.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' }, // Type of the event
        defaultValue: { summary: '-' } // No default value
      },
      action: 'ug-reposition' // Enables the Action Logger in Storybook
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
    snapThreshold: 12,
    startSlot: 'Start',
    endSlot: 'End'
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
        ${args.startSlot}
      </div>
      <div
        slot="end"
        style="height: 200px; background: var(--ug-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
      >
        ${args.endSlot}
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
    controls: { disable: true },
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
    controls: { disable: true },
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
    controls: { disable: true },
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
    controls: { disable: true },
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
    controls: { disable: true },
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
    controls: { disable: true },
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
  render: () => {
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
    controls: { disable: true },
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

// Function to simulate dragging
const simulateDrag = async (
  element: HTMLElement,
  startX: number,
  endX: number,
  steps = 5
) => {
  const stepSize = (endX - startX) / steps;

  // Start dragging
  element.dispatchEvent(
    new PointerEvent('pointerdown', {
      bubbles: true,
      composed: true,
      clientX: startX
    })
  );

  // Simulate the drag steps
  for (let i = 1; i <= steps; i++) {
    const currentX = startX + stepSize * i;
    element.dispatchEvent(
      new PointerEvent('pointermove', {
        bubbles: true,
        composed: true,
        clientX: currentX
      })
    );
    await new Promise((resolve) => setTimeout(resolve, 50)); // Small delay between steps
  }

  // End dragging
  element.dispatchEvent(
    new PointerEvent('pointerup', {
      bubbles: true,
      composed: true,
      clientX: endX
    })
  );
};

export const SplitPanelWithEvents: Story = {
  tags: ['!autodocs'],
  args: {
    position: 50,
    positionInPixels: undefined,
    vertical: false,
    disabled: false,
    primary: undefined,
    snap: undefined,
    snapThreshold: 12,
    startSlot: 'Start',
    endSlot: 'End'
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
      @ug-reposition="${action('ug-reposition')}"
    >
      <div slot="start">Huppeldepup</div>
    </ug-split-panel>`;
  },
  play: async ({ canvasElement }) => {
    // Select the split panel
    const splitPanel = canvasElement.querySelector('ug-split-panel')!;
    // Select the divider element inside the shadow root
    const divider = splitPanel.shadowRoot!.querySelector('[role="separator"]')!;

    console.log(splitPanel);
    console.log(divider);

    // Drag the divider back and forth
    const startX = 150;
    const endX = 300;

    action('Dragging divider forward...');
    await simulateDrag(divider as HTMLElement, startX, endX);

    await new Promise((resolve) => setTimeout(resolve, 500)); // Pause between drags

    action('Dragging divider backward...');
    await simulateDrag(divider as HTMLElement, endX, startX);
  }
};
