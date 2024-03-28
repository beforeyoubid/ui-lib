import React, { ChangeEvent, useCallback, useState } from 'react';
import { FormControl, useTheme, styled, TextField } from '@mui/material';
import { TextFieldErrorLabel, TextFieldHint, TextFieldLabel } from './TextInput/Labels';
import { automation } from '../utils';
import { Flex } from './Flex';

export interface CalendarProps {
  label?: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
  disabled?: boolean;
  errorText?: string;
  helperText?: string;
  required?: boolean;
  automationKey?: string;
}

export function Calendar({
  automationKey,
  value,
  label,
  disabled,
  helperText,
  errorText,
  required = false,
  onChange,
}: CalendarProps) {
  const theme = useTheme();
  const onChangeWrapper = useCallback((date: Date | null) => onChange(date), [onChange]);

  return (
    <FormControl {...automation([automationKey])}>
      <Flex direction="column" width="100%" gap={theme.spacing(0.5)}>
        <TextFieldLabel labelText={label ?? ''} required={required} isOptional={false} />
        {helperText && <TextFieldHint hintText={helperText} />}
        {errorText && <TextFieldErrorLabel errorText={errorText} />}
      </Flex>
      <DatePicker
        value={value}
        onChange={onChangeWrapper}
        renderInput={props => <TextField {...props} />}
        disabled={disabled}
      />
    </FormControl>
  );
}
