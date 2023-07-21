import { render } from '@testing-library/react';
import { Button } from '../../components/Button';

describe('Button', () => {
  test('renders component', () => {
    render(<Button title="Close" primaryVariant="primary" secondaryVariant="mint" />);
  });
});
