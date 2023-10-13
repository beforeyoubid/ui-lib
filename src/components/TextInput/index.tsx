import { StandardTextFieldProps, useTheme } from '@mui/material';

import { CustomTextField, StyledInputAdornment } from './styles';
import { TextFieldErrorLabel, TextFieldHint, TextFieldLabel } from './Labels';
import { Icon, IconProps } from '../Icon';
import { Flex } from '../Flex';

import { automation } from '../../utils';
import { Typography } from '../Typography';

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
        placeholder={placeholder}
        color="primary"
        value={value}
        fullWidth
        hasLeadingIcon={!!leadingIconName}
        InputProps={{
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
