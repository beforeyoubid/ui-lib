// External Imports
// React
import React from 'react';
// Material
import { typedMemo } from '../../../utils';

// Relative Imports
// Components
import { Flex } from '../../Flex';
import { Icon } from '../../Icon';
import { Typography } from '../../Typography';

type LockedProps = {
  fileUrl?: string;
  fileName?: string;
  fileSize?: string;
};

const LockedNoMemo: React.FC<LockedProps> = ({ fileUrl, fileName, fileSize = '-' }) => {
  if (!fileUrl) {
    return (
      <Flex direction="row" justify="center" align="center" grow={1}>
        <Icon icon="FileOff" size="18" color="dark75" />
        <Typography class="medium" size="sm" color="dark75">
          No saved document
        </Typography>
      </Flex>
    );
  }

  return (
    <Flex direction="row" width="100%" justify="space-between" align="center">
      <Flex direction="row" grow={1} align="center" gap={12}>
        <Icon icon={fileUrl.endsWith('.pdf') ? 'PDF' : 'File'} size={18} color="dark75" />
        <a href={fileUrl} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
          <Typography class="medium" size="sm" color="dark75" padding={0}>
            {fileName}
          </Typography>
        </a>
      </Flex>
      <Typography class="roman" size="xs" color="dark60" padding={0}>
        {fileSize}
      </Typography>
    </Flex>
  );
};

const Locked = typedMemo(LockedNoMemo);

export { Locked };
