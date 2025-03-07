import React from 'react';
import type { Meta as StorybookMeta } from '@storybook/web-components';

interface ExtendedMeta extends StorybookMeta {
  importPath?: string;
}

interface ImportBlockProps {
  of: {
    csfFile?: {
      meta?: {
        parameters?: {
          docs?: {
            importPath?: string;
          };
        };
      };
    };
  };
}

export const ImportBlock: React.FC<ImportBlockProps> = ({ of }) => {
  const importPath = of?.csfFile?.meta?.parameters?.docs?.importPath;

  return (
    <div className="import-block">
      <div>
        <code>{importPath}</code>
      </div>
    </div>
  );
};

interface CustomBlockProps {
  of: { default: ExtendedMeta };
}
