import { FormControl, RadioGroup, FormControlLabel, useTheme } from '@mui/material';
import { useCallback } from 'react';

import { Typography } from './Typography';
import { Circle } from './Circle';
import { TextFieldErrorLabel, TextFieldHint, TextFieldLabel } from './TextInput/Labels';
import { Flex } from './Flex';

export type RadioProps = {
  label: string;
  id: string;
  options: {
    label: string;
    value: string;
    disabled?: boolean;
  }[];
  value?: Maybe<string>;
  row?: boolean;
  iconType?: 'circle' | 'tick';
  onChange: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  errorText?: string;
  helperText?: string;
  required?: boolean;
  isOptional?: boolean;
};

export function Radio({
  id,
  label,
  options,
  value,
  onChange,
  row,
  errorText,
  helperText,
  required = false,
  isOptional = false,
}: RadioProps) {
  const theme = useTheme();
  const onChangeWrapper = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, value: string) => onChange(value, event),
    [onChange]
  );
  return (
    <FormControl>
      <Flex direction="column" width="100%" gap={theme.spacing(0.5)}>
        <TextFieldLabel labelText={label} required={required} isOptional={isOptional} id={id} />
        {helperText && <TextFieldHint hintText={helperText} />}
        {errorText && <TextFieldErrorLabel errorText={errorText} />}
      </Flex>
      <RadioGroup aria-labelledby={id} value={value} name="radio-buttons-group" row={row} onChange={onChangeWrapper}>
        {options.map(opt => (
          <FormControlLabel
            key={opt.value}
            disabled={opt.disabled}
            value={opt.value}
            control={<Circle disabled={opt.disabled ?? false} />}
            label={
              <Typography class="roman" size="base" color={opt.disabled ? 'dark45' : 'dark90'}>
                {opt.label}
              </Typography>
            }
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
