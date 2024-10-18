import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import "/lib/components/drawer";
import "/lib/components/button";

const meta: Meta = {
  title: "Components/Drawer",
  component: "ug-drawer",
};

export default meta;

type Story = StoryObj;

export const Drawer: Story = {
  render: (args) => {
    return html`<ug-drawer label="Drawer" class="drawer-overview">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <ug-button slot="footer" variant="primary">Close</ug-button>
      </ug-drawer>

      <ug-button>Open Drawer</ug-button>

      <script>
        const drawer = document.querySelector(".drawer-overview");
        const openButton = drawer.nextElementSibling;
        const closeButton = drawer.querySelector(
          'ug-button[variant="primary"]'
        );

        openButton.addEventListener("click", () => drawer.show());
        closeButton.addEventListener("click", () => drawer.hide());
      </script>`;
  },
};
