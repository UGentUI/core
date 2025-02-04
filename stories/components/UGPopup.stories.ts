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

Popup is a low-level utility built specifically for positioning elements. Do not mistake it for a [tooltip](?path=/docs/components-tooltip--docs) or similar because <em>it does not facilitate an accessible experience!</em> Almost every correct usage of <code><ug-popup></code> will involve building other components. It should rarely, if ever, occur directly in your HTML.`
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

export const Popup3: Story = {
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

export const Popup2: Story = {
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
