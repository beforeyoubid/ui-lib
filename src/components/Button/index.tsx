import { memo } from 'react';
import type React from 'react';

import { type ButtonProps as MuiButtonProps } from '@mui/material';

import { Icon, type IconComponent } from '../Icon';
import { Typography } from '../Typography';

import { ButtonWrapper } from './styles';
import { useButtonStyles, useButtonFontStyle } from './utils';

export type ButtonProps = Omit<MuiButtonProps, 'variant' | 'type' | 'size' | 'children'> & {
  variant: 'primary' | 'secondary' | 'tertiary';
  type: 'mint' | 'destructive' | 'disabled';
  size: 'lg' | 'md' | 'sm';
  wrap: 'wide' | 'narrow';
  leadingIcon?: IconComponent;
  trailingIcon?: IconComponent;
};

const ButtonNoMemo: React.FC<ButtonProps> = ({
  variant = 'primary',
  type = 'mint',
  size = 'md',
  wrap = 'wide',
  leadingIcon,
  trailingIcon,
  title,
  disabled,
  ...rest
}) => {
  const buttonStyle = useButtonStyles(variant, type);
  const buttonFontStyle = useButtonFontStyle(size, wrap);
  return (
    <ButtonWrapper
      bgColor={buttonStyle.bgColor}
      borderColor={buttonStyle.borderColor}
      hoverColor={buttonStyle.hoverColor}
      height={buttonFontStyle.height}
      width={buttonFontStyle.width}
      variant={buttonStyle.tertiaryVariant}
      padding={buttonFontStyle.padding}
      disableRipple
      disableElevation
      disabled={disabled || buttonStyle.isDisabled}
      startIcon={leadingIcon ? <Icon icon={leadingIcon} color={buttonStyle.textColor} /> : null}
      endIcon={trailingIcon ? <Icon icon={trailingIcon} color={buttonStyle.textColor} /> : null}
      {...rest}
    >
      <Typography class="bold" size={buttonFontStyle.fontSize} color={buttonStyle.textColor} padding={0}>
        {title}
      </Typography>
    </ButtonWrapper>
  );
};

export const Button = memo(ButtonNoMemo);
