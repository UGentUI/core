import type { Preview } from "@storybook/web-components";
//import "@shoelace-style/shoelace/dist/themes/light.css";
import "@ugent-ui/css-reset/dist/reset.css";
import "../lib/styles/core.scss";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path.js";
setBasePath("/lib");

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ["Introduction", "Components", "*"], // Custom order
        method: "alphabetical",
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ["autodocs"],
};

export default preview;
