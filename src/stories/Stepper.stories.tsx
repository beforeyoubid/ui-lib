import { useState } from 'react';

import { Stepper, type Step } from '../components/Stepper';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Stepper> = {
  component: Stepper,
  title: 'Display/Stepper',
  argTypes: {
    activeStep: { control: { type: 'number', min: 0 } },
    orientation: { control: { type: 'radio', options: ['horizontal', 'vertical'] } },
    steps: { control: 'object' },
    responsive: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    allowStepClick: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: `
A flexible stepper component for multi-step flows with support for:
- Error and disabled states
- Horizontal and vertical orientations
- Responsive overflow handling
- Full accessibility support
- Custom styling with theme integration
        `,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Stepper>;

const defaultSteps: Step[] = [
  { title: 'Property Information', key: 'property' },
  { title: 'Required Information', key: 'required' },
  { title: 'Payment', key: 'payment' },
];

const DefaultComponent = (args: any) => {
  const [activeStep, setActiveStep] = useState(args.activeStep);
  return (
    <div style={{ width: '100%' }}>
      <Stepper {...args} activeStep={activeStep} onStepChange={setActiveStep} />
    </div>
  );
};

export const Default: Story = {
  render: DefaultComponent,
  args: {
    steps: defaultSteps,
    activeStep: 1, // Shows completed, active, and upcoming
    orientation: 'horizontal',
    fullWidth: true,
  },
};

const manySteps: Step[] = Array.from({ length: 12 }, (_, i) => ({
  title: `Step ${i + 1}`,
  key: `step${i + 1}`,
}));

const ManyStepsComponent = (args: any) => {
  const [activeStep, setActiveStep] = useState(args.activeStep);
  return <Stepper {...args} activeStep={activeStep} onStepChange={setActiveStep} />;
};

export const ManyStepsOverflow: Story = {
  render: ManyStepsComponent,
  args: {
    steps: manySteps,
    activeStep: 5,
    orientation: 'horizontal',
    responsive: true,
    fullWidth: true,
  },
};

const errorSteps: Step[] = [
  { title: 'Step 1', key: 's1' },
  { title: 'Step 2', key: 's2', error: true },
  { title: 'Step 3', key: 's3', disabled: true },
  { title: 'Step 4', key: 's4' },
];

const ErrorComponent = (args: any) => {
  const [activeStep, setActiveStep] = useState(args.activeStep);
  return <Stepper {...args} activeStep={activeStep} onStepChange={setActiveStep} />;
};

export const ErrorAndDisabled: Story = {
  render: ErrorComponent,
  args: {
    steps: errorSteps,
    activeStep: 1,
    orientation: 'horizontal',
    responsive: false,
    fullWidth: false,
  },
};

const VerticalComponent = (args: any) => {
  const [activeStep, setActiveStep] = useState(args.activeStep);
  return (
    <div style={{ height: '400px' }}>
      <Stepper {...args} activeStep={activeStep} onStepChange={setActiveStep} />
    </div>
  );
};

export const VerticalOrientation: Story = {
  render: VerticalComponent,
  args: {
    steps: defaultSteps,
    activeStep: 1,
    orientation: 'vertical',
    fullWidth: false,
  },
};

const LinearFlowComponent = (args: any) => {
  const [activeStep, setActiveStep] = useState(args.activeStep);
  return (
    <div style={{ width: '100%' }}>
      <Stepper {...args} activeStep={activeStep} onStepChange={setActiveStep} />
      <p style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
        Try clicking on steps - they should be disabled to enforce linear flow.
      </p>
    </div>
  );
};

export const LinearFlow: Story = {
  render: LinearFlowComponent,
  args: {
    steps: defaultSteps,
    activeStep: 1,
    orientation: 'horizontal',
    fullWidth: true,
    allowStepClick: false,
  },
};

const EdgeCasesComponent = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
    <div>
      <h4>Single Step</h4>
      <Stepper steps={[{ title: 'Only Step', key: 'single' }]} activeStep={0} fullWidth />
    </div>

    <div>
      <h4>Long Step Titles</h4>
      <Stepper
        steps={[
          { title: 'This is a very long step title that might overflow', key: 'long1' },
          { title: 'Another extremely long step title for testing overflow behavior', key: 'long2' },
          { title: 'Short', key: 'short' },
        ]}
        activeStep={1}
        fullWidth
        responsive
      />
    </div>
  </div>
);

export const EdgeCases: Story = {
  render: EdgeCasesComponent,
};
