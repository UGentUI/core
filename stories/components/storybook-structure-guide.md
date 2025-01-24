# Storybook Story Structure Guide

## Required Imports

```ts
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import { action } from '@storybook/addon-actions';
import { userEvent, within } from '@storybook/testing-library';
import '/lib/components/component-name';
```

## Basic Story Configuration

```ts
const meta: Meta = {
  title: 'Components/ComponentName',
  component: 'ug-component-name',
  parameters: {
    docs: {
      subtitle: 'Brief description of the component',
      description: {
        component: 'Detailed description of the component and its usage.'
      },
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
    // Properties, Slots, Events, Methods
  }
};

export default meta;

type Story = StoryObj;

// The first story should be a default story with controls all properties and slots.
export const ComponentName: Story = {};

// Additional stories should demonstrate specific use cases, variants, and edge cases
// (e.g., Disabled, Loading, Error States, Size Variants, etc.)
export const Variants: Story = {
  // Disable controls for this story because its a predefined state of the component
    controls: { disable: true }
  },
};

// If the component has events create a story that demonstrates them
// This should be a play function that simulates user interactions
export const ComponentNameWithEvents: Story = {
  //Disable auto-docs for this story because the play function does not work
  tags: ['!autodocs']
};
```

## argTypes

argTypes should be organized into these categories:

1. **Properties:** Properties that can be set on the component
2. **Slots:** Content slots available in the component
3. **Events:** Events emitted by the component
4. **Methods:** Methods available on the component instance

### argTypes Documentation Structure

```ts
...
argTypes: {
  propertyName: {
    // The type of control in Storybook UI
    control: 'text' | 'boolean' | 'select' | 'number' | etc.,

    // Optional: Override how the property name appears in the controls panel
    name: 'property-name',

    // Detailed description of the property, add <br>`reflects: true` to mark the property as reflected
    description: 'What this property does and how to use it, optional: <br>`reflects: true`',

    table: {
      // Categorization in Storybook UI
      category: 'Properties',
      // Type information with optional details
      type: {
        summary: 'string' | 'boolean' | etc.,
      },
      // Default value information
      defaultValue: {
        summary: 'default value'
      }
    }
  },
  slotName: {
    // The type of control in Storybook UI
    control: 'text' | 'boolean' | 'select' | 'number' | etc.,

    // Optional: Override how the slot name appears in the controls panel
    name: 'slot-name',

    // Detailed description of the slot
    description: 'What this slot does and how to use it',

    table: {
      // Categorization in Storybook UI
      category: 'Slots',
      // Type information with optional details
      type: {
        summary: 'slot',
      },
      defaultValue: {
        // defaultValue.summary should be undefined to hide the - in the auto-docs table
        summary: undefined
      }
    }
  },
  eventName: {
    // Events should not be controlled in the Storybook UI
    control: false,

    // Optional: Override how the event name appears in the controls panel
    name: 'event-name',

    // Connect the event to Storybook's Actions panel
    action: 'event-name',

    // Detailed description of the event
    description: 'What this event does and how to use it',

    table: {
      // Categorization in Storybook UI
      category: 'Events',
      // Type information with optional details
      type: {
        summary: 'CustomEvent',
      },
      defaultValue: {
        // defaultValue.summary should be undefined to hide the - in the auto-docs table
        summary: undefined
      }
    }
  },
  methodName: {
    // Methods should not be controlled in the Storybook UI
    control: false,

    // Override how the method name appears in the controls panel
    name: 'methodName()',

    // Detailed description of the method
    description: 'What this method does and how to use it',

    table: {
      // Categorization in Storybook UI
      category: 'Methods',
      type: {
        summary: 'Method',
      },
      defaultValue: {
        // defaultValue.summary should be undefined to hide the - in the auto-docs table
        summary: undefined
      }
    }
  }
}
```

## Story Definition Structure

```ts
export const StoryName: Story = {
  // Default arguments for the story
  args: {
    propertyName: '',
    slotName: ''
  },

  // Component rendering logic
  render: (args) => html`
    <ug-component-name property-name="${args.propertyName}">
      <div slot="slot-name">${args.slotName}</div>
    </ug-component-name>
  `,

  // Story-specific parameters
  parameters: {
    docs: {
      description: {
        story: 'Description of this specific story variant'
      }
    },
    // Optional: Disable controls for this story
    controls: { disable: true }
  },
  // Optional: Disable auto-docs for this story
  tags: ['!autodocs']
};
```

### Create variations of a story based on the default Story

This pattern allows you to create story variations while inheriting the base configuration and only specifying what changes. This reduces code duplication and maintains consistency across related stories.

```ts
// Create a variation by spreading the default story and overriding specific args
export const ComponentNameVariation: Story = {
  ...ComponentName, // Inherit all story configuration
  args: {
    ...ComponentName.args, // Keep all default args
    label: 'Variation' // Override only what needs to change
  }
};
```

### Event Handling

Events in Storybook can be monitored using the Actions panel. This helps developers understand when and how events are dispatched from components.

```ts
render: (args) => html`
  <ug-component-name
    @ug-event-name="${action('ug-event-name')}"
  ></ug-component-name>
`;
```

### Interactive Testing

You can also test event handling and methods using play functions, which simulate user interactions:

```ts
export const ComponentNameWithEvents: Story = {
  render: () => html`
    <ug-component-name
      @ug-event-name="${action('ug-event-name')}"
    ></ug-component-name>
  `,
  play: async ({ canvasElement }) => {
    const element = canvasElement.querySelector('ug-component-name');
    await element.updateComplete;

    // Simulate user interaction
    await userEvent.click(element);

    // Trigger component method that dispatches event
    await element.methodName();
  }
};
```

## Storybook Structure Decisions

1. The first Story should always be a default interactive story with controls for all properties and slots
2. Category order: Properties, Slots, Events and Methods. Note that the order of the properties in the args of the default story will determine the order in the auto-docs table
3. If the component has reflected properties add "<br>`reflects: true`" at the end of the description
4. Create variations of the default Story to demonstrate different states or configurations, disable controls for these Stories
5. If the component has events, create a Story ComponentNameWithEvents that demonstrates them using a play function, disable controls for this Story and add the `!autodocs` tag as it should not be included in the auto-docs table
6. If the component has methods include them in the play function of the ComponentNameWithEvents story to test them, they should trigger the events
