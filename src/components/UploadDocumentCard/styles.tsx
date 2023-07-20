// External Imports
// React
import React from 'react';
// Material
import { css, LinearProgress, styled } from '@mui/material';

// Relative Imports
// Components
import { Flex } from '../Flex';
import { Typography } from '../Typography';
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

export { FlexCard, StyledLinearProgress, LeftContent };
