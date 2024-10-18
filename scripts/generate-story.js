import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

// Get the current file path (similar to __filename in CommonJS)
const __filename = fileURLToPath(import.meta.url);
// Get the directory name (similar to __dirname in CommonJS)
const __dirname = path.dirname(__filename);

// Get the component name from the command-line argument
const componentName = process.argv[2];

// If no name is provided, exit the script
if (!componentName) {
  console.error("Please provide a component name.");
  process.exit(1);
}

// Function to convert PascalCase to kebab-case
const toKebabCase = (str) => {
  return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
};

// Convert the component name to kebab-case for the tag
const componentTag = `ug-${toKebabCase(componentName)}`;
const componentFolderName = toKebabCase(componentName);

// Define the file name and path (inside the stories folder)
const storyFileName = `UG${componentName}.stories.ts`;
const targetDir = path.join(__dirname, "../stories");
const storyFilePath = path.join(targetDir, storyFileName);

// Define the template for the story file
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

// Create the target directory if it doesn't exist
fs.ensureDirSync(targetDir);

// Write the story file
fs.writeFileSync(
  storyFilePath,
  storyTemplate(componentName, componentTag, componentFolderName),
  "utf8"
);

console.log(`${storyFileName} generated in ${targetDir}`);
