// Relative Imports
// Components
import { Icon } from '../../components/Icon';
import { Typography } from '../../components/Typography';
import { Flex } from '../../components/Flex';
// Styled Components
import { FlexCard, StyledLinearProgress, TypographyContainer } from './styles';
import { LeftContent } from './LeftContent';
import { Locked, Upload, Uploading, Uploaded } from './RightContent';

export type DocumentUploadCardProps = {
  label: string;
  description?: string;
  accept?: string;
  isEditing: boolean;
  fileUrl?: string;
  fileName?: string;
  fileSize?: string;
  isUploading: boolean;
  uploadProgress?: number;
  errorMessage?: string; // indicates an error occurred
  onFileSelect: (file: File) => void;
  onFileDelete: () => void;
};

export const DocumentUploadCard: React.FC<DocumentUploadCardProps> = ({
  label,
  description,
  isEditing,
  accept,
  fileUrl,
  fileName,
  fileSize,
  errorMessage,
  isUploading,
  uploadProgress = 0,
  onFileSelect,
  onFileDelete,
}) => {
  return (
    <Flex direction="column" width="100%">
      <TypographyContainer>
        <Typography class="medium" size="base" color="dark90" padding={0}>
          {label}
        </Typography>
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
        width="100%"
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
              <Icon icon={fileName ? 'File' : 'CloudUpload'} color={!!errorMessage ? 'error60' : 'dark60'} size={28} />
            </Flex>
            <Flex direction="column" width="100%">
              <Flex direction="row" align="center" width="100%">
                {/* left content */}
                <LeftContent fileName={fileName} fileSize={fileSize} hasError={!!errorMessage} />
                {/* right content */}
                {!isUploading && !fileUrl && <Upload accept={accept} onSelect={onFileSelect} />}
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
