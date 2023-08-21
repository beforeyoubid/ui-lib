import { TableBody as TableBodyMui } from '@mui/material';

export type TableBodyProps = {
  children: React.ReactNode;
};

export function TableBody(props: TableBodyProps) {
  return <TableBodyMui>{props.children}</TableBodyMui>;
}
