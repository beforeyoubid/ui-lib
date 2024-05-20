import { IconButton, type IconButtonProps } from '../components/Button/IconButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<IconButtonProps> = {
  component: IconButton,
  title: 'Input/IconButton',
};

export default meta;
type Story = StoryObj<IconButtonProps>;

export const Narrow: Story = {
  args: {
    variant: 'primary',
    type: 'mint',
    size: 'sm',
    icon: 'Search',
    wrap: 'narrow',
    disabled: false,
  },
};

export const Wide: Story = {
  args: {
    variant: 'primary',
    type: 'mint',
    size: 'sm',
    icon: 'Search',
    wrap: 'wide',
    disabled: false,
  },
};
