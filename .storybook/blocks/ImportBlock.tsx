import React from 'react';

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
