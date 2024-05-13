import React from 'react';

import { theme } from '@beforeyoubid/ui-lib/dist/mui-theme';
import { ThemeProvider } from '@mui/material';

export function Theme({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
