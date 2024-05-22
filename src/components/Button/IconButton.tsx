import { memo } from 'react';
import type React from 'react';

import { type ButtonProps as MuiButtonProps } from '@mui/material';

import { Icon, type IconProps } from '../Icon';

import { ButtonWrapper } from './styles';
import { useButtonStyles, useButtonFontStyle } from './utils';

export type IconButtonProps = Omit<MuiButtonProps, 'variant' | 'type' | 'size' | 'children' | 'title'> & {
  variant: 'primary' | 'secondary' | 'tertiary';
  type: 'mint' | 'destructive' | 'disabled';
  size: 'lg' | 'md' | 'sm';
  wrap: 'wide' | 'narrow';
  icon: IconProps['icon'];
};

const IconButtonNoMemo: React.FC<IconButtonProps> = ({
  variant = 'primary',
  type = 'mint',
  size = 'md',
  wrap = 'wide',
  icon,
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
      width=""
      variant={buttonStyle.tertiaryVariant}
      padding={buttonFontStyle.padding}
      disableRipple
      disableElevation
      disabled={disabled || buttonStyle.isDisabled}
      {...rest}
    >
      <Icon icon={icon} color={buttonStyle.textColor} />
    </ButtonWrapper>
  );
};

export const IconButton = memo(IconButtonNoMemo);
