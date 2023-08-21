import { TableHead as TableHeadMui, styled } from '@mui/material';
import { TableRow } from './TableRow';

export type TableHeaderProps = {
  children: React.ReactNode;
};

export function TableHeader(props: TableHeaderProps) {
  return (
    <StyledTableHead>
      <TableRow>{props.children}</TableRow>
    </StyledTableHead>
  );
}

const StyledTableHead = styled(TableHeadMui)`
  background-color: ${({ theme }) => theme.palette.colors.lightL1};
  & .MuiTableCell-root {
    position: relative;
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    font-family: 'Avenir-Heavy';

    :after {
      content: '';
      height: 70%;
      width: 1px;

      position: absolute;
      right: 0;
      top: 15%;

      background-color: ${({ theme }) => theme.palette.colors.dark15};
      &:last-child {
        display: none;
      }
    }
  }
`;
