import React from 'react';
import { Checkbox, styled } from '@mui/material';
import { Typography } from '../Typography';
import { getInfoCheckboxBackgroundColor } from './utils';
import { Flex } from '../Flex';
import { theme } from '../../mui-theme';

import { automation } from '../../utils';

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
  return (
    <Wrapper
      direction="column"
      width="100%"
      variant={variant}
      align="stretch"
      {...automation([automationKey], { title })}
    >
      <Flex direction="row" justify="flex-start" align="center" gap={theme.spacing(1.25)}>
        <CheckBox checked={checked} onChange={onChange} disabled={disabled} />
        <Typography class="bold" size="base" color="dark90" padding={0}>
          {title}
        </Typography>
      </Flex>
      {description && (
        <Description class="roman" size="sm" color="dark90" padding={0}>
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

const CheckBox = styled(Checkbox)(({ theme }) => ({
  height: 18,
  width: 18,
  color: theme.palette.colors.dark30,
  backgroundColor: theme.palette.colors.lightWhite,
  '&.Mui-checked': {
    color: theme.palette.colors.mint60,
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(3.5),
}));
