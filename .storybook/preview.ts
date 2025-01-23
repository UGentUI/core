import type { Preview } from "@storybook/web-components";
import "@ugent-ui/css-reset/dist/reset.css";
import "../lib/styles/core.scss";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path.js";
import { registerIconLibrary } from "@shoelace-style/shoelace/dist/utilities/icon-library.js";
setBasePath("https://cdn.jsdelivr.net/npm/@ugent-ui/core/dist/");


registerIconLibrary('fa', {
  resolver: name => `lib/assets/icons/sharp-regular/${name}.svg`,
  mutator: svg => svg.setAttribute('fill', 'currentColor')
});

// Function to apply the selected theme by setting the data-color-mode attribute
const applyTheme = (theme: string) => {
  const root = document.documentElement;
  if (theme === "dark") {
    root.setAttribute("data-color-mode", "dark");
  } else {
    root.setAttribute("data-color-mode", "light");
  }
};

const preview: Preview = {
  parameters: {
    backgrounds: {
      options: {
        dark: { name: "Black", value: "#000" },
        light: { name: "White", value: "#fff" },
      },
    },
    options: {
      storySort: {
        order: ["Introduction", "Components", "*"], // Custom order
        method: "alphabetical",
      },
    },
  },
  tags: ["autodocs"],
  globalTypes: {
    theme: {
      description: "Global theme for components",
      toolbar: {
        icon: "mirror",
        items: [
          { value: "light", title: "Light Theme", right: "default" },
          { value: "dark", title: "Dark Theme" },
        ],
      },
    },
  },
  initialGlobals: {
    theme: "light",
    backgrounds: { value: "light" },
  },
  decorators: [
    (Story, context) => {
      const selectedTheme = context.globals.theme || "light";
      applyTheme(selectedTheme);
      if (selectedTheme === "dark") {
        context.globals.backgrounds = { value: "dark" };
      } else {
        context.globals.backgrounds = { value: "light" };
      }
      // Render the story
      return Story();
    },
  ],
};

export default preview;
