import { TextField, styled } from '@mui/material';
import { Flex } from '../Flex';

export const HelperTextErrorWrapper = styled(Flex)({
  maxHeight: 9.6,
  maxWidth: 9.6,
  width: 9.6,
});

export const RowContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'start',
  alignItems: 'center',
  gap: theme.spacing(0.5),
}));

export const LabelRowContainer = styled('div')<{ required: boolean }>(({ theme, required }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'start',
  alignItems: required ? 'start' : 'center',
  gap: theme.spacing(0.25),
}));

export const CustomTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    border-color: ${({ error, disabled, theme }) =>
      error ? theme.palette.colors.error60 : disabled ? theme.palette.colors.error15 : theme.palette.colors.dark45};
    background-color: ${({ error, disabled, theme }) =>
      error ? theme.palette.colors.errorL1 : disabled ? theme.palette.colors.lightL3 : null};

    & fieldset {
      border-color: ${({ theme }) => theme.palette.colors.dark45};
    }
    &:hover fieldset {
      border-color: ${({ error, disabled, theme }) =>
        disabled ? theme.palette.colors.dark45 : error ? theme.palette.colors.error60 : theme.palette.colors.mint60};
    }
    ,
    &.Mui-focused fieldset {
      border-color: ${({ error, theme }) => (error ? theme.palette.colors.error60 : theme.palette.colors.mint60)};
    }
    & .MuiInputBase-input::placeholder {
      color: ${({ theme }) => theme.palette.colors.dark60};
    }
    & .MuiInputBase-input {
      color: ${({ theme }) => theme.palette.colors.dark90};
      resize: both;
    }
  }

  & .MuiOutlinedInput-startAdornment {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }
`;
