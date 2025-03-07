import { useOf, Source } from '@storybook/blocks';
import React from 'react';

export const ImportBlock: React.FC = () => {
  const context = useOf('meta');
  const importPath =
    context?.type === 'meta'
      ? context.csfFile?.meta?.parameters?.docs?.importPath
      : undefined;

  return importPath ? (
    <div className="import-block">
      <h3>Importing</h3>
      <p>To import this component using a bundler:</p>
      <Source code={importPath} language="html" />
    </div>
  ) : null;
};
