import type React from 'react';
import { memo } from 'react';

import { colorPalette } from '../../mui-theme';
import { type Colors } from '../../theme.types';

import { type IconComponent } from './types';

export type IconProps = {
  size?: string | number;
  color: keyof Colors;
  icon: IconComponent;
  className?: string;
};

function IconNoMemo(props: IconProps) {
  const { icon: IconComponent } = props;

  return <IconComponent color={colorPalette[props.color]} className={props.className} size={props.size} />;
}

export const Icon = memo(IconNoMemo);

export type { IconComponent };
