import { CustomTextField } from './styles';
import { TextFieldErrorLabel, TextFieldHint, TextFieldLabel } from './Labels';
import { InputAdornment, StandardTextFieldProps, useTheme } from '@mui/material';
import { Icon, IconProps } from '../Icon';
import { Flex } from '../Flex';

export type TextInputProps = {
  label: string;
  placeHolder?: string;
  value: string;
  leadingIconName?: IconProps['icon'];
  helperText?: string;
  errorText?: string;
  required?: boolean;
  isOptional?: boolean;
} & Omit<StandardTextFieldProps, 'required' | 'variant' | 'helperText'>;

export const TextInput = (props: TextInputProps) => {
  const theme = useTheme();
  const {
    label,
    placeHolder,
    value,
    leadingIconName,
    helperText = '',
    errorText = '',
    required = false,
    isOptional = false,
    ...rest
  } = props;

  return (
    <Flex direction="column" width="100%" gap={theme.spacing(0.5)}>
      <TextFieldLabel labelText={label} required={required} isOptional={isOptional} />
      {helperText && <TextFieldHint hintText={helperText} />}
      {errorText && <TextFieldErrorLabel errorText={errorText} />}
      <CustomTextField
        error={!!errorText || false}
        id="outlined-basic"
        variant="outlined"
        placeholder={placeHolder}
        color="primary"
        value={value}
        fullWidth
        InputProps={{
          startAdornment: leadingIconName ? (
            <InputAdornment position="start">
              <Icon icon={leadingIconName} color="dark75" />
            </InputAdornment>
          ) : null,
        }}
        {...rest}
      />
    </Flex>
  );
};
