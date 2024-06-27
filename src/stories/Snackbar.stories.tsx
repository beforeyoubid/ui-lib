import { HomeCheck } from 'tabler-icons-react';

import { Button, Flex } from '../components';
import { NotificationProvider, useNotification } from '../components/Snackbar';

import { useTheme } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

const SnackbarStory = () => {
  const { showNotification } = useNotification();
  const theme = useTheme();
  return (
    <Flex width="100%" direction="column" gap={theme.spacing(2.5)}>
      <Button
        variant="primary"
        type="mint"
        size="md"
        wrap="narrow"
        title="Success"
        onClick={() =>
          showNotification({
            message: 'This is a success message',
            type: 'success',
            icon: HomeCheck,
          })
        }
      />
      <Button
        variant="primary"
        type="destructive"
        size="md"
        wrap="narrow"
        title="Error"
        onClick={() =>
          showNotification({
            message: 'This is a error message',
            type: 'error',
            icon: HomeCheck,
          })
        }
      />
      <Button
        variant="secondary"
        type="mint"
        size="md"
        wrap="narrow"
        title="Warning"
        onClick={() =>
          showNotification({
            message: 'This is a warning message',
            type: 'warning',
            icon: HomeCheck,
          })
        }
      />
      <Button
        variant="primary"
        type="navy"
        size="md"
        wrap="narrow"
        title="Info"
        onClick={() =>
          showNotification({
            message: 'This is a info message',
            type: 'info',
            icon: HomeCheck,
          })
        }
      />
    </Flex>
  );
};

const WrapperComponent = () => {
  return (
    <NotificationProvider>
      <SnackbarStory />
    </NotificationProvider>
  );
};

const meta: Meta<typeof SnackbarStory> = {
  component: WrapperComponent,
  title: 'Display/Notification',
};

export default meta;
type Story = StoryObj<typeof SnackbarStory>;

export const Main: Story = {};
