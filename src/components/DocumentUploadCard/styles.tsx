import { css, LinearProgress, styled } from '@mui/material';
import { Flex } from '../Flex';

const FlexCard = styled(Flex)<{
  isEditing: boolean;
  hasFile: boolean;
  hasError: boolean;
}>`
  width: calc(100% - ${({ theme }) => theme.spacing(5)});
  padding: ${({ theme }) => theme.spacing(2.5)};
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.colors.dark15};
  background-color: ${({ theme }) => theme.palette.colors.lightL1};

  ${({ theme, isEditing, hasFile }) =>
    !isEditing &&
    !hasFile &&
    css`
      padding: ${theme.spacing(1.25)}px;
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
  width: '100%',
  height: theme.spacing(0.5),
  marginLeft: theme.spacing(0.25),
  marginTop: theme.spacing(1.25),
  borderRadius: 6,
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
  margin-bottom: ${({ theme }) => theme.spacing(0.5)};
`;

export { FlexCard, StyledLinearProgress, TypographyContainer };
