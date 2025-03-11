import { useOf, Source } from '@storybook/blocks';
import React from 'react';

export const ImportBlock: React.FC = () => {
  const context = useOf('meta');
  const importPath =
    context?.type === 'meta'
      ? context.csfFile?.meta?.parameters?.docs?.importPath
      : undefined;
  const dependencies =
    context?.type === 'meta'
      ? context.csfFile?.meta?.parameters?.docs?.dependencies
      : undefined;

  return importPath ? (
    <div>
      <h3 id="import">Import</h3>
      <p>To import this component using a script tag:</p>
      <Source
        code={`
//Import component
import '@ugent-ui/core/components/${importPath}/${importPath}.js';

//Required dependencies
${dependencies.map((dep) => `import '@ugent-ui/core/components/${dep}';`).join('\n')}
`}
        language="js"
        format={true}
      />
    </div>
  ) : null;
};
