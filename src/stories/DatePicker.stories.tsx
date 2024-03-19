import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { DatePicker } from '../components/DatePicker';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DatePicker> = {
  component: () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker label="Inspection Date" onChange={console.log} />
    </LocalizationProvider>
  ),
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
