import type { Meta, StoryObj } from '@storybook/react';
import InformationCheckbox from '../components/InformationCheckBox';

const meta: Meta<typeof InformationCheckbox> = {
  component: InformationCheckbox,
};

export default meta;
type Story = StoryObj<typeof InformationCheckbox>;

export const Props: Story = {
  args: {
    checked: true,
    title: 'Registered for GST',
    variant: 'info',
    description:
      "Businesses registered for GST have to collect this extra money (one-eleventh of the sale price) from their customers. This is paid to the Australian Taxation Office (ATO) when it's due.",
  },
};
