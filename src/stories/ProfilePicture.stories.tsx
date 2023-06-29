import { Meta, Story } from '@storybook/react';
import { ProfilePicture } from '../components';
import { ProfilePictureProps } from '../components/ProfilePicture/types';

export default {
  title: 'ui-lib/ProfilePicture',
  component: ProfilePicture,
} as Meta;

const Template: Story<ProfilePictureProps> = args => (
  <div>
    <ProfilePicture {...args} />
  </div>
);

export const Main = Template.bind({});

Main.args = {
  alt: 'Bhupendra Ojha',
  link: 'https://images.pexels.com/photos/64152/tiger-cub-tiger-cub-big-cat-64152.jpeg?cs=srgb&dl=pexels-pixabay-64152.jpg&fm=jpg',
};
