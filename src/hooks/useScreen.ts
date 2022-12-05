import { useMediaQuery, useTheme } from '@material-ui/core';

export const useScreen = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return { isMobile };
};
