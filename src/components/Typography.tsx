import { styled } from '@mui/material/styles';
import { Color, TypographyFontClass, TypographyFontSize } from '../mui-theme';

export type TypographyProps = {
  class: TypographyFontClass;
  size: TypographyFontSize;
  color: Color;
  children: React.ReactNode;
};

export function Typography(props: TypographyProps) {
  <Div fontClass={props.class} size={props.size} color={props.color}>
    {props.children}
  </Div>;
}

const Div = styled('div')<{ fontClass: TypographyFontClass; size: TypographyFontSize; color: Color }>(
  ({ theme, fontClass, size, color }) => ({
    ...theme.typography.button,
    fontSize: theme.typography.size[size].fontSize,
    lineHeight: theme.typography.size[size].lineHeight,
    fontWeight: theme.typography.fontWeight[fontClass],
    color: theme.palette.colors[color],
    padding: theme.spacing(1),
  })
);
