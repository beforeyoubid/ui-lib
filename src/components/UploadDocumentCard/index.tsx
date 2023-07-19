// External Imports
// React
import React, { useState, useMemo, useCallback } from 'react';
// Material
import { LinearProgress, styled, Theme } from '@mui/material';

// Relative Imports
// Components
import { Icon } from '../Icon';
import { Flex } from '../Flex';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { FlexCard } from './styles';

export type UploadDocumentCardState = 'upload' | 'uploading' | 'uploaded' | 'error' | 'locked';

type SharedProps = { label: string; fileName: string; fileSize?: string };

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
  // const theme = useTheme();
  const state = props.state as UploadDocumentCardState;

  const onUpload = useCallback((onSelect: (file: File) => void) => {
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf';
    input.onchange = function () {
      if (input.files) {
        onSelect(input.files?.[0]);
      }
    };
    input.click();
  }, []);

  const onRemoveWrapper = useCallback((onRemove: () => void, event: React.MouseEvent) => {
    event.stopPropagation();
    onRemove();
  }, []);

  // Render

  // if (state === 'upload' || state === 'error' || state === 'uploaded' || state === 'uploading') {
  //   // const onClick =
  //   //   state === 'upload' ? onUpload.bind(null, (props as UploadDocumentCardProps<typeof state>).onSelect) : null;
  // }
  const { label, fileName, fileSize } = props as UploadDocumentCardProps<typeof state>;
  return (
    <Flex direction="column">
      <Typography class="medium" size="base" color="dark90">
        {label}
      </Typography>
      {/* error text ??? */}
      <FlexCard direction="row" align="center" state={state}>
        {/* icon */}
        <CardIcon state={state} />
        {/* content */}
        <Flex direction="column" grow="1" style={{ marginLeft: '8px' }}>
          <Flex direction="row" justify="space-between" width="100%">
            {/* left content */}
            <LeftContent state={state} fileName={fileName} fileSize={fileSize} />
            {/* right content */}
            {(state === 'upload' || state === 'error') && <Upload />}
            {state === 'uploading' && <Uploading />}
            {state === 'uploaded' && <UploadComplete />}
            {state === 'locked' && <Locked fileSize={fileSize} />}
          </Flex>
          {/* linear progress */}
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

const StyledLinearProgress = styled(LinearProgress)(({ theme }: { theme: Theme }) => ({
  height: 4,
  borderRadius: 6,
  marginLeft: 2,
  marginTop: 4,
  width: '100%',
  '& .MuiLinearProgress-bar': {
    backgroundColor: theme.palette.colors.mintL2,
  },
  '& .MuiLinearProgress-barColorPrimary': {
    backgroundColor: theme.palette.colors.mint60,
  },
}));

const CardIcon = ({ state }: { state: UploadDocumentCardState }) => {
  const isError = state === 'error';
  const iconType = useMemo(() => (['upload', 'error'].includes(state) ? 'CloudUpload' : 'File'), [state]);
  const iconSize = useMemo(() => (['uploaded', 'uploading'].includes(state) ? 24 : 18), [state]);
  const iconColor = useMemo(() => (isError ? 'error60' : 'dark60'), [isError]);

  return <Icon icon={iconType} size={iconSize} color={iconColor} />;
};

type LeftContentProps = {
  state: UploadDocumentCardState;
} & Pick<SharedProps, 'fileName' | 'fileSize'>;

const LeftContent = ({ state, fileName, fileSize }: LeftContentProps) => {
  const isError = state === 'error';
  return (
    <Flex direction="column" grow="1">
      <Typography class="medium" size="sm" padding={0.4} color={isError ? 'error75' : 'dark75'}>
        {fileName ?? 'Select a file or drag and drop here'}
      </Typography>
      {state !== 'locked' && (
        <Typography class="roman" size="xs" padding={0.4} color={isError ? 'error60' : 'dark60'}>
          {fileSize ?? 'maximum file size is 200mb'}
        </Typography>
      )}
    </Flex>
  );
};

type LockedProps = { fileSize: SharedProps['fileSize'] };

const Locked: React.FC<LockedProps> = ({ fileSize }) => {
  return (
    <Flex direction="column" justify="center" alignSelf="stretch">
      <Typography color="dark60" class="roman" size="xs" padding={0}>
        {fileSize}
      </Typography>
    </Flex>
  );
};

// type LeftContentUploadProps = {};

const Upload: React.FC = () => {
  return (
    <Flex direction="row" align="center">
      <Button
        primaryVariant="secondary"
        secondaryVariant="mint"
        leadingIcon="Upload"
        title="Upload file"
        size="small"
      />
    </Flex>
  );
};

type UploadingProps = {
  uploadProgress?: number;
};

const Uploading: React.FC<UploadingProps> = ({ uploadProgress = 0 }) => {
  return (
    <Flex direction="row" align="center">
      <Typography class="roman" size="sm" color="dark75" padding={0.4}>
        {uploadProgress}%
      </Typography>
      <Icon icon="X" color="dark75" size={18} />
    </Flex>
  );
};

const UploadComplete: React.FC = () => {
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);

  const toggleConfirmDelete = useCallback(() => setConfirmDelete(curr => !curr), []);

  if (!confirmDelete) {
    return (
      <Flex direction="column" justify="center" alignSelf="stretch">
        <span onClick={toggleConfirmDelete}>
          <Icon icon="Trash" size={18} color="dark90" />
        </span>
      </Flex>
    );
  }

  return (
    <Flex direction="row" align="center" justify="center">
      <div onClick={toggleConfirmDelete}>
        <Typography class="roman" size="xs" color="dark60" padding={0}>
          Cancel
        </Typography>
      </div>
      <Button primaryVariant="primary" secondaryVariant="destructive" title="Delete" size="small" />
    </Flex>
  );
};
