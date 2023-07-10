import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';
import { Icon } from '../Icon';

const HelperTextErrorIcon = styled(Icon)`
  color: ${({ theme }) => theme.palette.colors.error75};
  max-height: 9.6px;
  max-width: 9.6px;
  margin: 0px 4px 4px 0px;
`;

const HelperErrorText = styled('div')({
  margin: '0px 4px 4px 0px;',
});

const HelperText = styled('div')({
  margin: '2px 4px 4px 0px',
});

const RowContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'start',
  alignItems: 'center',
});

const LabelIcon = styled('div')({
  marginLeft: 4,
});

const CustomtextField = styled(TextField)`
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

  & .MuiSvgIcon-root {
    color: ${({ theme }) => theme.palette.colors.dark75};
    height: 18px;
    width: 18px;
    margin-right: 4px;
  }
`;

export { HelperTextErrorIcon, HelperText, RowContainer, CustomtextField, LabelIcon, HelperErrorText };
