import React from 'react';
import { styled, Button, useTheme } from '@mui/material';
import { ButtonProps as MuiButtonProps } from '@mui/material';
import { Typography } from '../Typography';
import { useLinkButtonFontStyle, getLinkButtonStyle } from './utils';
import { Colors } from '../../mui-theme';
import { Flex } from '../Flex';
import { Icon, IconProps } from '../Icon';

export type LinkButtonProps = {
  type: 'mint' | 'white' | 'grey' | 'red';
  title: string;
  size: 'lg' | 'md' | 'sm';
  underline?: boolean;
  leadingIcon?: IconProps['icon'];
} & Omit<MuiButtonProps, 'variant' | 'children' | 'color' | 'type' | 'size'>;

export const LinkButton: React.FC<LinkButtonProps> = ({
  type,
  title,
  size,
  disabled,
  underline,
  leadingIcon,
  ...rest
}) => {
  const theme = useTheme();
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
      underline={underline ?? true}
      {...rest}
    >
      <Flex gap={theme.spacing(1.25)} align="center">
        {leadingIcon && <Icon icon={leadingIcon} color={linkButtonStyle.BgColor} size="18" />}
        <Typography
          class={linkFontStyle.fontClass}
          size={linkFontStyle.fontSize}
          color={linkButtonStyle.BgColor}
          hoverColor={linkButtonStyle.hoverBgColor}
        >
          {title}
        </Typography>
      </Flex>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled(Button)<{
  bgColor: keyof Colors;
  hoverBgColor: keyof Colors;
  paddingTop: string;
  paddingBottom: string;
  underline?: boolean;
}>(({ bgColor, hoverBgColor, paddingTop, paddingBottom, underline, theme }) => ({
  pointerEvents: 'all',
  cursor: 'pointer',
  minWidth: 0,
  padding: 0,
  paddingTop: paddingTop,
  paddingBottom: paddingBottom,
  backgroundColor: 'transparent !important',
  textTransform: 'none',
  '&:hover': {
    color: theme.palette.colors[hoverBgColor],
    '.BYB-Typography': {
      color: theme.palette.colors[hoverBgColor],
    },
    svg: {
      color: theme.palette.colors[hoverBgColor],
    },
  },
  ...(!underline
    ? {}
    : {
        textDecoration: `underline ${theme.palette.colors[bgColor]} !important`,

        '&:hover': {
          textDecoration: `underline ${theme.palette.colors[hoverBgColor]} !important`,
        },
        '&:active': {
          textDecoration: `underline ${theme.palette.colors[hoverBgColor]} !important`,
        },
      }),
}));
