import type React from 'react';

import { Fade, Tooltip as MuiTooltip } from '@mui/material';

import { Button, type ButtonProps } from './Button';

export type TooltipButtonProps = ButtonProps & {
  /** Tooltip content shown when hovering the button */
  tooltip: React.ReactNode;
};

/**
 *
 * @param tooltip - The tooltip content to display when hovering the button
 * @param disabled - Whether the button is disabled
 * @param sx - Additional styles to apply to the button
 * @param rest - Additional props to pass to the button
 * @returns
 */
export function TooltipButton({ tooltip, disabled, sx, ...rest }: TooltipButtonProps) {
  const mergedSx = tooltip ? { cursor: 'help', ...sx } : sx;

  return (
    <MuiTooltip title={tooltip} arrow TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
      <span style={{ display: 'inline-flex' }}>
        <Button disabled={disabled} sx={mergedSx} {...rest} />
      </span>
    </MuiTooltip>
  );
}
