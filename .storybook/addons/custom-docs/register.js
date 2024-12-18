// .storybook/addons/my-custom-addon/register.js
import { addons, types, useParameter, useStorybookState  } from '@storybook/manager-api';
import React from 'react';
import { Markdown } from '@storybook/blocks';


addons.register('story-doc-addon', (api) => {
  addons.add('story-doc-addon/panel', {
    type: types.PANEL,
    title: 'Story documentation',
    render: ({ active, key }) => {
      // Get the current Storybook state
      const state = useStorybookState();

      // Access parameters for the current story
      const storyParams = useParameter('docs', {});
      return active ? (
        <div style={{ padding: '1rem'}}>
          {/* Use Storybook's internal Markdown rendering */}
          {storyParams.description?.component ? (
            <Markdown>{storyParams.description.component}</Markdown> // Render Markdown
          ) : (
            <p>No extra documentation available</p>
          )}
        </div>
      ) : null;
    },
  });
});