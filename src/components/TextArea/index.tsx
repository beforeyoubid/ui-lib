import { Flex } from '../Flex';
import { TextInput, TextInputProps } from '../TextInput';
import { Typography } from '../Typography';
import { OutlinedTextFieldProps } from '@mui/material';
import { useCallback } from 'react';

export type TextAreaProps = Omit<TextInputProps, 'multiline'> &
  Omit<OutlinedTextFieldProps, 'variant'> & {
    maxCharacter: number;
    hideTextCount?: boolean;
    resize?: React.CSSProperties['resize'];
    minHeight?: React.CSSProperties['minHeight'];
    maxHeight?: React.CSSProperties['maxHeight'];
  };

export const TextArea = (props: TextAreaProps) => {
  const characterCount = props.value?.length ?? 0;

  const handleTextChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      props.onChange?.(event);
    },
    [props]
  );

  const fullWidth = props.fullWidth ?? true;

  return (
    <Flex direction="column" gap={4} width={fullWidth ? '100%' : undefined}>
      <TextInput
        {...props}
        fullWidth={fullWidth}
        multiline
        value={props.value}
        onChange={handleTextChange}
        sx={{
          '& textarea': {
            minHeight: props.minHeight ?? 15,
            maxHeight: props.maxHeight,
          },
        }}
      />
      {(!props.hideTextCount || !props.maxCharacter) && (
        <Typography class="medium" size="base" color={props.errorText ? 'error75' : 'dark90'}>
          {characterCount}/{props.maxCharacter} characters
        </Typography>
      )}
    </Flex>
  );
};
