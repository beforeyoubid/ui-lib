import { useState } from 'react';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment, { type Moment } from 'moment';
import { HomeQuestion } from 'tabler-icons-react';

import { Checkbox, Flex } from '../components';
import { DateField } from '../components/DatePicker/DateField';

import type { Meta, StoryObj } from '@storybook/react';

const DateFieldStory = (props: object) => {
  const [date, setDate] = useState<Maybe<moment.MomentInput>>(null);

  const handleChange = (value: unknown) => {
    if (!value) return;
    setDate(value as Moment);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DateField date={date} label="Inspection Date" format="D MMM, YYYY" required onChange={handleChange} {...props} />
    </LocalizationProvider>
  );
};

const meta: Meta<typeof DateField> = {
  component: DateFieldStory,
  title: 'Input/DateField',
  argTypes: {
    componentBelowTextField: {
      table: { disable: true },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DateField>;

export const InspectionLabel: Story = {
  args: {
    label: 'Inspection Date',
    isOptional: true,
    tooltip: 'The date the inspection was performed.',
    tooltipProps: {
      iconColor: 'dark75',
    },

    onChange: value => {
      console.log('Selected value:', value);
    },
  },
};

export const Disabled: Story = {
  args: {
    label: 'Due Date',
    date: moment('04/25/2000'),
    disabled: true,
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

export const HelperText: Story = {
  args: {
    label: 'Due Date',
    helperText: 'The date the project is due by',
  },
};

export const ErrorText: Story = {
  args: {
    label: 'Due Date',
    helperText: 'The date the project is due by',
    errorText: 'This project due date is in the past. Please pick a date in the future',
    date: moment('2000-01-01'),
    leadingIcon: HomeQuestion,
  },
};

export const CheckboxBelowTextField: Story = {
  args: {
    label: 'Due Date',
    helperText: 'The date the project is due by',
    errorText: 'This project due date is in the past. Please pick a date in the future',
    date: moment('2000-01-01'),
    leadingIcon: HomeQuestion,
    componentBelowTextField: (
      <Flex direction="row" align="center" gap={8}>
        <Checkbox size="sm" label="Not applicable" checked={false} onChange={console.log} />
      </Flex>
    ),
  },
};
