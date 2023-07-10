import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

type ButtonWrapperProps = {
  bgColor?: string;
  borderColor?: string;
  hoverColor?: string;
};

const ButtonWrapper = styled(Button)<ButtonWrapperProps>(
  ({ bgColor, borderColor, hoverColor }: ButtonWrapperProps) => ({
    backgroundColor: `${bgColor} !important`,
    borderColor: `${borderColor} !important`,
    borderRadius: '4px',
    textTransform: 'none',
    '&:hover': {
      borderColor: `${borderColor} !important`,
      backgroundColor: `${hoverColor} !important`,
    },
    '&:active': {
      border: `2px solid ${borderColor} !important`,
      backgroundColor: `${hoverColor} !important`,
    },
  })
);

export { ButtonWrapper };
