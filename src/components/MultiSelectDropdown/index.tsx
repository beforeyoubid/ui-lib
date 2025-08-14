import { useCallback, useMemo } from 'react';

import { Autocomplete, Chip, TextField, styled, useTheme } from '@mui/material';
import { Check } from 'tabler-icons-react';

import { type Colors } from '../../theme.types';
import { automation } from '../../utils';
import { Icon } from '../Icon';
import { TextFieldErrorLabel, TextFieldLabel } from '../TextInput/Labels';
import { Typography } from '../Typography';

export type MultiSelectOption = {
  label: string;
  value: string;
};

/**
 * MultiSelectDropdown
 */
export type MultiSelectDropdownProps = {
  /** Field label displayed above the control. */
  label: string;
  /** Controlled selected values (option values). */
  values?: string[];
  /** Options to select from. */
  options: MultiSelectOption[];
  /** Placeholder when nothing is selected. */
  placeholder?: string;
  /** Error message shown below the field. */
  errorText?: string;
  /** Disable the field. */
  disabled?: boolean;
  /** Stretch to container width. */
  fullWidth?: boolean;
  /** Mark as required. */
  required?: boolean;
  /** Show Optional hint. */
  isOptional?: boolean;
  /** Called when selection changes; receives selected values. */
  onChange: (values: string[]) => void;
  /** Automation/test key. Mandatory. */
  automationKey: string;
  /** Theme background color for the input area (optional). */
  backgroundColor?: keyof Colors;
  /** Enable/disable search input. Default: true. */
  searchable?: boolean;
  /** Show a clear (X) button when there is a selection. Default: true. */
  clearable?: boolean;
  /** Limit visible tags; remaining count will be summarized. */
  limitTags?: number;
};

export function MultiSelectDropdown({
  label,
  values = [],
  options,
  placeholder,
  errorText,
  disabled,
  fullWidth,
  required = false,
  isOptional = false,
  onChange,
  automationKey,
  backgroundColor,
  searchable = true,
  clearable = true,
  limitTags,
}: MultiSelectDropdownProps) {
  const theme = useTheme();
  const selectedOptions = useMemo(() => options.filter(o => values.includes(o.value)), [options, values]);
  const hasSelection = selectedOptions.length > 0;

  const onChangeWrapper = useCallback(
    (_: unknown, newOptions: MultiSelectOption[]) => {
      onChange(newOptions.map(o => o.value));
    },
    [onChange]
  );

  return (
    <div {...automation([automationKey], { label })}>
      <TextFieldLabel labelText={label} required={required} isOptional={isOptional} />
      {errorText && <TextFieldErrorLabel errorText={errorText} />}
      <StyledAutocomplete
        multiple
        options={options}
        value={selectedOptions}
        onChange={onChangeWrapper}
        disabled={disabled}
        disableCloseOnSelect
        fullWidth={fullWidth}
        clearOnEscape
        disableClearable={!clearable}
        limitTags={limitTags}
        getOptionLabel={opt => opt.label}
        isOptionEqualToValue={(a, b) => a.value === b.value}
        renderInput={params => (
          <TextField
            {...params}
            placeholder={hasSelection ? undefined : placeholder}
            error={!!errorText}
            inputProps={{
              ...params.inputProps,
              readOnly: !searchable,
            }}
          />
        )}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <StyledTag
              {...getTagProps({ index })}
              key={option.value}
              label={
                <Typography class="medium" size="sm" color="dark90">
                  {option.label}
                </Typography>
              }
              size="small"
            />
          ))
        }
        renderOption={(props, option, { selected }) => (
          <li
            {...props}
            key={option.value}
            style={{
              background: selected ? theme.palette.colors.mintL3 : undefined,
              display: 'flex',
              alignItems: 'center',
              gap: theme.spacing(1),
            }}
          >
            <span style={{ width: 18, display: 'flex', justifyContent: 'center' }}>
              {selected ? <Icon icon={Check} color="mint60" size={16} /> : null}
            </span>
            <Typography class="medium" size="base" color="dark90">
              {option.label}
            </Typography>
          </li>
        )}
        sx={{
          marginTop: theme.spacing(0.5),
          '.MuiOutlinedInput-root': {
            background: backgroundColor ? theme.palette.colors[backgroundColor] : undefined,
            padding: theme.spacing(0.5, 1),
          },
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.colors.dark45,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.colors.mint60,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.colors.dark45,
          },
        }}
      />
    </div>
  );
}

// Generics: <T, Multiple, DisableClearable, FreeSolo>
// Multiple=true, DisableClearable=boolean (allow toggling), FreeSolo=false
const StyledAutocomplete = styled(Autocomplete<MultiSelectOption, true, boolean, false>)({});

const StyledTag = styled(Chip)(({ theme }) => ({
  borderRadius: 4,
  '& .MuiChip-label': {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}));
