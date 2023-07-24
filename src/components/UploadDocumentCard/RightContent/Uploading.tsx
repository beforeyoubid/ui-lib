// External Imports
// React
import React from 'react';

// Relative Imports
// Components
import { Icon } from '../../Icon';
import { Flex } from '../../Flex';
import { Typography } from '../../Typography';

type UploadingProps = { progress: number; onRemove: () => void };

const Uploading: React.FC<UploadingProps> = ({ progress = 0, onRemove }) => {
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

export { Uploading };
