import React, { useMemo } from 'react';
import * as Icons from 'tabler-icons-react';
import * as CustomIcons from './Custom';

import { type Colors } from '../../theme.types';
import { colorPalette } from '../../mui-theme';

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

const Icon = React.memo(IconNoMemo);
export { Icon };
