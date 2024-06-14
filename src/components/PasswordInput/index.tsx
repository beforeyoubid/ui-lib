import React, { useCallback, useState } from 'react';

import { IconButton, InputAdornment, type TextFieldProps } from '@mui/material';
import { Eye, EyeOff } from 'tabler-icons-react';

import { Icon } from '../Icon';
import { TextInput, type TextInputProps } from '../TextInput';

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
              <Icon icon={showPassword ? Eye : EyeOff} color="dark90" />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export { PasswordInput };
