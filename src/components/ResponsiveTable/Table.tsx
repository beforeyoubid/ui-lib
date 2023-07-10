import { Table as MuiTable, TableCell, TableRow, Paper, TableBody, TableContainer, TableHead } from '@mui/material';

import { TableProps } from './types';

export const Table = ({ data }: TableProps): JSX.Element => {
  const headers = Object.keys(data[0]);
  const rows = Object.values(data[0]);

  return (
    <TableContainer component={Paper}>
      <MuiTable style={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map(h => (
              <TableCell align="left" key={h}>
                {h}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {rows.map((r, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <TableCell align="left" key={i}>
                {r}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};
