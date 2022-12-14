import { Meta, Story } from '@storybook/react';
import { KebabMenu } from '../components/KebabMenu';
import { KebabMenuProps } from '../components/KebabMenu/types';
import { ThemedApp } from './styles';

export default {
  title: 'KebabMenu',
  component: KebabMenu,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },
    maxOptions: { control: { type: 'number', min: 2, max: 6, step: 1 } },
    optionHeight: {
      table: { disable: true },
    },
    paddingHeight: {
      table: { disable: true },
    },
  },
} as Meta;

const Template: Story<KebabMenuProps> = args => (
  <ThemedApp>
    <KebabMenu {...args} />
  </ThemedApp>
);

export const Main = Template.bind({});
Main.args = {
  options: [
    {
      type: 'VIEW_ORDER',
      label: 'View order',
      icon: 'eye',
      description: 'See a detailed page for this order',
    },
    {
      type: 'REQUEST_REPORT_UPDATE',
      label: 'Request a report update',
      icon: 'refresh',
      description: 'Ask for a re-inspection or a free re-upload',
    },
    {
      type: 'SELECT_SUCCESSFUL_BUYER',
      label: 'Select successful buyer',
      icon: 'successful-buyer',
    },
    {
      type: 'SEND_PURCHASE_LINK_LETTER',
      label: 'Send purchase link letter',
      icon: 'email',
      description: 'Share this with interested parties',
    },
  ],
};

export const ExtraOptions = Template.bind({});
ExtraOptions.args = {
  options: [
    {
      type: 'VIEW_ORDER',
      label: 'View order',
      icon: 'eye',
      description: 'See a detailed page for this order',
    },
    {
      type: 'REQUEST_REPORT_UPDATE',
      label: 'Request a report update',
      icon: 'refresh',
      description: 'Ask for a re-inspection or a free re-upload',
    },
    {
      type: 'SELECT_SUCCESSFUL_BUYER',
      label: 'Select successful buyer',
      icon: 'successful-buyer',
    },
    {
      type: 'SEND_PURCHASE_LINK_LETTER',
      label: 'Send purchase link letter',
      icon: 'email',
      description: 'Share this with interested parties',
    },
    {
      type: 'CONVERT_TO_BUYER_FREE',
      label: 'Convert to buyer free',
      icon: 'arrow-forward',
    },
    {
      type: 'EDIT_ADDRESS',
      label: 'Edit address',
      icon: 'edit',
    },
    {
      type: 'HOLD_REPORT',
      label: 'Put on hold',
      icon: 'pause',
      description: 'this will block re-purchases until resumed',
    },
    {
      type: 'CLOSE_IN_2_DAYS',
      label: 'Close in 2 days',
      icon: 'close',
    },
    {
      type: 'CLOSE_NOW',
      label: 'Close now',
      icon: 'delete',
      description: 'this will notify the linked users',
    },
  ],
};
