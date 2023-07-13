import React from 'react';
import { Typography } from '../Typography';
import { styled } from '@mui/material/styles';
import { Checkbox } from '@mui/material';

type InformationCheckboxProps = {
  isSelected: boolean;
};
const InformationCheckbox: React.FC<InformationCheckboxProps> = props => {
  return (
    <Wrapper>
      <Row>
        <CheckBox />
        <Typography class="bold" size="base" color="dark90" padding={0}>
          Registered for GST
        </Typography>
      </Row>

      <Description class="roman" size="sm" color="dark90" padding={0}>
        Businesses registered for GST have to collect this extra money (one-eleventh of the sale price) from their
        customers. This is paid to the Australian Taxation Office (ATO) when it's due.
      </Description>
    </Wrapper>
  );
};

const Wrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.colors.lightL2,
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
