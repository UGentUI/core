import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/icon';
import { action } from '@storybook/addon-actions';
import icons from '/lib/assets/icons/icons.json';

const iconNames = Object.entries(icons)
  .filter(([, icon]) => !icon.styles.includes('brands'))
  .map(([name]) => name)
  .sort();

const meta: Meta = {
  title: 'Components/Icon',
  component: 'ug-icon',
  parameters: {
    docs: {
      subtitle:
        'Icons are symbols that can be used to represent various options within an application.',
      description: {
        component: `The UGent UI component library comes bundled with over ${Math.round(iconNames.length / 100) * 100} <a href="https://fontawesome.com/search?o=r&ic=pro-collection&s=regular&ip=sharp" >Font Awesome Pro - Regular Sharp</a> icons. <br>If you prefer, you can register <a href="#icon%20library">custom icon libraries</a> as well.`
      },
      source: {
        format: true,
        transform: (code: string) => {
          return code.replace(/\s*(name=""|library=""|label=""|src="")/g, '');
        }
      }
    }
  },
  argTypes: {
    // Properties
    name: {
      control: 'select',
      options: iconNames,
      description:
        'The name of the icon to draw. Available names depend on the icon library being used. <br> `reflects: true`',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: undefined }
      }
    },
    src: {
      control: 'text',
      description:
        'An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and can result in XSS attacks.',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: undefined }
      }
    },
    label: {
      control: 'text',
      description:
        'An alternate description to use for assistive devices. If omitted, the icon will be considered presentational and ignored by assistive devices.',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: undefined }
      }
    },
    library: {
      control: false,
      description:
        'The name of a registered custom icon library.<br>`reflects: true`',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: 'default' }
      }
    },
    updateComplete: {
      name: 'updateComplete',
      description:
        'A read-only promise that resolves when the component has finished updating.',
      table: {
        category: 'Properties',
        type: { summary: 'Promise<void>' },
        defaultValue: { summary: undefined }
      },
      control: false
    },
    // Events
    'ug-load': {
      control: false,
      action: 'ug-load',
      description: 'Emitted when the icon has loaded.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      }
    },
    'ug-error': {
      control: false,
      action: 'ug-error',
      description: 'Emitted when the icon fails to load due to an error.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: undefined }
      }
    }
  }
};

export default meta;

type Story = StoryObj;

// Default story with controls
export const Icon: Story = {
  args: {
    name: 'bell',
    src: undefined,
    label: undefined,
    library: undefined
  },
  render: (args) => html`
    <ug-icon
      name="${args.name}"
      label="${args.label}"
      src="${args.src}"
      @ug-load="${action('ug-load')}"
      @ug-error="${action('ug-error')}"
    ></ug-icon>
  `
};

// Colors example
export const Colors: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Icons inherit their color from the current text color. Thus, you can set the color property on the `<ug-icon>` element or an ancestor to change the color.'
      }
    }
  },
  render: () => html`
    <div style="color: var(--ug-color-primary-600);">
      <ug-icon name="triangle-exclamation"></ug-icon>
      <ug-icon name="box-archive"></ug-icon>
      <ug-icon name="battery-bolt"></ug-icon>
      <ug-icon name="bell"></ug-icon>
    </div>
    <div style="color: var(--ug-color-warning-600);">
      <ug-icon name="clock"></ug-icon>
      <ug-icon name="cloud"></ug-icon>
      <ug-icon name="download"></ug-icon>
      <ug-icon name="file"></ug-icon>
    </div>
    <div style="color: var(--ug-color-success-600);">
      <ug-icon name="flag"></ug-icon>
      <ug-icon name="heart"></ug-icon>
      <ug-icon name="image"></ug-icon>
      <ug-icon name="bolt"></ug-icon>
    </div>
    <div style="color: var(--ug-color-danger-600);">
      <ug-icon name="microphone"></ug-icon>
      <ug-icon name="magnifying-glass"></ug-icon>
      <ug-icon name="star"></ug-icon>
      <ug-icon name="trash"></ug-icon>
    </div>
  `
};

// Sizes example
export const Sizes: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Icons are sized relative to the current font size. To change their size, set the `font-size` property on the icon itself or on a parent element as shown below.'
      }
    }
  },
  render: () => html`
    <div style="font-size: var(--ug-font-size-x-large);">
      <ug-icon name="triangle-exclamation"></ug-icon>
      <ug-icon name="box-archive"></ug-icon>
      <ug-icon name="battery-bolt"></ug-icon>
      <ug-icon name="bell"></ug-icon>
      <ug-icon name="clock"></ug-icon>
      <ug-icon name="cloud"></ug-icon>
      <ug-icon name="download"></ug-icon>
      <ug-icon name="file"></ug-icon>
      <ug-icon name="flag"></ug-icon>
      <ug-icon name="heart"></ug-icon>
      <ug-icon name="image"></ug-icon>
      <ug-icon name="bolt"></ug-icon>
      <ug-icon name="microphone"></ug-icon>
      <ug-icon name="magnifying-glass"></ug-icon>
      <ug-icon name="star"></ug-icon>
      <ug-icon name="trash"></ug-icon>
    </div>
  `
};

// Accessibility example
export const Labels: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'For non-decorative icons, use the `label` attribute to announce it to assistive devices.'
      }
    }
  },
  render: () => html` <ug-icon name="star" label="Add to favorites"></ug-icon> `
};

// Custom icon example
export const CustomIcons: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Custom icons can be loaded individually with the `src` attribute. Only SVGs on a local or CORS-enabled endpoint are supported. If you’re using more than one custom icon, it might make sense to register a custom icon library.'
      }
    }
  },
  render: () => html`
    <ug-icon
      src="/lib/assets/brand/logos/symbol-ugent.svg"
      style="font-size: var(--ug-font-size-x-large);"
    ></ug-icon>
  `
};

// Icon library example
export const IconLibrary: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Custom icon libraries can be registered to use additional icon sets. This example demonstrates how to use Font Awesome brand icons from their CDN. <br>If necessary, a mutator function can be used to mutate the SVG element before rendering. This is necessary for some libraries due to the many possible ways SVGs are crafted. For example, icons should ideally inherit the current text color via `currentColor`, so you may need to apply `fill="currentColor"` or `stroke="currentColor"` to the SVG element using this function'
      },
      //   canvas: {
      //     sourceState: 'shown'
      //   },
      source: {
        code: `
<div style="font-size: 24px;">
  <ug-icon library="brands" name="github"></ug-icon>
  <ug-icon library="brands" name="twitter"></ug-icon>
  <ug-icon library="brands" name="linkedin"></ug-icon>
</div>

<script type="module">
  import { registerIconLibrary } from '@ugent-ui/core';
  registerIconLibrary('brands', {
    resolver: (name) =>
      \`https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.1/svgs/brands/\${name}.svg\`,
    mutator: (svg) => svg.setAttribute('fill', 'currentColor')
  });
</script>`,
        expanded: true
      }
    }
  },
  render: () => {
    // Register the brand icons library
    void import('@shoelace-style/shoelace/dist/utilities/icon-library.js').then(
      ({ registerIconLibrary }) => {
        registerIconLibrary('brands', {
          resolver: (name) =>
            `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.1/svgs/brands/${name}.svg`,
          mutator: (svg) => svg.setAttribute('fill', 'currentColor')
        });
      }
    );

    return html`
      <div style="font-size: 24px;">
        <ug-icon library="brands" name="github"></ug-icon>
        <ug-icon library="brands" name="twitter"></ug-icon>
        <ug-icon library="brands" name="linkedin"></ug-icon>
      </div>
    `;
  }
};

// Events example
export const Events: Story = {
  parameters: {
    controls: { disable: true }
  },
  tags: ['!autodocs'],
  render: () => html`
    <ug-icon
      name="bell"
      @ug-load="${action('ug-load')}"
      @ug-error="${action('ug-error')}"
    ></ug-icon>
  `,
  play: async ({ canvasElement }) => {
    const icon = canvasElement.querySelector('ug-icon');
    await icon?.updateComplete;
    // Wait for the load event before setting the invalid src
    icon?.setAttribute('name', '');
    icon?.setAttribute('src', 'invalid-url.svg');
  }
};

// Frequently Used Icons
export const FrequentlyUsedIcons: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Navigating through the university’s applications can be much easier when it is clear what each icon represents. Below is a list of frequently used icons and their meanings to help users to find there way around more efficiently.'
      },
      canvas: {
        // This will remove the "show code" button
        // https://storybook.js.org/docs/api/doc-blocks/doc-block-canvas#sourcestate
        sourceState: 'none'
      }
    }
  },
  render: () =>
    html`<h4>General Actions</h4>
      <div class="ugIconCards">
        <div class="ugIconCard">
          <ug-icon name="pen-to-square" label="Edit"></ug-icon>
          <div class="ugIconCard__description">
            <p>Edit</p>
            <div class="ugIconCard__name">pen-to-square</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="trash" label="Delete"></ug-icon>
          <div class="ugIconCard__description">
            <p>Delete</p>
            <div class="ugIconCard__name">trash</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="plus" label="Add / Create / New"></ug-icon>
          <div class="ugIconCard__description">
            <p>Add / Create / New</p>
            <div class="ugIconCard__name">plus</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="ban" label="Cancel"></ug-icon>
          <div class="ugIconCard__description">
            <p>Cancel</p>
            <div class="ugIconCard__name">ban</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="eye" label="View"></ug-icon>
          <div class="ugIconCard__description">
            <p>View</p>
            <div class="ugIconCard__name">eye</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="floppy-disk" label="Save"></ug-icon>
          <div class="ugIconCard__description">
            <p>Save</p>
            <div class="ugIconCard__name">floppy-disk</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="down-to-line" label="Download"></ug-icon>
          <div class="ugIconCard__description">
            <p>Download</p>
            <div class="ugIconCard__name">down-to-line</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="up-to-line" label="Upload"></ug-icon>
          <div class="ugIconCard__description">
            <p>Upload</p>
            <div class="ugIconCard__name">up-to-line</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="magnifying-glass" label="Search"></ug-icon>
          <div class="ugIconCard__description">
            <p>Search</p>
            <div class="ugIconCard__name">magnifying-glass</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="lock" label="Lock"></ug-icon>
          <div class="ugIconCard__description">
            <p>Lock</p>
            <div class="ugIconCard__name">lock</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="lock-open" label="Unlock"></ug-icon>
          <div class="ugIconCard__description">
            <p>Unlock</p>
            <div class="ugIconCard__name">lock-open</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="gear" label="Settings"></ug-icon>
          <div class="ugIconCard__description">
            <p>Settings</p>
            <div class="ugIconCard__name">gear</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="print" label="Print"></ug-icon>
          <div class="ugIconCard__description">
            <p>Print</p>
            <div class="ugIconCard__name">print</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="share-from-square" label="Share"></ug-icon>
          <div class="ugIconCard__description">
            <p>Share</p>
            <div class="ugIconCard__name">share-from-square</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="copy" label="Copy"></ug-icon>
          <div class="ugIconCard__description">
            <p>Copy</p>
            <div class="ugIconCard__name">copy</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="paste" label="Paste"></ug-icon>
          <div class="ugIconCard__description">
            <p>Paste</p>
            <div class="ugIconCard__name">paste</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="scissors" label="Cut"></ug-icon>
          <div class="ugIconCard__description">
            <p>Cut</p>
            <div class="ugIconCard__name">scissors</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="link" label="Link"></ug-icon>
          <div class="ugIconCard__description">
            <p>Link</p>
            <div class="ugIconCard__name">link</div>
          </div>
        </div>
      </div>

      <h4>Status Indication</h4>
      <div class="ugIconCards">
        <div class="ugIconCard">
          <ug-icon name="check" label="Success"></ug-icon>
          <div class="ugIconCard__description">
            <p>Success</p>
            <div class="ugIconCard__name">check</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="triangle-exclamation" label="Warning"></ug-icon>
          <div class="ugIconCard__description">
            <p>Warning</p>
            <div class="ugIconCard__name">triangle-exclamation</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="octagon-xmark" label="Error"></ug-icon>
          <div class="ugIconCard__description">
            <p>Error</p>
            <div class="ugIconCard__name">octagon-xmark</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="info" label="Information"></ug-icon>
          <div class="ugIconCard__description">
            <p>Information</p>
            <div class="ugIconCard__name">info</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="loader" label="Loading"></ug-icon>
          <div class="ugIconCard__description">
            <p>Loading</p>
            <div class="ugIconCard__name">loader</div>
          </div>
        </div>
      </div>

      <h4>Navigation</h4>
      <div class="ugIconCards">
        <div class="ugIconCard">
          <ug-icon name="house" label="Home"></ug-icon>
          <div class="ugIconCard__description">
            <p>Home</p>
            <div class="ugIconCard__name">house</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="gauge-max" label="Dashboard"></ug-icon>
          <div class="ugIconCard__description">
            <p>Dashboard</p>
            <div class="ugIconCard__name">gauge-max</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="arrow-left" label="Back"></ug-icon>
          <div class="ugIconCard__description">
            <p>Back</p>
            <div class="ugIconCard__name">arrow-left</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="arrow-right" label="Forward"></ug-icon>
          <div class="ugIconCard__description">
            <p>Forward</p>
            <div class="ugIconCard__name">arrow-right</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="xmark" label="Close"></ug-icon>
          <div class="ugIconCard__description">
            <p>Close</p>
            <div class="ugIconCard__name">xmark</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="bars" label="Menu"></ug-icon>
          <div class="ugIconCard__description">
            <p>Menu</p>
            <div class="ugIconCard__name">bars</div>
          </div>
        </div>
      </div>

      <h4>Management and Administration</h4>
      <div class="ugIconCards">
        <div class="ugIconCard">
          <ug-icon name="user-gear" label="Manage User"></ug-icon>
          <div class="ugIconCard__description">
            <p>Manage User</p>
            <div class="ugIconCard__name">user-gear</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="users-gear" label="Manage Team"></ug-icon>
          <div class="ugIconCard__description">
            <p>Manage Team</p>
            <div class="ugIconCard__name">users-gear</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="user" label="Account"></ug-icon>
          <div class="ugIconCard__description">
            <p>Account</p>
            <div class="ugIconCard__name">user</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="user" label="Login"></ug-icon>
          <div class="ugIconCard__description">
            <p>Login</p>
            <div class="ugIconCard__name">user</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="door-open" label="Logout"></ug-icon>
          <div class="ugIconCard__description">
            <p>Logout</p>
            <div class="ugIconCard__name">door-open</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="user-plus" label="Add User"></ug-icon>
          <div class="ugIconCard__description">
            <p>Add User</p>
            <div class="ugIconCard__name">user-plus</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="user-minus" label="Remove User"></ug-icon>
          <div class="ugIconCard__description">
            <p>Remove User</p>
            <div class="ugIconCard__name">user-minus</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="circle-exclamation" label="Notifications"></ug-icon>
          <div class="ugIconCard__description">
            <p>Notifications</p>
            <div class="ugIconCard__name">circle-exclamation</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="message" label="Feedback"></ug-icon>
          <div class="ugIconCard__description">
            <p>Feedback</p>
            <div class="ugIconCard__name">message</div>
          </div>
        </div>
      </div>

      <h4>Lists and Forms</h4>
      <div class="ugIconCards">
        <div class="ugIconCard">
          <ug-icon name="filter" label="Filter"></ug-icon>
          <div class="ugIconCard__description">
            <p>Filter</p>
            <div class="ugIconCard__name">filter</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="filter-slash" label="Clear Filters"></ug-icon>
          <div class="ugIconCard__description">
            <p>Clear Filters</p>
            <div class="ugIconCard__name">filter-slash</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="bars-sort" label="Sort"></ug-icon>
          <div class="ugIconCard__description">
            <p>Sort</p>
            <div class="ugIconCard__name">bars-sort</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="arrow-up-short-wide" label="Sort Ascending"></ug-icon>
          <div class="ugIconCard__description">
            <p>Sort Ascending</p>
            <div class="ugIconCard__name">arrow-up-short-wide</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="arrow-down-wide-short" label="Sort Descending"></ug-icon>
          <div class="ugIconCard__description">
            <p>Sort Descending</p>
            <div class="ugIconCard__name">arrow-down-wide-short</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="list" label="List View"></ug-icon>
          <div class="ugIconCard__description">
            <p>List View</p>
            <div class="ugIconCard__name">list</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="grid-2" label="Grid View"></ug-icon>
          <div class="ugIconCard__description">
            <p>Grid View</p>
            <div class="ugIconCard__name">grid-2</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="arrow-down-left-and-arrow-up-right-to-center" label="Collapse"></ug-icon>
          <div class="ugIconCard__description">
            <p>Collapse</p>
            <div class="ugIconCard__name">arrow-down-left-and-arrow-up-right-to-center</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="arrow-up-right-and-arrow-down-left-from-center" label="Expand"></ug-icon>
          <div class="ugIconCard__description">
            <p>Expand</p>
            <div class="ugIconCard__name">arrow-up-right-and-arrow-down-left-from-center</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="circle-check" label="Select"></ug-icon>
          <div class="ugIconCard__description">
            <p>Select</p>
            <div class="ugIconCard__name">circle-check</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="file-export" label="Export"></ug-icon>
          <div class="ugIconCard__description">
            <p>Export</p>
            <div class="ugIconCard__name">file-export</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="file-import" label="Import"></ug-icon>
          <div class="ugIconCard__description">
            <p>Import</p>
            <div class="ugIconCard__name">file-import</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="paperclip-vertical" label="Attachment"></ug-icon>
          <div class="ugIconCard__description">
            <p>Attachment</p>
            <div class="ugIconCard__name">paperclip-vertical</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="paper-plane" label="Send"></ug-icon>
          <div class="ugIconCard__description">
            <p>Send</p>
            <div class="ugIconCard__name">paper-plane</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="trash-undo" label="Restore"></ug-icon>
          <div class="ugIconCard__description">
            <p>Restore</p>
            <div class="ugIconCard__name">trash-undo</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="arrow-rotate-left" label="Undo"></ug-icon>
          <div class="ugIconCard__description">
            <p>Undo</p>
            <div class="ugIconCard__name">arrow-rotate-left</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="arrows-rotate" label="Refresh"></ug-icon>
          <div class="ugIconCard__description">
            <p>Refresh</p>
            <div class="ugIconCard__name">arrows-rotate</div>
          </div>
        </div>
      </div>

      <h4>Multimedia</h4>
      <div class="ugIconCards">
        <div class="ugIconCard">
          <ug-icon name="backward" label="Previous"></ug-icon>
          <div class="ugIconCard__description">
            <p>Previous</p>
            <div class="ugIconCard__name">backward</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="forward" label="Next"></ug-icon>
          <div class="ugIconCard__description">
            <p>Next</p>
            <div class="ugIconCard__name">forward</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="play" label="Play"></ug-icon>
          <div class="ugIconCard__description">
            <p>Play</p>
            <div class="ugIconCard__name">play</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="pause" label="Pause"></ug-icon>
          <div class="ugIconCard__description">
            <p>Pause</p>
            <div class="ugIconCard__name">pause</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="stop" label="Stop"></ug-icon>
          <div class="ugIconCard__description">
            <p>Stop</p>
            <div class="ugIconCard__name">stop</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="expand" label="Fullscreen"></ug-icon>
          <div class="ugIconCard__description">
            <p>Fullscreen</p>
            <div class="ugIconCard__name">expand</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="compress" label="Exit Fullscreen"></ug-icon>
          <div class="ugIconCard__description">
            <p>Exit Fullscreen</p>
            <div class="ugIconCard__name">compress</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="volume-xmark" label="Volume Off / Mute"></ug-icon>
          <div class="ugIconCard__description">
            <p>Volume Off / Mute</p>
            <div class="ugIconCard__name">volume-xmark</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="volume" label="Volume On"></ug-icon>
          <div class="ugIconCard__description">
            <p>Volume On</p>
            <div class="ugIconCard__name">volume</div>
          </div>
        </div>
      </div>

      <h4>Social Actions</h4>
      <div class="ugIconCards">
        <div class="ugIconCard">
          <ug-icon name="thumbs-up" label="Like"></ug-icon>
          <div class="ugIconCard__description">
            <p>Like</p>
            <div class="ugIconCard__name">thumbs-up</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="thumbs-down" label="Dislike"></ug-icon>
          <div class="ugIconCard__description">
            <p>Dislike</p>
            <div class="ugIconCard__name">thumbs-down</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="messages" label="Comment"></ug-icon>
          <div class="ugIconCard__description">
            <p>Comment</p>
            <div class="ugIconCard__name">messages</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="star" label="Favorite"></ug-icon>
          <div class="ugIconCard__description">
            <p>Favorite</p>
            <div class="ugIconCard__name">star</div>
          </div>
        </div>
      </div>

      <h4>Specific Actions</h4>
      <div class="ugIconCards">
        <div class="ugIconCard">
          <ug-icon name="webhook" label="API call"></ug-icon>
          <div class="ugIconCard__description">
            <p>API Call</p>
            <div class="ugIconCard__name">webhook</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="rotate" label="Synchronise"></ug-icon>
          <div class="ugIconCard__description">
            <p>Synchronise</p>
            <div class="ugIconCard__name">rotate</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="question" label="Help"></ug-icon>
          <div class="ugIconCard__description">
            <p>Help</p>
            <div class="ugIconCard__name">question</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="ballot-check" label="Checklist"></ug-icon>
          <div class="ugIconCard__description">
            <p>Checklist</p>
            <div class="ugIconCard__name">ballot-check</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="calendar" label="Calendar"></ug-icon>
          <div class="ugIconCard__description">
            <p>Calendar</p>
            <div class="ugIconCard__name">calendar</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="memo" label="Logs"></ug-icon>
          <div class="ugIconCard__description">
            <p>Logs</p>
            <div class="ugIconCard__name">memo</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="thumbtack" label="Pin"></ug-icon>
          <div class="ugIconCard__description">
            <p>Pin</p>
            <div class="ugIconCard__name">thumbtack</div>
          </div>
        </div>
        <div class="ugIconCard">
          <ug-icon name="thumbtack-slash" label="Unpin"></ug-icon>
          <div class="ugIconCard__description">
            <p>Unpin</p>
            <div class="ugIconCard__name">thumbtack-slash</div>
          </div>
        </div>
      </div>

      <style>
        .ugIconCards {
          display: flex;
          flex-wrap: wrap;

          .ugIconCard {
            display: flex;
            flex-direction: row;
            background-color: var(--ug-color-neutral-50);
            width: 15rem;
            box-sizing: border-box;
            padding: 0.5rem 1rem;
            margin: 0.5rem;
            align-items: center;

            ug-icon {
              font-size: var(--ug-font-size-x-large);
              margin-right: 1rem;
            }
            .ugIconCard__description {
              font-size: var(--ug-font-size-small);
            }
            .ugIconCard__name {
              font-size: var(--ug-font-size-x-small);
              color: var(--ug-color-neutral-600);
            }
          }
        }
      </style>
    </div> `
};
