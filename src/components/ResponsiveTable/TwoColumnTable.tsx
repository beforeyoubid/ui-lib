import { Box, Divider, Table, TableCell, TableRow } from '@mui/material';
import { COLORS } from '../../my-constants';
import { isEvenNum } from '../../utils';
import { TableProps } from './types';

export const TwoColumnTable = ({ data }: TableProps): JSX.Element => {
  return (
    <Table>
      {data.map((d, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Box mb={2} key={i}>
          {Object.entries(d).map(([k, v], i) => (
            <TableRow
              key={k}
              //style={{ ...(isEvenNum(i) ?  bgcolor: COLORS.GRAY  :  bgcolor: '' ) }}
              //style={{ ...(isEvenNum(i) ? { backgroundColor: COLORS.GRAY } : { backgroundColor: '' }) }}
              style={{ backgroundColor: isEvenNum(i) ? COLORS.GRAY : '' }}
            >
              <TableCell variant="head">{k}</TableCell>
              <TableCell style={{ width: '100%' }}>{v}</TableCell>
            </TableRow>
          ))}
          <Divider style={{ margin: 2 }} />
        </Box>
      ))}
    </Table>
  );
};
