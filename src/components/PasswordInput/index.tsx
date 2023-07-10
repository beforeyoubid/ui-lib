import React, { useState } from 'react';
import TextInputComponent, { TextInputComponentProps } from '../TextInput';
import { IconButton, InputAdornment, TextFieldProps } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export type PasswordInputComponentProps = TextInputComponentProps & TextFieldProps;

const PasswordInput = (props: PasswordInputComponentProps) => {
  // Variables to shouw and hide password
  const [showPassword, setShowPOassword] = useState<boolean>(false);

  //Function to toggle showPassword values

  const toggleShowPassword = () => {
    setShowPOassword(previousShowPassValue => !previousShowPassValue);
  };

  return (
    <TextInputComponent
      {...props}
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={toggleShowPassword} edge="end">
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordInput;
