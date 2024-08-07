import { CloudUpload, type File } from 'tabler-icons-react';

import { Flex } from '../../components/Flex';
import { Icon } from '../../components/Icon';
import { Typography } from '../../components/Typography';
import { FileIcon } from '../Icon/FileIcon';
import { TextFieldLabel } from '../TextInput/Labels';

import { LeftContent } from './LeftContent';
import { Locked, Upload, Uploading, Uploaded } from './RightContent';
import { FlexCard, StyledLinearProgress, TypographyContainer } from './styles';

export type DocumentUploadCardProps = {
  label: string;
  description?: string | React.ReactNode;
  accept?: string;
  required?: boolean;
  isOptional?: boolean;
  isEditing: boolean;
  fileUrl?: string;
  fileName?: string;
  fileSize?: string;
  isUploading: boolean;
  uploadProgress?: number;
  errorMessage?: string; // indicates an error occurred
  uploadButtonDataComponentKey?: string;
  /** an ID to put on the input component -- this is needed to join the input upload to the form controller */
  id: string;
  onFileSelect: (file: File) => void;
  onFileDelete: () => void;
};

export const DocumentUploadCard: React.FC<DocumentUploadCardProps> = ({
  label,
  description,
  required = false,
  isOptional = false,
  isEditing,
  accept,
  fileUrl,
  fileName,
  fileSize,
  errorMessage,
  isUploading,
  id,
  uploadButtonDataComponentKey,
  uploadProgress = 0,
  onFileSelect,
  onFileDelete,
}) => {
  return (
    <Flex direction="column" width="100%">
      <TypographyContainer>
        <TextFieldLabel labelText={label} required={required} isOptional={isOptional} />
      </TypographyContainer>
      {description && (
        <TypographyContainer>
          <Typography class="roman" size="sm" color="dark90" padding={0}>
            {description}
          </Typography>
        </TypographyContainer>
      )}
      {errorMessage && (
        <TypographyContainer>
          <Typography class="medium" size="sm" color="error75" padding={0}>
            {errorMessage}
          </Typography>
        </TypographyContainer>
      )}
      <FlexCard
        direction="row"
        align="center"
        isEditing={isEditing}
        hasFile={Boolean(fileName)}
        hasError={Boolean(errorMessage)}
      >
        {!isEditing && <Locked fileUrl={fileUrl} fileName={fileName} fileSize={fileSize} />}
        {isEditing && (
          <Flex direction="row" grow={1} gap={12}>
            <Flex direction="column" align="center" alignSelf="stretch" justify="center">
              {fileName && fileUrl ? (
                <FileIcon url={fileUrl} color={!!errorMessage ? 'error60' : 'dark60'} size={28} />
              ) : (
                <Icon icon={CloudUpload} color={!!errorMessage ? 'error60' : 'dark60'} size={28} />
              )}
            </Flex>
            <Flex direction="column" width="100%">
              <Flex direction="row" align="center" width="100%">
                {/* left content */}
                <LeftContent fileName={fileName} fileSize={fileSize} hasError={!!errorMessage} />
                {/* right content */}
                {!isUploading && !fileUrl && (
                  <Upload
                    dataComponentKey={uploadButtonDataComponentKey}
                    id={id}
                    accept={accept}
                    onSelect={onFileSelect}
                  />
                )}
                {isUploading && <Uploading progress={uploadProgress} />}
                {fileUrl && <Uploaded onFileDelete={onFileDelete} />}
              </Flex>
              {/* upload progress */}
              {isUploading && <StyledLinearProgress value={uploadProgress} variant="determinate" />}
            </Flex>
          </Flex>
        )}
      </FlexCard>
    </Flex>
  );
};
