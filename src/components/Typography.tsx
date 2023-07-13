import { styled } from '@mui/material';
import { Color, TypographyFontSize, TypographyFontClass } from '../mui-theme';

export type TypographyProps = {
  class: TypographyFontClass;
  size: TypographyFontSize;
  color: Color;
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
      className={props.className}
      padding={props.padding ?? 1}
    >
      {props.children}
    </Div>
  );
}

const Div = styled('div')<{ fontClass: TypographyFontClass; size: TypographyFontSize; color: Color; padding: number }>(
  ({ theme, fontClass, size, color, padding }) => ({
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.size[size].fontSize,
    lineHeight: theme.typography.size[size].lineHeight,
    fontWeight: theme.typography.fontWeight[fontClass],
    color: theme.palette.colors[color],
    padding: theme.spacing(padding),
  })
);
