import { Paper, styled } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { type Moment } from 'moment';

import { Flex } from '../Flex';
import { Icon } from '../Icon';

type ChevronProps = {
  onClick: () => void;
};

const ChevronLeft: React.FC<ChevronProps> = ({ onClick }) => {
  return (
    <Flex onClick={onClick} style={{ cursor: 'pointer' }}>
      <Icon icon="ChevronLeft" color="dark90" size={16} />
    </Flex>
  );
};

const ChevronRight: React.FC<ChevronProps> = ({ onClick }) => {
  return (
    <Flex onClick={onClick} style={{ cursor: 'pointer' }}>
      <Icon icon="ChevronRight" color="dark90" size={16} />
    </Flex>
  );
};

const ChevronDown: React.FC<ChevronProps> = ({ onClick }) => {
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

const StyledDatePicker = styled(DatePicker<Moment>)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  ' .MuiInputBase-input': {
    padding: theme.spacing(1.5, 1.75, 1.5, 1.25),
  },
  '&.MuiFormControl-root *': {
    border: 'none',
  },
  '&.MuiFormControl-root .MuiInputBase-root': {
    borderRadius: '4px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: theme.palette.colors.dark45,
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
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  borderWidth: 1,
  borderColor: theme.palette.colors.dark15,
  borderStyle: 'solid',
  borderRadius: theme.spacing(2),
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
  ' button.Mui-selected': {
    backgroundColor: theme.palette.colors.mint60,
  },
}));

const FlexCalendarFooter = styled(Flex)(({ theme }) => ({
  cursor: 'pointer',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  gap: theme.spacing(3),
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  paddingRight: theme.spacing(2.75),
}));

export { ChevronLeft, ChevronRight, ChevronDown, FlexToggle, StyledDatePicker, StyledPaper, FlexCalendarFooter };
