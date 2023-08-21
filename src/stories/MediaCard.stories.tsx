import type { Meta, StoryObj } from '@storybook/react';

import { MediaCard } from '../components/MediaCard';

const meta: Meta<typeof MediaCard> = {
  component: MediaCard,
  title: 'Display/MediaCard',
  argTypes: {
    onSelect: { action: 'onSelect' },
    onRemove: { action: 'onRemove' },
  },
};

export default meta;
type Story = StoryObj<typeof MediaCard>;

export const Upload: Story = {
  args: {
    state: 'upload',
  },
};

export const Uploaded: Story = {
  args: {
    state: 'uploaded',
    src: '/ken.png',
  },
};

export const Uploading: Story = {
  args: {
    state: 'uploading',
    src: '/ken.png',
  },
};

export const Error: Story = {
  args: {
    state: 'error',
  },
};

export const Locked: Story = {
  args: {
    state: 'locked',
    src: '/ken.png',
  },
};
