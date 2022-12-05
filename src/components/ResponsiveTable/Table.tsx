import { Table, TableCell, TableRow, Paper, TableBody, TableContainer, TableHead } from '@material-ui/core';

import { MyTableProps } from './types';

export const MyTable = ({ data }: MyTableProps): JSX.Element => {
  const renderHeaders = (): JSX.Element => {
    const headers = Object.keys(data[0]);
    return (
      <>
        <TableHead>
          <TableRow>
            {headers.map(h => (
              <TableCell align="left" key={h}>
                {h}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
      </>
    );
  };

  const renderAllRows = (): JSX.Element => {
    const rows = Object.values(data[0]);

    return <TableBody>{renderOneRow(rows)}</TableBody>;
  };

  const renderOneRow = (rowValue: (string | number | JSX.Element)[]): JSX.Element => {
    return (
      <TableRow>
        {rowValue.map((r, i) => (
          <TableCell align="left" key={i}>
            {r}
          </TableCell>
        ))}
      </TableRow>
    );
  };

  return (
    <TableContainer component={Paper}>
      <Table style={{ minWidth: 650 }} aria-label="simple table">
        {renderHeaders()}
        {renderAllRows()}
      </Table>
    </TableContainer>
  );
};
