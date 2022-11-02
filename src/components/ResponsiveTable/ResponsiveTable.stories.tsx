import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MOCKDATA } from '../../utils';
import { ResponsiveTable } from './';

export default {
  title: 'ui-lib/ResponsiveTable',
  component: ResponsiveTable,
} as ComponentMeta<typeof ResponsiveTable>;

const Template: ComponentStory<typeof ResponsiveTable> = args => <ResponsiveTable {...args} />;

export const OrdersTable = Template.bind({});
OrdersTable.args = {
  data: MOCKDATA.ORDERS,
};
