import React, { useCallback, useState } from 'react';
import TextInputComponent, { TextInputComponentProps } from '../TextInput';
import { IconButton, InputAdornment, TextFieldProps } from '@mui/material';
import { Icon } from '../Icon';

export type PasswordInputComponentProps = TextInputComponentProps & TextFieldProps;

const PasswordInput = (props: PasswordInputComponentProps) => {
  // Variables to shouw and hide password
  const [showPassword, setShowPassword] = useState<boolean>(false);

  //Function to toggle showPassword values
  const toggleShowPassword = useCallback(() => setShowPassword(previousShowPassValue => !previousShowPassValue), []);

  return (
    <TextInputComponent
      {...props}
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={toggleShowPassword} edge="end">
              <Icon icon={showPassword ? 'Eye' : 'EyeOff'} color="dark90" />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export { PasswordInput };
