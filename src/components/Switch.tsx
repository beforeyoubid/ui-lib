import { useCallback } from 'react';
import { type ChangeEvent } from 'react';
import type React from 'react';

import { FormControl, Switch as SwitchMui, useTheme, styled } from '@mui/material';

import { automation } from '../utils';

import { Flex } from './Flex';
import { TextFieldErrorLabel, TextFieldHint, TextFieldLabel } from './TextInput/Labels';
import { TooltipProps } from './ToolTip';

export interface SwitchProps {
  size: 'small' | 'medium';
  checked: boolean;
  label?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>, value: boolean) => void;
  value: boolean;
  disabled?: boolean;
  errorText?: string;
  helperText?: string;
  required?: boolean;
  tooltip?: string;
  tooltipProps?: TooltipProps;
  automationKey?: string;
}

export function Switch({
  size = 'medium',
  automationKey,
  value,
  checked,
  label,
  disabled,
  helperText,
  errorText,
  required = false,
  tooltip,
  tooltipProps,
  onChange,
}: SwitchProps) {
  const theme = useTheme();
  const onChangeWrapper = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => onChange(event, value),
    [onChange, value]
  );
  return (
    <FormControl {...automation([automationKey])}>
      <Flex direction="column" width="100%" gap={theme.spacing(0.5)}>
        <TextFieldLabel
          labelText={label ?? ''}
          required={required}
          isOptional={false}
          tooltip={tooltip}
          tooltipProps={tooltipProps}
        />
        {helperText && <TextFieldHint hintText={helperText} />}
        {errorText && <TextFieldErrorLabel errorText={errorText} />}
      </Flex>
      <StyledSwitch size={size} value={value} checked={checked} disabled={disabled} onChange={onChangeWrapper} />
    </FormControl>
  );
}

const StyledSwitch = styled(SwitchMui)(({ theme, size, disabled }) => {
  const switchSize = getSwitchSizeStyles(size || 'medium');
  return {
    ...switchSize,
    padding: '0px',
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: theme.spacing(0.25),
      transitionDuration: '200ms',
      color: theme.palette.colors.lightWhite,
      '&.Mui-checked': {
        color: theme.palette.colors.lightWhite,
        '& + .MuiSwitch-track': {
          backgroundColor: disabled ? theme.palette.colors.mint15 : theme.palette.colors.mint60,
          opacity: 1,
        },
        '&:hover': {
          '& + .MuiSwitch-track': {
            backgroundColor: theme.palette.colors.mint75,
          },
        },
      },
    },
    '& .MuiSwitch-track': {
      borderRadius: 12,
      backgroundColor: disabled ? theme.palette.colors.dark45 : theme.palette.colors.lightL3,
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 200,
      }),
      '&:hover': {
        backgroundColor: theme.palette.colors.dark15,
      },
    },
  };
});

const getSwitchSizeStyles = (size: 'small' | 'medium') => {
  switch (size) {
    case 'small':
      return {
        height: '20px',
        width: '36px',
        '& .MuiSwitch-thumb': {
          height: '16px',
          width: '16px',
        },
      };
    default:
      return {
        height: '24px',
        width: '44px',
        '& .MuiSwitch-thumb': {
          height: '20px',
          width: '20px',
        },
      };
  }
};
