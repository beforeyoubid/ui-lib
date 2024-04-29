import { Select } from '../components/Select';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'Input/Select',
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Active: Story = {
  args: {
    label: 'State',
    placeholder: 'Please select your state',
    errorText: 'You must select a state.',
    options: ['NSW', 'QLD', 'VIC', 'SA', 'WA', 'TAS', 'NT', 'ACT'].map(v => ({ label: v, value: v })),
    value: { label: 'NSW', value: 'NSW' },
    disabled: false,
    required: true,
    onChange: value => {
      console.log('Selected value:', value);
    },
    tooltip: 'Select tooltip',
  },
};
