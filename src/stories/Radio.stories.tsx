import { Radio, type RadioProps } from '../components/Radio';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<RadioProps> = {
  component: Radio,
  title: 'Input/Radio',
};

export default meta;
type Story = StoryObj<RadioProps>;

export const Active: Story = {
  args: {
    label: 'Preferred contact method',
    options: [
      { label: 'Email', value: 'email' },
      { label: 'SMS', value: 'sms' },
      { label: 'Mail', value: 'mail', disabled: true },
    ],
    row: true,
    value: 'mail',
    onChange: console.log,
    tooltip: 'Select tooltip',
  },
};

export const Error: Story = {
  args: {
    label: 'Preferred contact method',
    options: [
      { label: 'Email', value: 'email' },
      { label: 'SMS', value: 'sms' },
      { label: 'Mail', value: 'mail', disabled: true },
    ],
    row: true,
    onChange: console.log,
    errorText: 'Please select an option',
  },
};
