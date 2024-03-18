import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers';
// import dayjs, { type Dayjs } from 'dayjs';

import { Flex } from '../Flex';
import { Icon } from '../Icon';
import { Typography, type TypographyProps } from '../Typography';

type ChevronLeftProps = {
  onClick: () => void;
};

const ChevronLeft: React.FC<ChevronLeftProps> = ({ onClick }) => {
  return (
    <Flex onClick={onClick} style={{ cursor: 'pointer' }}>
      <Icon icon="ChevronLeft" color="dark90" size={16} />
    </Flex>
  );
};

type ChevronRightProps = {
  onClick: () => void;
};

const ChevronRight: React.FC<ChevronRightProps> = ({ onClick }) => {
  return (
    <Flex onClick={onClick} style={{ cursor: 'pointer' }}>
      <Icon icon="ChevronRight" color="dark90" size={16} />
    </Flex>
  );
};

type ChevronDownProps = {
  onClick: () => void;
};

const ChevronDown: React.FC<ChevronDownProps> = ({ onClick }) => {
  return (
    <Flex onClick={onClick} style={{ cursor: 'pointer' }}>
      <Icon icon="ChevronDown" color="dark90" size={16} />
    </Flex>
  );
};

const FlexToggle = styled(Flex)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(1.5),
}));

const StyledDatePicker = styled(DatePicker)(({ theme }) => ({
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

const FlexCalendarFooter = styled(Flex)(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'flex-end',
  paddingBottom: theme.spacing(2),
  paddingRight: theme.spacing(2.75),
}));

export { ChevronLeft, ChevronRight, ChevronDown, FlexToggle, StyledDatePicker, StyledPaper, FlexCalendarFooter };
