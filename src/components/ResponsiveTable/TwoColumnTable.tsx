import { Box, Divider, Table, TableCell, TableRow } from '@mui/material';
import { COLORS } from '../../my-constants';
import { isEvenNum } from '../../utils';
import { MyTableData, MyTableProps } from './types';

export const TwoColumnTable = ({ data }: MyTableProps): JSX.Element => {
  const renderOneSet = (d: MyTableData): JSX.Element[] => {
    return Object.entries(d).map(([k, v], i) => {
      return (
        <TableRow key={k} sx={{ ...(isEvenNum(i) && { bgcolor: COLORS.GRAY }) }}>
          <TableCell variant="head">{k}</TableCell>
          <TableCell sx={{ width: '100%' }}>{v}</TableCell>
        </TableRow>
      );
    });
  };

  const renderData = (): JSX.Element[] => {
    return data.map((d, i) => (
      <Box mb={2} key={i}>
        {renderOneSet(d)}
        <Divider sx={{ my: 2 }} />
      </Box>
    ));
  };

  return <Table>{renderData()}</Table>;
};
