import { TableRow as TableRowMui, styled } from '@mui/material';

export type TableRowProps = {
  children: React.ReactNode;
};

export function TableRow(props: TableRowProps) {
  return <StyledTableRow>{props.children}</StyledTableRow>;
}

const StyledTableRow = styled(TableRowMui)`
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
`;
