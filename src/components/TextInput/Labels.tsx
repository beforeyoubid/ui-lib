import React, { memo } from 'react';

import { Icon } from '../Icon';
import { Tooltip, type TooltipProps } from '../ToolTip';
import { Typography } from '../Typography';

import { HelperTextErrorWrapper, LabelRowContainer, RowContainer } from './styles';

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
  tooltip,
  tooltipProps,
}: {
  labelText: string;
  required: boolean;
  isOptional: boolean;
  id?: string;
  tooltip?: string;
  tooltipProps?: TooltipProps;
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
    {tooltip && (
      <Tooltip
        title={tooltip}
        iconName={tooltipProps?.iconName}
        iconColor={tooltipProps?.iconColor}
        iconSize={tooltipProps?.iconSize}
      />
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

const TextFieldHint = memo(TextFieldHintNoMemo);
const TextFieldLabel = memo(TextFieldLabelNoMemo);
const TextFieldErrorLabel = memo(TextFieldErrorLabelNoMemo);

export { TextFieldHint, TextFieldLabel, TextFieldErrorLabel };
