import moment from 'moment';

import { DatePicker } from '../components/DatePicker';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: 'Input/DatePicker',
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Active: Story = {
  args: {
    label: 'Inspection ETA',
    dateValue: moment('09-02-2023', 'DD-MM-YYYY').format('YYYY-MM-DD'),
  },
};
