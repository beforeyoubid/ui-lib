import type React from 'react';
import { forwardRef, useMemo } from 'react';

import { type TextFieldProps } from '@mui/material';
import { type DateFieldProps as MuiDateFieldProps } from '@mui/x-date-pickers';
import moment, { type Moment } from 'moment';

import { automation } from '../../utils';
import { Adornment } from '../Adornment';
import { Flex } from '../Flex';
import { type IconProps } from '../Icon';
import { TextFieldLabel, TextFieldHint, TextFieldErrorLabel } from '../TextInput/Labels';
import { CustomTextField } from '../TextInput/styles';
import { type TooltipProps } from '../ToolTip';

import { StyledDateField } from './styles';

export type DateFieldProps = {
  label: string;
  format?: string;
  required?: boolean;
  date: Maybe<moment.MomentInput>;
  onChange: (value: Maybe<Moment>) => void;
  isOptional?: boolean;
  tooltip?: string;
  tooltipProps?: TooltipProps;
  /** helper text to show above the date picker */
  helperText?: string;
  /** error text to show above the date picker */
  errorText?: string;

  /** an optional automation key used for providing data attributes to the instances of the component */
  automationKey?: string;
  /** icon at start of input field */
  leadingIcon?: IconProps['icon'];

  /** the adornment at the start of the input field */
  startAdornment?: string | React.ReactNode;
  /** whether to add a border around the start adornment */
  showStartAdornmentBorder?: boolean;
  /** A react component that will show beneath the text field, good for checkboxes */
  componentBelowTextField?: React.ReactNode;
} & Pick<MuiDateFieldProps<moment.Moment>, 'inputRef' | 'disabled'>;

const DateFieldNoRef: React.ForwardRefRenderFunction<HTMLInputElement, DateFieldProps> = (
  {
    label,
    date: dateParameter,
    required = false,
    format = 'MMM D, YYYY',
    onChange,
    isOptional = false,
    disabled = false,
    tooltip,
    tooltipProps,
    helperText,
    errorText,
    startAdornment,
    showStartAdornmentBorder = true,
    automationKey,
    leadingIcon,
    componentBelowTextField,
  },
  ref
) => {
  const date = useMemo(() => (dateParameter ? moment(dateParameter) : null), [dateParameter]);

  return (
    <Flex direction="column" width="100%" gap={5} style={{ position: 'relative' }}>
      <TextFieldLabel
        labelText={label}
        required={required}
        tooltip={tooltip}
        tooltipProps={tooltipProps}
        isOptional={isOptional}
      />
      {helperText && <TextFieldHint hintText={helperText} />}
      {errorText && <TextFieldErrorLabel errorText={errorText} />}

      <StyledDateField
        value={date}
        format={format}
        onChange={onChange}
        inputRef={ref}
        disabled={disabled}
        slotProps={{
          textField: {
            placeholder: format,
            inputProps: {
              ...automation([automationKey], { label }),
            },
            helperText: componentBelowTextField,
            InputProps: {
              startAdornment: (
                <Adornment
                  position="start"
                  adornment={startAdornment}
                  icon={leadingIcon}
                  showBorder={showStartAdornmentBorder}
                />
              ),
            },
          },
        }}
        slots={{
          textField: CustomTextField as unknown as React.ElementType<TextFieldProps>,
        }}
      />
    </Flex>
  );
};

export const DateField = forwardRef(DateFieldNoRef);
