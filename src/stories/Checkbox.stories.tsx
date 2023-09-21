import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../components/Checkbox';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Input/Checkbox',
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Checked: Story = {
  args: {
    checked: true,
    label: 'Checkbox text',
    size: 'sm',
    disabled: false,
    errorText: 'Error text',
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    label: 'Checkbox text',
    size: 'sm',
    disabled: true,
    errorText: 'Error text',
  },
};

export const Unchecked: Story = {
  args: {
    checked: false,
    label: 'Checkbox text',
    size: 'sm',
    disabled: false,
    errorText: 'Error text',
  },
};
export const DisabledUnchecked: Story = {
  args: {
    checked: false,
    label: 'Checkbox text',
    size: 'sm',
    disabled: true,
    errorText: 'Error text',
  },
};

export const Indeterminate: Story = {
  args: {
    checked: false,
    indeterminate: true,
    label: 'Checkbox text',
    size: 'sm',
    disabled: false,
    errorText: 'Error text',
  },
};

export const DisabledIndeterminate: Story = {
  args: {
    checked: false,
    indeterminate: true,
    label: 'Checkbox text',
    size: 'sm',
    disabled: true,
    errorText: 'Error text',
  },
};
