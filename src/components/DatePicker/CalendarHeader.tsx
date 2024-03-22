import { useMemo } from 'react';

import { useTheme } from '@mui/material';
import { type DateView } from '@mui/x-date-pickers';

import { Flex } from '../Flex';
import { Typography } from '../Typography';

import { FlexToggle, ChevronLeft, ChevronRight, ChevronDown } from './styles';

type CalendarHeaderProps = {
  selectedMonth: string;
  selectedYear: string;
  views: DateView[];
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
  views,
  goToPreviousMonth,
  goToNextMonth,
  goToPreviousYear,
  goToNextYear,
  toggleMonthView,
  toggleYearView,
}) => {
  const theme = useTheme();

  const hasYearView = useMemo(() => views.includes('year'), [views]);
  const hasMonthView = useMemo(() => views.includes('month'), [views]);
  const hasDayView = useMemo(() => views.includes('day'), [views]);

  const isSingularView = useMemo(() => views.length === 1, [views]);

  return (
    <Flex direction="row" justify="space-between" align="center" style={{ padding: theme.spacing(2.5) }}>
      {(hasMonthView || hasDayView) && (
        <Flex direction="row">
          <ChevronLeft onClick={goToPreviousMonth} />
          <FlexToggle>
            <Typography class="bold" size="base" color="dark90">
              {selectedMonth}
            </Typography>
            {hasMonthView && !isSingularView && <ChevronDown onClick={toggleMonthView} />}
          </FlexToggle>
          <ChevronRight onClick={goToNextMonth} />
        </Flex>
      )}

      <Flex direction="row">
        <ChevronLeft onClick={goToPreviousYear} />
        <FlexToggle>
          <Typography class="bold" size="base" color="dark90">
            {selectedYear}
          </Typography>
          {hasYearView && !isSingularView && <ChevronDown onClick={toggleYearView} />}
        </FlexToggle>
        <ChevronRight onClick={goToNextYear} />
      </Flex>
    </Flex>
  );
};

export default CalendarHeader;
