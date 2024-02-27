import { LinkButton } from '../components/LinkButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LinkButton> = {
  component: LinkButton,
  title: 'Input/LinkButton',
};

export default meta;
type Story = StoryObj<typeof LinkButton>;

export const Active: Story = {
  args: {
    type: 'mint',
    title: 'Login',
    size: 'lg',
    disableRipple: true,
  },
};
