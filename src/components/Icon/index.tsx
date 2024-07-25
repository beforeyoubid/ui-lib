import type React from 'react';
import { memo } from 'react';

import { colorPalette } from '../../mui-theme';

import { type IconProps } from './types';

function IconNoMemo(props: IconProps) {
  const { icon: IconComponent } = props;

  return <IconComponent color={colorPalette[props.color]} className={props.className} size={props.size} />;
}

export const Icon = memo(IconNoMemo);
