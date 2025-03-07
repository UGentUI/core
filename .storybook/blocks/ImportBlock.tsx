import React from 'react';
import type { Meta as StorybookMeta } from '@storybook/web-components';

import { DocsContext } from '@storybook/addon-docs/blocks';

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
    <div>
      MARYNA
      <div className="import-block">
        <div>
          MARYNA
          <code>{importPath}</code>
        </div>
      </div>
      {/* Render the story's default content */}
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
