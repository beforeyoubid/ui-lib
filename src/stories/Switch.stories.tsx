import type { Meta, StoryObj } from '@storybook/react';
import { Switch, type SwitchProps } from '../components/Switch';

const meta: Meta<SwitchProps> = {
  component: Switch,
  title: 'Input/Switch',
};

export default meta;
type Story = StoryObj<SwitchProps>;

export const Active: Story = {
  args: {
    size: 'medium',
    checked: true,
    label: 'Switch selection',
    value: true,
    disabled: false,
    errorText: 'Error text',
    helperText: 'Switch helper text',
    required: true,
    automationKey: 'This is automation key',
  },
};
