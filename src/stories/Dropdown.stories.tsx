import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '../components/Dropdown';

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  title: 'Input/Dropdown',
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Active: Story = {
  args: {
    label: 'Enter Full Name',
    placeholder: 'Senior Engineer',
    errorText: 'Full name is not valid.',
    options: ['Ben', 'Bailey', 'Akram', 'Shiwam', 'Mitch', 'Cayo', 'Dima'].map(v => ({ label: v, value: v })),
    value: 'Ben',
    disabled: false,
    fullWidth: true,
    required: true,
    onChange: value => {
      console.log('Selected value:', value);
    },
  },
};
