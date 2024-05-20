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
import { Flex } from '../../Flex';
import { Icon } from '../../Icon';
import { Typography } from '../../Typography';

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
    <FlexUpload>
      <HiddenInput
        id={dataComponentKey}
        data-component-key={dataComponentKey}
        type="file"
        accept={accept}
        onChange={handleFileSelect}
      />
      <LabelContent htmlFor={dataComponentKey}>
        <Icon icon="Upload" size="14" color="mint75" />
        <Typography class="bold" size="sm" color="mint75">
          Upload
        </Typography>
      </LabelContent>
    </FlexUpload>
  );
};

const Upload = typedMemo(UploadNoMemo);

export { Upload };

const HiddenInput = styled('input')`
  opacity: 0;
  height: 1px;
  width: 1px;
`;

const LabelContent = styled('label')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1),
  cursor: 'pointer',
}));

const FlexUpload = styled(Flex)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(1, 2.5),
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: theme.palette.colors.mint45,
  borderRadius: 4,
  background: theme.palette.colors.lightWhite,
}));
