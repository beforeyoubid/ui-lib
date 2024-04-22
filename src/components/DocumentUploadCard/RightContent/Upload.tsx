// External Imports
// React
import { useCallback, useMemo } from 'react';
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

  const onClick = useMemo(() => onUpload.bind(null, onSelect), [onSelect, onUpload]);

  return (
    <Flex direction="row">
      <Button
        data-component-key="upload-file-btn"
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
