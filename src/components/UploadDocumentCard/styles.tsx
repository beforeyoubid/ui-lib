// External Imports
// React
import React, { useState, useCallback } from 'react';
// Material
import { css, LinearProgress, styled } from '@mui/material';

// Relative Imports
// Components
import { Icon } from '../Icon';
import { Flex } from '../Flex';
import { Typography } from '../Typography';
import { Button } from '../Button';
// Styling
import { UploadDocumentCardState, SharedProps } from './index';

const FlexCard = styled(Flex)<{ state: UploadDocumentCardState }>`
  width: 442px;
  padding: 20px;
  border-radius: 8px;
  border-width: 1px;
  border-style: dashed;
  border-color: ${({ theme }) => theme.palette.colors.dark45};
  background-color: ${({ theme }) => theme.palette.colors.lightL1};

  ${({ state, theme }) =>
    state === 'locked' &&
    css`
      padding: 10px;
      border-color: ${theme.palette.colors.dark15};
    `}

  ${({ state, theme }) =>
    state === 'error' &&
    css`
      border-color: ${theme.palette.colors.error45};
      background-color: ${theme.palette.colors.errorL1};
    `}
`;

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
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

type LeftContentProps = {
  state: UploadDocumentCardState;
} & Pick<SharedProps, 'fileName' | 'fileSize'>;

const LeftContent: React.FC<LeftContentProps> = ({ state, fileName, fileSize }) => {
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

const Locked: React.FC<{ fileSize?: string }> = ({ fileSize = '-' }) => {
  return (
    <Flex direction="column" justify="center" alignSelf="stretch">
      <Typography color="dark60" class="roman" size="xs" padding={0}>
        {fileSize}
      </Typography>
    </Flex>
  );
};

const Upload: React.FC<{ onSelect: (file: File) => void }> = ({ onSelect }) => {
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

  const onClick = onUpload.bind(null, onSelect);

  return (
    <Flex direction="row" align="center">
      <Button
        primaryVariant="secondary"
        secondaryVariant="mint"
        leadingIcon="Upload"
        title="Upload file"
        size="small"
        onClick={onClick}
      />
    </Flex>
  );
};

const Uploading: React.FC<{ progress: number; onRemove: () => void }> = ({ progress = 0, onRemove }) => {
  return (
    <Flex direction="row" align="center">
      <Typography class="roman" size="sm" color="dark75" padding={0.4}>
        {progress}%
      </Typography>
      <Flex onClick={onRemove}>
        <Icon icon="X" color="dark75" size={18} />
      </Flex>
    </Flex>
  );
};

const UploadCompleted: React.FC<{ onRemove: () => void }> = ({ onRemove }) => {
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
      <Button primaryVariant="primary" secondaryVariant="destructive" title="Delete" size="small" onClick={onRemove} />
    </Flex>
  );
};

export { FlexCard, StyledLinearProgress, Locked, LeftContent, Upload, Uploading, UploadCompleted };
