import { render } from '@testing-library/react';
import { LinkButton } from '../../components/LinkButton';

describe('LinkButton', () => {
  test('renders component', () => {
    render(<LinkButton title="Close" type="grey" size="sm" />);
  });
});
