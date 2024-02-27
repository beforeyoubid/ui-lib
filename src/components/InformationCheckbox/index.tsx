import type React from 'react';

import { styled, useTheme } from '@mui/material';

import { automation } from '../../utils';
import { RawCheckbox } from '../Checkbox';
import { Flex } from '../Flex';
import { Typography } from '../Typography';

import { getInfoCheckboxBackgroundColor } from './utils';

export type InformationCheckboxProps = {
  title: string;
  description: string;
  variant?: 'info' | 'warning' | 'error';
  checked: boolean;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent, checked: boolean) => void;
  automationKey?: string;
};
export const InformationCheckbox: React.FC<InformationCheckboxProps> = ({
  title,
  description,
  checked,
  variant = 'info',
  disabled = false,
  onChange,
  automationKey,
}) => {
  const theme = useTheme();
  return (
    <Wrapper
      direction="column"
      width="100%"
      variant={variant}
      align="stretch"
      {...automation([automationKey], { title })}
    >
      <Flex direction="row" justify="flex-start" align="center" gap={theme.spacing(0.5)}>
        <RawCheckbox checked={checked} onChange={onChange} disabled={disabled} size="lg" />
        <Typography class="bold" size="base" color="dark90">
          {title}
        </Typography>
      </Flex>
      {description && (
        <Description class="roman" size="sm" color="dark90">
          {description}
        </Description>
      )}
    </Wrapper>
  );
};

const Wrapper = styled(Flex)<{ variant: string }>(({ theme, variant }) => ({
  backgroundColor: getInfoCheckboxBackgroundColor(theme, variant),
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  paddingLeft: theme.spacing(1.5),
  paddingRight: theme.spacing(1.5),
  gap: theme.spacing(1.25),
  borderRadius: 4,
}));

const Description = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(4.3),
}));
