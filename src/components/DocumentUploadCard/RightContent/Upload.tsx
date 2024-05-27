// External Imports
// React
import { type ChangeEvent, useCallback } from 'react';
import type React from 'react';

// Styled
import { styled } from '@mui/material';
import { Upload as UploadIcon } from 'tabler-icons-react';

// Relative Imports
// Utils

import { typedMemo } from '../../../utils';
// Components
import { Button } from '../../Button';
import { Flex } from '../../Flex';

type UploadProps = {
  dataComponentKey?: string;
  accept?: string;
  onSelect: (file: File) => void;
};

const UploadNoMemo: React.FC<UploadProps> = ({
  dataComponentKey = 'upload-file-button',
  accept = '.pdf',
  onSelect,
}) => {
  const handleFileSelect = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0] || null;
      if (file) {
        onSelect(file);
      }
    },
    [onSelect]
  );

  return (
    <Flex direction="row">
      <HiddenInput
        type="file"
        id={dataComponentKey}
        data-component-key={dataComponentKey}
        accept={accept}
        onChange={handleFileSelect}
      />
      <Label htmlFor={dataComponentKey}>
        <Button
          disabled
          title="Upload file"
          leadingIcon={UploadIcon}
          variant="secondary"
          wrap="narrow"
          type="mint"
          size="md"
        />
      </Label>
    </Flex>
  );
};

const Upload = typedMemo(UploadNoMemo);

export { Upload };

const HiddenInput = styled('input')`
  opacity: 0;
  height: 1px;
  width: 1px;
`;

const Label = styled('label')({
  cursor: 'pointer',
});
