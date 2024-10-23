import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import "/lib/components/mutation-observer";

const meta: Meta = {
  title: "Components/MutationObserver",
  component: "ug-mutation-observer",
};

export default meta;

type Story = StoryObj;

export const MutationObserver: Story = {
  render: (args) => {
    return html`<div class="mutation-overview">
      <ug-mutation-observer attr="variant">
        <ug-button variant="primary">Click to mutate</ug-button>
      </ug-mutation-observer>

      <br />
      👆 Click the button and watch the console

      <script>
        const container = document.querySelector(".mutation-overview");
        const mutationObserver = container.querySelector(
          "ug-mutation-observer"
        );
        const button = container.querySelector("ug-button");
        const variants = ["primary", "success", "neutral", "warning", "danger"];
        let clicks = 0;

        // Change the button's variant attribute
        button.addEventListener("click", () => {
          clicks++;
          button.setAttribute("variant", variants[clicks % variants.length]);
        });

        // Log mutations
        mutationObserver.addEventListener("ug-mutation", (event) => {
          console.log(event.detail);
        });
      </script>

      <style>
        .mutation-overview ug-button {
          margin-bottom: 1rem;
        }
      </style>
    </div>`;
  },
};
