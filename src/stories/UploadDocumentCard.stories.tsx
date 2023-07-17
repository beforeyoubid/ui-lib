import type { Meta, StoryObj } from '@storybook/react';

import { UploadDocumentCard } from '../components/UploadDocumentCard';
// import { ThemedApp } from './styles';

const meta: Meta<typeof UploadDocumentCard> = {
  component: UploadDocumentCard,
};

export default meta;
type Story = StoryObj<typeof UploadDocumentCard>;

export const Upload: Story = {
  args: {
    state: 'upload',
  },
};

export const Uploaded: Story = {
  args: {
    state: 'uploaded',
    file_url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
};

export const Uploading: Story = {
  args: {
    state: 'uploading',
    file_url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
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
    file_url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
};
