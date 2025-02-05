import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/popup';
import '/lib/components/select';
import '/lib/components/option';
import '/lib/components/input';
import '/lib/components/switch';
import '/lib/components/range';
import { ifDefined } from 'lit/directives/if-defined.js';

const meta: Meta = {
  title: 'Components/Popup',
  component: 'ug-popup',

  parameters: {
    docs: {
      subtitle:
        'Popup is a utility that lets you declaratively anchor “popup” containers to another element.',
      description: {
        component: `This component’s name is inspired by [&lt;popup&gt;](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/Popup/explainer.md). It uses [Floating UI](https://floating-ui.com/) under the hood to provide a well-tested, lightweight, and fully declarative positioning utility for tooltips, dropdowns, and more.

Popup doesn’t provide any styles — just positioning! The popup’s preferred placement, distance, and skidding (offset) can be configured using attributes. An arrow that points to the anchor can be shown and customized to your liking. Additional positioning options are available and described in more detail below.

Popup is a low-level utility built specifically for positioning elements. Do not mistake it for a [tooltip](?path=/docs/components-tooltip--docs) or similar because <em>it does not facilitate an accessible experience!</em> Almost every correct usage of <code><ug-popup></code> will involve building other components. It should rarely, if ever, occur directly in your HTML.

A popup’s anchor should not be styled with <code>display: contents</code> since the coordinates will not be eligible for calculation. However, if the anchor is a <code><slot></code> element, popup will use the first assigned element as the anchor. This behavior allows other components to pass anchors through more easily via composition.`
      },
      source: {
        format: true,
        transform: (code: string) => {
          // Remove empty/default attributes and replace boolean attributes from the source code display
          return code
            .replace(
              /\s*(placement="top"|strategy="absolute"|distance="0"|skidding="0"|arrow-placement="anchor"|arrow-padding="10"|flip-fallback-strategy="best-fit"|flip-fallback-placements=""|flip-padding="0"|shift-padding="0"|auto-size-padding="0")/g,
              ''
            )
            .replace(/\s* active=""/g, ' active')
            .replace(/\s* flip=""/g, ' flip')
            .replace(/\s* shift=""/g, ' shift')
            .replace(/\s* arrow=""/g, ' arrow')
            .replace(/\s* hover-bridge=""/g, ' hover-bridge');
        }
      }
    }
  },

  argTypes: {
    popup: {
      control: 'object',
      name: 'popup',
      description:
        'A reference to the internal popup container. Useful for animating and styling the popup with JavaScript.',
      table: {
        category: 'Properties',
        type: { summary: 'HTMLElement' },
        defaultValue: { summary: '-' }
      }
    },
    anchor: {
      control: 'text',
      name: 'anchor',
      description:
        'The element the popup will be anchored to. If the anchor lives outside of the popup, you can provide the anchor element <code>id</code>, a DOM element reference, or a <code>VirtualElement</code>. If the anchor lives inside the popup, use the <code>anchor</code> slot instead.',
      table: {
        category: 'Properties',
        type: { summary: 'Element | string | VirtualElement' },
        defaultValue: { summary: '-' }
      }
    },
    active: {
      control: 'boolean',
      name: 'active',
      description:
        'Activates the positioning logic and shows the popup. When this attribute is removed, the positioning logic is torn down and the popup will be hidden.<br>`reflects: true`',
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    placement: {
      control: 'select',
      name: 'placement',
      description:
        'The preferred placement of the popup. Note that the actual placement will vary as configured to keep the panel inside of the viewport.<br>`reflects: true`',
      options: [
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'right',
        'right-start',
        'right-end',
        'left',
        'left-start',
        'left-end'
      ],
      table: {
        category: 'Properties',
        type: {
          summary:
            "'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end'"
        },
        defaultValue: { summary: 'top' }
      }
    },
    strategy: {
      control: 'select',
      name: 'strategy',
      description:
        'Determines how the popup is positioned. The <code>absolute</code> strategy works well in most cases, but if overflow is clipped, using a <code>fixed</code> position strategy can often workaround it.<br>`reflects: true`',
      options: ['absolute', 'fixed'],
      table: {
        category: 'Properties',
        type: { summary: "'absolute' | 'fixed'" },
        defaultValue: { summary: 'absolute' }
      }
    },
    distance: {
      control: 'number',
      name: 'distance',
      description:
        'The distance in pixels from which to offset the panel away from its anchor.',
      table: {
        category: 'Properties',
        type: { summary: 'number' },
        defaultValue: { summary: '0' }
      }
    },
    skidding: {
      control: 'number',
      name: 'skidding',
      description:
        'The distance in pixels from which to offset the panel along its anchor.',
      table: {
        category: 'Properties',
        type: { summary: 'number' },
        defaultValue: { summary: '0' }
      }
    },
    arrow: {
      control: 'boolean',
      name: 'arrow',
      description:
        'Attaches an arrow to the popup. The arrow’s size and color can be customized using the <code>--arrow-size</code> and <code>--arrow-color</code> custom properties. For additional customizations, you can also target the arrow using <code>::part(arrow)</code> in your stylesheet.',
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    arrowPlacement: {
      control: 'select',
      name: 'arrowPlacement / arrow-placement',
      description:
        'The placement of the arrow. The default is <code>anchor</code>, which will align the arrow as close to the center of the anchor as possible, considering available space and <code>arrow-padding</code>. A value of <code>start</code>, <code>end</code>, or <code>center</code> will align the arrow to the start, end, or center of the popover instead.',
      options: ['start', 'end', 'center', 'anchor'],
      table: {
        category: 'Properties',
        type: { summary: "'start' | 'end' | 'center' | 'anchor'" },
        defaultValue: { summary: 'anchor' }
      }
    },
    arrowPadding: {
      control: 'number',
      name: 'arrow-padding',
      description:
        'The amount of padding between the arrow and the edges of the popup. If the popup has a border-radius, for example, this will prevent it from overflowing the corners.',
      table: {
        category: 'Properties',
        type: { summary: 'number' },
        defaultValue: { summary: '10' }
      }
    },
    flip: {
      control: 'boolean',
      name: 'flip',
      description:
        'When set, placement of the popup will flip to the opposite site to keep it in view. You can use <code>flipFallbackPlacements</code> to further configure how the fallback placement is determined.',
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    flipFallbackPlacements: {
      control: 'text',
      name: 'flip-fallback-placements',
      description:
        'If the preferred placement doesn’t fit, popup will be tested in these fallback placements until one fits. Must be a string of any number of placements separated by a space, e.g. “top bottom left”. If no placement fits, the flip fallback strategy will be used instead.',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: "''" }
      }
    },

    flipFallbackStrategy: {
      control: 'select',
      name: 'flip-fallback-strategy',
      options: ['best-fit', 'initial'],
      description:
        'When neither the preferred placement nor the fallback placements fit, this value will be used to determine whether the popup should be positioned using the best available fit based on available space or as it was initially preferred.',
      table: {
        category: 'Properties',
        type: { summary: "'best-fit' | 'initial'" },
        defaultValue: { summary: "'best-fit'" }
      }
    },

    flipBoundary: {
      control: false,
      description:
        'The flip boundary describes clipping element(s) that overflow will be checked relative to when flipping. By default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can change the boundary by passing a reference to one or more elements to this property.',
      table: {
        category: 'Properties',
        type: { summary: 'Element | Element[]' }
      }
    },

    flipPadding: {
      control: 'number',
      name: 'flip-padding',
      description:
        'The amount of padding, in pixels, to exceed before the flip behavior occurs.',
      table: {
        category: 'Properties',
        type: { summary: 'number' },
        defaultValue: { summary: '0' }
      }
    },

    shift: {
      control: 'boolean',
      description:
        'Moves the popup along the axis to keep it in view when clipped.',
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },

    shiftBoundary: {
      control: false,
      name: 'shift-boundary',
      description:
        '	The shift boundary describes clipping element(s) that overflow will be checked relative to when shifting. By default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can change the boundary by passing a reference to one or more elements to this property.',
      table: {
        category: 'Properties',
        type: { summary: 'Element | Element[]' }
      }
    },

    shiftPadding: {
      control: 'number',
      name: 'shift-padding',
      description:
        'The amount of padding, in pixels, to exceed before the shift behavior will occur.',
      table: {
        category: 'Properties',
        type: { summary: 'number' },
        defaultValue: { summary: '0' }
      }
    },

    autoSize: {
      control: 'select',
      name: 'auto-size',
      options: ['horizontal', 'vertical', 'both'],
      description:
        'When set, this will cause the popup to automatically resize itself to prevent it from overflowing.',
      table: {
        category: 'Properties',
        type: { summary: "'horizontal' | 'vertical' | 'both'" }
      }
    },

    sync: {
      control: 'select',
      description:
        'Syncs the popup’s width or height to that of the anchor element.',
      options: ['width', 'height', 'both'],
      table: {
        category: 'Properties',
        type: { summary: "'width' | 'height' | 'both'" }
      }
    },

    autoSizeBoundary: {
      control: false,
      name: 'auto-size-boundary',
      description:
        'The auto-size boundary describes clipping element(s) that overflow will be checked relative to when resizing. By default, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can change the boundary by passing a reference to one or more elements to this property.',
      table: {
        category: 'Properties',
        type: { summary: 'Element | Element[]' }
      }
    },

    autoSizePadding: {
      control: 'number',
      name: 'auto-size-padding',
      description:
        'The amount of padding, in pixels, to exceed before the auto-size behavior will occur.',
      table: {
        category: 'Properties',
        type: { summary: 'number' },
        defaultValue: { summary: '0' }
      }
    },

    hoverBridge: {
      control: 'boolean',
      name: 'hover-bridge',
      description:
        'When a gap exists between the anchor and the popup element, this option will add a “hover bridge” that fills the gap using an invisible element. This makes listening for events such as <code>mouseenter</code> and <code>mouseleave</code> more sane because the pointer never technically leaves the element. The hover bridge will only be drawn when the popover is active.',
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },

    updateComplete: {
      control: false,
      description:
        'A read-only promise that resolves when the component has finished updating.',
      table: {
        category: 'Properties',
        type: { summary: 'Promise<void>' },
        defaultValue: { summary: undefined }
      }
    },

    //Slots
    defaultSlot: {
      name: '(default)',
      description: 'The popup’s content.',
      table: {
        category: 'Slots',
        type: { summary: 'slot' },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    anchorSlot: {
      name: 'anchor',
      description:
        'The element the popup will be anchored to. If the anchor lives outside of the popup, you can use the <code>anchor</code> attribute or property instead.',
      table: {
        category: 'Slots',
        type: { summary: 'slot' },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    //Events
    ugReposition: {
      action: 'ug-reposition',
      description:
        'Emitted when the popup is repositioned. This event can fire a lot, so avoid putting expensive operations in your listener or consider debouncing it.',
      table: {
        category: 'Events',
        type: { summary: undefined },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    //Methods
    reposition: {
      name: 'reposition()',
      description: 'Forces the popup to recalculate and reposition itself.',
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

export const Popup: Story = {
  args: {
    popup: undefined,
    anchor: undefined,
    active: true,
    placement: 'top',
    strategy: 'absolute',
    distance: 0,
    skidding: 0,
    arrow: false,
    arrowPlacement: 'anchor',
    arrowPadding: 10,
    flip: false,
    flipFallbackPlacements: '',
    flipFallbackStrategy: 'best-fit',
    flipBoundary: undefined,
    flipPadding: 0,
    shift: false,
    shiftBoundary: undefined,
    shiftPadding: 0,
    autoSize: false,
    sync: false,
    autoSizeBoundary: undefined,
    autoSizePadding: 0,
    hoverBridge: false
  },
  render: (args) => {
    return html`<div class="popup-default">
        <ug-popup
          popup=${ifDefined(args.popup)}
          anchor=${ifDefined(args.anchor)}
          ?active=${args.active}
          placement=${ifDefined(args.placement)}
          strategy=${args.strategy}
          distance=${args.distance}
          skidding=${args.skidding}
          ?arrow=${args.arrow}
          arrow-placement=${args.arrowPlacement}
          arrow-padding=${args.arrowPadding}
          flip-fallback-placements=${args.flipFallbackPlacements}
          flip-fallback-strategy=${args.flipFallbackStrategy}
          flipBoundary=${ifDefined(args.flipBoundary)}
          flip-padding=${args.flipPadding}
          ?flip=${args.flip}
          ?shift=${args.shift}
          shift-boundary=${ifDefined(args.shiftBoundary)}
          ?shift-padding=${args.shiftPadding}
          ?auto-size=${ifDefined(args.autoSize)}
          ?sync=${ifDefined(args.sync)}
          auto-size-boundary=${ifDefined(args.autoSizeBoundary)}
          auto-size-padding=${args.autoSizePadding}
          ?hoverBridge=${args.hoverBridge}
        >
          <span slot="anchor"></span>
          <div class="box"></div>
        </ug-popup>
      </div>

      <style>
        .popup-default ug-popup {
          --arrow-color: var(--ug-color-primary-600);
        }

        .popup-default span[slot='anchor'] {
          display: inline-block;
          width: 150px;
          height: 150px;
          border: dashed 2px var(--ug-color-neutral-600);
          margin: 50px;
        }

        .popup-default .box {
          width: 100px;
          height: 50px;
          background: var(--ug-color-primary-600);
          border-radius: var(--ug-border-radius-medium);
        }

        .popup-default-options {
          display: flex;
          flex-wrap: wrap;
          align-items: end;
          gap: 1rem;
        }
      </style>`;
  }
};

export const Positions: Story = {
  render: () => {
    return html`<div class="popup-overview">
        <ug-popup placement="top" active>
          <span slot="anchor"></span>
          <div class="box"></div>
        </ug-popup>

        <div class="popup-overview-options">
          <ug-select
            label="Placement"
            name="placement"
            value="top"
            class="popup-overview-select"
          >
            <ug-option value="top">top</ug-option>
            <ug-option value="top-start">top-start</ug-option>
            <ug-option value="top-end">top-end</ug-option>
            <ug-option value="bottom">bottom</ug-option>
            <ug-option value="bottom-start">bottom-start</ug-option>
            <ug-option value="bottom-end">bottom-end</ug-option>
            <ug-option value="right">right</ug-option>
            <ug-option value="right-start">right-start</ug-option>
            <ug-option value="right-end">right-end</ug-option>
            <ug-option value="left">left</ug-option>
            <ug-option value="left-start">left-start</ug-option>
            <ug-option value="left-end">left-end</ug-option>
          </ug-select>
          <ug-input
            type="number"
            name="distance"
            label="distance"
            value="0"
          ></ug-input>
          <ug-input
            type="number"
            name="skidding"
            label="Skidding"
            value="0"
          ></ug-input>
        </div>

        <div class="popup-overview-options">
          <ug-switch name="active" checked>Active</ug-switch>
          <ug-switch name="arrow">Arrow</ug-switch>
        </div>
      </div>

      <script>
        () => {
          const container = document.querySelector('.popup-overview');
          const popup = container.querySelector('ug-popup');
          const select = container.querySelector('ug-select[name="placement"]');
          const distance = container.querySelector('ug-input[name="distance"]');
          const skidding = container.querySelector('ug-input[name="skidding"]');
          const active = container.querySelector('ug-switch[name="active"]');
          const arrow = container.querySelector('ug-switch[name="arrow"]');

          select.addEventListener(
            'ug-change',
            () => (popup.placement = select.value)
          );
          distance.addEventListener(
            'ug-input',
            () => (popup.distance = distance.value)
          );
          skidding.addEventListener(
            'ug-input',
            () => (popup.skidding = skidding.value)
          );
          active.addEventListener(
            'ug-change',
            () => (popup.active = active.checked)
          );
          arrow.addEventListener(
            'ug-change',
            () => (popup.arrow = arrow.checked)
          );
        };
      </script>

      <style>
        .popup-overview ug-popup {
          --arrow-color: var(--ug-color-primary-600);
        }

        .popup-overview span[slot='anchor'] {
          display: inline-block;
          width: 150px;
          height: 150px;
          border: dashed 2px var(--ug-color-neutral-600);
          margin: 50px;
        }

        .popup-overview .box {
          width: 100px;
          height: 50px;
          background: var(--ug-color-primary-600);
          border-radius: var(--ug-border-radius-medium);
        }

        .popup-overview-options {
          display: flex;
          flex-wrap: wrap;
          align-items: end;
          gap: 1rem;
        }

        .popup-overview-options ug-select {
          width: 160px;
        }

        .popup-overview-options ug-input {
          width: 100px;
        }

        .popup-overview-options + .popup-overview-options {
          margin-top: 1rem;
        }
      </style>`;
  }
};

export const Activating: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Popups are inactive and hidden until the <code>active</code> attribute is applied. Removing the attribute will tear down all positioning logic and listeners, meaning you can have many idle popups on the page without affecting performance.'
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  },
  render: () => {
    return html`<div class="popup-active">
        <ug-popup placement="top" active>
          <span slot="anchor"></span>
          <div class="box"></div>
        </ug-popup>

        <br />
        <ug-switch checked>Active</ug-switch>
      </div>

      <style>
        .popup-active span[slot='anchor'] {
          display: inline-block;
          width: 150px;
          height: 150px;
          border: dashed 2px var(--ug-color-neutral-600);
          margin: 50px;
        }

        .popup-active .box {
          width: 100px;
          height: 50px;
          background: var(--ug-color-primary-600);
          border-radius: var(--ug-border-radius-medium);
        }
      </style>

      <script>
        () => {
          const container = document.querySelector('.popup-active');
          const popup = container.querySelector('ug-popup');
          const active = container.querySelector('ug-switch');

          active.addEventListener(
            'ug-change',
            () => (popup.active = active.checked)
          );
        };
      </script>`;
  }
};

export const ExternalAnchors: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'By default, anchors are slotted into the popup using the <code>anchor</code> slot. If your anchor needs to live outside of the popup, you can pass the anchor’s <code>id</code> to the <code>anchor</code> attribute. Alternatively, you can pass an element reference to the <code>anchor</code> property to achieve the same effect without using an <code>id</code>.'
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  },
  render: () => {
    return html`<span id="external-anchor"></span>

      <ug-popup anchor="external-anchor" placement="top" active>
        <span slot="anchor"></span>
        <div class="box"></div>
      </ug-popup>

      <style>
        #external-anchor {
          display: inline-block;
          width: 150px;
          height: 150px;
          border: dashed 2px var(--ug-color-neutral-600);
          margin: 50px 0 0 50px;
        }

        #external-anchor ~ ug-popup .box {
          width: 100px;
          height: 50px;
          background: var(--ug-color-primary-600);
          border-radius: var(--ug-border-radius-medium);
        }
      </style>`;
  }
};

export const Placement: Story = {
  parameters: {
    docs: {
      description: {
        story: `Use the placement attribute to tell the popup the preferred placement of the popup. Note that the actual position will vary to ensure the panel remains in the viewport if you’re using positioning features such as flip and shift.

Since placement is preferred when using flip, you can observe the popup’s current placement when it’s active by looking at the data-current-placement attribute. This attribute will update as the popup flips to find available space and it will be removed when the popup is deactivated.`
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  },
  render: () => {
    return html`<div class="popup-placement">
        <ug-popup placement="top" active>
          <span slot="anchor"></span>
          <div class="box"></div>
        </ug-popup>

        <ug-select label="Placement" value="top">
          <ug-option value="top">top</ug-option>
          <ug-option value="top-start">top-start</ug-option>
          <ug-option value="top-end">top-end</ug-option>
          <ug-option value="bottom">bottom</ug-option>
          <ug-option value="bottom-start">bottom-start</ug-option>
          <ug-option value="bottom-end">bottom-end</ug-option>
          <ug-option value="right">right</ug-option>
          <ug-option value="right-start">right-start</ug-option>
          <ug-option value="right-end">right-end</ug-option>
          <ug-option value="left">left</ug-option>
          <ug-option value="left-start">left-start</ug-option>
          <ug-option value="left-end">left-end</ug-option>
        </ug-select>
      </div>

      <style>
        .popup-placement span[slot='anchor'] {
          display: inline-block;
          width: 150px;
          height: 150px;
          border: dashed 2px var(--ug-color-neutral-600);
          margin: 50px;
        }

        .popup-placement .box {
          width: 100px;
          height: 50px;
          background: var(--ug-color-primary-600);
          border-radius: var(--ug-border-radius-medium);
        }

        .popup-placement ug-select {
          max-width: 280px;
        }
      </style>

      <script>
        () => {
          const container = document.querySelector('.popup-placement');
          const popup = container.querySelector('ug-popup');
          const select = container.querySelector('ug-select');

          select.addEventListener(
            'ug-change',
            () => (popup.placement = select.value)
          );
        };
      </script> `;
  }
};

export const Distance: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use the <code>distance</code> attribute to change the distance between the popup and its anchor. A positive value will move the popup further away and a negative value will move it closer.'
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  },
  render: () => {
    return html`<div class="popup-distance">
        <ug-popup placement="top" distance="0" active>
          <span slot="anchor"></span>
          <div class="box"></div>
        </ug-popup>

        <ug-range
          min="-50"
          max="50"
          step="1"
          value="0"
          label="Distance"
        ></ug-range>
      </div>

      <style>
        .popup-distance span[slot='anchor'] {
          display: inline-block;
          width: 150px;
          height: 150px;
          border: dashed 2px var(--ug-color-neutral-600);
          margin: 50px;
        }

        .popup-distance .box {
          width: 100px;
          height: 50px;
          background: var(--ug-color-primary-600);
          border-radius: var(--ug-border-radius-medium);
        }

        .popup-distance ug-range {
          max-width: 260px;
        }
      </style>

      <script>
        () => {
          const container = document.querySelector('.popup-distance');
          const popup = container.querySelector('ug-popup');
          const distance = container.querySelector('ug-range');

          distance.addEventListener(
            'ug-input',
            () => (popup.distance = distance.value)
          );
        };
      </script> `;
  }
};

export const Skidding: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The <code>skidding</code> attribute is similar to <code>distance</code>, but instead allows you to offset the popup along the anchor’s axis. Both positive and negative values are allowed.'
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  },
  render: () => {
    return html`<div class="popup-skidding">
        <ug-popup placement="top" skidding="0" active>
          <span slot="anchor"></span>
          <div class="box"></div>
        </ug-popup>

        <ug-range
          min="-50"
          max="50"
          step="1"
          value="0"
          label="Skidding"
        ></ug-range>
      </div>

      <style>
        .popup-skidding span[slot='anchor'] {
          display: inline-block;
          width: 150px;
          height: 150px;
          border: dashed 2px var(--ug-color-neutral-600);
          margin: 50px;
        }

        .popup-skidding .box {
          width: 100px;
          height: 50px;
          background: var(--ug-color-primary-600);
          border-radius: var(--ug-border-radius-medium);
        }

        .popup-skidding ug-range {
          max-width: 260px;
        }
      </style>

      <script>
        () => {
          const container = document.querySelector('.popup-skidding');
          const popup = container.querySelector('ug-popup');
          const skidding = container.querySelector('ug-range');

          skidding.addEventListener(
            'ug-input',
            () => (popup.skidding = skidding.value)
          );
        };
      </script> `;
  }
};

export const Arrows: Story = {
  parameters: {
    docs: {
      description: {
        story: `Add an arrow to your popup with the <code>arrow</code> attribute. It’s usually a good idea to set a distance to make room for the arrow.

By default, the arrow will be aligned as close to the center of the anchor as possible, considering available space and arrow-padding. You can use the arrow-placement attribute to force the arrow to align to the start, end, or center of the popup instead.`
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  },
  render: () => {
    return html`<div class="popup-arrow">
      <ug-popup
        placement="top"
        arrow
        arrow-placement="anchor"
        distance="8"
        active
      >
        <span slot="anchor"></span>
        <div class="box"></div>
      </ug-popup>

      <div class="popup-arrow-options">
        <ug-select
          label="Placement"
          name="placement"
          value="top"
          class="popup-overview-select"
        >
          <ug-option value="top">top</ug-option>
          <ug-option value="top-start">top-start</ug-option>
          <ug-option value="top-end">top-end</ug-option>
          <ug-option value="bottom">bottom</ug-option>
          <ug-option value="bottom-start">bottom-start</ug-option>
          <ug-option value="bottom-end">bottom-end</ug-option>
          <ug-option value="right">right</ug-option>
          <ug-option value="right-start">right-start</ug-option>
          <ug-option value="right-end">right-end</ug-option>
          <ug-option value="left">left</ug-option>
          <ug-option value="left-start">left-start</ug-option>
          <ug-option value="left-end">left-end</ug-option>
        </ug-select>

        <ug-select
          label="Arrow Placement"
          name="arrow-placement"
          value="anchor"
        >
          <ug-option value="anchor">anchor</ug-option>
          <ug-option value="start">start</ug-option>
          <ug-option value="end">end</ug-option>
          <ug-option value="center">center</ug-option>
        </ug-select>
      </div>

      <style>
        .popup-arrow ug-popup {
          --arrow-color: var(--ug-color-primary-600);
        }

        .popup-arrow span[slot='anchor'] {
          display: inline-block;
          width: 150px;
          height: 150px;
          border: dashed 2px var(--ug-color-neutral-600);
          margin: 50px;
        }

        .popup-arrow .box {
          width: 100px;
          height: 50px;
          background: var(--ug-color-primary-600);
          border-radius: var(--ug-border-radius-medium);
        }

        .popup-arrow-options {
          display: flex;
          flex-wrap: wrap;
          align-items: end;
          gap: 1rem;
        }

        .popup-arrow-options ug-select {
          width: 160px;
        }

        .popup-arrow-options + .popup-arrow-options {
          margin-top: 1rem;
        }
      </style>

      <script>
        () => {
          const container = document.querySelector('.popup-arrow');
          const popup = container.querySelector('ug-popup');
          const placement = container.querySelector('[name="placement"]');
          const arrowPlacement = container.querySelector(
            '[name="arrow-placement"]'
          );
          const arrow = container.querySelector('[name="arrow"]');

          placement.addEventListener(
            'ug-change',
            () => (popup.placement = placement.value)
          );
          arrowPlacement.addEventListener(
            'ug-change',
            () => (popup.arrowPlacement = arrowPlacement.value)
          );
        };
      </script>
    </div> `;
  }
};

//Deze kan herschreven worden om 4 stories naast elkaar te hebben
export const SyncingWithTheAnchorsDimensions: Story = {
  name: 'Syncing with the Anchor’s Dimensions',
  parameters: {
    docs: {
      description: {
        story:
          'Use the <code>sync</code> attribute to make the popup the same width or height as the anchor element. This is useful for controls that need the popup to stay the same width or height as the trigger.'
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  },
  render: () => {
    return html`<div class="popup-sync">
        <ug-popup placement="top" sync="width" active>
          <span slot="anchor"></span>
          <div class="box"></div>
        </ug-popup>

        <ug-select value="width" label="Sync">
          <ug-option value="width">Width</ug-option>
          <ug-option value="height">Height</ug-option>
          <ug-option value="both">Both</ug-option>
          <ug-option value="">None</ug-option>
        </ug-select>
      </div>

      <style>
        .popup-sync span[slot='anchor'] {
          display: inline-block;
          width: 150px;
          height: 150px;
          border: dashed 2px var(--ug-color-neutral-600);
          margin: 50px;
        }

        .popup-sync .box {
          width: 100%;
          height: 100%;
          min-width: 50px;
          min-height: 50px;
          background: var(--ug-color-primary-600);
          border-radius: var(--ug-border-radius-medium);
        }

        .popup-sync ug-select {
          width: 160px;
        }
      </style>

      <script>
        () => {
          const container = document.querySelector('.popup-sync');
          const popup = container.querySelector('ug-popup');
          const fixed = container.querySelector('ug-switch');
          const sync = container.querySelector('ug-select');

          sync.addEventListener('ug-change', () => (popup.sync = sync.value));
        };
      </script> `;
  }
};

export const PositioningStrategy: Story = {
  parameters: {
    docs: {
      description: {
        story: `By default, the popup is positioned using an absolute positioning strategy. However, if your anchor is fixed or exists within a container that has overflow: auto|hidden, the popup risks being clipped. To work around this, you can use a fixed positioning strategy by setting the strategy attribute to fixed.

The fixed positioning strategy reduces jumpiness when the anchor is fixed and allows the popup to break out containers that clip. When using this strategy, it’s important to note that the content will be positioned relative to its [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block), which is usually the viewport unless an ancestor uses a transform, perspective, or filter. [Refer to this page](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) for more details.

In this example, you can see how the popup breaks out of the overflow container when it’s fixed. The fixed positioning strategy tends to be less performant than absolute, so avoid using it unnecessarily.

Scroll the container to see the difference.`
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  },
  render: () => {
    return html`<div class="popup-strategy">
        <div class="overflow">
          <ug-popup placement="top" strategy="fixed" active>
            <span slot="anchor"></span>
            <div class="box"><div>Fixed</div></div>
          </ug-popup>

          <ug-popup placement="top" strategy="absolute" active>
            <span slot="anchor"></span>
            <div class="box"><div>Not Fixed</div></div>
          </ug-popup>
        </div>
      </div>

      <style>
        .popup-strategy .overflow {
          position: relative;
          height: 300px;
          border: solid 2px var(--ug-color-neutral-200);
          overflow: auto;
        }

        .popup-strategy span[slot='anchor'] {
          display: inline-block;
          width: 150px;
          height: 150px;
          border: dashed 2px var(--ug-color-neutral-600);
          margin: 150px 50px;
        }

        .popup-strategy .box {
          color: white;
          text-align: center;
          margin: auto;
          width: 100px;
          height: 50px;
          background: var(--ug-color-primary-600);
          border-radius: var(--ug-border-radius-medium);
        }
      </style>`;
  }
};

export const Flip: Story = {
  parameters: {
    docs: {
      description: {
        story: `When the popup doesn’t have enough room in its preferred placement, it can automatically flip to keep it in view. To enable this, use the flip attribute. By default, the popup will flip to the opposite placement, but you can configure preferred fallback placements using flip-fallback-placement and flip-fallback-strategy. Additional options are available to control the flip behavior’s boundary and padding.

Scroll the container to see how the popup flips to prevent clipping.`
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  },
  render: () => {
    return html`<div class="popup-flip">
        <div class="overflow">
          <ug-popup placement="top" flip active>
            <span slot="anchor"></span>
            <div class="box">Flip</div>
          </ug-popup>
          <ug-popup placement="top" active>
            <span slot="anchor"></span>
            <div class="box">Do not flip</div>
          </ug-popup>
        </div>
      </div>

      <style>
        .popup-flip .overflow {
          position: relative;
          height: 300px;
          border: solid 2px var(--ug-color-neutral-200);
          overflow: auto;
        }

        .popup-flip span[slot='anchor'] {
          display: inline-block;
          width: 150px;
          height: 150px;
          border: dashed 2px var(--ug-color-neutral-600);
          margin: 150px 50px;
        }

        .popup-flip .box {
          color: white;
          text-align: center;
          width: 100px;
          height: 50px;
          background: var(--ug-color-primary-600);
          border-radius: var(--ug-border-radius-medium);
        }
      </style>`;
  }
};

export const FlipFallbacks: Story = {
  parameters: {
    docs: {
      description: {
        story: `While using the <code>flip</code> attribute, you can customize the placement of the popup when the preferred placement doesn’t have room. For this, use <code>flip-fallback-placements</code> and <code>flip-fallback-strategy</code>.

If the preferred placement doesn’t have room, the first suitable placement found in <code>flip-fallback-placement</code> will be used. The value of this attribute must be a string including any number of placements separated by a space, e.g. <code>"right bottom"</code>.

If no fallback placement works, the final placement will be determined by <code>flip-fallback-strategy</code>. This value can be either initial (default), where the placement reverts to the position in placement, or <code>best-fit</code>, where the placement is chosen based on available space.

Scroll the container to see how the popup changes it’s fallback placement to prevent clipping.`
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  },
  render: () => {
    return html``;
  }
};

export const Shift: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'When a popup is longer than its anchor, it risks being clipped by an overflowing container. In this case, use the <code>shift</code> attribute to shift the popup along its axis and back into view. You can customize the shift behavior using <code>shiftBoundary</code> and <code>shift-padding</code>.'
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  },
  render: () => {
    return html`<div class="popup-shift">
        <div class="overflow">
          <ug-popup placement="top" shift shift-padding="10" active>
            <span slot="anchor"></span>
            <div class="box"></div>
          </ug-popup>
        </div>

        <ug-switch checked>Shift</ug-switch>
      </div>

      <style>
        .popup-shift .overflow {
          position: relative;
          border: solid 2px var(--ug-color-neutral-200);
          overflow: auto;
        }

        .popup-shift span[slot='anchor'] {
          display: inline-block;
          width: 150px;
          height: 150px;
          border: dashed 2px var(--ug-color-neutral-600);
          margin: 60px 0 0 10px;
        }

        .popup-shift .box {
          width: 300px;
          height: 50px;
          background: var(--ug-color-primary-600);
          border-radius: var(--ug-border-radius-medium);
        }
      </style>

      <script>
        () => {
          const container = document.querySelector('.popup-shift');
          const popup = container.querySelector('ug-popup');
          const shift = container.querySelector('ug-switch');

          shift.addEventListener(
            'ug-change',
            () => (popup.shift = shift.checked)
          );
        };
      </script> `;
  }
};

export const AutoSize: Story = {
  parameters: {
    docs: {
      description: {
        story: `Use the <code>auto-size</code> attribute to tell the popup to resize when necessary to prevent it from getting clipped. Possible values are <code>horizontal</code>, <code>vertical</code>, and <code>both</code>. You can use <code>autoSizeBoundary</code> and <code>auto-size-padding</code> to customize the behavior of this option. Auto-size works well with <code>flip</code>, but if you’re using <code>auto-size-padding</code> make sure <code>flip-padding</code> is the same value.

When using <code>auto-size</code>, one or both of <code>--auto-size-available-width</code> and <code>--auto-size-available-height</code> will be applied to the host element. These values determine the available space the popover has before clipping will occur. Since they cascade, you can use them to set a max-width/height on your popup’s content and easily control its overflow.

Scroll the container to see the popup resize as its available space changes.`
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  },
  render: () => {
    return html`<div class="popup-auto-size">
        <div class="overflow">
          <ug-popup
            placement="top"
            auto-size="both"
            auto-size-padding="10"
            active
          >
            <span slot="anchor"></span>
            <div class="box"></div>
          </ug-popup>
        </div>

        <br />
        <ug-switch checked>Auto-size</ug-switch>
      </div>

      <style>
        .popup-auto-size .overflow {
          position: relative;
          height: 300px;
          border: solid 2px var(--ug-color-neutral-200);
          overflow: auto;
        }

        .popup-auto-size span[slot='anchor'] {
          display: inline-block;
          width: 150px;
          height: 150px;
          border: dashed 2px var(--ug-color-neutral-600);
          margin: 250px 50px 100px 50px;
        }

        .popup-auto-size .box {
          background: var(--ug-color-primary-600);
          border-radius: var(--ug-border-radius-medium);

          /* This sets the preferred size of the popup's content */
          width: 100px;
          height: 200px;

          /* This sets the maximum dimensions and allows scrolling when auto-size kicks in */
          max-width: var(--auto-size-available-width);
          max-height: var(--auto-size-available-height);
          overflow: auto;
        }
      </style>

      <script>
        () => {
          const container = document.querySelector('.popup-auto-size');
          const popup = container.querySelector('ug-popup');
          const autoSize = container.querySelector('ug-switch');

          autoSize.addEventListener(
            'ug-change',
            () => (popup.autoSize = autoSize.checked ? 'both' : '')
          );
        };
      </script> `;
  }
};

export const HoverBridge: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'When a gap exists between the anchor and the popup element, this option will add a “hover bridge” that fills the gap using an invisible element. This makes listening for events such as <code>mouseover</code> and <code>mouseout</code> more sane because the pointer never technically leaves the element. The hover bridge will only be drawn when the popover is active. For demonstration purposes, the bridge in this example is shown in orange.'
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  },
  render: () => {
    return html`<div class="popup-hover-bridge">
        <ug-popup
          placement="top"
          hover-bridge
          distance="10"
          skidding="0"
          active
        >
          <span slot="anchor"></span>
          <div class="box"></div>
        </ug-popup>

        <br />
        <ug-switch checked>Hover Bridge</ug-switch><br />
        <ug-range
          min="0"
          max="50"
          step="1"
          value="10"
          label="Distance"
        ></ug-range>
        <ug-range
          min="-50"
          max="50"
          step="1"
          value="0"
          label="Skidding"
        ></ug-range>
      </div>

      <style>
        .popup-hover-bridge span[slot='anchor'] {
          display: inline-block;
          width: 150px;
          height: 150px;
          border: dashed 2px var(--ug-color-neutral-600);
          margin: 50px;
        }

        .popup-hover-bridge .box {
          width: 100px;
          height: 50px;
          background: var(--ug-color-primary-600);
          border-radius: var(--ug-border-radius-medium);
        }

        .popup-hover-bridge ug-range {
          max-width: 260px;
          margin-top: 0.5rem;
        }

        .popup-hover-bridge ug-popup::part(hover-bridge) {
          background: tomato;
          opacity: 0.5;
        }
      </style>

      <script>
        () => {
          const container = document.querySelector('.popup-hover-bridge');
          const popup = container.querySelector('ug-popup');
          const hoverBridge = container.querySelector('ug-switch');
          const distance = container.querySelector(
            'ug-range[label="Distance"]'
          );
          const skidding = container.querySelector(
            'ug-range[label="Skidding"]'
          );

          distance.addEventListener(
            'ug-input',
            () => (popup.distance = distance.value)
          );
          skidding.addEventListener(
            'ug-input',
            () => (popup.skidding = skidding.value)
          );
          hoverBridge.addEventListener(
            'ug-change',
            () => (popup.hoverBridge = hoverBridge.checked)
          );
        };
      </script> `;
  }
};

export const VirtualElements: Story = {
  parameters: {
    docs: {
      description: {
        story: `
In most cases, popups are anchored to an actual element. Sometimes, it can be useful to anchor them to a non-element. 

To do this, you can pass a \`VirtualElement\` to the \`anchor\` property. A virtual element must contain a function called \`getBoundingClientRect()\` that returns a [\`DOMRect\`](https://developer.mozilla.org/en-US/docs/Web/API/DOMRect) object, as shown below:

\`\`\`javascript
const virtualElement = {
  getBoundingClientRect() {
    // ...
    return { width, height, x, y, top, left, right, bottom };
  }
};
\`\`\`

This example anchors a popup to the mouse cursor using a virtual element. As such, a mouse is required to properly view it.

Sometimes the <code>getBoundingClientRects</code> might be derived from a real element. In this case provide the anchor element as context to ensure clipping and position updates for the popup work well.


\`\`\`javascript
const virtualElement = {
  getBoundingClientRect() {
    // ...
    return { width, height, x, y, top, left, right, bottom };
  },
  contextElement: anchorElement
};
\`\`\`
      `
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  },
  render: () => {
    return html`<div class="popup-virtual-element">
        <ug-popup placement="right-start">
          <div class="circle"></div>
        </ug-popup>

        <ug-switch>Highlight mouse cursor</ug-switch>
      </div>

      <script>
        () => {
          const container = document.querySelector('.popup-virtual-element');
          const popup = container.querySelector('ug-popup');
          const circle = container.querySelector('.circle');
          const enabled = container.querySelector('ug-switch');
          let clientX = 0;
          let clientY = 0;

          // Set the virtual element as a property
          popup.anchor = {
            getBoundingClientRect() {
              return {
                width: 0,
                height: 0,
                x: clientX,
                y: clientY,
                top: clientY,
                left: clientX,
                right: clientX,
                bottom: clientY
              };
            }
          };

          // Only activate the popup when the switch is checked
          enabled.addEventListener('ug-change', () => {
            popup.active = enabled.checked;
          });

          // Listen for the mouse to move
          document.addEventListener('mousemove', handleMouseMove);

          // Update the virtual element as the mouse moves
          function handleMouseMove(event) {
            clientX = event.clientX;
            clientY = event.clientY;

            // Reposition the popup when the virtual anchor moves
            if (popup.active) {
              popup.reposition();
            }
          }
        };
      </script>

      <style>
        /* If you need to set a z-index, set it on the popup part like this */
        .popup-virtual-element ug-popup::part(popup) {
          z-index: 1000;
          pointer-events: none;
        }

        .popup-virtual-element .circle {
          width: 100px;
          height: 100px;
          border: solid 4px var(--ug-color-primary-600);
          border-radius: 50%;
          translate: -50px -50px;
          animation: 1s virtual-cursor infinite;
        }

        @keyframes virtual-cursor {
          0% {
            scale: 1;
          }
          50% {
            scale: 1.1;
          }
        }
      </style> `;
  }
};
