// External Imports
// React
import React, { useCallback } from 'react';
// Material
import { css, styled, LinearProgress, useTheme } from '@mui/material';
// Tabler
import { X, File, CloudUpload, Trash } from 'tabler-icons-react';

// Relative Imports
// Components
import Flex from '../FlexWrapper';
import { Typography } from '../Typography';
import { Icon } from '../Icon';
import { Button } from '../Button';
// Styling
import { Colors } from '../../theme.types';

type UploadDocumentCardState = 'upload' | 'uploading' | 'uploaded' | 'error' | 'locked';

type SharedProps = { label: string; fileName: string; fileSize?: string };

type CardWithMediaProps = SharedProps & { fileUrl: string };
type RemovableMediaProps = CardWithMediaProps & {
  onRemove: () => void;
  uploadProgress: number;
};

type UploadProps = SharedProps & {
  onSelect: (file: File) => void;
};
type ErrorProps = UploadProps & {
  errorMessage: string;
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
  const theme = useTheme();
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
    const { label } = props as UploadDocumentCardProps<typeof state>;
    return (
      <Flex direction="column">
        <Typography class="medium" size="base" color="dark90">
          {label}
        </Typography>
        <FlexCard direction="column" justify="center" border="dark45" background="lightL1" onClick={onClick}>
          <Flex direction="row" justify="space-between" align="center" width="100%">
            <Flex direction="row" justify="flex-start" align="center">
              <CloudUpload size="24px" color={theme.palette.colors.dark60} />
              <FlexTypography direction="column" align="flex-start">
                <Typography class="medium" size="sm" color="dark75" padding={0.4}>
                  Select a file or drag and drop here
                </Typography>
                <Typography class="roman" size="xs" color="dark60" padding={0.4}>
                  maximum file size is 200mb
                </Typography>
              </FlexTypography>
            </Flex>
            <Button
              primaryVariant="secondary"
              secondaryVariant="mint"
              leadingIcon="Upload"
              title="Upload file"
              size="small"
            />
          </Flex>
        </FlexCard>
      </Flex>
    );
  }

  if (state === 'error') {
    const { label, errorMessage } = props as UploadDocumentCardProps<typeof state>;
    const onClick = onUpload.bind(null, (props as UploadDocumentCardProps<typeof state>).onSelect);
    // const onRemove = onRemoveWrapper.bind(null, (props as UploadDocumentCardProps<typeof state>).onRemove);
    return (
      <Flex direction="column">
        <Flex direction="column">
          <Typography class="medium" size="base" color="dark90">
            {label}
          </Typography>
          <Typography class="medium" size="sm" color="error75">
            {errorMessage}
          </Typography>
        </Flex>

        <FlexCard direction="row" justify="space-between" border="error60" background="errorL1" onClick={onClick}>
          <Flex direction="row" justify="flex-start" align="center">
            <CloudUpload size="24px" color={theme.palette.colors.error60} />
            <FlexTypography direction="column" align="flex-start">
              <Typography class="medium" size="sm" color="error75" padding={0.5}>
                Select a file or drag and drop here
              </Typography>
              <Typography class="roman" size="xs" color="error60" padding={0.5}>
                maximum file size is 200mb
              </Typography>
            </FlexTypography>
          </Flex>
          <Button
            primaryVariant="secondary"
            secondaryVariant="mint"
            leadingIcon="Upload"
            title="Upload file"
            size="small"
          />
        </FlexCard>
      </Flex>
    );
  }

  if (state === 'uploading') {
    const onRemove = onRemoveWrapper.bind(null, (props as UploadDocumentCardProps<typeof state>).onRemove);
    const { label, fileName, fileSize, uploadProgress } = props as UploadDocumentCardProps<typeof state>;
    return (
      <Flex direction="column">
        <Typography class="medium" size="base" color="dark90">
          {label}
        </Typography>
        <FlexCard direction="row" border="dark45" background="lightL1">
          <Flex direction="row" align="center" style={{ width: '100%' }}>
            <Icon icon="File" color="dark60" />

            <Flex direction="column" style={{ width: '100%', border: '1px solid green' }}>
              <Flex direction="row" justify="space-between" style={{ width: '100%', border: '1px solid blue' }}>
                <Flex direction="column">
                  <Typography class="medium" size="sm" color="dark75" padding={0.4}>
                    {fileName}
                  </Typography>
                  <Typography class="roman" size="xs" color="dark60" padding={0.4}>
                    {fileSize}
                  </Typography>
                </Flex>
                <Flex direction="row" align="center">
                  <Typography class="roman" size="sm" color="dark75" padding={0.4}>
                    {uploadProgress}%
                  </Typography>
                  <X color={theme.palette.colors.dark75} size="18px" onClick={onRemove} />
                </Flex>
              </Flex>
              <LinearProgress
                value={50}
                sx={{
                  root: {
                    height: 10,
                    borderRadius: 5,
                  },
                  colorPrimary: {
                    backgroundColor: theme.palette.colors.error90,
                  },
                  bar: {
                    borderRadius: 5,
                    backgroundColor: '#00ae95',
                  },
                }}
              />
            </Flex>
          </Flex>
        </FlexCard>
      </Flex>
    );
  }

  if (state === 'uploaded') {
    const { label, fileName, fileSize } = props as UploadDocumentCardProps<typeof state>;
    return (
      <Flex direction="column">
        <Typography class="medium" size="base" color="dark90">
          {label}
        </Typography>
        <FlexCard direction="column" justify="center" align="center" border="dark45" background="lightL1">
          {/* inside */}
          <Flex direction="row" justify="space-between" align="center" width="100%">
            <Flex direction="row" align="center">
              <File size="24px" color={theme.palette.colors.dark60} />
              <Flex direction="column" style={{ marginLeft: '12px' }}>
                <Typography class="medium" size="sm" color="dark75" padding={0.4}>
                  {fileName}
                </Typography>
                <Typography class="roman" size="xs" color="dark60" padding={0.4}>
                  {fileSize}
                </Typography>
              </Flex>
            </Flex>
            <Trash size="18px" color={theme.palette.colors.dark90} />
          </Flex>
          {/* inside */}
        </FlexCard>
      </Flex>
    );
  }

  if (state === 'locked') {
    const { label, fileName, fileSize } = props as UploadDocumentCardProps<typeof state>;
    return (
      <Flex direction="column">
        <Typography class="medium" size="base" color="dark90">
          {label}
        </Typography>
        <UploadedFlexCard
          direction="row"
          justify="space-between"
          align="center"
          style={{ padding: '10px' }}
          border="dark45"
        >
          <Flex direction="row" align="center">
            <File size="18px" color={theme.palette.colors.dark60} />
            <Flex style={{ marginLeft: '8px' }}>
              <Typography class="medium" size="sm" color="dark75" padding={0}>
                {fileName}
              </Typography>
            </Flex>
          </Flex>
          <Typography color="dark60" class="roman" size="xs" padding={0}>
            {fileSize}
          </Typography>
        </UploadedFlexCard>
      </Flex>
    );
  }

  const { fileUrl } = props as UploadDocumentCardProps<typeof state>;
  console.log('fileUrl:', fileUrl);
  return null;
};

const UploadDocumentCard = React.memo(UploadDocumentCardNoMemo);

export { UploadDocumentCard };

const FlexTypography = styled(Flex)`
  margin-left: 12px;
  width: 100%;
`;

const FlexCard = styled(Flex)<{ border: keyof Colors; background?: keyof Colors }>`
  padding: 20px;
  width: 442px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme, border }) => theme.palette.colors[border]};
  border-style: dashed;
  ${({ background, theme }) =>
    background &&
    css`
      background-color: ${theme.palette.colors[background]};
    `}
  position: relative;
`;

const UploadedFlexCard = styled(FlexCard)`
  padding: 10px;
  background-color: ${({ theme }) => theme.palette.colors.lightL1};
  border-color: ${({ theme }) => theme.palette.colors.dark15};
  border-style: solid;
  border-width: 1px;
`;
