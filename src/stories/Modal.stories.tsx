import { Button } from '../components/Button';
import { Flex } from '../components/Flex';
import { Modal } from '../components/Modal';
import { Typography } from '../components/Typography';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'Display/Modal',
  argTypes: {
    onClose: { action: 'onClose' },
  },
  parameters: {
    controls: {
      exclude: /children/g,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Main: Story = {
  args: {
    open: true,
    children: (
      <Flex direction="column" gap="16px">
        <Typography color="dark90" size="base" class="medium">
          By deleting your account, you will be unable to login anymore.
        </Typography>
        <Flex direction="row" justify="flex-end" width="100%" gap="8px">
          <Button variant="tertiary" title="Cancel" type="destructive" size="sm" wrap="narrow" />
          <Button variant="primary" title="OK" type="mint" size="sm" wrap="narrow" />
        </Flex>
      </Flex>
    ),
    title: 'Are you sure you want to delete your account?',
  },
};
