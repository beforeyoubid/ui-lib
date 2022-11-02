import { render } from '@testing-library/react';
import { ResponsiveTable } from '.';
import { MOCKDATA } from '../../utils';

describe('ResponsiveTable', () => {
  test('renders component', () => {
    render(<ResponsiveTable data={MOCKDATA.ORDERS} />);
  });
});
