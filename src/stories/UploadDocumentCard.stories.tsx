import type { Meta, StoryObj } from '@storybook/react';

import { UploadDocumentCard } from '../components/UploadDocumentCard';
// import { ThemedApp } from './styles';

const meta: Meta<typeof UploadDocumentCard> = {
  component: UploadDocumentCard,
  title: 'Display/UploadDocumentCard',
};

export default meta;
type Story = StoryObj<typeof UploadDocumentCard>;

export const Upload: Story = {
  args: {
    state: 'upload',
    label: 'Label',
  },
};

export const Uploaded: Story = {
  args: {
    state: 'uploaded',
    fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    label: 'Label',
    fileName: 'Building_and_Pest_Sample.pdf',
    fileSize: '200 KB',
  },
};

export const Uploading: Story = {
  args: {
    state: 'uploading',
    fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    fileName: 'Building_and_Pest_Sample.pdf',
    label: 'Label',
    fileSize: '200 KB',
    uploadProgress: 10,
  },
};

export const Error: Story = {
  args: {
    state: 'error',
    label: 'Label',
    errorMessage: 'Error text',
  },
};

export const Locked: Story = {
  args: {
    state: 'locked',
    label: 'Label',
    fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    fileName: 'Building_and_Pest_Sample.pdf',
    fileSize: '200 KB',
  },
};
