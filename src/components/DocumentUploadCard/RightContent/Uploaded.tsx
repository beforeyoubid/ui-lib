// External Imports
// React
import React, { useState, useCallback } from 'react';

// Relative Imports
// Components
import { Icon } from '../../Icon';
import { Flex } from '../../Flex';
import { Button } from '../../Button';
import { LinkButton } from '../../LinkButton';
import { typedMemo } from '../../../utils';
import { useTheme } from '@mui/material';

type UploadedProps = { onFileDelete: () => void };

const UploadedNoMemo: React.FC<UploadedProps> = ({ onFileDelete }) => {
  const theme = useTheme();
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);

  const toggleConfirmDelete = useCallback(() => setConfirmDelete(curr => !curr), []);

  const handleDelete = useCallback(() => {
    onFileDelete();
    toggleConfirmDelete();
  }, [onFileDelete, toggleConfirmDelete]);

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
    <Flex direction="row" align="center" justify="center" gap={theme.spacing()}>
      <LinkButton type="grey" size="md" title="Cancel" onClick={toggleConfirmDelete} />
      <Button variant="primary" type="destructive" title="Delete" size="sm" onClick={handleDelete} wrap="narrow" />
    </Flex>
  );
};

export const Uploaded = typedMemo(UploadedNoMemo);
