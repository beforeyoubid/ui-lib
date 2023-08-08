import { styled } from '@mui/material';
import { Color, TypographyFontSize, TypographyFontClass } from '../mui-theme';

export type TypographyProps = {
  class: TypographyFontClass;
  size: TypographyFontSize;
  color: Color;
  hoverColor?: Color;
  className?: string;
  children: React.ReactNode;
  padding?: number;
};

export function Typography(props: TypographyProps) {
  return (
    <Div
      className={props.className}
      fontClass={props.class}
      size={props.size}
      color={props.color}
      hoverColor={props.hoverColor}
      padding={props.padding ? props.padding : 0}
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
}>(({ theme, fontClass, size, color, hoverColor, padding }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.size[size].fontSize,
  lineHeight: theme.typography.size[size].lineHeight,
  fontWeight: theme.typography.fontWeight[fontClass],
  color: theme.palette.colors[color],
  padding: theme.spacing(padding),
  '&:hover': {
    color: hoverColor ? theme.palette.colors[hoverColor] : undefined,
  },
}));
