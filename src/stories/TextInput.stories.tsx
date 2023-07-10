import type { Meta, StoryObj } from '@storybook/react';
import TextInput from '../components/TextInput';

// import { ThemedApp } from './styles';

const meta: Meta<typeof TextInput> = {
  component: TextInput,
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Active: Story = {
  args: {
    label: 'Enter Full Name',
    placeHolder: 'Placeholder',
    isDisabled: false,
    showLeadingIcon: true,
    leadingIconName: 'email-outlined',
    hasError: false,
    hasHelperText: true,
    helperText: 'Please enter your full name',
    errorText: 'Full name is not valid.',
    value: 'Before You Bid',
  },
};
