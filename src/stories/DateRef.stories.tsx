import { useRef, useState, useCallback } from 'react';

import { useTheme } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment, { type Moment } from 'moment';

import { Button, DatePicker, Flex } from '../components';

import type { Meta, StoryObj } from '@storybook/react';

const DateRefStory = () => {
  const theme = useTheme();
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
  const ref = useRef<HTMLInputElement>(null);
  return (
    <Flex width="100%" direction="row" gap={theme.spacing(2.5)} align="flex-end">
      <div style={{ width: '300px' }}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            date={date}
            label="Inspection Date"
            format="DD/MM/YYYY"
            views={['day', 'month', 'year']}
            required
            incrementMonth={incrementMonth}
            decrementMonth={decrementMonth}
            incrementYear={incrementYear}
            decrementYear={decrementYear}
            onChange={handleChange}
            tooltip="The date the inspection was performed."
            ref={ref}
          />
        </LocalizationProvider>
      </div>
      <Button
        variant="primary"
        type="mint"
        size="md"
        wrap="narrow"
        title="Focus"
        onClick={() => ref.current?.focus()}
      />
    </Flex>
  );
};

const meta: Meta<typeof DateRefStory> = {
  component: DateRefStory,
  title: 'Input/DatePicker',
};

export default meta;
type Story = StoryObj<typeof DateRefStory>;

export const Focus: Story = {};
