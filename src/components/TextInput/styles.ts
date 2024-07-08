import { InputAdornment, TextField, styled } from '@mui/material';

import { Flex } from '../Flex';

export const HelperTextErrorWrapper = styled(Flex)(({ theme }) => ({
  maxHeight: 9.6,
  maxWidth: 9.6,
  width: 9.6,
  marginBottom: theme.spacing(0.25),
}));

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

export const CustomTextField = styled(TextField, {
  shouldForwardProp: prop => prop !== 'hasLeadingIcon',
})<{ hasLeadingIcon: boolean; resize?: React.CSSProperties['resize'] }>`
  & .MuiFormControl-root {
    background: transparent;
  }
  & .MuiOutlinedInput-root {
    border-color: ${({ error, disabled, theme }) =>
      error ? theme.palette.colors.error60 : disabled ? theme.palette.colors.error15 : theme.palette.colors.dark45};
    background-color: ${({ error, disabled, theme }) =>
      error ? theme.palette.colors.errorL1 : disabled ? theme.palette.colors.lightL3 : theme.palette.colors.lightWhite};

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
      resize: ${({ resize = 'both' }) => resize};
    }
  }

  & .MuiInputAdornment-positionStart.MuiInputAdornment-outlined {
    &:not(.icon-adornment) {
      margin-left: 0;
      margin-right: 0;
      padding: ${({ theme }) => theme.spacing(0, 1, 0, 1.75)};
    }
  }
  & .MuiInputAdornment-positionEnd.MuiInputAdornment-outlined {
    &:not(.icon-adornment) {
      margin-left: 0;
      margin-right: 0;
      padding: ${({ theme }) => theme.spacing(0, 1.75)};
    }
  }
  & .icon-adornment {
    margin-right: 0;
    margin-left: 0;

    padding: ${({ theme }) => theme.spacing(0, 0, 0, 1.75)};
  }
  & .MuiOutlinedInput-root {
    padding: 0px;
    .MuiOutlinedInput-input {
      padding: ${({ theme }) => theme.spacing(1.5, 1.75)};
      ${({ multiline }) => !multiline && `height: 21px;`}
    }
  }
  & .MuiInputBase-adornedStart .MuiOutlinedInput-input {
    padding-left: ${({ theme, hasLeadingIcon }) => theme.spacing(hasLeadingIcon ? 0.5 : 1.25)};
  }

  .Mui-focused .MuiInputAdornment-outlined {
    :before,
    :after {
      background-color: ${({ error, disabled, theme }) =>
        disabled ? theme.palette.colors.dark45 : error ? theme.palette.colors.error60 : theme.palette.colors.mint60};
    }
  }
`;

export const StyledInputAdornment = styled(InputAdornment, {
  shouldForwardProp: prop => prop !== 'icon' && prop !== 'showBorder',
})<{ icon?: boolean; showBorder?: boolean }>`
  position: relative;
  padding: ${({ theme }) => theme.spacing(0, 1, 0, 1.75)};

  ${({ position }) => (position === 'start' ? ':after' : ':before')} {
    position: absolute;
    content: ${({ icon }) => (icon ? 'unset' : `''`)};
    height: 45px;
    background-color: ${({ theme }) => theme.palette.colors.dark45};
    width: 1px;
    display: ${({ showBorder = true }) => (showBorder ? 'block' : 'none')};
    ${({ position }) => (position === 'start' ? 'right' : 'left')}: 0;
    top: -${({ theme }) => theme.spacing(2.75)};
  }
`;
