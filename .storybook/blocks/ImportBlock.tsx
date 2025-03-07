import React from 'react';
import type { Meta as StorybookMeta } from '@storybook/web-components';

import { DocsContext } from '@storybook/addon-docs/blocks';

interface ExtendedMeta extends StorybookMeta {
  importPath?: string;
}

interface ImportBlockProps {
  of: { default?: ExtendedMeta };
}

export const ImportBlock: React.FC<ImportBlockProps> = ({ children }) => {
  const context = React.useContext(DocsContext);
  const { parameters } = context || {};
  const importPath = parameters?.of?.default?.importPath;

  return (
    <div>
      MARYNA
      <div className="import-block">
        <div>
          MARYNA
          <code>{importPath}</code>
        </div>
      </div>
      {/* Render the story's default content */}
      {children}
    </div>
  );
};

interface CustomBlockProps {
  of: { default: ExtendedMeta };
}

export const CustomBlock: React.FC<CustomBlockProps> = ({ of }) => {
  const importPath = of.default.importPath;

  return (
    <div className="custom-block">
      <div>
        <code>{importPath}</code>
      </div>
    </div>
  );
};
