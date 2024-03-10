import moment from 'moment';

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
    dateValue: moment('09-02-2023').format('YYYY-MM-DD'),
    lableSize: 'normal',
    textFieldSize: 'medium',
  },
};

export const ExpirationLabel: Story = {
  args: {
    label: 'Expiration Date',
    dateValue: moment('09-02-2023').format('YYYY-MM-DD'),
    lableSize: 'normal',
    textFieldSize: 'medium',
  },
};
