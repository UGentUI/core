// vite.config.js
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import copy from "rollup-plugin-copy";
import glob from "glob";

function getComponentEntries() {
  // Use glob to find all index.ts files in the lib/components directory
  const componentIndexEntries = glob.sync("lib/components/**/index.ts");
  const layoutIndexEntries = glob.sync("lib/layout/**/index.ts");
  const allIndexEntries= [...componentIndexEntries, ...layoutIndexEntries]

  // Create an entry object dynamically
  const entries = {
    index: resolve(__dirname, "lib/index.ts"),
  };

  allIndexEntries.forEach((file) => {
    // Extract the component name and create the key in the format: components/{component}/index
    const componentPath = file.replace("lib/", "").replace(".ts", "");
    entries[componentPath] = resolve(__dirname, file);
  });

  return entries;
}

export default defineConfig({
  build: {
    lib: {
      entry: getComponentEntries(),
      formats: ["es"],
    },
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
        assetFileNames: "[name][extname]", // Ensure correct naming for assets
        chunkFileNames: "chunks/[name].js",
      },
    },
  },
  optimizeDeps: {
    exclude: ["@shoelace-style/shoelace"], // Exclude Shoelace from pre-bundling
  },
  plugins: [
    dts({
      include: ["lib/**/*.ts"],
      exclude: ["lib/styles.ts"],
    }),
    copy({
      targets: [{ src: "lib/assets", dest: "dist/" }], // Copy assets
      hook: "writeBundle", // Ensure assets are copied after bundle is generated
    }),
    {
      name: "shoelace-prefix-replacer",
      enforce: "pre",
      transform(code, id) {
        if (id.includes("node_modules/@shoelace-style/shoelace")) {
          return code
            .replace(/sl-/g, "ug-")
            .replace(/'sl-/g, "'ug-")
            .replace(/"sl-/g, '"ug-');
        }
        return null;
      },
    },
  ],
});
