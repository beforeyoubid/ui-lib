import { Typography } from '../components/Typography';

import type { Meta, StoryObj } from '@storybook/react';

// import { ThemedApp } from './styles';

const meta: Meta<typeof Typography> = {
  component: Typography,
  title: 'Display/Typography',
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Primary: Story = {
  args: {
    color: 'dark100',
    class: 'roman',
    size: 'base',
    children: 'Hi!',
  },
};

export const Bold: Story = {
  args: {
    color: 'dark100',
    class: 'bold',
    size: 'xl',
    children: 'Hi!',
  },
};
