import { type Meta, type StoryObj } from '@storybook/react';
import { KebabMenu } from '../components/KebabMenu';

const meta: Meta<typeof KebabMenu> = {
  component: KebabMenu,
  title: 'Navigation/KebabMenu',
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
};

export default meta;
type Story = StoryObj<typeof KebabMenu>;

export const Main: Story = {
  args: {
    options: [
      {
        type: 'VIEW_ORDER',
        label: 'View order',
        icon: 'Eye',
        description: 'See a detailed page for this order',
      },
      {
        type: 'REQUEST_REPORT_UPDATE',
        label: 'Request a report update',
        icon: 'Reload',
        description: 'Ask for a re-inspection or a free re-upload',
      },
      {
        type: 'SELECT_SUCCESSFUL_BUYER',
        label: 'Select successful buyer',
        icon: 'UserCheck',
      },
      {
        type: 'SEND_PURCHASE_LINK_LETTER',
        label: 'Send purchase link letter',
        icon: 'MailForward',
        description: 'Share this with interested parties',
      },
    ],
  },
};

export const ExtraOptions: Story = {
  args: {
    options: [
      {
        type: 'VIEW_ORDER',
        label: 'View order',
        icon: 'Eye',
        description: 'See a detailed page for this order',
      },
      {
        type: 'REQUEST_REPORT_UPDATE',
        label: 'Request a report update',
        icon: 'Reload',
        description: 'Ask for a re-inspection or a free re-upload',
      },
      {
        type: 'SELECT_SUCCESSFUL_BUYER',
        label: 'Select successful buyer',
        icon: 'UserCheck',
      },
      {
        type: 'SEND_PURCHASE_LINK_LETTER',
        label: 'Send purchase link letter',
        icon: 'MailForward',
        description: 'Share this with interested parties',
      },
      {
        type: 'CONVERT_TO_BUYER_FREE',
        label: 'Convert to buyer free',
        icon: 'ArrowForward',
      },
      {
        type: 'EDIT_ADDRESS',
        label: 'Edit address',
        icon: 'Edit',
      },
      {
        type: 'HOLD_REPORT',
        label: 'Put on hold',
        icon: 'PlayerPause',
        description: 'this will block re-purchases until resumed',
      },
      {
        type: 'CLOSE_IN_2_DAYS',
        label: 'Close in 2 days',
        icon: 'SquareRoundedLetterX',
      },
      {
        type: 'CLOSE_NOW',
        label: 'Close now',
        icon: 'Trash',
        description: 'this will notify the linked users',
      },
    ],
  },
};
