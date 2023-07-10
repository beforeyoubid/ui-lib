import React from 'react';
import ReactDOM from 'react-dom/client';

import { TextField, Theme } from '@beforeyoubid/ui-lib';
import { ThemeProvider } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root')!);
const element = (
  <ThemeProvider theme={Theme}>
    <TextField />
  </ThemeProvider>
);
root.render(element);
