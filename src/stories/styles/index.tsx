import type React from 'react';
import { ThemeProvider as MuiNewProvider } from '@mui/material';

import { theme } from '../../mui-theme';

export const ThemedApp = ({ children }: { children: React.ReactNode }) => (
  <MuiNewProvider theme={theme}>{children}</MuiNewProvider>
);
