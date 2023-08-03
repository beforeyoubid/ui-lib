// External Imports
// React
import React, { useState, useCallback } from 'react';

// Relative Imports
// Components
import { Icon } from '../../Icon';
import { Flex } from '../../Flex';
import { Typography } from '../../Typography';
import { Button } from '../../Button';
import { typedMemo } from '../../../utils';

type UploadedProps = { onFileDelete: () => void };

export const UploadedNoMemo: React.FC<UploadedProps> = ({ onFileDelete }) => {
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);

  const toggleConfirmDelete = useCallback(() => setConfirmDelete(curr => !curr), []);

  if (!confirmDelete) {
    return (
      <Flex direction="column" justify="center" alignSelf="stretch">
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <span onClick={toggleConfirmDelete}>
          <Icon icon="Trash" size={18} color="dark90" />
        </span>
      </Flex>
    );
  }

  return (
    <Flex direction="row" align="center" justify="center">
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <Flex onClick={toggleConfirmDelete}>
        <Typography class="roman" size="sm" color="dark60" padding={0.9}>
          Cancel
        </Typography>
      </Flex>
      <Button variant="primary" type="destructive" title="Delete" size="sm" onClick={onFileDelete} wrap="narrow" />
    </Flex>
  );
};

const Uploaded = typedMemo(UploadedNoMemo);

export { Uploaded };
