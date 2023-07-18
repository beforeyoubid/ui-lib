import { CustomTextField } from './styles';
import * as Icons from 'tabler-icons-react';
import { TextFieldErrorLabel, TextFieldHint, TextFieldLabel } from './Labels';
import { InputAdornment, TextFieldProps } from '@mui/material';
import { Icon } from '../Icon';

export type TextInputProps = TextFieldProps & {
  label: string;
  placeHolder: string;
  value: string;
  backgroundColor: string;
  leadingIconName?: keyof typeof Icons;
  helperText?: string;
  errorText?: string;
};

const TextInput = (props: TextInputProps) => {
  const {
    label,
    placeHolder,
    value,
    backgroundColor,
    leadingIconName,
    helperText = '',
    errorText = '',
    ...rest
  } = props;

  return (
    <>
      <TextFieldLabel labelText={label} />
      {helperText && <TextFieldHint hintText={helperText} />}
      {errorText && <TextFieldErrorLabel errorText={errorText} />}
      <CustomTextField
        error={!!errorText || false}
        style={{ backgroundColor }}
        id="outlined-basic"
        variant="outlined"
        placeholder={placeHolder}
        color="primary"
        value={value}
        InputProps={{
          startAdornment: leadingIconName ? (
            <InputAdornment position="start">
              <Icon icon={leadingIconName} color="dark75" />
            </InputAdornment>
          ) : null,
        }}
        {...rest}
      />
    </>
  );
};

export default TextInput;
