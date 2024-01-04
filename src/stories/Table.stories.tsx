import type { Meta, StoryObj } from '@storybook/react';

import { Table } from '../components/Table';
import { TableHeader } from '../components/TableHeader';
import { TableBody } from '../components/TableBody';
import { TableRow } from '../components/TableRow';
import { TableCell } from '../components/TableCell';

const meta: Meta<typeof Table> = {
  component: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  title: 'Display/Table',
};

export default meta;
type Story = StoryObj;

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export const Main: Story = {
  args: {
    children: (
      <Table>
        <TableHeader>
          <TableCell>Dessert (100g serving)</TableCell>
          <TableCell align="right">Calories</TableCell>
          <TableCell align="right" sort sortDirection="asc" onSort={console.log} sortKey="fat" isBeingSorted>
            Fat&nbsp;(g)
          </TableCell>
          <TableCell align="right">Carbs&nbsp;(g)</TableCell>
          <TableCell align="right">Protein&nbsp;(g)</TableCell>
        </TableHeader>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    ),
  },
};

export const Strikethrough: Story = {
  args: {
    children: (
      <Table>
        <TableHeader>
          <TableCell>Dessert (100g serving)</TableCell>
          <TableCell align="right">Calories</TableCell>
          <TableCell align="right" sort sortDirection="asc" onSort={console.log} sortKey="fat" isBeingSorted>
            Fat&nbsp;(g)
          </TableCell>
          <TableCell align="right">Carbs&nbsp;(g)</TableCell>
          <TableCell align="right">Protein&nbsp;(g)</TableCell>
        </TableHeader>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name} strikethrough={row.name === 'Eclair'}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    ),
  },
};
