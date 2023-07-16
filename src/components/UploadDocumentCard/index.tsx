// External Imports
// React
import React, { useCallback } from 'react';
// Material
// import { css, styled, useTheme } from '@mui/material';
// import { Loader2, PhotoPlus, Reload } from 'tabler-icons-react';

// Relative Imports
// Components
// import FlexWrapper from '../FlexWrapper';
// import { Typography } from '../Typography';
// Styling
// import { Colors } from '../../theme.types';

type UploadDocumentCardState = 'upload' | 'uploading' | 'uploaded' | 'error' | 'locked';

type CardWithMediaProps = { file_url: string };
type RemovableMediaProps = CardWithMediaProps & { onRemove: () => void };

type UploadProps = {
  onSelect: (file: File) => void;
};
type ErrorProps = UploadProps & {
  onRemove: () => void;
};

export type UploadDocumentCardProps<State extends UploadDocumentCardState> = {
  state: State;
} & (State extends 'uploading' | 'uploaded' | 'locked'
  ? State extends 'uploading' | 'uploaded'
    ? RemovableMediaProps
    : CardWithMediaProps
  : State extends 'upload'
  ? UploadProps
  : ErrorProps);

const UploadDocumentCardNoMemo = <State extends UploadDocumentCardState>(props: UploadDocumentCardProps<State>) => {
  // const theme = useTheme();
  const state = props.state as UploadDocumentCardState;

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

  const onRemoveWrapper = useCallback((onRemove: () => void, event: React.MouseEvent) => {
    event.stopPropagation();
    onRemove();
  }, []);

  // Renders
  if (state === 'upload') {
    const onClick = onUpload.bind(null, (props as UploadDocumentCardProps<typeof state>).onSelect);
    console.log('onClick:', onClick);
    return null;
  }

  if (state === 'error') {
    const onClick = onUpload.bind(null, (props as UploadDocumentCardProps<typeof state>).onSelect);
    const onRemove = onRemoveWrapper.bind(null, (props as UploadDocumentCardProps<typeof state>).onRemove);
    console.log('onClick:', onClick);
    console.log('onRemove:', onRemove);
    return null;
  }

  const { file_url } = props as UploadDocumentCardProps<typeof state>;
  console.log('file_url:', file_url);
  return null;
};

const UploadDocumentCard = React.memo(UploadDocumentCardNoMemo);

export { UploadDocumentCard };
