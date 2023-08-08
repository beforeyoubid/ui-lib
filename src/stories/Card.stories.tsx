import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '../components/Card';
import { Flex } from '../components/Flex';
import { Typography } from '../components/Typography';
import { MediaCard } from '../components/MediaCard';
import { theme } from '../mui-theme';
// import { ThemedApp } from './styles';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Display/Card',
  parameters: {
    controls: {
      exclude: /children/g,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Editable: Story = {
  args: {
    title: 'Gallery',
    editable: true,
    loading: true,
    children: (
      <Flex direction="column" gap={4}>
        <div>
          <Typography size="base" class="medium" color="dark90" padding={0}>
            Upload Photos and Videos
          </Typography>
        </div>
        <Flex
          style={{
            border: `1px dotted black`,
            padding: 12,
            borderRadius: 8,
            backgroundColor: theme.palette.colors.lightL1,
          }}
          gap={12}
          width="100%"
        >
          <MediaCard src="/ken.png" state="uploaded" onRemove={console.log} />
          <MediaCard src="/ken.png" state="locked" />
        </Flex>
      </Flex>
    ),
  },
};

export const Editing: Story = {
  args: {
    title: 'Gallery',
    editable: true,
    editing: true,
    children: (
      <Flex direction="column" gap={4}>
        <div>
          <Typography size="base" class="medium" color="dark90" padding={0}>
            Upload Photos and Videos
          </Typography>
        </div>
        <Flex
          style={{
            border: `1px dotted black`,
            padding: 12,
            borderRadius: 8,
            backgroundColor: theme.palette.colors.lightL1,
          }}
          gap={12}
          width="100%"
        >
          <MediaCard src="/ken.png" state="uploaded" onRemove={console.log} />
          <MediaCard src="/ken.png" state="locked" />
          <MediaCard state="upload" onSelect={console.log} />
        </Flex>
      </Flex>
    ),
  },
};

export const Empty: Story = {
  args: {
    title: 'Empty card',
    editable: false,
    children: <>.</>,
  },
};
