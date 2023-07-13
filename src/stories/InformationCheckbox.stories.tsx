import type { Meta, StoryObj } from '@storybook/react';
import InformationCheckbox from '../components/InformationCheckBox';

const meta: Meta<typeof InformationCheckbox> = {
  component: InformationCheckbox,
};

export default meta;
type Story = StoryObj<typeof InformationCheckbox>;

export const Active: Story = {
  args: {},
};
