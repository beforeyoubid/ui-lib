import { styled } from '@mui/material';
import { Color, TypographyFontSize, TypographyFontClass } from '../mui-theme';

import { automation } from '../utils';

export type TypographyProps = {
  class: TypographyFontClass;
  size: TypographyFontSize;
  color: Color;
  hoverColor?: Color;
  className?: string;
  children: React.ReactNode;
  padding?: number;
  automationKey?: string;
  fullWidth?: boolean;
};

export function Typography(props: TypographyProps) {
  return (
    <Div
      className={props.className}
      fontClass={props.class}
      size={props.size}
      color={props.color}
      hoverColor={props.hoverColor}
      fullWidth={props.fullWidth ?? false}
      padding={props.padding ? props.padding : 0}
      {...automation([props.automationKey])}
    >
      {props.children}
    </Div>
  );
}

const Div = styled('div')<{
  fontClass: TypographyFontClass;
  size: TypographyFontSize;
  color: Color;
  hoverColor?: Color;
  padding: number;
  fullWidth: boolean;
}>(({ theme, fontClass, size, color, hoverColor, padding, fullWidth }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.size[size].fontSize,
  lineHeight: theme.typography.size[size].lineHeight,
  fontWeight: theme.typography.fontWeight[fontClass],
  color: theme.palette.colors[color],
  padding: theme.spacing(padding),
  width: fullWidth ? '100%' : undefined,
  '&:hover': {
    color: hoverColor ? theme.palette.colors[hoverColor] : undefined,
  },
}));
