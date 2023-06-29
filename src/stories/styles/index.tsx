import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';

import styledComponentTheme from './styled-component-theme';
import { theme } from '../../mui-theme';

export const withMaterialUITheme = (wrappedComponent: React.ReactNode) => (
  <MuiThemeProvider theme={theme}>{wrappedComponent}</MuiThemeProvider>
);

export const withStyledComponentTheme = (wrappedComponent: React.ReactNode) => (
  <ThemeProvider theme={styledComponentTheme}>
    <>{wrappedComponent}</>
  </ThemeProvider>
);

export const ThemedApp = ({ children }: { children: React.ReactNode }) => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={styledComponentTheme}>
      <>{children}</>
    </ThemeProvider>
  </MuiThemeProvider>
);
