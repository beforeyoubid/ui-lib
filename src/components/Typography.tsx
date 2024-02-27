import { styled } from '@mui/material';
import { type Color, type TypographyFontSize, type TypographyFontClass } from '../mui-theme';

import { automation } from '../utils';

export type TypographyProps = {
  class: TypographyFontClass;
  size: TypographyFontSize;
  color: Color;
  hoverColor?: Color;
  hoverCursor?: React.CSSProperties['cursor'];
  className?: string;
  children: React.ReactNode;
  padding?: number;
  automationKey?: string;
  fullWidth?: boolean;
  strikethrough?: boolean;
  underline?: boolean;
  id?: React.HTMLAttributes<HTMLDivElement>['id'];
};

export function Typography(props: TypographyProps) {
  return (
    <Div
      className={`BYB-Typography ${props.className ?? ''}`}
      fontClass={props.class}
      size={props.size}
      color={props.color}
      hoverColor={props.hoverColor}
      fullWidth={props.fullWidth ?? false}
      padding={props.padding ? props.padding : 0}
      strikethrough={props.strikethrough ?? false}
      underline={props.underline ?? false}
      id={props.id}
      hoverCursor={props.hoverCursor}
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
  underline: boolean;
  hoverCursor?: React.CSSProperties['cursor'];
}>(({ theme, fontClass, size, color, hoverColor, padding, fullWidth, strikethrough, underline, hoverCursor }) => ({
  fontFamily: theme.typography.fonts[fontClass],
  fontSize: theme.typography.size[size].fontSize,
  lineHeight: theme.typography.size[size].lineHeight,
  fontWeight: theme.typography.fontWeight[fontClass],
  color: theme.palette.colors[color],
  padding: theme.spacing(padding),
  width: fullWidth ? '100%' : undefined,
  textDecoration: strikethrough ? 'line-through' : underline ? 'underline' : undefined,
  '&:hover': {
    color: hoverColor ? theme.palette.colors[hoverColor] : undefined,
    cursor: hoverCursor,
  },
}));
