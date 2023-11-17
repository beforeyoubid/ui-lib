import React from 'react';
import { Checkbox as CheckboxMui, FormControlLabel, styled, useTheme } from '@mui/material';

import { Flex } from './Flex';
import { Icon } from './Icon';
import { Typography } from './Typography';
import { TextFieldErrorLabel } from './TextInput/Labels';

type CheckboxSize = 'sm' | 'md' | 'lg';

export type CheckboxProps = {
  label: string | React.ReactNode;
  size: CheckboxSize;
  errorText?: string;
  indeterminate?: boolean;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: boolean) => void;
  required?: boolean;
  disabled?: boolean;
};

const SIZE_TO_ICON_SIZE: Record<CheckboxSize, number> = {
  sm: 14,
  md: 16,
  lg: 18,
};

export function Checkbox(props: CheckboxProps) {
  const theme = useTheme();
  return (
    <Flex direction="column">
      <FormControlLabel
        label={
          <div style={{ marginTop: theme.spacing(0.25) }}>
            <Typography color="dark90" size={props.size === 'sm' ? 'sm' : 'base'} class="roman">
              {props.label}
            </Typography>
          </div>
        }
        required={props.required ?? false}
        disabled={props.disabled ?? false}
        control={<RawCheckbox {...props} />}
        sx={{ marginLeft: 0, marginRight: 0 }}
      />
      {!!props.errorText && (
        <ErrorWrapper>
          <TextFieldErrorLabel errorText={props.errorText} />
        </ErrorWrapper>
      )}
    </Flex>
  );
}

export const RawCheckbox = (
  props: Pick<CheckboxProps, 'size' | 'checked' | 'onChange' | 'indeterminate' | 'disabled'>
) => (
  <StyledCheckbox
    color="primary"
    checked={props.checked}
    onChange={props.onChange}
    disabled={props.disabled ?? false}
    indeterminate={props.indeterminate ?? false}
    checkedIcon={
      <IconWrapper size={props.size} disabled={props.disabled ?? false}>
        <Icon icon="Check" size={SIZE_TO_ICON_SIZE[props.size] - 2} color={props.disabled ? 'dark30' : 'lightWhite'} />
      </IconWrapper>
    }
    indeterminateIcon={
      <IconWrapper size={props.size} disabled={props.disabled ?? false}>
        <Icon icon="Minus" size={SIZE_TO_ICON_SIZE[props.size] - 2} color={props.disabled ? 'dark30' : 'lightWhite'} />
      </IconWrapper>
    }
    icon={<EmptyIcon className="BYB-Checkbox-Empty" size={props.size} />}
  />
);

const ErrorWrapper = styled('div')(({ theme }) => ({
  marginLeft: theme.spacing(1.5),
}));

const IconWrapper = styled(Flex)<{ size: CheckboxSize; disabled: boolean }>(({ size, theme, disabled }) => ({
  height: SIZE_TO_ICON_SIZE[size],
  width: SIZE_TO_ICON_SIZE[size],
  backgroundColor: disabled ? theme.palette.colors.lightL3 : theme.palette.colors.mint60,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  outline: disabled ? `1px solid ${theme.palette.colors.dark30}` : undefined,
  outlineOffset: -1,
}));

const EmptyIcon = styled('div')<{ size: CheckboxSize }>(({ size, theme }) => ({
  height: SIZE_TO_ICON_SIZE[size],
  width: SIZE_TO_ICON_SIZE[size],
  backgroundColor: theme.palette.colors.lightWhite,
  outline: `1px solid ${theme.palette.colors.dark30}`,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  outlineOffset: -1,
}));

const StyledCheckbox = styled(CheckboxMui)(({ theme }) => ({
  color: theme.palette.colors.mint60,
  padding: theme.spacing(0.5),
  borderRadius: 10,
  ':hover': {
    backgroundColor: theme.palette.colors.mintL3,

    '.BYB-Checkbox-Empty': {
      outlineColor: theme.palette.colors.mint60,
      backgroundColor: theme.palette.colors.mintL3,
    },
  },
  ':focus': {
    backgroundColor: theme.palette.colors.mintL3,

    '.BYB-Checkbox-Empty': {
      outlineColor: theme.palette.colors.mint30,
      backgroundColor: theme.palette.colors.lightWhite,
    },
  },
  ':active': {
    backgroundColor: theme.palette.colors.mintL3,

    '.BYB-Checkbox-Empty': {
      outlineColor: theme.palette.colors.mint30,
      backgroundColor: theme.palette.colors.lightWhite,
    },
  },
  'MuiTouchRipple-root': {
    color: theme.palette.colors.mint60,
  },
  '&.Mui-disabled': {
    '.BYB-Checkbox-Empty': {
      outlineColor: theme.palette.colors.dark30,
      backgroundColor: theme.palette.colors.lightL3,
    },
  },
}));
