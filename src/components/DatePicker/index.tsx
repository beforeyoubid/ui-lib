import React, { useCallback } from 'react';

import { useTheme } from '@mui/material';

import { TextInput } from '../TextInput';

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
  const onDateChange = useCallback(
    (value: string) => {
      onChange(value);
    },
    [onChange]
  );
  return (
    <TextInput
      id={id}
      label={label}
      type="date"
      onChange={event => onDateChange(event.target.value)}
      value={value}
      resize="none"
      style={{ backgroundColor: theme.palette.colors.lightWhite }}
    />
  );
};
