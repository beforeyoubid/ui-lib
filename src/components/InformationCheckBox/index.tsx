import React from 'react';
import { Checkbox, styled } from '@mui/material';
import { Typography } from '../Typography';
import { getInfoCheckboxBackgroundColor } from './utils';

type InformationCheckboxProps = {
  title: string;
  description: string;
  variant?: 'info' | 'warning' | 'error';
  checked: boolean;
  onChange: (event: React.ChangeEvent, checked: boolean) => void;
};
const InformationCheckbox: React.FC<InformationCheckboxProps> = ({
  title,
  description,
  variant = 'info',
  checked,
  onChange,
}) => {
  return (
    <Wrapper variant={variant}>
      <Row>
        <CheckBox checked={checked} onChange={onChange} />
        <Typography class="bold" size="base" color="dark90" padding={0}>
          {title}
        </Typography>
      </Row>

      <Description class="roman" size="sm" color="dark90" padding={0}>
        {description}
      </Description>
    </Wrapper>
  );
};

const Wrapper = styled('div')(({ variant }: { variant: string }) => ({
  backgroundColor: getInfoCheckboxBackgroundColor(variant),
  display: 'flex',
  padding: '16px 12px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  borderRadius: 4,
  gap: 10,
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

const Row = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: 10,
});

const Description = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(3.5),
}));
export default InformationCheckbox;
