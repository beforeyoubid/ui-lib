import React from 'react';
import { ButtonWrapper } from './styles';
import { Icon, IconProps } from '../Icon';
import { ButtonProps as MuiButtonProps } from '@mui/material';
import { useButtonStyles, useButtonFontStyle } from './utils';
import { Typography } from '../Typography';

export type ButtonProps = Omit<MuiButtonProps, 'variant' | 'type' | 'size' | 'children'> & {
  variant: 'primary' | 'secondary' | 'tertiary';
  type: 'mint' | 'destructive' | 'disabled';
  size: 'lg' | 'md' | 'sm';
  wrap: 'wide' | 'narrow';
  leadingIcon?: IconProps['icon'];
  trailingIcon?: IconProps['icon'];
};

const Button: React.FC<ButtonProps> = ({
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
      disabled={disabled || buttonStyle.isDisabled}
      startIcon={leadingIcon ? <Icon icon={leadingIcon} color={buttonStyle.textColor} /> : null}
      endIcon={trailingIcon ? <Icon icon={trailingIcon} color={buttonStyle.textColor} /> : null}
      {...rest}
    >
      <Typography class="bold" size="sm" color={buttonStyle.textColor} padding={0}>
        {title}
      </Typography>
    </ButtonWrapper>
  );
};

export { Button };
