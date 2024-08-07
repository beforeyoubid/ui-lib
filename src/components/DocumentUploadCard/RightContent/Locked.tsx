// External Imports
// React
// Material
// Relative Imports
// Components
import type React from 'react';

import { FileOff } from 'tabler-icons-react';

import { typedMemo } from '../../../utils';
import { Flex } from '../../Flex';
import { Icon } from '../../Icon';
import { FileIcon } from '../../Icon/FileIcon';
import { Typography } from '../../Typography';
// Utils

type LockedProps = {
  fileUrl?: string;
  fileName?: string;
  fileSize?: string;
};

const LockedNoMemo: React.FC<LockedProps> = ({ fileUrl, fileName, fileSize = '-' }) => {
  if (!fileUrl) {
    return (
      <Flex direction="row" justify="center" align="center" grow={1}>
        <Icon icon={FileOff} size="18" color="dark75" />
        <Typography class="medium" size="sm" color="dark75">
          No saved document
        </Typography>
      </Flex>
    );
  }

  return (
    <Flex direction="row" width="100%" justify="space-between" align="center">
      <Flex direction="row" grow={1} align="center" gap={12}>
        <FileIcon url={fileUrl} color="dark75" size={18} />
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
