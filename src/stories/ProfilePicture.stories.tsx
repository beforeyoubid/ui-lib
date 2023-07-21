import { Meta, StoryObj } from '@storybook/react';
import { ProfilePicture } from '../components';

const meta: Meta<typeof ProfilePicture> = {
  component: ProfilePicture,
  title: 'Display/ProfilePicture',
};

export default meta;
type Story = StoryObj<typeof ProfilePicture>;

export const Active: Story = {
  args: {
    alt: 'Bhupendra Ojha',
    link: 'https://images.pexels.com/photos/64152/tiger-cub-tiger-cub-big-cat-64152.jpeg?cs=srgb&dl=pexels-pixabay-64152.jpg&fm=jpg',
  },
};
