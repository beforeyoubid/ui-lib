import { Table as TableMui, styled } from '@mui/material';

export type TableProps = {
  children: React.ReactNode[];
};

export function Table(props: TableProps) {
  return <StyledTable>{props.children}</StyledTable>;
}

const StyledTable = styled(TableMui)`
  background-color: ${({ theme }) => theme.palette.colors.lightWhite};
  .MuiTableCell-root:first-child {
    padding-left: ${({ theme }) => theme.spacing(3.5)};
  }
  .MuiTableCell-root:last-child {
    padding-right: ${({ theme }) => theme.spacing(3.5)};
  }
`;
