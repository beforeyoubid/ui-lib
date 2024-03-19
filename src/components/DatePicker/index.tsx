import type React from 'react';
import { useCallback, useState } from 'react';

import { type DateView } from '@mui/x-date-pickers';
import dayjs, { type Dayjs } from 'dayjs';

import { Flex } from '../Flex';
import { Icon } from '../Icon';
import { Typography } from '../Typography';

import CalendarFooter from './CalendarFooter';
import CalendarHeader from './CalendarHeader';
import { StyledDatePicker } from './styles';

type DatePickerProps = {
  label: string;
  initialDate?: string;
  onChange: (date: string) => void;
};

export const DatePicker: React.FC<DatePickerProps> = ({ label, initialDate, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentView, setCurrentView] = useState<DateView>('day');
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs(initialDate));

  const goToPreviousMonth = useCallback(() => setSelectedDate(curr => curr.subtract(1, 'month').set('date', 1)), []);

  const goToNextMonth = useCallback(() => setSelectedDate(curr => curr.add(1, 'month').set('date', 1)), []);

  const goToPreviousYear = useCallback(() => setSelectedDate(curr => curr.subtract(1, 'year').set('date', 1)), []);

  const goToNextYear = useCallback(() => setSelectedDate(curr => curr.add(1, 'year').set('date', 1)), []);

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
        value={selectedDate}
        openTo={currentView}
        open={isOpen}
        format="MMMM D, YYYY"
        views={['year', 'month', 'day']}
        onClose={() => setCurrentView('day')}
        onChange={(value: unknown) => {
          if (!(value as any)?.['$isDayjsObject']) return;

          const date = value as Dayjs;
          setSelectedDate(date);
          onChange(date.format('DD-MM-YYYY'));
        }}
        slots={{
          layout: props => <CalendarFooter toggleCalendar={toggleOpen}>{props.children}</CalendarFooter>,
          openPickerIcon: () => (
            <Flex onClick={toggleOpen}>
              <Icon icon="CalendarEvent" color="dark75" size={24} />
            </Flex>
          ),
          calendarHeader: () => (
            <CalendarHeader
              selectedMonth={selectedDate.format('MMM')}
              selectedYear={selectedDate.format('YYYY')}
              goToPreviousMonth={goToPreviousMonth}
              goToNextMonth={goToNextMonth}
              goToPreviousYear={goToPreviousYear}
              goToNextYear={goToNextYear}
              toggleMonthView={toggleMonthView}
              toggleYearView={toggleYearView}
            />
          ),
        }}
      />
    </Flex>
  );
};
