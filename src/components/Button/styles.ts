import { styled, Button } from '@mui/material';

type ButtonWrapperProps = {
  height: string;
  width: string;
  bgColor?: string;
  borderColor?: string;
  padding: string;
  hoverColor?: string;
};

const ButtonWrapper = styled(Button)<ButtonWrapperProps>(
  ({ bgColor, borderColor, padding, height, width, hoverColor }: ButtonWrapperProps) => ({
    backgroundColor: `${bgColor} !important`,
    borderColor: `${borderColor} !important`,
    height: height,
    width: width,
    padding: padding,
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
