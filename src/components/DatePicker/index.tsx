import type React from 'react';
import { useCallback, useState } from 'react';

import { type DateView } from '@mui/x-date-pickers';
import { type Moment } from 'moment';

import { Flex } from '../Flex';
import { Icon } from '../Icon';
import { Typography } from '../Typography';

import CalendarFooter from './CalendarFooter';
import CalendarHeader from './CalendarHeader';
import { StyledDatePicker } from './styles';

export type DatePickerProps = {
  label: string;
  format?: string;
  views?: DateView[];
  required?: boolean;
  date: Moment;
  dateMonth: string;
  dateYear: string;
  incrementMonth: () => void;
  decrementMonth: () => void;
  incrementYear: () => void;
  decrementYear: () => void;
  onChange: (value: Maybe<Moment>) => void;
};

export const DatePicker: React.FC<DatePickerProps> = ({
  label,
  date,
  dateMonth,
  dateYear,
  required = false,
  format = 'MMMM D, YYYY',
  views = ['year', 'month', 'day'],
  incrementMonth,
  decrementMonth,
  incrementYear,
  decrementYear,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentView, setCurrentView] = useState<DateView>('day');

  const toggleMonthView = useCallback(() => {
    setCurrentView(currView => (currView === 'month' ? 'day' : 'month'));
  }, []);

  const toggleYearView = useCallback(() => {
    setCurrentView(currView => (currView === 'year' ? 'day' : 'year'));
  }, []);

  const toggleOpen = useCallback(() => {
    setIsOpen(curr => !curr);
  }, []);

  const onClose = useCallback(() => {
    const nextView = views.length === 1 ? views[0] : 'day';
    setCurrentView(nextView);
  }, [views]);

  return (
    <Flex direction="column" width="100%" gap={5} style={{ position: 'relative' }}>
      <Flex direction="row" align="flex-start" gap={2}>
        <Typography class="medium" size="base" color="dark90">
          {label}
        </Typography>
        {required && (
          <Typography class="bold" size="xs" color="mint60">
            *
          </Typography>
        )}
      </Flex>
      <StyledDatePicker
        value={date}
        openTo={currentView}
        open={isOpen}
        format={format}
        views={views}
        onClose={onClose}
        onChange={onChange}
        slots={{
          layout: props => <CalendarFooter toggleCalendar={toggleOpen}>{props.children}</CalendarFooter>,
          openPickerIcon: () => (
            <Flex onClick={toggleOpen}>
              <Icon icon="CalendarEvent" color="dark75" size={24} />
            </Flex>
          ),
          calendarHeader: () => (
            <CalendarHeader
              selectedMonth={dateMonth}
              selectedYear={dateYear}
              goToPreviousMonth={decrementMonth}
              goToNextMonth={incrementMonth}
              goToPreviousYear={decrementYear}
              goToNextYear={incrementYear}
              toggleMonthView={toggleMonthView}
              toggleYearView={toggleYearView}
            />
          ),
        }}
      />
    </Flex>
  );
};
