import { Dropdown } from '../components/Dropdown';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  title: 'Input/Dropdown',
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Active: Story = {
  args: {
    label: 'State',
    placeholder: 'Please select your state',
    errorText: 'You must select a state.',
    options: ['NSW', 'QLD', 'VIC', 'SA', 'WA', 'TAS', 'NT', 'ACT'].map(v => ({ label: v, value: v })),
    value: 'NSW',
    disabled: false,
    fullWidth: true,
    required: true,
    onChange: value => {
      console.log('Selected value:', value);
    },
  },
};
