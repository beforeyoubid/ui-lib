import TextInputComponent, { TextInputComponentProps } from '../TextInput';
import { Typography } from '../Typography';
import { TextFieldProps } from '@mui/material';
import { useCallback } from 'react';

export type TextAreaComponentProps = TextInputComponentProps &
  TextFieldProps & {
    minRow: number;
    maxCharacter: number;
    hideTextCount?: boolean;
  };

export const TextAreaComponent = (props: TextAreaComponentProps) => {
  const wordCount = props.value.trim().length;
  const handleTextChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      props.onChange?.(event);
    },
    [props.onChange]
  );

  // Check if character count exceed than character limit
  const characterReached: boolean = wordCount > props.maxCharacter;

  console.log('character reached', characterReached);
  return (
    <>
      <TextInputComponent
        errorText={characterReached ? 'Text limit reached.' : ''}
        {...props}
        multiline
        value={props.value}
        onChange={handleTextChange}
        fullWidth
      />
      {!props.hideTextCount && (
        <Typography class="medium" size="base" color="dark90">
          {wordCount}/{props.maxCharacter} characters
        </Typography>
      )}
    </>
  );
};
