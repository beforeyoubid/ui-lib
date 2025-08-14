import { fireEvent, render, screen } from '@testing-library/react';

import { SelectableCard } from '../../components/SelectableCard';
import { ThemedApp } from '../../stories/styles';

describe('SelectableCard', () => {
  test('calls onSelect on click and keyboard (radio)', () => {
    const onSelect = jest.fn();
    render(
      <ThemedApp>
        <SelectableCard
          automationKey="selectable-card"
          variant="radio"
          selected={false}
          onSelect={onSelect}
          title="Strata Report"
        />
      </ThemedApp>
    );
    const button = screen.getByRole('radio');
    fireEvent.click(button);
    expect(onSelect).toHaveBeenCalledTimes(1);
    fireEvent.keyDown(button, { key: 'Enter' });
    expect(onSelect).toHaveBeenCalledTimes(2);
    fireEvent.keyDown(button, { key: ' ' });
    expect(onSelect).toHaveBeenCalledTimes(3);
  });

  test('does not trigger when disabled', () => {
    const onSelect = jest.fn();
    render(
      <ThemedApp>
        <SelectableCard
          automationKey="selectable-card"
          variant="checkbox"
          selected={false}
          onSelect={onSelect}
          title="Pool Report"
          disabled
        />
      </ThemedApp>
    );
    const button = screen.getByRole('checkbox');
    fireEvent.click(button);
    expect(onSelect).not.toHaveBeenCalled();
  });
});
