import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { render } from '@testing-library/react';

import { DatePicker } from '../../components/DatePicker';
import { ThemedApp } from '../../stories/styles';

describe('DatePicker', () => {
  test('renders component', () => {
    render(
      <ThemedApp>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            label="Test"
            date={new Date()}
            onChange={console.log}
            incrementMonth={console.log}
            incrementYear={console.log}
            decrementMonth={console.log}
            decrementYear={console.log}
          />
        </LocalizationProvider>
      </ThemedApp>
    );
  });
});
