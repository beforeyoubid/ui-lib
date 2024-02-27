import type React from 'react';
import { Modal as ModalMui, styled, useTheme } from '@mui/material';

import { Flex } from './Flex';
import { Typography } from './Typography';
import { Icon } from './Icon';

import { formatSizeToPx } from '../utils';

export type ModalProps = {
  title?: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;

  height?: number | string;
  width?: number | string;

  maxHeight?: number | string;
  maxWidth?: number | string;
};

export function Modal(props: ModalProps) {
  const theme = useTheme();
  return (
    <StyledModal open={props.open} onClose={props.onClose}>
      <StyledModalContent
        height={props.height}
        width={props.width}
        maxHeight={props.maxHeight}
        maxWidth={props.maxWidth}
      >
        {!!props.title && (
          <TitleSection>
            <Flex direction="row" gap={theme.spacing(2.25)} align="center">
              <Typography class="bold" size="base" color="dark90" fullWidth>
                {props.title}
              </Typography>
              <StyledIconWrapper onClick={props.onClose}>
                <Icon icon="X" size="24px" color="dark90" />
              </StyledIconWrapper>
            </Flex>
          </TitleSection>
        )}
        <ContentSection>{props.children}</ContentSection>
      </StyledModalContent>
    </StyledModal>
  );
}

const TitleSection = styled('div')(({ theme }) => ({
  padding: theme.spacing(2.5),
  borderBottom: `1px solid ${theme.palette.colors.dark15}`,
}));

const ContentSection = styled('div')(({ theme }) => ({
  padding: theme.spacing(2.5),
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.colors.dark90,
}));

const StyledModal = styled(ModalMui)({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledModalContent = styled('div')<{
  height?: number | string;
  width?: number | string;
  maxHeight?: number | string;
  maxWidth?: number | string;
}>(({ theme, height, width, maxWidth, maxHeight }) => ({
  minWidth: width ? formatSizeToPx(width) : 565,
  minHeight: height ? formatSizeToPx(height) : 100,
  maxHeight: maxHeight ? formatSizeToPx(maxHeight) : undefined,
  maxWidth: maxWidth ? formatSizeToPx(maxWidth) : undefined,
  border: `1px solid ${theme.palette.colors.dark15}`,
  backgroundColor: theme.palette.colors.lightWhite,
  borderRadius: 8,
  ':focus-visible': {
    outline: 'none',
  },
}));

const StyledIconWrapper = styled('div')({
  cursor: 'pointer',
  height: 24,
  width: 24,
});
