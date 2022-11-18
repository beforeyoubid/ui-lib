import { InputProps, TextField as TextFieldMui, TextFieldProps as TextFieldMuiProps } from '@mui/material';

export type TextFieldProps = {
  /**
   * This property controls whether the text field has browser autocomplete turned off
   */
  autocompleteOff?: boolean;
  /**
   * This field is for an error message underneath the component
   */
  errorMessage?: Maybe<string>;
  /**
   * This field is for an automation key to be attached to the textfield
   */
  automationKey?: string;
  /**
   * The maximum length of the content in the text field
   */
  maxLength?: number;
  /**
   * Whether the input component is in read only mode
   */
  readOnly?: InputProps['readOnly'];
} & Pick<
  TextFieldMuiProps,
  | 'disabled'
  | 'error'
  | 'fullWidth'
  | 'helperText'
  | 'id'
  | 'label'
  | 'InputLabelProps'
  | 'name'
  | 'onChange'
  | 'onBlur'
  | 'placeholder'
  | 'required'
  | 'value'
  | 'variant'
  | 'onFocus'
  | 'multiline'
  | 'maxRows'
>;

export const TextField = ({
  automationKey,
  autocompleteOff = false,
  error,
  errorMessage,
  fullWidth,
  helperText,
  id,
  label,
  maxLength,
  name,
  onChange,
  placeholder,
  readOnly,
  required,
  value,
  variant = 'filled',
  onFocus,
  multiline,
  maxRows,
  ...props
}: TextFieldProps) => {
  return (
    <TextFieldMui
      error={error}
      fullWidth={fullWidth}
      helperText={errorMessage ?? helperText}
      id={id}
      label={label}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      value={value}
      onFocus={onFocus}
      variant={variant}
      multiline={multiline}
      maxRows={maxRows}
      InputProps={{
        readOnly,
      }}
      inputProps={{
        maxLength,
        ...(autocompleteOff ? { autoComplete: 'nope' } : {}),
      }}
      {...props}
    />
  );
};
