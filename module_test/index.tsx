import React from 'react';
import ReactDOM from 'react-dom/client';

import { Button, Theme, Select } from '@beforeyoubid/ui-lib';
import { ThemeProvider } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root')!);
const element = (
  <ThemeProvider theme={Theme}>
    <Button primaryVariant="primary" secondaryVariant="mint" title="abfv" />
    <Select />
  </ThemeProvider>
);
root.render(element);
