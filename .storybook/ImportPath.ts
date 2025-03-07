import { useOf } from '@storybook/blocks';
import * as React from 'react';
import React__default, {
  ComponentProps,
  FunctionComponent,
  ReactNode,
  FC,
  PropsWithChildren,
  Context,
  ReactElement
} from 'react';
import { DocsContextProps } from 'storybook/internal/types';

type Of = Parameters<DocsContextProps['resolveOf']>[0];

interface ImportPathProps {
  children?: ReactNode;
  /**
   * Specify where to get the subtitle from. If not specified, the subtitle will be extracted from
   * the meta of the attached CSF file.
   */
  of?: Of;
}
declare const ImportPath: FunctionComponent<ImportPathProps>;

export { ImportPath };
