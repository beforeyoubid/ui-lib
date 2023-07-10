import { TextField, styled } from '@mui/material';
import { Icon } from '../IconV2';

const HelperTextErrorIcon = styled(Icon)(({ theme }) => ({
  maxHeight: '9.6px',
  maxWidth: '9.6px',
  marginRight: theme.spacing(0.5),
  marginBottom: theme.spacing(0.5),
}));

const HelperErrorText = styled('div')(({ theme }) => ({
  maxHeight: '9.6px',
  maxWidth: '9.6px',
  marginRight: theme.spacing(0.5),
  marginBottom: theme.spacing(0.5),
}));

const HelperText = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(0.25),
  marginRight: theme.spacing(0.5),
  marginBottom: theme.spacing(0.5),
}));

const RowContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'start',
  alignItems: 'center',
});

const LabelIcon = styled('div')(({ theme }) => ({
  marginLeft: theme.spacing(0.5),
}));

const CustomTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    border-color: ${({ error, disabled, theme }) =>
      error ? theme.palette.colors.error60 : disabled ? theme.palette.colors.error15 : theme.palette.colors.dark45};
    background-color: ${({ error, disabled, theme }) =>
      error ? theme.palette.colors.errorL1 : disabled ? theme.palette.colors.lightL3 : null};

    & fieldset {
      border-color: ${({ theme }) => theme.palette.colors.dark45};
    }

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

export { HelperTextErrorIcon, HelperText, RowContainer, CustomTextField, LabelIcon, HelperErrorText };
