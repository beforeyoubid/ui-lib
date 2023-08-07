import React, { useCallback, useMemo } from 'react';
import { Select, MenuItem, SelectChangeEvent, styled, useTheme, ListItemIcon } from '@mui/material';
import { TextFieldLabel } from '../TextInput/Labels';
import { Typography } from '../Typography';
import { Icon } from '../Icon';

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
};

const renderValue = ({ label }: Option) => (
  <Typography class="roman" size="base" color="dark90">
    {label}
  </Typography>
);

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
    onChange,
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
    []
  );
  const selectedOption = useMemo(() => options.find(o => o.value === value), [options]);
  const onChangeWrapper = useCallback(
    (event: SelectChangeEvent<Option>) => {
      const option = options.find(o => o.value === event.target.value);
      if (option) onChange(option);
    },
    [options, onChange]
  );
  return (
    <>
      <TextFieldLabel labelText={label} required={required} isOptional={isOptional} />
      <StyledSelect
        value={selectedOption}
        fullWidth={fullWidth}
        disabled={disabled}
        onChange={onChangeWrapper}
        error={!!errorText}
        placeholder={placeholder}
        variant="outlined"
        MenuProps={menuProps}
        renderValue={renderValue}
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

const StyledSelect = styled(Select<Option>)(({ theme }) => ({
  marginTop: theme.spacing(0.5),
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
}));
