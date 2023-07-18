import React, { useCallback, useState } from 'react';
import TextInput, { TextInputProps } from '../TextInput';
import { IconButton, InputAdornment, TextFieldProps } from '@mui/material';
import { Eye, EyeOff } from 'tabler-icons-react';

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
              {showPassword ? <Eye /> : <EyeOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export { PasswordInput };
