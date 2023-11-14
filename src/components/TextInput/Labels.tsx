import React from 'react';
import { Typography } from '../Typography';
import { HelperTextErrorWrapper, LabelRowContainer, RowContainer } from './styles';
import { Icon } from '../Icon';

const TextFieldHintNoMemo = ({ hintText }: { hintText: string }) => (
  <Typography class="roman" size="sm" color="dark75" padding={0}>
    {hintText}
  </Typography>
);

const TextFieldLabelNoMemo = ({
  labelText,
  required,
  isOptional,
  id,
}: {
  labelText: string;
  required: boolean;
  isOptional: boolean;
  id?: string;
}) => (
  <LabelRowContainer required={required} id={id}>
    <Typography class="medium" size="base" color="dark90" padding={0}>
      {labelText}
    </Typography>

    {required && (
      <span>
        <Typography class="bold" size="xs" color="mint60" padding={0}>
          *
        </Typography>
      </span>
    )}
    {!required && isOptional && (
      <span>
        <Typography class="roman" size="sm" color="dark75" padding={0}>
          (optional)
        </Typography>
      </span>
    )}
  </LabelRowContainer>
);

const TextFieldErrorLabelNoMemo = ({ errorText }: { errorText: string }) => (
  <RowContainer>
    <HelperTextErrorWrapper align="center" justify="center">
      <Icon icon="AlertCircle" color="error75" />
    </HelperTextErrorWrapper>
    <Typography class="roman" size="sm" color="error75" padding={0}>
      {errorText}
    </Typography>
  </RowContainer>
);

const TextFieldHint = React.memo(TextFieldHintNoMemo);
const TextFieldLabel = React.memo(TextFieldLabelNoMemo);
const TextFieldErrorLabel = React.memo(TextFieldErrorLabelNoMemo);

export { TextFieldHint, TextFieldLabel, TextFieldErrorLabel };
