import React from 'react';
import { styled, Button } from '@mui/material';
import { ButtonProps as MuiButtonProps } from '@mui/material';
import { Typography } from '../Typography';
import { useLinkButtonFontStyle, getLinkButtonStyle } from './utils';
import { Colors } from '../../mui-theme';

export type LinkButtonProps = {
  type: 'mint' | 'white' | 'grey' | 'red';
  title: string;
  size: 'lg' | 'md' | 'sm';
} & Omit<MuiButtonProps, 'variant' | 'children' | 'color' | 'type' | 'size'>;

export const LinkButton: React.FC<LinkButtonProps> = ({ type, title, size, disabled, ...rest }) => {
  const linkButtonStyle = getLinkButtonStyle(disabled ? 'grey' : type);
  const linkFontStyle = useLinkButtonFontStyle(size);
  return (
    <ButtonWrapper
      variant="text"
      bgColor={linkButtonStyle.BgColor}
      hoverBgColor={linkButtonStyle.hoverBgColor}
      paddingTop={linkFontStyle.paddingTop}
      paddingBottom={linkFontStyle.paddingBottom}
      disableRipple
      {...rest}
    >
      <Typography
        class={linkFontStyle.fontClass}
        size={linkFontStyle.fontSize}
        color={linkButtonStyle.BgColor}
        hoverColor={linkButtonStyle.hoverBgColor}
      >
        {title}
      </Typography>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled(Button)<{
  bgColor: keyof Colors;
  hoverBgColor: keyof Colors;
  paddingTop: string;
  paddingBottom: string;
}>(({ bgColor, hoverBgColor, paddingTop, paddingBottom, theme }) => ({
  paddingTop: paddingTop,
  paddingBottom: paddingBottom,
  backgroundColor: 'transparent !important',
  textDecoration: `underline${theme.palette.colors[bgColor]} !important`,
  textTransform: 'none',

  '&:hover': {
    textDecoration: `underline${theme.palette.colors[hoverBgColor]} !important`,
  },
  '&:active': {
    textDecoration: `underline${theme.palette.colors[hoverBgColor]} !important`,
  },
}));
