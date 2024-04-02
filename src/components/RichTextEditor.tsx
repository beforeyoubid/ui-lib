import { memo, useCallback } from 'react';

import { styled, type Theme, useTheme } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { Flex } from './Flex';
import { TextFieldErrorLabel, TextFieldHint, TextFieldLabel } from './TextInput/Labels';

export type RichTextEditorProps = {
  value: string;
  label: string;
  onChange: (value: string) => void;
  required?: boolean;
  isOptional?: boolean;
  errorText?: string;
  helperText?: string;
  height?: number;
  fullWidth?: boolean;
};

const modules = {
  toolbar: [
    ['bold', 'italic', 'underline'],
    [{ align: ['right', 'center', 'justify'] }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link'],
  ],
};
const formats = ['header', 'bold', 'italic', 'underline', 'list', 'bullet', 'link', 'image', 'align'];

export function RichTextEditor(props: RichTextEditorProps) {
  const {
    value,
    label,
    onChange,
    required = true,
    errorText,
    helperText,
    isOptional = false,
    height,
    fullWidth = true,
  } = props;

  const handleChange = useCallback(
    (value: string) => {
      onChange(value);
    },
    [onChange]
  );
  const theme = useTheme();
  return (
    <Flex direction="column" gap={4} width={fullWidth ? '100%' : undefined}>
      <TextFieldLabel labelText={label} required={required} isOptional={isOptional} />
      {helperText && <TextFieldHint hintText={helperText} />}
      {errorText && <TextFieldErrorLabel errorText={errorText} />}
      <RichTextEditorComponent
        modules={modules}
        formats={formats}
        value={value}
        onChange={handleChange}
        height={height}
        errorText={errorText}
        themeData={theme}
      />
    </Flex>
  );
}

const RichTextEditorComponent = styled(ReactQuill)<{ themeData: Theme; height?: number; errorText?: string }>`
  width: 100%;
  border: 1px solid
    ${({ errorText, themeData }) => (errorText ? themeData.palette.colors.error60 : themeData.palette.colors.dark45)};
  border-radius: 4px;
  background-color: ${({ errorText, themeData }) =>
    errorText ? themeData.palette.colors.errorL1 : themeData.palette.colors.lightWhite};

  .ql-editor {
    min-height: 200px;
    height: ${({ height }) => height ?? '200'}px;
    color: ${({ themeData }) => themeData.palette.colors.dark90};
    font-family: 'Avenir-Medium';
    font-weight: 400;

    font-size: 16px;
    border-top: 1px solid ${({ themeData }) => themeData.palette.colors.dark15};
  }

  .ql-container {
    border: none !important;
  }

  .ql-toolbar {
    border: none !important;
  }
`;
export default memo(RichTextEditor);
