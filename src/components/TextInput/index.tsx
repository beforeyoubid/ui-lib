import { type StandardTextFieldProps, useTheme } from '@mui/material';

import { automation } from '../../utils';
import { Adornment } from '../Adornment';
import { Flex } from '../Flex';
import { type IconProps } from '../Icon';
import { type TooltipProps } from '../ToolTip';

import { TextFieldErrorLabel, TextFieldHint, TextFieldLabel } from './Labels';
import { CustomTextField } from './styles';

export type TextInputProps = {
  label: string;
  placeholder?: string;
  value: string;
  leadingIcon?: IconProps['icon'];
  helperText?: string;
  errorText?: string;
  required?: boolean;
  isOptional?: boolean;
  automationKey?: string;
  startAdornment?: string | React.ReactNode;
  endAdornment?: string | React.ReactNode;
  showStartAdornmentBorder?: boolean;
  showEndAdornmentBorder?: boolean;
  resize?: React.CSSProperties['resize'];
  tooltip?: string;
  tooltipProps?: TooltipProps;
  /** A react component that will show beneath the text field, good for checkboxes */
  componentBelowTextField?: React.ReactNode;
} & Omit<StandardTextFieldProps, 'required' | 'variant' | 'helperText'>;

export const TextInput = (props: TextInputProps) => {
  const theme = useTheme();
  const {
    label,
    placeholder,
    value,
    leadingIcon,
    helperText = '',
    errorText = '',
    required = false,
    isOptional = false,
    automationKey,
    startAdornment,
    endAdornment,
    showStartAdornmentBorder = true,
    showEndAdornmentBorder = true,
    InputProps = {},
    componentBelowTextField,
    tooltip,
    tooltipProps,
    ...rest
  } = props;

  return (
    <Flex direction="column" width="100%" gap={theme.spacing(0.5)}>
      <TextFieldLabel
        labelText={label}
        required={required}
        isOptional={isOptional}
        tooltip={tooltip}
        tooltipProps={tooltipProps}
      />
      {helperText && <TextFieldHint hintText={helperText} />}
      {errorText && <TextFieldErrorLabel errorText={errorText} />}
      <CustomTextField
        error={!!errorText || false}
        id="outlined-basic"
        variant="outlined"
        placeholder={placeholder}
        color="primary"
        value={value}
        fullWidth
        hasLeadingIcon={!!leadingIcon}
        InputProps={{
          ...InputProps,
          startAdornment: (
            <Adornment
              position="start"
              adornment={startAdornment}
              icon={leadingIcon}
              showBorder={showStartAdornmentBorder}
            />
          ),
          endAdornment: <Adornment position="end" adornment={endAdornment} showBorder={showEndAdornmentBorder} />,
        }}
        sx={{
          '&.MuiFormControl-root': {
            backgroundColor: 'transparent',
            marginLeft: 0,
          },
          ' .MuiFormHelperText-root': {
            backgroundColor: 'transparent',
            marginLeft: 0,
          },
        }}
        helperText={componentBelowTextField}
        inputProps={{
          ...automation([automationKey], { label }),
        }}
        {...rest}
      />
    </Flex>
  );
};
