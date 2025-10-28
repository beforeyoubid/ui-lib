import { TooltipButton } from '../components';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TooltipButton> = {
  component: TooltipButton,
  title: 'Input/TooltipButton',
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
    type: {
      control: 'select',
      options: ['mint', 'destructive', 'disabled', 'navy'],
    },
    size: {
      control: 'select',
      options: ['lg', 'md', 'sm'],
    },
    wrap: {
      control: 'select',
      options: ['wide', 'narrow'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof TooltipButton>;

export const WithTooltip: Story = {
  args: {
    variant: 'primary',
    type: 'mint',
    size: 'sm',
    title: 'Login',
    wrap: 'narrow',
    disabled: false,
    tooltip: 'Use your account credentials to log in',
  },
};
