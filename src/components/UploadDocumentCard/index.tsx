// External Imports
// React
import React, { useState, useCallback } from 'react';
// Material
import { css, LinearProgress, useTheme, styled, Theme } from '@mui/material';
// Tabler
import { X, File, CloudUpload, Trash } from 'tabler-icons-react';

// Relative Imports
// Components
import Flex from '../FlexWrapper';
import { Typography } from '../Typography';
import { Button } from '../Button';
// Styling
import { Colors } from '../../theme.types';

type UploadDocumentCardState = 'upload' | 'uploading' | 'uploaded' | 'error' | 'locked';

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

const UploadDocumentCardNoMemo = <State extends UploadDocumentCardState>(props: UploadDocumentCardProps<State>) => {
  const theme = useTheme();
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

  // Renders
  // Done
  if (state === 'locked') {
    const { label, fileName, fileSize } = props as UploadDocumentCardProps<typeof state>;
    return (
      <Flex direction="column">
        <Typography class="medium" size="base" color="dark90">
          {label}
        </Typography>
        <FlexLockedCard direction="row" justify="space-between" align="center" border="dark45">
          <Flex direction="row" align="center">
            <File size="18px" color={theme.palette.colors.dark60} />
            <Flex style={{ marginLeft: '8px' }}>
              <Typography class="medium" size="sm" color="dark75" padding={0}>
                {fileName}
              </Typography>
            </Flex>
          </Flex>
          <Typography color="dark60" class="roman" size="xs" padding={0}>
            {fileSize}
          </Typography>
        </FlexLockedCard>
      </Flex>
    );
  }

  // if (state === 'upload' || state === 'error' || state === 'uploaded' || state === 'uploading') {
  //   // const onClick =
  //   //   state === 'upload' ? onUpload.bind(null, (props as UploadDocumentCardProps<typeof state>).onSelect) : null;
  // }
  const { label, fileName, fileSize } = props as UploadDocumentCardProps<typeof state>;
  const isError = state === 'error';
  return (
    <Flex direction="column">
      <Typography class="medium" size="base" color="dark90">
        {label}
      </Typography>
      <FlexCard
        direction="row"
        align="center"
        border={isError ? 'error45' : 'dark45'}
        background={isError ? 'errorL1' : 'lightL1'}
      >
        {/* icon */}
        <CardIcon state={state} />
        {/* content */}
        <Flex direction="column" style={{ flexGrow: 1, marginLeft: '12px' }}>
          <Flex direction="row" justify="space-between" width="100%">
            {/* left content */}
            <LeftContent state={state} fileName={fileName} fileSize={fileSize} />
            {/* right content */}
            <RightContent state={state} />
          </Flex>
          {/* linear progress */}
          {state === 'uploading' && <StyledLinearProgress value={50} variant="determinate" />}
        </Flex>
      </FlexCard>
    </Flex>
  );
};

const UploadDocumentCard = React.memo(UploadDocumentCardNoMemo);

export { UploadDocumentCard };

const FlexCard = styled(Flex)<{ border: keyof Colors; background?: keyof Colors }>`
  padding: 20px;
  width: 442px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme, border }) => theme.palette.colors[border]};
  border-style: dashed;
  ${({ background, theme }) =>
    background &&
    css`
      background-color: ${theme.palette.colors[background]};
    `}
`;

const FlexLockedCard = styled(FlexCard)`
  padding: 10px;
  background-color: ${({ theme }) => theme.palette.colors.lightL1};
  border-color: ${({ theme }) => theme.palette.colors.dark15};
  border-style: solid;
  border-width: 1px;
`;

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
  const theme = useTheme();

  if (state === 'upload') {
    return <CloudUpload size="18px" color={theme.palette.colors.dark60} />;
  }
  if (state === 'error') {
    return <CloudUpload size="18px" color={theme.palette.colors.error60} />;
  }
  if (state === 'uploaded' || state === 'uploading') {
    return <File size="24px" color={theme.palette.colors.dark60} />;
  }
};

type LeftContentProps = {
  state: UploadDocumentCardState;
} & Pick<SharedProps, 'fileName' | 'fileSize'>;

const LeftContent = ({ state, fileName, fileSize }: LeftContentProps) => {
  const isError = state === 'error';
  return (
    <Flex direction="column" style={{ flexGrow: 1 }}>
      <Typography class="medium" size="sm" padding={0.4} color={isError ? 'error75' : 'dark75'}>
        {fileName ?? 'Select a file or drag and drop here'}
      </Typography>
      <Typography class="roman" size="xs" padding={0.4} color={isError ? 'error60' : 'dark60'}>
        {fileSize ?? 'maximum file size is 200mb'}
      </Typography>
    </Flex>
  );
};

type RightContentProps = {
  state: UploadDocumentCardState;
};

const RightContent: React.FC<RightContentProps> = ({ state }) => {
  const theme = useTheme();
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);

  const toggleConfirmDelete = useCallback(() => setConfirmDelete(curr => !curr), []);

  switch (state) {
    case 'upload':
    case 'error':
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
    case 'uploading':
      return (
        <Flex direction="row" align="center">
          <Typography class="roman" size="sm" color="dark75" padding={0.4}>
            {50}%
          </Typography>
          <X color={theme.palette.colors.dark75} size="18px" />
        </Flex>
      );
    case 'uploaded':
      return !confirmDelete ? (
        <Flex direction="column" justify="center" style={{ alignSelf: 'stretch' }}>
          <Trash size="18px" color={theme.palette.colors.dark90} onClick={toggleConfirmDelete} />
        </Flex>
      ) : (
        <Flex direction="row" align="center" justify="center">
          <div onClick={toggleConfirmDelete}>
            <Typography class="roman" size="xs" color="dark60" padding={0}>
              Cancel
            </Typography>
          </div>
          <Button primaryVariant="primary" secondaryVariant="destructive" title="Delete" size="small" />
        </Flex>
      );
  }
};
