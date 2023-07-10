import TextInputComponent, { TextInputComponentProps } from '../TextInput';
import { BottomChacterContainer } from './styles';
import { Typography } from '../Typography';
import { TextFieldProps } from '@mui/material';

export type TextAreaComponentProps = TextInputComponentProps &
  TextFieldProps & {
    minRow: number;
    maxCharacter: number;
  };

const TextAreaComponent = (props: TextAreaComponentProps) => {
  const wordCount = props.value.trim().length;
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.onChange?.(event);
  };

  // Check if character count exceed than character limit
  const characterReached: boolean = wordCount > props.maxCharacter;

  return (
    <>
      <TextInputComponent
        hasError={characterReached}
        {...props}
        multiline
        value={props.value}
        onChange={handleTextChange}
        fullWidth
      />
      <BottomChacterContainer>
        <Typography class={'medium'} size={'base'} color={'dark90'}>
          {wordCount}/{props.maxCharacter} characters
        </Typography>
      </BottomChacterContainer>
    </>
  );
};

export default TextAreaComponent;
