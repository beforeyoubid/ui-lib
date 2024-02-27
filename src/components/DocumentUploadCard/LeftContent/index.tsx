// External Imports
// React

// Relative Imports
// Components
import type React from 'react';

import { Flex } from '../../Flex';
import { Typography } from '../../Typography';

type LeftContentProps = {
  fileName?: string;
  fileSize?: string;
  hasError: boolean;
};

const LeftContent: React.FC<LeftContentProps> = ({ fileName, fileSize, hasError }) => {
  return (
    <Flex direction="row" grow={1} align="stretch">
      <Flex direction="column" grow={1}>
        <Typography class="medium" size="sm" padding={0.4} color={hasError ? 'error75' : 'dark75'}>
          {fileName ? fileName : 'Select a file or drag and drop here'}
        </Typography>
        <Typography class="roman" size="xs" padding={0.4} color={hasError ? 'error60' : 'dark60'}>
          {fileSize ? fileSize : 'maximum file size is 200mb'}
        </Typography>
      </Flex>
    </Flex>
  );
};

export { LeftContent };
