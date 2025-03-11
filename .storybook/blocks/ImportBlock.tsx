import { useOf, Source } from '@storybook/blocks';
import React from 'react';

export const ImportBlock: React.FC = () => {
  const context = useOf('meta');
  console.log(context?.type);
  if (context?.type === 'meta') {
    const shouldImport = context.csfFile?.meta?.parameters?.docs?.importSection;
    const componentName = context.csfFile?.meta?.component;
    const dependencies = context.csfFile?.meta?.parameters?.docs?.dependencies;

    console.log('Got here ' + shouldImport);

    //prettier-ignore
    return shouldImport ? (
      <div>
        <h3 id="import">Import</h3>
        <p>To import this component using a script tag:</p>
        <Source
          code={`
//Import component
import '@ugent-ui/core/components/${componentName}/${componentName}.js';
${ dependencies && dependencies.length > 0 ? `
//Required dependencies
${dependencies.map((dep) => `import '@ugent-ui/core/components/${dep}';`).join('\n')}
`
    : ''
}
`}
          language="js"
          format={true}
        />
        {/* Conditionally render the dependencies section if there are any dependencies */}
        {dependencies && dependencies.length > 0 && (
          <div>
            <h4>Dependencies</h4>
            <p>This component requires:</p>
            <ul>
              {dependencies.map((dep) => (
                <li key={dep}>
                  <code>{`<ug-${dep}>`}</code>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    ) : null;
  }
  return null;
};
