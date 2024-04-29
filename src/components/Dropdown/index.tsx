import React, { useCallback, useMemo } from 'react';

import { Select, MenuItem, type SelectChangeEvent, styled, useTheme, ListItemIcon } from '@mui/material';

import { type Colors } from '../../theme.types';
import { automation } from '../../utils';
import { Icon } from '../Icon';
import { TextFieldErrorLabel, TextFieldLabel } from '../TextInput/Labels';
import { type TooltipProps } from '../ToolTip';
import { Typography } from '../Typography';

type Option = {
  label: string;
  value: string;
};

export type DropdownProps = {
  label: string;
  value: string;
  options: Option[];
  placeholder?: string;
  errorText?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  required?: boolean;
  isOptional?: boolean;
  onChange: (event: Option) => void;
  automationKey?: string;
  backgroundColor?: keyof Colors;
  tooltip?: string;
  tooltipProps?: TooltipProps;
};

export const Dropdown = (props: DropdownProps) => {
  const {
    label,
    value,
    options,
    errorText = '',
    placeholder,
    fullWidth,
    disabled,
    required = false,
    isOptional = false,
    backgroundColor,
    onChange,
    automationKey,
    tooltip,
    tooltipProps,
  } = props;

  const theme = useTheme();
  // Menu item props
  const menuProps = useMemo(
    () => ({
      PaperProps: {
        sx: {
          borderRadius: '16px',
          marginTop: theme.spacing(0.5),
          '& .MuiMenuItem-root:hover': {
            backgroundColor: theme.palette.colors.lightL2,
          },
        },
      },
    }),
    [theme]
  );
  const selectedOption = useMemo(() => options.find(o => o.value === value), [options, value]);
  const onChangeWrapper = useCallback(
    (event: SelectChangeEvent<Option>) => {
      const option = options.find(o => o.value === event.target.value);
      if (option) onChange(option);
    },
    [options, onChange]
  );
  return (
    <>
      <TextFieldLabel
        labelText={label}
        required={required}
        isOptional={isOptional}
        tooltip={tooltip}
        tooltipProps={tooltipProps}
      />
      {errorText && <TextFieldErrorLabel errorText={errorText} />}
      <StyledSelect
        displayEmpty
        value={selectedOption ?? ''}
        fullWidth={fullWidth}
        disabled={disabled}
        onChange={onChangeWrapper}
        error={!!errorText}
        placeholder={placeholder}
        variant="outlined"
        MenuProps={menuProps}
        backgroundColor={backgroundColor}
        renderValue={opt => (
          <Typography class="roman" size="base" color={opt?.label ? 'dark90' : 'dark60'} padding={0}>
            {opt?.label ?? placeholder}
          </Typography>
        )}
        inputProps={{
          ...automation([automationKey], { label }),
        }}
      >
        {options.map(option => (
          <MenuItem
            key={option.value}
            value={option.value}
            style={option.value === value ? { backgroundColor: theme.palette.colors.mintL3 } : {}}
          >
            <ListItemIcon>{option.value === value && <Icon icon="Check" color="mint90" />}</ListItemIcon>
            <Typography class="medium" size="base" color="dark90">
              {option.label}
            </Typography>
          </MenuItem>
        ))}
      </StyledSelect>
    </>
  );
};

const StyledSelect = styled(Select<Option>)<{ backgroundColor?: keyof Colors }>(({ theme, backgroundColor }) => ({
  marginTop: theme.spacing(0.5),
  '.MuiSelect-select': {
    padding: theme.spacing(1.5, 1.75, 1.5, 1.25),
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
  '& .MuiMenuList-root': {
    backgroundColor: theme.palette.colors.error45,
    margin: 0,
    padding: 0,
  },
  background: backgroundColor ? theme.palette.colors[backgroundColor] : 'transparent',
}));
