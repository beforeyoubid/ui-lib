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
  strikethrough?: boolean;
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
      strikethrough={props.strikethrough ?? false}
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
  strikethrough: boolean;
}>(({ theme, fontClass, size, color, hoverColor, padding, fullWidth, strikethrough }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.size[size].fontSize,
  lineHeight: theme.typography.size[size].lineHeight,
  fontWeight: theme.typography.fontWeight[fontClass],
  color: theme.palette.colors[color],
  padding: theme.spacing(padding),
  width: fullWidth ? '100%' : undefined,
  textDecoration: strikethrough ? 'line-through' : undefined,
  '&:hover': {
    color: hoverColor ? theme.palette.colors[hoverColor] : undefined,
  },
}));
