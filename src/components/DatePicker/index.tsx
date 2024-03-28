import type React from 'react';
import { useCallback, useMemo, useState } from 'react';

import { useTheme } from '@mui/material';
import { type DateView } from '@mui/x-date-pickers';
import moment, { type Moment } from 'moment';

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
  date: Maybe<Moment>;
  incrementMonth: () => void;
  decrementMonth: () => void;
  incrementYear: () => void;
  decrementYear: () => void;
  onChange: (value: Maybe<Moment>) => void;
};

export const DatePicker: React.FC<DatePickerProps> = ({
  label,
  date,
  required = false,
  format = 'MMM D, YYYY',
  views = ['day'],
  incrementMonth,
  decrementMonth,
  incrementYear,
  decrementYear,
  onChange,
}) => {
  const theme = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const [currentView, setCurrentView] = useState<DateView>('day');

  const dateMonth = useMemo(() => date?.format('MMM') ?? moment().format('MMM'), [date]);
  const dateYear = useMemo(() => date?.format('YYYY') ?? moment().format('YYYY'), [date]);

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
        slotProps={{
          popper: {
            sx: {
              background: 'none',
              '& > .MuiPaper-root': {
                opacity: 'none',
                background: 'none',
                boxShadow: 'none',
              },
              ' .MuiDateCalendar-root': {
                maxHeight: 400,
                height: currentView === 'month' ? 385 : 345,
              },
              ' .MuiMonthCalendar-root': {
                height: 320,
                paddingBottom: 30,
                padding: 0,
                display: 'flex',
                flexWrap: 'nowrap',
                flexDirection: 'column',
                alignItems: 'flex-start',
                overflowY: 'scroll',
              },
              ' .MuiPickersMonth-root': {
                display: 'flex',
                alignSelf: 'stretch',
                justifyContent: 'flex-start',
                padding: 0,
              },
              ' .MuiPickersMonth-monthButton': {
                margin: 0,
                borderRadius: 0,
                fontFamily: theme.typography.fonts.medium,
                color: theme.palette.colors.dark90,
                fontWeight: theme.typography.fontWeight.medium,
                paddingLeft: theme.spacing(7),
                paddingY: theme.spacing(1.75, 1.75),
                textAlign: 'left',
                width: '100%',
              },
              ' .MuiPickersMonth-monthButton.Mui-selected': {
                background: theme.palette.colors.lightL2,
                color: theme.palette.colors.dark90,
              },
              ' .MuiYearCalendar-root': {
                display: 'flex',
                alignSelf: 'stretch',
                justifyContent: 'flex-start',
                flexWrap: 'nowrap',
                flexDirection: 'column',
                padding: 0,
              },
              ' .MuiPickersYear-root': {
                display: 'flex',
                alignSelf: 'stretch',
                justifyContent: 'flex-start',
                padding: 0,
              },
              ' .MuiPickersYear-yearButton': {
                margin: 0,
                borderRadius: 0,
                fontFamily: theme.typography.fonts.medium,
                color: theme.palette.colors.dark90,
                fontWeight: theme.typography.fontWeight.medium,
                paddingLeft: theme.spacing(7),
                paddingY: theme.spacing(1.75, 1.75),
                textAlign: 'left',
                width: '100%',
              },
              ' .MuiPickersYear-yearButton.Mui-selected': {
                background: theme.palette.colors.lightL2,
                color: theme.palette.colors.dark90,
              },
              ' .MuiPickersDay-root': {
                fontFamily: theme.typography.size.sm,
                fontWeight: theme.typography.fontWeight.medium,
                color: theme.palette.colors.dark90,
              },
              ' .MuiPickersDay-root.Mui-selected': {
                color: theme.palette.colors.lightWhite,
                background: theme.palette.colors.mint60,
              },
            },
          },
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
              selectedMonth={dateMonth}
              selectedYear={dateYear}
              views={views}
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
