import { ExclamationCircle } from '../components/Icon/Custom';
import { InfoBox } from '../components/InfoBox';
import { LinkButton } from '../components/LinkButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof InfoBox> = {
  component: InfoBox,
  title: 'Feedback/InfoBox',
};
export default meta;
type Story = StoryObj<typeof InfoBox>;

export const Info: Story = {
  args: {
    automationKey: 'component.InfoBox',
    variant: 'info',
    children: 'This is an informational message for the user.',
  },
};

export const Success: Story = {
  args: {
    automationKey: 'component.InfoBox',
    variant: 'success',
    children: 'Your operation was successful!',
  },
};

export const Warning: Story = {
  args: {
    automationKey: 'component.InfoBox',
    variant: 'warning',
    children: 'Please double-check your input before proceeding.',
  },
};

export const Error: Story = {
  args: {
    automationKey: 'component.InfoBox',
    variant: 'error',
    children: 'There was an error processing your request.',
  },
};

export const WithIcon: Story = {
  args: {
    automationKey: 'component.InfoBox',
    variant: 'info',
    icon: <ExclamationCircle color="mint60" size={20} />,
    children: 'This message includes a custom icon.',
  },
};

export const WithInlineLink: Story = {
  args: {
    automationKey: 'component.InfoBox',
    variant: 'info',
    icon: <ExclamationCircle color="mint60" size={20} />,
    children: (
      <>
        Activate <LinkButton type="mint" title="Required Information" size="sm" onClick={() => {}} underline /> details
        to enable Express Checkout.
      </>
    ),
  },
};

export const CustomColors: Story = {
  args: {
    automationKey: 'component.InfoBox',
    variant: 'info',
    icon: <ExclamationCircle color="mint60" size={20} />,
    backgroundColor: '#f0f8ff',
    borderColor: '#4a90e2',
    children: 'This InfoBox uses custom background and border colors.',
  },
};

export const NoIcon: Story = {
  args: {
    automationKey: 'component.InfoBox',
    variant: 'info',
    children: 'This InfoBox has no icon.',
  },
};
