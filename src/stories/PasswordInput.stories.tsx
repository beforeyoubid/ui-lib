import type { Meta, StoryObj } from '@storybook/react';
import PasswordInput from '../components/PasswordInput';

// import { ThemedApp } from './styles';

const meta: Meta<typeof PasswordInput> = {
  component: PasswordInput,
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Active: Story = {
  args: {
    label: 'I am text input',
    placeHolder: 'Placeholder',
    isDisabled: false,
    showLeadingIcon: true,
    leadingIconName: 'email-outlined',
    hasError: false,
    hasHelperText: true,
    helperText: 'Please neter your password.',
    value: 'Ben1234',
    errorText: 'Password didnt match',
  },
};
