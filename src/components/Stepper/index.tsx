import type React from 'react';
import { memo, useCallback } from 'react';

import {
  Stepper as MuiStepper,
  Step as MuiStep,
  StepLabel,
  styled,
  StepConnector,
  stepConnectorClasses,
  type StepIconProps as MuiStepIconProps,
} from '@mui/material';

import { Flex } from '../Flex';
import { Typography } from '../Typography';

import { StepDotIcon } from './StepDotIcon';

export type Step = {
  title: string;
  key: string;
  disabled?: boolean;
  error?: boolean;
};

/**
 * Stepper component for multi-step flows.
 * Renders a Material-UI Stepper with support for error, disabled, and responsive states.
 *
 * @param steps - Array of step objects with title, key, and optional error/disabled flags.
 * @param activeStep - The index of the currently active step.
 * @param onStepChange - Callback when a step is clicked (if not disabled).
 * @param orientation - 'horizontal' or 'vertical' layout.
 * @param fullWidth - If true, stepper stretches to container width.
 * @param responsive - If true, enables scroll/overflow for many steps.
 * @param allowStepClick - If false, users cannot click steps to jump (enforces linear flow).
 * @param className - Custom class for the container.
 * @param style - Inline styles for the container.
 */
export interface StepperProps {
  steps: Step[];
  activeStep: number;
  onStepChange?: (stepIndex: number) => void;
  orientation?: 'horizontal' | 'vertical';
  fullWidth?: boolean;
  responsive?: boolean;
  allowStepClick?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

// Step icon for all states (dot style only)
const StepIcon: React.FC<MuiStepIconProps> = memo(({ active, completed, error }) => {
  return <StepDotIcon completed={!!completed} active={!!active} error={!!error} />;
});

StepIcon.displayName = 'StepIcon';

/**
 * Stepper component for multi-step navigation.
 */
export const Stepper: React.FC<StepperProps> = memo(
  ({
    steps,
    activeStep,
    onStepChange,
    orientation = 'horizontal',
    fullWidth = false,
    responsive = false,
    allowStepClick = true,
    className,
    style,
  }) => {
    const handleStepClick = useCallback(
      (idx: number) => {
        if (allowStepClick && !steps[idx].disabled && onStepChange) {
          onStepChange(idx);
        }
      },
      [allowStepClick, steps, onStepChange]
    );

    const handleKeyDown = useCallback(
      (event: React.KeyboardEvent, idx: number) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          handleStepClick(idx);
        }
      },
      [handleStepClick]
    );

    // Input validation
    if (!steps || steps.length === 0) {
      console.warn('Stepper: steps array is empty or undefined');
      return null;
    }

    if (activeStep < 0 || activeStep >= steps.length) {
      console.warn(`Stepper: activeStep ${activeStep} is out of bounds [0, ${steps.length - 1}]`);
      return null;
    }

    // Validate unique keys
    const keys = steps.map(step => step.key);
    const uniqueKeys = new Set(keys);
    if (uniqueKeys.size !== keys.length) {
      console.warn('Stepper: step keys must be unique');
      return null;
    }

    return (
      <Wrapper
        className={className}
        style={style}
        fullWidth={fullWidth}
        responsive={responsive}
        orientation={orientation}
      >
        <MuiStepper
          activeStep={activeStep}
          orientation={orientation}
          alternativeLabel={orientation === 'horizontal'}
          connector={<CustomConnector />}
          sx={{ minWidth: 0, width: fullWidth ? '100%' : 'auto' }}
        >
          {steps.map((step, idx) => (
            <MuiStep
              key={step.key}
              completed={idx < activeStep && !step.error}
              disabled={step.disabled}
              onClick={() => handleStepClick(idx)}
              onKeyDown={event => handleKeyDown(event, idx)}
              tabIndex={allowStepClick && !step.disabled ? 0 : -1}
              role="button"
              aria-label={`Step ${idx + 1}: ${step.title}${step.error ? ' (has errors)' : ''}${
                step.disabled ? ' (disabled)' : ''
              }`}
              aria-current={idx === activeStep ? 'step' : undefined}
              sx={{ cursor: !allowStepClick || step.disabled ? 'default' : 'pointer', minWidth: 0 }}
            >
              <StepLabel
                error={!!step.error}
                StepIconComponent={StepIcon}
                sx={{
                  whiteSpace: 'nowrap',
                  overflow: 'visible',
                  textOverflow: 'clip',
                  minWidth: 0,
                  maxWidth: 'none',
                  width: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Typography size="base" color="dark90" class="medium">
                  {step.title}
                </Typography>
              </StepLabel>
            </MuiStep>
          ))}
        </MuiStepper>
      </Wrapper>
    );
  }
);

Stepper.displayName = 'Stepper';

// Wrapper component using styled from MUI, based on Flex
const Wrapper = styled(Flex, {
  shouldForwardProp: prop => prop !== 'fullWidth' && prop !== 'responsive' && prop !== 'orientation',
})<{
  fullWidth?: boolean;
  responsive?: boolean;
  orientation?: 'horizontal' | 'vertical';
}>(({ fullWidth, responsive, orientation }) => ({
  width: fullWidth ? '100%' : 'auto',
  overflowX: orientation === 'horizontal' && responsive ? 'auto' : 'visible',
  overflowY: orientation === 'vertical' && responsive ? 'auto' : 'visible',
}));
// Custom connector to remove spacing between steps
const CustomConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 12, // Center the connector with the dot
    left: 'calc(-50% + 12px)',
    right: 'calc(50% + 12px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.colors.mint60,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.colors.mint60,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.colors.dark30,
    borderTopWidth: 2,
    borderRadius: 1,
  },
}));
