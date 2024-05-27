import type React from 'react';
import { type SVGAttributes } from 'react';
import { memo } from 'react';

import { colorPalette } from '../../mui-theme';
import { type Colors } from '../../theme.types';

export interface TablerIconProps extends SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
}
export type IconComponent = React.FC<TablerIconProps>;

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

const Icon = memo(IconNoMemo);
export { Icon };
