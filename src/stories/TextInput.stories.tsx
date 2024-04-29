import { Checkbox } from '../components';
import { LinkButton } from '../components/LinkButton';
import { TextInput } from '../components/TextInput';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextInput> = {
  component: TextInput,
  title: 'Input/TextInput',
  argTypes: {
    componentBelowTextField: { table: { disable: true } },
    ref: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Active: Story = {
  args: {
    label: 'Label',
    required: true,
    helperText: 'This is hint text to help the user.',
    errorText: 'Error text',
    tooltip: 'This is a tooltip',
    isOptional: false,
    placeholder: 'Placeholder text',
    tooltipProps: {
      iconName: 'InfoCircle',
      iconColor: 'dark75',
      iconSize: 12,
    },
  },
};

export const TextAdornment: Story = {
  args: {
    label: 'Label',
    startAdornment: 'byb.au/',
    endAdornment: (
      <LinkButton type="grey" size="md" title="Search" leadingIcon="Search" underline={false} onClick={console.log} />
    ),
    showStartAdornmentBorder: true,
    showEndAdornmentBorder: true,
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

export const TextFieldWithCheckbox: Story = {
  args: {
    label: 'Something here',
    required: true,

    isOptional: false,
    leadingIconName: 'ChartPie',
    componentBelowTextField: <Checkbox label="I'm not really sure" size="sm" checked={false} onChange={console.log} />,
  },
};
