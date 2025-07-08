import { render } from '@testing-library/react';

import { Stepper } from '../../components/Stepper';
import { ThemedApp } from '../../stories/styles';
import { permutationsOfProps } from '../utils';

const defaultSteps = [
  { title: 'Step 1', key: 'step1' },
  { title: 'Step 2', key: 'step2' },
  { title: 'Step 3', key: 'step3' },
];

describe('Stepper', () => {
  describe('for all permutations', () => {
    const permutations = permutationsOfProps({
      orientation: ['horizontal', 'vertical'],
      fullWidth: [true, false],
      responsive: [true, false],
      allowStepClick: [true, false],
    });
    for (const permutation of permutations) {
      const key = Object.entries(permutation)
        .map(([key, value]) => `${key}=${value}`)
        .join(', ');
      test(key, () => {
        render(
          <ThemedApp>
            <Stepper
              steps={defaultSteps}
              activeStep={1}
              orientation="horizontal"
              fullWidth={false}
              responsive={false}
              allowStepClick
              {...permutation}
            />
          </ThemedApp>
        );
      });
    }
  });

  describe('basic functionality', () => {
    test('should render with default props', () => {
      render(
        <ThemedApp>
          <Stepper steps={defaultSteps} activeStep={1} />
        </ThemedApp>
      );
    });

    test('should render with error state', () => {
      const errorSteps = [
        { title: 'Step 1', key: 'step1' },
        { title: 'Step 2', key: 'step2', error: true },
        { title: 'Step 3', key: 'step3' },
      ];
      render(
        <ThemedApp>
          <Stepper steps={errorSteps} activeStep={1} />
        </ThemedApp>
      );
    });

    test('should render with disabled state', () => {
      const disabledSteps = [
        { title: 'Step 1', key: 'step1' },
        { title: 'Step 2', key: 'step2', disabled: true },
        { title: 'Step 3', key: 'step3' },
      ];
      render(
        <ThemedApp>
          <Stepper steps={disabledSteps} activeStep={0} />
        </ThemedApp>
      );
    });

    test('should handle single step', () => {
      const singleStep = [{ title: 'Only Step', key: 'single' }];
      render(
        <ThemedApp>
          <Stepper steps={singleStep} activeStep={0} />
        </ThemedApp>
      );
    });
  });
});
