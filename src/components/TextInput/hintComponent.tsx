import React from 'react';
import { Typography } from '../Typography';
import { HelperErrorText, HelperText, HelperTextErrorIcon, LabelIcon, RowContainer } from './styles';

const TextFieldHint = ({ hintText }: { hintText: string }) => (
  <HelperText>
    <Typography class="roman" size="sm" color="dark75" padding={0}>
      {hintText}
    </Typography>
  </HelperText>
);

const TextFieldLabel = ({ labelText }: { labelText: string }) => (
  <RowContainer>
    <Typography class="medium" size="base" color="dark90" padding={0}>
      {labelText}
    </Typography>

    <LabelIcon>
      <Typography class="medium" size="sm" color="mint60" padding={0}>
        *
      </Typography>
    </LabelIcon>
  </RowContainer>
);

const TextFieldErrorLabel = ({ errorText }: { errorText: string }) => (
  <RowContainer>
    <HelperTextErrorIcon icon="AlertCircle" color="error75" />
    <HelperErrorText>
      <Typography class="roman" size="sm" color="error75" padding={0}>
        {errorText}
      </Typography>
    </HelperErrorText>
  </RowContainer>
);

export { TextFieldHint, TextFieldLabel, TextFieldErrorLabel };
