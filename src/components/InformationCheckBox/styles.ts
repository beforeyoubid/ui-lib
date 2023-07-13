import styled from '@emotion/styled';
import { Checkbox } from '@mui/material';

const CheckBoxForInformationCheckbox = styled(Checkbox)({
  height: 18,
  width: 18,
});

const CheckboxTitleRow = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
});
export { CheckBoxForInformationCheckbox, CheckboxTitleRow };
