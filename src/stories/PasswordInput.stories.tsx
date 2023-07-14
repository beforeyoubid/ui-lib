import type { Meta, StoryObj } from '@storybook/react';
import { PasswordInput } from '../components/PasswordInput';
const meta: Meta<typeof PasswordInput> = {
  component: PasswordInput,
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Active: Story = {
  args: {
    label: 'I am text input',
    placeHolder: 'Placeholder',
    leadingIconName: 'EyeCheck',
    helperText: 'Please enter your password.',
    value: 'Ben1234',
    errorText: 'Password didnt match',
  },
};
