import { useOf, Source, Markdown } from '@storybook/blocks';
import React from 'react';
import { SupportedLanguage } from 'storybook/internal/components';

interface StoryMetaContext {
  type: 'meta';
  csfFile?: {
    meta?: {
      component?: string;
      parameters?: {
        docs?: {
          importSection?: boolean;
          dependencies?: string[];
        };
      };
    };
  };
}

/**
 * ImportBlock component displays import instructions for UI components in Storybook.
 * It shows the main component import statement and any required dependencies.
 *
 * @returns React component that renders import instructions and dependencies
 * @example
 * <ImportBlock />
 */
export const ImportBlock: React.FC = () => {
  const context = useOf('meta') as StoryMetaContext;

  if (context?.type !== 'meta') {
    return null;
  }

  const shouldImport = context.csfFile?.meta?.parameters?.docs?.importSection;
  const componentName = context.csfFile?.meta?.component;
  const dependencies =
    context.csfFile?.meta?.parameters?.docs?.dependencies ?? [];

  if (!shouldImport || !componentName) {
    return null;
  }

  const hasDependencies = dependencies.length > 0;
  const dependenciesText = hasDependencies
    ? ' and its required dependencies'
    : '';

  return (
    <div>
      <Markdown>{`### Importing
After [installing the package](/docs/introduction--docs), import the component${dependenciesText}:`}</Markdown>

      <Source
        code={`
// Import component
import '@ugent-ui/core/components/${componentName}';
${hasDependencies ? '\n// Required dependencies' : ''}${dependencies
          .map((dep) => `\nimport '@ugent-ui/core/components/${dep}';`)
          .join('')}
`}
        language={'js' as SupportedLanguage}
        format={true}
      />
    </div>
  );
};
