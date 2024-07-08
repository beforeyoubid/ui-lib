import { InputAdornment, styled } from '@mui/material';

import { Icon, type IconProps } from './Icon';
import { Typography } from './Typography';

export const Adornment = ({
  adornment,
  position,
  icon,
  showBorder = true,
}: {
  adornment?: string | React.ReactNode;
  position: 'start' | 'end';
  icon?: IconProps['icon'];
  showBorder?: boolean;
}) => {
  if (adornment && icon) {
    throw new Error('cannot have both adornment and leadingIcon');
  }
  if (icon) {
    return (
      <StyledInputAdornment
        position={position}
        icon
        className="icon-adornment"
        disablePointerEvents
        showBorder={showBorder}
      >
        <Icon icon={icon} color="dark75" size="18" />
      </StyledInputAdornment>
    );
  }
  if (!adornment) return null;
  if (!(typeof adornment === 'string')) {
    return (
      <StyledInputAdornment position={position} disablePointerEvents showBorder={showBorder}>
        {adornment}
      </StyledInputAdornment>
    );
  }
  return (
    <StyledInputAdornment position={position} showBorder={showBorder}>
      <Typography color="dark60" class="medium" size="base">
        {adornment}
      </Typography>
    </StyledInputAdornment>
  );
};

export const StyledInputAdornment = styled(InputAdornment, {
  shouldForwardProp: prop => prop !== 'icon' && prop !== 'showBorder',
})<{ icon?: boolean; showBorder?: boolean }>`
  position: relative;
  padding: ${({ theme }) => theme.spacing(0, 1, 0, 1.75)};

  ${({ position }) => (position === 'start' ? ':after' : ':before')} {
    position: absolute;
    content: ${({ icon }) => (icon ? 'unset' : `''`)};
    height: 45px;
    background-color: ${({ theme }) => theme.palette.colors.dark45};
    width: 1px;
    display: ${({ showBorder = true }) => (showBorder ? 'block' : 'none')};
    ${({ position }) => (position === 'start' ? 'right' : 'left')}: 0;
    top: -${({ theme }) => theme.spacing(2.75)};
  }
`;
