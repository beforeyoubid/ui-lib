import { PasswordInput } from '../components/PasswordInput';

import type { Meta, StoryObj } from '@storybook/react';
const meta: Meta<typeof PasswordInput> = {
  component: PasswordInput,
  title: 'Input/PasswordInput',
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Active: Story = {
  args: {
    label: 'I am text input',
    placeholder: 'Placeholder',
    leadingIconName: 'EyeCheck',
    helperText: 'Please enter your password.',
    value: 'Ben1234',
    errorText: 'Password didnt match',
  },
};
