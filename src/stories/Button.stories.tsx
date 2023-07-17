import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '../components/Button';
import { Typography } from '../components/Typography';

const meta: Meta<ButtonProps> = {
  component: Button,
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Active: Story = {
  args: {
    primaryVariant: 'primary',
    secondaryVariant: 'mint',
    size: 'large',
    title: 'Login',
    disabled: false,
    leadingIcon: 'Mail',
    trailingIcon: 'Mail',
    children: (
      <Typography class="medium" size="base" color="lightWhite">
        Login
      </Typography>
    ),
  },
};
