import type { Meta, StoryObj } from '@storybook/react';
import ButtonComponent, { ButtonComponentProps } from '../components/Button';
import { Typography } from '../components/Typography';

const meta: Meta<ButtonComponentProps> = {
  component: ButtonComponent,
};

export default meta;
type Story = StoryObj<ButtonComponentProps>;

export const Active: Story = {
  args: {
    primaryVariant: 'primary',
    secondaryVariant: 'mint',
    size: 'large',
    title: 'Login',
    disabled: false,
    leadingIcon: 'email-outlined',
    trailingIcon: 'email-outlined ',
    children: (
      <Typography class="medium" size="base" color="lightWhite">
        Login
      </Typography>
    ),
  },
};
