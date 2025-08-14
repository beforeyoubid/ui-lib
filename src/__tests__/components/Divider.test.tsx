import { render } from '@testing-library/react';

import { Divider } from '../../components/Divider';
import { ThemedApp } from '../../stories/styles';

describe('Divider', () => {
  test('renders solid horizontal divider', () => {
    render(
      <ThemedApp>
        <Divider variant="solid" orientation="horizontal" />
      </ThemedApp>
    );
  });

  test('renders dashed vertical divider', () => {
    render(
      <ThemedApp>
        <Divider variant="dashed" orientation="vertical" length={48} thickness={2} />
      </ThemedApp>
    );
  });

  test('accepts custom dash config', () => {
    render(
      <ThemedApp>
        <Divider variant="dashed" dashLength={4} dashSpacing={2} thickness={3} />
      </ThemedApp>
    );
  });
});
