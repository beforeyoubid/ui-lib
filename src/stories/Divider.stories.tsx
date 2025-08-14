import { type Meta, type StoryObj } from '@storybook/react';

import { Divider, type DividerProps } from '../components/Divider';
import { Flex } from '../components/Flex';
import { Typography } from '../components/Typography';

const meta: Meta<DividerProps> = {
  component: Divider,
  title: 'Display/Divider',
  args: {
    orientation: 'horizontal',
    variant: 'solid',
    color: 'dark15',
    thickness: 1,
  },
};

export default meta;
type Story = StoryObj<DividerProps>;

export const SolidHorizontal: Story = {
  render: args => (
    <Flex direction="column" gap={16} width={480}>
      <Typography class="bold" size="base" color="navy">
        Section A
      </Typography>
      <Divider {...args} variant="solid" orientation="horizontal" />
      <Typography class="roman" size="base" color="dark75">
        Body content
      </Typography>
    </Flex>
  ),
};

export const SolidVertical: Story = {
  render: args => (
    <Flex direction="row" gap={16} height={80}>
      <Typography class="roman" size="base" color="dark75">
        Left
      </Typography>
      <Divider {...args} variant="solid" orientation="vertical" length={64} thickness={2} />
      <Typography class="roman" size="base" color="dark75">
        Right
      </Typography>
    </Flex>
  ),
};

export const DashedHorizontal: Story = {
  render: args => (
    <Flex direction="column" gap={16} width={480}>
      <Typography class="bold" size="base" color="navy">
        Dashed
      </Typography>
      <Divider {...args} variant="dashed" color="dark45" dashLength={8} dashSpacing={8} thickness={3} />
    </Flex>
  ),
};

export const DashedVariants: Story = {
  render: args => (
    <Flex direction="column" gap={12} width={480}>
      <Divider {...args} variant="dashed" color="dark45" dashLength={4} dashSpacing={4} thickness={2} />
      <Divider {...args} variant="dashed" color="dark45" dashLength={6} dashSpacing={2} thickness={3} />
      <Divider {...args} variant="dashed" color="dark45" dashLength={10} dashSpacing={6} thickness={2} />
      <Divider {...args} variant="dashed" color="dark45" orientation="vertical" length={80} thickness={3} />
    </Flex>
  ),
};
