import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

// Get the __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Async function to handle the file creation
async function generateComponent() {
  // Get the component name from the command-line argument
  const componentName = process.argv[2];

  // If no name is provided, exit the script
  if (!componentName) {
    console.error("Please provide a component name.");
    process.exit(1);
  }

  // Convert the component name to a kebab-case custom element name and lowercase folder name
  const componentTag = `ug-${componentName
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .toLowerCase()}`;
  const componentFolderName = componentName.toLowerCase();

  // Define the directory where you want to generate the component (inside lib)
  const targetDir = path.join(
    __dirname,
    "../lib/components",
    componentFolderName
  );

  // Define the template for the component file
  const componentTemplate = (name, tag) => `
import Sl${name} from "@shoelace-style/shoelace/dist/components/${name.toLowerCase()}/${name.toLowerCase()}.component.js";
import { customElement } from "lit/decorators.js";

@customElement("${tag}")
export class Ug${name} extends Sl${name} {}

declare global {
  interface HTMLElementTagNameMap {
    "${tag}": Ug${name};
  }
}
`;

  try {
    // Create the target subfolder for the component (lowercase folder)
    await fs.ensureDir(targetDir);

    // Generate the component file inside the subfolder
    const componentPath = path.join(targetDir, "index.ts");
    await fs.writeFile(
      componentPath,
      componentTemplate(componentName, componentTag),
      "utf8"
    );

    console.log(`${componentName} component generated in ${targetDir}`);
  } catch (err) {
    console.error("Error generating component:", err);
  }
}

// Run the async function
generateComponent();
