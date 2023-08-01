// External Imports
// React
// Material
import { css, LinearProgress, styled } from '@mui/material';

// Relative Imports
// Components
import { Flex } from '../Flex';
// Styling
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

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 4,
  borderRadius: 6,
  marginLeft: 2,
  marginTop: 4,
  width: '100%',
  '& .MuiLinearProgress-bar': {
    backgroundColor: theme.palette.colors.mintL2,
  },
  '& .MuiLinearProgress-barColorPrimary': {
    backgroundColor: theme.palette.colors.mint60,
  },
}));

export { FlexCard, StyledLinearProgress };
