import { Tooltip } from '../components';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: 'Display/ToolTip',
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Active: Story = {
  args: {
    title: 'Lorem ipsum',
    iconName: 'InfoCircle',
    iconColor: 'dark75',
    iconSize: 12,
  },
};
