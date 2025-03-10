import { useOf, Source } from '@storybook/blocks';
import React from 'react';
import '/lib/components/tab-group';
import '/lib/components/tab-panel';
import '/lib/components/tab';
import '/lib/components/icon';
import '/lib/components/icon-button';

export const ImportBlock: React.FC = () => {
  const context = useOf('meta');
  const importPath =
    context?.type === 'meta'
      ? context.csfFile?.meta?.parameters?.docs?.importPath
      : undefined;

  return importPath ? (
    <div>
      <ug-tab-group>
        <ug-tab
          slot="nav"
          panel="script"
          role="tab"
          aria-disabled="false"
          aria-selected="true"
          id="ug-tab-1"
          tabindex="0"
          aria-controls="ug-tab-panel-1"
          active=""
        >
          Script
        </ug-tab>
        <ug-tab
          slot="nav"
          panel="import"
          role="tab"
          aria-disabled="false"
          aria-selected="false"
          id="ug-tab-2"
          tabindex="-1"
          aria-controls="ug-tab-panel-2"
        >
          Import
        </ug-tab>
        <ug-tab
          slot="nav"
          panel="bundler"
          role="tab"
          aria-disabled="false"
          aria-selected="false"
          id="ug-tab-3"
          tabindex="-1"
          aria-controls="ug-tab-panel-3"
        >
          Bundler
        </ug-tab>
        <ug-tab
          slot="nav"
          panel="react"
          role="tab"
          aria-disabled="false"
          aria-selected="false"
          id="ug-tab-4"
          tabindex="-1"
          aria-controls="ug-tab-panel-4"
        >
          React
        </ug-tab>

        <ug-tab-panel
          name="script"
          id="ug-tab-panel-1"
          role="tabpanel"
          aria-hidden="false"
          aria-labelledby="ug-tab-1"
          active=""
        >
          <p>
            To import this component from
            <a
              href="https://www.jsdelivr.com/package/npm/@shoelace-style/shoelace"
              class="external-link"
              rel="noopener noreferrer"
              target="_blank"
            >
              the CDN
            </a>
            using a script tag:
          </p>
          <pre>
            <code class="language-html" id="code-block-1064">
              <span class="token tag">
                <span class="token tag">
                  <span class="token punctuation">&lt;</span>script
                </span>{' '}
                <span class="token attr-name">type</span>
                <span class="token attr-value">
                  <span class="token punctuation attr-equals">=</span>
                  <span class="token punctuation">"</span>module
                  <span class="token punctuation">"</span>
                </span>{' '}
                <span class="token attr-name">src</span>
                <span class="token attr-value">
                  <span class="token punctuation attr-equals">=</span>
                  <span class="token punctuation">"</span>
                  https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/tree/tree.js
                  <span class="token punctuation">"</span>
                </span>
                <span class="token punctuation">&gt;</span>
              </span>
              <span class="token script"></span>
              <span class="token tag">
                <span class="token tag">
                  <span class="token punctuation">&lt;/</span>script
                </span>
                <span class="token punctuation">&gt;</span>
              </span>
            </code>
            <ug-copy-button
              class="copy-code-button"
              from="code-block-1064"
            ></ug-copy-button>
          </pre>
        </ug-tab-panel>

        <ug-tab-panel
          name="import"
          id="ug-tab-panel-2"
          role="tabpanel"
          aria-hidden="true"
          aria-labelledby="ug-tab-2"
        >
          <p>
            To import this component from
            <a
              href="https://www.jsdelivr.com/package/npm/@shoelace-style/shoelace"
              class="external-link"
              rel="noopener noreferrer"
              target="_blank"
            >
              the CDN
            </a>
            using a JavaScript import:
          </p>
          <pre>
            <code class="language-js" id="code-block-1065">
              <span class="token keyword">import</span>{' '}
              <span class="token string">
                'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.0/cdn/components/tree/tree.js'
              </span>
              <span class="token punctuation">;</span>
            </code>
            <ug-copy-button
              class="copy-code-button"
              from="code-block-1065"
            ></ug-copy-button>
          </pre>
        </ug-tab-panel>

        <ug-tab-panel
          name="bundler"
          id="ug-tab-panel-3"
          role="tabpanel"
          aria-hidden="true"
          aria-labelledby="ug-tab-3"
        >
          <p>
            To import this component using{' '}
            <a href="/getting-started/installation#bundling">a bundler</a>:
          </p>
          <pre>
            <code class="language-js" id="code-block-1066">
              <span class="token keyword">import</span>{' '}
              <span class="token string">
                '@shoelace-style/shoelace/dist/components/tree/tree.js'
              </span>
              <span class="token punctuation">;</span>
            </code>
            <ug-copy-button
              class="copy-code-button"
              from="code-block-1066"
            ></ug-copy-button>
          </pre>
        </ug-tab-panel>

        <ug-tab-panel
          name="react"
          id="ug-tab-panel-4"
          role="tabpanel"
          aria-hidden="true"
          aria-labelledby="ug-tab-4"
        >
          <p>
            To import this component as a{' '}
            <a href="/frameworks/react">React component</a>:
          </p>
          <pre>
            <code class="language-js" id="code-block-1067">
              <span class="token keyword">import</span> SlTree{' '}
              <span class="token keyword">from</span>{' '}
              <span class="token string">
                '@shoelace-style/shoelace/dist/react/tree'
              </span>
              <span class="token punctuation">;</span>
            </code>
            <ug-copy-button
              class="copy-code-button"
              from="code-block-1067"
            ></ug-copy-button>
          </pre>
        </ug-tab-panel>
      </ug-tab-group>

      <div className="import-block">
        <h3>Importing</h3>
        <p>To import this component using a bundler:</p>
        <Source code={importPath} language="html" />
      </div>
    </div>
  ) : null;
};
