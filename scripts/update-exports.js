import fs from "fs-extra";
import path from "path";

const packageJsonPath = path.resolve("package.json");
const componentsDir = path.resolve("lib/components");

async function updatePackageJson() {
  try {
    // Log start of the operation
    console.log("Starting the package.json update process...");

    // Check if package.json exists
    if (!fs.existsSync(packageJsonPath)) {
      throw new Error("package.json file not found.");
    }
    console.log(`package.json found at ${packageJsonPath}`);

    // Load the existing package.json
    const packageJson = await fs.readJson(packageJsonPath);

    // Ensure the exports field exists
    if (!packageJson.exports) {
      packageJson.exports = {};
      console.log("Exports field not found in package.json. Creating one.");
    } else {
      console.log("Exports field already exists in package.json.");
    }

    // Add the main entry for the library
    packageJson.exports["."] = {
      types: "./dist/index.d.ts",
      import: "./dist/index.js",
    };
    console.log("Main entry added to exports.");

    // Add the style.css export (if it exists)
    const styleCssPath = path.resolve("dist/style.css");
    if (fs.existsSync(styleCssPath)) {
      packageJson.exports["./style.css"] = "./dist/style.css";
      console.log("style.css entry added to exports.");
    } else {
      console.log("style.css not found, skipping.");
    }

    // Check if the components directory exists
    if (!fs.existsSync(componentsDir)) {
      throw new Error(`Components directory not found at ${componentsDir}`);
    }
    console.log(`Components directory found at ${componentsDir}`);

    // Function to add component entries to the exports object
    const addComponentExports = (folderName) => {
      packageJson.exports[`./components/${folderName}`] = {
        types: `./dist/components/${folderName}/index.d.ts`,
        import: `./dist/components/${folderName}/index.js`,
      };
      console.log(`Added component ${folderName} to exports.`);
    };

    // Read the components directory and filter for folders
    const componentFolders = await fs.readdir(componentsDir);
    console.log("Component folders:", componentFolders);

    const directories = componentFolders.filter((folder) => {
      const folderPath = path.join(componentsDir, folder);
      return fs.statSync(folderPath).isDirectory();
    });

    if (directories.length === 0) {
      console.log("No component directories found.");
    } else {
      // Add each component to the exports
      directories.forEach(addComponentExports);
    }

    // Write the updated package.json back to the file system
    await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });
    console.log("package.json exports updated successfully!");
  } catch (error) {
    console.error("Error updating package.json exports:", error.message);
  }
}

// Run the update
updatePackageJson();
