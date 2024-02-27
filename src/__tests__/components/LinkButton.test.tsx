import { render } from '@testing-library/react';

import { LinkButton } from '../../components/LinkButton';
import { ThemedApp } from '../../stories/styles';

describe('LinkButton', () => {
  test('renders component', () => {
    render(
      <ThemedApp>
        <LinkButton title="Close" type="grey" size="sm" />
      </ThemedApp>
    );
  });
});
