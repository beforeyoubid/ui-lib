import { styled } from '@mui/material';
import { Color, TypographyFontSize, TypographyFontClass } from '../mui-theme';

export type TypographyProps = {
  class: TypographyFontClass;
  size: TypographyFontSize;
  color: Color;
  hoverColor?: Color;
  padding?: number;
  className?: string;
  children: React.ReactNode;
};

export function Typography(props: TypographyProps) {
  return (
    <Div
      fontClass={props.class}
      size={props.size}
      color={props.color}
      hoverColor={props.hoverColor}
      padding={props.padding ?? 1}
      className={props.className}
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
