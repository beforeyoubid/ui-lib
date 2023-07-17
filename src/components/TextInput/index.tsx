import { CustomTextField } from './styles';
import { TextFieldErrorLabel, TextFieldHint, TextFieldLabel } from './Labels';
import { InputAdornment, TextFieldProps } from '@mui/material';
import { Icon, IconProps } from '../Icon';

export type TextInputComponentProps = TextFieldProps & {
  label: string;
  placeHolder: string;
  value: string;
  backgroundColor: string;
  leadingIconName?: IconProps['icon'];
  helperText?: string;
  errorText?: string;
};

const TextInputComponent = (props: TextInputComponentProps) => {
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

export default TextInputComponent;
