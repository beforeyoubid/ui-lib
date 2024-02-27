import { type Meta, type StoryObj } from '@storybook/react';
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
    size: 200,
    link: 'https://www.lunapic.com/editor/premade/transparent.gif',
  },
};
