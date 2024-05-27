import { render } from '@testing-library/react';

import { Button } from '../../components/Button';
import { ThemedApp } from '../../stories/styles';
import { permutationsOfProps } from '../utils';

describe('Button', () => {
  describe('for all permutations', () => {
    const permutations = permutationsOfProps({
      size: ['sm', 'md', 'lg'],
      variant: ['primary', 'secondary', 'tertiary'],
      type: ['mint', 'destructive', 'disabled', 'navy'],
      wrap: ['wide', 'narrow'],
    });
    for (const permutation of permutations) {
      const key = Object.entries(permutation)
        .map(([key, value]) => `${key}=${value}`)
        .join(', ');
      test(key, () => {
        render(
          <ThemedApp>
            <Button title="Close" variant="primary" type="mint" size="sm" wrap="narrow" {...permutation} />
          </ThemedApp>
        );
      });
    }
  });
});
