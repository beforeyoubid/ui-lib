import React from 'react';
import { ButtonWrapper } from './styles';
import { Icon } from '../Icon';
import { ButtonProps } from '@mui/material';
import getButtonStyles from './utils';
import { Typography } from '../Typography';

export type ButtonComponentProps = ButtonProps & {
  primaryVariant: 'primary' | 'secondary' | 'tertiary';
  secondaryVariant: 'mint' | 'destructive' | 'disabled';
  leadingIcon?: string;
  trailingIcon?: string;
};

const ButtonComponent: React.FC<ButtonComponentProps> = ({
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
      startIcon={leadingIcon ? <Icon type={leadingIcon} /> : null}
      endIcon={trailingIcon ? <Icon type={trailingIcon} /> : null}
      {...rest}
    >
      <Typography class="bold" size="base" color={buttonStyle.textColor}>
        {title}
      </Typography>
    </ButtonWrapper>
  );
};

export default ButtonComponent;
