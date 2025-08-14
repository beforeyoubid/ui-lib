import { styled } from '@mui/material';

import { Flex } from '../Flex';

/** Root clickable container. */
export const Wrapper = styled('button')<{
  fullWidth: boolean;
  selected: boolean;
  variant: 'radio' | 'checkbox' | 'option';
}>(({ theme, fullWidth, selected, variant }) => ({
  appearance: 'none',
  border: 'none',
  background: variant === 'option' && selected ? theme.palette.colors.mintL3 : theme.palette.colors.lightWhite,
  outline:
    variant === 'option' && selected
      ? `1px solid ${theme.palette.colors.mint60}`
      : `1px solid ${theme.palette.colors.dark15}`,
  borderRadius: 12,
  padding: theme.spacing(5),
  width: fullWidth ? '100%' : undefined,
  textAlign: 'left',
  cursor: 'pointer',
  transition: 'background-color 120ms ease, outline-color 120ms ease, box-shadow 120ms ease',
  ':hover': {
    backgroundColor: variant === 'option' && selected ? theme.palette.colors.mintL3 : theme.palette.colors.lightL3,
  },
  ':disabled': {
    cursor: 'not-allowed',
    backgroundColor: theme.palette.colors.lightL3,
    opacity: 0.6,
  },
  ':focus-visible': {
    outline: `2px solid ${theme.palette.colors.mint60}`,
    outlineOffset: 2,
    boxShadow: `0 0 0 2px ${theme.palette.colors.mintL3}`,
  },
}));

/** Generic row layout used across variants. */
export const Row = styled(Flex)(({ theme }) => ({
  alignItems: 'center',
  gap: theme.spacing(3),
  width: '100%',
}));

/** Column stack layout for the `option` variant. */
export const Column = styled(Flex)(({ theme }) => ({
  flexDirection: 'column',
  gap: theme.spacing(2),
  width: '100%',
}));

/** Flexible spacer pushing content to the right. */
export const Spacer = styled('div')({ flexGrow: 1 });

/** Container for optional leading icon (radio/checkbox variants). */
export const LeftIconBox = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.colors.navy,
}));

/** Container for right-side adornments. */
export const RightAdornmentBox = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

/** Container for the selection indicator. */
export const IndicatorBox = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',
  color: theme.palette.colors.navy,
}));

/** Check badge for the `option` variant. */
export const OptionIndicator = styled('div')<{ selected: boolean }>(({ theme, selected }) => ({
  height: 24,
  width: 24,
  borderRadius: 12,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: selected ? theme.palette.colors.mint60 : theme.palette.colors.lightWhite,
  outline: `1px solid ${selected ? theme.palette.colors.mint60 : theme.palette.colors.dark30}`,
  outlineOffset: -1,
  color: selected ? theme.palette.colors.lightWhite : theme.palette.colors.dark30,
}));
