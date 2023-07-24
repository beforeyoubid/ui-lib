import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '../components/Button';

const meta: Meta<ButtonProps> = {
  component: Button,
  title: 'Input/Button',
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Active: Story = {
  args: {
    variant: 'primary',
    type: 'disabled',
    size: 'sm',
    title: 'Login',
    wrap: 'narrow',
    disabled: false,
    // leadingIcon: 'Mail',
  },
};
