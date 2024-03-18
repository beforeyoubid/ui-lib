import { useCallback } from 'react';

import { Flex } from '../Flex';
import { Typography } from '../Typography';
import { Icon } from '../Icon';

import dayjs from 'dayjs';

import { styled } from '@mui/material/styles';
import { useTheme, Paper } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker as DP, LocalizationProvider } from '@mui/x-date-pickers';

export const DatePicker = ({
  id,
  label,
  value,
  onChange,
}: {
  id?: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}) => {
  const theme = useTheme();
  // const onDateChange = useCallback(
  //   (value: string) => {
  //     onChange(value);
  //   },
  //   [onChange]
  // );

  const renderOpenPickerIcon = () => <Icon icon="CalendarEvent" color="dark75" size={24} />;

  const renderCalendarHeader = (props: any) => {
    console.log('props:', props);
    return (
      <Flex direction="row" justify="space-between" align="center" style={{ padding: theme.spacing(2.5) }}>
        <Flex direction="row">
          <Icon icon="ChevronLeft" color="dark90" size={16} />

          <Flex
            direction="row"
            align="center"
            gap={4}
            style={{ marginLeft: theme.spacing(2), marginRight: theme.spacing(1.5) }}
          >
            <Typography class="bold" size="base" color="dark90">
              {dayjs(props?.currentMonth?.['$d']).format('MMM')}
            </Typography>
            <Icon icon="ChevronDown" color="dark90" size={16} />
          </Flex>

          <Icon icon="ChevronRight" color="dark90" size={16} />
        </Flex>

        <Flex direction="row">
          <Icon icon="ChevronLeft" color="dark90" size={16} />

          <Flex
            direction="row"
            align="center"
            gap={4}
            style={{ marginLeft: theme.spacing(2), marginRight: theme.spacing(1.5) }}
          >
            <Typography class="bold" size="base" color="dark90">
              {dayjs(props?.currentMonth?.['$d']).format('YYYY')}
            </Typography>
            <Icon icon="ChevronDown" color="dark90" size={16} />
          </Flex>

          <Icon icon="ChevronRight" color="dark90" size={16} />
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
          value={dayjs()}
          openTo="day"
          views={['year', 'month', 'day']}
          // label={label}
          // type="date"
          // onChange={event => onDateChange(event.target.value)}
          // value={new Date()}
          // resize="none"
          // style={{ backgroundColor: theme.palette.colors.lightWhite }}
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
  },
  '&.MuiFormControl-root .MuiInputBase-input::placeholder': {
    color: 'transparent',
  },
  '&.MuiFormControl-root .MuiInputBase-input': {
    fontFamily: theme.typography.fonts['roman'],
    fontSize: theme.typography.size.base.fontSize,
    color: theme.palette.colors.dark90,
  },
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
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
  ' .MuiPickersDay-root.Mui-selected': {
    fontFamily: theme.typography.fonts['roman'],
    fontSize: theme.typography.size.sm.fontSize,
    color: theme.palette.colors.lightWhite,
    backgroundColor: theme.palette.colors.mint60,
  },
}));
