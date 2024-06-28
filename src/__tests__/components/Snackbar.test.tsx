import { render } from '@testing-library/react';

import { NotificationProvider, Typography } from '../../components';
import { ThemedApp } from '../../stories/styles';

describe('Snackbar', () => {
  test('renders component', () => {
    render(
      <ThemedApp>
        <NotificationProvider>
          <Typography color="dark100" class="roman" size="2xl">
            Snackbar test
          </Typography>
        </NotificationProvider>
      </ThemedApp>
    );
  });
});
