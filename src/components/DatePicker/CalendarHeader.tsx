import { useTheme } from '@mui/material';

import { Flex } from '../Flex';
import { Typography } from '../Typography';

import { FlexToggle, ChevronLeft, ChevronRight, ChevronDown } from './styles';

type CalendarHeaderProps = {
  selectedMonth: string;
  selectedYear: string;
  goToPreviousMonth: () => void;
  goToNextMonth: () => void;
  goToPreviousYear: () => void;
  goToNextYear: () => void;
  toggleMonthView: () => void;
  toggleYearView: () => void;
};

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  selectedMonth,
  selectedYear,
  goToPreviousMonth,
  goToNextMonth,
  goToPreviousYear,
  goToNextYear,
  toggleMonthView,
  toggleYearView,
}) => {
  const theme = useTheme();

  return (
    <Flex direction="row" justify="space-between" align="center" style={{ padding: theme.spacing(2.5) }}>
      <Flex direction="row">
        <ChevronLeft onClick={goToPreviousMonth} />
        <FlexToggle>
          <Typography class="bold" size="base" color="dark90">
            {selectedMonth}
          </Typography>
          <ChevronDown onClick={toggleMonthView} />
        </FlexToggle>
        <ChevronRight onClick={goToNextMonth} />
      </Flex>

      <Flex direction="row">
        <ChevronLeft onClick={goToPreviousYear} />
        <FlexToggle>
          <Typography class="bold" size="base" color="dark90">
            {selectedYear}
          </Typography>
          <ChevronDown onClick={toggleYearView} />
        </FlexToggle>
        <ChevronRight onClick={goToNextYear} />
      </Flex>
    </Flex>
  );
};

export default CalendarHeader;
