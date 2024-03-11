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
    id: 'date-picker-with-inspection-date-label',
    label: 'Inspection Date',
    value: '02-06-2024',
    onChange: value => {
      console.log('Selected value:', value);
    },
  },
};

export const ExpirationLabel: Story = {
  args: {
    id: 'date-picker-with-expiration-date-label',
    label: 'Expiration Date',
    value: '02-06-2023',
    onChange: value => {
      console.log('Selected value:', value);
    },
  },
};
