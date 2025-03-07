import React from 'react';
import type { Meta as StorybookMeta } from '@storybook/web-components';

interface ExtendedMeta extends StorybookMeta {
  importPath?: string;
}

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
