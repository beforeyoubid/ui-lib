import { TableRow as TableRowMui, styled, css } from '@mui/material';

import { type Color } from '../mui-theme';

export type TableRowProps = {
  children: React.ReactNode;
  strikethrough?: boolean;
  strikethroughColor?: Color;
};

export function TableRow(props: TableRowProps) {
  return (
    <StyledTableRow
      strikethrough={props.strikethrough ?? false}
      strikethroughColor={props.strikethroughColor ?? 'error75'}
    >
      {props.children}
    </StyledTableRow>
  );
}

const StyledTableRow = styled(TableRowMui, {
  shouldForwardProp: prop => prop !== 'strikethroughColor' && prop !== 'strikethrough',
})<{ strikethrough: boolean; strikethroughColor: Color }>`
  position: relative;

  & .MuiTableCell-root {
    color: ${({ theme }) => theme.palette.colors.dark75};
    padding: ${({ theme }) => theme.spacing(1.5, 1)};
    .Mui-active {
      color: ${({ theme }) => theme.palette.colors.dark75};
      svg {
        color: ${({ theme }) => theme.palette.colors.dark75};
        font-size: 12px;
      }
    }
    border-color: ${({ theme }) => theme.palette.colors.lightL3};
    font-size: ${({ theme }) => theme.typography.size.sm.fontSize};
    line-height: ${({ theme }) => theme.typography.size.sm.lineHeight};
  }
  ${({ strikethrough, strikethroughColor, theme }) =>
    strikethrough &&
    css`
      &:after {
        content: ' ';
        position: absolute;
        display: inline-block;
        left: 0;
        border-bottom: 1px solid ${theme.palette.colors[strikethroughColor]};
        width: 98%;
        margin-left: 1%;
        top: 50%;
      }
    `}
`;
