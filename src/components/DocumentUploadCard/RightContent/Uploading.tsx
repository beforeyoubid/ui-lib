// External Imports
// React

// Relative Imports
// Components
import type React from 'react';

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
