import React from 'react';
import { Typography } from '../Typography';
import { HelperErrorText, HelperText, HelperTextErrorWrapper, LabelRowContainer, RowContainer } from './styles';
import { Icon } from '../Icon';

const TextFieldHintNoMemo = ({ hintText }: { hintText: string }) => (
  <HelperText>
    <Typography class="roman" size="sm" color="dark75" padding={0}>
      {hintText}
    </Typography>
  </HelperText>
);

const TextFieldLabelNoMemo = ({ labelText, showMandatory }: { labelText: string; showMandatory: boolean }) => (
  <LabelRowContainer>
    <Typography class="medium" size="base" color="dark90" padding={0}>
      {labelText}
    </Typography>

    {showMandatory && (
      <span>
        <Typography class="medium" size="xs" color="mint60" padding={0}>
          *
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
    <HelperErrorText>
      <Typography class="roman" size="sm" color="error75" padding={0}>
        {errorText}
      </Typography>
    </HelperErrorText>
  </RowContainer>
);

const TextFieldHint = React.memo(TextFieldHintNoMemo);
const TextFieldLabel = React.memo(TextFieldLabelNoMemo);
const TextFieldErrorLabel = React.memo(TextFieldErrorLabelNoMemo);

export { TextFieldHint, TextFieldLabel, TextFieldErrorLabel };
