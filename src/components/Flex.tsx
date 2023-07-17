import { type CSSProperties } from 'react';
import { styled, css } from '@mui/material';

const Flex = styled('div')<{
  direction?: CSSProperties['flexDirection'];
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  gap?: CSSProperties['gap'];
  rowGap?: CSSProperties['rowGap'];
  columnGap?: CSSProperties['columnGap'];
  textAlign?: CSSProperties['textAlign'];
  basis?: CSSProperties['flexBasis'];
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
}>`
  display: flex;
  flex-direction: ${props => props.direction ?? 'row'};
  justify-content: ${props => props.justify ?? 'flex-start'};
  align-items: ${props => props.align ?? 'flex-start'};
  row-gap: ${props => (props.rowGap ? formatSize(props.rowGap) : 'auto')};
  column-gap: ${props => (props.columnGap ? formatSize(props.columnGap) : 'auto')};
  gap: ${props => (props.gap ? formatSize(props.gap) : 'auto')};
  text-align: ${props => props.textAlign ?? 'auto'};
  flex-basis: ${props => props.basis ?? 'auto'};
  ${({ width }) =>
    width &&
    css`
      width: ${formatSize(width)};
    `}
  ${({ height }) =>
    height &&
    css`
      height: ${formatSize(height)};
    `}
`;

const formatSize = (value: string | number) => {
  const valueAsNumber = Number(value);
  if (isNaN(valueAsNumber)) return value.toString();
  return `${value}px`;
};

export { Flex };
