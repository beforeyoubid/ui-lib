import { fireEvent, render, screen } from '@testing-library/react';

import { MultiSelectDropdown } from '../../components/MultiSelectDropdown';
import { ThemedApp } from '../../stories/styles';

const OPTIONS = [
  { label: 'Sydney', value: 'syd' },
  { label: 'Melbourne', value: 'mel' },
  { label: 'Brisbane', value: 'bne' },
];

describe('MultiSelectDropdown', () => {
  test('selects and clears values', () => {
    const onChange = jest.fn();
    render(
      <ThemedApp>
        <MultiSelectDropdown
          automationKey="cities"
          label="Cities"
          values={[]}
          onChange={onChange}
          options={OPTIONS}
          clearable
        />
      </ThemedApp>
    );

    const input = screen.getByRole('combobox');
    fireEvent.mouseDown(input);

    // Click first option
    const opt = screen.getByText('Sydney');
    fireEvent.click(opt);
    expect(onChange).toHaveBeenCalledWith(['syd']);
  });

  test('clear button removes all selections', () => {
    const onChange = jest.fn();
    render(
      <ThemedApp>
        <MultiSelectDropdown
          automationKey="cities"
          label="Cities"
          values={['syd', 'mel']}
          onChange={onChange}
          options={OPTIONS}
          clearable
        />
      </ThemedApp>
    );
    const clear = screen.getByLabelText('Clear');
    fireEvent.click(clear);
    expect(onChange).toHaveBeenCalledWith([]);
  });
});
