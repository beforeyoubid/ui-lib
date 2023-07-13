import { useTheme } from '@mui/material';

const getInfoCheckboxBackgroundColor = (variant: string) => {
  const theme = useTheme();
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

export default getInfoCheckboxBackgroundColor;
