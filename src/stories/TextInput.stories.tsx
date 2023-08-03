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
    label: 'Enter Full Name',
  },
};
