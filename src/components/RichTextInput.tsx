import { ChangeEvent, useCallback } from 'react';

import { type OutlinedTextFieldProps } from '@mui/material';

import { Flex } from './Flex';
import { TextInput, type TextInputProps } from './TextInput';
import { Typography } from './Typography';
import DefaultEditor, {
  BtnBold,
  BtnBulletList,
  BtnItalic,
  BtnNumberedList,
  BtnStyles,
  ContentEditableEvent,
  Editor,
  EditorProvider,
  Toolbar,
} from 'react-simple-wysiwyg';
import { TextFieldErrorLabel, TextFieldHint, TextFieldLabel } from './TextInput/Labels';

export type RichTextInputProps = Omit<TextInputProps, 'multiline'> &
  Omit<OutlinedTextFieldProps, 'variant'> &
  TextInputProps & {
    maxCharacter: number;
    hideTextCount?: boolean;
    resize?: React.CSSProperties['resize'];
    onChange?: (event: ContentEditableEvent) => void;
    minHeight?: React.CSSProperties['minHeight'];
    maxHeight?: React.CSSProperties['maxHeight'];
  };

export const RichTextInput = (props: RichTextInputProps) => {
  const characterCount = props.value?.length ?? 0;

  const handleTextChange = useCallback(
    (event: ContentEditableEvent) => {
      props.onChange?.(event);
    },
    [props]
  );

  const fullWidth = props.fullWidth ?? true;

  return (
    <Flex direction="column" gap={4} width={fullWidth ? '100%' : undefined}>
      <TextFieldLabel
        labelText={props.label}
        required={props.required ?? false}
        isOptional={props.isOptional ?? false}
      />
      {props.helperText && <TextFieldHint hintText={props.helperText} />}
      {props.errorText && <TextFieldErrorLabel errorText={props.errorText} />}
      <EditorProvider>
        <DefaultEditor
          disabled={props.disabled}
          value={props.value}
          onChange={handleTextChange}
          containerProps={{
            style: {
              backgroundColor: 'white',
              width: '100%',
              maxWidth: '780px',
            },
          }}
        ></DefaultEditor>
      </EditorProvider>
      {(!props.hideTextCount || !props.maxCharacter) && (
        <Typography class="medium" size="base" color={props.errorText ? 'error75' : 'dark90'}>
          {characterCount}/{props.maxCharacter} characters
        </Typography>
      )}
    </Flex>
  );
};
