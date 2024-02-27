import { DocumentUploadCard } from '../components/DocumentUploadCard';

import type { Meta, StoryObj } from '@storybook/react';

// import { ThemedApp } from './styles';

const meta: Meta<typeof DocumentUploadCard> = {
  component: DocumentUploadCard,
  title: 'Display/DocumentUploadCard',
};

export default meta;
type Story = StoryObj<typeof DocumentUploadCard>;

export const Upload: Story = {
  args: {
    label: 'Label',
    description: 'Provide a description for your file upload',
    isEditing: true,
    fileUrl: '',
    fileName: '',
    fileSize: '',
    isUploading: false,
    uploadProgress: 0,
    errorMessage: '',
    required: false,
    isOptional: false,
  },
};

export const Uploaded: Story = {
  args: {
    label: 'Label',
    description: 'Provide a description for your file upload',
    isEditing: true,
    fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    fileName: 'Building_and_Pest_Sample.pdf',
    fileSize: '200 KB',
    isUploading: false,
    uploadProgress: 100,
    errorMessage: '',
    required: false,
    isOptional: false,
  },
};

export const Uploading: Story = {
  args: {
    label: 'Label',
    description: 'Provide a description for your file upload',
    isEditing: true,
    fileUrl: '',
    fileName: 'Building_and_Pest_Sample.pdf',
    fileSize: '200 KB',
    isUploading: true,
    uploadProgress: 50,
    errorMessage: '',
    required: false,
    isOptional: false,
  },
};

export const Error: Story = {
  args: {
    label: 'Label',
    description: 'Provide a description for your file upload',
    isEditing: true,
    fileUrl: '',
    fileName: 'Building_and_Pest_Sample.pdf',
    fileSize: '200 KB',
    isUploading: false,
    uploadProgress: 0,
    errorMessage: 'The provided file exceeds the maximum file size limit',
    required: false,
    isOptional: false,
  },
};

export const Locked: Story = {
  args: {
    label: 'Label',
    description: 'Provide a description for your file upload',
    isEditing: false,
    fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    fileName: 'Building_and_Pest_Sample.pdf',
    fileSize: '200 KB',
    isUploading: false,
    uploadProgress: 0,
    errorMessage: '',
    required: false,
    isOptional: false,
  },
};
