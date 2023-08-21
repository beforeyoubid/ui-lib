import { TableCell as TableCellMui, TableCellProps as TableCellPropsMuiProps, TableSortLabel } from '@mui/material';
import { useCallback } from 'react';

export type TableCellProps = {
  children: React.ReactNode;
} & Pick<TableCellPropsMuiProps, 'align' | 'component' | 'scope' | 'onClick'> &
  (
    | {
        sort: true;
        sortKey: string;
        isBeingSorted: boolean;
        sortDirection: 'asc' | 'desc';
        onSort: (sortKey: string) => void;
      }
    | { sort?: false }
  );

export function TableCell(props: TableCellProps) {
  const onSort = useCallback(() => {
    if (!props.sort) return;
    props.onSort(props.sortKey);
  }, [props]);
  return (
    <TableCellMui sortDirection={props.sort ? props.sortDirection : undefined}>
      {props.sort ? (
        <TableSortLabel active={props.isBeingSorted} direction={props.sortDirection} onClick={onSort}>
          {props.children}
        </TableSortLabel>
      ) : (
        props.children
      )}
    </TableCellMui>
  );
}
