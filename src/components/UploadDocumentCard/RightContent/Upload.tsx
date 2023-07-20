// External Imports
// React
import React, { useCallback } from 'react';
// Material

// Relative Imports
// Components
import { Flex } from '../../Flex';
import { Button } from '../../Button';
// Styling
import { typedMemo } from '../../../utils';

type UploadProps = { onSelect: (file: File) => void };

const UploadNoMemo: React.FC<UploadProps> = ({ onSelect }) => {
  const onUpload = useCallback((onSelect: (file: File) => void) => {
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf';
    input.onchange = function () {
      if (input.files) {
        onSelect(input.files?.[0]);
      }
    };
    input.click();
  }, []);

  const onClick = onUpload.bind(null, onSelect);

  return (
    <Flex direction="row" align="center">
      <Button
        primaryVariant="secondary"
        secondaryVariant="mint"
        leadingIcon="Upload"
        title="Upload file"
        size="small"
        onClick={onClick}
      />
    </Flex>
  );
};

const Upload = typedMemo(UploadNoMemo);

export { Upload };
