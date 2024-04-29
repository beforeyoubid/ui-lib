import { type StandardTextFieldProps, useTheme } from '@mui/material';

import { automation } from '../../utils';
import { Flex } from '../Flex';
import { Icon, type IconProps } from '../Icon';
import { type TooltipProps } from '../ToolTip';
import { Typography } from '../Typography';

import { TextFieldErrorLabel, TextFieldHint, TextFieldLabel } from './Labels';
import { CustomTextField, StyledInputAdornment } from './styles';

export type TextInputProps = {
  label: string;
  placeholder?: string;
  value: string;
  leadingIconName?: IconProps['icon'];
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
    leadingIconName,
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
        hasLeadingIcon={!!leadingIconName}
        InputProps={{
          ...InputProps,
          startAdornment: (
            <Adornment
              position="start"
              adornment={startAdornment}
              icon={leadingIconName}
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

const Adornment = ({
  adornment,
  position,
  icon,
  showBorder = true,
}: {
  adornment?: string | React.ReactNode;
  position: 'start' | 'end';
  icon?: TextInputProps['leadingIconName'];
  showBorder?: boolean;
}) => {
  if (adornment && icon) {
    throw new Error('cannot have both adornment and leadingIconName');
  }
  if (icon) {
    return (
      <StyledInputAdornment
        position={position}
        icon
        className="icon-adornment"
        disablePointerEvents
        showBorder={showBorder}
      >
        <Icon icon={icon} color="dark75" size="18" />
      </StyledInputAdornment>
    );
  }
  if (!adornment) return null;
  if (!(typeof adornment === 'string')) {
    return (
      <StyledInputAdornment position={position} disablePointerEvents showBorder={showBorder}>
        {adornment}
      </StyledInputAdornment>
    );
  }
  return (
    <StyledInputAdornment position={position} showBorder={showBorder}>
      <Typography color="dark60" class="medium" size="base">
        {adornment}
      </Typography>
    </StyledInputAdornment>
  );
};
