import { Switch, type SwitchProps } from '../components/Switch';

import type { Meta, StoryObj } from '@storybook/react';

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
    tooltip: 'Select tooltip',
  },
};
