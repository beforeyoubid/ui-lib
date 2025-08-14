import type React from 'react';

/**
 * Supported visual/behavioral variants for `SelectableCard`.
 * - `radio`: circular indicator; for mutually exclusive selections.
 * - `checkbox`: square checkbox; for multi-select.
 * - `option`: plan-style card; larger layout with check badge when selected.
 */
export type SelectableCardVariant = 'radio' | 'checkbox' | 'option';

/** Controlled props for `SelectableCard`. The parent owns selection state. */
export type SelectableCardProps = {
  /** Mandatory automation key for data attributes. */
  automationKey: string;
  /** Which variant to render. */
  variant: SelectableCardVariant;
  /** Whether the card is selected. */
  selected: boolean;
  /** Invoked on activation (click, Space, Enter). */
  onSelect: (event: React.MouseEvent | React.KeyboardEvent) => void;
  /** Disables interactions and dims visuals. */
  disabled?: boolean;
  /** Main title node. */
  title: React.ReactNode;
  /** Additional description (used primarily by `option`). */
  description?: React.ReactNode;
  /** Optional icon to the left of title (radio/checkbox). */
  leftIcon?: React.ReactNode;
  /** Optional right-side adornment (radio/checkbox). */
  rightAdornment?: React.ReactNode;
  /** Footer area (option) for prices or meta. */
  footer?: React.ReactNode;
  /** Root element id. */
  id?: string;
  /** Accessible label. */
  ariaLabel?: string;
  /** Stretch to container width. Default: true. */
  fullWidth?: boolean;
};
