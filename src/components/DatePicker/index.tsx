import React from 'react';

import TextField from '@mui/material/TextField';
import moment from 'moment';

export const DatePicker = ({
  label,
  lableSize = 'normal',
  textFieldSize = 'medium',
  defaultDateValue = moment().format('YYYY-MM-DD'),
  dateValue,
}: {
  label: string;
  textFieldSize: 'small' | 'medium';
  lableSize: 'small' | 'normal';
  defaultDateValue: string;
  dateValue: string;
}) => (
  <TextField
    id="date"
    label={label}
    type="date"
    defaultValue={defaultDateValue}
    value={dateValue}
    // create a resolver function based on sm, md or lg
    sx={{ width: '400px' }}
    size={textFieldSize}
    InputLabelProps={{
      shrink: true,
      size: lableSize,
    }}
  />
);
