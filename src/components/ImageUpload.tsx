import { useCallback } from 'react';

import { styled, useTheme } from '@mui/material';

import { automation } from '../utils';

import { Button } from './Button';
import { Flex } from './Flex';
import { Icon } from './Icon';
import { Typography } from './Typography';

export type ImageUploadProps = {
  label: string;
  labelRequired?: boolean;
  helperText?: string;
  errorText?: string;
  error?: boolean;
  variant: 'large' | 'medium';
  fullWidth?: boolean;
  src?: string;
  uploading?: boolean;
  automationKey?: string;
} & (
  | { canUpload: false }
  | {
      canUpload: true;
      uploadButtonText?: string;
      onSelect: (file: File) => void;
    }
);

export function ImageUpload(props: ImageUploadProps) {
  const theme = useTheme();
  const { fullWidth = true } = props;
  const onUpload = useCallback((onSelect: (file: File) => void) => {
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = '.png, .jpeg, .jpg, image/png, image/jpeg';
    input.onchange = function () {
      if (input.files) {
        onSelect(input.files?.[0]);
      }
    };
    input.click();
  }, []);
  return (
    <Flex
      direction="column"
      width={fullWidth ? '100%' : undefined}
      gap={theme.spacing(0.5)}
      {...automation([props.automationKey], { label: props.label })}
    >
      <Flex gap={theme.spacing(0.5)}>
        <Typography class="medium" size="base" color="dark90" padding={0}>
          {props.label}
        </Typography>
        {props.labelRequired && (
          <Typography class="bold" size="xs" color="mint60" padding={0}>
            *
          </Typography>
        )}
      </Flex>
      {props.helperText && (
        <Typography class="roman" size="sm" color="dark75" padding={0}>
          {props.helperText}
        </Typography>
      )}
      {(props.variant === 'large' || props.variant === 'medium') && (
        <>
          {props.errorText && (
            <Flex gap={theme.spacing(0.5)} align="center">
              <Icon icon="ExclamationCircle" color="error60" size="12px" />
              <Typography class="roman" size="sm" color="error75" padding={0}>
                {props.errorText}
              </Typography>
            </Flex>
          )}
          <UploadSection
            error={props.error ?? false}
            align="center"
            justify="center"
            width="100%"
            canUpload={props.canUpload}
            onClick={props.canUpload ? onUpload.bind(null, props.onSelect) : undefined}
            variant={props.variant}
          >
            {props.src && props.uploading && (
              <LoaderIconWrapper>
                <Icon icon="Loader2" color="lightWhite" size="24" />
              </LoaderIconWrapper>
            )}
            {props.src ? (
              <Image src={props.src} />
            ) : (
              <Icon icon="Photo" size="24px" color={props.error ? 'error60' : 'dark45'} />
            )}
          </UploadSection>
          {props.canUpload && (
            <>
              <Spacer size={0.5} />
              <Button
                title={props.uploadButtonText ?? 'Upload photo'}
                variant="tertiary"
                type="mint"
                size="sm"
                wrap="narrow"
                onClick={onUpload.bind(null, props.onSelect)}
              />
            </>
          )}
        </>
      )}
    </Flex>
  );
}

const Image = styled('img')`
  height: 100%;
  width: 100%;
  object-fit: cover;
  max-height: 150px;
`;

const VariantToWrapperSize: Record<ImageUploadProps['variant'], number> = {
  large: 150,
  medium: 80,
};

const UploadSection = styled(Flex)<{ error?: boolean; canUpload?: boolean; variant: ImageUploadProps['variant'] }>(
  ({ error, theme, canUpload, variant }) => ({
    backgroundColor: error ? theme.palette.colors.errorL1 : theme.palette.colors.lightL2,
    border: `1px dotted ${error ? theme.palette.colors.error60 : theme.palette.colors.dark45}`,
    borderRadius: 4,
    minHeight: VariantToWrapperSize[variant],
    cursor: canUpload ? 'pointer' : 'default',
    position: 'relative',
  })
);

const Spacer = styled('div')<{ size: number }>(({ theme, size }) => ({
  height: theme.spacing(size),
  width: '100%',
}));

const LoaderIconWrapper = styled('div')`
  height: 100%;
  width: 100%;
  max-height: 50px;
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
