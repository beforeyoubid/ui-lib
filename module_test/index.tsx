import React from 'react';

import { Button, Select } from '@beforeyoubid/ui-lib';
import ReactDOM from 'react-dom/client';

import { Editor } from './RichTextEditor';
import { Theme } from './theme';

const root = ReactDOM.createRoot(document.getElementById('root')!);
const element = (
  <Theme>
    <Button primaryVariant="primary" secondaryVariant="mint" title="abfv" />
    <Select />
    <Editor />
  </Theme>
);
root.render(element);
