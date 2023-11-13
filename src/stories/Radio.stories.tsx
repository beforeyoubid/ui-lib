import type { Meta, StoryObj } from '@storybook/react';
import { Radio, RadioProps } from '../components/Radio';

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
    defaultValue: 'mail',
  },
};
