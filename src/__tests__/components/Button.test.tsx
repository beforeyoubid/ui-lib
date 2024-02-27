import { render } from '@testing-library/react';

import { Button } from '../../components/Button';
import { ThemedApp } from '../../stories/styles';

describe('Button', () => {
  test('renders component', () => {
    render(
      <ThemedApp>
        <Button title="Close" variant="primary" type="mint" size="md" wrap="narrow" />
      </ThemedApp>
    );
  });
});
