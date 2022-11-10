import { render } from '@testing-library/react';
import { ResponsiveTable } from '../../components/ResponsiveTable';
import { responsiveTableData } from '../../test-props';

describe('ResponsiveTable', () => {
  test('renders component', () => {
    render(<ResponsiveTable data={responsiveTableData} />);
  });
});
