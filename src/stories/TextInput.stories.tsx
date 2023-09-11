import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from '../components/TextInput';
import { LinkButton } from '../components/LinkButton';

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

export const TextAdornment: Story = {
  args: {
    label: 'Label',
    startAdornment: 'byb.au/',
    endAdornment: <LinkButton type="grey" size="md" title="Search" leadingIcon="Search" underline={false} />,
  },
};

export const Email: Story = {
  args: {
    label: 'Email',
    required: true,

    isOptional: false,
    leadingIconName: 'Mail',
  },
};
