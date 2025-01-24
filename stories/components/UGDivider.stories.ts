import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/divider';
import '/lib/components/menu';
import '/lib/components/menu-item';

// Utility function to remove default attributes
const removeDefaultAttributes = (code: string): string => {
  return code.replace(/\s* vertical=""/g, ' vertical');
};

const meta: Meta = {
  title: 'Components/Divider',
  component: 'ug-divider',
  parameters: {
    docs: {
      subtitle: 'Dividers are used to visually separate or group elements.',
      source: {
        format: true,
        transform: (code: string) => removeDefaultAttributes(code)
      }
    }
  },
  argTypes: {
    // Attributes (set in HTML)

    // Properties (accessed via JavaScript)
    vertical: {
      control: false,
      description:
        'Draws the divider in a vertical orientation.<br>`reflects: true`',
      table: {
        category: 'properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },

    // CSS Properties
    color: {
      control: false,
      name: '--color',
      description: 'The color of the divider.',
      table: {
        category: 'CSS properties',
        type: { summary: 'string' }
      }
    },
    width: {
      control: false,
      name: '--width',
      description: 'The width of the divider.',
      table: {
        category: 'CSS properties',
        type: { summary: 'string' }
      }
    },
    spacing: {
      control: false,
      name: '--spacing',
      description: 'The spacing of the divider.',
      table: {
        category: 'CSS properties',
        type: { summary: 'string' }
      }
    }

    // Slots

    // Events

    // Methods
  }
};

export default meta;

type Story = StoryObj;

export const Divider: Story = {
  args: {
    vertical: false
  },
  parameters: {
    docs: {
      disable: false,
      description: {
        story: `A default divider.`
      }
    }
  },
  render: (args) => {
    return html`<ug-divider ?vertical="${args.vertical}"></ug-divider>`;
  }
};

export const Vertical: Story = {
  args: {
    ...Divider.args,
    vertical: true
  },
  parameters: {
    docs: {
      disable: false,
      description: {
        story: `Add the vertical attribute to draw the divider in a vertical orientation. The divider will span the full height of its container. Vertical dividers work especially well inside of a flex container.`
      }
    }
  },
  render: (args) => {
    return html`<div style="display: flex; align-items: center; height: 2rem;">
      First
      <ug-divider ?vertical="${args.vertical}"></ug-divider>
      Middle
      <ug-divider ?vertical="${args.vertical}"></ug-divider>
      Last
    </div>`;
  }
};

export const MenuDividers: Story = {
  args: {
    ...Divider.args
  },
  parameters: {
    docs: {
      name: 'Menu Dividers',
      disable: false,
      description: {
        story: `Use dividers in menus to visually group menu items.`
      }
    }
  },
  render: () => {
    return html`<ug-menu style="max-width: 200px;">
      <ug-menu-item value="1">Option 1</ug-menu-item>
      <ug-menu-item value="2">Option 2</ug-menu-item>
      <ug-menu-item value="3">Option 3</ug-menu-item>
      <ug-divider></ug-divider>
      <ug-menu-item value="4">Option 4</ug-menu-item>
      <ug-menu-item value="5">Option 5</ug-menu-item>
      <ug-menu-item value="6">Option 6</ug-menu-item>
    </ug-menu>`;
  }
};

export const Color: Story = {
  args: {
    ...Divider.args
  },
  parameters: {
    docs: {
      disable: false,
      description: {
        story: `Use the <code>--color</code> custom property to change the color of the divider.`
      }
    }
  },
  render: () => {
    return html`<ug-divider style="--color: tomato;"></ug-divider>`;
  }
};

export const Width: Story = {
  args: {
    ...Divider.args
  },
  parameters: {
    docs: {
      disable: false,
      description: {
        story: `Use the <code>--width</code> custom property to change the width of the divider.`
      }
    }
  },
  render: () => {
    return html`<ug-divider style="--width: 0.3rem;"></ug-divider>`;
  }
};

export const Spacing: Story = {
  args: {
    ...Divider.args
  },
  parameters: {
    docs: {
      disable: false,
      description: {
        story: `Use the <code>--spacing</code> custom property to change the amount of space between the divider and it’s neighboring elements.`
      }
    }
  },
  render: () => {
    return html`<div style="text-align: center;">
      Above
      <ug-divider style="--spacing: 2rem;"></ug-divider>
      Below
    </div>`;
  }
};
