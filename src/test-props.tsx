import { Delete } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { createOrder } from './utils';

const actions = (
  <IconButton>
    <Delete />
  </IconButton>
);

export const responsiveTableData = [
  {
    ...createOrder(),
    actions,
  },
];
