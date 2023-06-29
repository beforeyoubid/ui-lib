import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemedApp } from '../src/stories/styles';

const preview: Preview = {
  parameters: {
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
