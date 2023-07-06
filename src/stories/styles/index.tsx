import React from 'react';
import { ThemeProvider as MuiNewProvider } from '@mui/material/styles';
import { ThemeProvider } from 'styled-components';

import styledComponentTheme from './styled-component-theme';
import { theme } from '../../mui-theme';

export const ThemedApp = ({ children }: { children: React.ReactNode }) => (
  <MuiNewProvider theme={theme}>
    <ThemeProvider theme={styledComponentTheme}>{children}</ThemeProvider>
  </MuiNewProvider>
);
