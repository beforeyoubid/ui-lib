import { render } from '@testing-library/react';
import { Phone } from 'tabler-icons-react';

import { TextInput } from '../../components/TextInput';
import { ThemedApp } from '../../stories/styles';

describe('TextInput', () => {
  test('renders component', () => {
    render(
      <ThemedApp>
        <TextInput label="Test" value="" required helperText="hi" />
      </ThemedApp>
    );
  });
  test('renders component w/ error', () => {
    render(
      <ThemedApp>
        <TextInput label="Test" value="" required helperText="hi" error errorText="hi" />
      </ThemedApp>
    );
  });
  test('renders component w/ leading adornment', () => {
    render(
      <ThemedApp>
        <TextInput label="Test" value="" leadingIcon={Phone} />
      </ThemedApp>
    );
  });
  test('renders component w/ trailing adornment', () => {
    render(
      <ThemedApp>
        <TextInput label="Test" value="" leadingIcon={Phone} endAdornment="hi" showEndAdornmentBorder />
      </ThemedApp>
    );
  });
  test('renders disabled component', () => {
    render(
      <ThemedApp>
        <TextInput label="Test" value="" disabled />
      </ThemedApp>
    );
  });
});
