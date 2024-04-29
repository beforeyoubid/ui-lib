import { useCallback } from 'react';

import { FormControl, RadioGroup, FormControlLabel, useTheme } from '@mui/material';

import { automation } from '../utils';

import { Circle } from './Circle';
import { Flex } from './Flex';
import { TextFieldErrorLabel, TextFieldHint, TextFieldLabel } from './TextInput/Labels';
import { type TooltipProps } from './ToolTip';
import { Typography } from './Typography';

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
  tooltip?: string;
  tooltipProps?: TooltipProps;
  automationKey?: string;
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
  tooltip,
  tooltipProps,
  automationKey,
}: RadioProps) {
  const theme = useTheme();
  const onChangeWrapper = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, value: string) => onChange(value, event),
    [onChange]
  );
  return (
    <FormControl {...automation([automationKey], { label })}>
      <Flex direction="column" width="100%" gap={theme.spacing(0.5)}>
        <TextFieldLabel
          labelText={label}
          required={required}
          isOptional={isOptional}
          id={id}
          tooltip={tooltip}
          tooltipProps={tooltipProps}
        />
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
