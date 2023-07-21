// External Imports
// React
import React, { useMemo } from 'react';

// Relative Imports
// Components
import { Icon } from '../Icon';
import { Flex } from '../Flex';
import { Typography } from '../Typography';
// Styled Components
import { FlexCard, StyledLinearProgress } from './styles';
import { LeftContent } from './LeftContent';
import { Locked, Upload, Uploading, Uploaded } from './RightContent';

export type UploadDocumentCardState = 'upload' | 'uploading' | 'uploaded' | 'error' | 'locked';
export type SharedProps = { label: string; fileName: string; fileSize?: string };

type CardWithMediaProps = SharedProps & { fileUrl: string };
type RemovableMediaProps = CardWithMediaProps & {
  onRemove: () => void;
  uploadProgress: number;
};

type UploadProps = SharedProps & {
  onSelect: (file: File) => void;
};
type ErrorProps = UploadProps & {
  errorMessage: string;
};

export type UploadDocumentCardProps<State extends UploadDocumentCardState> = {
  state: State;
} & (State extends 'uploading' | 'uploaded' | 'locked'
  ? State extends 'uploading' | 'uploaded'
    ? RemovableMediaProps
    : CardWithMediaProps
  : State extends 'upload'
  ? UploadProps
  : ErrorProps);

const UploadDocumentCard = <State extends UploadDocumentCardState>(props: UploadDocumentCardProps<State>) => {
  const state = props.state;

  const isError = useMemo(() => state === 'error', [state]);
  const isLocked = useMemo(() => state === 'locked', [state]);
  const hasFile = useMemo(() => ['locked', 'uploaded', 'uploading'].includes(state), [state]);

  const { label, fileName, fileSize } = props as UploadDocumentCardProps<typeof state>;

  const { errorMessage = '' } = props as UploadDocumentCardProps<'error'>;
  const { onSelect } = props as UploadDocumentCardProps<'upload'>;
  const { onRemove, uploadProgress } = props as UploadDocumentCardProps<'uploading'>;

  return (
    <Flex direction="column">
      <Typography class="medium" size="base" color="dark90" padding={0.2}>
        {label}
      </Typography>
      {errorMessage && (
        <Typography class="medium" size="sm" color="error75" padding={0.2}>
          {errorMessage}
        </Typography>
      )}
      <FlexCard direction="row" align="center" state={state}>
        <Icon
          icon={hasFile ? 'File' : 'CloudUpload'}
          color={isError ? 'error60' : 'dark60'}
          size={isLocked ? 18 : 24}
        />
        <Flex direction="column" grow="1" style={{ marginLeft: '8px' }}>
          <Flex direction="row" justify="space-between" width="100%">
            {/* left content */}
            <LeftContent state={state} fileName={fileName} fileSize={fileSize} />
            {/* right content */}
            {state === 'locked' && <Locked fileSize={fileSize} />}
            {(state === 'upload' || state === 'error') && <Upload onSelect={onSelect} />}
            {state === 'uploading' && <Uploading progress={uploadProgress} onRemove={onRemove} />}
            {state === 'uploaded' && <Uploaded onRemove={onRemove} />}
          </Flex>
          {/* upload progress */}
          {state === 'uploading' && (
            <StyledLinearProgress
              value={(props as UploadDocumentCardProps<'uploading'>).uploadProgress}
              variant="determinate"
            />
          )}
        </Flex>
      </FlexCard>
    </Flex>
  );
};

export { UploadDocumentCard };
