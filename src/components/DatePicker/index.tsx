import React from 'react';

import TextField from '@mui/material/TextField';
import moment from 'moment';

import { FlexCard } from './styles';

export const DatePicker = ({
  label,
  defaultDateValue = moment('DD-MM-YYYY').format('YYYY-MM-DD'),
  dateValue,
}: {
  label: string;
  defaultDateValue: string;
  dateValue: string;
}) => {
  return (
    <FlexCard>
      <form>
        <TextField
          id="date"
          label={label}
          type="date"
          defaultValue={defaultDateValue}
          value={dateValue}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    </FlexCard>
  );
};
