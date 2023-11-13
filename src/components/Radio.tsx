import { FormControl, RadioGroup, FormControlLabel } from '@mui/material';
import { useCallback } from 'react';

import { Typography } from './Typography';
import { Circle } from './Circle';

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
};

export function Radio({ id, label, options, value, onChange, row }: RadioProps) {
  const onChangeWrapper = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, value: string) => onChange(value, event),
    [onChange]
  );
  return (
    <FormControl>
      <Typography id={id} color="dark90" size="base" class="medium">
        {label}
      </Typography>
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
