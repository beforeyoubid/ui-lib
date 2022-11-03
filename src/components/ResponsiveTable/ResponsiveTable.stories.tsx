import { Delete } from '@mui/icons-material/';
import { IconButton } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { createOrder } from '../../utils';
import { ResponsiveTable } from './';

export default {
  title: 'ui-lib/ResponsiveTable',
  component: ResponsiveTable,
} as ComponentMeta<typeof ResponsiveTable>;

const Template: ComponentStory<typeof ResponsiveTable> = args => <ResponsiveTable {...args} />;

const actions = (
  <IconButton>
    <Delete />
  </IconButton>
);

const data = [
  {
    ...createOrder(),
    actions,
  },
];

export const OrdersTable = Template.bind({});
OrdersTable.args = {
  data,
};
