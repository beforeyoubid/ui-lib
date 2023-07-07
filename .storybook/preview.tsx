import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemedApp } from '../src/stories/styles';
import { colorPalette } from '../src/mui-theme';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'byb',
      values: [
        {
          name: 'byb',
          value: colorPalette.lightL2,
        },
      ],
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    Story => (
      <ThemedApp>
        <Story />
      </ThemedApp>
    ),
  ],
};

export default preview;
