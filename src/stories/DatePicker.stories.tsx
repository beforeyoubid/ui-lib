import { DatePicker } from '../components/DatePicker';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: 'Input/DatePicker',
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const InspectionLabel: Story = {
  args: {
    label: 'Inspection Date',
    onChange: value => {
      console.log('Selected value:', value);
    },
  },
};

export const ExpirationLabel: Story = {
  args: {
    label: 'Expiration Date',
    onChange: value => {
      console.log('Selected value:', value);
    },
  },
};
