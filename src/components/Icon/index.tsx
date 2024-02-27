import React, { useMemo, memo } from 'react';

import * as Icons from 'tabler-icons-react';

import { colorPalette } from '../../mui-theme';
import { type Colors } from '../../theme.types';

import * as CustomIcons from './Custom';

export type IconProps = {
  icon: keyof typeof Icons | keyof typeof CustomIcons;
  size?: string | number;
  color: keyof Colors;
  className?: string;
};

const isIcon = (icon: IconProps['icon']): icon is keyof typeof Icons =>
  Object.prototype.hasOwnProperty.call(Icons, icon);

function IconNoMemo(props: IconProps) {
  const IconComponent = useMemo(() => (isIcon(props.icon) ? Icons[props.icon] : CustomIcons[props.icon]), [props.icon]);

  return <IconComponent color={colorPalette[props.color]} className={props.className} size={props.size} />;
}

const Icon = memo(IconNoMemo);
export { Icon };
