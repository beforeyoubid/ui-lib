import { Theme } from '@mui/material';

export const getInfoCheckboxBackgroundColor = (theme: Theme, variant: string) => {
  switch (variant) {
    case 'info':
      return theme.palette.colors.lightL2;
    case 'warning':
      return theme.palette.colors.warning15;
    case 'error':
      return theme.palette.colors.error60;
    default:
      return theme.palette.colors.lightL2;
  }
};
