import { CustomtextField } from './styles';
import { Icon } from '../Icon';
import { TextFieldErrorLabel, TextFieldHint, TextFieldLabel } from './hintComponent';
import { TextFieldProps } from '@mui/material';
import { theme } from '../../mui-theme';

export type TextInputComponentProps = TextFieldProps & {
  label: string;
  placeHolder: string;
  value: string;
  backgroundColor: string;
  isDisabled?: boolean;
  showLeadingIcon?: boolean;
  leadingIconName?: string;
  hasError?: boolean;
  hasHelperText?: boolean;
  helperText?: string;
  errorText?: string;
};

const TextInputComponent = (props: TextInputComponentProps) => {
  const {
    label,
    placeHolder,
    value,
    backgroundColor,
    isDisabled,
    showLeadingIcon,
    leadingIconName,
    hasError,
    hasHelperText,
    helperText = '',
    errorText = '',
    ...rest
  } = props;

  return (
    <>
      <TextFieldLabel labelText={label} />
      {hasHelperText && <TextFieldHint hintText={helperText} />}
      {hasError && <TextFieldErrorLabel errorText={errorText} />}
      <CustomtextField
        error={hasError || false}
        style={{ backgroundColor }}
        id="outlined-basic"
        variant="outlined"
        placeholder={placeHolder}
        color="primary"
        value={value}
        disabled={isDisabled}
        InputProps={{
          startAdornment: showLeadingIcon ? (
            <Icon type={leadingIconName} style={{ height: 18, width: 18, color: theme.palette.colors.dark75 }} />
          ) : null,
        }}
        {...rest}
      />
    </>
  );
};

export default TextInputComponent;
