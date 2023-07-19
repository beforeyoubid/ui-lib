import React, { useCallback, useState } from 'react';
import TextInput, { TextInputProps } from '../TextInput';
import { IconButton, InputAdornment, TextFieldProps } from '@mui/material';
import { Icon } from '../Icon';

export type PasswordInputProps = TextInputProps & TextFieldProps;

const PasswordInput = (props: PasswordInputProps) => {
  // Variables to shouw and hide password
  const [showPassword, setShowPassword] = useState<boolean>(false);

  //Function to toggle showPassword values
  const toggleShowPassword = useCallback(() => setShowPassword(previousShowPassValue => !previousShowPassValue), []);

  return (
    <TextInput
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
