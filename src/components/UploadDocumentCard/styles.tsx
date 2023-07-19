// External Imports
// React
import React, { useState, useMemo, useCallback } from 'react';
// Material
import { css, LinearProgress, styled, Theme } from '@mui/material';

// Relative Imports
// Components
import { Icon } from '../Icon';
import { Flex } from '../Flex';
import { Typography } from '../Typography';
import { Button } from '../Button';
// Styling
import { Colors } from '../../theme.types';
import { UploadDocumentCardState } from './index';

const FlexCard = styled(Flex)<{ state: UploadDocumentCardState }>`
  width: 442px;
  padding: 20px;
  border-radius: 8px;
  border-width: 1px;
  border-style: dashed;
  border-color: ${({ theme }) => theme.palette.colors.dark45};
  background-color: ${({ theme }) => theme.palette.colors.lightL1};

  ${({ state, theme }) =>
    state === 'locked' &&
    css`
      padding: 10px;
      border-color: ${theme.palette.colors.dark15};
    `}

  ${({ state, theme }) =>
    state === 'error' &&
    css`
      border-color: ${theme.palette.colors.error45};
      background-color: ${theme.palette.colors.errorL1};
    `}
`;

// const FlexCard = styled(Flex)<{ border: keyof Colors; background?: keyof Colors; padding?: number }>`
//   padding: ${({ padding }) => padding ?? 20}px;
//   width: 442px;
//   border-radius: 8px;
//   border-width: 1px;
//   border-color: ${({ theme, border }) => theme.palette.colors[border]};
//   border-style: dashed;
//   ${({ background, theme }) =>
//     background &&
//     css`
//       background-color: ${theme.palette.colors[background]};
//     `}
// `;

export { FlexCard };
