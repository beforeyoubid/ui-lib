import type React from 'react';

import { styled, useTheme } from '@mui/material';

import { automation } from '../../utils';
import { Flex } from '../Flex';
import { Typography } from '../Typography';

/**
 * Visual variants supported by `InfoBox`.
 * Controls the default background and border colors picked from the theme.
 */
export type InfoBoxVariant = 'info' | 'success' | 'warning' | 'error';

/**
 * Props for the `InfoBox` component.
 *
 * - `automationKey` is required and is spread onto the root via the `automation` util
 *   to enable deterministic test selectors and analytics hooks.
 * - `variant` selects preset colors (can be overridden via `backgroundColor`/`borderColor`).
 * - `icon` renders to the left of the content and is optional.
 * - `children` is the message content; use inline components (e.g., `LinkButton`) for links.
 * - `backgroundColor` and `borderColor` allow full visual overrides when needed.
 * - `className` and `style` are forwarded to the root for external styling.
 */
export type InfoBoxProps = {
  /** Mandatory automation key for data attributes */
  automationKey: string;
  variant?: InfoBoxVariant;
  icon?: React.ReactNode;
  children: React.ReactNode;
  borderColor?: string;
  backgroundColor?: string;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * InfoBox
 *
 * Lightweight, flexible inline information banner. It displays an optional icon
 * to the left and the provided `children` as content using project `Typography`.
 *
 * Accessibility
 * - Uses semantic `div` via `Flex` and relies on surrounding context (no ARIA role by default).
 * - Content is plain text/inline elements; links should be provided via children.
 *
 * Styling
 * - Color scheme is derived from `variant` with optional overrides.
 * - Spacing and radius match existing component patterns for visual consistency.
 */
export const InfoBox: React.FC<InfoBoxProps> = ({
  automationKey,
  variant = 'info',
  icon,
  children,
  borderColor,
  backgroundColor,
  className,
  style,
}) => {
  const theme = useTheme();
  const { bg, border } = getInfoBoxColors(theme, variant, backgroundColor, borderColor);

  return (
    <Wrapper
      className={className}
      style={style}
      bg={bg}
      border={border}
      direction="row"
      align="center"
      gap={theme.spacing(1.5)}
      {...automation([automationKey])}
    >
      {icon && <IconBox>{icon}</IconBox>}
      <Typography class="roman" size="base" color="dark90">
        {children}
      </Typography>
    </Wrapper>
  );
};

/**
 * Compute background and border colors for the given `variant`,
 * allowing caller-provided overrides to take precedence.
 */
function getInfoBoxColors(theme: any, variant: InfoBoxVariant, bgOverride?: string, borderOverride?: string) {
  switch (variant) {
    case 'success':
      return {
        bg: bgOverride || theme.palette.colors.success15,
        border: borderOverride || theme.palette.colors.success60,
      };
    case 'warning':
      return {
        bg: bgOverride || theme.palette.colors.warning15,
        border: borderOverride || theme.palette.colors.warning45,
      };
    case 'error':
      return {
        bg: bgOverride || theme.palette.colors.error15,
        border: borderOverride || theme.palette.colors.error60,
      };
    case 'info':
    default:
      return {
        bg: bgOverride || theme.palette.colors.lightL1,
        border: borderOverride || theme.palette.colors.mint60,
      };
  }
}

const Wrapper = styled(Flex)<{ bg: string; border: string }>(({ bg, border, theme }) => ({
  backgroundColor: bg,
  border: `1px solid ${border}`,
  borderRadius: 8,
  padding: `${theme.spacing(2)} ${theme.spacing(2)}`,
  width: '100%',
}));

const IconBox = styled('span')(() => ({
  display: 'flex',
  alignItems: 'center',
  fontSize: 0,
}));
