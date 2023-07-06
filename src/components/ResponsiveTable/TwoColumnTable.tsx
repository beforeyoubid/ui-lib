import { Box, Divider, Table, TableCell, TableRow } from '@mui/material';
import { COLORS } from '../../my-constants';
import { isEvenNum } from '../../utils';
import { MyTableData, MyTableProps } from './types';

export const TwoColumnTable = ({ data }: MyTableProps): JSX.Element => {
  const renderOneSet = (d: MyTableData): JSX.Element[] => {
    return Object.entries(d).map(([k, v], i) => {
      return (
        <TableRow
          key={k}
          //style={{ ...(isEvenNum(i) ?  bgcolor: COLORS.GRAY  :  bgcolor: '' ) }}
          //style={{ ...(isEvenNum(i) ? { backgroundColor: COLORS.GRAY } : { backgroundColor: '' }) }}
          style={{ backgroundColor: isEvenNum(i) ? COLORS.GRAY : '' }}
        >
          <TableCell variant="head">{k}</TableCell>
          <TableCell style={{ width: '100%' }}>{v}</TableCell>
        </TableRow>
      );
    });
  };

  const renderData = (): JSX.Element[] => {
    return data.map((d, i) => (
      <Box mb={2} key={i}>
        {renderOneSet(d)}
        <Divider style={{ margin: 2 }} />
      </Box>
    ));
  };

  return <Table>{renderData()}</Table>;
};
