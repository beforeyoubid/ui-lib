// External Imports
// React
import React from 'react';

// Relative Imports
// Components
import { Flex } from '../../Flex';
import { Typography } from '../../Typography';

type LeftContentProps = {
  fileName?: string;
  fileSize?: string;
  hasError: boolean;
  isEditing: boolean;
};

const LeftContent: React.FC<LeftContentProps> = ({ fileName, fileSize, isEditing, hasError }) => {
  return (
    <Flex direction="row" grow={1} align="stretch">
      <Flex direction="column" grow={1}>
        <Typography class="medium" size="sm" padding={0.4} color={hasError ? 'error75' : 'dark75'}>
          {fileName ? fileName : 'Select a file or drag and drop here'}
        </Typography>
        {isEditing && (
          <Typography class="roman" size="xs" padding={0.4} color={hasError ? 'error60' : 'dark60'}>
            {fileSize ? fileSize : 'maximum file size is 200mb'}
          </Typography>
        )}
      </Flex>
    </Flex>
  );
};

export { LeftContent };
