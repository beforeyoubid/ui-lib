import type { Meta, StoryObj } from '@storybook/react';

import { NavigationButton } from '../components/NavigationButton';
// import { ThemedApp } from './styles';

const meta: Meta<typeof NavigationButton> = {
  component: NavigationButton,
  title: 'Navigation/NavigationButton',
};

export default meta;
type Story = StoryObj<typeof NavigationButton>;

export const Primary: Story = {
  args: {
    label: 'My Account',
    selected: false,
  },
};

export const Selected: Story = {
  args: {
    label: 'My Account',
    selected: true,
  },
};
