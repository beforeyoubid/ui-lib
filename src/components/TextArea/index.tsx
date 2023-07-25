import { Flex } from '../Flex';
import { TextInput, TextInputProps } from '../TextInput';
import { Typography } from '../Typography';
import { TextFieldProps } from '@mui/material';
import { useCallback } from 'react';

export type TextAreaProps = TextInputProps &
  TextFieldProps & {
    maxCharacter: number;
    hideTextCount?: boolean;
  };

export const TextArea = (props: TextAreaProps) => {
  const wordCount = props.value.trim().length;
  const handleTextChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      props.onChange?.(event);
    },
    [props.onChange]
  );

  // Check if character count exceed than character limit
  const characterReached: boolean = wordCount > props.maxCharacter;
  return (
    <Flex direction="column">
      <TextInput
        errorText={characterReached ? 'Text limit reached.' : ''}
        {...props}
        disabled={props.disabled || characterReached}
        fullWidth
        multiline
        value={props.value}
        onChange={handleTextChange}
      />
      {!props.hideTextCount && (
        <Typography class="medium" size="base" color="dark90">
          {wordCount}/{props.maxCharacter} characters
        </Typography>
      )}
    </Flex>
  );
};
