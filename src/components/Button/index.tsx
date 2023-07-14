import React from 'react';
import { ButtonWrapper } from './styles';
import { Icon, IconProps } from '../Icon';
import { ButtonProps as MuiButtonProps } from '@mui/material';
import getButtonStyles from './utils';
import { Typography } from '../Typography';

export type ButtonProps = MuiButtonProps & {
  primaryVariant: 'primary' | 'secondary' | 'tertiary';
  secondaryVariant: 'mint' | 'destructive' | 'disabled';
  leadingIcon?: IconProps['icon'];
  trailingIcon?: IconProps['icon'];
};

const Button: React.FC<ButtonProps> = ({
  primaryVariant = 'primary',
  secondaryVariant = 'mint',
  leadingIcon,
  trailingIcon,
  title,
  disabled,
  ...rest
}) => {
  const buttonStyle = getButtonStyles(primaryVariant, secondaryVariant);
  return (
    <ButtonWrapper
      bgColor={buttonStyle.bgColor}
      borderColor={buttonStyle.borderColor}
      hoverColor={buttonStyle.hoverColor}
      variant={buttonStyle.tertiaryVariant}
      disabled={disabled || buttonStyle.isDisabled}
      startIcon={leadingIcon ? <Icon icon={leadingIcon} color={buttonStyle.textColor} /> : null}
      endIcon={trailingIcon ? <Icon icon={trailingIcon} color={buttonStyle.textColor} /> : null}
      {...rest}
    >
      <Typography class="bold" size="base" color={buttonStyle.textColor}>
        {title}
      </Typography>
    </ButtonWrapper>
  );
};

export { Button };
