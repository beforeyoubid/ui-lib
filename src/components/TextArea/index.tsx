import { Flex } from '../Flex';
import { TextInput, TextInputProps } from '../TextInput';
import { Typography } from '../Typography';
import { TextFieldProps } from '@mui/material';
import { useCallback } from 'react';

export type TextAreaProps = TextInputProps &
  TextFieldProps & {
    maxCharacter: number;
    hideTextCount?: boolean;
    stopTypingAfterMaxCharacter?: boolean;
  };

export const TextArea = (props: TextAreaProps) => {
  const wordCount = props.value?.trim().length;
  const handleTextChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (props.stopTypingAfterMaxCharacter && event.target.value.length > props.maxCharacter) return;
      props.onChange?.(event);
    },
    [props]
  );

  return (
    <Flex direction="column">
      <TextInput {...props} fullWidth multiline value={props.value} onChange={handleTextChange} />
      {!props.hideTextCount && (
        <Typography class="medium" size="base" color="dark90">
          {wordCount}/{props.maxCharacter} characters
        </Typography>
      )}
    </Flex>
  );
};
