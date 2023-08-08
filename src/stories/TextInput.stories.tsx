import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from '../components/TextInput';

const meta: Meta<typeof TextInput> = {
  component: TextInput,
  title: 'Input/TextInput',
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Active: Story = {
  args: {
    label: 'Label',
    required: true,
    helperText: 'This is hint text to help the user.',
    errorText: 'Error text',

    isOptional: false,
    placeholder: 'Placeholder text',
  },
};
