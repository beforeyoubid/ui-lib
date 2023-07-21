import type { Meta, StoryObj } from '@storybook/react';

import { ImageUpload } from '../components/ImageUpload';

const meta: Meta<typeof ImageUpload> = {
  component: ImageUpload,
  title: 'Input/ImageUpload',
};

export default meta;
type Story = StoryObj<typeof ImageUpload>;

// export const SmallMain: Story = {
//   args: {
//     variant: 'small',
//     label: 'Label',
//     labelRequired: true,
//     helperText: 'This is hint text to help the user.',
//     errorText: 'Error text',
//     error: false,
//     canUpload: true,
//   },
// };

export const LargeMain: Story = {
  args: {
    variant: 'large',
    label: 'Label',
    labelRequired: true,
    helperText: 'This is hint text to help the user.',
    errorText: 'Error text',
    error: false,
    canUpload: true,
  },
};

export const LargeError: Story = {
  args: {
    variant: 'large',
    label: 'Label',
    labelRequired: true,
    helperText: 'This is hint text to help the user.',
    errorText: 'Error text',
    error: true,
    canUpload: true,
  },
};

export const LargeUploaded: Story = {
  args: {
    variant: 'large',
    label: 'Label',
    labelRequired: true,
    helperText: 'This is hint text to help the user.',
    errorText: 'Error text',
    canUpload: true,
    error: false,
    src: '/ken.png',
  },
};
