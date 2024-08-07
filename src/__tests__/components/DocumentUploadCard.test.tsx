import { render } from '@testing-library/react';

import { DocumentUploadCard } from '../../components';
import { ThemedApp } from '../../stories/styles';

describe('DocumentUploadCard', () => {
  test('renders component in Upload form', () => {
    render(
      <ThemedApp>
        <DocumentUploadCard
          label="Label"
          description="Provide a description for your file upload"
          isEditing
          id="test1"
          fileUrl=""
          fileName=""
          fileSize=""
          isUploading={false}
          uploadProgress={0}
          errorMessage=""
          required={false}
          isOptional={false}
          onFileDelete={console.log}
          onFileSelect={console.log}
        />
      </ThemedApp>
    );
  });
  test('renders component in Uploaded form', () => {
    render(
      <ThemedApp>
        <DocumentUploadCard
          label="Label"
          description="Provide a description for your file upload"
          isEditing
          id="test1"
          fileUrl="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
          fileName="dummy.pdf"
          fileSize="200 KB"
          isUploading={false}
          uploadProgress={100}
          errorMessage=""
          required
          isOptional={false}
          onFileDelete={console.log}
          onFileSelect={console.log}
        />
      </ThemedApp>
    );
  });
  test('renders component in Uploading form', () => {
    render(
      <ThemedApp>
        <DocumentUploadCard
          label="Label"
          description="Provide a description for your file upload"
          isEditing
          id="test1"
          fileUrl="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
          fileName="dummy.pdf"
          fileSize="200 KB"
          isUploading
          uploadProgress={50}
          errorMessage=""
          required={false}
          isOptional
          onFileDelete={console.log}
          onFileSelect={console.log}
        />
      </ThemedApp>
    );
  });
  test('renders component in Error form', () => {
    render(
      <ThemedApp>
        <DocumentUploadCard
          label="Label"
          description="Provide a description for your file upload"
          isEditing
          id="test1"
          fileUrl="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
          fileName="dummy.pdf"
          fileSize="200 KB"
          isUploading={false}
          uploadProgress={0}
          errorMessage="The provided file exceeds the maximum file size limit"
          required={false}
          isOptional={false}
          onFileDelete={console.log}
          onFileSelect={console.log}
        />
      </ThemedApp>
    );
  });
  test('renders component in Locked form', () => {
    render(
      <ThemedApp>
        <DocumentUploadCard
          label="Label"
          description="Provide a description for your file upload"
          isEditing={false}
          id="test1"
          fileUrl="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
          fileName="dummy.pdf"
          fileSize="200 KB"
          isUploading={false}
          uploadProgress={0}
          errorMessage=""
          required={false}
          isOptional={false}
          onFileDelete={console.log}
          onFileSelect={console.log}
        />
      </ThemedApp>
    );
  });
});
