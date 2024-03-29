import { useCallback } from 'react';

import {
  TableCell as TableCellMui,
  type TableCellProps as TableCellPropsMuiProps,
  TableSortLabel,
} from '@mui/material';

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
