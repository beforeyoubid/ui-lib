import { css, styled, useTheme } from '@mui/material/styles';
import React, { useCallback } from 'react';
import { Colors } from '../theme.types';
import FlexWrapper from './FlexWrapper';
import { Loader2, PhotoPlus, Reload, X } from 'tabler-icons-react';
import { Typography } from './Typography';

type MediaCardState = 'upload' | 'uploading' | 'uploaded' | 'error' | 'locked';

type CardWithMediaProps = { src: string };
type RemovableMediaProps = CardWithMediaProps & { onRemove: () => void };

type UploadProps = {
  onSelect: (file: File) => void;
};
type ErrorProps = UploadProps & {
  onRemove: () => void;
};

export type MediaCardProps<State extends MediaCardState> = {
  state: State;
} & (State extends 'uploading' | 'uploaded' | 'locked'
  ? State extends 'uploading' | 'uploaded'
    ? RemovableMediaProps
    : CardWithMediaProps
  : State extends 'upload'
  ? UploadProps
  : ErrorProps);

const MediaCardNoMemo = <State extends MediaCardState>(props: MediaCardProps<State>) => {
  const theme = useTheme();
  const state = props.state as MediaCardState;
  const onUpload = useCallback((onSelect: (file: File) => void) => {
    let input = document.createElement('input');
    input.type = 'file';
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
  if (state === 'upload') {
    const onClick = onUpload.bind(null, (props as MediaCardProps<typeof state>).onSelect);
    return (
      <Wrapper border="mint60" onClick={onClick}>
        <FlexWrapper direction="column" justify="center" align="center" height="100%">
          <PhotoPlus color={theme.palette.colors.mint75} />
          <Typography class="medium" size="sm" color="mint75" padding={0.5}>
            Add media
          </Typography>
        </FlexWrapper>
      </Wrapper>
    );
  }
  if (state === 'error') {
    const onClick = onUpload.bind(null, (props as MediaCardProps<typeof state>).onSelect);
    const onRemove = onRemoveWrapper.bind(null, (props as MediaCardProps<typeof state>).onRemove);
    return (
      <Wrapper border="error60" onClick={onClick}>
        <RemoveIconWrapper onClick={onRemove}>
          <X color={theme.palette.colors.lightL1} size="12px" />
        </RemoveIconWrapper>
        <FlexWrapper direction="column" justify="center" align="center" height="100%" textAlign="center">
          <Reload color={theme.palette.colors.error75} />
          <Typography class="medium" size="2xs" color="error75" padding={0.5}>
            Unable to upload.
            <br />
            Try again.
          </Typography>
        </FlexWrapper>
      </Wrapper>
    );
  }
  const { src } = props as MediaCardProps<typeof state>;
  return (
    <Wrapper border="dark60" background="dark60">
      {state !== 'locked' && (
        <RemoveIconWrapper onClick={onRemoveWrapper.bind(null, (props as MediaCardProps<typeof state>).onRemove)}>
          <X color={theme.palette.colors.lightL1} size="12px" />
        </RemoveIconWrapper>
      )}
      <ImageWrapper>
        {state === 'uploading' && (
          <LoaderIconWrapper>
            <Loader2 color={theme.palette.colors.lightWhite} size="24" />
          </LoaderIconWrapper>
        )}

        <Image src={src} />
      </ImageWrapper>
    </Wrapper>
  );
};

const MediaCard = React.memo(MediaCardNoMemo);

export { MediaCard };

const Image = styled('img')`
  height: 100%;
  width: 100%;
  object-fit: cover;
  max-height: 86px;
  max-width: 86px;
`;

const LoaderIconWrapper = styled('div')`
  height: 100%;
  width: 100%;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.colors.transparentOverlay50};
  svg {
    animation: rotate 1.5s linear infinite;
  }
  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
`;

const RemoveIconWrapper = styled('div')`
  height: 15px;
  width: 15px;
  background-color: ${({ theme }) => theme.palette.colors.dark90};
  border-radius: 37px;
  position: absolute;
  top: ${({ theme }) => theme.spacing(-0.5)};
  right: ${({ theme }) => theme.spacing(-0.5)};
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    width: 100%;
  }
  cursor: pointer;
  z-index: 1;
`;

const ImageWrapper = styled('div')`
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: 4px;
`;

const Wrapper = styled('div')<{ border: keyof Colors; background?: keyof Colors }>`
  height: 86px;
  width: 86px;
  border-radius: 4px;
  outline: 1px solid ${({ theme, border }) => theme.palette.colors[border]};
  ${({ background, theme }) =>
    background &&
    css`
      background-color: ${theme.palette.colors[background]};
    `}
  position: relative;
  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
    `}
`;
