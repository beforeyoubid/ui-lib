// External Imports
// React
import { type ChangeEvent, useCallback } from 'react';
import type React from 'react';

// Relative Imports
// Components
import { typedMemo } from '../../../utils';
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
      <input
        id="upload-file-btn"
        data-component-key="upload-file-btn"
        type="file"
        accept={accept}
        onChange={handleFileSelect}
      />
      <Button
        data-component-key={dataComponentKey}
        title="Upload file"
        leadingIcon="Upload"
        variant="secondary"
        wrap="narrow"
        type="mint"
        size="md"
      />
    </Flex>
  );
};

const Upload = typedMemo(UploadNoMemo);

export { Upload };
