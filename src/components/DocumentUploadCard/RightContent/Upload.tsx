// External Imports
// React
import { type ChangeEvent, useCallback } from 'react';
import type React from 'react';

// Styled
import { styled } from '@mui/material';

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

const UploadNoMemo: React.FC<UploadProps> = ({ dataComponentKey = 'upload-file-btn', accept = '.pdf', onSelect }) => {
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
        id={dataComponentKey}
        data-component-key={dataComponentKey}
        type="file"
        accept={accept}
        onChange={handleFileSelect}
      />
      <Label htmlFor={dataComponentKey}>
        <Button
          data-component-key="upload-file-btn"
          title="Upload file"
          leadingIcon="Upload"
          variant="secondary"
          wrap="narrow"
          type="mint"
          disabled
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
