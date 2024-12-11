import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/dialog';
import '/lib/components/button';

const meta: Meta = {
  title: 'Components/Dialog',
  component: 'ug-dialog'
};

export default meta;

type Story = StoryObj;

export const Dialog: Story = {
  render: () => {
    return html`<ug-dialog label="Dialog" class="dialog-overview">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <ug-button slot="footer" variant="primary">Close</ug-button>
      </ug-dialog>

      <ug-button>Open Dialog</ug-button>

      <script>
        const dialog = document.querySelector('.dialog-overview');
        const openButton = dialog.nextElementSibling;
        const closeButton = dialog.querySelector('ug-button[slot="footer"]');

        openButton.addEventListener('click', () => dialog.show());
        closeButton.addEventListener('click', () => dialog.hide());
      </script>`;
  }
};
