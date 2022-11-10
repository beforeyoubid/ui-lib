import { Delete } from '@mui/icons-material';
import { IconButton } from '@mui/material';
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
