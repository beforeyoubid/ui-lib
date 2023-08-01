// External Imports
// React
import React from 'react';

// Relative Imports
// Components
import { Flex } from '../../Flex';
import { Typography } from '../../Typography';
// Styling
import { UploadDocumentCardState, SharedProps } from '../index';

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

export { LeftContent };
