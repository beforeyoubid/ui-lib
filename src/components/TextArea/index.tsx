import { Flex } from '../Flex';
import { TextInput, TextInputProps } from '../TextInput';
import { Typography } from '../Typography';
import { OutlinedTextFieldProps } from '@mui/material';
import { useCallback } from 'react';

export type TextAreaProps = TextInputProps &
  Omit<OutlinedTextFieldProps, 'variant'> & {
    maxCharacter: number;
    hideTextCount?: boolean;
  };

export const TextArea = (props: TextAreaProps) => {
  const characterCount = props.value?.length ?? 0;

  const handleTextChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      props.onChange?.(event);
    },
    [props]
  );

  return (
    <Flex direction="column">
      <TextInput {...props} fullWidth multiline value={props.value} onChange={handleTextChange} />
      {(!props.hideTextCount || !props.maxCharacter) && (
        <Typography class="medium" size="base" color="dark90">
          {characterCount}/{props.maxCharacter} characters
        </Typography>
      )}
    </Flex>
  );
};
