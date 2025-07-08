import type React from 'react';

import { useTheme, styled } from '@mui/material';
import { AlertCircle, Circle, CircleCheck } from 'tabler-icons-react';

export const DOT_SIZE = 24;
export const DOT_INNER_SIZE = 8;

export interface StepDotIconProps {
  completed: boolean;
  active: boolean;
  error: boolean;
}

export const StepDotIcon: React.FC<StepDotIconProps> = ({ completed, active, error }) => {
  const theme = useTheme();
  if (error) {
    return <AlertCircle size={DOT_SIZE} color={theme.palette.error.main} />;
  }
  if (completed) {
    return <CircleCheck size={DOT_SIZE} color={theme.palette.colors.mint60} fill={theme.palette.colors.lightWhite} />;
  }
  if (active) {
    return (
      <DotIconContainer glow>
        <Circle size={DOT_SIZE} color={theme.palette.colors.mint60} />
        <DotIconInner color={theme.palette.colors.mint60} />
      </DotIconContainer>
    );
  }
  // Upcoming: hollow circle only
  return <Circle size={DOT_SIZE} color={theme.palette.colors.dark30} />;
};
const DotIconContainer = styled('span')<{ glow?: boolean }>(({ glow, theme }) => ({
  display: 'inline-block',
  position: 'relative',
  width: DOT_SIZE,
  height: DOT_SIZE,
  boxShadow: glow ? `0 0 8px 2px ${theme.palette.colors.mintL2}` : undefined,
  borderRadius: '50%',
}));

const DotIconInner = styled('span')<{
  color: string;
}>(({ color }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: DOT_INNER_SIZE,
  height: DOT_INNER_SIZE,
  background: color,
  borderRadius: '50%',
  transform: 'translate(-50%, -50%)',
}));
