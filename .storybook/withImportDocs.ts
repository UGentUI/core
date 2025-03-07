import { addons } from '@storybook/addons';
import { Parameters } from '@storybook/types';

export const withImportDocs = (storyFn, context) => {
  alert('withImportDocs is running!'); // Debugging alert

  const { parameters } = context;
  const importEnabled = parameters.import;
  const componentName = parameters.componentName;

  if (importEnabled && componentName) {
    const importText = `
## Imports

If you’re using the autoloader or the traditional loader, you can ignore this section. Otherwise, feel free to use any of the following snippets to cherry-pick this component.

To import this component using a bundler:

\`\`\`js
import '@shoelace-style/shoelace/dist/components/${componentName}/${componentName}.js';
\`\`\`
    `;

    const channel = addons.getChannel();
    channel.emit('storybook/docs/add-text', importText);
  }

  return storyFn();
};
