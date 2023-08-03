// External Imports
// React
import React from 'react';

// Relative Imports
// Components
import { Flex } from '../../Flex';
import { Typography } from '../../Typography';

type UploadingProps = { progress: number };

const Uploading: React.FC<UploadingProps> = ({ progress = 0 }) => {
  return (
    <Flex direction="row" align="center">
      <Typography class="roman" size="sm" color="dark75" padding={0.4}>
        {progress}%
      </Typography>
    </Flex>
  );
};

export { Uploading };
