import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

// Get the current file path (similar to __filename in CommonJS)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get the component name from the command-line argument
const componentName = process.argv[2];

// If no name is provided, exit the script
if (!componentName) {
  console.error("Please provide a component name.");
  process.exit(1);
}

// Function to convert PascalCase to kebab-case, handling component names like ButtonGroup to button-group and CopyButton to copy-button
const toKebabCase = (str) => {
  return str
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2") // Insert hyphen between lowercase/number and uppercase
    .replace(/([A-Z])([A-Z][a-z0-9])/g, "$1-$2") // Handle cases like 'IDButton' to 'id-button'
    .toLowerCase();
};

// Generate component
const generateComponent = async () => {
  const componentTag = `ug-${toKebabCase(componentName)}`;
  const componentFolderName = toKebabCase(componentName);

  // Define the directory and file path for the component (inside lib)
  const targetDir = path.join(
    __dirname,
    "../lib/components",
    componentFolderName
  );
  const componentPath = path.join(targetDir, "index.ts");

  // Component template
  const componentTemplate = (name, tag) => `
import Sl${name} from "@shoelace-style/shoelace/dist/components/${toKebabCase(
    name
  )}/${toKebabCase(name)}.component.js";
import { customElement } from "lit/decorators.js";

@customElement("${tag}")
export class Ug${name} extends Sl${name} {}

declare global {
  interface HTMLElementTagNameMap {
    "${tag}": Ug${name};
  }
}
`;

  // Ensure the component directory exists
  await fs.ensureDir(targetDir);

  // Write the component file
  await fs.writeFile(
    componentPath,
    componentTemplate(componentName, componentTag),
    "utf8"
  );

  console.log(`Component ${componentName} generated in ${targetDir}`);
};

// Generate Storybook story
const generateStory = async () => {
  const componentTag = `ug-${toKebabCase(componentName)}`;
  const componentFolderName = toKebabCase(componentName);

  // Define the directory and file path for the story (inside the stories folder)
  const storyFileName = `UG${componentName}.stories.ts`;
  const targetDir = path.join(__dirname, "../stories");
  const storyFilePath = path.join(targetDir, storyFileName);

  // Story template
  const storyTemplate = (name, tag, folderName) => `
import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import "/lib/components/${folderName}";

const meta: Meta = {
  title: "Components/${name}",
  component: "${tag}",
};

export default meta;

type Story = StoryObj;

export const ${name}: Story = {
  render: (args) => {
    return html\`<${tag}></${tag}>\`;
  },
};
`;

  // Ensure the stories directory exists
  await fs.ensureDir(targetDir);

  // Write the story file
  await fs.writeFile(
    storyFilePath,
    storyTemplate(componentName, componentTag, componentFolderName),
    "utf8"
  );

  console.log(`${storyFileName} generated in ${targetDir}`);
};

// Run both the component and story generation
const generateComponentAndStory = async () => {
  await generateComponent();
  await generateStory();
};

// Execute the combined function
generateComponentAndStory().catch((error) => {
  console.error("Error during generation:", error);
});
