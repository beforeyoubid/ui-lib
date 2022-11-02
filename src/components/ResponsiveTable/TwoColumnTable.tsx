import { Box, Table, TableCell, TableRow } from '@mui/material';
import { COLORS } from 'my-constants';
import { isEvenNum } from 'utils';
import { MyTableData, MyTableProps } from './types';

export const TwoColumnTable = ({ data }: MyTableProps): JSX.Element => {
  const renderOneSet = (d: MyTableData) => {
    return Object.entries(d).map(([k, v], i) => {
      return (
        <TableRow key={k} sx={{ ...(isEvenNum(i) && { bgcolor: COLORS.GRAY }) }}>
          <TableCell variant="head">{k}</TableCell>
          <TableCell sx={{ width: '100%' }}>{v}</TableCell>
        </TableRow>
      );
    });
  };

  const renderData = () => {
    return data.map(d => <Box mb={2}>{renderOneSet(d)}</Box>);
  };

  return <Table>{renderData()}</Table>;
};
