import React from 'react';
import { Select, MenuItem, SelectChangeEvent, styled, useTheme } from '@mui/material';
import { TextFieldLabel } from '../TextInput/Labels';
import { Typography } from '../Typography';

export type DropdownComponentProps = {
  label: string;
  value: string;
  options: string[];
  placeholder: string;
  errorText?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  onChange: (event: SelectChangeEvent<unknown>) => void;
};

const DropdownComponent = (props: DropdownComponentProps) => {
  const { label, value, options, errorText = '', placeholder, fullWidth, disabled, onChange } = props;

  const theme = useTheme();
  // Menu item props
  const menuProps = {
    PaperProps: {
      sx: {
        borderRadius: '16px ',
        marginTop: theme.spacing(0.5),
        '& .MuiMenuItem-root.Mui-selected': {
          backgroundColor: theme.palette.colors.mintL3,
        },
        '& .MuiMenuItem-root:hover': {
          backgroundColor: theme.palette.colors.lightL2,
        },
      },
    },
  };
  return (
    <>
      <TextFieldLabel labelText={label} />
      <StyledSelect
        value={value}
        fullWidth={fullWidth}
        disabled={disabled}
        onChange={onChange}
        error={!!errorText}
        placeholder={placeholder}
        variant="outlined"
        MenuProps={menuProps}
      >
        {options.map(option => (
          <MenuItem key={option} value={option}>
            <Typography class="medium" size="base" color="dark90">
              {option}
            </Typography>
          </MenuItem>
        ))}
      </StyledSelect>
    </>
  );
};

const StyledSelect = styled(Select)(({ theme }) => ({
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
}));

export default DropdownComponent;
