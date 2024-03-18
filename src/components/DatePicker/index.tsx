import { useCallback, useState } from 'react';

import { useTheme, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DatePicker as DP, LocalizationProvider, type DateView } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { type Dayjs } from 'dayjs';

import { Flex } from '../Flex';
import { Icon } from '../Icon';
import { Typography } from '../Typography';

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
          <Flex onClick={goToPreviousMonth} style={{ cursor: 'pointer' }}>
            <Icon icon="ChevronLeft" color="dark90" size={16} />
          </Flex>

          <Flex
            direction="row"
            align="center"
            gap={4}
            style={{ marginLeft: theme.spacing(2), marginRight: theme.spacing(1.5) }}
          >
            <Typography class="bold" size="base" color="dark90">
              {dayjs(props?.currentMonth?.['$d']).format('MMM')}
            </Typography>
            <Flex style={{ cursor: 'pointer' }} onClick={toggleMonthView}>
              <Icon icon="ChevronDown" color="dark90" size={16} />
            </Flex>
          </Flex>

          <Flex onClick={goToNextMonth} style={{ cursor: 'pointer' }}>
            <Icon icon="ChevronRight" color="dark90" size={16} />
          </Flex>
        </Flex>

        <Flex direction="row">
          <Flex onClick={goToPreviousYear} style={{ cursor: 'pointer' }}>
            <Icon icon="ChevronLeft" color="dark90" size={16} />
          </Flex>

          <Flex
            direction="row"
            align="center"
            gap={4}
            style={{ marginLeft: theme.spacing(2), marginRight: theme.spacing(1.5) }}
          >
            <Typography class="bold" size="base" color="dark90">
              {dayjs(props?.currentMonth?.['$d']).format('YYYY')}
            </Typography>
            <Flex style={{ cursor: 'pointer' }} onClick={toggleYearView}>
              <Icon icon="ChevronDown" color="dark90" size={16} />
            </Flex>
          </Flex>

          <Flex onClick={goToNextYear} style={{ cursor: 'pointer' }}>
            <Icon icon="ChevronRight" color="dark90" size={16} />
          </Flex>
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
                <Flex
                  direction="row"
                  justify="flex-end"
                  style={{
                    paddingBottom: theme.spacing(2),
                    paddingRight: theme.spacing(2.75),
                  }}
                >
                  <Typography underline class="bold" size="sm" color="mint75">
                    Cancel
                  </Typography>
                </Flex>
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

const StyledDatePicker = styled(DP)(({ theme }) => ({
  '&.MuiFormControl-root .MuiInputBase-root': {
    borderColor: theme.palette.colors.dark45,
    borderWidth: '1px',
    borderStyle: 'solid',
    backgroundColor: theme.palette.colors.lightWhite,
  },
  '&.MuiFormControl-root .MuiInputBase-input::placeholder': {
    color: 'transparent',
  },
  '&.MuiFormControl-root .MuiInputBase-input': {
    fontFamily: theme.typography.fonts['roman'],
    fontSize: theme.typography.size.base.fontSize,
    color: theme.palette.colors.dark90,
  },
  '&.MuiFormControl-root fieldset.MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.colors.dark45,
    borderWidth: '1px',
    borderStyle: 'solid',
  },
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(1),
  ' .MuiDayCalendar-weekDayLabel': {
    fontFamily: theme.typography.fonts['bold'],
    fontSize: theme.typography.size.sm.fontSize,
    color: theme.palette.colors.dark90,
  },
  ' .MuiPickersDay-root': {
    fontFamily: theme.typography.fonts['roman'],
    fontSize: theme.typography.size.sm.fontSize,
    color: theme.palette.colors.dark90,
  },
  ' .MuiDayCalendar-weekContainer .MuiPickersDay-today': {
    border: `1px solid ${theme.palette.colors.mint60}`,
  },
  ' .MuiDayCalendar-weekContainer .Mui-selected': {
    fontFamily: theme.typography.fonts['roman'],
    fontSize: theme.typography.size.sm.fontSize,
    color: theme.palette.colors.lightWhite,
    backgroundColor: theme.palette.colors.mint60,
  },
}));
