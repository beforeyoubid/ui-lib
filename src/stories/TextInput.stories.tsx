import type { Meta, StoryObj } from '@storybook/react';
import TextInput from '../components/TextInput';

const meta: Meta<typeof TextInput> = {
  component: TextInput,
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Active: Story = {
  args: {
    label: 'Enter Full Name',
    placeHolder: 'Placeholder',
    leadingIconName: 'Mail',
    helperText: 'Please enter your full name',
    errorText: 'Full name is not valid.',
    value: 'Before You Bid',
  },
};
