import moment, { type Moment } from 'moment';

import { Flex } from '../Flex';
import { Icon } from '../Icon';
import { Typography } from '../Typography';

import { FlexDatePickerInput } from './styles';

type DatePickerInputProps = {
  date: Moment;
  format: string;
  handleClick: () => void;
};

const DatePickerInput: React.FC<DatePickerInputProps> = ({ date, format, handleClick }) => {
  return (
    <FlexDatePickerInput>
      <Typography class="medium" size="base" color="dark90">
        {moment(date).format(format ?? 'MMMM D, YYYY')}
      </Typography>
      <Flex style={{ cursor: 'pointer' }} onClick={handleClick}>
        <Icon icon="CalendarEvent" color="dark75" size={24} />
      </Flex>
    </FlexDatePickerInput>
  );
};

export default DatePickerInput;
