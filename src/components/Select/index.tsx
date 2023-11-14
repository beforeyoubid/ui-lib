import ReactSelect, { type InputProps, type SelectComponentsConfig } from 'react-select';
import { ClearIndicatorProps, DropdownIndicatorProps, Props, StylesConfig } from 'react-select/dist/declarations/src';
import AsyncSelect, { type AsyncProps } from 'react-select/async';
import { type StateManagerProps } from 'react-select/dist/declarations/src/useStateManager';

import { Flex } from '../Flex';

import { styled, useTheme, Theme, Input as InputMui } from '@mui/material';

import { TextFieldErrorLabel, TextFieldHint, TextFieldLabel } from '../TextInput/Labels';
import { Icon } from '../Icon';

type Option<ValueType = string> = { label: string; value: ValueType };

const multiSelectStyles = <IsMulti extends boolean>({
  theme,
  maxHeight,
}: {
  theme: Theme;
  maxHeight?: number;
}): StylesConfig<Option, IsMulti, never> => ({
  control: provided => ({
    ...provided,
    boxShadow: 'none',

    borderRadius: 4,
    borderColor: theme.palette.colors.dark45,
    backgroundColor: theme.palette.colors.lightWhite,
    '&:hover': {
      borderColor: theme.palette.colors.mint60,
    },
  }),
  container: provided => ({
    ...provided,
    width: '100%',
    '&:focus-visible': {
      outline: `${theme.palette.colors.mint60} auto 1px`,
    },
  }),
  option: (provided, { isFocused, isSelected }) => {
    return {
      ...provided,
      color: 'black',
      backgroundColor: isSelected
        ? theme.palette.colors.mintL3
        : isFocused
        ? theme.palette.colors.lightWhite
        : undefined,
      '&:hover': {
        backgroundColor: isSelected ? theme.palette.colors.mintL3 : theme.palette.colors.lightL2,
      },
      paddingLeft: theme.spacing(7),
      fontFamily: theme.typography.fontFamily,
      minHeight: 40,
    };
  },
  multiValueLabel: provided => ({
    ...provided,
    color: 'black',
  }),
  noOptionsMessage: provided => ({
    ...provided,
  }),
  menu: provided => ({
    ...provided,
    zIndex: 2,
  }),
  menuList: provided => ({
    ...provided,
    zIndex: 3,
    border: '1px solid #87878730',
    maxHeight: `${maxHeight}px`,
  }),
  singleValue: provided => ({
    ...provided,
    zIndex: 3,
    color: theme.palette.colors.dark90,
    marginLeft: 0,
    position: 'absolute',
    fontFamily: theme.typography.fontFamily,
  }),
  placeholder: provided => ({
    ...provided,
    zIndex: 3,
    color: theme.palette.colors.dark45,
    marginLeft: 0,
    position: 'absolute',
    fontFamily: theme.typography.fontFamily,
  }),
  valueContainer: provided => ({
    ...provided,
    padding: theme.spacing(1.5, 1.75),
  }),
});

const Input = styled(InputMui)<{ muiTheme: Theme }>`
  background: ${props => props.muiTheme.palette.colors.lightWhite};
  & input {
    padding: 0px;
    font-family: ${({ muiTheme }) => muiTheme.typography.fontFamily};
  }
`;

const IconStyle = styled('div')`
  padding: 8px;
  cursor: pointer;
`;

const StyledDropdownIcon = <IsMulti extends boolean>({
  innerProps,
}: DropdownIndicatorProps<Option, IsMulti, never>) => (
  <IconStyle {...innerProps}>
    <Icon icon="ChevronDown" color="dark100" />
  </IconStyle>
);

const StyledClearIndicator = <IsMulti extends boolean>({ innerProps }: ClearIndicatorProps<Option, IsMulti, never>) => (
  <IconStyle {...innerProps}>
    <Icon icon="X" color="dark100" />
  </IconStyle>
);

function InputComponent<IsMulti extends boolean>({
  innerRef,
  options: _options,
  ...props
}: InputProps<Option, IsMulti, never>) {
  const theme = useTheme();
  return <Input disableUnderline inputRef={innerRef} fullWidth muiTheme={theme} {...(props as unknown as object)} />;
}

export type SelectProps<Async extends boolean = false, IsMulti extends boolean = false> = Props<Option, IsMulti> & {
  async?: Async;
  error?: boolean;
  errorMessage?: string;
  isMulti?: IsMulti;
  label?: string;
  required?: boolean;
  isOptional?: boolean;
  errorText?: string;
  helperText?: string;
  disabled?: boolean;
  maxHeight?: number;
} & Pick<
    AsyncProps<Option, IsMulti, never>,
    'loadOptions' | 'cacheOptions' | 'defaultOptions' | 'onMenuScrollToBottom'
  > &
  Pick<
    StateManagerProps<Option, IsMulti, never>,
    | 'onChange'
    | 'onBlur'
    | 'noOptionsMessage'
    | 'inputValue'
    | 'defaultValue'
    | 'onInputChange'
    | 'options'
    | 'placeholder'
    | 'isClearable'
    | 'isSearchable'
    | 'closeMenuOnSelect'
  > &
  Pick<SelectComponentsConfig<Option, IsMulti, never>, 'Option'>;

type ExtraProps = Pick<SelectProps, 'cacheOptions' | 'loadOptions' | 'defaultOptions'>;

export function Select<Async extends boolean = false, IsMulti extends boolean = false>({
  async,
  cacheOptions,
  closeMenuOnSelect,
  defaultOptions,
  defaultValue,
  errorText,
  helperText,
  isClearable = true,
  isDisabled,
  isLoading,
  isMulti,
  isOptional = false,
  isSearchable = true,
  label,
  loadOptions,
  maxHeight = 300,
  noOptionsMessage,
  onBlur,
  onChange,
  onMenuClose,
  onMenuScrollToBottom,
  Option: OptionComponent,
  options,
  placeholder,
  required = false,
  value,
}: SelectProps<Async, IsMulti>) {
  type Components = SelectComponentsConfig<Option, IsMulti, never>;
  const theme = useTheme();

  let Component = ReactSelect;
  let extraProps: ExtraProps = {};
  const extraComponents: Partial<Components> = {};
  if (async) {
    Component = AsyncSelect;
    extraProps = {
      loadOptions,
      cacheOptions,
      defaultOptions,
    };
  }
  if (OptionComponent) {
    extraComponents['Option'] = OptionComponent;
  }
  return (
    <Flex direction="column" width="100%" gap={theme.spacing(0.5)}>
      {label && <TextFieldLabel labelText={label} required={required} isOptional={isOptional} />}
      {helperText && <TextFieldHint hintText={helperText} />}
      {errorText && <TextFieldErrorLabel errorText={errorText} />}
      <Component<Option, IsMulti, never>
        options={options}
        value={value}
        isMulti={isMulti}
        defaultValue={defaultValue}
        isSearchable={isSearchable}
        isClearable={isClearable}
        isDisabled={isDisabled}
        onBlur={onBlur}
        isLoading={isLoading}
        styles={multiSelectStyles({ theme, maxHeight })}
        onChange={onChange}
        noOptionsMessage={noOptionsMessage}
        onMenuScrollToBottom={onMenuScrollToBottom}
        closeMenuOnSelect={closeMenuOnSelect}
        onMenuClose={onMenuClose}
        placeholder={placeholder}
        components={{
          Input: InputComponent,
          DropdownIndicator: StyledDropdownIcon,
          IndicatorSeparator: null,
          ClearIndicator: StyledClearIndicator,
          ...extraComponents,
        }}
        {...extraProps}
      />
    </Flex>
  );
}
