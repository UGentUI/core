import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/badge';

const meta: Meta = {
  title: 'Components/Badge',
  component: 'ug-badge',
  parameters: {
    docs: {
      subtitle:
        'A compact UI element for highlighting key information such as notifications, statuses, or counts.',
      description: {
        component: `
### Overview

The **Badge** component is a compact UI element used to display concise information. It can convey notification counts, status indicators, or category tags, often in conjunction with other UI elements like buttons, avatars, or menu items.

### When to use
- **Notification Counts**: For example, displaying unread messages or alerts.
- **Status Indicators**: Such as "active", "offline", or "new."
- **Category Tags**: Highlighting labels like "ZAP", "AAP", or "ATP."

### Variants and States

...

### Accessibility

#### Semantic Usage
Use badges as supplementary content, ensuring they don’t replace important information conveyed elsewhere. 

For example, if the badge represents a notification count, ensure the main notification icon or button has a meaningful label:

\`\`\`html
<button aria-label="Notifications (3)">
    Notifications
    <ug-badge>3</ug-badge>
</button>
\`\`\`

#### Screen Reader Support

Provide an accessible name for badges when the visual information is not obvious to screen readers, for xample: 

\`\`\`html
<ug-badge aria-label="3 unread notifications">3</ug-badge>
\`\`\`


#### Dynamic Content Updates

If the badge updates dynamically (e.g., notification count), use ARIA live regions to announce changes to screen readers:

\`\`\`html
<ug-badge aria-live="polite">3</ug-badge>
\`\`\`


### Best practices

...

### Related components

...
        `
      }
    }
  }
};

export default meta;

type Story = StoryObj;

export const Badge: Story = {
  render: () => {
    return html`<ug-badge>Badge</ug-badge>`;
  }
};
