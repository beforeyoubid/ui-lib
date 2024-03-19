import { Typography } from '../Typography';

import { StyledPaper, FlexCalendarFooter } from './styles';

type CalendarFooterProps = {
  children: React.ReactNode;
  toggleCalendar: () => void;
};

const CalendarFooter: React.FC<CalendarFooterProps> = ({ children, toggleCalendar }) => {
  return (
    <StyledPaper elevation={0}>
      {children}
      <FlexCalendarFooter onClick={toggleCalendar}>
        <Typography underline class="bold" size="sm" color="mint75">
          Cancel
        </Typography>
      </FlexCalendarFooter>
    </StyledPaper>
  );
};

export default CalendarFooter;
