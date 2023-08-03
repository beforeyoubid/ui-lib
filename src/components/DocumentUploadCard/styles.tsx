import { css, LinearProgress, styled } from '@mui/material';
import { Flex } from '../Flex';

const FlexCard = styled(Flex)<{
  isEditing: boolean;
  hasFile: boolean;
  hasError: boolean;
}>`
  padding: 20px;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.colors.dark15};
  background-color: ${({ theme }) => theme.palette.colors.lightL1};

  ${({ isEditing, hasFile }) =>
    !isEditing &&
    !hasFile &&
    css`
      padding: 10px;
    `}

  ${({ isEditing, theme }) =>
    isEditing &&
    css`
      border-style: dashed;
      border-color: ${theme.palette.colors.dark45};
    `}

  ${({ hasError, theme }) =>
    hasError &&
    css`
      border-color: ${theme.palette.colors.error45};
      background-color: ${theme.palette.colors.errorL1};
    `}
`;

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 4,
  borderRadius: 6,
  marginLeft: 2,
  marginTop: 10,
  width: '100%',
  '& .MuiLinearProgress-bar': {
    backgroundColor: theme.palette.colors.mintL2,
  },
  '& .MuiLinearProgress-barColorPrimary': {
    backgroundColor: theme.palette.colors.mint60,
  },
  '& .MuiLinearProgress-barColorSecondary': {
    backgroundColor: theme.palette.colors.mintL2,
  },
}));

const TypographyContainer = styled(Flex)`
  margin-bottom: 4px;
`;

export { FlexCard, StyledLinearProgress, TypographyContainer };
