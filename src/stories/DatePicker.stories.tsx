import { useCallback, useState } from 'react';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment, { type Moment } from 'moment';

import { DatePicker } from '../components/DatePicker';

import type { Meta, StoryObj } from '@storybook/react';

const DatePickerStory = () => {
  const [date, setDate] = useState<Maybe<moment.MomentInput>>(null);

  const handleChange = (value: unknown) => {
    if (!value) return;
    setDate(value as Moment);
  };

  const incrementMonth = useCallback(() => {
    setDate(curr => moment(curr).add(1, 'month').set('day', 1));
  }, []);

  const decrementMonth = useCallback(() => {
    setDate(curr => moment(curr).subtract(1, 'month').set('day', 1));
  }, []);

  const incrementYear = useCallback(() => {
    setDate(curr => moment(curr).add(1, 'year').set('day', 1));
  }, []);

  const decrementYear = useCallback(() => {
    setDate(curr => moment(curr).subtract(1, 'year').set('day', 1));
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        date={date}
        label="Inspection Date"
        format="D MMM, YYYY"
        views={['day', 'month', 'year']}
        required
        incrementMonth={incrementMonth}
        decrementMonth={decrementMonth}
        incrementYear={incrementYear}
        decrementYear={decrementYear}
        onChange={handleChange}
        tooltip="The date the inspection was performed."
      />
    </LocalizationProvider>
  );
};

const meta: Meta<typeof DatePicker> = {
  component: DatePickerStory,
  title: 'Input/DatePicker',
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

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

export const ExpirationLabel: Story = {
  args: {
    label: 'Expiration Date',
    onChange: value => {
      console.log('Selected value:', value);
    },
  },
};
