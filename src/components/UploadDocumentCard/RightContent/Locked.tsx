// External Imports
// React
import React from 'react';
// Material
import { typedMemo } from '../../../utils';

// Relative Imports
// Components
import { Flex } from '../../Flex';
import { Typography } from '../../Typography';

type LockedProps = { fileSize?: string };

const LockedNoMemo: React.FC<LockedProps> = ({ fileSize = '-' }) => {
  return (
    <Flex direction="column" justify="center" alignSelf="stretch">
      <Typography color="dark60" class="roman" size="xs" padding={0}>
        {fileSize}
      </Typography>
    </Flex>
  );
};

const Locked = typedMemo(LockedNoMemo);

export { Locked };
