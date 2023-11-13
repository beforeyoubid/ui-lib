import { FormControl, RadioGroup, FormControlLabel } from '@mui/material';
import { Typography } from './Typography';
import { Circle } from './Circle';

export type RadioProps<Value = string> = {
  label: string;
  id: string;
  options: {
    label: string;
    value: Value;
    disabled?: boolean;
  }[];
  defaultValue?: Maybe<Value>;
  row?: boolean;
  iconType?: 'circle' | 'tick';
};

export function Radio({ id, label, options, defaultValue, row }: RadioProps) {
  return (
    <FormControl>
      <Typography id={id} color="dark90" size="base" class="medium">
        {label}
      </Typography>
      <RadioGroup aria-labelledby={id} defaultValue={defaultValue} name="radio-buttons-group" row={row}>
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
