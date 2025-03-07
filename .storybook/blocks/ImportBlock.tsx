import React from 'react';
import type { Meta as StorybookMeta } from '@storybook/web-components';

interface ExtendedMeta extends StorybookMeta {
  importPath?: string;
}

interface ImportBlockProps {
  of: { default?: ExtendedMeta };
}

export const ImportBlock: React.FC<ImportBlockProps> = ({ of }) => {
  const importPath = of?.default?.importPath;

  return (
    <div className="import-block">
      <div>
        MARYNA
        <code>{importPath}</code>
      </div>
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
