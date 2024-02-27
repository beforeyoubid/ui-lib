import type { Meta, StoryObj } from '@storybook/react';
import { Radio, type RadioProps } from '../components/Radio';

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
