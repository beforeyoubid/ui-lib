import type React from 'react';
import { useCallback, useState } from 'react';

import { type DateView } from '@mui/x-date-pickers';

import { Flex } from '../Flex';
import { Icon } from '../Icon';
import { Typography } from '../Typography';

import CalendarFooter from './CalendarFooter';
import CalendarHeader from './CalendarHeader';
import { StyledDatePicker } from './styles';

type DatePickerProps = {
  label: string;
  date: unknown;
  dateMonth: string;
  dateYear: string;
  incrementMonth: () => void;
  decrementMonth: () => void;
  incrementYear: () => void;
  decrementYear: () => void;
  onChange: (value: unknown) => void;
};

export const DatePicker: React.FC<DatePickerProps> = ({
  label,
  date,
  dateMonth,
  dateYear,
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

  return (
    <Flex direction="column" gap={5}>
      <Typography class="medium" size="base" color="dark90">
        {label}
      </Typography>
      <StyledDatePicker
        value={date}
        openTo={currentView}
        open={isOpen}
        format="MMMM D, YYYY"
        views={['year', 'month', 'day']}
        onClose={() => setCurrentView('day')}
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
