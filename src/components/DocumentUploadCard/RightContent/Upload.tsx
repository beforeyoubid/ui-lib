// External Imports
// React
import { useCallback } from 'react';
import type React from 'react';

// Relative Imports
// Components
import { typedMemo } from '../../../utils';
import { Button } from '../../Button';
import { Flex } from '../../Flex';

type UploadProps = { onSelect: (file: File) => void; accept?: string };

const UploadNoMemo: React.FC<UploadProps> = ({ onSelect, accept = '.pdf' }) => {
  const onUpload = useCallback(
    (onSelect: (file: File) => void) => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = accept;
      input.onchange = function () {
        if (input.files) {
          onSelect(input.files?.[0]);
        }
      };
      input.click();
    },
    [accept]
  );

  const onClick = onUpload.bind(null, onSelect);

  return (
    <Flex direction="row">
      <Button
        title="Upload file"
        leadingIcon="Upload"
        variant="secondary"
        wrap="narrow"
        type="mint"
        size="md"
        onClick={onClick}
      />
    </Flex>
  );
};

const Upload = typedMemo(UploadNoMemo);

export { Upload };
