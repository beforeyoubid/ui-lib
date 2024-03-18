import { useCallback, useState } from 'react';

import { useTheme } from '@mui/material';
import { LocalizationProvider, type DateView } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { type Dayjs } from 'dayjs';

import { Flex } from '../Flex';
import { Icon } from '../Icon';
import { Typography } from '../Typography';

import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  FlexToggle,
  StyledDatePicker,
  StyledPaper,
  FlexCalendarFooter,
} from './styles';

export const DatePicker = ({ label }: { label: string }) => {
  const theme = useTheme();

  const [currentView, setCurrentView] = useState<DateView>('day');
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());

  const renderOpenPickerIcon = () => <Icon icon="CalendarEvent" color="dark75" size={24} />;

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

  const renderCalendarHeader = (props: any) => {
    console.log('props:', props);
    return (
      <Flex direction="row" justify="space-between" align="center" style={{ padding: theme.spacing(2.5) }}>
        <Flex direction="row">
          <ChevronLeft onClick={goToPreviousMonth} />

          <FlexToggle>
            <Typography class="bold" size="base" color="dark90">
              {dayjs(props?.currentMonth?.['$d']).format('MMM')}
            </Typography>
            <ChevronDown onClick={toggleMonthView} />
          </FlexToggle>

          <ChevronRight onClick={goToNextMonth} />
        </Flex>

        <Flex direction="row">
          <ChevronLeft onClick={goToPreviousYear} />

          <FlexToggle>
            <Typography class="bold" size="base" color="dark90">
              {dayjs(props?.currentMonth?.['$d']).format('YYYY')}
            </Typography>
            <ChevronDown onClick={toggleYearView} />
          </FlexToggle>

          <ChevronRight onClick={goToNextYear} />
        </Flex>
      </Flex>
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Flex direction="column" gap={5}>
        <Typography class="medium" size="base" color="dark90">
          {label}
        </Typography>
        <StyledDatePicker
          slots={{
            openPickerIcon: renderOpenPickerIcon,
            calendarHeader: renderCalendarHeader,
            layout: props => (
              <StyledPaper elevation={0}>
                {props?.children}
                <FlexCalendarFooter>
                  <Typography underline class="bold" size="sm" color="mint75">
                    Cancel
                  </Typography>
                </FlexCalendarFooter>
              </StyledPaper>
            ),
          }}
          value={selectedDate}
          openTo={currentView}
          views={['year', 'month', 'day']}
          onClose={() => setCurrentView('day')}
        />
      </Flex>
    </LocalizationProvider>
  );
};
