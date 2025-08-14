import { memo } from 'react';

import { styled } from '@mui/material';

import { type Colors } from '../../mui-theme';

/**
 * Divider orientation relative to the parent layout.
 * - `horizontal`: renders a horizontal line, width driven by `fullWidth`/`length`, height by `thickness`.
 * - `vertical`: renders a vertical line, height driven by `length`, width by `thickness`.
 */
export type DividerOrientation = 'horizontal' | 'vertical';

/**
 * Divider visual style.
 * - `solid`: continuous line.
 * - `dashed`: repeating dash-gap pattern (CSS gradient based for performance).
 */
export type DividerVariant = 'solid' | 'dashed';

/**
 * Props for the Divider component.
 * Keep it presentational (no state). All sizing is explicit to be predictable across layouts.
 */
export type DividerProps = {
  /** Orientation of the divider. Default: `horizontal`. */
  orientation?: DividerOrientation;
  /** Visual style of the divider. Default: `solid`. */
  variant?: DividerVariant;
  /** Theme color token used for the line. Default: `dark15`. */
  color?: keyof Colors;
  /** Thickness of the line in pixels. Default: `1`. */
  thickness?: number;
  /**
   * Length along the main axis. For `horizontal`, this is width; for `vertical`, this is height.
   * Accepts number (px) or string (e.g., '50%').
   */
  length?: number | string;
  /** Dash size in pixels for `dashed` variant. Default: `6`. */
  dashLength?: number;
  /** Gap size between dashes in pixels for `dashed` variant. Default: `6`. */
  dashSpacing?: number;
  /** Whether to round the dash caps. Default: `true`. */
  rounded?: boolean;
  /** Convenience to stretch horizontal dividers to 100% width. Default: `true`. */
  fullWidth?: boolean;
  /** Optional CSS class name. */
  className?: string;
};

/**
 * Divider component
 */
function DividerNoMemo({
  orientation = 'horizontal',
  variant = 'solid',
  color = 'dark15',
  thickness = 1,
  length,
  dashLength = 6,
  dashSpacing = 6,
  rounded = true,
  fullWidth = true,
  className,
}: DividerProps) {
  const isHorizontal = orientation === 'horizontal';
  const sizeStyle = isHorizontal
    ? { width: fullWidth ? '100%' : length, height: thickness }
    : { height: length, width: thickness };

  if (variant === 'solid') {
    return <Solid className={className} style={sizeStyle} color={color} />;
  }

  return (
    <Dashed
      className={className}
      style={sizeStyle}
      orientation={orientation}
      color={color}
      thickness={thickness}
      dashLength={dashLength}
      dashSpacing={dashSpacing}
      rounded={rounded}
    />
  );
}

export const Divider = memo(DividerNoMemo);

const Solid = styled('div')<{ color: keyof Colors }>(({ theme, color }) => ({
  backgroundColor: theme.palette.colors[color],
  minWidth: 1,
  minHeight: 1,
}));

const Dashed = styled('div')<{
  orientation: DividerOrientation;
  color: keyof Colors;
  thickness: number;
  dashLength: number;
  dashSpacing: number;
  rounded: boolean;
}>(({ theme, orientation, color, thickness, dashLength, dashSpacing, rounded }) => {
  const isHorizontal = orientation === 'horizontal';
  const lengthAxis = isHorizontal ? 'to right' : 'to bottom';
  const colorValue = theme.palette.colors[color];
  const start = 0;
  const endDash = `${dashLength}px`;
  const startGap = `${dashLength}px`;
  const endGap = `${dashLength + dashSpacing}px`;
  return {
    width: '100%',
    height: '100%',
    backgroundImage: `repeating-linear-gradient(${lengthAxis}, ${colorValue} ${start}, ${colorValue} ${endDash}, transparent ${startGap}, transparent ${endGap})`,
    borderRadius: rounded ? thickness / 2 : 0,
  };
});

export default Divider;
