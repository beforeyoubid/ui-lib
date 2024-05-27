import type React from 'react';
import { useCallback, useMemo, useState } from 'react';

import { useTheme } from '@mui/material';
import { type DateView } from '@mui/x-date-pickers';
import moment, { type Moment } from 'moment';
import { CalendarEvent } from 'tabler-icons-react';

import { Flex } from '../Flex';
import { Icon } from '../Icon';
import { TextFieldLabel } from '../TextInput/Labels';
import { type TooltipProps } from '../ToolTip';

import CalendarFooter from './CalendarFooter';
import CalendarHeader from './CalendarHeader';
import { StyledDatePicker } from './styles';

export type DatePickerProps = {
  label: string;
  format?: string;
  views?: DateView[];
  required?: boolean;
  date: Maybe<moment.MomentInput>;
  incrementMonth: () => void;
  decrementMonth: () => void;
  incrementYear: () => void;
  decrementYear: () => void;
  onChange: (value: Maybe<Moment>) => void;
  isOptional?: boolean;
  tooltip?: string;
  tooltipProps?: TooltipProps;
};

export const DatePicker: React.FC<DatePickerProps> = ({
  label,
  date: dateParameter,
  required = false,
  format = 'MMM D, YYYY',
  views = ['day'],
  incrementMonth,
  decrementMonth,
  incrementYear,
  decrementYear,
  onChange,
  isOptional = false,
  tooltip,
  tooltipProps,
}) => {
  const date = useMemo(() => moment(dateParameter), [dateParameter]);
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
      <TextFieldLabel
        labelText={label}
        required={required}
        tooltip={tooltip}
        tooltipProps={tooltipProps}
        isOptional={isOptional}
      />

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
              '.MuiPickersMonth-monthButton.Mui-selected:hover': {
                background: `${theme.palette.colors.lightL2} !important`,
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
                '&:hover': {
                  background: `${theme.palette.colors.lightL2} !important`,
                  color: `${theme.palette.colors.dark90} !important`,
                },
              },
              ' .MuiPickersDay-root': {
                fontFamily: theme.typography.size.sm,
                fontWeight: theme.typography.fontWeight.medium,
                color: theme.palette.colors.dark90,
              },
              ' .MuiPickersDay-root.Mui-selected': {
                color: theme.palette.colors.lightWhite,
                background: `${theme.palette.colors.mint60} !important`,
              },
            },
          },
        }}
        slots={{
          layout: props => <CalendarFooter toggleCalendar={toggleOpen}>{props.children}</CalendarFooter>,
          openPickerIcon: () => (
            <Flex onClick={toggleOpen}>
              <Icon icon={CalendarEvent} color="dark75" size={24} />
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
