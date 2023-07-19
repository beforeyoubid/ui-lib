import type { Meta, StoryObj } from '@storybook/react';
import { DropdownComponent } from '../components/Dropdown';

const meta: Meta<typeof DropdownComponent> = {
  component: DropdownComponent,
};

export default meta;
type Story = StoryObj<typeof DropdownComponent>;

export const Active: Story = {
  args: {
    label: 'Enter Full Name',
    placeholder: 'Senior Engineer',
    errorText: 'Full name is not valid.',
    options: ['Ben', 'Bailey', 'Akram', 'Shiwam', 'Mitch', 'Cayo', 'Dima'].map(v => ({ label: v, value: v })),
    value: 'Ben',
    disabled: false,
    fullWidth: true,
    onChange: value => {
      console.log('Selected value:', value);
    },
  },
};
