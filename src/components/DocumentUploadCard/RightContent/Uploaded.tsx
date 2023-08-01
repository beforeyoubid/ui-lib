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

type UploadedProps = { onRemove: () => void };

const UploadedNoMemo: React.FC<UploadedProps> = ({ onRemove }) => {
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);

  const toggleConfirmDelete = useCallback(() => setConfirmDelete(curr => !curr), []);

  if (!confirmDelete) {
    return (
      <Flex direction="column" justify="center" alignSelf="stretch">
        <span onClick={toggleConfirmDelete}>
          <Icon icon="Trash" size={18} color="dark90" />
        </span>
      </Flex>
    );
  }

  return (
    <Flex direction="row" align="center" justify="center">
      <div onClick={toggleConfirmDelete}>
        <Typography class="roman" size="xs" color="dark60" padding={0}>
          Cancel
        </Typography>
      </div>
      <Button variant="primary" type="destructive" title="Delete" size="sm" onClick={onRemove} wrap="wide" />
    </Flex>
  );
};

const Uploaded = typedMemo(UploadedNoMemo);

export { Uploaded };
